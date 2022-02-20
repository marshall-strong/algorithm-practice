/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// my solution
function fizzBuzz0(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FizzBuzz");
      } else {
        console.log("Fizz");
      }
    } else {
      if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
}

// https://flexiple.com/fizzbuzz-javascript/
// most readable solution
function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

// https://flexiple.com/fizzbuzz-javascript/
// one line solution
function fizzBuzz2(n) {
  for (let i = 1; i <= n;) console.log((i++ % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
}
/*
  Breakdown:
  
  for (let i = 1; i <= n;)
  // we can eliminate the final expression in the for loop by incrementing i in the body of the loop instead
  
  // the body of the for loop has several parts:

  (i++ % 3 ? "" : "Fizz")
  // the test condition is `i++ % 3` 
  // any test result that is NOT 0 is NOT considered falsy, and will therefore return `""`
  // if the `i` value IS divisible by 3, the result will be 0, which IS falsey, and will therefore return `"Fizz"`
  // we also increment `i` this first time it is being evaluated

  (i % 5 ? "" : "Buzz")
  // the test condition is `i % 5`
  // if there is a remainder, the result will be non-zero and therefore "truthy", so `""` is returned
  // if there is NOT a remainder, the result will be zero and therefore "falsey", so `"Buzz"` is returned

  (expr3) + (expr5)
  // the `+` operand concatenates the two string results
  // this will produce `"Fizz"` if `i` is divisible by 3, `"Buzz"` if `i` is divisible by 5, and `"FizzBuzz"` if `i` is divisible by both

  (expr3) + (expr5) || i
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
  // if `i` is divisble by either 3 or 5, the result of the `+` operand will be truthy
  // this causes the expression to be short-circuit evaluated to the truthy expression, and `i` will not be returned
  // if `i` is divisible by neither 3 nor 5, the result will be `""`, which is falsey
  // this means that the expression to the left of the `||` operand WILL be evaluated, and `i` will be returned
*/
