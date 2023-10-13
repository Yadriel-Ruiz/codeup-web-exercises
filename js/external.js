"use strict";
// This says hello into the console
console.log("Hello from external JavaScript");

alert("Welcome to my website!");
//Welcome alert to the user

let Color = prompt("What is your favorite color?","Black");
//This is asking the user favorite color

alert('Great, '+ Color + ' is my favorite color too!');
// This takes the value of the prompt and replies using it.

let MovieA = prompt("How many days did you rent Little Mermaid?","3");
//Movie Little Mermaid

let MovieB = prompt("How many days did you rent Brother Bear?","5");
//Movie Brother Bear

let MovieC = prompt("How many days did you rent Hercules?","1");
// Movie Hercules

let rate = prompt("What is the daily rental rate?","3");
//Takes in the rate per rental day

let totalCost = (Number(MovieA) + Number(MovieB) + Number(MovieC))*Number(rate);
//Takes in total number if days each movie is and multiplies it to the rate day

alert("You will have to pay $" + totalCost);

let GoogleHour = prompt("How many hours did you work for Google this week?","6");
// Asking user how many hours were worked at Google

let GooglePay = prompt("What is the hourly pay for Google?","400");
//Asking for the hourly rate at Google

let AmazonHour = prompt("How many hours did you work for Amazon this week?","4");
// Asking user how many hours were worked at Amazon

let AmazonPay = prompt("What is the hourly pay for Amazon?","380");
//Asking for the hourly rate at Amazon

let FacebookHour = prompt("How many hours did you work for Facebook this week?","10");
// Asking user how many hours were worked at Facebook

let FacebookPay = prompt("What is the hourly pay for Facebook?", "350");
//Asking for the hourly rate at Facebook

let FacebookTotal = Number(FacebookHour)*Number(FacebookPay);
//Calculating total pay for working with Facebook

let AmazonTotal = Number(AmazonHour)*Number(AmazonPay);
//Calculating total pay for working with Amazon

let GoogleTotal = Number(GoogleHour)*Number(GooglePay);
//Calculating total pay for working with Google

let TotalPay = FacebookTotal + AmazonTotal + GoogleTotal;
// Add total from all three companies

alert("You will get paid $" + TotalPay + " for this week.");
//Pushes an alert with total amount of pay for the week