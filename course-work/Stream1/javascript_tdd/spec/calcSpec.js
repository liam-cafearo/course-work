// Here we have our main Calculator suite. 
// Then inside that, we have another suite called Add function.
// Then we have a spec that will check that the Addition function 
// should add two numbers together.
/*describe("Calculator", function() {
    describe('Addition function', function() {
        it('should fail', function() {
            expect(addition()).toBe(42);
        });
    });
});*/

// modify calcSpec.js to actually check
// that the function can take numbers as input and add them
/*describe("Calculator", function() {
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            expect(addition(2, 2)).toBe(4);
        });
    });
});*/

// modified the addition function in the calc.js file.

// The test could would have passed even 
// before we implemented the addition functionality.
// To make sure that the function doesn’t just always return 4, 
// let’s now add another test to check for different numbers.
describe("Calculator", function() {
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            expect(addition(2, 2)).toBe(4);
        });

        it("should not return 4 if the parameters given don't add up to 4", function() {
            expect(addition(7, 19)).toBe(26);
        });
    });
});

// a test suite is denoted by the describe function