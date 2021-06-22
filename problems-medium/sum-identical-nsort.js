const solve = (intArray) => {
  let map = new Map();
  intArray.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, num);
    } else {
      map.set(num, num + map.get(num));
    }
  });

  return Array.from(map.values()).sort((a, b) => a - b);
};

console.log(solve([2, 1, 2, 3, -1, -1, 33]));
