//prototype is a method which through can add properties or method outside of the canstructor function
//suppose that
// create a function constructor boiler plate
// let Person = function (firstName, lastName, age, location) {
//   (this.FirstName = firstName),
//     (this.LastName = lastName), //properties
//     (this.Age = age),
//     (this.Location = location);
//   // suppose that we want to change age we will have to declear inside that constructor fucntion
//   //   this.changeAge = function (newAge) {    // method
//   //     this.chageAge = newAge;
//   //   };
// };
// //person1.chnageAge(29)
// let person1 = new Person("rajesh", "saini", 22, "india");
// console.log(person1);

//now in case of prototype we can add any properties or method outside of the constructor
example:-1

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
example:-2
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
Array.prototype.myFunction = function (){
    console.log(this)
}
let arr = [1,2,3,4,5]
arr.myFunction()

