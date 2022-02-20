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
