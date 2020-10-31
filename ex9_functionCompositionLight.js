// Function composition “light”
const f = (x) => x + 1;
const g = (x) => x * x;

// Execute one function
const resultOfG = g(1);

// Take the result, input into next
// Function composition “light”
const resultOfF = f(resultOfG); // '2'
