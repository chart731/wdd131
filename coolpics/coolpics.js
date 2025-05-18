const menubutton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu nav");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menubutton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function dialogTemp(src, alt) {
    return `<dialog class="viewer"><img src="${src}" alt="${alt}"><button class='close-viewer'>X</button></dialog>`
}

const gallery = document.querySelector(".gallery");
function handleGallery(event) {
    const clickedImage = event.target.closest('img');
    const bigImagesrc = clickedImage.src.split("-")[0] + "-full.jpeg";
    document.body.insertAdjacentHTML("afterbegin", dialogTemp(bigImagesrc, "fullsizeimage"));
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

gallery.addEventListener("click", handleGallery);