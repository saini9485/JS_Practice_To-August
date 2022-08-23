//prototype is a method which through can add properties or method outside of the canstructor function
//suppose that
// create a function constructor boiler plate
// let Person = function (firstName, lastName, age, location) {
//   (this.FirstName = firstName),
//     (this.LastName = lastName), //properties
//     (this.Age = age),
// (this.Location = location);
// suppose that we want to change age we will have to declear inside that constructor fucntion
//   this.changeAge = function (newAge) {    // method
//     this.chageAge = newAge;
//   };
// };
// //person1.chnageAge(29)
// let person1 = new Person("rajesh", "saini", 22, "india");
// console.log(person1);

//now in case of prototype we can add any properties or method outside of the constructor
example: -1; //constructor Class

// function Student(firstName, lastName, age, location) {
//   (this.FirstName = firstName),
//     (this.LastName = lastName),
//     (this.Age = age),
//     (this.Location = location);
// }
// // //now we to add some properties and method extra we can add outside of the constructor

// Student.prototype.state = "UP"
// let student1 = new Student ("rajesh", "saini", 22, "india")
// let student2 = new Student ("virendra", "verma", 21, "india")
// console.log(student1)
// console.log(student2)

example: -2; //constructor Class
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   Person.prototype.nationality = "English";

//   const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather.nationality) //English

// Structure of prototype

// Array.prototype.myFunction = function (){
//     console.log(this)
// }
// let arr = [1,2,3,4,5]
// arr.myFunction()

example: -1; //Map
//map:- OR:- the map method is use  for creating new array from exiting array
// by applying function to each one of the element of the first array

// Normal Map Method :-
// let  arr = [1,2,3,4,5]
// let multiplyTwo = arr.map((num)=>{
//     return num*2
// })
// console.log(multiplyTwo) //2,4,6,8,10

//Map with prototype:-

// Array.prototype.myMap = function (callbackfn){
//     let newArr = []
//     for(let i =0 ; i<this.length ; i++){    //here this pointed to the parent object
//         newArr.push(callbackfn(this[i]))

//     }
//     return newArr
// }
// function square (x){
//     return x*x;
// }

// let arr = [1,2,3,4,5]
// let mappedArr = arr.myMap(square)
// console.log(mappedArr)

example: -2;
//we have to multiply  3 in each element with the help of prototype map
// Array.prototype.myMap = function (callbackfn){
//     let newArr = []
//     for(let i =0; i<this.length;i++){
//         newArr.push(callbackfn(this[i]))

//     }
//     return newArr
// }
// let arr = [1,2,3,4,5,6]
// let multiplyThree = arr.myMap((num)=>{
//     return num*3
// })
// console.log(multiplyThree)

Example: -3; //Map with Prototype
//we have to dived all element from 2 with the help of Map prototype
// Array.prototype.myMap = function (callbackfn){
// let newArr = []
// for (let i =0; i <this.length; i++){
//     newArr.push(callbackfn(this[i]))
// }
// return newArr;
// }
// let arr = [1,2,3,4,5,6,7]
// let divisibleByTwo = arr.myMap((num)=>{
//     return num%2
// })

// console.log(divisibleByTwo)

//Filter
//Prototype with Filter
//Filter:- Filter:- the filter method takes each element in a array and apply a it
//   conditional statement againts that
// If the conditional returns true the element get pushed into output array ,
//  if conditional is false then element does’t get push into the output array
// Fitler return only those element from the array whice fullfilled  provided those
//  creatria
Example: -1;
//normal Filter
// let arr = [1,2,3,4,5]
// let moreThanTwo = arr.filter((num)=>{
//     return num>2
// })
// console.log(moreThanTwo)
Example: -1;
//Prototype Filter
// Array.prototype.myFilter = function (callbackfn) {
//     let newArr = []
//     for (let i = 0; i<this.length; i++){
//         if(callbackfn(this[i]))
//     newArr.push((this[i]))

// }
// return newArr;
// }
// function isEven (x){
// return x%2==0
// }
// let arr = [1,2,3,4,5,2,16,7,9]
// let filterArr = arr.myFilter(isEven)
// console.log(filterArr)

Example: -2; // filter with prototype // create polyfills for filter
//we have to print those number is grater than 3 with the help of filter prototype
// Array.prototype.myFilter = function (callbackfn){
//     let newArr = []
//     for(i=0;i<this.length;i++){
//         if(callbackfn(this[i]))
//         newArr.push((this[i]))
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// let checkGreaterThanTwo = arr.myFilter((num)=>{
//     return num>2
// })
// console.log(checkGreaterThanTwo)//3,4,5,6,7,8,9

example: -1; //Reduce
//prototype with Reduce
//Reduce:- The reduce() method runs a function on each array element
// to produce (reduce it to) a single value.

//Normal Reduce:-
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, curr = 0) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//23/08/2022
//Reduce with Prototype:-
//we have to do sum given array with the help of prototype Reduce
Array.prototype.myReduce = function (callbackfn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackfn(this[i]));
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
},10);
console.log(sum);
