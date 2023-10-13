"use strict";
// Using strict makes it more strict when writing Javascript

// when working with a team or at a enterprise they tend to utilize strict
let favoriteColor = "black";
console.log(favoriteColor);

//added the code from the HTML file
let student_Name = "Yadriel";
console.log(student_Name);// this is the code from the html

//Alert! - it is a pop up message to the user
alert('Hello!')
//We can concanate = add from a variable
alert("Hello from " + student_Name)// this adds a to the alert message

// confirm - add as ability to capture a boolean
//when using confirm you dont have to add ":boolean" the system adds it automatically
let confirmed = confirm('We have lunch at 12:30 today?');
console.log(confirmed);

// prompt- a pop up message to the user from JS that asks for a text value
let userString = prompt('What is your favorite sport?');
console.log(userString);
