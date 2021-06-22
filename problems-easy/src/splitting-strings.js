/**
 * Splitting Strings
You are given a string and integer K as arguments. Split the string into an array of strings, 
where each element is no longer than K characters long. Return the resulting array.

The argument string will always be at least K characters long.

Requirements
Must return an array of strings
Example #1
solve("aabbbcccd", 3)
> ["aab", "bbc", "ccd"]

Example #2
solve("abcdefgh", 5)
> ["abcde","fgh"]
 */

const solve = (strArg, k) => {
  let op = [];
  do {
    op.push(strArg.substring(0, k));
  } while ((strArg = strArg.substring(k, strArg.length)) !== "");

  console.log(op);
  return op;
};

solve("aabbbcccd3", 3);
