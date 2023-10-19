/* Loops continue utilizing a function until false

=======WHILE LOOPS=======1
let i = 0;
while (i<10){
console.log('while loop iteration #' + i);
i++;
}

=====Common application
let randomResult = 0;
let loopCount = 0;

while (randomResult !== 8){
randomResult = Math.floor(Math.random() * (10-1+1)+1);
console.log(randomResult);
loopCount++;
}

console.log(`The random result: $randomResult}`;
console.log(`The number of loops: ${loopCount}`;

============DO WHILE LOOPS
let i =10;
do{
console.log('while loop iteration'+i);
i++;
} while (i<10);

===========Common application

let userResponse;
do {
console.log("program running.....");
userResponse = confirm("would you like to run the program again?")
}while(userResponse === true);

================For Loops
for(let i =0; i<10;i++){
console.log('for loop iteration #' +1;
}

==============common application
let arrNum = (1,2,3,4,5,6,7);
for(let i =0; i<arrNum,legth;i++){
console.log(arrNum[i])
}

=============uncommon application
for (let i =0, j = 9; i <10;i++,j--){
console.log('for loop iteration #' + i + ',j= ' +j);
}


==========Break

var numberToStopAt = 5;

for(let i = 1; i<100; i++) {
console.log('Loop counter is: ' +i);

if(i===numberToStopAt) {
console.log('We have reached the stopping point: break!');
//use the break keyword to exit from the while loop
break;
//nothing after the break will get processed
console.log('You will never see this line');
}
}

 */

//Example #1=======================================--------------------------------
// let i = 0;
// while (i<=10){
//     console.log('while loop iteration #' + i);
//     i++;
// }
// //common application===============================
// let randomResult = 0;
// let loopCount = 0;
//
// while (randomResult !== 8){
//     randomResult = Math.floor(Math.random() * (10-1+1)+1);
//     console.log(randomResult);
//     loopCount++;
// }
//
// console.log(`The random result: ${randomResult}`);
// console.log(`The number of loops: ${loopCount}`);

//Example #2========================================----------------------------
// let i =10;
//
// do{
//     console.log('while loop iteration'+i);
//     i++;
// } while (i<10);
//Common application===============================
// let userResponse;
// do {
//     console.log("program running.....");
//     userResponse = confirm("would you like to run the program again?")
// }while(userResponse === true);

// Example #3=======================================
// for(let i =0; i<10;i++){
//     console.log('for loop iteration #' +1);
// };
// //Common Application
// let arrNum = (1,2,3,4,5,6,7);
// for(let i =0; i<arrNum.length ;i++){
//     console.log(arrNum[i]);
// }
