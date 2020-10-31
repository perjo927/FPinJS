const compose = (...functions) => 
	(initialArg) =>
  functions.reduceRight(
    (accumulatedValue, func) =>
		func(accumulatedValue), initialArg
  );


/* PROVE h(x) === f(g(x)) */
const f = (x) => x * x;
const g = (x) => x + x;

const result1 = f(g(1)); 

// h(x) = f(g(x))
const h = compose(f, g); // “point free”
const result2 = h(1); 

// h(x) === f(g(x))
console.log(result1 === result2); // 'true'
