/* Exercise 2: Mother-child age difference [In Progress]
Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother 
when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to 
find a person’s object from their name, might be useful here. */

// functions average and byName already provided.  Ancestry array of objects in database.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var mothersAge = ancestry.map(function(per) {
	if (per.mother === null || byName[per.mother] === undefined) {
      return null;
    }
    return (per.born - byName[per.mother].born);
});

console.log(parseInt(average(mothersAge.filter(function(age) {
  return age !== null;
}))));

// 32
