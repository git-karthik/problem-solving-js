### Pascal's Triangle
Given a positive whole number as an argument, return the N number of layers of Pascal's Triangle. Each layer of Pascal's Triangle is built by adding together the number above to the left and above to the right. Empty spaces above left and right of a number are treated as zero.

Example Image From Wikipedia

#### Requirements
Must return a two dimensional array containing arrays of integers
The number of inner arrays must match the argument integer
The first integer in every inner array must be a 1
The sum of all integers in each array must be double the sum of the previous array
#### Example #1
solve(3)
> [[ 1 ], [ 1, 1 ], [ 1, 2, 1 ]]
   1  
  1 1  
 1 2 1   
#### Example #2
solve(5)
> [[ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ]]
    1 
   1 1           1 + 1 = 2 (1 * 2) 
  1 2 1         1 + 2 +1 = 4 (2 * 2) 
 1 3 3 1       1 + 3 + 3 + 1 = 8 (4 * 2) 
1 4 6 4 1     1 + 4 + 6 + 4 + 1 = 16 (8 * 2)
1
const solve = (n) => {
2
  return;
3
};
4
​

