/*
Eloquent JavaScript - Chapter 6 Exercises: Another cell

Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier 
in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the 
given width and height, even if the inner cell would naturally be smaller.

The StretchCell constructor only works with the DrawTable interface in Eloquent JS Chaper 6 copied and pasted below

*/

var StretchCell = function(inner, width, height) {
  this.inner = inner; // TextCell object
  this.width = width;
  this.height = height;
}

// return greater of width provided or minWidth of Text Cell object
StretchCell.prototype.minWidth = function() { 
  return this.inner.minWidth() > this.width ? this.inner.minWidth() : this.width;
};

// return greater of height provided or minWidth of Text Cell object
StretchCell.prototype.minHeight = function() { 
  return this.inner.minHeight() > this.height ? this.inner.minHeight() : this.height;
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(this.minWidth(), this.minHeight());
};

// test case
var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]




/* 

####### drawTable Interface coded by Marijn Haverbeke ####### 

function TextCell(text) { // text input: "a\nbb\nccc\ndddd\neeeee"
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() { // width of the longest word in the string
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() { // length of the array text
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  // Builds cell with padding.
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

//var x = new TextCell('tabitha\nis\nawesome');
//console.log(x.draw(x.minWidth(), x.minHeight()));

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

// The inner parameter is a TextCell object.
function UnderlinedCell(inner) {
  this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function() {
  // minWidth works the same as it does for TextCell.
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  // Add 1 to account for the underline,
  // which is just some dashes.
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  // When drawing the inner cell, subtract 1 from
  // height since the inner cell doesn’t have dashes.
  return this.inner.draw(width, height - 1)
    // Add the dashes in!
    .concat([repeat("-", width)]);
};


function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
      // This was changed:
      if (typeof value == "number")
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}



// dataset

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

console.log(drawTable(dataTable(MOUNTAINS)));

/*
