// let Promise = new Promise(function(Resolve, Reject) {
//     let x = 0;
//     if (x == 0) {
//       Resolve("OK");
//     } else {
//       Reject("Error");
//     }
//   });
//    Promise .then((result) => console.log(result))
//    .catch((error) => console.log(error));

//    const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//   })
const Promise2 = new Promise ((resolve,reject)=>{
resolve("successful")
reject("unsuccessful")
})
Promise2.then ((value)=>{
console.log(value)
})
Promise2.catch ((value)=>{
console.log(value)
}) 
