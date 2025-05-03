const themeSelector = document.querySelector("#theme-select");
const body = document.body;
const logoImage = document.querySelector("img");

function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logoImage.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logoImage.src = 'byui_logo.webp';
    }   
}


themeSelector.addEventListener('change', changeTheme);