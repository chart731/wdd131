function dialogTemp(src, alt) {
    return `<dialog class="viewer"><img src="${src}" alt="${alt}"><button class='close-viewer'>X</button></dialog>`
}

const big = document.querySelector(".main-info");
function handlePicture(event) {
    const clickedImage = event.target.closest("img");
    const bigImagesrc = clickedImage.src.split("-")[0] + "-big.jpg";
    document.body.insertAdjacentHTML("afterbegin", dialogTemp(bigImagesrc, "full size picture"));
    const viewer = document.querySelector(".viewer");
    viewer.showModal();
    const closeButton = document.querySelector(".close-viewer")
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = event.target.closest(".viewer");
    if (viewer) {
    viewer.close();
    viewer.remove();
    }
}

big.addEventListener("click", handlePicture);

const pics = [
    {
        image1: 'portrait-sm.jpg',
        image2: 'octopus-sm.jpg',
        p1: "Hi, I'm Eva! I create art under the alias Cheese. I'm a budding artist that experiments in all different art mediums. I have been experimenting and creating for around 10 years, trying different styles to see what fits for me. It's been a fun process so far, and is super rewarding! The creative process is something that helps me relax, and I want others to be able to find that for themselves.",
        p2: "If you are interested in art, but don't know what your style is yet, I encourage you to just get creating! It took me years to figure out what my style was. I hope that by sharing my art, I can help inspire others to pick up a pen, brush, or block of clay, and just try your hand at it. You'll never know what you're missing out on if you don't try it out first!"

    }
]

function picTemplate(pic) {
    return `
        <p class="bio">${pic.p1}</p>
        <img class="portrait" src="${pic.image1}" alt="Self Portrait">
        <img class="octopus" src="${pic.image2}" alt="Clay Octopus">
        <p class="sub-info">${pic.p2}</p>
    `
}

function rendermain(mainList) {
    const mainElement = document.querySelector(".main-info");
    const mainHtml = mainList.map((pic) => picTemplate(pic)).join("");
    mainElement.innerHTML = mainHtml;
}

rendermain(pics);