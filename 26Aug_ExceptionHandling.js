Example:-1 /*try and catch  */
function myFunction() {
    const x = 50;
    const y = 0;
    try {
        if (y === 0) {
            throw ("This is division by zero error");
        } else {
            const z = x / y;
        }
    } catch (error) {
        alert("Error: " + error);
    }
}

Example:-2 /*Try Catch and finally */
function myFunction() {
    const j = 70;
    try {
        alert("The value of j is : " + j);
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        alert("Finally: Finally gets executed")
    }
}


Example:-3 /* */