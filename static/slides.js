const slidesData = [
    {
        title: "Tkinter",
        imgSrc: "static/slides/tk.png",
        link: "https://slides.com/naup96321/copy-of-9dd7a6",
        creator: "製作:堇姬"
    },
    {
        title: "RSA加密",
        imgSrc: "static/slides/RSA.png",
        link: "https://slides.com/naup96321/code",
        creator: "製作:堇姬"
    },
    {
        title: "Linux",
        imgSrc: "static/slides/Linux.png",
        link: "https://slides.com/aukrolin/copy-of",
        creator: "製作:Aukro"
    },
    {
        title: "Git",
        imgSrc: "static/slides/Git.png",
        link: "https://slides.com/ddd-dong/ddd-5e45f1",
        creator: "製作:ddd"
    },
    {
        title: "強化學習",
        imgSrc: "static/slides/RL.png",
        link: "https://slides.com/ddd-dong/rl",
        creator: "製作:ddd"
    }
    
];

const slideContainer = document.getElementById('slideContainer');

slidesData.forEach(slide => {
    const col = document.createElement('div');
    col.classList.add('col-lg-6');
    col.innerHTML = `
        <div class="position-relative mb-5">
            <a href="${slide.link}"><img class="img-fluid rounded-3 mb-3" src="${slide.imgSrc}" alt="..." /></a>
            <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="${slide.link}">${slide.title}</a>
            <p>${slide.creator}</p>
        </div>
    `;
    slideContainer.appendChild(col);
});
//ckcscCTF{I_L1K3_H7ML}