/*
Eloquent JavaScript - Chapter 6 Exercises: Sequence Interface

Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents 
a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, 
looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on 
its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you 
designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its 
constructor) instead.

*/

// ArraySeq Constructor
var ArraySeq = function(array) {
  this.collection = array;	
  this.position = -1;
};

ArraySeq.prototype.next = function() {
  if (this.position >= this.collection.length - 1) return false;
  this.position++;
  return true;
};

ArraySeq.prototype.currentNum = function() {
  return this.collection[this.position];
};

// RangeSeq Constructor

var RangeSeq = function(from, to) {
  this.position = from - 1;
  this.to = to;
};

RangeSeq.prototype.next = function() {
  if (this.position >= this.to) return false;
  this.position++;
  return true;
};

RangeSeq.prototype.currentNum = function() {
  return this.position;
};

// logFive function that logs first 5 values from sequence object

var logFive = function(obj) {
  for (var i = 0; i < 5; i++) {
  	if (obj.next()) console.log(obj.currentNum());
  }
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104


/*
[Alternate Solution] Sequence interfaces built using traditional iteration instead of abstract iteration

var ArraySeq = function(array) {
  this.collection = array;	
};

var RangeSeq = function(from, to) {
  this.from = from;
  this.to = to;
  this.collection = this.createSeq(this.from, this.to);
};

RangeSeq.prototype.createSeq = function() {
  var newArray = [];
  for (var i = this.from; i <= this.to; i++) {
    newArray.push(i);
  }
  return newArray;
};

var logFive = function(obj) {
  var length = obj.collection.length < 4 ? obj.collection.length - 1 : 4;
  for (var i = 0; i <= length; i++) {
    console.log(obj.collection[i]);	
  }
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

*/
