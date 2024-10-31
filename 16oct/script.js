

// userInp(function (name) {
//     console.log("Hi, " + name);
//   });
//   function userInp(callback)
//   {
//     callback("kk");
//   }

// function 6userInp("kk", callback)
// {
//     callback()
// }

function abc(name,callback = function ()
{
  console.log('hello')
  callback();
})
abc("Prajjal",function()
{
  console.log('Custom function')
})

