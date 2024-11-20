// function myname(){
//   console.log("hii");
// }

// myname()

// function add(n1, n2)
// {
//   return n1 + n2
// }

// console.log(add(3,5));

// console.log(add(3,'a'));

// function add(n1, n2)
// {
//   return n1 + n2
//   console.log("hi");
// }

// console.log(add(3,3));

//here the hi will never print because after return the code will not execute so if we have to
// run someting we always have to write before return

function add(n1, n2)
{
  console.log("hi");
  return n1 + n2
}

console.log(add(3,3));

// function loginmsg(username){
//   if(username === undefined){
//     return "please enter name"

//   }
//   return `${username} just logged in`
// }

// let a = loginmsg("kk")
// console.log(a);

// console.log(loginmsg());

function loginmsg(username){
  if(!username){
    return "please enter name"

  }
  return `${username} just logged in`
}

console.log(loginmsg("kk"));
console.log(loginmsg());

