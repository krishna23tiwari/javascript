//shallow copy means they share the same reference so if we change anything in array then it will change
// orignal array

// and deep copy does not share the same refernece so if we chaange anything in an array then it will
// not change in main array

const arr = [0,1,12,3,4,5]

// console.log(arr[1]);

// array methods

// arr.push(9)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(3)
// console.log(arr);

// console.log(arr.includes(4));
// console.log(arr.indexOf(13));
// console.log(arr.indexOf(12));

// const newarr = arr.join()
// console.log(arr);
// console.log(newarr);

// console.log(typeof(arr));
// console.log(typeof(newarr));

// slice and splice

const x1 = arr.slice(1,4)
// console.log(x1);

const x2 = arr.splice(1,4)
console.log("A",x1);
console.log("B",x2);
console.log("C",arr);

//slice = when we use slice then it created a new array
//splice = in splice it changes in orignal array not created a new array