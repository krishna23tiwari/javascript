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



// longest Word


// let a = "hellodear kris how are you"

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
//     b = c
// }

// console.log(c)



// finding frequency

// let a = ["a", "b", "c", "a", "d", "b", "c", "e"]

// let b = {}

// for(let i = 0; i<a.length;  i++){
//     let x = a[i]
//     if(b[x]){
//         b[x] += 1
//     }else{
//         b[x] = 1
//     }
// }

// console.log(b)


// let a = [1,3,22,32,12,423,34,21,443,75]

// let b = a[0]
// let c = Infinity
// let d = Infinity

// for(let i = 0; i<a.length; i++){
//     if(a[i] > b){
//         d = c
//         c = b
//         b = a[i]
//     }else if(a[i] > c && a[i] !== b){
//         d = c
//         c = a[i]
//     }else if(a[i] > d && a[i] !== c && a[i] !== b){
//         d = a[i]
//     }
// }

// console.log(b)
// console.log(c)
// console.log(d)



// flat an array


// let  a = [1,2,[3,[4,[5,[6]]]]]

// let b = []

// let c = [...a]

// for(let i = 0; i<c.length; i++){
//     if(typeof c[i] === "number"){
//         b.push(c[i])
//     }
//     let x = c[i]

//     for(let j = 0; j<x.length; j++){
//         c.push(x[j])
//     }
// }

// console.log(b)




// getting unique element in array


// let a = [1,2,3,4,2,4,1,2,4,5,6,4,3,6,7]

// let b = []

// for(let i = 0; i<a.length; i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }

// console.log(b)


// count vowel in string


// let a = "hello krishna how are you doing"

// let count = 0
// let b = "aeiouAEIOU"

// for(let i = 0; i<a.length; i++){
//     if(b.includes(a[i])){
//         count ++
//     }
// }

// console.log(count)




// factorial 


// let n = 5;
// let b = 1

// for(let i = 1; i<=n; i++){
//     b *= i
// }

// console.log(b)




// fib series

// let n = 10
// let a = 0
// let b = 1

// for(let i = 0; i<=n; i++){
//     console.log(a)
//     let x = a + b
//     a = b
//     b = x
// }


//prime number


// let n = 15

// let value = true

// if(n<2){
//     value = false
// }
// for(let i = 2; i<n/2; i++){
//     if(n % i === 0){
//         value = false
//         break
//     }
// }

// if(value){
//     console.log("yes")
// }else{
//     console.log("no")
// }



// palindrome 


// let a = "madam"

// let b = ""

// for(let i = a.length-1; i>= 0; i--){
//     b += a[i]
// }

// if(a == b){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// let a = "12345"

// let b = 0

// for(let i = 0; i<a.length; i++){
//     b += Number(a[i])
// }

// let c = b.toString()

// console.log(b)
// console.log(typeof(c))



// add number 

// let a = 12345

// let b = 0

// while (a) {
//     let c = a % 10
//     b += c 
//     a = Math.floor(a /10)
// }

// console.log(b)

// let a = [1,2,3,4,5]

// let b = a.reduce((acc, value) => acc+value, 0)
// console.log(b)


// let a = [1,2,3,4,44,1,5,22,66,78]

// let b = a.filter((value) => value % 2 === 0)

// console.log(b)


// closure with IIFE, annonymous, and function


// const result =  (function () {
//     let count = 0

//     return function (){
//         count ++

//         return function (){
//             count += 5 

//             return () => {
//                 count *= 10

//                 return count
//             }
//         }
//     }
// })()

// const first = result
// const second = first()
// const third = second()
// const fourth = third()

// console.log(fourth)


// sortting array


// let a = [1,33,22,11,44,21,43,121,421,67]

// let b = []

// for(let i = 0; i<a.length; i++){
//     for(let j = i+1; j<a.length; j++){
//         if(a[i]> a[j]){
//             let x = a[i]
//             a[i] = a[j]
//             a[j] = x
//         }
//     }
// }

// console.log(a)



// finding min and max in array

// let a = [11,22,44,55,22,11,99,5]

// let max = a[0]
// let min = Infinity


// for(let i = 0; i<a.length; i++){
//     if(a[i] > max){
//         max = a[i]
//     }

//     if(a[i] < min){
//         min = a[i]
//     }
// }

// console.log(max)
// console.log(min)


// sum of all array element

// let a = [1,2,3,4,5]

// let b = 0

// for(let i = 0; i<a.length; i++){
//     b += a[i]
// }

// console.log(b)


// frequency

// let a = ['a', 'b','c', 'd', 'a', 'b', 'd', 'e']

// let b = {}

// for(let i = 0; i<a.length; i++){
//     let x = a[i]
//     if(b[x]){
//         b[x] += 1
//     }else{
//         b[x] = 1
//     }
// }

// console.log(b)




// Merge 2 sorted array

// let a = [1,2,3,4, 5]

// let b = [5,6,7,8]

// let c = []

// for(let i = 0; i<a.length; i++){
//     c.push(a[i])
// }

// for(let j = 0; j<b.length; j++){
//     c.push(b[j])
// }

// console.log(c)





// merge tow unsorted array

// let a = [1,2,3,5,11,7,6,4, 25]

// let b = [12,45,17,25,44,78]

// let c = []

// for(let i = 0; i<a.length; i++){
//     if(!c.includes(a[i])){
//         c.push(a[i])
//     }
// }

// for(let j = 0; j<b.length; j++){
//     if(!c.includes(b[j])){
//         c.push(b[j])
//     }
// }

// console.log(c)


// finding missing number

// let a = [11,13,15,17,21]

// let n = 0
// let d = a[1] - a[0]

// for(let i = 0; i<a.length; i++){
//     if(a[i+1] - a[i] !== d){
//         n = a[i] + d
//         break
//     }
// }

// console.log(n)



// find all pair in array of given sum

// let a = [1,2,3,4,5,6,5,4,3,22]

// let sum = 6

// for(let i = 0; i<a.length; i++){
//     for(let j = i+1; j<a.length; j++){
//         if(a[i] + a[j] == sum){
//             console.log(`Pair : (${a[i]}, ${a[j]})`)
//         }
//     }
  
// }


// find common element between two array


// let a = [1,2,3,4,5,6]

// let b = [2,4,6,8,9,10]

// let c  = 0

// for(let i = 0; i<a.length; i++){
//     for(let j = 0; j <b.length; j++){
//         if(a[i] === b[j]){
//             c = a[i]
//             console.log(c)
//             break
//         }
//     }
// }


// move all zeroes in the end of array

// let a = [1,2,3,0,33,0,11,23,0,66]

// let b = []

// let count = 0

// for(let i = 0; i<a.length; i++){
//     if(a[i] !== 0){
//         b.push(a[i])
//     }else{
//         count ++
//     }
// }

// for(let j = 0 ;j<count; j++){
//     b.push(0)
// }

// console.log(b)


// move all zeroes in the end of array
// inplace approach

// let a =  [1,2,3,0,33,0,11,23,0,66]

// let b = 0

// for(let i = 0; i<a.length; i++){
//     if(a[i] !== 0){
//         a[b++] = a[i] 
//     }
// }

// while(b < a.length){
//     a[b++] = 0
// }

// console.log(a)




// array palindrome

// let a = [1, 2, 3, 2, 1]

// let b = true
// let c = a.length

// console.log(c)

// for(let i = 0; i< (c / 2); i++){
//     if(a[i] !== a[c-1-i]){
//         b = false
//     }
// }

// console.log(b)













