describe("FizzBuzz", function() {
	describe('fizzBuzz function', function() {
		it('should return FizzBuzz if the number is divisible by 3 and 5', function() {
			expect(fizzBuzz(15)).toBe("FizzBuzz");
		});

		it('should return Fizz if the number is divisible by 3', function() {
			expect(fizzBuzz(9)).toBe("Fizz");
		});

		it('should return Buzz if the number is divisible by 5', function() {
			expect(fizzBuzz(10)).toBe("Buzz");
		});

		it('should otherwise return the number', function() {
			expect(fizzBuzz(8)).toBe(8);
		});

	});
});