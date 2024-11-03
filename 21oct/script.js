function Ab()
{
  return function()
  {
    return function(a,b)
    {
      return a + b;
    }
  }

}

let a = Ab()()(3,4);
console.log(a);

let a = 10;
console.log(a.age);










