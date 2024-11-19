// let x1 = new Date()
// console.log(x1.toString());
// console.log(x1.toDateString());
// console.log(x1.toLocaleDateString());
// console.log(typeof x1);

//date is an object in js

// let x2 = new Date(2024, 9, 29)
// console.log(x2.toDateString());

// in js month started from 0

// let x3 = new Date(2024, 9, 29, 5, 10)
// console.log(x3.toLocaleString());

// let x4 = new Date("2024-09-29")

// let x4 = new Date("10-29-2024")
// console.log(x4.toLocaleString());

// let x5 = new Date("10-29-2024")
// let y1 = Date.now()
// console.log(y1);
// console.log(x5.getTime());

// console.log(Math.floor(Date.now()/1000));

//  let z1 = new Date()
// console.log(z1.getDay());

let z2 = new Date();

z2.toLocaleString('default',{
   weekday: "long",
})

console.log(z2.weekday);