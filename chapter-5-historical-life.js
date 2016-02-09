/* Chapter 5 - Exercise 3: Historical Life Expectancy
When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. 
Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking 
their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100). 

Note: ancestry refers to an array of objects linked externally from the EJ book and is not explicitly defined in this exercise 

*/



function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function age(person) {
  return person.died - person.born;
};

var centuries = {
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: []
};

ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if (century === 16) 
    centuries["16"].push(person.died - person.born);
  else if (century === 17) 
    centuries["17"].push(person.died - person.born);
  else if (century === 18) 
    centuries["18"].push(person.died - person.born);
  else if (century === 19) 
    centuries["19"].push(person.died - person.born);
  else if (century === 20) 
    centuries["20"].push(person.died - person.born);
  else if (century === 21) 
    centuries["21"].push(person.died - person.born);
});

for (var century in centuries) {
  console.log(century + ": " + average(centuries[century]));
};



// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
