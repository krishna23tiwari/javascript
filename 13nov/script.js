// console.log(parseInt("123"));

// let b = "1234"
// console.log(typeof(b));

// let c = parseInt(b)
// console.log(typeof(c));

// let x = "1234abc"
// console.log(x);
// console.log(typeof(x));

// let xx = parseInt(x)
// console.log(xx);
// console.log(typeof(xx));

// console.log(parseInt("11", 2));

// console.log(parseInt("FF", 16));

// let vv = "123.555"
// console.log(vv);
// console.log(typeof(vv));

// let v1 = parseFloat(vv)
// console.log(v1);
// console.log(typeof(v1));


        const submitButton = document.getElementById('submit');
        const resetButton = document.getElementById('reset');

        submitButton.addEventListener('click', function() {
            const name = document.querySelector('#name').value;
            alert(`Hello, ${name}!`);
        });

        resetButton.addEventListener('click', function() {
            document.querySelector('#name').value = ''; 
        });