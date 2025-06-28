import recipes from "./recipes.mjs";

function random (num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNumber = random(listLength);
    return list[randomNumber];
}

function tagsTemplate(tags) {
    return tags.map((tag) => `<div>${tag}</div>`).
    join("");
}

function ratingTemplate(rating) {
    let html = `<span
	                class="rating"
	                role="img"
	                aria-label="Rating: ${rating} out of 5 stars"
>`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += ` <span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
    html += `</span>`
    return html;

}

function recipeTemplate(recipe) {
    return `<section class="main-recipe recipe">
                <img class="image" src="${recipe.image}" alt="${recipe.name}">
                <div class="info">
                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                <h2 class="name">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
                </div>
            </section>`
}

function renderRecipes(recipeList) {
    const recipesElement = document.querySelector(".main-box");
    const recipesHtml = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
    recipesElement.innerHTML = recipesHtml;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}
init();

const searchButton = document.querySelector(".search-container button");
const searchInput = document.querySelector(".search-container input");

searchButton.addEventListener("click", searchHandler);

function searchHandler(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(searchTerm);
    renderRecipes(filteredRecipes);
}

function filterRecipes(searchTerm) {
   const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        recipe.recipeIngredient.find((item) => item.toLowerCase().includes(searchTerm))
    );

    const sorted = filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return sorted;
}