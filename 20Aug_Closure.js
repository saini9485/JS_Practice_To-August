//closure is banned within  a lexical environment
//lexical environment is  a scope
//closure is combination of  a function when other inner function access variable
//of outer function this is called closure //and also we can say outer function variable with inner function

//what is advantage of closure
//1. it don't loss previous data it remain
//2.there data will not distroyed
//in case of normal function it loss our memory
//why we use closure 
// for save the time and made easy of code for replace the setTimeout 
example:-1

// d = 5
// function outerFunction (a){
// let b = 10;
// {
//     function innerFunction (){
//         let sum = a+b+d ;
//         console.log(`sum is ${sum}`) 
//     }
//     innerFunction()
// }
// }
// outerFunction(5) //20 

// function outerFunction (a){
//     let b = 10 
//     function innerFunction (){
//         let sum = a + b   ; 
//         console.log(sum )
//     }
//     innerFunction ()
// } 
// outerFunction (5) //15 


// d= 15
// function outerFunction  (a){
//     let b = 10 ;
//     function innerFunction (){
//         let sum = a+b+d ;
//         console.log(sum)
//     }
//     innerFunction ()
// }
// outerFunction (5)
example:-2

// 2 . Lost in parameters
// (function immediateA(a) {
//     return (function immediateB(b) {   //this is called closure 
//       console.log(a); // What is logged?
//     })(1);
//   })(0); //0


 // example :- 3
  // 3. who's who

//   let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
 

example: - 4

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }//3 3 3

example: - 5

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// } //3 3 3

example:-6

//Right or wrong message

// function createIncrement() {
//   let count = 0;
//   function increment() { 
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
  
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment(); 
// increment(); 
// increment(); 
// log(); // What is logged? // 0

example:-7

// function outer() {
//   let counter = 0;

//   function incrementCounter() {
//     // we have access to counter here even though it's defined in the parent scope
//     counter += 1;
//     return counter;
//   }
//   return incrementCounter();
// }

// console.log(outer());
// console.log(outer());//1,1

// function outer() {
//   let counter = 0;

//   function incrementCounter() {
//     // we have access to counter here even though it's defined in the parent scope
//     counter += 1;
//     return counter;
//   }
//   return incrementCounter;
// }

// let myFunc = outer();
// console.log(myFunc()); // 1 

example:-8
// // 
// function outer() {
//   let counter = 0;

//   function incrementCounter() {
//     // we have access to counter here even though it's defined in the parent scope
//     counter += 1;
//     return counter;
//   }
//   return incrementCounter();
// }

// console.log(outer());
// console.log(outer());//1,2


// example:- 9

// function outer() {
//   let counter = 0;

//   function incrementCounter() {
//     // we have access to counter here even though it's defined in the parent scope
//     counter += 1;
//     return counter;
//   }
//   return incrementCounter;
// }

// let myFunc = outer();
// console.log(myFunc());
// console.log(myFunc());

// let other = outer();
// console.log(other());
// console.log(other());

example:-10

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { 
//     console.log (i);
//    }, 1000 +i);
// }//

example:-11

// Outer function
function adder(a) {
  // Inner function/Closure
  function add(b) {
    console.log(a + b);
  }

  return add;
}

var add5 = adder(5);
var add10 = adder(10);

add5(10); //15 
add10(10); //20

example:-12

var minus = (function () {
  var counter = 999;
  return function () {
    counter -= 1;
    return counter;
  
  };
 
})();

minus();
minus();
minus();//96

