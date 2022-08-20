//closure is banned within  a lexical environment
//lexical environment is  a scope
//closure is a function when other inner function access variable
//of outer function this is called closure
//what is advantage of closure
//1. it don't loss previous data it remain
//2.there data will not distroyed
//in case of normal function it loss our memory
d = 5
function outerFunction (a){
let b = 10;
{
    function innerFunction (){
        let sum = a+b+d ;
        console.log(`sum is ${sum}`) 
    }
    innerFunction()
}
}
outerFunction(5)
