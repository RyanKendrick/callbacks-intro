// SIMPLIFIED SOLUTION
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // refactored to use forEach loop instead of for loop
  // arr.forEach(function("first parameter represents the array element that the loop is on",
  // second element refers to the index of the element",
  //"third element (optional) refers to entire array that element belongs to"))
  arr.forEach(function(name, i) {
    if (arr[i] === "Waldo") {
      found(i);  // execute callback
      }
  });
}


function actionWhenFound(i) {
  console.log("Found him at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// MORE COPLICATED SOLUTION
// The second argument/parameter is expected to be a function
/*function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      // sets Waldo's index as a variable "index"
      var index = arr.indexOf('Waldo');
      found(index);  // execute callback
    }
  }
}


function actionWhenFound(index) {
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);*/