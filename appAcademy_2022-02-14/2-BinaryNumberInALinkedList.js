/*
 * Complete the 'getNumber' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_SINGLY_LINKED_LIST binary as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

// `binary`: reference to the head of a singly-linked list of binary digits
function getNumber(binary) {
  // initialize the base 10 result to zero
  let res = 0;
  // traverse the linked list
  while (binary != null) {
    // multiply the current value of `res` by 2, then add `binary.data` for the current node
    res = (res * 2) + (binary.data ? 1 : 0);
    // move on to the next node
    binary = binary.next;
  }
  return res;
}

// https://www.geeksforgeeks.org/javascript-program-to-find-decimal-equivalent-of-binary-linked-list/

/*
ALTERNATIVE SYNTAX using the Left Shift Operator (<<)
The left shift operator (<<) shifts the first operand the specified number of bits to the left.
ex: `a << b` would multiply `a` by 2 `b` times
    res = (res << 1) + (binary.data ? 1 : 0);
This would be equivalent to the code we used -- res gets multiplied by 2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift
*/

/*
SAMPLE WALKTHROUGH:

//`010011` is the binary equivalent of `19`
// this binary number has 6 digits, so the function will iterate through the while loop six times 
// for each iteration:
res = ((res) * 2) + (node.data)

// before the while loop starts
res = 0

// first iteration
// res equals 0; node.data equals 0
res = ((0) * 2) + ((0))

// second iteration
// res equals 0; node.data equals 1
res = ((0) * 2) + (1)

// third iteration
// res equals 1; node.data equals 0
res = ((1) * 2) + (0)

// fourth iteration
// res equals 2; node.data equals 0
res = ((2) * 2) + (0)

// fifth iteration
// res equals 4; node.data equals 1
res = ((4) * 2) + (1)

// sixth iteration
// res equals 9; node.data equals 1
res = ((9) * 2) + (1)

// `res` now equals 19
// `node.next` for the final node equals null, which breaks the while loop
// we therefore return the current value of `res`, which is `19`
*/
