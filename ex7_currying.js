// Curry function utility
const curry = (fn) => 
  (...fnArgs) => fn.bind(null, ...fnArgs);

// Function with multiple arguments
const multiply = (x, y) => x * y;

// Create curried function! 
const getMultiplier = curry(multiply);

// Create partially applied function
const double = getMultiplier(2);
const result = double(2); // '4'
