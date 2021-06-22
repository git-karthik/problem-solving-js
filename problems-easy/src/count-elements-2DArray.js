/**
 * Find the Number of 1's in a 2D Array
You are given a two dimensional array containing arrays of integers as arguments. 
Return the amount of times that the number 1 is found in any of the arrays.

Requirements
Must return a single integer
Example #1
solve([
  [1, 4, 2, 1],
  [6, 3, 8, 9],
  [1, 5, 1, 0]
])
> 4
 * @param {*} intArray 
 * @returns the count of 1 in the 2 dimensional array
 */
const solve = (intArray) => {
  let count = 0;
  intArray.forEach((element) => {
    count += element.filter((n) => n == 1).length;
  });
  return count;
};

solve([
  [1, 4, 2, 1],
  [6, 3, 8, 9],
  [1, 5, 1, 0],
]);
