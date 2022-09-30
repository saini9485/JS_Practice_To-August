// async function myFunction() {
//     return "Hello";
//   }
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
//Example Promise :-
// function getData (){
//     let handlePromise = new Promise ((resolve , reject)=>{
// setTimeout (()=>{
//     resolve ("All done")
// },1000)
//     })

// handlePromise.then ((result)=>{
//     console.log(result)
// })

//}
//getData()  
//Example Async wait :- 
// async function getData (){
//     let handlePromise = new Promise ((resolve , reject)=>{
//     //  handlePromise = new Promise (()=>{
//         setTimeout(()=>{
//             resolve ("all done")
//         },1000)
//     })
    

//     let result = await  handlePromise;
//     console.log(result)
// //})
// }
// getData()

// Example:-1  //async await 

// async function test (){

//     console.log("Hello2")
//    await console.log("Hello3")
//     console.log("Hello4")
// }
// console.log("hello1")
// test()
// console.log("hello5")
//hello1-> hello2-> hello3-> hello5-> hello4


//Example:-2 //fetching the data from API using Sync await

async function fetch (){
return (
 (await fetch ("url")).json()
)
}
fetch().then((StoreData)=>{
    console.log(StoreData)
})
fetch().catch((error)=>{
console.log(error)
})

