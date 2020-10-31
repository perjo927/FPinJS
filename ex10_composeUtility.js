// Compose utility:
// Take n number of functions
// Return a function that takes the arg to 
// the composed function
// The composed function will reduce 
// by calling the stored functions 
// from right to left
// Starting with the initial arg
// and subsequently the output of previous call
const compose = (...functions) => 
	(initialArg) =>
  functions.reduceRight(
    (accumulatedValue, func) =>
		func(accumulatedValue), initialArg
  );
