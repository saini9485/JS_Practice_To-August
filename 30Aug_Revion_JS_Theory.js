Topic:-1 /*Call back hell */
// const animateAll = (animate) => {
//     setTimeout(() => {
//         animate(words[0]);
//         setTimeout(() => {
//             animate(words[1]);
//             setTimeout(() => {
//                 animate(words[2]);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

Topic:-2 /*Ajax */


Topic:-3 /*Methods */


Topic:-4 /*Deep Copy and shallow copy */
 Example:- 1 /*Shallow Copy  */
// let obj = {
//     name:"Rajesh",
// };
// //let user = Object.assign({},obj);
// let user = {...obj}       //=>second way with spreade operator 
// user.name ="Saini"

// console.log("object is :-", obj) // object is :- { name: 'Rajesh' }
// console.log("user is :-", user)  // user is :- { name: 'Saini' }

// Example:- 2 /*Deep Copy */
// let obj = {
//         name:"Rajesh",
//         address:{
//             city: "Noida",
//             state: "Up"
//         }
//      };
//      let user = JSON.parse(JSON.stringify(obj))
//      user.address.city ="meerut"
//      console.log("object is :-", obj) //object is :- { name: 'Rajesh', address: { city: 'Noida', state: 'Up' } }
//      console.log("object is :-", obj) //object is :- { name: 'Rajesh', address: { city: 'Noida', state: 'Up' } }

Topic:-5 /* Implementation of debouncing */
Exaple:-1 
const debounce = (func, wait) => {  
    let timeout;  
    return function mainFunction(...args) {  
      const later = () => {  
        clearTimeout(timeout);  
        func(...args);  
      };  
      clearTimeout(timeout);  
      timeout = setTimeout(delay, wait);  
    };  
  };  