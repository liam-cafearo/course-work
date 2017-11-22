// create a failed test

/*describe("Calculator", function() {
	describe('Addition function', function() {
		it('should fail', function() {
			expect(addition()).toBe(42);
		});
	});
});*/

// modify to actually check that the function can take numbers as input and add them

describe("Calculator", function() {
	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			expect(addition(2, 2)).toBe(4);
		});

		// To make sure that the function doesn’t just always return 4, 
		// let’s now add another test to check for different numbers

		it("should not return 4 if the parameters given don't add up to 4", function() {
			expect(addition(7, 19)).toBe(26);
		})
	});
});