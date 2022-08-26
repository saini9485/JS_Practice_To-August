//example:-1 // Var Let and Const

// {
//     console.log(a)  //undefine
// }
// var a =10 ;
/*we can access anywhere because var is a globle scope*/
//example:-2 //Const
/* but is case of let and const we can't access outside of the bracket */

// {
//     console.log(a) //error
// }
// let a =10;

//Example:-3// ternary operator
//  (condition)?true:false
// (5==6)?console.log("yes"):console.log("no")

example: -4; // HOF
// let arr =[1,2,3,4,5,6]
// let multiple=arr.map((nums)=>{
//     return nums*2
// })
// console.log(multiple)

Topic: -1; // Closure

Example: -1;
//  var d = 10;
// function outerFunction (a){
// var b = 10;
// function innerFunction (){
//     let sum = a+b+d
//     console.log(sum)
// }
// innerFunction()
// }
// outerFunction(5)

Topic: -2; //synchronus and asynchrouns programming

example: -1; //synchrouns
// console.log('One');
// console.log('Two');
// console.log('Three');
// LOGS: 'One', 'Two', 'Three'

example: -2; //Asynchrouns
// console.log('One');
// setTimeout(() => console.log('Two'), 100);
// console.log('Three');
// LOGS: 'One', 'Three', 'Two'

Topic: -3; //Promise
//promise structure
// let Promises = new Promise ((resolve , reject)=>{
//     resolve("successfully")
//     reject ("unsuccessful")
// })
// Promises.then((value)=>{
//     console.log(value)
// })
// Promises.catch((value)=>{
//     console.log(value)
// })

Topic: -4; // async wait
example: -1;
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love Mom&Dad ");
//     });
//    let stope = await myPromise;
//    console.log(stope)
//   }
//   myDisplay();
//here async keyword is use return for a promise
//wait keyword is use for makes a wait untill promise is settled

/*with setTimeout */
example: -2;
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve("I love Mom&Dad ");}, 3000);
//     });
//    let result= await myPromise;
//    console.log(result)
//   }

//   myDisplay();

Example: -1; //async
// async function myFunction() {
//     return "Hello";
//   }
//   console.log(myFunction()) //Promise { 'Hello' }

example: -2; //async
// async function myFunction() {
//     return "Hello";
//   }
//   myFunction.then((result)=>{// here jo bhi value aayegi result variable me store hogi
// console.log(result)
//   }) //Hello

Example: -3;
//  let myFunction= async function () {
//         return "Hello";
//       }
//       myFunction().then((result)=>{
//      console.log(result)
//        }) //Hello

Example: -4; //async with Arrow Function
// let myFunction= async ()=> {
//     return "Hello";
//   }
//   myFunction().then((result)=>{
//  console.log(result)
//}) //Hello

Example: -1; // Await
//    async function test () {
//     console.log("2:Hello")
//     console.log("3:Hello")
//     console.log("4:Hello")
//    }
//    console.log("1:Hello")
// test()
// console.log("5:Hello") //1:Hello,2:Hello,3:Hello,4:Hello,5:Hello,
//without using Await Keyword

Example: -2; //with Await
// async function test () {
//     console.log("2:Hello")
//      await console.log("3:Hello")
//     console.log("4:Hello")
//    }
//    console.log("1:Hello")
// test()
// console.log("5:Hello") //1:Hello,2:Hello,3:Hello,5:Hello,4:Hello,

/*first it will print 1:Hello then test()function will be call it will go inside the 
function and it will print 2:Hello after that he get await it will print 3:Hello but 
now it will wait here because  here we used await that't why it will not go ahead
it will come outside of the function it will print 5:Hello again it will go inside the 
function and check work is completed or not if work is completed then will be return 
4:Helloe if will try to return this await without async it will show error */

//mostly async and await use for a fetching data from API
Example: -3; //fetching data from the API
// async function test() {
//   console.log("2:Hello");
//   let response = await fetch("url API");
//   let Wheather = await response.json();
//   console.log("3:Hello");
//   return Wheather;
// }
// console.log("1:Hello");
// let storeData = test();
// console.log("5:Hello");
// console.log(storeData) 

Example:-4 //fetch the data from API
// async function test() {
//     console.log("2:Hello");
//     let response = await fetch("url API");
//     let Wheather = await response.json();
//     return Wheather;
//   }
//  test().then((storeData)=>{
//     console.log(storeData) 
//  })
//  test().catch((error)=>{
//     console.log(error) 
//  })

Example:-5 //fetching data to easy way
// async function test() {
//     console.log("2:Hello");
//     return   (await fetch("url API")).json();
//   }
//  test().then((storeData)=>{
//     console.log(storeData) 
//  })
//  test().catch((error)=>{
//     console.log(error) 
//  })


Topic:-5 // Try  and Catch Method 
Example:-1
async function test() {
    try{
        let response = await fetch("url API");
        let Wheather = await response.json();
        return Wheather;
    }catch(error){
        console.log(error)
    }
  }
 test().then((storeresult)=>{
    console.log(storeresult) 
 })
 
