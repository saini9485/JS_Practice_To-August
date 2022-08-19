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
async function getData (){
    let handlePromise = new Promise ((resolve , reject)=>{
    //  handlePromise = new Promise (()=>{
        setTimeout(()=>{
            resolve ("all done")
        },1000)
    })
    

    let result = await  handlePromise;
    console.log(result)
//})
}
getData()
