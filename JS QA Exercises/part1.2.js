//Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its 
            capital is ${capitalCity}`;
}
const describePoland = describeCountry("Poland", 38, "Warsaw");
const describeUk = describeCountry("England", 68, "London");
const describeCroatia = describeCountry("Croatia", 4, "Zagreb");

console.log(describePoland);
console.log(describeUk);
console.log(describeCroatia);

//Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPercentage = percentageOfWorld1(1441);
const polandPercentage = percentageOfWorld1(38);
const croatiaPercentage = percentageOfWorld1(4);
console.log(chinaPercentage);
console.log(polandPercentage);
console.log(croatiaPercentage);

function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}

const chinaPercentage2 = percentageOfWorld1(1441);
const polandPercentage2 = percentageOfWorld1(38);
const croatiaPercentage2 = percentageOfWorld1(4);
console.log(chinaPercentage2);
console.log(polandPercentage2);
console.log(croatiaPercentage2);

//Arrow Functions
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const chinaPercentage3 = percentageOfWorld3(1441);
const polandPercentage3 = percentageOfWorld3(38);
const croatiaPercentage3 = percentageOfWorld3(4);
console.log(chinaPercentage3);
console.log(polandPercentage3);
console.log(croatiaPercentage3);

//Functions Calling Other Functions

const describePopulation = (country, population) => {
  return `${country} has ${population} milion people, which is about ${percentageOfWorld1(
    population
  )} of the world`;
};
console.log(describePopulation("China", 1441, chinaPercentage));
console.log(describePopulation("Poland", 38, polandPercentage));
console.log(describePopulation("Croatia", 4, croatiaPercentage));

//Introduction to Array

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [1441, 38, 4, 68];

const percentage = [];
populations.forEach((element) => {
  percentage.push(percentageOfWorld1(element));
});

//Basic Array Operations (Methods)
const neighbouringCountries = ["Germany", "Czech", "Slovakia"];
neighbouringCountries.push("Utopia");
neighbouringCountries.pop();

neighbouringCountries[neighbouringCountries.indexOf("Germany")] = "Poland";
neighbouringCountries[neighbouringCountries.indexOf("Czech")] = "UK";
neighbouringCountries[neighbouringCountries.indexOf("Slovakia")] = "Denmark";

console.log(neighbouringCountries);

//Iteration: The for Loop

for (let i = 0; i < 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

for (let i = 0; i < populations.length; i++) {
  let percentages2 = [];
  percentages2.push(percentageOfWorld1(populations[i]));
}

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
  console.log(percentages2);
}
console.log(percentage.toString() === percentages2.toString());

//Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Poland", "Sweden", "Ukraine"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbour = listOfNeighbours[i];
  for (let j = 0; j < neighbour.length; j++) {
    const country = neighbour[j];
    console.log(`Neighbour: ${country}`);
  }
}

//LECTURE: The while Loop
i = 0;
while (i < populations.length) {
  let percentages3 = [];
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
  console.log(percentages3);
}

//Introduction to Objects

const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "Polish",
  population: 38,
  neighbours: [
    "Czech",
    "Slovakia",
    "Germany",
    "Ukraine",
    "Belarus",
    "Lithuania",
    "Russia",
  ],
  describe: function () {
    return `${this.country} has ${this.population} milion polish-speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};

myCountry.checkIsland();
console.log(myCountry.isIsland);

console.log(myCountry.describe());

console.log(
  `${myCountry.country} has ${myCountry.population} milion polish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}.`
);
