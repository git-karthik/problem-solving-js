/**
 * Kth Integer From End of Array
You are given an array of integers and an integer K as arguments. 
Return the element that is the Kth index from the end of the array.

Assume that the argument array length will always be at least K + 1

Requirements
Must return a single integer.
Must work with positive or negative integers
Example #1
solve([1,2,3,4,5,6], 0)
> 6

Example #2
solve([-1,2,3,-4,5,0], 3)
> 3
 */

const solve = (intArray, k) => {
  let element = intArray[intArray.length - k - 1];
  console.log(element);
  return element;
};

solve([-1, 2, 3, -4, 5, 0], 3);
