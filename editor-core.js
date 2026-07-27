// ==== Earth Simulator — shared editor core ====
// Used by editor.html (OBJECT), event.html (EVENT), age.html (AGE).
// Everything is stored in the browser's localStorage — nothing leaves the browser
// except the two explicit network calls (Claude API, GitHub API), both using
// credentials the person enters themselves in SETTINGS.

// ---- Settings (Claude API key, GitHub token/repo) ----
function getSettings(){
  try{ return JSON.parse(localStorage.getItem('earthsim_editor_settings')||'{}'); }catch(e){ return {}; }
}
function saveSettingsObj(s){
  try{ localStorage.setItem('earthsim_editor_settings', JSON.stringify(s)); }catch(e){}
}

function wireSettingsModal(){
  const s=getSettings();
  const apiKeyEl=document.getElementById('set-api-key');
  const modelEl=document.getElementById('set-model');
  const ghTokenEl=document.getElementById('set-gh-token');
  const ghRepoEl=document.getElementById('set-gh-repo');
  const ghPathEl=document.getElementById('set-gh-path');
  if(apiKeyEl)apiKeyEl.value=s.apiKey||'';
  if(modelEl)modelEl.value=s.model||'claude-sonnet-5';
  if(ghTokenEl)ghTokenEl.value=s.ghToken||'';
  if(ghRepoEl)ghRepoEl.value=s.ghRepo||'';
  if(ghPathEl)ghPathEl.value=s.ghPath||'';
}
function openSettings(){
  wireSettingsModal();
  document.getElementById('settings-modal').style.display='flex';
}
function closeSettings(){
  document.getElementById('settings-modal').style.display='none';
}
function saveSettingsFromForm(){
  const s={
    apiKey:document.getElementById('set-api-key').value.trim(),
    model:document.getElementById('set-model').value.trim()||'claude-sonnet-5',
    ghToken:document.getElementById('set-gh-token').value.trim(),
    ghRepo:document.getElementById('set-gh-repo').value.trim(),
    ghPath:document.getElementById('set-gh-path').value.trim(),
  };
  saveSettingsObj(s);
  closeSettings();
  toast('Settings saved (stored locally in this browser only).');
}

// ---- Slot + version storage ----
function loadSlots(namespace, seedData, slotCount){
  slotCount=slotCount||100;
  const key='earthsim_editor_'+namespace+'_slots';
  try{
    const raw=localStorage.getItem(key);
    if(raw){
      const slots=JSON.parse(raw);
      if(Array.isArray(slots)&&slots.length===slotCount) return slots;
    }
  }catch(e){}
  const slots=[];
  for(let i=0;i<slotCount;i++){
    slots.push(seedData[i]?{...seedData[i],empty:false}:{name:'Empty Slot '+(i+1),source:'',colors:{main:'#5dade2'},empty:true});
  }
  saveSlots(namespace,slots);
  return slots;
}
function saveSlots(namespace,slots){
  try{ localStorage.setItem('earthsim_editor_'+namespace+'_slots',JSON.stringify(slots)); }catch(e){
    toast('Could not save (browser storage full or unavailable).');
  }
}
function getVersions(namespace,slotId){
  try{ return JSON.parse(localStorage.getItem('earthsim_editor_'+namespace+'_v_'+slotId)||'[]'); }catch(e){ return []; }
}
function pushVersion(namespace,slotId,source,name,extra){
  const versions=getVersions(namespace,slotId);
  versions.push(Object.assign({v:versions.length+1,source,name,time:Date.now()},extra||{}));
  try{ localStorage.setItem('earthsim_editor_'+namespace+'_v_'+slotId,JSON.stringify(versions)); }catch(e){}
  return versions;
}

// ---- Claude API (direct browser call using the person's own key) ----
async function callClaude(promptText, currentSource, systemHint){
  const s=getSettings();
  if(!s.apiKey){ throw new Error('No Claude API key set. Open SETTINGS first.'); }
  const model=s.model||'claude-sonnet-5';
  const userMsg=`${systemHint}\n\nCurrent source:\n\`\`\`js\n${currentSource||'(empty — create new)'}\n\`\`\`\n\nInstruction: ${promptText}\n\nRespond with ONLY the complete updated JavaScript, no explanation, no markdown code fences.`;
  const res=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'x-api-key':s.apiKey,
      'anthropic-version':'2023-06-01',
      'anthropic-dangerous-direct-browser-access':'true'
    },
    body:JSON.stringify({model,max_tokens:2000,messages:[{role:'user',content:userMsg}]})
  });
  if(!res.ok){
    const errText=await res.text().catch(()=>String(res.status));
    throw new Error('Claude API error '+res.status+': '+errText.slice(0,300));
  }
  const data=await res.json();
  const text=(data.content||[]).map(b=>b.text||'').join('');
  return text.replace(/```js|```javascript|```/g,'').trim();
}

// ---- GitHub push (Contents API, person's own PAT) ----
async function pushToGithub(path,content,message){
  const s=getSettings();
  if(!s.ghToken||!s.ghRepo){ throw new Error('No GitHub token/repo set. Open SETTINGS first.'); }
  const [owner,repo]=s.ghRepo.split('/');
  if(!owner||!repo){ throw new Error('GitHub repo should be in "owner/repo" form.'); }
  const fullPath=(s.ghPath?s.ghPath.replace(/\/$/,'')+'/':'')+path;
  const url=`https://api.github.com/repos/${owner}/${repo}/contents/${fullPath}`;
  let sha=null;
  try{
    const getRes=await fetch(url,{headers:{Authorization:`Bearer ${s.ghToken}`,Accept:'application/vnd.github+json'}});
    if(getRes.ok){ const j=await getRes.json(); sha=j.sha; }
  }catch(e){}
  const body={message:message||('Update '+fullPath+' from Earth Simulator editor'),content:btoa(unescape(encodeURIComponent(content)))};
  if(sha)body.sha=sha;
  const putRes=await fetch(url,{
    method:'PUT',
    headers:{Authorization:`Bearer ${s.ghToken}`,Accept:'application/vnd.github+json','Content-Type':'application/json'},
    body:JSON.stringify(body)
  });
  if(!putRes.ok){ const t=await putRes.text().catch(()=>String(putRes.status)); throw new Error('GitHub error '+putRes.status+': '+t.slice(0,300)); }
  return await putRes.json();
}

// ---- tiny toast helper ----
let _toastTimer=null;
function toast(msg){
  let el=document.getElementById('toast-msg');
  if(!el){
    el=document.createElement('div');
    el.id='toast-msg';
    el.style.cssText='position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#0a1628;border:1px solid #4ecb71;color:#4ecb71;padding:8px 16px;font-family:"Courier New",monospace;font-size:12px;z-index:9999;max-width:80vw;text-align:center';
    document.body.appendChild(el);
  }
  el.textContent=msg;
  el.style.display='block';
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>{el.style.display='none';},4000);
}
