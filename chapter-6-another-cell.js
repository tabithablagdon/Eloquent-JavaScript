/*
Eloquent JavaScript - Chapter 6 Exercises: Another cell

Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier 
in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the 
given width and height, even if the inner cell would naturally be smaller.

*/


var StretchCell = function(inner, width, height) {
  this.inner = inner; // TextCell object
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() { // width of the longest word in the string
  return this.inner.minWidth() > this.width ? this.inner.minWidth() : this.width;
};

StretchCell.prototype.minHeight = function() { // length of the array text
  return this.inner.minHeight() > this.height ? this.inner.minHeight() : this.height;
};

StretchCell.prototype.draw = function(width, height) {
  // Builds cell with padding.
  return this.inner.draw(this.minWidth(), this.minHeight());
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
