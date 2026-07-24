const SEED=[
  {
    "name": "Hadean (4500-4000 Mya)",
    "source": "{\n  \"id\": \"hadean\",\n  \"name_en\": \"Hadean\",\n  \"name_ja\": \"\\u51a5\\u738b\\u4ee3\",\n  \"mya_start\": 4500,\n  \"mya_end\": 4000,\n  \"temp_c\": 230,\n  \"atmosphere_pct\": {\n    \"N2\": 15,\n    \"CO2\": 80,\n    \"H2O\": 4,\n    \"H2\": 0.5,\n    \"O2\": 0,\n    \"CH4\": 0,\n    \"Ar\": 0.5\n  },\n  \"cloud_cover_0to1\": 0.9,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#8b0000\"\n}"
  },
  {
    "name": "Archean (4000-2500 Mya)",
    "source": "{\n  \"id\": \"archean\",\n  \"name_en\": \"Archean\",\n  \"name_ja\": \"\\u592a\\u53e4\\u4ee3\",\n  \"mya_start\": 4000,\n  \"mya_end\": 2500,\n  \"temp_c\": 70,\n  \"atmosphere_pct\": {\n    \"N2\": 70,\n    \"CO2\": 15,\n    \"H2O\": 10,\n    \"H2\": 2,\n    \"O2\": 0,\n    \"CH4\": 2,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.75,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#6e2c00\"\n}"
  },
  {
    "name": "Proterozoic (2500-720 Mya)",
    "source": "{\n  \"id\": \"proterozoic\",\n  \"name_en\": \"Proterozoic\",\n  \"name_ja\": \"\\u539f\\u751f\\u4ee3\",\n  \"mya_start\": 2500,\n  \"mya_end\": 720,\n  \"temp_c\": 30,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 5,\n    \"H2O\": 2,\n    \"H2\": 0.2,\n    \"O2\": 5,\n    \"CH4\": 0.5,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.4,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#7d6608\"\n}"
  },
  {
    "name": "Snowball Earth (720-635 Mya)",
    "source": "{\n  \"id\": \"snowball\",\n  \"name_en\": \"Snowball Earth\",\n  \"name_ja\": \"\\u5168\\u7403\\u51cd\\u7d50\",\n  \"mya_start\": 720,\n  \"mya_end\": 635,\n  \"temp_c\": -50,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 0.1,\n    \"H2O\": 0.5,\n    \"H2\": 0,\n    \"O2\": 5,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.8,\n  \"is_snowball_earth\": true,\n  \"display_color\": \"#aed6f1\"\n}"
  },
  {
    "name": "Ediacaran (635-538 Mya)",
    "source": "{\n  \"id\": \"ediacaran\",\n  \"name_en\": \"Ediacaran\",\n  \"name_ja\": \"\\u30a8\\u30c7\\u30a3\\u30a2\\u30ab\\u30e9\\u7d00\",\n  \"mya_start\": 635,\n  \"mya_end\": 538,\n  \"temp_c\": 20,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 1,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 10,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.5,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1a5276\"\n}"
  },
  {
    "name": "Cambrian (538-485 Mya)",
    "source": "{\n  \"id\": \"cambrian\",\n  \"name_en\": \"Cambrian\",\n  \"name_ja\": \"\\u30ab\\u30f3\\u30d6\\u30ea\\u30a2\\u7d00\",\n  \"mya_start\": 538,\n  \"mya_end\": 485,\n  \"temp_c\": 22,\n  \"atmosphere_pct\": {\n    \"N2\": 77,\n    \"CO2\": 4,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 13,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.5,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#117a65\"\n}"
  },
  {
    "name": "Ordovician (485-443 Mya)",
    "source": "{\n  \"id\": \"ordovician\",\n  \"name_en\": \"Ordovician\",\n  \"name_ja\": \"\\u30aa\\u30eb\\u30c9\\u30d3\\u30b9\\u7d00\",\n  \"mya_start\": 485,\n  \"mya_end\": 443,\n  \"temp_c\": 25,\n  \"atmosphere_pct\": {\n    \"N2\": 76,\n    \"CO2\": 8,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 14,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.45,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#0e6655\"\n}"
  },
  {
    "name": "Silurian (443-419 Mya)",
    "source": "{\n  \"id\": \"silurian\",\n  \"name_en\": \"Silurian\",\n  \"name_ja\": \"\\u30b7\\u30eb\\u30eb\\u7d00\",\n  \"mya_start\": 443,\n  \"mya_end\": 419,\n  \"temp_c\": 17,\n  \"atmosphere_pct\": {\n    \"N2\": 75,\n    \"CO2\": 5,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 16,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.4,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1e8449\"\n}"
  },
  {
    "name": "Devonian (419-358 Mya)",
    "source": "{\n  \"id\": \"devonian\",\n  \"name_en\": \"Devonian\",\n  \"name_ja\": \"\\u30c7\\u30dc\\u30f3\\u7d00\",\n  \"mya_start\": 419,\n  \"mya_end\": 358,\n  \"temp_c\": 20,\n  \"atmosphere_pct\": {\n    \"N2\": 74,\n    \"CO2\": 3,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 17,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.4,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#d4ac0d\"\n}"
  },
  {
    "name": "Carbonifer. (358-298 Mya)",
    "source": "{\n  \"id\": \"carboniferous\",\n  \"name_en\": \"Carbonifer.\",\n  \"name_ja\": \"\\u77f3\\u70ad\\u7d00\",\n  \"mya_start\": 358,\n  \"mya_end\": 298,\n  \"temp_c\": 14,\n  \"atmosphere_pct\": {\n    \"N2\": 68,\n    \"CO2\": 1,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 30,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.5,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1d8348\"\n}"
  },
  {
    "name": "Permian (298-252 Mya)",
    "source": "{\n  \"id\": \"permian\",\n  \"name_en\": \"Permian\",\n  \"name_ja\": \"\\u30da\\u30eb\\u30e0\\u7d00\",\n  \"mya_start\": 298,\n  \"mya_end\": 252,\n  \"temp_c\": 16,\n  \"atmosphere_pct\": {\n    \"N2\": 75,\n    \"CO2\": 2,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.35,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#b7950b\"\n}"
  },
  {
    "name": "P-T Extinct. (252-248 Mya)",
    "source": "{\n  \"id\": \"pt_ext\",\n  \"name_en\": \"P-T Extinct.\",\n  \"name_ja\": \"P-T\\u5927\\u7d76\\u6ec5\",\n  \"mya_start\": 252,\n  \"mya_end\": 248,\n  \"temp_c\": 60,\n  \"atmosphere_pct\": {\n    \"N2\": 72,\n    \"CO2\": 20,\n    \"H2O\": 3,\n    \"H2\": 0,\n    \"O2\": 10,\n    \"CH4\": 2,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.9,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#e74c3c\"\n}"
  },
  {
    "name": "Triassic E. (248-230 Mya)",
    "source": "{\n  \"id\": \"triassic_e\",\n  \"name_en\": \"Triassic E.\",\n  \"name_ja\": \"\\u4e09\\u7573\\u7d00\\u524d\\u671f\",\n  \"mya_start\": 248,\n  \"mya_end\": 230,\n  \"temp_c\": 30,\n  \"atmosphere_pct\": {\n    \"N2\": 76,\n    \"CO2\": 4,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 16,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.3,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#ca6f1e\"\n}"
  },
  {
    "name": "Triassic L. (230-201 Mya)",
    "source": "{\n  \"id\": \"triassic_l\",\n  \"name_en\": \"Triassic L.\",\n  \"name_ja\": \"\\u4e09\\u7573\\u7d00\\u5f8c\\u671f\",\n  \"mya_start\": 230,\n  \"mya_end\": 201,\n  \"temp_c\": 25,\n  \"atmosphere_pct\": {\n    \"N2\": 76,\n    \"CO2\": 3,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 18,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.3,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#d35400\"\n}"
  },
  {
    "name": "Jurassic E. (201-175 Mya)",
    "source": "{\n  \"id\": \"jurassic_e\",\n  \"name_en\": \"Jurassic E.\",\n  \"name_ja\": \"\\u30b8\\u30e5\\u30e9\\u7d00\\u524d\\u671f\",\n  \"mya_start\": 201,\n  \"mya_end\": 175,\n  \"temp_c\": 20,\n  \"atmosphere_pct\": {\n    \"N2\": 77,\n    \"CO2\": 3,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 20,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.45,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#27ae60\"\n}"
  },
  {
    "name": "Jurassic L. (175-145 Mya)",
    "source": "{\n  \"id\": \"jurassic_l\",\n  \"name_en\": \"Jurassic L.\",\n  \"name_ja\": \"\\u30b8\\u30e5\\u30e9\\u7d00\\u5f8c\\u671f\",\n  \"mya_start\": 175,\n  \"mya_end\": 145,\n  \"temp_c\": 18,\n  \"atmosphere_pct\": {\n    \"N2\": 77,\n    \"CO2\": 2.5,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.5,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1e8449\"\n}"
  },
  {
    "name": "Cretac. E. (145-90 Mya)",
    "source": "{\n  \"id\": \"cretaceous_e\",\n  \"name_en\": \"Cretac. E.\",\n  \"name_ja\": \"\\u767d\\u4e9c\\u7d00\\u524d\\u671f\",\n  \"mya_start\": 145,\n  \"mya_end\": 90,\n  \"temp_c\": 22,\n  \"atmosphere_pct\": {\n    \"N2\": 77,\n    \"CO2\": 2,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.55,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1a5276\"\n}"
  },
  {
    "name": "Cretac. L. (90-66 Mya)",
    "source": "{\n  \"id\": \"cretaceous_l\",\n  \"name_en\": \"Cretac. L.\",\n  \"name_ja\": \"\\u767d\\u4e9c\\u7d00\\u5f8c\\u671f\",\n  \"mya_start\": 90,\n  \"mya_end\": 66,\n  \"temp_c\": 19,\n  \"atmosphere_pct\": {\n    \"N2\": 77,\n    \"CO2\": 2,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.55,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#154360\"\n}"
  },
  {
    "name": "K-Pg Extinct. (66-63 Mya)",
    "source": "{\n  \"id\": \"kpg_ext\",\n  \"name_en\": \"K-Pg Extinct.\",\n  \"name_ja\": \"K-Pg\\u5927\\u7d76\\u6ec5\",\n  \"mya_start\": 66,\n  \"mya_end\": 63,\n  \"temp_c\": 40,\n  \"atmosphere_pct\": {\n    \"N2\": 75,\n    \"CO2\": 10,\n    \"H2O\": 3,\n    \"H2\": 0,\n    \"O2\": 18,\n    \"CH4\": 0.5,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.95,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#e74c3c\"\n}"
  },
  {
    "name": "Paleogene (63-23 Mya)",
    "source": "{\n  \"id\": \"paleogene\",\n  \"name_en\": \"Paleogene\",\n  \"name_ja\": \"\\u6681\\u65b0\\u4e16\",\n  \"mya_start\": 63,\n  \"mya_end\": 23,\n  \"temp_c\": 22,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 0.1,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.5,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#2471a3\"\n}"
  },
  {
    "name": "Neogene (23-2.6 Mya)",
    "source": "{\n  \"id\": \"neogene\",\n  \"name_en\": \"Neogene\",\n  \"name_ja\": \"\\u4e2d\\u65b0\\u4e16\",\n  \"mya_start\": 23,\n  \"mya_end\": 2.6,\n  \"temp_c\": 15,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 0.028,\n    \"H2O\": 2,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0,\n    \"Ar\": 1\n  },\n  \"cloud_cover_0to1\": 0.45,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#1a5276\"\n}"
  },
  {
    "name": "Quaternary (2.6-0 Mya)",
    "source": "{\n  \"id\": \"quaternary\",\n  \"name_en\": \"Quaternary\",\n  \"name_ja\": \"\\u7b2c\\u56db\\u7d00\",\n  \"mya_start\": 2.6,\n  \"mya_end\": 0,\n  \"temp_c\": 14,\n  \"atmosphere_pct\": {\n    \"N2\": 78,\n    \"CO2\": 0.04,\n    \"H2O\": 1.5,\n    \"H2\": 0,\n    \"O2\": 21,\n    \"CH4\": 0.0002,\n    \"Ar\": 0.93\n  },\n  \"cloud_cover_0to1\": 0.4,\n  \"is_snowball_earth\": false,\n  \"display_color\": \"#2980b9\"\n}"
  }
];