const getAdder = (x) => {
  return (y) => {
    // 'x' from the outer scope is
    // retained through closure
    // when the outer function executes
    return x + y;
  };
}

// Create a function that remembers the value of ‘x’
// and returns a function
// that applies ‘x’ to its input (‘y’)
const add1 = getAdder(1);

// Use the returned function by providing input
// and apply that input to the value of stored 'x'
const result = add1(100); // returns '101' 
