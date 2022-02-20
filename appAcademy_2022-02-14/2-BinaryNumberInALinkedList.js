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
