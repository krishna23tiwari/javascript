//sinngleton object

const a = new Object()
// console.log(a);

a.id = "123kkk"
a.name = "kkt"
a.namefull = "krishan kant tiwari"
a.loggedIn = false

// console.log(a);

const x1 = {
  email: "kk@gmail.com",
  fullname: {
    firstname : "krishan",
    middlename: "kant",
    lastname: "Tiwari"
  }
  
}

// console.log(x1.fullname.lastname);

const obj1 = {
  a1 : "kk",
  a2: "kkt"
}

const obj2 = {
  b1: "tiwari",
  b2: "kkk"
}

const obj4 = {
  c1: "tiwari",
  c2: "kkk"
}



// now we have to add both objects

const obj3 = Object.assign(obj1,obj2,obj4)
console.log(obj3);

//when we concate the object we use object.assign(and in bracket we add object name)
// but we can write 

const obj5 = Object.assign({},obj1,obj2,obj4)

// here the target is first {} which stores all the object values but its just a way to
// write

// and we can use spread operator

const x33 = {...obj1, ...obj2, ...obj4}
// console.log(x33);

// when data comes from database so its kind of like this

const a11 = [
  {
    id: 11,
    email: "hk@gmail.com",
  },
  {
    id: 12,
    email: "kk@gmail.com",
  },
  {
    id: 13,
    email: "uk@gmail.com",
  },
]

console.log((a11[0]).email);

console.log(Object.keys(x33));
console.log(Object.values(x33));
console.log(Object.entries(x33));

console.log(x33.hasOwnProperty('c2'));

console.log(x33.hasOwnProperty('xx'));
