/*Array:-Array is an object where we can store multiple data value with single variable
Creating new array  */
// arr = [1,2,3,4,5,6]  //first way to create array 
// arr = new(1,2,3,4,5,6)  //this is second way to create a array
// arr = []  //this is a empty array 
// arr = [1,2,3,4,"Rajesh","virendra"] //mixed array 
// //Note :- array counting start with zeroth index like:-
// arr [1,2,3,4,5,6]
//      0,1,2,3,4,5  //this is there index position 
     
//some Important methods of array
method:-1 //how to find length
//  arr = [1,2,3,4,5,6]
//  console.log(arr.length)

 method:-2 //how to sort the array
//  arr = [7,8,9,1,2,3,4,5,6]
//console.log(arr.sort())

// method:-3 //how to sort assending 
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];
// arr.sort (function(a,b){
//     return (a-b)
// })
// console.log(arr)

method:-4 // how to  find last  number of array 
// arr = [1,2,3,6,5,7,8,9]
// console.log(arr.length-1)

method:-5
// arr = [1,2,3,4,5,6,7,8,9] //how to add , detele element 
// //1. add new 5 from starting
// console.log(unshift.arr(3))

method:-6 //how to merge three element 
// let arr1=[1,2,3,4]  
// let arr2=[5,6,7]  
// let arr3 = [8,9]
// let mergerArray = arr1.concat(arr2, arr3)
// console.log(mergerArray)

method:-7  //splice and slice 
// let arr = [1,2,3,4,5,6,7]
// let newArray = arr.splice(0,5) //it will selecte the arr b/t given position and return it it does't effect original array
// console.log(newArray)

method:-8 //reverse the array
// arr = [1,2,3,4,5,6]
// console.log(arr.reverse())

method:-9 //how to reverse arr using for loop
//arr = [1,2,3,4,5,6,7]
// function reverseArray (arr) {
//     newArray = []
//     for(i=arr.length-1;i>=0;i--){
//         newArray = newArray+arr[i]
//     }
//     return newArray
// } 
// console.log(reverseArray( [1,2,3,4,5,6,7]))

method:-10 //find the this number is exict or not 
// let arr = [1,2,3,4,5,6,7]
// let check = arr.includes(6)
// console.log(check)

method:-11 // Map  with multiply 3 
// let arr = [1,2,3,4,5,6,7] 
//  let newArray = arr.map ((arr)=>{
//  return arr*3
//  })
//  console.log(newArray)

method:-12 //Filter -> check which value is greater than 3 
// let arr = [1,2,3,4,5,6,7]
// let check = arr.filter((arr)=>{
//     return (arr>3)
// })
// console.log(check)//[ 4, 5, 6, 7 ]

method:-13 // reduce -> 
// let arr = [1,2,4,5,6,7]
// let sum = arr.reduce((acc,curr)=>{
//     return (acc+curr)
// })
// console.log(sum)//25 

method:-14 //array destrucring 
let array = [1,2,3,4,5,6,7]
let [num1,,num2]=array;
console.log(num1,num2)
