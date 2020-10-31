// Pure function
const pureFunc = (x) => x + 1;

// Evaluation of pure function
const result = pureFunc(1);

// Referential transparency:
// Func can be replaced with its result
const referentialTransparency = 
	result === f(1);

console.log(referentialTransparency); 
// true

