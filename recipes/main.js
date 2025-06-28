import recipes from "./recipes.mjs";

function random (num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNumber = random(listLength);
    return list[randomNumber];
}

console.log(getRandomListEntry(recipes));

function tagsTemplate(tags) {
    const html = tags.map((tag) => `<div>${tag}</div>`)
    return
}

function ratingTemplate(rating) {
    let hmtl = `<span
	                class="rating"
	                role="img"
	                aria-label="Rating: ${rating} out of 5 stars"
>`
}

function recipeTemplate(recipe) {
    return `<section class="recipe">
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
