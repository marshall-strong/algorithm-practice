// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// https://medium.com/@ranjitharaja/coin-change-recursive-solution-in-javascript-40000edd8f5d

function coinChange(coins, amount) {
  function findMinCount(coins, idxCoin, currentSum, amount, count, result) {
    console.log(`coins: ${coins}, idxCoin: ${idxCoin}, currentSum: ${currentSum}, amount: ${amount}, count: ${count}, result: ${count}`);

    // easiest base case -- if asked to return zero cents, return zero coins
    if(amount == 0) return 0;

    if (currentSum > amount) return result;

    if (currentSum == amount) {
      console.log(`result: ${result}, count: ${count}`);
      result = Math.min(count, result);
      return result;
    }

    if (idxCoin <= coins.length - 1) {
      count++;
      result = findMinCount(coins, idxCoin, currentSum + coins[idxCoin], amount, count, result);

      count--;
      result = findMinCount(coins, idxCoin + 1, currentSum, amount, count, result);
    }

    return result;
  }

  // If we are only given 1 cent coins to make change with, the minimum number of coins would be equal to amount.
  // We therefore use `amount + 1` as our initial value for `result`
  const initialResult = amount + 1;

  const finalResult = findMinCount(coins, 0, 0, amount, 0, initialResult); 

  if (finalResult == initialResult) {
    return -1;
  } else {
    return finalResult;
  }
}

console.log(coinChange([1,2,5], 11));
