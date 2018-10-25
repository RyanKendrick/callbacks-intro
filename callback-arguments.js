// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      // sets Waldo's index as a variable "index"
      found(i);  // execute callback
    }
  }
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