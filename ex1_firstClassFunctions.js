// Variable assignment
const y = (x) => x; 

// Function as argument
const applyFuncToX = (func, x) => func(x); 

// Return value is a function
const getAdder = (x) => (y) => x + y; 
