// Create a failed test, the test is expecting 40 not 3

/*function whatCanIDrink() {
	return 3;
}*/

// Test failed successfully, so ammend the source code to reflect
// expected answer to test that it's working.

/*function whatCanIDrink() {
	return 40;
}*/

// Test passed, modify the function to make it a bit
// more complex and actually check the age.

/*function whatCanIDrink(age) {
	if (age <= 0) {
		return "Sorry. I can't tell what drink because that age is incorrect!";
	} else {
		return "Age to high";
	}
}*/

// Ammend function for defensive programming and spyOn

/*function whatCanIDrink(age) {
	if (typeof(age) == "number") {
		if (age <= 0) {
			return "Sorry. I can't tell what drink because that age is incorrect!";
		} else {
			return("Age to high");
		} 
	} else {
		alert("please enter your age");
	}
}*/

// Create the whatCanIDrink as an object, this means all the logic neccessary
// for the whatCanIDrink is safely contained within one place rather
// than creating seperate functions.

function = getDrink(age) {
	if (typeof(age) !== "number") {
		return "bad input";
	} else if (age < 0) {
		return "Sorry. I can't tell what drink because that age is incorrect!";
	} else if (age >= 0 && age < 14) {
		return "Drink Toddy"
	}
}

