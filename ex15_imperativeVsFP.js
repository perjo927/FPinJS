// Imperative style
const numbers = [1, 2, 3, 4, 5];
const squares = [];

for (let i=0; i < numbers.length; i++) {
   const square = numbers[i] * numbers[i];
   squares.push(square);
}

// FP “functor style”
const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;
const squares = numbers.map(square);
