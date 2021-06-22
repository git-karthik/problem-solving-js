const solve = (n) => {
  let i = 1;
  let pascals = [];
  while (i <= n) {
    if (i == 1) {
      pascals.push([1]);
    } else if (i == 2) {
      pascals.push([1, 1]);
    } else {
      let tempArr = [];
      pascals[pascals.length - 1].forEach((value, idx, arr) => {
        if (arr[idx + 1]) {
          tempArr.push(value + arr[idx + 1]);
        }
      });
      tempArr.push(1);
      tempArr.unshift(1);
      pascals.push(tempArr);
    }

    i++;
  }

  return pascals;
};

console.log(solve(6));
