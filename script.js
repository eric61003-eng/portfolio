const imageCounts={"vw-gti":{render:5,live:4},"oralb-2":{render:6,live:5},"mediatek":{render:6,live:0},"mediatek-mwc":{render:8,live:0},"mediatek-preview":{render:8,live:8},"gsk-tjcc":{render:8,live:8},"gsk-amwc":{render:8,live:0},"gsk-ent":{render:8,live:0},"gsk-pediatrics":{render:6,live:0},"starlux-itf":{render:8,live:0},"frostpunk":{render:8,live:8},"archive-shilei":{render:0,live:2},"archive-dental-2017":{render:0,live:2},"archive-industry-2015":{render:0,live:10},"bottega":{render:2,live:8},"casetify-nanxi":{render:0,live:9},"pandora-dream":{render:0,live:8},"pandora-edapark":{render:0,live:8},"gucci-hj":{render:8,live:8},"gucci-love":{render:8,live:8},"gucci-ancora":{render:5,live:8},"swarovski":{render:8,live:0},"skoda-event":{render:8,live:8},"tmwa":{render:8,live:8},"emergency":{render:8,live:8},"lv-exotic":{render:6,live:6},"graphic-shilei":{render:6,live:0},"graphic-dental-2017":{render:4,live:0}};
const imgs=id=>{const count=imageCounts[id]||{render:5,live:5};return {render:Array.from({length:count.render},(_,i)=>`assets/projects/${id}/render/${i+1}.jpg`),live:Array.from({length:count.live},(_,i)=>`assets/projects/${id}/live/${i+1}.jpg`)}};
const coverChoice={"bvlgari-gala":2,"bvlgari-trunk":3,"delvaux":3,"dior-rose":2,"emergency":5,"essence":1,"ferragamo-popup":4,"ferrari-event":2,"frostpunk":4,"gsk":2,"gsk-a":2,"gucci-ancora":5,"gucci-hj":5,"hbl-30":4,"heineken-bbq":3,"infiniti":4,"itg-ai":2,"lv-exotic":5,"maserati":1,"mediatek":5,"oralb":5,"oralb-2":4,"starlux":3,"tmwa":1,"uni-president":3,"vw-golf":1,"vw-passat":4,"vw-yearend":4,"vw-gti":1,"yahoo-bic":1,"frostpunk-dadaocheng":2,"essence-boat":3,"yolos-banqiao":2,"wine-expo":1};
const renderLeadChoice={"oralb":5,"oralb-2":5,"infiniti":5,"maserati":4,"gsk":2,"gsk-a":4,"hbl-30":5,"frostpunk-dadaocheng":5,"tmwa":3,"itg-ai":3};
const yearChoice={"oralb":2025,"oralb-2":2024,"infiniti":2020,"maserati":2018,"mediatek":2026,"mediatek-mwc":2026,"mediatek-preview":2026,"gsk-tjcc":2026,"gsk-amwc":2026,"gsk-ent":2026,"gsk-pediatrics":2026,"starlux-itf":2025,"hbl-30":2017,"frostpunk":2024,"frostpunk-dadaocheng":2025,"tmwa":2022,"emergency":2022,"wine-expo":2018,"dior-rose":2021,"lv-exotic":2023,"bvlgari-gala":2023,"bvlgari-trunk":2021,"gucci-hj":2023,"gucci-love":2022,"gucci-ancora":2024,"ferragamo-popup":2021,"ferrari-event":2019,"vw-golf":2025,"vw-passat":2025,"vw-yearend":2018,"vw-gti":2026,"heineken-bbq":2022,"delvaux":"2020–2024","yahoo-bic":2017,"essence":2024,"essence-boat":2024,"uni-president":2019,"yolos-banqiao":2018,"starlux":2025,"itg-ai":2026,"archive-shilei":2016,"archive-dental-2017":2017,"archive-industry-2015":"2015–2016","bottega":2023,"casetify-nanxi":2023,"pandora-dream":2021,"pandora-edapark":2021,"swarovski":"YEAR TBC","skoda-event":2018,"graphic-shilei":2016,"graphic-dental-2017":2017};
const coverFiles={"gucci-ancora":["assets/projects/gucci-ancora/cover/1.jpg"],"delvaux":["assets/projects/delvaux/cover/1.jpg"],"lv-exotic":["assets/projects/lv-exotic/cover/1.jpg"],"bvlgari-gala":["assets/projects/bvlgari-gala/cover/1.jpg"],"dior-rose":["assets/projects/dior-rose/cover/1.jpg"],"bvlgari-trunk":["assets/projects/bvlgari-trunk/cover/1.jpg"],"ferragamo-popup":["assets/projects/ferragamo-popup/cover/1.jpg"],"infiniti":["assets/projects/infiniti/cover/1.jpg"],"uni-president":["assets/projects/uni-president/cover/1.jpg"],"wine-expo":["assets/projects/wine-expo/cover/1.jpg"],"vw-yearend":["assets/projects/vw-yearend/cover/1.jpg"],"yahoo-bic":["assets/projects/yahoo-bic/cover/1.jpg"],"hbl-30":["assets/projects/hbl-30/cover/1.jpg"],"maserati":["assets/projects/maserati/cover/1.jpg"],"mediatek":["assets/projects/mediatek/render/1.jpg"],"mediatek-mwc":["assets/projects/mediatek-mwc/render/1.jpg"],"mediatek-preview":["assets/projects/mediatek-preview/live/1.jpg"],"gsk-amwc":["assets/projects/gsk-amwc/render/1.jpg"],"gsk-ent":["assets/projects/gsk-ent/render/1.jpg"],"gsk-pediatrics":["assets/projects/gsk-pediatrics/render/1.jpg"],"starlux-itf":["assets/projects/starlux-itf/render/1.jpg"],"archive-shilei":["assets/projects/archive-shilei/live/1.jpg"],"archive-dental-2017":["assets/projects/archive-dental-2017/live/1.jpg"],"archive-industry-2015":["assets/projects/archive-industry-2015/live/1.jpg"],"bottega":["assets/projects/bottega/live/1.jpg"],"casetify-nanxi":["assets/projects/casetify-nanxi/live/1.jpg"],"pandora-dream":["assets/projects/pandora-dream/live/1.jpg"],"pandora-edapark":["assets/projects/pandora-edapark/live/1.jpg"],"gucci-hj":["assets/projects/gucci-hj/live/1.jpg"],"gucci-love":["assets/projects/gucci-love/live/1.jpg"],"swarovski":["assets/projects/swarovski/render/1.jpg"],"skoda-event":["assets/projects/skoda-event/live/1.jpg"],"tmwa":["assets/projects/tmwa/live/1.jpg"],"emergency":["assets/projects/emergency/live/1.jpg"]};
const leadFirst=(list,position=1)=>{if(!list.length)return [];const index=Math.max(0,Math.min(list.length-1,position-1));return [list[index],...list.filter((_,i)=>i!==index)]};
coverFiles["lv-exotic"]=["assets/projects/lv-exotic/live/1.jpg"];
coverFiles["gucci-hj"]=["assets/projects/gucci-hj/live/4.jpg"];
coverFiles["graphic-shilei"]=["assets/projects/graphic-shilei/render/1.jpg"];
coverFiles["graphic-dental-2017"]=["assets/projects/graphic-dental-2017/render/1.jpg"];
imageCounts["lv-proposal-a"]={render:6,live:0};
imageCounts["lv-proposal-b"]={render:6,live:0};
yearChoice["lv-proposal-a"]=2026;
yearChoice["lv-proposal-b"]=2026;
coverFiles["lv-proposal-a"]=["assets/projects/lv-proposal-a/render/1.jpg"];
coverFiles["lv-proposal-b"]=["assets/projects/lv-proposal-b/render/1.jpg"];
imageCounts["lv-proposal-b"]={render:12,live:0};
imageCounts["kawasaki"]={render:8,live:0};
imageCounts["kymco"]={render:8,live:0};
imageCounts["heineken-2018"]={render:8,live:0};
imageCounts["oralb-2017-spring"]={render:4,live:2};
imageCounts["emergency"]={render:6,live:8};
imageCounts["oralb-2017"]={render:4,live:6};
imageCounts["oralb-2"]={render:6,live:6};
imageCounts["skoda-event"]={render:6,live:8};
imageCounts["mediatek-preview"]={render:8,live:5};
imageCounts["audemars-piguet-music"]={render:8,live:0};
imageCounts["blancpain-taipei"]={render:8,live:0};
imageCounts["oralb"]={render:5,live:8};
imageCounts["graphic-starlux-kv"]={render:4,live:0};
imageCounts["graphic-itg"]={render:6,live:0};
imageCounts["graphic-oralb-2024"]={render:4,live:0};
imageCounts["graphic-toys-taste"]={render:6,live:0};
imageCounts["graphic-essence-signage"]={render:2,live:0};
imageCounts["graphic-shilei-clean"]={render:5,live:0};
imageCounts["frostpunk-dadaocheng"]={render:9,live:10};
imageCounts["archive-exhibition-1"]={render:0,live:2};
imageCounts["archive-exhibition-2"]={render:0,live:2};
imageCounts["archive-exhibition-3"]={render:0,live:2};
imageCounts["archive-exhibition-4"]={render:0,live:2};
imageCounts["archive-exhibition-5"]={render:0,live:2};
imageCounts["archive-past-1"]={render:0,live:1};
imageCounts["archive-past-2"]={render:0,live:1};
imageCounts["archive-past-3"]={render:0,live:1};
imageCounts["archive-past-4"]={render:0,live:1};
imageCounts["archive-past-5"]={render:0,live:1};
imageCounts["archive-past-6"]={render:0,live:1};
imageCounts["archive-past-7"]={render:0,live:1};
imageCounts["archive-past-8"]={render:0,live:1};
imageCounts["archive-past-9"]={render:0,live:1};
imageCounts["archive-past-10"]={render:0,live:1};
imageCounts["ta-hsiang"]={render:6,live:0};
yearChoice["kawasaki"]=2018;
yearChoice["kymco"]=2018;
yearChoice["heineken-2018"]=2018;
yearChoice["oralb-2017-spring"]=2017;
yearChoice["oralb-2017"]=2017;
yearChoice["audemars-piguet-music"]=2024;
yearChoice["blancpain-taipei"]=2024;
yearChoice["graphic-starlux-kv"]=2025;
yearChoice["graphic-itg"]=2026;
yearChoice["graphic-oralb-2024"]=2024;
yearChoice["graphic-toys-taste"]=2024;
yearChoice["graphic-essence-signage"]=2024;
yearChoice["graphic-shilei-clean"]=2016;
coverFiles["kawasaki"]=["assets/projects/kawasaki/render/1.jpg"];
coverFiles["kymco"]=["assets/projects/kymco/render/1.jpg"];
coverFiles["heineken-2018"]=["assets/projects/heineken-2018/render/2.jpg"];
coverFiles["oralb-2017-spring"]=["assets/projects/oralb-2017-spring/live/1.jpg"];
coverFiles["oralb-2017"]=["assets/projects/oralb-2017/live/1.jpg"];
coverFiles["audemars-piguet-music"]=["assets/projects/audemars-piguet-music/render/1.jpg"];
coverFiles["blancpain-taipei"]=["assets/projects/blancpain-taipei/render/3.jpg"];
coverFiles["oralb"]=["assets/projects/oralb/live/1.jpg"];
coverFiles["graphic-starlux-kv"]=["assets/projects/graphic-starlux-kv/render/1.jpg"];
coverFiles["graphic-itg"]=["assets/projects/graphic-itg/render/1.jpg"];
coverFiles["graphic-oralb-2024"]=["assets/projects/graphic-oralb-2024/render/1.jpg"];
coverFiles["graphic-toys-taste"]=["assets/projects/graphic-toys-taste/render/1.jpg"];
coverFiles["graphic-essence-signage"]=["assets/projects/graphic-essence-signage/render/1.jpg"];
coverFiles["graphic-shilei-clean"]=["assets/projects/graphic-shilei-clean/render/1.jpg"];
coverFiles["frostpunk-dadaocheng"]=["assets/projects/frostpunk-dadaocheng/live/1.jpg"];
yearChoice["archive-exhibition-1"]="2015–2016";
yearChoice["archive-exhibition-2"]="2015–2016";
yearChoice["archive-exhibition-3"]="2015–2016";
yearChoice["archive-exhibition-4"]="2015–2016";
yearChoice["archive-exhibition-5"]="2015–2016";
yearChoice["archive-past-1"]="2015–2016";
yearChoice["archive-past-2"]="2015–2016";
yearChoice["archive-past-3"]="2015–2016";
yearChoice["archive-past-4"]="2015–2016";
yearChoice["archive-past-5"]="2015–2016";
yearChoice["archive-past-6"]="2015–2016";
yearChoice["archive-past-7"]="2015–2016";
yearChoice["archive-past-8"]="2015–2016";
yearChoice["archive-past-9"]="2015–2016";
yearChoice["archive-past-10"]="2015–2016";
yearChoice["ta-hsiang"]=2020;
coverFiles["archive-exhibition-1"]=["assets/projects/archive-exhibition-1/live/1.jpg"];
coverFiles["archive-exhibition-2"]=["assets/projects/archive-exhibition-2/live/1.jpg"];
coverFiles["archive-exhibition-3"]=["assets/projects/archive-exhibition-3/live/1.jpg"];
coverFiles["archive-exhibition-4"]=["assets/projects/archive-exhibition-4/live/1.jpg"];
coverFiles["archive-exhibition-5"]=["assets/projects/archive-exhibition-5/live/1.jpg"];
coverFiles["archive-past-1"]=["assets/projects/archive-past-1/live/1.jpg"];
coverFiles["archive-past-2"]=["assets/projects/archive-past-2/live/1.jpg"];
coverFiles["archive-past-3"]=["assets/projects/archive-past-3/live/1.jpg"];
coverFiles["archive-past-4"]=["assets/projects/archive-past-4/live/1.jpg"];
coverFiles["archive-past-5"]=["assets/projects/archive-past-5/live/1.jpg"];
coverFiles["archive-past-6"]=["assets/projects/archive-past-6/live/1.jpg"];
coverFiles["archive-past-7"]=["assets/projects/archive-past-7/live/1.jpg"];
coverFiles["archive-past-8"]=["assets/projects/archive-past-8/live/1.jpg"];
coverFiles["archive-past-9"]=["assets/projects/archive-past-9/live/1.jpg"];
coverFiles["archive-past-10"]=["assets/projects/archive-past-10/live/1.jpg"];
coverFiles["ta-hsiang"]=["assets/projects/ta-hsiang/render/1.jpg"];
const C=(id,title,cover,labels)=>{const media=imgs(id);return {id,title,status:"live",year:yearChoice[id]||"YEAR TBC",cover:1,covers:coverFiles[id]||[],render:leadFirst(media.render,renderLeadChoice[id]||1),live:leadFirst(media.live,coverChoice[id]||cover),labels}};
const V=(id,titleZh,titleEn,year,coverVideo)=>({id,title:titleEn,titleZh,titleEn,status:"live",year,coverVideo,covers:[],render:[],live:[],labels:{}});
const displayTitle=x=>String(x.title).startsWith(String(x.year))?x.title:`${x.year}_${x.title}`;
const yearRank=year=>{const years=String(year).match(/\d{4}/g);return years?Math.max(...years.map(Number)):0};
const brandYear=(brand,status)=>Math.max(0,...brand.cases.filter(x=>x.status===status).map(x=>yearRank(x.year)));
const activityIntros={
  "audemars-piguet-music":"以音樂、光影與腕錶工藝為主軸，規劃沉浸式入口、舞台及品牌互動體驗。",
  "blancpain-taipei":"為台北 101 限量腕錶發表打造海洋意象空間，串聯產品展示、數位內容與賓客動線。",
  bottega:"以品牌材質語彙延伸快閃空間，透過立面、陳列與細節建立完整的精品體驗。",
  "dior-rose":"以 RoseDior 高級珠寶為核心，運用花藝與柔和光線營造精緻而私密的鑑賞氛圍。",
  "lv-exotic":"為珍稀皮革系列打造專屬展示體驗，整合產品陳列、情境佈置與貴賓動線。",
  "lv-proposal-b":"Louis Vuitton 品牌活動提案，以空間敘事與識別細節延伸精品體驗。",
  "bvlgari-gala":"以晚宴場景、燈光與花藝共同塑造 BVLGARI 的華麗品牌氛圍。",
  "bvlgari-trunk":"為精品鑑賞與產品展示規劃兼具私密感及品牌識別的 Trunk Show 空間。",
  "gucci-hj":"以沉浸式花園語彙呈現高級珠寶，從遠景氛圍延伸至細節陳列。",
  "gucci-love":"將時裝秀視覺轉化為品牌活動場景，串聯展示、拍攝與賓客體驗。",
  "gucci-ancora":"以 Gucci Ancora 的深紅色調建立展覽敘事，整合服裝展示與品牌內容。",
  "ferragamo-popup":"透過品牌紅、展示節奏與材質細節，打造清楚而有辨識度的快閃體驗。",
  "ferrari-event":"以性能、速度與品牌紅為視覺核心，規劃年度活動的舞台及賓客空間。",
  "vw-gti":"為 Golf GTI Edition 50 規劃新車發表場景，凸顯車款歷史、性能與週年識別。",
  "vw-golf":"以新車亮相為主軸，整合車輛展示、燈光與媒體拍攝動線。",
  "vw-passat":"為 Passat 新車發表打造俐落展演空間，兼顧車輛展示與來賓體驗。",
  "vw-yearend":"以品牌年度聚會為主題，整合舞台、視覺內容與宴會氛圍。",
  "mediatek-preview":"以 AI Without Limits 為概念，整合主舞台、動態視覺、接待與拍照區的前瞻發表會。",
  "hbl-30":"以 HBL 三十週年為主題，串聯歷史內容、球場精神與現場互動。",
  "heineken-bbq":"將品牌色彩與節慶聚會結合，打造輕鬆且具辨識度的中秋活動體驗。",
  "heineken-2018":"戶外品牌活動提案，以社交情境、燈光與互動裝置強化參與感。",
  kymco:"以 ionex 新能源移動為核心，提出兼具科技感與產品展示效率的發表會概念。",
  delvaux:"以品牌工藝及皮件展示為核心，規劃精緻、安靜且具層次的快閃空間。",
  "casetify-nanxi":"將產品牆、客製體驗與店裝視覺整合為鮮明的零售空間。",
  "pandora-dream":"以珠寶陳列與品牌識別為主軸，打造明亮且易於探索的專櫃體驗。",
  "pandora-edapark":"結合快閃展示、商品陳列與動線設計，建立輕盈活潑的品牌接觸點。",
  swarovski:"以水晶光澤與幾何語彙發展活動概念，讓產品成為空間視覺焦點。",
  "skoda-event":"以 Karoq 新車發表為核心，整合戶外展示、舞台與品牌燈光演出。",
  "yahoo-bic":"為 Yahoo BIC 規劃品牌活動場景，整合主視覺、舞台與現場交流需求。",
  "frostpunk-dadaocheng":"以寒霜啟示錄 IP 氛圍延伸大稻埕品牌活動，整合沉浸式視覺、現場拍照與互動展示動線。",
  essence:"以品牌生活風格為核心，打造兼具拍攝、展示與社交功能的體驗空間。",
  "essence-boat":"將品牌體驗延伸至河岸遊船，以情境佈置串聯移動中的活動節奏。",
  "uni-president":"以 I Sharing 為主題，透過品牌內容與互動設計建立內部交流體驗。",
  "yolos-banqiao":"以餐飲品牌個性延伸空間語彙，整合門面、座席與顧客動線。"
};
const exhibitionIntros={
  "oralb":"以品牌藍與弧形動線構成展區的敘事骨幹，讓每位來訪者在移動中自然接觸 Oral-B iO 的核心技術訊息。從遠看的品牌輪廓到近看的產品細節，每個尺度都有明確的視覺語言。",
  "oralb-2":"以動線效率為第一設計準則，在有限空間中整合產品展示、互動試用與媒體拍攝的三重需求，視覺語言統一服務於品牌識別系統。",
  "oralb-2017-spring":"以清楚的品牌色彩和整齊的展示節奏建立在場存在感，讓 Oral-B 在春季牙科醫學會的雜訊環境中被準確看見。",
  "oralb-2017":"以弧形展台與高聳立面在醫學會場建立第一視覺錨點，品牌藍在這個規模的空間既是識別，也是方向感的來源。",
  "infiniti":"以 INFINITI「突破設計疆界」的品牌哲學轉化為空間語彙：流線型展台、冷光材質與精算過的展示角度，讓每一台車都站在它應有的位置。",
  "maserati":"義大利豪華跑車需要的不是過度設計的展台，而是讓車款自然發光的舞台。材質選用、燈光角度與展示動線全部服務於同一個目標：突顯車款氣質。",
  "mediatek":"以 Computex 的科技狂歡為對照，聯發科的展覽語言選擇內斂而清晰——把晶片的力量說清楚，把品牌的邊界說準確。",
  "mediatek-mwc":"在 MWC 這個全球通訊科技的最大舞台，以「AI 連結萬物」為核心，打造同時面向媒體、合作夥伴與消費者的品牌展覽場域。",
  "gsk-tjcc":"醫學會展台不是廣告版面，而是科學對話的延伸空間。GSK TJCC 展台設計以臨床訊息的清晰傳遞為第一優先，再以品牌語言建立整體識別。",
  "gsk-amwc":"抗老醫學年會的展台提案，以品牌的科學可信度為軸，融入美感語彙，打造在醫療場合中同樣具有感染力的展示體驗。",
  "gsk-ent":"針對耳鼻喉科年會規劃展台動線，整合產品說明、互動工具與醫師體驗節奏，讓有限的展覽時間產生最大的溝通效益。",
  "gsk-pediatrics":"以兒科醫學會的場景特性出發，提案一套在醫療語境中同樣能引起情感共鳴的展覽設計——嚴謹但不冰冷。",
  "ta-hsiang":"以台商在地深耕的品牌積累為素材，提案一個兼具歷史感與現代設計語言的展覽空間，讓企業的厚度得以被看見。",
  "starlux-itf":"這不只是一個航空展台，而是一場微型的星宇航空沉浸體驗。以動態光影設計讓博覽會觀眾在有限時間內感受星宇的飛行哲學與品牌高度。",
  "kawasaki":"速度感不靠陳列傳遞，而靠空間節奏。Kawasaki 展台提案以動線張力和燈光戲劇性，讓靜態展示的摩托車擁有充沛的現場動感。",
  "frostpunk":"電玩 IP 的實體化不是主題樂園式的複製，而是氛圍移植。以 Whiteout Survival 的末世寒霜意象為核心，在電玩展現場打造一片屬於玩家的沉浸場域。",
  "tmwa":"醫學會場的空間設計需要在嚴肅議題和開放對話之間找到平衡。以清楚的訊息架構和溫暖的空間調性，建立一個讓醫師願意駐留交流的展台場域。",
  "emergency":"U=U（Undetectable = Untransmittable）是一個需要被更多人知道的科學事實。這個展覽的設計目標很清楚：讓資訊流通、讓對話發生、讓污名逐漸消解。",
  "wine-expo":"以酒窖的視覺語彙在熱鬧的博覽會現場創造一處相對靜謐的感官場域，讓葡萄酒的故事有機會在人群中被好好說出來。"
};
const graphicIntros={
  "graphic-starlux-kv":"以飛行作為自由與精準的雙重隱喻，發展一套可延伸至各媒體觸點的星宇航空視覺語言。從廣告投放到現場物料，識別邏輯清晰一致、畫面自帶完稿品質。",
  "graphic-itg":"用生成式 AI 重新定義品牌角色的視覺上限——不是套模板，而是建立完整的視覺體系，讓每個角色都有自己的故事、個性與延伸應用的邏輯。",
  "graphic-oralb-2024":"以 iO 音波技術的波動感為視覺靈感，開發可跨數位平台與實體媒體統一部署的 Campaign 主視覺，讓產品功能轉化為可感知的影像語言。",
  "graphic-toys-taste":"電競文化不是一種小眾語言——它是這個世代的大眾語境。以 Acer 的品牌色系為骨幹，為活動開發兼具辨識度與親和力的主視覺系統。",
  "graphic-essence-signage":"標示設計是空間敘事的基礎建設。以「最小設計、最大清晰度」為原則，確保每個指引都是品牌體驗的一部分，而不是視覺噪音。",
  "graphic-shilei-clean":"從貨架識別到促銷物料，在預算限制內建立視覺一致性，讓品牌在通路端有值得被記住的樣子。"
};
const caseTitlesZh={
  "oralb":"2025 牙科醫學會","oralb-2":"2024 牙科醫學會",
  "oralb-2017-spring":"2017 春季牙科醫學會","oralb-2017":"2017 牙科醫學會",
  "infiniti":"INFINITI｜車展展台空間設計","maserati":"Maserati｜車展展台空間設計",
  "mediatek":"MediaTek｜Computex 2026 品牌展館","mediatek-mwc":"MediaTek｜MWC Barcelona 2026",
  "gsk-tjcc":"GSK｜TJCC 年會展台","gsk-amwc":"GSK｜AMWC 春季年會展台提案",
  "gsk-ent":"GSK｜ENT 年會展台提案","gsk-pediatrics":"GSK｜兒科年會展台提案",
  "ta-hsiang":"大翔｜品牌展覽空間提案","starlux-itf":"星宇航空｜ITF 沉浸式展館",
  "kawasaki":"Kawasaki｜機車展台提案","frostpunk":"Whiteout Survival｜電玩展覽空間",
  "tmwa":"Gilead｜女性醫學年會展台","emergency":"Gilead｜U=U HIV 意識倡議展覽",
  "wine-expo":"台北葡萄酒博覽會｜品牌展台",
  "graphic-starlux-kv":"星宇航空｜Campaign 主視覺系統","graphic-itg":"帝國菸草｜AI 活動視覺體系",
  "graphic-oralb-2024":"Oral-B｜2024 Campaign 視覺設計","graphic-toys-taste":"Acer Go｜活動主視覺系統",
  "graphic-essence-signage":"Essence｜信義旗艦空間標示設計","graphic-shilei-clean":"BEST｜系列平面視覺設計"
};
const caseTitlesEn={
  "oralb":"ORAL-B DENTAL CONGRESS PAVILION","oralb-2":"ORAL-B DENTAL CONGRESS PAVILION 2024",
  "oralb-2017-spring":"ORAL-B SPRING DENTAL CONGRESS 2017","oralb-2017":"ORAL-B DENTAL CONGRESS 2017",
  "infiniti":"INFINITI AUTO SHOW PAVILION","maserati":"MASERATI AUTO SHOW PAVILION",
  "mediatek":"MEDIATEK COMPUTEX 2026 PAVILION","mediatek-mwc":"MEDIATEK MWC BARCELONA 2026",
  "gsk-tjcc":"GSK TJCC CONGRESS PAVILION","gsk-amwc":"GSK AMWC SPRING PAVILION PROPOSAL",
  "gsk-ent":"GSK ENT CONGRESS PAVILION PROPOSAL","gsk-pediatrics":"GSK PEDIATRICS CONGRESS PROPOSAL",
  "ta-hsiang":"TA HSIANG EXHIBITION PROPOSAL","starlux-itf":"STARLUX ITF IMMERSIVE PAVILION",
  "kawasaki":"KAWASAKI EXHIBITION CONCEPT","frostpunk":"WHITEOUT SURVIVAL GAMING EXPO",
  "tmwa":"GILEAD WOMEN'S HEALTH CONGRESS","emergency":"U=U HIV AWARENESS EXHIBITION",
  "wine-expo":"TAIPEI WINE EXPO PAVILION",
  "graphic-starlux-kv":"STARLUX CAMPAIGN KEY VISUAL","graphic-itg":"IMPERIAL TOBACCO AI CAMPAIGN VISUALS",
  "graphic-oralb-2024":"ORAL-B 2024 CAMPAIGN GRAPHICS","graphic-toys-taste":"ACER GO CAMPAIGN KEY VISUAL",
  "graphic-essence-signage":"ESSENCE XINYI SIGNAGE DESIGN","graphic-shilei-clean":"BEST GRAPHIC DESIGN SERIES"
};
const portfolio={
  exhibition:{title:"展覽空間",english:"SPATIAL EXPERIENCE",brands:[
    {id:"oralb",name:"Oral-B",logo:"assets/logos/oralb.svg",cases:[C("oralb","2025_Oral-B_Dental Expo",1),C("oralb-2","2024_Oral-B_Dental Expo",1),C("oralb-2017-spring","2017_Oral-B Spring Dental Expo",1),C("oralb-2017","2017_Oral-B Dental Expo",1)]},
    {id:"infiniti",name:"INFINITI",logo:"assets/logos/infiniti.svg",cases:[C("infiniti","INFINITI Auto Show Pavilion",1)]},
    {id:"maserati",name:"MASERATI",logo:"assets/logos/maserati.svg",cases:[C("maserati","Maserati Auto Show Pavilion",1)]},
    {id:"mediatek",name:"MediaTek",logo:"assets/logos/mediatek.svg",cases:[{...C("mediatek","MediaTek Computex 2026",1,{render:"ON-SITE VISUALIZATION"}),status:"proposal"},{...C("mediatek-mwc","MWC Barcelona 2026",1),status:"proposal",videos:["assets/projects/mediatek-mwc/video/main.mp4"]}]},
    {id:"gsk",name:"GSK",logo:"assets/logos/gsk.svg",cases:[C("gsk-tjcc","GSK TJCC Pavilion",1),{...C("gsk-amwc","GSK Spring AMWC Proposal A / B",1,{render:"ON-SITE VISUALIZATION"}),status:"proposal"},{...C("gsk-ent","GSK ENT Congress Proposal",1),status:"proposal"},{...C("gsk-pediatrics","GSK Pediatrics Congress Proposal",1),status:"proposal"}]},
    {id:"ta-hsiang",name:"TA HSIANG",logo:"assets/logos/ta-hsiang-wordmark.svg",cases:[{...C("ta-hsiang","Ta Hsiang Exhibition Booth Proposal",1),status:"proposal"}]},
    {id:"starlux-itf",name:"STARLUX",logo:"assets/logos/starlux.svg",cases:[{...C("starlux-itf","STARLUX ITF Immersive Pavilion",1),status:"proposal"}]},
    {id:"kawasaki",name:"KAWASAKI",logo:"assets/logos/kawasaki.svg",cases:[{...C("kawasaki","Kawasaki Motorcycle Exhibition Concept",1),status:"proposal"}]},
    {id:"frostpunk",name:"WHITEOUT SURVIVAL",logo:"assets/logos/whiteout-survival.png",cases:[C("frostpunk","Whiteout Survival Gaming Expo",1)]},
    {id:"gilead",name:"GILEAD",logo:"assets/logos/gilead.svg",cases:[C("tmwa","Gilead Women's Health Congress",1),C("emergency","U=U HIV Awareness Exhibition",1)]},
    {id:"wine-expo",name:"WINE EXPO",logo:"assets/logos/wine-expo.svg",cases:[C("wine-expo","Taipei Wine Exhibition",1)]},
    {id:"archive",name:"過往案例",cases:[C("archive-past-1","過往展覽案例 01",1),C("archive-past-2","過往展覽案例 02",1),C("archive-past-3","過往展覽案例 03",1),C("archive-past-4","過往展覽案例 04",1),C("archive-past-5","過往展覽案例 05",1),C("archive-past-6","過往展覽案例 06",1),C("archive-past-7","過往展覽案例 07",1),C("archive-past-8","過往展覽案例 08",1),C("archive-past-9","過往展覽案例 09",1),C("archive-past-10","過往展覽案例 10",1)]}
  ]},
  activity:{title:"品牌活動",english:"EVENT & ACTIVATION",brands:[
    {id:"audemars-piguet",name:"AUDEMARS PIGUET",logo:"assets/logos/audemars-piguet.svg",cases:[{...C("audemars-piguet-music","Audemars Piguet Music Event",1),status:"proposal"}]},
    {id:"blancpain",name:"BLANCPAIN",logo:"assets/logos/blancpain.svg",cases:[{...C("blancpain-taipei","Blancpain Taipei 101 Limited Edition Launch",1),status:"proposal"}]},
    {id:"bottega",name:"BOTTEGA VENETA",logo:"assets/logos/bottega.svg",cases:[C("bottega","Bottega Veneta Pop-up",1)]},
    {id:"dior",name:"DIOR",logo:"assets/logos/dior.svg",cases:[C("dior-rose","RoseDior HJ Event",1)]},
    {id:"lv",name:"LOUIS VUITTON",logo:"assets/logos/lv.svg",cases:[C("lv-exotic","Exotic Presentation",1),{...C("lv-proposal-b","Louis Vuitton Event Proposal",1),status:"proposal"}]},
    {id:"bvlgari",name:"BVLGARI",logo:"assets/logos/bvlgari.svg",cases:[C("bvlgari-gala","BVLGARI Gala Dinner",1),C("bvlgari-trunk","BVLGARI Trunk Show",1)]},
    {id:"gucci",name:"GUCCI",logo:"assets/logos/gucci.svg",cases:[C("gucci-hj","Gucci High Jewelry",1),C("gucci-love","Gucci Love Parade",1),C("gucci-ancora","Gucci Ancora",1)]},
    {id:"ferragamo",name:"FERRAGAMO",logo:"assets/logos/ferragamo.svg",cases:[C("ferragamo-popup","Ferragamo Pop-up",1)]},
    {id:"ferrari",name:"FERRARI",logo:"assets/logos/ferrari.svg",cases:[C("ferrari-event","Ferrari Year-end Event",1)]},
    {id:"vw",name:"VOLKSWAGEN",logo:"assets/logos/vw.svg",cases:[C("vw-gti","Golf GTI Edition 50 Launch",1),C("vw-golf","Golf Launch Event",1),C("vw-passat","Passat Launch Event",1),C("vw-yearend","Volkswagen Year-end Party",1)]},
    {id:"mediatek-event",name:"MEDIATEK",logo:"assets/logos/mediatek.svg",cases:[{...C("mediatek-preview","MediaTek AI Without Limits — Computex Preview Event",1),titleZh:"聯發科 AI 無界｜Computex 前瞻發表會",titleEn:"MEDIATEK AI WITHOUT LIMITS — COMPUTEX PREVIEW EVENT"}]},
    {id:"whiteout-survival-event",name:"WHITEOUT SURVIVAL",logo:"assets/logos/whiteout-survival.png",cases:[{...C("frostpunk-dadaocheng","Whiteout Survival Dadaocheng Activation",1),titleZh:"寒霜啟示錄｜大稻埕品牌活動",titleEn:"WHITEOUT SURVIVAL DADAOCHENG ACTIVATION"}]},
    {id:"hbl",name:"HBL",logo:"assets/logos/hbl.png",cases:[C("hbl-30","2017_HBL 30th Anniversary Event",1)]},
    {id:"heineken",name:"HEINEKEN",logo:"assets/logos/heineken.svg",cases:[C("heineken-bbq","Heineken Mid-Autumn Event",1),{...C("heineken-2018","Heineken Outdoor Brand Experience",1),status:"proposal"}]},
    {id:"kymco",name:"KYMCO",logo:"assets/logos/kymco.svg",cases:[{...C("kymco","KYMCO ionex Launch Event Concept",1),status:"proposal"}]},
    {id:"delvaux",name:"DELVAUX",logo:"assets/logos/delvaux.svg",cases:[C("delvaux","Delvaux Pop-up",1)]},
    {id:"casetify",name:"CASETiFY",logo:"assets/logos/casetify.png",cases:[C("casetify-nanxi","CASETiFY Nanxi Store",1)]},
    {id:"pandora",name:"PANDORA",logo:"assets/logos/pandora.svg",cases:[C("pandora-dream","Pandora Dream Mall Counter",1),C("pandora-edapark","Pandora E-DA Pop-up",1)]},
    {id:"swarovski",name:"SWAROVSKI",logo:"assets/logos/swarovski.svg",cases:[{...C("swarovski","Swarovski Event Concept",1),status:"proposal"}]},
    {id:"skoda",name:"ŠKODA",logo:"assets/logos/skoda.svg",cases:[C("skoda-event","Škoda Brand Event",1)]},
    {id:"yahoo",name:"YAHOO",logo:"assets/logos/yahoo.svg",cases:[C("yahoo-bic","Yahoo BIC Event",1)]},
    {id:"essence",name:"ESSENCE",logo:"assets/logos/essence.png",cases:[C("essence","Essence Xinyi Brand Experience",1),C("essence-boat","Essence Riverside Boat Event",1)]},
    {id:"uni-president",name:"滿漢大餐",logo:"assets/logos/manhan.png",cases:[C("uni-president","2019_I sharing",1)]},
    {id:"yolos",name:"YOLO'S",logo:"assets/logos/yolos.svg",cases:[C("yolos-banqiao","YOLO's Banqiao Store",1)]}
  ]},
  graphic:{title:"平面視覺",english:"KEY VISUAL & CAMPAIGN",brands:[
    {id:"graphic-starlux",name:"STARLUX",logo:"assets/logos/starlux.svg",cases:[C("graphic-starlux-kv","STARLUX Campaign Key Visual",1,{render:"KEY VISUAL"})]},
    {id:"graphic-itg-brand",name:"IMPERIAL TOBACCO",logo:"assets/logos/itg.svg",cases:[C("graphic-itg","Imperial Tobacco Campaign Visuals",1,{render:"KEY VISUAL / E-FLYER"})]},
    {id:"graphic-oralb-brand",name:"Oral-B",logo:"assets/logos/oralb.svg",cases:[C("graphic-oralb-2024","2024_Oral-B Campaign Graphics",1,{render:"GRAPHIC DESIGN"})]},
    {id:"graphic-toys-taste-brand",name:"ACER / TOYS TASTE",logo:"assets/logos/acer.svg",cases:[C("graphic-toys-taste","2024_Acer Go Campaign Visuals",1,{render:"KEY VISUAL / CAMPAIGN"})]},
    {id:"graphic-essence",name:"ESSENCE",logo:"assets/logos/essence.png",cases:[C("graphic-essence-signage","Essence Xinyi Signage Design",1,{render:"SIGNAGE DESIGN"})]},
    {id:"graphic-shilei-brand",name:"BEST",logo:"assets/logos/best.svg",cases:[C("graphic-shilei-clean","2016_BEST Graphic Design",1,{render:"GRAPHIC DESIGN"})]}
  ]},
  ai:{title:"AI 生成視覺",english:"GENERATIVE CREATIVE",brands:[
    {id:"ai-proposal-studies",name:"AI PROPOSAL VISUAL STUDIES",logo:"assets/logos/ai-proposal.svg",cases:[{...V("ai-proposal-studies","AI 提案視覺研究","AI PROPOSAL VISUAL STUDIES",2026,"assets/projects/ai-proposal-studies/video/2.mp4"),videoCrop:true}]},
    {id:"itg",name:"IMPERIAL TOBACCO",logo:"assets/logos/itg.svg",cases:[{...C("itg-ai","Imperial Tobacco Internal Engagement Challenge",1,{render:"AI CHARACTER",live:"APPLICATION"}),coverVideo:"assets/projects/itg-ai/video/0204-bilingual.mp4",titleZh:"帝國冒險島｜企業內部激勵競賽",titleEn:"IMPERIAL TOBACCO INTERNAL ENGAGEMENT CHALLENGE"}]},
    {id:"havas",name:"HAVAS",logo:"assets/logos/havas.svg",cases:[V("havas-ai","HAVAS 年度尾牙 AI 影片","HAVAS YEAR-END AI FILM",2026,"assets/projects/havas-ai/video/main.mp4")]},
    {id:"mediatek-ai",name:"MEDIATEK",logo:"assets/logos/mediatek.svg",cases:[V("mediatek-ai","聯發科 AI 動態視覺","MEDIATEK AI MOTION VISUALS",2025,"assets/projects/mediatek-ai/video/1216.mp4")]},
    {id:"gsk-ai",name:"GSK",logo:"assets/logos/gsk.svg",cases:[V("gsk-ai","GSK TJCC 上市發表動態視覺","GSK TJCC LAUNCH MOTION VISUALS",2026,"assets/projects/gsk-ai/video/interactive.mp4")]}
  ]}
};
const explorer=document.querySelector("#explorer"),content=document.querySelector("#explorerContent"),breadcrumb=document.querySelector("#breadcrumb"),lightbox=document.querySelector("#lightbox");let state={category:null,status:"live",brand:null,caseId:null};
const cat=()=>{const current=portfolio[state.category];if(current)current.brands.sort((a,b)=>brandYear(b,state.status)-brandYear(a,state.status));return current},brand=()=>{const current=cat()?.brands.find(x=>x.id===state.brand);if(current)current.cases.sort((a,b)=>yearRank(b.year)-yearRank(a.year));return current},item=()=>brand()?.cases.find(x=>x.id===state.caseId);
function openCategory(id){state={category:id,status:"live",brand:null,caseId:null};explorer.classList.add("is-open");explorer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";render()}
function closeExplorer(){explorer.classList.remove("is-open");explorer.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function back(){if(state.caseId){const single=brand().cases.filter(x=>x.status===state.status).length===1;state.caseId=null;if(single)state.brand=null}else if(state.brand)state.brand=null;else return closeExplorer();render()}
function crumbs(){const a=[{t:"HOME",f:closeExplorer},{t:cat().title,f:()=>{state.brand=null;state.caseId=null;render()}}];if(state.brand)a.push({t:brand().name,f:()=>{const single=brand().cases.filter(x=>x.status===state.status).length===1;state.caseId=null;if(single)state.brand=null;render()}});if(state.caseId)a.push({t:item().titleZh||displayTitle(item()),f:()=>{}});breadcrumb.innerHTML="";a.forEach(x=>{const b=document.createElement("button");b.className="crumb";b.textContent=x.t;b.onclick=x.f;breadcrumb.appendChild(b)})}
function render(){stopExplorerCoverReels();crumbs();state.caseId?renderDetail():state.brand?renderCases():renderBrands();explorer.scrollTo(0,0)}
const fallbackCover=x=>x.status==="proposal"?x.render[0]:(x.live[0]||x.render[0]);
const projectCoverSlides=x=>{const gallery=x.live.length?x.live:x.render,slides=[...(x.covers||[]),...gallery];return [...new Set(slides.filter(Boolean))].slice(0,8)};
const reelMarkup=(images,alt,extra="")=>`<span class="cover-reel ${extra}">${[...new Set(images.filter(Boolean))].map((src,i)=>`<img class="${i===0?'is-active':''}" src="${src}" alt="${alt}" loading="lazy">`).join("")}</span>`;
let explorerCoverTimers=[];
function startCoverReels(root,timers){root.querySelectorAll(".cover-reel").forEach(reel=>{const slides=[...reel.querySelectorAll("img")];if(slides.length<2)return;let active=0;timers.push(window.setInterval(()=>{slides[active].classList.remove("is-active");active=(active+1)%slides.length;slides[active].classList.add("is-active")},4200))})}
function stopExplorerCoverReels(){explorerCoverTimers.forEach(window.clearInterval);explorerCoverTimers=[]}
function resetExplorerCoverReels(){stopExplorerCoverReels();startCoverReels(content,explorerCoverTimers)}
function renderBrands(){const c=cat(),isAi=state.category==="ai",isSimple=state.category==="ai"||state.category==="graphic";if(isSimple)state.status="live";const visible=c.brands.filter(b=>b.cases.some(x=>x.status===state.status)),statusTabs=isSimple?"":`<div class="status-tabs"><button class="status-tab ${state.status==='live'?'active':''}" data-status="live">COMPLETED</button><button class="status-tab ${state.status==='proposal'?'active':''}" data-status="proposal">PROPOSAL</button></div>`;content.innerHTML=`<header class="view-title"><p>PORTFOLIO / ${c.english}</p><h2>${c.title}</h2><span>SELECT A BRAND TO VIEW THE FULL CASE</span></header>${statusTabs}${visible.length?`<div class="brand-grid ${isAi?'ai-brand-grid':''}">${visible.map(b=>{const cases=b.cases.filter(x=>x.status===state.status),lead=cases[0],slides=cases.flatMap(projectCoverSlides),media=lead.coverVideo?`<video src="${lead.coverVideo}" muted autoplay loop playsinline preload="metadata"></video>`:reelMarkup(slides.length?slides:[fallbackCover(lead)],b.name),mark=b.logo?`<span class="brand-logo"><img src="${b.logo}" alt="${b.name} Logo"></span>`:"";return `<button class="brand-card" data-brand="${b.id}" aria-label="${b.name}"><span class="brand-photo">${media}</span><span class="brand-panel ${b.logo?'':'no-logo'}">${mark}<span class="brand-copy"><b>${b.name}</b></span></span></button>`}).join("")}</div>`:`<div class="empty">COMING SOON</div>`}`;resetExplorerCoverReels();content.querySelectorAll("[data-status]").forEach(x=>x.onclick=()=>{state.status=x.dataset.status;render()});content.querySelectorAll("[data-brand]").forEach(x=>x.onclick=()=>{const selected=cat().brands.find(b=>b.id===x.dataset.brand),cases=selected.cases.filter(item=>item.status===state.status);state.brand=selected.id;state.caseId=cases.length===1?cases[0].id:null;render()})}
function renderCases(){const b=brand(),cases=b.cases.filter(x=>x.status===state.status),mark=b.logo?`<span class="collection-logo"><img src="${b.logo}" alt="${b.name} Logo"></span>`:`<span class="collection-wordmark">${b.name}</span>`;if(b.id==="archive"){const allImages=cases.flatMap(x=>[...x.live,...x.render].filter(Boolean));content.innerHTML=`<header class="collection-header">${mark}</header>`+section("過往案例","SELECTED ARCHIVE · 2015–2016",allImages);return;}content.innerHTML=`<header class="collection-header">${mark}</header><div class="case-grid">${cases.map(x=>{const titleZh=x.titleZh||caseTitlesZh[x.id]||displayTitle(x);return `<button class="case-card" data-case="${x.id}">${reelMarkup(projectCoverSlides(x).length?projectCoverSlides(x):[fallbackCover(x)],titleZh,"case-cover")}<span class="case-meta"><small>${x.year} · ${b.name}</small><h3>${titleZh}</h3></span></button>`}).join("")}</div>`;resetExplorerCoverReels();content.querySelectorAll("[data-case]").forEach(x=>x.onclick=()=>{state.caseId=x.dataset.case;render()})}
function section(title,english,images){return `<section class="gallery-section"><header class="gallery-heading"><h3>${title}</h3><span>${english}</span></header><div class="image-grid">${images.map((src,i)=>`<button class="image-button" data-image="${src}" aria-label="View image ${i+1}"><img loading="lazy" src="${src}" alt="${title} ${i+1}"></button>`).join("")}</div></section>`}
function videoSection(title,english,src){return `<section class="gallery-section ai-video-section"><header class="gallery-heading"><h3>${title}</h3><span>${english}</span></header><div class="project-video-wrap"><video controls autoplay muted loop playsinline preload="metadata" src="${src}"></video></div></section>`}
function videoGrid(title,english,videos,crop=false){return `<section class="gallery-section ${crop?'watermark-crop-section':''}"><header class="gallery-heading"><h3>${title}</h3><span>${english}</span></header><div class="project-video-grid">${videos.map(src=>`<div class="project-video-wrap"><video controls autoplay muted loop playsinline preload="auto" src="${src}"></video></div>`).join("")}</div></section>`}
function itgGalleries(){return videoSection("專案影片","PROJECT FILM","assets/projects/itg-ai/video/0204-bilingual.mp4")+section("主視覺","KEY VISUAL",["assets/projects/itg-ai/key-visuals/horizontal.jpg","assets/projects/itg-ai/key-visuals/vertical.jpg"])+section("活動視覺延伸","CAMPAIGN VISUALS",["assets/projects/itg-ai/campaign-visuals/visual-01.jpg","assets/projects/itg-ai/campaign-visuals/visual-02.jpg","assets/projects/itg-ai/campaign-visuals/visual-03.jpg","assets/projects/itg-ai/campaign-visuals/visual-04.jpg"])+section("角色設計","CHARACTER DESIGN",["assets/projects/itg-ai/characters/standing.jpg","assets/projects/itg-ai/characters/group.jpg"])+section("怪獸設計","MONSTER DESIGN",["assets/projects/itg-ai/monsters/ghost-three-view.jpg","assets/projects/itg-ai/monsters/mushroom-three-view.jpg","assets/projects/itg-ai/monsters/cloud-three-view.jpg"])+section("情境應用","MOCKUP",["assets/projects/itg-ai/mockups/mockup-01.jpg","assets/projects/itg-ai/mockups/mockup-02.jpg","assets/projects/itg-ai/mockups/keychain.jpg"])}
function aiGalleries(x){if(x.id==="ai-proposal-studies")return videoGrid("AI 視覺生成","AI VISUAL GENERATION",["assets/projects/ai-proposal-studies/video/2.mp4","assets/projects/ai-proposal-studies/video/3.mp4","assets/projects/ai-proposal-studies/video/4.mp4","assets/projects/ai-proposal-studies/video/5.mp4","assets/projects/ai-proposal-studies/video/6.mp4","assets/projects/ai-proposal-studies/video/7.mp4","assets/projects/ai-proposal-studies/video/8.mp4","assets/projects/ai-proposal-studies/video/9.mp4","assets/projects/ai-proposal-studies/video/10.mp4","assets/projects/ai-proposal-studies/video/11.mp4","assets/projects/ai-proposal-studies/video/12.mp4"],false);if(x.id==="itg-ai")return itgGalleries();if(x.id==="havas-ai")return videoGrid("尾牙 AI 影片","YEAR-END AI FILMS",["assets/projects/havas-ai/video/main.mp4","assets/projects/havas-ai/video/loop.mp4"]);if(x.id==="mediatek-ai")return videoGrid("2025 聯發科動態視覺","MEDIATEK MOTION VISUALS",["assets/projects/mediatek-ai/video/1216.mp4","assets/projects/mediatek-ai/video/update.mp4"])+videoGrid("2026 聯發科發表會","MEDIATEK 2026 LAUNCH VISUALS",["assets/projects/mediatek-ai/video/2026-0521-2.mp4","assets/projects/mediatek-ai/video/2026-ending.mp4"]);if(x.id==="gsk-ai")return videoGrid("GSK TJCC 上市發表","GSK TJCC LAUNCH VISUALS",["assets/projects/gsk-ai/video/interactive.mp4","assets/projects/gsk-ai/video/launch.mp4"]);return ""}
function activityProjectIntro(x,b){if(state.category==="ai")return "";const allIntros={...exhibitionIntros,...graphicIntros,...activityIntros},description=allIntros[x.id]||`${b.name} 品牌專案，整合空間、視覺與現場體驗。`,titleZh=x.titleZh||caseTitlesZh[x.id]||displayTitle(x),titleEn=x.titleEn||caseTitlesEn[x.id]||"";return `<section class="project-intro"><span>${x.year} / ${b.name}</span><h2>${titleZh}</h2>${titleEn?`<em>${titleEn}</em>`:""}<p>${description}</p></section>`}
function renderDetail(){const x=item(),b=brand(),renderTitle=x.labels?.render||"3D RENDERINGS",liveTitle=x.labels?.live||"ACTUAL PHOTOS",isAi=state.category==="ai",caseVideos=x.videos?.length?videoGrid("專案影片","PROJECT FILM",x.videos):"",galleries=isAi?aiGalleries(x):x.status==="proposal"?caseVideos+section(renderTitle,"PROPOSAL / OVERVIEW TO DETAIL",x.render):x.live.length?section(liveTitle,"ATMOSPHERE TO DETAIL",x.live)+(x.render.length?section(renderTitle,"OVERVIEW TO DETAIL",x.render):"")+caseVideos:section(renderTitle,"COMPLETED DESIGN / OVERVIEW TO DETAIL",x.render)+caseVideos,mark=b.logo?`<span class="collection-logo"><img src="${b.logo}" alt="${b.name} Logo"></span>`:`<span class="collection-wordmark">${b.name}</span>`,header=isAi?"":`<header class="collection-header detail-logo-stage">${mark}</header>`,intro=activityProjectIntro(x,b);content.innerHTML=`<article class="${isAi?'ai-project':''}" data-current-brand="${b.id}">${header}${intro}${galleries}</article>`;content.querySelectorAll("[data-image]").forEach(btn=>btn.onclick=()=>openLightbox(btn.dataset.image))}
function openLightbox(src){lightbox.querySelector("img").src=src;lightbox.classList.add("is-open");lightbox.setAttribute("aria-hidden","false")}
function closeLightbox(){lightbox.classList.remove("is-open");lightbox.setAttribute("aria-hidden","true")}
document.querySelectorAll("[data-open-category]").forEach(x=>x.onclick=()=>openCategory(x.dataset.openCategory));document.querySelector("#backButton").onclick=back;document.querySelector("#closeButton").onclick=closeExplorer;lightbox.querySelector("button").onclick=closeLightbox;lightbox.onclick=e=>{if(e.target===lightbox)closeLightbox()};document.addEventListener("keydown",e=>{if(e.key==="Escape")lightbox.classList.contains("is-open")?closeLightbox():explorer.classList.contains("is-open")&&back()});
window.addEventListener("pointermove",e=>{document.body.style.setProperty("--mx",`${e.clientX}px`);document.body.style.setProperty("--my",`${e.clientY}px`)},{passive:true});
const skillsTrigger=document.querySelector("#skillsTrigger"),skillsPanel=document.querySelector("#skillsPanel");
if(skillsTrigger&&skillsPanel){function setSkills(open){skillsPanel.hidden=!open;skillsPanel.classList.toggle("is-open",open);skillsTrigger.setAttribute("aria-expanded",String(open))}skillsTrigger.onclick=()=>setSkills(skillsPanel.hidden);document.addEventListener("click",e=>{if(!e.target.closest(".skills-wrap"))setSkills(false)})}
const aiReel=document.querySelector("#aiReel");
if(aiReel){const videos=[...aiReel.querySelectorAll("video")];let active=0,timer;const show=index=>{videos.forEach((video,i)=>{video.classList.toggle("is-active",i===index);if(i===index){video.currentTime=0;video.play().catch(()=>{})}else video.pause()});active=index};const next=()=>show((active+1)%videos.length);show(0);timer=window.setInterval(next,5000);document.addEventListener("visibilitychange",()=>{if(document.hidden)videos[active].pause();else videos[active].play().catch(()=>{})})}
const homeCoverTimers=[];startCoverReels(document.querySelector(".category-grid"),homeCoverTimers);
