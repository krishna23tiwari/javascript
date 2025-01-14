// let a = [12,3,44,66]

// for (const key in a) {
//    console.log(a[key]);
// }

// let b = [13, 14, 15,[12,44,55],[22],[66,88]]

// let c = b.flat(Infinity)

// console.log(c);

// const array = [1, 2, 3, 4];

// const result = array.flatMap(x => [x, x * 2]);

// console.log(result);

const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const flatResult = nestedArray.flatMap(arr => arr);

console.log(flatResult); 

// const users = [
//     { name: 'Alice', hobbies: ['reading', 'hiking'] },
//     { name: 'Bob', hobbies: ['cooking', 'gaming'] },
//     { name: 'Charlie', hobbies: ['reading', 'traveling'] }
// ];

// const allHobbies = users.flatMap(user => user.hobbies);

// console.log(allHobbies); 

