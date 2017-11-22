whatCanIDrink = function() {
    this.value = 0;
};

whatCanIDrink.prototype.lessThan = function(number) {
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
