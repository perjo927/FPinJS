// IDENTITY
// functor ==== functor.map(identity):
const f1 = [1, 2, 3, 4, 5];

const identity = (x) => x;

const f2 = f1.map(identity);  

// Both yield: [1, 2, 3, 4, 5]
console.log(f1, f2); 

// COMPOSITION
// f.map(x => f(g(x))) == f.map(g).map(f)
const functor = [1, 2, 3, 4, 5];

const f = (x) => x + x; // double
const g = (x) => x * x; // square

// use composed square and double to map
const newF1 = functor.map(x => f(g(x)));  
// first square, then double each element
const newF2 = functor.map(g).map(f); 

// Both yield [2, 8, 18, 32, 50] 
console.log(newF1, newF2); 
