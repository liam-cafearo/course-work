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

		it('should return an error message if a number is not entered', function() {
			expect(getDrink("code")).toBe("Sorry. I can't tell what drink because that age is incorrect!");
		});
	});
});