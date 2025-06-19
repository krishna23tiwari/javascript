// const products = [
//     {
//       "id": 1,
//       "price": 25.99,
//       "image": "https://example.com/images/mouse.jpg",
//       "category": "Electronics",
//       "productName": ["Wireless", "Mouse"]
//     },
//     {
//       "id": 2,
//       "price": 49.99,
//       "image": "https://example.com/images/headphones.jpg",
//       "category": "Audio",
//       "productName": ["Bluetooth", "Headphones"]
//     },
//     {
//       "id": 3,
//       "price": 19.99,
//       "image": "https://example.com/images/wallet.jpg",
//       "category": "Accessories",
//       "productName": ["Leather", "Wallet"]
//     },
//     {
//       "id": 4,
//       "price": 59.99,
//       "image": "https://example.com/images/shoes.jpg",
//       "category": "Footwear",
//       "productName": ["Running", "Shoes"]
//     },
//     {
//       "id": 5,
//       "price": 120.00,
//       "image": "https://example.com/images/watch.jpg",
//       "category": "Watches",
//       "productName": ["Analog", "Watch"]
//     },
//     {
//       "id": 6,
//       "price": 15.50,
//       "image": "https://example.com/images/mug.jpg",
//       "category": "Home & Kitchen",
//       "productName": ["Ceramic", "Mug"]
//     },
//     {
//       "id": 7,
//       "price": 300.00,
//       "image": "https://example.com/images/jacket.jpg",
//       "category": "Clothing",
//       "productName": ["Leather", "Jacket"]
//     },
//     {
//       "id": 8,
//       "price": 45.00,
//       "image": "https://example.com/images/backpack.jpg",
//       "category": "Bags",
//       "productName": ["Travel", "Backpack"]
//     },
//     {
//       "id": 9,
//       "price": 75.00,
//       "image": "https://example.com/images/helmet.jpg",
//       "category": "Sports",
//       "productName": ["Safety", "Helmet"]
//     },
//     {
//       "id": 10,
//       "price": 10.00,
//       "image": "https://example.com/images/book.jpg",
//       "category": "Books",
//       "productName": ["Fiction", "Book"]
//     }
//   ]

// let a = products.flatMap((n) => n.productName.map((k) => ({category : n.category, productName:k})))
// console.log(a)

// let x = products.map(product) =>{
//   product.productName.map((name) =>({
//     category: n.category,
//     productName : name
//   }))
// }.flat()

// console.log(x)

// let x = products.flatMap(n => 
//   n.productName.map(x =>({
//     category: n.category,
//     productName: x
//   }))
// );

// console.log(x)



// let y = products.flatMap(n =>
//   n.productName.map(k => ({
//     category: n.category,
//     productName: k
//   }))
// );

// console.log(y)


// const p = [
//   [
//     { category: "Electronics", productName: ["Wireless", "Mouse"] },
//     { category: "Audio", productName: ["Bluetooth", "Headphones"] }
//   ],
//   [
//     { category: "Accessories", productName: ["Leather", "Wallet"] },
//     { category: "Footwear", productName: ["Running", "Shoes"] }
//   ],
//   [
//     { category: "Watches", productName: ["Analog", "Watch"] },
//     { category: "Home & Kitchen", productName: ["Ceramic", "Mug"] }
//   ]
// ];

// let k = p.flatMap(n =>
//   n.flatMap(m =>
//     m.productName.map(h =>({
//       category: m.category,
//       productName: h
//     }))
//   )
// )

// console.log(k)


const x1 = [
  [
    [
      { category: "Electronics", productName: ["Wireless", "Mouse"] },
      { category: "Audio", productName: ["Bluetooth", "Headphones"] }
    ],
    [
      { category: "Accessories", productName: ["Leather", "Wallet"] },
      { category: "Footwear", productName: ["Running", "Shoes"] }
    ]
  ],
  [
    [
      { category: "Watches", productName: ["Analog", "Watch"] },
      { category: "Home & Kitchen", productName: ["Ceramic", "Mug"] }
    ],
    [
      { category: "Clothing", productName: ["Leather", "Jacket"] },
      { category: "Sports", productName: ["Safety", "Helmet"] }
    ]
  ]
];

// let v = x1.flatMap(n =>
//   n.flatMap(o =>
//     o.flatMap(p =>
//       p.productName.map(q =>({
//         category: p.category,
//         productName: q
//       }))
//     )
//   )
// )

// console.log(v)


let aa = x1.flat(2)

console.log(aa)

// let bb = aa.flatMap(n =>
//   n.productName.map(i =>({
//     category: n.category,
//     productName: i
//   }))
// )

// console.log(bb)





