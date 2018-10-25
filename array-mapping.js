var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// prototype.map() takes a function with parameter 'num', 'num' represents each element in the array.
// x and y can be accesssed with square bracket notation
var result = input.map(function(num) {
  // variable sets 'square' as the number that needs to be squared finally
  var square = ((num['x'] * num['x']) + (num['y'] * num['y']))
  // Math.sqrt() takes variable square and gives us the square root of 'square'
  return Math.sqrt(square);
});



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


