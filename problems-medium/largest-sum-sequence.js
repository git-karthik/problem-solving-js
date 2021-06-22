const solve = (intArray, k) => {
  let largestSeq = [];
  let sum = 0;
  for (let i = 0; i <= intArray.length - k; i++) {
    const seq = intArray.slice(i, k + i);
    const seqSum = seq.reduce((previous, current) => previous + current);

    if (seqSum > sum) {
      largestSeq = seq;
      sum = seqSum;
    }
  }
  console.log(largestSeq);
  return largestSeq;
};

solve([100, 101, 0, 0, 9999], 3);
solve([100, 101, -2, 0, -35, 75], 2);
