//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

const grades = ["A", "B", "A"];
function convertGrade(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGrade);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
document.querySelector("#GPA").innerHTML = gpa;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"]
const smallFruits = fruits.filter(function (fruit) {
    return fruit.length < 6;
});
document.querySelector("#Words").innerHTML = smallFruits;

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckySpot = numbers.indexOf(luckyNumber);
document.querySelector("#Lucky").innerHTML = luckySpot;