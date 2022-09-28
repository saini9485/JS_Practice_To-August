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
console.log(person.fullName.call(person1, "Noida", "India"));  //Hi This Side Rajesh Saini,Noida,India
console.log(person.fullName.call(person2, "Lucknow", "India")); //Hi This Side Virendra Verma,Lucknow,India







/*1. Polyfills For Apply */
//it is similar to the call method but it takes second parameter as array 

Example:-1
// const person = {
//   fullName: function() {
//     return (this.Greet + " " + "This Side" +" " +this.firstName + " " + this.lastName);
//   }
// }

// const person1 = {
//   Greet: "Hi",
//   firstName:"Rajesh",
//   lastName: "Saini"
// }
// console.log(person.fullName.apply(person1)); //Hi This Side Rajesh Saini


// Example:-2
// //The apply() Method with Arguments:-
// const person = {
//   fullName: function(City,Country) {
//     return (this.Greet + " " + "This Side" +" " +this.firstName + " " + this.lastName + "," + City + "," + Country);
//   }
// }

// const person1 = {
//   Greet: "Hi",
//   firstName:"Rajesh",
//   lastName: "Saini"
// }
// console.log(person.fullName.apply(person1, ["Noida", "India"]));  //Hi This Side Rajesh Saini,Noida,India

// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


/*JavaScript Function bind()*/
//Function Borrowing
//With the bind() method, an object can borrow a method from another object.
//Here I create  2 objects (person1 and person2).
//The member object borrows the fullname method from the person object:
Example:-1
// const person1 = {
//   firstName:"Rajesh",
//   lastName: "saini",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person2 = {
//   firstName:"virendra",
//   lastName: "Verma",
// }
// let fullName = person1.fullName.bind(person2);
// console.log(fullName()); //virendra Verma



// Preserving this:- 
// Sometimes the bind() method has to be used to prevent loosing this.
// In the following example, the person object has a display method. 
// In the display method, this refers to  the person object:

Example:-1
// const person = {
//   firstName:"Rajesh",
//   lastName: "Saini",
//   display: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// console.log(person.display()); //Rajesh Saini

/*When a function is used as a callback, this is lost.
This example will try to display the person name after 3 seconds, 
but it will display undefined instead:*/

 Example:-2 /*using Callback Function*/
// const person = {
//   firstName:"Rajesh",
//   lastName: "Saini",
//   display: function() {
//     let Result =( this.firstName + " " + this.lastName);
//     console.log(Result)
//   }
// }
//  setTimeout(person.display, 3000); //undefined undefined

/*The bind() method solves this problem.
In the following example, the bind() method is used to bind person.display to person.
This example will display the person name after 3 seconds:*/

Example:-3
// const person = {
//   firstName:"Rajesh",
//   lastName: "Saini",
//   display: function () {
//     let x =  this.firstName + " " + this.lastName;
//     console.log(x)
//   }
// }

// let display = person.display.bind(person);
// setTimeout(display, 3000); // Rajesh Saini

