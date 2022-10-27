/*Function:- function is a group of statement  where we perform a specific task 
we have different different type function 
1.Normal function 
2.function declaration and function expression 
3.arrow function 
4.IIFE Function 
5.Anonymous function
6.callBack function 
7. HOF Function a. Map b. Reduce c. filter */

//1. Normal function 
// function normal (num1,num2){
//     return num1+num2
// }
// console.log((normal(4,5)))

//2.fuction experesion => when we consider normal funtion as a variable name is called function expression
// let normal = function (num1,num2){
// return num1*num2
// }
// console.log(normal(6,7))

//3. Arrow function => 
// let arrow = ((a,b)=>{
// return a*b
// })
// console.log(arrow(6,5))

//4. IIEF Function  => imediatly invoked fuction expression
// (function IIEF (){
// console.log("IIEF")
// }
// ) ()

//5. Anonymous function => Anonymous function is a function without name
// let Anonymous = function (){
//     console.log("hi")
// }
// Anonymous()

//6. CallBack function => when we call function inside the another function is it called anonymous function 
//and function get passed as a parameter like:- setTimeout 

// function CallBack (){
//     console.log("hello")
// }
// setTimeout(CallBack,1000) //here setTimeout is a callback function 

//7. HOF => when any function get passed as a argument this is called HOF , HOF function takes CallBack function as a parameter
//there mostly use hof function => Map function , Reduce function , Filter Function and ForEach function 

Example:-1 //Map function 
// arr = [2,3,4,5,6]  //multily with 2 number 

// arr.map ((num)=>{
//    console.log(num*2)
// })

Example:-2// 2 in all numbers

// arr = [2,4,5,6,7]

// arr.map((num)=>{
// console.log(num+2)
// })

//2.Filter Function 
Exaple:-1
//  arr = [3,4,5,6,2] //check condition value is greater than 2 

//  arr.filter ((num)=>{
//     console.log(num>2)
//  })


Example:-2 
// const people = [
//     {name: 'Adam', age: 30},
//     {name: 'Bob', age: 40},
//     {name: 'Carl', age: 30},
//   ];
//   const results = people.filter(element => {
//     // 👇️ using OR (||) operator
//     return element.age === 40 || element.name === 'Carl';
//   });
  
//   // 👉️ [{name: 'Bob', age: 40}, {name: 'Carl', age: 30}]
//   console.log(results);
  Example:-1
  //3. Reduce function 
  const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: JavaScript is fun.

