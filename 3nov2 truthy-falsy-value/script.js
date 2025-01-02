const Email = "kk@gmail.com"

if (Email) {
    console.log("Got it");
}else{
    console.log("Dont have");
}

// here we assume that we have email and its a true value
// and thats we called truthy value

// here are falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// here are truthy value

// "0", 'false', " ", [], {}, function(){}

const x1 = []

if (x1) {
    console.log("Got it");
}else{
    console.log("Dont have");
}

// here we use empty array but still it if condition is running and gives us value
// to solve this we hv to write this code like this

const x2 = []

if (x2.length === 0) {
    console.log("empty");
}else{
    console.log("not empty");
}

// for checking empty object

const obj1 = {}

if (Object.keys(obj1).length === 0) {
    console.log("object is empty");
    
}
