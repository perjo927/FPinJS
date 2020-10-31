// Mutability
const a = [1, 2];

// Mutates the state of 'a'
a.push(3);

console.log(a); // [1,2,3] 

// Immutability
const a = [1, 2];

// Spread syntax: clone array 'a' into a new array
const newA = [...a, 3];

console.log(a, newA); // [1,2] [1,2,3]
