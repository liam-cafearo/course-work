// create a failed test

/*describe("Calculator", function() {
	describe('Addition function', function() {
		it('should fail', function() {
			expect(addition()).toBe(42);
		});
	});
});*/

// modify to actually check that the function can take numbers as input and add them

/*describe("Calculator", function() {
	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			expect(addition(2, 2)).toBe(4);
		});

		// To make sure that the function doesn’t just always return 4, 
		// let’s now add another test to check for different numbers

		it("should not return 4 if the parameters given don't add up to 4", function() {
			expect(addition(7, 19)).toBe(26);
		});

		// Defensive programing
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			addition("Hello";) // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguements most both be a number");
		});
	});
});*/

// update the test to reflect the changes for our object in calc.js

/*describe("Calculator", function() {

	var calc = new Calculator();

	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			calc.add(2);
			calc.add(2)
			expect(calc.value).toBe(4);
		});

		// To make sure that the function doesn’t just always return 4, 
		// let’s now add another test to check for different numbers

		it("should not return 4 if the parameters given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		// Defensive programing
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.add(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
});*/

// update to add beforeEach method so that the value property is reset to 0
// each time a test is run.

/*describe("Calculator", function() {

	//  Pass the beforeEach method a valid JS value such as a function.
	// tis resets the value to 0 before each test.
	beforeEach(function() {
		calc = new Calculator();
	});
	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			calc.add(2);
			calc.add(2)
			expect(calc.value).toBe(4);
		});

		// To make sure that the function doesn’t just always return 4, 
		// let’s now add another test to check for different numbers

		it("should not return 4 if the parameters given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		// Defensive programing
		// add a spy and tpye of to check that the function receives a number

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.add(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
});*/

// Add suntract, multiply and divide tests

describe("Calculator", function() {

	//  Pass the beforeEach method a valid JS value such as a function.
	//  this resets the value to 0 before each test
	beforeEach(function() {
		calc = new Calculator();
	});
	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			calc.add(2);
			calc.add(2);
			expect(calc.value).toBe(4);
		});

		// To make sure that the function doesn’t just always return 4, 
		// let’s now add another test to check for different numbers

		it("should not return 4 if the parameters given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		// Defensive programing
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.add(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
	describe('Subtraction function', function() {
		it('should subtract two numbers together and return the result', function() {
			calc.add(5); // add a number so that the starting value is no longer 0
			calc.subtract(2);
			expect(calc.value).toBe(3);
		});
		it("should not return 3 if the parameters given don't subtract to 3", function() {
			calc.add(12); // add a number so that the starting value is no longer 0
			calc.subtract(7);
			expect(calc.value).toBe(5);
		});
		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.subtract(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
	describe('Multiply function', function() {
		it('should mulitply two numbers together and return the result', function() {
			calc.add(2); // add a number so that the starting value is no longer 0
			calc.multiply(2);
			expect(calc.value).toBe(4);
		});
		it("should not return 4 if the parameters given don't multiply to 4", function() {
			calc.add(2) // add a number so that the starting value is no longer 0
			calc.multiply(12); 
			expect(calc.value).toBe(24);
		});
		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.multiply(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
	describe('divide function', function() {
		it('should divide two numbers together and return the result', function() {
			calc.add(10); // add a number so that the starting value is no longer 0
			calc.divide(2);
			expect(calc.value).toBe(5);
		});
		it("should not return 5 if the parameters given don't divide to 5", function() {
			calc.add(20) // add a number so that the starting value is no longer 0
			calc.divide(2); 
			expect(calc.value).toBe(10);
		});
		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.divide(); // pass a parameter that will fail the test.
			expect(window.alert).toHaveBeenCalledWith("Arguement must be a number");
		});
	});
});