const solve = (intArray, k) => {
  let min = 0;
  let max = 0;
  for (let i = 0; i < intArray.length - 1; i++) {
    if (intArray[i][0] < intArray[i + 1][0]) {
      min = intArray[i][0];
    } else {
      min = intArray[i + 1][0];
    }

    if (intArray[i][1] > intArray[i + 1][1]) {
      max = intArray[i][1];
    } else {
      max = intArray[i + 1][1];
    }
  }

  const isInRange = (min, max, k) => {
    return min >= k[0] && max <= k[1];
  };

  return isInRange(min, max, k);
};

console.log(
  solve(
    [
      [4, 5],
      [6, 7],
    ],
    [3, 8]
  )
);
