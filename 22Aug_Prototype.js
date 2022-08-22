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
example: -1;

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
example: -2;
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

example: -1;
//map polyfills
// prototype With Map function

// Array.prototype.myMap = function (callbackfn){
//     console.log(this)
//     let newArray = []
//     for(let i = 0; i<this.length; i++)
//     newArray.push(callbackfn(this[i]))
// }

// return newArray;

// let nums = [1,2,3,4,5];
// let result = nums.myMap(function (num){
//     console.log(num)
//     return num*2
// })
// console.log(result)

example: -2;
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
//     for(let i =0 ; i<this.length ; i++){
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
//Prototype with Filter
//Filter:- Filter:- the filter method takes each element in a array and apply a it
//   conditional statement againts that
// If the conditional returns true the element get pushed into output array ,
//  if conditional is false then element does’t get push into the output array
// Fitler return only those element from the array whice fullfilled  provided those
//  creatria

// //normal Filter
// let arr = [1,2,3,4,5]
// let moreThanTwo = arr.filter((num)=>{
//     return num>2
// })
// console.log(moreThanTwo)

//Prototype Filter
// Array.prototype.myFilter = function (callbackfn) {
//     let newArr = []
//     for (let i = 0; i<this.length; i++){
//         if(isEven(this[i]))
//     newArr.push(callbackfn(this[i]))

// }
// return newArr;
// }
// function isEven (x){
// return x%2==0
// }
// let arr = [1,2,3,4,5,2,16,7,9]
// let filterArr = arr.myFilter(isEven)
// console.log(filterArr)

example: -3;
//prototype with Reduce
//Reduce:- The reduce() method runs a function on each array element
// to produce (reduce it to) a single value.

//Normal Reduce:-
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, curr = 0) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//Reduce with Prototype:- 
for (var i = 0; i < 3; i++) {
  setTimeout(function() { 
    console.log (i);
   }, 1000 +i); // 3 3 3 
}//

