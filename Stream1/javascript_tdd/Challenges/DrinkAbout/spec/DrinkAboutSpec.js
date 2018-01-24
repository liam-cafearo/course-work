// Create a test that fails

/*describe("whatCanIDrink", function() {
	describe('lessThanZero function', function() {
		it('should fail', function() {
			expect(whatCanIDrink()).toBe(40);
		});
	});
});*/

// modify to check that can take input and check the age.

/*describe("whatCanIDrink", function() {
	describe('lessThanZero function', function() {
		it('should check whether the age is less than or equal to zero', function() {
			expect(whatCanIDrink(0)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});

		// This is to check that if an age higher than 0 cannot be entered.

		it('should not return an answer if the age given is too high', function() {
			expect(whatCanIDrink(4)).toBe('Age to high')
		});*/

/*describe("whatCanIDrink", function() {
	describe('lessThanZero function', function() {
		it('should check whether the age is less than or equal to zero', function() {
			expect(whatCanIDrink(0)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});

		// This is to check that if an age higher than 0 cannot be entered.

		it('should not return an answer if the age given is too high', function() {
			expect(whatCanIDrink(4)).toBe("Age to high")
		});

		// Defensive Programming
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if the age is undefined", function() {
			spyOn(window, "alert");
			whatCanIDrink("Hello"); // pass a parameter that the test will fail on and go to the alert.
			expect(window.alert).toHaveBeenCalledWith("please enter your age");
		});
	});
});*/
// Update test to reflect the changes for our object in calc.js

/*describe("whatCanIDrink", function() {

	var drink = new whatCanIDrink();

	describe('lessThanZero function', function() {
		it('should check whether the age is less than or equal to zero', function() {
			drink.zero(0)
			expect(drink.value).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});

		// This is to check that if an age higher than 0 cannot be entered.

		it('should not return an answer if the age given is too high', function() {
			drink.zero(4)
			expect(drink.value).toBe("Age to high")
		});

		// Defensive Programming
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if the age is undefined", function() {
			spyOn(window, "alert");
			drink.zero(); // pass a parameter that the test will fail on and go to the alert.
			expect(window.alert).toHaveBeenCalledWith("please enter your age");
		});
	});
});*/

// update to add beforeEach method so that the value property is reset to 0
// each time a test is run.

/*describe("whatCanIDrink", function() {

	// Pass the beforeEach method a valid JS value such as a function.
	// this resets the value to 0 before each test.
	beforeEach(function() {
		drink = new whatCanIDrink();
	});

	describe('lessThanZero function', function() {
		it('should check whether the age is less than or equal to zero', function() {
			drink.zero(0)
			expect(drink.value).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});

		// This is to check that if an age higher than 0 cannot be entered.

		it('should not return an answer if the age given is too high', function() {
			drink.zero(4)
			expect(drink.value).toBe("Age to high")
		});

		// Defensive Programming
		// add a spy to check if a function has been invoked.

		it("should have called the alert function if the age is undefined", function() {
			spyOn(window, "alert");
			drink.zero(); // pass a parameter that the test will fail on and go to the alert.
			expect(window.alert).toHaveBeenCalledWith("please enter your age");
		});
	});
});*/

// add other age checks

describe("whatCanIDrink", function() {
	describe('getDrink function', function() {
		it('should check whether the age is less than zero', function() {
			expect(getDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});

		it('should check whether the age entered is between zero and fourteen', function() {
			expect(getDrink(10)).toBe("Drink Toddy");
		});

		it('should check whether the age entered is between fourteen and eighteen', function() {
			expect(getDrink(16)).toBe("Drink Coke");
		});

		it('should check whether the age entered is between eighteen and twenty one', function() {
			expect(getDrink(20)).toBe("Drink Beer");
		});

		it('should check whether the age entered is between twenty one and one hundred and thirty', function() {
			expect(getDrink(100)).toBe("Drink Whiskey");
		});

		// Defensive Programming
		// add a spy to check if a function has been invoked.

		it("should have called the return statement if the age is undefined", function() {
			spyOn(window, "return");
			getDrink("hello"); // pass a parameter that the test will fail.
			expect(window.return).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
		});
	});
});