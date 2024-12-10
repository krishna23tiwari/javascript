// Imediately invoked function IIFE
// so which function run imediately and sometimes in js environment because of global scope pollution 
// we face prblm sometimes so remove that pollution we use IIFE

// this is named IIFE

(function kk () {
  console.log(`DB connected`);
})();

// so we can understand that we are using two ()() so first is where we are running our function
// and in second we use () for function calling, so we dont have to use any name or anything to run function


// somtimes it shows typeerror like not function or someting like for that we use semicolm if we use
// IIFE befor we use semicolum to end previous function

// This is simple IIFE
(   ()    =>{
  console.log("kk");
})();

// if we pass variavle in IIFE

(     (name) =>{
  console.log(`name is ${name}`);
})("kkT")

// so when we use two IIFE then we have to use semicolum to end first IIFE otherwise it gives us an error
