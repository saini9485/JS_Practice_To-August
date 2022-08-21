question: -1;
// Find Cube of a number

// function cub (num){
// let Cub = num*num*num
// return Cub
// }
// console.log(cub(5))

question: -2;
//Take two numbers and find the quotient and remainder.

// function quotientRemainder (num1,num2) {
//     let quo = Math.floor(num1/num2)
//     let rem = num1%num2
//     return (quo + " " + rem)
// }
// console.log( quotientRemainder(10,2))

question: -3;
//Take temperature as input and convert it from celsius to fahrenheit.

// function celFah (tem){
// let CelToFah = ((9/5)*tem)+32;
// return CelToFah;
// }
// console.log(celFah(34))

question: -4;
//Take two numbers and swap them.

// function swapNumber(a, b) {
//   let c;
//   a = b;
//   b = c;
//   c = a;
//   return `${a} ${b}`;
// }
// console.log(swapNumber(12, 10));

question:- 5
//Take salary of five employees and print the average salary of all the employees.

// function avg_Sal (emp1,emp2,emp3,emp4,emp5){
// let Agv_Sal = ((emp1+emp2+emp3+emp4+emp5)/5);
// return Agv_Sal;
// }
// console.log(avg_Sal(10,10,10,10,10))

question :-6
//Take a number and return the sum of first and last digit.

// function sumF_L (num){
//     let first = Math.floor(num/10)
//     let last = num%10
//     sum =  (first+last)
//     return sum
// }
// console.log(sumF_L(56))

question:-7
//Take a 3 digit number and print the reverse of that number.

// function reverseNumber (num){
//     let x = (num%10);
//     let d = Math.floor(num/10);
//     let y = (d%10);
//     let z = Math.floor(d/10);
//     // make sure you return the answer
//     return (`${x},${y},${z}`)
//   }
// console.log(reverseNumber(123))

question:-8
//Given years,months and days as input, return the number of days as output.

// function days (years,months,days){
//     let Days = (years*365+months*30+days*1)
//     return Days
// }
// console.log(days(1,12,10))

question:-9
//Given the number of hours,minutes and seconds, return the number of seconds.

function seconds (hours,minuts,seconds){
    let Seconds = (hours*3600+minuts*60+seconds*1)
    return Seconds ;
}
console.log(seconds(1,60,1))