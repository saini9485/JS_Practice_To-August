//Currying Function
Example: -1;
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//   };
// }
// console.log(add(5)(2)(4)(5)()); //undefined =>i don't know why

Example: -2;
// function addition(a) {
//     return function (b) {
//         return function (c){
//             return (a+b+c);
//         }
//     }
//   }
//   console.log(addition(5)(2)(4)); //11

Example: -3;
// function main(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }
// console.log(main(1)(2)(3)(4)) //10


Example:-4 /*currying function with bind */
let addition = function (a,b){
return a+b
}
let addition1 = addition.bind(this)
console.log(addition1(1,3)) //=>9
 console.log(addition1(1,3,13,30)) //=>9
 console.log(addition1(15,56,3)) //=>17
 console.log(addition1(12,13)) //=>25
