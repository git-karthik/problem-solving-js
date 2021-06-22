/**
 * Remove First Integer in Array
You are given an array of integers as an argument. Return an array containing all elements from the argument array, omitting the first element.

Assume the argument array will always contain at least two elements.

Requirements
Must return an array of integers
Must work with both positive and negative integers
Example #1
solve([1,2,3,4,5])
> [2,3,4,5]

Example #2
solve([-1,-2])
> [-2]
 */

const solve = (intArray) => {
  intArray.shift();
  console.log(intArray);
  return intArray;
};

solve([1, 2, 3, 4, 5]);
