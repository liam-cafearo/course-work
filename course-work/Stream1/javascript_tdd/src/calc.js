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

/*function addition(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
        var sum = firstNumber + secondNumber;
        return sum;
    } else { 
        alert("Arguments must both be a number");
    }
}*/

// On line 19 we use the typeof operator to check if the firstNumber is a number 
// and also if the secondNumber is of type number! If they are both numbers, 
// then it will proceed to add the secondNumber to the firstNumber and return the sum.
// Else then alert function will be called and will pass through the string that says 
// Arguments must both be a number.

// creat an object so that the calculator subtract, multiply and divide functions 
// are contained in one place.

Calculator = function() { // object
    this.value = 0; // object property is value = 0, this is our running total
};

// created the add method which only takes one paremeter called number
// We have also renamed addition to add compared to previous code so that
// it will be clearer that it adds to something pre-existing.
Calculator.prototype.add = function(number) {
    // checks that the argument is a number
    if (typeof(number) == "number") {
        // adds the number to the value
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};

Calculator.prototype.subtract = function(number) {
    // checks that the argument is a number
    if (typeof(number) == "number") {
        // subtracts the number to the value
        this.value -= number;
    } else {
        alert("Argument must be a number");
    }
};

Calculator.prototype.multiply = function(number) {
    // checks that the argument is a number
    if (typeof(number) == "number") {
        // multiplies the number to the value
        this.value *= number;
    } else {
        alert("Argument must be a number");
    }
};

Calculator.prototype.divide = function(number) {
    // checks that the argument is a number
    if (typeof(number) == "number") {
        // divides the number to the value
        this.value /= number;
    } else {
        alert("Argument must be a number");
    }
};
