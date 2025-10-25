// const data = new Promise((resolve, reject) => {
//     let a = true
//     if(a){
//         resolve("hello")
//     }else{
//         reject("bye")
//     }
// })

// data
// .then((a) => {
//     console.log(a)
// })
// .catch((b) => {
//     console.log(b)
// })


// const a = new Promise((resolve) => setTimeout(() => resolve("promise 1")), 1000)
// const b = new Promise((resolve) => setTimeout(() => resolve("promise 2")), 2000)
// const c = new Promise((resolve) => setTimeout(() => resolve("promise 3")), 3000)

// Promise.all([a, b, c])
//     .then((v) =>{
//         console.log("all resolved", v)
//     })
//     .catch((x) => {
//         console.error("one failed", x)
//     })


// function abc(){
//     let count = 0
//     return function xyz(){
//         count ++
//         return count
//     }
// }

// let a = abc()
// console.log(a())
// console.log(a())


// function abc (name,callback){
//     console.log("hello " + name)
//     callback()
// }

// function xyz(){
//     console.log("Bye")
// }

// abc("kk", xyz)


// console.log("start")

// setTimeout(() => {
//     console.log("first")

//     setTimeout(() => {
//         console.log("Second")

//         setTimeout(() => {
//             console.log("third")

//             setTimeout(() => {
//                 console.log("fourth")
//             }, 3000)

//         }, 2000)

//     },1000)

// }, 500);



// let a = [1,2,3,4,5]
// let b = [3,4,5,6,8]
// let c = []

// for(let i = 0; i<a.length; i++){
//     c.push(a[i])
// }

// for(let j = 0; j<b.length; j++){
//     c.push(b[j])
// }

// console.log(c)

// let a = [1, 2, 3, 4, 5, 3, 4, 5, 6, 8]

// let b = []

// for(let i =0; i<a.length; i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }

// console.log(b)


// let a = 5
// let b = 1

// for(let i = 1; i<=a; i++){
//     b *= i
// }

// console.log(b)


// let a = 10
// let b = 0
// let c = 1

// console.log(b)
// console.log(c)

// for(let i = 1; i<=a; i++){
//         let x = b + c
//         console.log(x)
//         b = c
//         c= x
    
// }



// function abc(name){
//     console.log(name)
//     return function inner(g){
//         console.log(g)
//         return
//     }
// }

// abc((kk))

// function abc(name){
//     console.log("hi "+ name)
//     return function ab(value){
//         console.log("value", name)
//         return
//     }
// }

// abc('kk')("as")

// let a = 15

// let value = false

// for(let i = 2; i<a/2 ; i++){
//     if(a % i === 0){
//         value = true
//     }
// }

// if(!value){
//     console.log("yes its a prime")
// }else{
//     console.log("No its not a prime")
// }


// let a = 20

// for(let i = 0; i<=a; i++){
//     if(i % 2 !== 0){
//         console.log("even",i)
//     }
// }


// let a = "hello how are you count vowels here"

// let b = "aeiouAEIOU"
// let c = 0

// for(let i = 0; i<a.length; i++){
//     if(b.includes(a[i])){
//         c++
//     }
// }

// console.log(c)


// let a = "hello how are you count vowels here"

// let a  = "hello"
// let b = "aeiouAEIOU"
// let c = 0

// for(let i = 0; i<a.length; i++){
//     if(!b.includes(a[i])){
//         c++
//     }
// }

// console.log(c)



// let a = [1,22,44,55,212,55]

// let b = a[0]

// for(let i = 0; i<a.length; i++){
//     if(a[i] > b){
//         b = a[i]
//     }
// }

// console.log(b)


// let a = [1,22,44,55,212,55]

// let b = a[0]

// for(let i = 0; i<a.length; i++){
//     if(a[i] < b){
//         b = a[i]
//     }
// }

// console.log(b)


// let a = [1,22,44,55,212,55]

// let b = a[0]
// let c = Infinity

// for(let i = 0; i<a.length; i++){
//     if(a[i] > b){
//         c = b
//         b = a[i]
//     }
// }

// console.log(b)
// console.log(c)




// let a = [1,22,44,55,212,55]

// let b = a[0]
// let c = a[1]

// for(let i = 0; i<a.length; i++){
//     if(a[i] < b){
//         c = b
//         b = a[i]
//     }
// }

// console.log(b)
// console.log(c)




// let a = "hello sir how   are you "

// let count = 0
// let b = false

// for(let i = 0; i<a.length; i++){
//     if(a[i] !== ' ' && !b){
//         count ++
//         b = true
//     }else if(a[i] === ' '){
//         b = false
//     }
// }

// console.log(count)




// let a = "hello this is Krishank kant"

// let b = ""
// let c = ""

// for(let i = 0; i<=a.length-1; i++){
//     if(a[i] !== " "){
//         b += a[i]
//     }else{
//         if(b.length > c.length){
//             c = b
//         }

//         b = ""
//     }
// }

// if(b.length > c.length){
//     c = b
// }

// // console.log(b)
// console.log(c)


// let a = ["a","b","c","a", "z", "b", "x", "x"]

// let b = {}

// for(let i = 0; i<a.length; i++){
//     let x = a[i]
//     if(b[x]){
//         b[x] ++
//     }else{
//         b[x] = 1
//     }
// }

// console.log(b)



// const data = fetch('https://fakestoreapi.in/api/products/category?type=tv&sort=desc')
// .then((res) => {
//    return res.json()
// })
// .then((value) => {
//     console.log(value)
// })
// .catch((e) => {
//     console.log(e)
// })

// const data = async() =>{
//     const res = await fetch('https://fakestoreapi.in/api/products/category?type=tv&sort=desc')
//     const value = res.json()
//     return value
// }

// data()
// .then((v) => {
//     const abc = v
//     let xx = abc.products.map((m) => m.brand)
//     console.log(xx)
// })
// .catch((err) => {
//     console.error(err)
// })




// let a = async() => {
//     const res = await fetch('https://fakestoreapi.in/api/products/category?type=tv&sort=desc')
//     const response = res.json()
//     return response
// }

// a()
// .then((j) => {
//     const kl = j
//     const v = kl.products.flatMap((v) => v.color)
//     console.log(v)
// })
// .catch((err) => {
//     console.log(err)
// })

// let a = [2,4,6,8, 7]

// let v  = a.some((n) => n % 2 === 0)

// console.log(v)


// let a = ["hello", "world"]

// for(let i = a.length-1; i>=0; i--){
//     console.log(a[i])
// }


let a = "hello world kk"

let b = []

let c = a.split(" ")

// b.push(a)

// console.log(b)

for(let i = c.length - 1; i>= 0; i--){
    console.log(c[i])
}

