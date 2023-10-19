"use strict"
function showMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`7 * ${i} = ` + (7*i));
    }
};
showMultiplicationTable();
// Math.floor(Math.random() * 200)
 for (let i = 0; i < 10 ; i++) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)+ 20);
    if (randomNumber % 2 === 0) {
        console.log( randomNumber+ " is even");
    }else
     console.log(randomNumber + " is odd");
 }

for (let i = 1; i < 10; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num += i;
    }
    console.log(num);
}

for (let i = 1; i <= 20; i++){
   let num = 105
    console.log(num - (i*5))
}

