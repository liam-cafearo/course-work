/* Variables are containers for storing data values. The value of a variable can change throughout the program.
   JavaScript is case sensitive. For example, the variables lastName and lastname, are two different variables.
   
   In JavaScript, the equal sign (=) is called the "assignment" operator, rather than an "equal to" operator.
   For example, x = y will assign the value of y to x.
   
   A variable can be declared without a value. The value might require some calculation, something that will be provided later, like user input.
   A variable declared without a value will have the value undefined.
   
   Using variables is useful in many ways. You might have a thousand lines of code that may include the variable x.
   When you change the value of x one time, it will automatically be changed in all places where you used it.
   
   Every written "instruction" is called a statement. 
   JavaScript statements are separated by semicolons.
 */

var x = 100;
document.write(x);

/* JavaScript variable names are case-sensitive.
   In the example below we changed x to uppercase:
   
   var x = 100;
   document.write(X);
   
   This code will not result in any output, as x and X are two different variables.
   
   Naming rules:
   - The first character must be a letter, an underscore (_), or a dollar sign ($). 
     Subsequent characters may be letters, digits, underscores, or dollar signs.
   - Numbers are not allowed as the first character.
   - Variable names cannot include a mathematical or logical operator in the name. For instance, 2*something or this+that;
   - JavaScript names must not contain spaces.
   
   Hyphens are not allowed in JavaScript. It is reserved for subtractions
   
   There are some other rules to follow when naming your JavaScript variables:

   - You must not use any special symbols, like my#num, num%, etc.
   - Be sure that you do not use any of the following JavaScript reserved words (see notes).
 */