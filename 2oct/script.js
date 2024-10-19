52. Function Hoisting vs. Variable Hoisting


function test() {
  console.log(foo);
  var foo = 10;
  function foo() {}
  console.log(foo);
}
test();


// Question: What will be the output and why? Explain the order in which function declarations and variable declarations are hoisted.
