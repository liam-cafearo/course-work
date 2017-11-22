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

function addition(firstNumber, secondNumber) {
	var sum = firstNumber + secondNumber;
	return sum;
}