"use strict"



let oddNumber = parseInt(prompt("Please input a odd number between 1 - 50 :"));
let param = (oddNumber < 50 && oddNumber > 0 && (oddNumber % 2 !== 0));

while (param === false) {
    oddNumber = parseFloat(prompt('Invalid input! Please input a odd number between 1 -50 :'));
    param = (oddNumber < 50 && oddNumber > 0 && (oddNumber % 2 !== 0));
    if (param === true) {
        break;
    }
}


console.log( "Random odd number to skip is: " + oddNumber);
for ( var i= 1; i < 50; i++){

    if ( i % 2 === 0){
        continue;
    }
    if( oddNumber === i ){
        console.log( "Yikes! Skipping number:" + i);
    }
    else{
        console.log("Here is an odd number:" + i)
    }
    if (i>=49){
        break;
    }
}
