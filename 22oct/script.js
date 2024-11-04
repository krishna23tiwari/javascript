function a(i, sum)
{
  if (i = 0) return 0;
  console.log(i)

  sum += a(i - 1,sum+i)
  console.log(sum);
  
}

let i = 10;
let sum = 10
a(i, sum)

 