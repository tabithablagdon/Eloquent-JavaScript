/* Exercise 1:


*/

// Your code here.

function range(start, end) {
  rangeArray = [];
  if (arguments.length === 3) {
    var step = Number(arguments[2]);
    for (var i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  }
  else {
    for (var i = start; i <= end; i++) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
};

function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
