question:-1 /*print reverse array using loop */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];
// let newArr = []
// for(let i = arr.length-1; i>=0; i--){
//     newArr = arr[i]
//     console.log(newArr)
// } //8 6 9 5 4 3 2 1 


question:-2 /*Array descturing*/
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];

// let [num1, num2 , num3] =arr
// console.log(num2) //2


question:-3 /* Find the max value to array using loop*/
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];
// let max = arr[0]
// for(let i = 0; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max) //9 


question:-4 /*add new element of array b/t 4 .. 5 */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];
// arr.splice(4 , 0 , 6)
// console.log(arr)   //[1, 2, 3, 4, 6, 5, 9, 6, 8]


question:-5 /*find the even numeber in array */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8];
// let checkEven = arr.filter((num)=>{
//     return num%2==0
// })
// console.log(checkEven) //[ 2, 4, 6, 8 ]

question:-6/*find the sum of array  */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8]
// let findSum = arr.reduce((acc ,curr)=>{
//     return  acc+ curr;
// },0)
// console.log(findSum) //38

question:-7/*find the sum of array using for loop */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8]
// let total = 0;
// for(let i =0; i<arr.length; i++){
//     total += arr[i] 
// }
// console.log(total)  //38


quewstion:-8/*find the even number using for loop */
// let arr = [1, 2, 3, 4, 5, 9, 6, 8]
// let even = []
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2==0)
//     even.push(arr[i])
// }
// console.log(even) //[ 2, 4, 6, 8 ]

question:-9 /*merge two given array  */
let arr1 = [1, 2, 3, 4, 5, 9, 6, 8]
let arr2 = [0,9,8,7,1, 2, 3, 4 ]
//let arr3 = [...arr1 ,...arr2]  // [1, 2, 3, 4, 5, 9, 6, 8 ,0,9,8,7,1, 2, 3, 4]
let arr3 = arr1.concat(arr2) // [1, 2, 3, 4, 5, 9, 6, 8 ,0,9,8,7,1, 2, 3, 4]
console.log(arr3)

question:-10 /* how did you do desctrucring array*/

