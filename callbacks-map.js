
var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var output = [];
  // for...of loops through 'iterables' such as arrays
  // for...in loops through the properties (keys) of an object
  // THIS vvvvv for...of loop loops through the 'words' array
  for (word of arr) {
    // for each iteration the word is passed as a parameter to the given callback functions and then
    // pushes it to the empty 'output' array
    output.push(callback(word));
  }
  console.log(output);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

