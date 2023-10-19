"use strict"

let x = 1;
let num = 1;
while(x <= 16){
    num = num * 2
    console.log(num);
    ++x;
}

let allCones = Math.floor(Math.random() * 50) + 50;
let conesToSell = allCones;
console.log(conesToSell);
do {
    let conesBought = Math.floor(Math.random() * 5) + 1
    if (conesToSell > conesBought) {
        console.log(`${conesBought} was sold`)
        conesToSell -= conesBought;
    }
    else if (conesToSell < conesBought) {
        console.log(`Cannot sell you ${conesBought} I only have ${conesToSell} left`)
    }
    else {
        console.log('I sold all the cones');
        conesToSell -= conesBought;
    }
}while (conesToSell > 0 )