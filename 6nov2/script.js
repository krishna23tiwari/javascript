let a =  [1, 2, [3, 4], 5, "hello"];

let b = a.some((n) => Array.isArray(n));

console.log(b);
