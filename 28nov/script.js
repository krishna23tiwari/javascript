// const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

for(let i = 2; i<=10; i++){
    let bb = card.cloneNode();
    bb.innerText = i;
    container.appendChild(bb);
}
let xx = document.createElement('p');
xx.innerText = "hello";
container.append(xx);