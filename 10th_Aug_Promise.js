//what is asynchronus programming
// i want to perform a task after a certain
//  period of time  called a asynchronous programming like:- setTimeout
// console.log("before")
// setTimeout (()=>{
// console.log("reading data")
// return {id:244 ,githubUserName:Rajesh}
// },2000)
// console.log("after")
//1.before 2. after 3. reading data

// function getData(){
// setTimeout (()=>{
// console.log("reading data")
// return {id:244 ,githubUserName:Rajesh}
// },2000)
// }
// console.log("before")
// const user = getData(244)
// console.log(user)
// console.log("after")
//1.before 2.undefine 3. after 4. reading data
//because my javascript is a synchronus programming language so it don't wait 
//that's why first it will print "before" then it will go for user data user will 
//take time 2second then it will no wait it will come again have after then second it 
//will print "after"  after that it will print "reading data"

// but problem is that if we want to wait here we use  callBack function 
function getData(id,callback){
    setTimeout (()=>{
    console.log("reading data")
    let user= ({id:id ,githubUserName:"Rajesh"})
    console.log(user)
    },2000)
    }
    console.log("before")
    const user = getData(244,function callback (user){
        console.log(user)
    })
    console.log("after")
    //getData is HOF and function is call back function 
   // 