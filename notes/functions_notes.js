"use strict";

console.log("It is connected")

// using functions
//console.log(helloWorld());

console.log(parseInt("67"));
//Takes a string number and converts it to a number

console.log(confirm("Would you like to submit"));
//Takes an argument and provides a true or false

// let hello = helloWorld();
// console.log(helloWorld());

// --------------------Defining functions-----------------------

// A function is made of several parts. These include:

// A key word function
//The name of the function(always in camel case in JS
// A set of parentheses
// A body, which includes the logic you write
// A return statement

// * inputs(parameters) and outputs(return statements) are optional

// Example
//function helloWorld(){
//   return "Hello World";
    // anything after a return statement stops the rest of the function
    //anything before the return statement will run with the function
//}

// Example 2 ( A function with inputs)

// function addNumbers(num1, num2){
// let sumTotal = num1 + num2;
//     return sumTotal
// }
//console.log (addNumbers(2,5));

// ANONYMOUS FUNCTIONS-------------

// an Anonymous function needs to be stored in a variable
// const increment = function (x){
//     return x+1;
// }
//
// let two = increment(1);
// console.log(two);

//ARROW FUNCTIONS-----------
//arrow functions they work exactly like functions except with arrows
// function helloWorld(){
//     console.log("hi imugi");
//     return "Hello World";
// }

//const helloWorld2 = () =>{return "hello World"}

//Commonly named the —> Fat Arrow
//
// const myFunction = (name) => {
//   return `My name is ${name}!`;
// }
//
// Also don’t need the return word, if single line.


// DEFAULT PARAMETERS FOR FUNCTIONS




//----------------FUNCTION SCOPE---------------

// Global Variables
let globalVar = "I'm a global variable"

function varAlert(){
    let localVar = "Im a local variable";
    alert(globalVar);
    return localVar;
}
console.log(varAlert());


//-------------GUIDELINES AND BEST PRACTICES-------------

//If your function hits 20 lines consider refactoring
//A function should do one thing
// Functions should be at the top of your page
