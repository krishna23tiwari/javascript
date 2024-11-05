
// function capitalizeWords(arr, callback) {
//   return callback(arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)));
// }
// console.log(capitalizeWords(["hello", "world"], words => words.join(" ")));

// function splitString(str, callback) {
//   return callback(str.split(" "));
// }
// console.log(splitString("Hello World", arr => arr.length));

function flattenArray(arr, callback) {
  return callback(arr.flat());
}
console.log(flattenArray([[1, 2], [3, 4]], flat => flat));








