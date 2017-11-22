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
/*describe("Calculator", function() {
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            expect(addition(2, 2)).toBe(4);
        });

        it("should not return 4 if the parameters given don't add up to 4", function() {
            expect(addition(7, 19)).toBe(26);
        });
    });
});*/

// a test suite is denoted by the describe function
// The specs are denoted by the it function.

/*describe("Calculator", function() {

    describe('Addition function', function() {

        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            addition("Hello");
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
    });
});*/

// Now we’re telling jasmine to spyOn the alert function. On line 50 we’re using the spyOn function, 
// but we also need to pass in the object that the alert function belongs to. Because the alert function isn’t actually part of an object – it defaults to the window object!
// After we pass in the name of the object, we pass in the name of the function that we wish to spy on.
// After that we invoke the addition function with “Hello” as a parameter.
// After that we simply expect window.alert to have been called with “Arguments must both be a number”.
// The toHaveBeenCalledWith function requires the parameters that we will be passing to the alert function.

// update tests to reeflect the changes in the calc.js file.
/*describe("Calculator", function() {
    // instantiate a new Calculator object called calc before our tests are run.
    var calc = new Calculator();

    // In order for this to work, we need to update 
    // all of our calls to the addition function to calc.add. 
    // And we’ve also changed them so now they only take one parameter.

    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });

        // this test will fail as only one instance of the calculator is created
        // this means that 4 is passed over so the add function is adding 4 + 12 + 7 = 23
        // see next set for how to get around this.
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
        
        it("should have called the alert function if the number given is underfined", function() {
            spyOn(window, "alert");
            calc.add();
            // we’ve updated the toHaveBeenCalled method so it now should be “Argument must be a number”.
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});*/

// Every testing framework will have a before each method (or something similar) that will allows us to execute 
// a certain piece of code before each test. In this case we want to create a new Calculator object before each 
// test is run. That way we will ensure that the value property is reset to 0 each time a test is run.

describe("Calculator", function() {
    // We set up the calc variable inside the beforeEach function, by using var calc = new Calculator(); which 
    //will cause a new Calculator object to be available to each of the tests 
    // inside the Calculator suite (a fresh new such object for each test).
    beforeEach(function() {
        calc = new Calculator();
    });

    // In order for this to work, we need to update 
    // all of our calls to the addition function to calc.add. 
    // And we’ve also changed them so now they only take one parameter.

    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });

        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });

        // Adding more functionality
        // subtract
        it("should subtract the numbers and return the result", function() {
            calc.subtract(5);
            expect(calc.value).toBe(-5);
        });

        // Multiply
        it("should multiply the numbers and return the result", function() {
            calc.add(5);
            calc.multiply(5);
            expect(calc.value).toBe(25);
        });

        // Divide
        it("should divide the number and return the result", function() {
            calc.add(10);
            calc.divide(2);
            expect(calc.value).toBe(5);
        })
        
        it("should have called the alert function if the number given is underfined", function() {
            spyOn(window, "alert");
            calc.add();
            // we’ve updated the toHaveBeenCalled method so it now should be “Argument must be a number”.
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});

