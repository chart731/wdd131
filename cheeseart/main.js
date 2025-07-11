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