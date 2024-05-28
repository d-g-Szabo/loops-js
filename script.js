//we run this code using node app

//for loops
//we usre a for loop when we want to do an action for a specific amount of times

// for (initialization; condition; afterthought) {
//code block
// }

//initialization: we set a variable to a value that we want the loop to start from
//condition: we set a condition that must be true for the loop to run
//afterthought: we change the value of the variable in some way after each iteration so we can met the condition

for (let index = 0; index < 5; index++) {
  console.log(index);
}

//first the condition is checked, if it is true, the code block runs
//the afterthought runs after the code block

//example
// for (let index = 0; index < 3; index++) {
//   let myPtag = document.createElement("p");
//   myPtag.textContent = "I am a p tag number " + index;
//   div.appendCHild(myPtag);
// }

let myArray = ["value1", "value2", "value3", "value4", "value5"];

for (let index = 0; index <= myArray.length; index++) {
  console.log(index);
}

//while loop
//while loop when we want to run a code block for an unlimited amount of times until a condition is met
// while (condition === true) {
//   code block
// }

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

//example
isLoggedIn = true;
while (isLoggedIn) {
  console.log("You are logged in");
  isLoggedIn = false;
}

//other types of loops

//for of loop
//for of loop is used to iterate over an array or a string
// for (let variable of array) {
//   code block
// }
let subjects = ["math", "english", "science", "history"];
for (let subject of subjects) {
  console.log(subject);
}

//array method
//forEach
//forEach is a method that is used to iterate over an array
subjects.forEach(function (subject) {
  console.log(subject);
});

//workshop
//for loops
for (let index = 0; index < 5; index++) {
  console.log(`Iteration number ${index}`);
}

//while loop
let counterTwo = 0;
while (counterTwo <= 5) {
  console.log(counterTwo);
  counterTwo++;
}

//while with random number
let keepLooping = true;
let i = 0;
while (keepLooping) {
  let randomNumber = Math.random();
  console.log(i);
  if (randomNumber < 0.1) {
    keepLooping = false;
  }
  i++;
}

//looping over arrays
let favFood = ["pizza", "pasta", "burger", "fries"];
for (let index = 0; index < favFood.length; index++) {
  console.log(favFood[index]);
}

//for of loop

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

//forEach
foods.forEach(function (food) {
  console.log(food);
});

foods.forEach(function (food, index) {
  console.log(index, food);
});

//Create an array of your favourite animals, loop over the array and write it to the console.
let favAnimals = ["dog", "cat", "rabbit", "fish"];
for (let index = 0; index < favAnimals.length; index++) {
  console.log(favAnimals[index]);
}

//Create an array of your favourite colours, loop over the array and write it to the console.
let favColours = ["red", "blue", "green", "yellow"];
for (const color of favColours) {
  console.log(color);
}

//Create an array of your favourite numbers. Loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!)
let favNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counterLast = 0;
while (counterLast < favNumbers.length) {
  console.log(favNumbers[counterLast]);
  counterLast++;
}
