 example:-1 /*call , apply and bind */
// let car1 = {
//   color: 'Red',
//   company: 'Ferrari',
// };

// let car2 = {
//   color: 'Blue',
//   company: 'BMW',
// };

// let car3 = {
//   color: 'White',
//   company: 'Mercedes',
// };

// function purchaseCar(currency, price) {
//   console.log(
//     `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
//   );
// };

// Function.prototype.myBind = function (currentContext = {}, ...arg) {
//   if (typeof this !== 'function') {
//     throw new Error(this + "cannot be bound as it's not callable");
//   }
//   currentContext.fn = this;
//   return function () {
//     return currentContext.fn(...arg);
//   };
// };

// Function.prototype.myApply = function (currentContext = {}, arg = []) {
//   if (typeof this !== 'function') {
//     throw new Error(this + "it's not callable");
//   }
//   if (!Array.isArray(arg)) {
//     throw new TypeError('CreateListFromArrayLike called on non-object')
//   }
//   currentContext.fn = this;
//   currentContext.fn(...arg);
// };

// Function.prototype.myCall = function (currentContext = {}, ...arg) {
//   if (typeof this !== 'function') {
//     throw new Error(this + "it's not callable");
//   }
//   currentContext.fn = this;
//   currentContext.fn(...arg);
// };

// const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
// initPurchaseBmw();
// purchaseCar.myApply(car2, ['₹', '50,00,000']);
// purchaseCar.myCall(car3, '₹', '60,00,000');


Example:-2
// let studentObj = {
//   firstname: "Rajesh",
//   lastname: "Saini",
//   school: "JPIET",
// };
// //declaring the function
// let myFunc = function () {
//   console.log(this.firstname + " " + this.lastname + " is from " + this.school);
// };
// //borrowing the function or binding the function with the object and with call method
// //we can directly invoke or call the function
// //within the call method the first argument always should be the object which is the
// // reference to the this keyword in function, here our object is studentObj, so we will pass studentObjas the first
// // argument in call method
// // myFunc.call()
// myFunc.call(studentObj); //Rajesh Saini is from JPIET

// Now what if we want to pass parameters with our functions ? In call() method 
// the parameters in the function are passed separately or individually 
// with commas as arguments just after the first argument(reference for 
//   the this keyword in function) .

//Let us see the code implementation for this :


Example:-3 /*Call Method with Argumnet*/
// let studentObj = {
//   firstname : "Rajesh" ,
//   lastname : "Saini",
//   school : "JPIET"
// }
// // //declaring the function
// let myFunc = function(city,state){
//   console.log("my Name is " ,this.firstname + " " + this.lastname + "  from " + this.school + " i am living  " + city + " which is in " + state)

// }
// // myFunc.call()
// //In call() method the parameters in the function are passed separately with commas as arguments just after the first argument(reference for the this keyword in function) .
// myFunc.call(studentObj,"Noida","UP")


Example:-4
// const person = {
//   fullName: function() {
//     return (this.Greet + " " +"This Side " + this.firstName + " " + this.lastName );
//   }
// }
// const person1 = {
//   Greet:  "Hi",
//   firstName:"Rajesh",
//   lastName: "Saini"
// }
// const person2 = {
//   Greet:  "Hi",
//   firstName:"Virendra",
//   lastName: "Verma"
// }
// console.log(person.fullName.call(person1));//Hi This Side Rajesh Saini
// console.log(person.fullName.call(person2));//Hi This Side Virendra Verma


Example:-5  /*The call() Method with Arguments*/
//The call() method can accept arguments:
const person = {
  fullName: function(city, country) {
    return (this.Greet + " " + "This Side" +" " +this.firstName + " " + this.lastName + "," + city + "," + country);
  }
}

const person1 = {
  Greet: "Hi",
  firstName:"Rajesh",
  lastName: "Saini"
}

const person2 = {
  Greet: "Hi",
  firstName:"Virendra",
  lastName: "Verma"
}
console.log(person.fullName.call(person1, "Noida", "India")); 
console.log(person.fullName.call(person2, "Lucknow", "India")); 


