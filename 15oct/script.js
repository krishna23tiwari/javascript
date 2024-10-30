function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function div(a,b)
{
    return a/b;
}

function mul(a,b)
{
    return a*b;
}

function calculator(a,b,op)
{
    return op( a,b)
}

let a = calculator(10,2,add)
console.log(a);

let b = calculator(10,2, mul)
console.log(b);

let c = calculator(10,2, (a,b) =>{
    return a * b;
})

console.log(c);