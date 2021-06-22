const solve = (arrOne, arrTwo, k) => {
  let arr = arrOne.filter((n) => arrTwo.includes(n)).sort((a, b) => a - b);
  return arr[arr.length - k];
};
solve([1, 2, 3, 4, 5], [1, 3, 5], 2);
