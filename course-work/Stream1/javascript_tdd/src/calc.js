//Create a failed test, the test is expecting 42 not 4

/*function addition() {
/	return 4;
}*/

// ammend the source code to reflect the expected 
// answer to test that it's working.

/*function addition() {
	return 42;
}*/

// modify our addition function in the calc.js file to make it a bit 
// more complex and actually perform the addition

/*function addition(firstNumber, secondNumber) {
	var sum = firstNumber + secondNumber;
	return sum;
}*/

// Ammend addition function for defensive programming and spyOn

/*function addition(firstNumber, secondNumber) {
	if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
		var sum = firstNumber +secondNumber;
		return sum;
	} else {
		alert("Arguements must both be a number");
	}
}*/

// Create the calculator as an object this means all the logic necessary 
// for the calculator is safely contained within one place rather 
// than creating separate functions

Calculator = function() {
	this.value = 0;
};

Calculator.prototype.add = function(number) {
	if (typeof(number) == "number") {
		this.value += number;
	} else {
		alert("Arguement must be a number");
	}
};

// add subtract function

Calculator.prototype.subtract = function(number) {
	if (typeof(number) == "number") {
		this.value -= number;
	} else {
		alert("Arguement must be a number");
	}
};

// add multiply function

Calculator.prototype.multiply = function(number) {
	if (typeof(number) == "number") {
		this.value *= number;
	} else {
		alert("Arguement must be a number");
	}
};

// add divide function

Calculator.prototype.divide = function(number) {
	if(typeof(number) == "number") {
		this.value /= number;
	} else {
		alert("Arguement must be a number");
	}
};