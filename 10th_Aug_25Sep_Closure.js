//what is closure ?
// 1.Closure:-When other inner function access variable of outer function then it is called closure and closure banned within the lexical environment 
// Advantage :-
// 1. Closure don’t lose our previous data it will remain (hamesa bna rhega)
// There data will be not distroyed 

// Disadvantage:- 

// 2. Lexical envirment:- When other inner function access variable of outer function then it is called lexical envirement 
// *diffeent between closure and lexical envirement 
// Lexical scope and function tothegar called closure 
//1.in case of normal function
// function counter (){
//     var  count = 1;
//     count++;
//   console.log(count)
  
//   }
//   counter()//2
//   counter()//2
//   counter()//2
  //in case of normal function will 2 always whatever time i will call 
  //because it lose our previous memory means destroye our previous value
  //that't why it is printing 2 again and again 
  //because it will every time diffent deffent  memory
  
  // 
  let  count = 1;
  function counter (){
      count++;
    console.log(count)
    
    }
    counter() //2
    counter() //3
    counter()//4
    //beacuse it will not loss the value it will reatain the value 

    
