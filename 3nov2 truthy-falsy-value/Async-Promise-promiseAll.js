// const data = new Promise((resolve, reject) => {
//     let a = false
//     if(a){
//         resolve("hello")
//     }else{
//         reject("bye")
//     }
// });

// data
// .then((res) => console.log(res))
// .catch((err) => console.log(err))


// fetch('https://fakestoreapi.in/api/products/category?type=tv&sort=desc')
// .then((response)=>{
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.error(error)
// })


// const apiData = fetch('https://fakestoreapi.in/api/products?limit=20')
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.error(err)
// })


// const data = async() => {
//     const res = await fetch('https://fakestoreapi.in/api/products/category')
//     const dataset = await res.json()
//     return dataset
// }

// data()
// .then((res) => {
//     const value = (res.categories.map((m) => m)).map((n) => n[0])
//     const newval = value[0]
//     console.log(`>>value>>`, value)
// })




const dataset = [
    {
      store: "TechZone",
      location: "New York",
      categories: [
        {
          name: "Laptops",
          products: [
            { name: "MacBook Pro", brand: "Apple", price: 2000 },
            { name: "XPS 13", brand: "Dell", price: 1500 }
          ]
        },
        {
          name: "Phones",
          products: [
            { name: "iPhone 14", brand: "Apple", price: 1200 },
            { name: "Galaxy S22", brand: "Samsung", price: 1000 }
          ]
        }
      ]
    },
    {
      store: "GadgetWorld",
      location: "San Francisco",
      categories: [
        {
          name: "Tablets",
          products: [
            { name: "iPad Pro", brand: "Apple", price: 1100 },
            { name: "Galaxy Tab", brand: "Samsung", price: 900 }
          ]
        },
        {
          name: "Accessories",
          products: [
            { name: "Apple Watch", brand: "Apple", price: 500 },
            { name: "Galaxy Buds", brand: "Samsung", price: 200 }
          ]
        }
      ]
    }
  ];
  

// const data = dataset.flatMap((n) => n)
// .flatMap((k) => k.categories)
// .flatMap((l) => l.products)
// .map((value) => value.name)

// console.log(data)



// const data = dataset.flatMap((n) => n)
// .flatMap((k) => k.categories)
// .flatMap((l) => l.products)
// .filter((value) => value.brand === "Apple")
// .reduce((acc,val) => acc + val.price, 0)

// console.log(data)


// const data = dataset.flatMap((n) => n)
// .filter((n) => n.store === "TechZone")
// .flatMap((k) => k.categories)
// .flatMap((u) => u.products)

// console.log(data)



// const data = dataset.flatMap((n) => n)
// .filter((n) => n.store === "TechZone")
// .flatMap((k) => k.categories)
// .flatMap((u) => u.products)
// .reduce((j,l) => j + l.price, 0)

// console.log(data)



const schools = [
    {
      name: "Greenwood High",
      city: "New York",
      classes: [
        {
          grade: "10th",
          students: [
            { name: "Alice", age: 15, marks: 88 },
            { name: "Bob", age: 16, marks: 76 }
          ]
        },
        {
          grade: "11th",
          students: [
            { name: "Charlie", age: 17, marks: 90 },
            { name: "David", age: 16, marks: 67 }
          ]
        }
      ]
    },
    {
      name: "Riverdale School",
      city: "Chicago",
      classes: [
        {
          grade: "10th",
          students: [
            { name: "Eve", age: 15, marks: 92 },
            { name: "Frank", age: 16, marks: 81 }
          ]
        }
      ]
    }
  ];
  

//   const data = schools.flatMap((n) => n)
//   .flatMap((k) => k.classes)
//   .flatMap((l) => l.students)
//   .map((u) => u.name)
  

// console.log(data)

// const data = schools.flatMap((n) => n)
// .flatMap((m) => m.classes)
// .flatMap((u) => u.students)
// .filter((k) => k.marks > 80)
// .map((a) => a.name)

// console.log(data)


// const data = schools.flatMap((j) => j.classes)
// .flatMap((k) => k.students)
// .reduce((acc, value) => acc + value.marks, 0)

// console.log(data)





const companies = [
    {
      name: "TechCorp",
      departments: [
        {
          name: "Engineering",
          employees: [
            { name: "Alice", skills: ["JS", "React"], salary: 80000 },
            { name: "Bob", skills: ["Python", "Django"], salary: 75000 }
          ]
        },
        {
          name: "HR",
          employees: [
            { name: "Clara", skills: ["Communication"], salary: 50000 }
          ]
        }
      ]
    },
    {
      name: "Designify",
      departments: [
        {
          name: "Design",
          employees: [
            { name: "Eve", skills: ["Figma", "UX"], salary: 70000 }
          ]
        }
      ]
    }
  ];

  
// const data = companies.flatMap((n) => n.departments)
// .flatMap((k) => k.employees)
// .map((l) => l.name)
// console.log(data)


// const data = companies.flatMap((j) => j.departments)
// .flatMap((u) => u.employees)
// .filter((q) => q.skills.includes('React'))

// console.log(data)

// const data = companies.flatMap((j) => j.departments)
// .filter((k) => k.name === 'Engineering')
// .flatMap((m) => m.employees)
// .reduce((acc, value) => acc + value.salary, 0)
// console.log(data)



const universities = [
    {
      name: "Harvard",
      faculties: [
        {
          name: "Science",
          programs: [
            {
              name: "Physics",
              courses: [
                { title: "Quantum Mechanics", credits: 4 },
                { title: "Thermodynamics", credits: 3 }
              ]
            }
          ]
        },
        {
          name: "Arts",
          programs: [
            {
              name: "History",
              courses: [
                { title: "World War II", credits: 2 }
              ]
            }
          ]
        }
      ]
    }
  ];

  
//   const data = universities.flatMap((n) => n.faculties)
//   .flatMap((l) => l.programs)
//   .flatMap((m) => m.courses)
//   .map((c) => c.title)
//   console.log(data)


// const data = universities.flatMap((j) => j.faculties)
// .flatMap((m) => m.programs)
// .flatMap((k) => k.courses)
// .reduce((acc, val) => acc + val.credits, 0)


// console.log(data)





// const data = universities.flatMap((j) => j.faculties)
// .flatMap((k) => k.programs)
// .flatMap((a) => a.courses)
// .filter((c) => c.credits > 3)

// console.log(data)

const movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      genres: ["Sci-Fi", "Thriller"],
      cast: [
        { actor: "Leonardo DiCaprio", role: "Cobb" },
        { actor: "Joseph Gordon-Levitt", role: "Arthur" }
      ]
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      genres: ["Sci-Fi", "Drama"],
      cast: [
        { actor: "Matthew McConaughey", role: "Cooper" },
        { actor: "Anne Hathaway", role: "Brand" }
      ]
    }
  ];

  
//   const data = movies.flatMap((n) => n.cast)
//   .flatMap((a) => a.actor)

//   console.log(data)

// const data = movies.filter((n) => n.director === 'Christopher Nolan')
// .map((l) => l.title)

// console.log(data)


// const data = movies.filter((l) => l.genres.includes("Drama"))


// console.log(data)


// const pr  = new Promise((reslove, reject) => {
//     let a = true
//     if(!a){
//         reslove("hello")
//     }else{
//         reject("bye")
//     }
// })

// pr
// .then((data) => console.log(data))
// .catch((value) => console.log(value))


// const data = async() => {
//     const res = await fetch('https://fakestoreapi.in/api/products/category?type=tv&sort=desc')
//     const value = await res.json()
//     return value
// }

// data()
// .then((d) => {
//     const value = d.map((x) => x.products)
//     console.log(value)
// })


// console.log(parseInt('78F'))

// let a = [1,2,3,4,5]

// let b = a.map((e) => {
//     if(e> 0) return
//     return e *10
// })

// console.log(b)

// let a = [1,2,3,4,5]

// let b = Array.isArray(a)
// console.log(b)



// let a = [1,62,43,14,25,63,42]

// for(let i = 0; i <a.length; i++){
//     for(let j  =i; j<a.length; j++){
//         if(a[i] > a[j]){
//             let x = a[i]
//             a[i] = a[j]
//             a[j] = x
//         }
//     }
// }

// console.log(a)


let a = [1,62,43,14,25,63,42]

for(let i = 0; i<a.length; i++){
    for(let j = i; j<a.length; j++){
        if(a[i] < a[j]){
            let x = a[j]
            a[j] = a[i]
            a[i] = x
        }
    }
}

console.log(a)