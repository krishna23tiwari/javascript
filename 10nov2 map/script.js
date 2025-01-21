const a  = [12,33,45,11,44,22,44,55,66]

// const b = a.map((n) => n + 10)
// console.log(b);

// let x = a.map((n) => n - 10).filter((n) => n > 30).reduce((n,m) => n+ m)

let x = a.map((n) => n - 10).filter((n) => n > 30).findIndex((n) => n ===34)

console.log(x);
