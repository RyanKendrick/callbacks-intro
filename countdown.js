// function countdownGenerator() that takes in a number x
//and returns a function that counts down when it is called

var countdownGenerator = function (x) {
  var i = x;
  // anonymous function() is a 'closure'
  return function() {
    if (i >= 1) {
      console.log("T-minus " + i + "...");
      i--;
    } else if (i === 0) {
      console.log("Blast off!");
      i--;
    } else {
      console.log("Rockets already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!