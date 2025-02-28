// const x = document.querySelector('#resolve')
// const y = document.querySelector('#reject')


// const a = new Promise((resolve, reject) =>{
//   x.addEventListener('click', () =>{
//     resolve('done')
//   })

//   y.addEventListener('click', () =>{
//     reject('rejected')
//   })
// })

// a.then((data) => {
//   console.log(data);
// }).catch((err) =>{
//   console.log(err)
// })


const reso = document.querySelector('#resolve');
const rej = document.querySelector('#reject');

const z = new Promise((resolve, reject) =>{
  reso.addEventListener('click', () =>{
    console.log('error resolved')
    resolve('resolved')
  })

  rej.addEventListener('click', () =>{
    console.log('rejected')
    reject('not')
    
  })

})

z.then((data) =>{
  console.log(data)
}).catch((err) =>{
  console.log(err)
}).finally(() =>{
  console.log("this will run")
})