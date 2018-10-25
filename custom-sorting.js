var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];


// sorting the mapped array containing the reduced values
students.sort(function(a, b) {
  // sorts list alphabetically by name
  // 1 represents 'true' in the case of the .sort function
  if (a.name > b.name) {
    return 1;
  }
  // -1 represents 'false' in the case of the .sort function
  if (a.name < b.name) {
    return -1;
  }
  // checks if two names are the same and if so, sort descending by age
  if (a.name === b.name) {
    return b.age - a.age;
  }
});

console.log(students.sort());



