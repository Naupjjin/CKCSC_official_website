function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const cardsData = [
    {
      name: "林旺豪(Aukro)",
      role: "社長/教學",
      description: "純愛戰士，反獵奇反牛頭人好吃狗糧。享受教友學習熱忱的人。<br><br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_aukro/"
    },
    {
      name: "傅世寬(鯊魚)",
      role: "副社/公關", 
      description: "<br>興趣聽歌、打球、社交（？，然後會一點C++ html css，還喜歡騎車跟游泳。專長：我啥都會（沒",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_shark/"
    },
    {
      name: "陳韋帆(Spikkaido)",
      role: "教學/總務", 
      description: "<br>我的主要領域在競程，最近在活化我的線段樹技巧，好想變強QQ<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_chennn/"
    },
    {
      name: "蔡家澤(你)",
      role: "教學", 
      description: "<br>我好弱我只想要把APCS考好啊啊啊啊啊啊啊<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_you/"
    },
    {
      name: "廖文碩(skotono)",
      role: "教學", 
      description: "<br>I am the storm that is approaching<br><br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_skotono/"
    },
    {
      name: "楊皓宇(堇姬Naup)",
      role: "網管/美宣",
      description: "競程、專案、資安CTF都有涉獵，平時也喜歡畫畫，是<a href='http://hsvi.ddns.net'>HSVI玥綾繪師媽媽</a>，是一隻活了四千年的鶴仙姐姐，也喜歡和各領域的人交流。",
      imageSrc: "static/homeimg.png",
      IG:"https://linktr.ee/naupjjin"
    },
    {
      name: "范昀圻(Cheer•FAN)",
      role: "文書", 
      description: "C++ 2023年底APCS努力中 AI完全體 Artificial Labile Intelligence Cyberneted Existence，A.L.I.C.E 自律學習型高適應性人工智慧 探索中",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_cheerfan/"
    },
    {
      name: "蔡昀熹(BalloonteHsi)",
      role: "活動", 
      description: "mproving my English…<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/cgbx_ckcsc36th_hsi/"
    },
    {
      name: "李日凱(土撥鼠)",
      role: "公關/美宣", 
      description: "成功麥塊社公關，興趣有聽歌和彈吉他，努力擴大自己交友圈中<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_rekai/"
    },
    {
      name: "謝佳勳(josh)",
      role: "網管", 
      description: "主要學習網頁,擅長尬聊,居住於召喚師峽谷<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_josh/"
    },
    {
      name: "林育廷(ddd)",
      role: "文書/網管長",
      description: "同時擔任<a href='http://hsvi.ddns.net'>HSVI幽夜工作室副社長</a>一職，致力於學習NLP和LLM領域。",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_ddd/"
    },
    {
      name: "陳仕愷(shikai)",
      role: "公關", 
      description: "喜歡攝影、聽歌、看劇、打球、社交，希望能認識更多人，學好網頁<br>ㅤ",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_shikai/"
    },
    {
      name: "林禹睿(rcherry)",
      role: "教學", 
      description: "我喜歡做遊戲還有競程。ROBLOX IS NOT A KIDS GAME",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_cherry/"
    },
    {
      name: "陳柏叡(Ruei)",
      role: "網管", 
      description: "主要學習網頁，興趣是看VT和打APEX，トワ單推",
      imageSrc: "static/homeimg.png",
      IG:"https://www.instagram.com/ckcsc36th_ruei/"
    },
    
  ];
  shuffle(cardsData)

const cardContainer = document.getElementById("card-container");

function createCard(data) {
const cardDiv = document.createElement("div");
cardDiv.classList.add("col-12", "col-md-4");

const cardContent = `
    <div class="card mb-3" style="width: 18rem;">
    <a href="${data.IG}"><img src="${data.imageSrc}" class="card-img-top" style=" height:21rem; object-fit: cover;" alt="..."></a>
    <div class="card-body">
        <h3 class="card-title">${data.name}</h3>
        <h5>${data.role}</h5>
        <p class="card-text">${data.description}</p>
    </div>
    </div>
`;

cardDiv.innerHTML = cardContent;
cardContainer.appendChild(cardDiv);
}


function displayCardsInRows() {
let rowDiv;
for (let i = 0; i < cardsData.length; i++) {
    const data = cardsData[i];
    createCard(data);
    if ((i + 1) % 3===0 || i===cardsData.length - 1) {
    
    rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    cardContainer.appendChild(rowDiv);
    }
}
}

displayCardsInRows();