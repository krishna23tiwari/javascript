// rest and spread operator are same its depends how and where we are using it

function calculateCartPrice (a1,a2, ...n1){
  return n1
}

console.log(calculateCartPrice(33, 22,44,12));

const user = {
  username: "u",
  price: 123
}

function handleobj(user){
  console.log(`username is ${user.username} and price is ${user.price}`);

}

// handleobj(user)

handleobj({
  username: "avi",
  price: 123456
})

const arr = [100,200,300]

function value(getarr){
  return getarr[2]
}

// console.log(value(arr));

console.log(value([22,33,44,11]));
