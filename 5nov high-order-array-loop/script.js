// for of loop

// let a = [1,2,3,4,5,"hello"]

// for (const i of a) {
//     console.log(i);
// }

// let b = "hello my name is krishna"

// for (const i of b) {
//     if(i == " "){
//         break
//     }
//     console.log(i);
// }

// maps 

// map we use when we need every element is unique

// let map = new Map()
// map.set('IN', "INDIA")
// map.set("USA", "america")
// map.set('BR', "BRZIL")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [value] of map) {
//     console.log(value);
// }

// for of loop cant be iterate object

// const z1 = {
//     name : "krishna",
//     lastname : "twari"

// }

// for (const [key,value] of z1) {
//     console.log(key);
// }

// const z2 = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby"
// }

// for (const key in z2) {
//    console.log(`${key} shortcut for ${z2[key]}`);
//    console.log(z2[key]);
// }

// let x22 = ["js", "python", "cpp", "node", "react"]

// for (const key in x22) {
//     console.log(x22[key]);
// }

// let x33 = "hello my name is kk"

// for (const i in x33) {
//     console.log(x33[i]);
// }

// for each loop

const add = ["js", "ruby", "c++", "python", "java"]

// add.forEach( function (i) {
//     console.log(i);
    
// })

// add.forEach((i) => {
//     console.log(i);
// });

// function print(i){
//     console.log(i);
// }

// add.forEach((print))

// add.forEach((i, index, arr) => {
//     console.log(i, index, arr);
// })


let v2 = [{

    language: "english",
    from: "jaipur",
    state: "raj",
},
{
    language: "hindi",
    from: "bikaner",
    state: "rj",
   
},
{
    language: "telugu",
    from: "hyderaba",
    state: "andhra",
}]

v2.forEach(i => {
    console.log(i.language);
});