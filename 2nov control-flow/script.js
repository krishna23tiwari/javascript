// const isloggedin = true

// if (isloggedin){
//   console.log("hi");
// }


const bal = 1000

// if(bal>500) console.log("yes");

// if(bal<500){
//   console.log("less than 500");
// }else if(bal <750){
//   console.log("less than 750");
// }else if(bal< 1000){
//   console.log("less than 1000");
// }else if(bal< 1200){
//   console.log("less than 1200");
// }else{
//   console.log("not enough");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

// if(userloggedin && debitcard){
//   console.log("user can buy");
// }else{
//   console.log("cant buy");
// }

if(loggedinfromgoogle || loggedinfromemail){
  console.log("user can log in");
}else{
  console.log("cant login");
}
