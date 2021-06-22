const solve = (intArray) => {
  let i = 0;
  let seq = [];
  let sequences = [];
  do {
    if (intArray[i] < intArray[i + 1]) {
      seq.push(intArray[i]);
    } else {
      if (seq.length > 1) {
        seq.push(intArray[i]);
        sequences.push(seq);
      }
      seq = [];
    }
    i++;
  } while (i < intArray.length);

  return sequences.sort((a, b) => a.length - b.length)[sequences.length - 1];
};
console.log(solve([7, 5, 20, 21, 23, 24, 3, 19, 27, 29, 30]));

