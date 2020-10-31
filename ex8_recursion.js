// Fibonacci sequence:
// Each number is the sum of the two preceding ones,
// starting from 0 and 1 
// => 0, 1, 1, 2, 3, 5, 8, 13, ...

// f(0) = 0, f(1) = 1
// f(n) = f(n-1) + f(n-2)

// Recursive solution
const fib = (n) => {
  if (num <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

fib(10); // '89'
