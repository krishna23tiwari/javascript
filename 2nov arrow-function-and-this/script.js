const z1 = {
  name: "kk",
  lastname: "tiwari",
  id: 123,

  welcomemsg: function(){
    // console.log(`hello my name is ${this.name} and last name is ${this.lastname} and my id is ${this.id}`);
    // console.log(this);
  }
}

z1.welcomemsg()
z1.name = "krishna"
z1.welcomemsg()

console.log(this);

// when we run this code in browser then there is a mostly use window objct so thats why we can access
// mostly windows so we can say windows is a global object so thats why we can capture most of the window
// event we can capture in js

// and we can check what is the this value like here i change the name value in object and when i run
// function which is also in object, and when we clg this keyword it shows the actual values in obj.
// and this keyword only use in object not in function

// function a(){
//   console.log(this);
// }

// a()


const x1 = () => {
  user = "kkt"
  console.log(user);
}

x1()

const add = (a,b) => {
  return a + b
}

console.log(add(3,5));

const mul = (a,b) => a*b
console.log(mul(2,2));

// we can use arrow function in just one line and without return key word, here in line 46 is example
// of that but if we use curly brackets then we have to use return keyword.

const div = (a,b) => a/b;
console.log(div(10,5));

const vv = (a,b) => ({username: "tiwari"})
console.log(vv(2,3));

// we can pass object in arraow function using () 