// let arr = [2,4,9,3,4,5]
// let [a,b, ...r] = arr;
// console.log(a,b, r)


// let {a,b} = {a:1, b:2}
// console.log(a,b)

// arr1 = [1,2,3,4,5]
// let xx = {...arr1}

// console.log(xx)

// let x1 = {
//     name: "kk",
//     id: '007',
//     job: "S/w",
// }

// console.log({...x1, job:"software developer"})

// document.getElementById('owl').onclick = function (){
//     alert("owl clicked");
// }

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside again")
// },false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked again")
// },true)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked again")
//     e.stopPropagation()
// },false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     console.log("google click")
//     e.stopPropagation()
// },false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);

    if(e.target.tagName ==='IMG')
    {
        console.log(e.target.id)
        let l = e.target.parentNode;
        l.remove();
    }
    // l.parentNode.removeChild(l);


},false)

