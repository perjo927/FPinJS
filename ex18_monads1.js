// A pure function that maps input to output
// and wraps (“lifts”) the value in a structure 
const b = (x) => [x + 1]
const a = 1;
// A simple value is wrapped in the same type
const aMonad = [a]; // a.k.a “type lift” 

// A monad can “map” plus “flatten”
// wrapped values of its structure type
// to a new structure of the same kind
const flattenMonad = aMonad.flatMap(b);
const mappedMonad = aMonad.map(b);


// flatMap yields [2] while map yields [[2]]
console.log(flattenMonad, mappedMonad);
