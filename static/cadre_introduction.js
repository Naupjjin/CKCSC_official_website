const cardsData = [
    {
      name: "林旺豪(Aukro)",
      role: "社長/教學",
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Aukro.png",
      IG:"https://www.instagram.com/ckcsc36th_aukro/"
    },
    {
      name: "傅世寬(鯊魚)",
      role: "副社/公關", 
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Fu.png",
      IG:"https://www.instagram.com/ckcsc36th_shark/"
    },
    {
      name: "陳韋帆(Spikkaido)",
      role: "教學/總務", 
      description: "我的主要領域在競程，最近在活化我的線段樹技巧，好想變強QQ",
      imageSrc: "static/cadre_IMG/spikkaido.jpg",
      IG:"https://www.instagram.com/ckcsc36th_chennn/"
    },
    {
      name: "蔡家澤(你)",
      role: "教學", 
      description: "我好弱我只想要把APCS考好啊啊啊啊啊啊啊",
      imageSrc: "static/cadre_IMG/you.jpg",
      IG:"https://www.instagram.com/ckcsc36th_you/"
    },
    {
      name: "廖文碩(skotono)",
      role: "教學", 
      description: "I am the storm that is approaching",
      imageSrc: "static/cadre_IMG/skotono.jpg",
      IG:"https://www.instagram.com/ckcsc36th_skotono/"
    },
    {
      name: "楊皓宇(堇姬Naup)",
      role: "網管/美宣",
      description: "競程、專案、資安CTF都有涉獵，平時也喜歡畫畫，是一隻活了四千年的鶴仙姐姐",
      imageSrc: "static/cadre_IMG/Naup.jpg",
      IG:"https://www.instagram.com/ckcsc36th_naup/"
    },
    {
      name: "范昀圻(Cheer•FAN)",
      role: "文書", 
      description: "C++ 2023年底APCS努力中 AI完全體 Artificial Labile Intelligence Cyberneted Existence，A.L.I.C.E 自律學習型高適應性人工智慧 探索中",
      imageSrc: "static/cadre_IMG/Cheer.jpg",
      IG:"https://www.instagram.com/ckcsc36th_cheerfan/"
    },
    {
      name: "蔡昀熹(BalloonteHsi)",
      role: "活動", 
      description: "mproving my English…",
      imageSrc: "static/cadre_IMG/Hsi.jpg",
      IG:"https://www.instagram.com/cgbx_ckcsc36th_hsi/"
    },
    {
      name: "李日凱(土撥鼠)",
      role: "公關/美宣", 
      description: "成功麥塊社公關，興趣有聽歌和彈吉他，努力擴大自己交友圈中",
      imageSrc: "static/cadre_IMG/rekai.jpg",
      IG:"https://www.instagram.com/ckcsc36th_rekai/"
    },
    {
      name: "傅世寬(鯊魚)",
      role: "", 
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Fu.png",
      IG:""
    },
    {
      name: "林旺豪(Aukro)",
      role: "社長/教學",
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Aukro.png",
      IG:""
    },
    {
      name: "傅世寬(鯊魚)",
      role: "", 
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Fu.png",
      IG:""
    },
    {
      name: "傅世寬(鯊魚)",
      role: "", 
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Fu.png",
      IG:""
    },
    {
      name: "傅世寬(鯊魚)",
      role: "", 
      description: "這是一段 HTML 程式碼，其中包含三個引入 JavaScript 檔案的 script 標籤",
      imageSrc: "static/cadre_IMG/Fu.png",
      IG:""
    },
    
  ];


const cardContainer = document.getElementById("card-container");

function createCard(data) {
const cardDiv = document.createElement("div");
cardDiv.classList.add("col-12", "col-md-4");

const cardContent = `
    <div class="card" style="width: 18rem;">
    <a href="${data.IG}"><img src="${data.imageSrc}" class="card-img-top" alt="..."></a>
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