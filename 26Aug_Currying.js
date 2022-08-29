// How does currying work?
// Currying is a function that takes multiple arguments as input. 
// It transform the function into a number of functions where every 
// function will accept one argument.

// Let's see that in action 👇🏼
Example:-1
/*Simple function*/ 
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(1,2 ,3)); // 6

/* Curried Function */
const addCurry = (a) => { // takes one argument
    return (b)=>{                 //takes second argument
        return (c)=>{             //takes third argument
            return a+b+c
        }
    }
}
console.log(addCurry(1)(2)(3)); //6 

