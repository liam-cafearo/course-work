// In order to complete the challenge I had to break the glass and
// look at the solution found here on GitHub: https://gist.github.com/jaysonrowe/1592432
// I worked through this to ensure I understood it and with the example and knowledge of that link it helped me form the function below 

function fizzBuzz(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	} else if (number % 3 === 0) {
		return "Fizz";
	} else if (number % 5 === 0) {
		return "Buzz";
	} else {
		return number;
	};
};

