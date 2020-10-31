// In JavaScript, the Array object/type
// wraps values in a structure 
// and also implements the map interface
const numbers = [1, 2, 3, 4, 5];

// The .map accepts a function as argument
// which describes how each input 
// (an element in the array)
// should map to an output 
// (a new element in a new array)
const square = (x) => x * x;


// When the transformation function is passed 
// to the Array's .map interface
// it will generate a new Array based on the 
// transformation function's conditions
const squares = numbers.map(square);


// Tada! 
// Structure is intact but values transformed
// It is still a functor that can be re-mapped
console.log(squares); // [1, 4, 9, 16, 25]
