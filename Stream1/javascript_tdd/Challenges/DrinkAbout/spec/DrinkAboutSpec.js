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

describe("whatCanIDrink", function() {
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
});