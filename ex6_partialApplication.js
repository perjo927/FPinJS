// PARTIAL APPLICATION
// Create higher-order function:
// A function that takes a first multiplier value
// and returns a function that resolves 
// the multiplication
const getMultiplier = (x) => (y) => x * y;

// Partially applied multiplication:
// Create a "doubler function" - a specialized utility
const double = getMultiplier(2);

// The value of ‘x’ is retained through closure
// Resolve the multiplication
const result1 = double(2); // returns '4'

// WITHOUT PARTIAL APPLICATION (a general function)
const multiply = (x, y) => x * y;
const result2 = multiply(2, 2); // returns ‘4’
console.log(result1 === result2) // logs ‘true’ 



