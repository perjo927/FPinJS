// A pure function maps input to output
const b = (x) => x + 1;
// A simple value to use as input
const a = 1;
const bOutput = b(a); 

// A functor wraps a value in structure/context
const aFunctor = [a];
// Its map interface takes a pure function
// and outputs new functor
// with its wrapped values transformed
// with structure/context preserved
const bFunctor = aFunctor.map(b);
// The pure function works in both scenarios
console.log(bOutput, bFunctor); // 2, [2]
 
