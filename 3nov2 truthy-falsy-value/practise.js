// let a = "racecare"
// let b = ""

// for(let i = a.length-1; i>=0; i--){
//     b += a[i] 
  
// }

// if(a == b){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// factorial 5


// let a = 5
// let b = 1

// for(let i = 1; i<=a ; i++){
//     b *= i
// }

// console.log(b);


// for maximum

// let a = [1,2,44,22,55,11,56,3,32]
// let b = a[0]

// for(let i = 0; i<a.length; i++){
//     if(a[i]> b){
//         b = a[i]
//     }
// }

// console.log(b);
// 


// for second max

// let a = [1,2,44,22,55,11,51,3,32, 102]
// let b = a[0]
// let c = a[1]

// for(let i = 0; i<a.length; i++){
//     if(a[i]> b){
//         c = b
//         b = a[i]
//     }
// }

// console.log(b);
// console.log(c);

// unique set of number


// let a = [1,2,3,4,5,6,5,2,1,5,5,5,8,3]

// let b = []

// for(let i = 0; i<a.length; i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }

// console.log(b);


//flat an Array

// let a = [1, [2, [3, [4]]]];

// let b = []

// let c = [...a]

// for(let i = 0; i< c.length; i++){
//     if(typeof c[i] === "number"){
//         b.push(c[i])
//     }
//     let x = c[i]
    
//     for(let j =0; j<x.length; j++){
//         c.push(x[j])
//     }
// }

// console.log(b);


// let a = [1,2,2,3,1,4,5,1,2,6,4,3]

// let b = {}

// for(let i = 0; i<a.length; i++){
//     let x = a[i]
//         if(b[x]){
//             b[x] ++
//         }else{
//             b[x] = 1
//         }
    
// }

// console.log(b);


// let a = [1,2,44,33,22,11,55,23]

// let b = a[0]
// let c = a[1]

// for(let i = 0; i<a.length; i++){
//     if(a[i] > b){
//         c = b;
//         b = a[i]
//     }
// }

// console.log(b);
// console.log(c);


// let a = ["a", "b", "c", "b", "a", "d"]

// let b = {}

// for(let i = 0; i<a.length; i++){
//     let x = a[i]
//     if(b[x]){
//         b[x] ++
//     }else{
//         b[x] = 1
//     }
// }

// console.log(b);


// let a = "hello my name is krishna"

// let b = ""
// let c = ""

// for(let i = 0; i<=a.length -1; i++){
//     if(a[i] !== " "){
//         b += a[i]
//     }
//     else{
//         if(b.length > c.length){
//             c =b
//         }
        
//         b= ""
//     }
// }

// if(b.length > c.length){
//     c = b
// }
// console.log(c);


// let a = [1,2,3,4,3,2,1,5,6,4,3,3,1]

// let b = []

// for(let i = 0; i<a.length; i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }

// console.log(b);

// prime number

// let a = 17
// let b = true


// if(a<2){
//      b = false
// }else{
//     for(let i = 2; i<a; i++){
//         if(a % i === 0){
//             b = false
//             break
//         }
//     }
// }

// if(b){
//     console.log("yes");
// }else{
//     console.log("no");
// }



// let n = 10;
// let a = 0;
// let b = 1


// for(let i = 1; i<=n; i++){
//     console.log(a);
//     let z = a + b
//     a = b
//     b = z
// }

// let a = "12345"

// let b = 0

// for(let i = 0; i<a.length;  i++){
//     b += Number(a[i])
// }

// let c = b.toString()

// console.log(c);


// let a = "hello World kaeiouAEIOU"

// let b = 0
// let x = "aeiouAeiou"

// for(let i = 0; i<a.length;i++){
//     if(x.includes(a[i])){
//         b ++
//     }
// }

// console.log(b);


// let a = "my name is krishna"

// let b  = ""
// let c = true

// for(let i = 0; i<a.length; i++){
//   let c = a[i];
   
//   if(c && c !== ' '){
//       b += c.toUpperCase()
//       c = false
//   }else{
//       b += c
//       if(c === ""){
           
//       }
//   }
// }

// console.log(b);



// let a = "hello how are you krishna"
// let b = ""
// let c = ""

// for(let i = 0; i<=a.length-1; i++){
//     if(a[i] !== " "){
//         b += a[i]
//     }
    
//     else{
//         if(b.length > c.length){
//             c = b
//         }
        
//         b = ""
//     }
// }

// if(b.length > c.length){
//     c = b
// }

// let d = c.length
// console.log(d);

// console.log(c);


// let n = 100

// for(let i = 2; i<=n; i++){
//     let b = true
    
//     for(let j = 2; j <i; j++){
//         if(i % j === 0){
//             b = false
//             break
//         }
//     }
    
//     if(b){
//         console.log(i);
//     }
// }



// fib series
// factorial 
// arrary second and third lowest

// array second and thired highest
// sting and big Word
// otp generate 



// factorial

// let a = 5
// let x = 1

// for(let i =1; i<=5; i++){
//     x *= i
// }

// console.log(x);


// array second and third lowest

// let a = [11,222,31,4,5,333,12,11, 23]

// let b = Infinity
// let c = Infinity
// let d  = Infinity

// for(let i = 0; i<a.length; i++){
//     if(a[i] < b){
//         d = c
//         c = b
//         b = a[i]
//     }else if(a[i] < c && a[i] !== b){
//             d = c
//             c  = a[i]
//         }
//     else if(a[i] < d && a[i] !== c && a[i] !== b){
//             d = a[i]
//         }
    
// }

// console.log(b);
// console.log(c);
// console.log(d);


// array second and third largest


// let a = [11,222,31,4,5,333,12,11, 23]

// let b = a[0]
// let c = Infinity
// let d  = Infinity

// for(let i = 0; i<a.length; i++){
//     if(a[i] > b){
//         d = c
//         c = b
//         b = a[i]
//     }else if(a[i] > c && a[i] !== b){
//             d = c
//             c  = a[i]
//         }
//     else if(a[i] > d && a[i] !== c && a[i] !== b){
//             d = a[i]
//         }
    
// }

// console.log(b);
// console.log(c);
// console.log(d);





// let a = "hello how are you worldworld"

// let b =""
// let c = ""

// for(let i = 0; i<=a.length-1; i++){
//     if(a[i] !== " "){
//         b += a[i]
//     }else{
//         if(b.length > c.length){
//             c  = b
//         }
        
//         b = ""
//     }
// }

// if(b.length > c.length){
//     b  = c
// }

// // console.log(b);
// console.log(c);



// let otp = ""

// for(let i = 0; i<6; i++){
//     otp += Math.floor(Math.random() * 10)
// }

// console.log(otp);


// fib series

// let n = 10
// let a = 0
// let b = 1


// for(let i = 0; i<=n; i++){
//     console.log(a);
//     let z = a + b
//     a = b
//     b = z
// }

// function first(){
//     let x = 0;
    
//     function second(){
//         x++
        
//       function third() {
//             x += 2
            
//             function fourth (){
//                 x *= 10
                
//                 return x
//             }
            
//             return fourth
//         }
        
//         return third
//     }
    
//     return second
// }

// let one = first();
// let two = one();
// let three = two();
// let fourth = three()

// console.log(fourth);
// console.log(fourth);

// IIFE, annonymus, arrow function

// const result = (function () {
//     let x  = 0
    
//     return function () {
//         x ++
        
//         return function () {
//             x += 2
            
//             return () => {
//                 x *= 10
                
//                 return x
//             }
            
//         }
//     }
// })()

// const first = result;
// const second = first()
// const third = second()
// const fourth = third()

// console.log(fourth);






















