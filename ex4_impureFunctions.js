let array = [1, 2, 3];
let x = 0;

// Impure function: 
// Has side-effects, mutates program state
// Returns unpredictable output
// Given same input, may yield different output
const addToArray = (y) => {
  // Value of ‘x’ and ‘array’ may vary
  // depending on call-time
  // Even if ‘y’ is same,	
  // returned result will be inconsistent
  array.push(x + y);
  return array;
};
