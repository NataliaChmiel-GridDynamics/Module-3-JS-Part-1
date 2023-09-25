//Values and Variables

let country = "Polska";
let continent = "Europe";
let population = 38000000;

console.log(country);
console.log(continent);
console.log(population);

//Data Types

let isIsland = false;
let language;

console.log(isIsland);
console.log(language);

//Basic Operators
//1
let halfOfPopulation = population / 2;

//2
console.log(population + 1);

//3
let isBigger = population > 6000000;

//4
let isSmallerThanAvg = population < 33000000;

//5
let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

//Equality Operators: == vs. ===
//1

//if statements
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("Noborders");
}

if (language == "English" && population < 50000000 && isIsland == false) {
  console.log(`${country} is a place for you!`);
} else {
  console.log(`${country} is not a place for you:(`);
}

if (population > 33000000) {
  console.log(`Portugal's population is 22 milion below average`);
}

//switch cases
const popularLanguage = "Chinese";
switch (popularLanguage) {
  case "Chinese" || "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too!!");
}
