let Promise = new Promise(function(Resolve, Reject) {
    let x = 0;
    if (x == 0) {
      Resolve("OK");
    } else {
      Reject("Error");
    }
  });
   Promise.then((result) => console.log(result))
   .catch((error) => console.log(error));
  
