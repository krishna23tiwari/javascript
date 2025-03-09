// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'   
// xhr.addEventListener('load', () => {
//   console.log(xhr.response.users[0].id);
// })

// xhr.open('GET', 'https://dummyjson.com/users')
// xhr.send()

function a(x){
    setTimeout(() =>{
        x()
        setTimeout(() => {
            console.log("B")
            setTimeout(() =>{
                console.log("C")
            },2000)
        },4000)
    },6000)
}


function hey(){
    console.log("hello sir")
}

a(hey)
