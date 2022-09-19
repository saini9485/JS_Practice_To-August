Topic:-1 /*Hosting*/
//in javascript , when we can access the variable without declration 

Exaple:-0
//using test before declaring
// console.log(test);   // undefined
// var test;

Example:-1
name()
console.log(a)
var a =10;
function name(){
    console.log("Rajesh")
} //Rajesh , 10 => before running the code allocate undefine in mermory creation phase


// Example:-2
// name()
// console.log(a)
// let  a =10;
// function name(){
//     console.log("Rajesh")
// }  // Rajesh , error =>because let and consts is a block scope it will create a spreade 
// //memory it will go in script block that't why it will give error 


Example:-2
// name()
// console.log(a)
// const a =10;
// function name(){
//     console.log("Rajesh")
//}//Rajesh , error

Example:-3
// console.log(name)
// console.log(a)
// var a =10;
// function name(){
//     console.log("Rajesh")
// }   //actual copy of Function


Example:-4
// program to display value
// var a = 4;
// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }
// greet(); // hello
// console.log(b);
/*when the variable is used inside the function, 
the variable is hoisted only to the top of the function. */


Topic:-2/*Temporal dead_Zone */
/* */

Example:-1 /* in Case of var */
console.log(x); //undefine
    var x = 6;
    console.log(x); // 6


Example:-2
	// console.log(x); //undefine
	// console.log(z); //error 
	// var x = 6;
	// let z = 6;
	// console.log(x);
	// console.log(z);


    Topic:-3 /*Event Loop */
Example:- 1
    const lunch = () => console.log("It's time for lunch!");

    const dinner = () => console.log("It's time for dinner!");
    
    const breakfast = () => {
      console.log("Time to breakfast!");
      setTimeout(lunch, 3000);
      dinner();
    };
    
    breakfast();
