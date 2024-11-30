/*there are two type of object we define 
1. singleton 2 object literals
1.singleton = so when we create object by using constructor so its singleton it means its unique
one of his kind 
examble  { object.create } its a construtor method

object literals = here we can create multiple object and its not unique
example {  const user = {}}
*/ 

const sym= Symbol("key")

const x1 = {
  name: "krishna",
  age: 24,
  [sym]: "mykey",
  location: "jaipur",
  email: "kk@gmail.com",
  isloggedin: false,
  "full name" : "krishan kant tiwari"

}

// console.log(x1.email);
// console.log(x1["full name"]);

// we use [] brackets for access the elements of object or dot (.) but square bracket is work more effectively.

// console.log(typeof(x1.sym));

// console.log(typeof(x1[sym]));

x1.age = 25

// console.log(x1.age);

//we can access object elements by using object.element key name or object[keyname]

// Object.freeze(x1)

// if we want to freeze object means no further changes can apply on obhect so we use freeze
// syntax : object.freeze(object_name)

x1.name = "kkt"

// console.log(x1.name);

x1.greeting = function(){
  console.log("hello world !!");
}

console.log(x1.greeting());

x1.greeting2 = function(){
  console.log(`hello my name is ${this["full name"]}`);
}


console.log(x1.greeting2());

