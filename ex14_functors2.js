
// The functor:
const numbers = [1, 2, 3, 4, 5];


// The function describing the transformation:
const square = (x) => x * x;


// The mapping from Functor(a) => Functor(b)
// using ‘square’ as input to ‘map’:
const squares = numbers.map(square);

// ‘squares’ is now a functor just as ‘numbers’
// … and can therefore be mapped again
const halfSquares = squares.map((x)=> x/2);


