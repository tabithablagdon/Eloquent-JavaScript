/* Exercise 1: Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that 
has all the elements of the input arrays. */


var arrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9, 10]];

var newArray = arrays.reduce(function(a, b) {
  return a.concat(b)});

console.log(newArray);

// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
