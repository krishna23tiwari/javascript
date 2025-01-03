let val1;
val1 = 5 ?? 10

console.log(val1);


let val2;
val2 = null ?? 115

console.log(val2);

let val3;
val3 = undefined ?? 123

console.log(val3);

let val4;
val4 = null ?? 999 ?? 2345

console.log(val4);


// ternary operator

const price = 1000

price >= 900 ? console.log("greater") : console.log("not");
