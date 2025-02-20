// let a = [1,2,3,4,5,6]

// let b = a.reduce((n,m) => n + m, 2)

// console.log(b);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let x1 = shoppingCart.reduce((n,m) => n + m.price , 0)
console.log(x1);