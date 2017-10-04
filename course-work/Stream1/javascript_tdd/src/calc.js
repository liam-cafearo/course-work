//this function fails the test as the return is set to 4
/*function addition() {
    return 4;
}*/

//this function passes the test as the return is set to 42
/*function addition() {
    return 42;
}*/

// modify our addition function in the calc.js file 
// to make it a bit more complex and actually perform the addition
/*function addition(firstNumber, secondNumber) {
    var sum = firstNumber + secondNumber;
    return sum;
}*/

function addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
        var sum = firstNumber + secondNumber;
        return sum;
    } else { 
        alert("Arguments must both be a number");
    }
}

// On line 19 we use the typeof operator to check if the firstNumber is a number 
// and also if the secondNumber is of type number! If they are both numbers, 
// then it will proceed to add the secondNumber to the firstNumber and return the sum.
// Else then alert function will be called and will pass through the string that says 
// Arguments must both be a number.