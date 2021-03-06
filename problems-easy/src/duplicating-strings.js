/**
 * Duplicating Strings
You are given a string and an integer K as arguments. Return an array of strings that is K elements long, where each element is the string that was provided.

Requirements
Must return an array of strings
Must work with uppercase, lowercase and special characters
Example #1
solve("abc", 5)
> ["abc", "abc", "abc", "abc", "abc",]

Example #2
solve("Hi!", 3)
> ["Hi!", "Hi!", "Hi!"]
 */

const solve = (strArg, k) => {
  let op = [];
  while (k > 0) {
    op.push(strArg);
    k--;
  }
  return op;
};
process.stdout.write(solve("abc", 5));
