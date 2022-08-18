
// async await 
async function dinnerScenario() {
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server informing the chef to prepare food");
    try {
      let foodMsg = await preparationOfFood();
      console.log(foodMsg);
      let ateMsg = await eatingFood();
      console.log(ateMsg);
      let paymentMsg = await payment();
      console.log(paymentMsg);
    } catch (err) {
      console.log("error ", err);
    }
  }
  
  dinnerScenario();
  
  // parallel or concurrent execution
  // function fn1() {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       console.log("process 1");
  //       res("1");
  //     }, 4000);
  //   });
  // }
  
  // function fn2() {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       console.log("process 2");
  //       rej("2 rejected");
  //     }, 4000);
  //   });
  // }
  
  // // fn1()
  // //   .then(() => fn2())
  // //   .then(() => console.log("process over"));
  
  // // Promise.all([fn1(), fn2()])
  // //   .then((result) => console.log("process over", result))
  // //   .catch((err) => console.log("error", err))
  // //   .finally(() => console.log("closing connection"));
  
//   Promise.race([fn1(), fn2()])
//     .then((result) => console.log("process over", result))
//     .catch((err) => console.log("error", err))
//     .finally(() => console.log("closing connection"));