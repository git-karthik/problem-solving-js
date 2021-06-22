### Largest Common Integer

You are given two sorted arrays of integers and an integer K as arguments. Return the Kth largest common number between the two arrays.

The argument array will always have at least K number of common numbers.

#### Requirements

Must return a single integer

#### Example #1

solve([1,2,3,4,5],[1, 3, 5],2)

> 3

Determine the common integers found in both arrays, which are 1, 3 and 5.
The order of common integers from largest to smallest is 5,3,1.
Since K=2 we return the second largest common number, 3.
