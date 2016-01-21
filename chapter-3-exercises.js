/* Chapter 3 Exercise:

Exercise 1: The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can do that ourselves now. Write a function min that takes two arguments and returns their minimum. */

function min(num1, num2) {
  if (num1 === num2) {
    return "The numbers are equal!";
  }
  else if (num1 < num2) {
    return num1;
  }
  else if (isNaN(num1) || isNaN(num2)) {
    return "You must enter numbers only";
  }
  else {
    return num2;
  }
};


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* Exercise 2 - Recursion:  We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by 
using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a 
Boolean.  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

function isEven(n) {

  if (n < 0) {
    return isEven(-n);
  }
  else if (n === 0) {
      return true;
  } 
  else if (n === 1) {
      return false;
  }
  else {
    return isEven(n - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??