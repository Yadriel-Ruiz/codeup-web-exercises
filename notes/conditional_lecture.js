//CONDITIONALS: CODE THAT RUNS WHEN WE MEET A CERTAIN  CONDITION

// IF STATEMENTS: WORKS WHEN THERE IS A MET CONDITION

// if (condition){
//     this code will run if our condition is true;
// }

// Consider this sentence: "When I run out of milk: I go to the store to get more."
// condition: Am i out of milk
//Action: Go to the store
let gotMilk = true //false
if(gotMilk===false){
    console.log("Im headed to the corner store to get milk. Dont expect me back")
}

// TO DO: I want to make a block of code that logs a message to the console when a variable is set to number 5
let possiblyFive = 5;
possiblyFive = '5'
if (possiblyFive === 5){
    console.log("Hey, that's five");
}

// We can also use our conditional logic in functions

// TO DO : I want to build a function that returns a string when I pass a number as an argument.

function isItANumber(parameter){
    if(typeof parameter === "number"){
        return "That's a number!";
    }
}

// SWITCH STATEMENTS ---------------
// a statement with multiple cases that will trigger based on the value of a variable

let color = prompt("What is your favorite color?").toLowerCase();

switch (color){
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "blue":
        alert("That is my sister favorite color");
        break;
    default:
        alert(color + " is a weird color");
        break;
}