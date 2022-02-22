/*
 * Complete the 'droppedRequests' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY requestTime as parameter.
 */

function droppedRequests(requestTime) {
  let totalDropped = 0;

  // `alreadyDropped` object tracks requests that have already been dropped
  // object keys are array indices, object values are array elements
  let alreadyDropped = {};

  // alreadyDropped helper functions accept a requestTime index as a parameter
  function logDroppedRequest(i) {
    alreadyDropped[i] = requestTime[i];
    totalDropped++;
  } 
  function checkIfAlreadyDropped(i) {
    if (!alreadyDropped[i]) logDroppedRequest(i);
  }

  // gateway limiting helper functions accept a requestTime index as a parameter
  function checkOneSecondLimit(i) {
    if (requestTime[i] == requestTime[i - 3]) checkIfAlreadyDropped(i);
  }
  function checkTenSecondLimit(i) {
    if (requestTime[i] - requestTime[i - 20] < 10) checkIfAlreadyDropped(i);
  }
  function checkOneMinuteLimit(i) {
    if (requestTime[i] - requestTime[i - 60] < 60) checkIfAlreadyDropped(i);
  }

  const n = requestTime.length;

  for (let i = 0; i < n; i++) {
    if (i > 2) checkOneSecondLimit(i);
    if (i > 19) checkTenSecondLimit(i);
    if (i > 59) checkOneMinuteLimit(i);
  }

  return totalDropped;
}

// https://leetcode.com/discuss/interview-question/819577/Throttling-Gateway-Hackerrank

const requestTimeExample = [ 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11, 11, 11 ];
