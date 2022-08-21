// //procedural vs object oriented 
// //first we will create a object 

// let person1 = {
//     fullName: "Rajes saini",
//     "last name" : "saini",
//     age : 22
// };
// //now how i can access this properties
// console.log(person1.fullName)
// console.log(person1["last name"])
// console.log(person1.age)

//how can change the properties 
//first we have to access the we can   

// let person1 = {
//     firstName:"Rajesh",
//     lastName:"saini",
//     age:22,
//     fullName:function (){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// person1.fullName()
// //if we want access properties inside the function then we can use this keyword

// let person2 = {
//     firstName:"Virendra",
//     lastName:"verma",
//     age:21,
//     fullName:function (){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// person1.fullName()

// but this method is too long and also  this code is voiled DRY method means this concept
//does't fallow DRY method that't here i use class 
//for that i will create constructor  function 


//this is blue print of constructor function 

// function Person (first , last , age) {
// this.firstName = first   // this is called properties
// this.lastName = last
// this.age = age
// }


function Person (first , last , age) {
    this.firstName = first   // this is called properties
    this.lastName = last
    this.age = age
    }

 let person1 = new Person ( "Rajesh" , "Saini",23)   
 console.log(person1)


 let person2 = new Person ( "virendra" , "verma",21)   
 console.log(person2)
