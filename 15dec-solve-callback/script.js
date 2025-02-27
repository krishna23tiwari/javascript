// function make(method, url){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
// }

// const pro = new Promise((resolve, reject) => {
//     xhr.addEventListner('load', () => {
//         resolve 
//     })
// })

const x = document.querySelector('#submit')
const y = document.querySelector('#reject')

const x1 = new Promise((resolve, reject) =>{
    x.addEventListener('click', () =>{
        resolve("succesful")
    })

    y.addEventListener('click', () =>{
        reject("failed")
    })
})

x1.then((data)=>{
    console.log(data)
}).catch((data) =>{
    console.log(data)
}).finally(() =>{
    console.log('this will run always')
})