/*
 * Complete the 'getUmbrellas' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER requirement
 *  2. INTEGER_ARRAY sizes
 */

function getUmbrellas(requirement, sizes) {
  const umbrellasNeeded = new Array(requirement + 1).fill(Infinity);
  umbrellasNeeded[0] = 0;

  for (let umbrellaSize in sizes) {
    for (people = 0; people <= requirement; people++) {
      if (umbrellaSize <= people) {
        let peopleRemaining = people - umbrellaSize;
        let umbrellaCount = umbrellasNeeded[peopleRemaining] + 1;
        umbrellasNeeded[people] = Math.min(umbrellasNeeded[people], umbrellaCount);
      }
    }
  }

  if(umbrellasNeeded[requirement] === Infinity) {
    return -1;
  } else {
    return umbrellasNeeded[requirement];
  }
}
