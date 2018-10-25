function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  return function() {
    // .shift() removes the first item of the array and returns that item,
    // in this case the item is assigned to nextRoll, which is
    // returned on the next line to print the "predicted" next die.
    var nextRoll = list.shift();
    return nextRoll;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


