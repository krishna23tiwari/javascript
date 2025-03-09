// // console.log(parseInt("123"));

// // let b = "1234"
// // console.log(typeof(b));

// // let c = parseInt(b)
// // console.log(typeof(c));

// // let x = "1234abc"
// // console.log(x);
// // console.log(typeof(x));

// // let xx = parseInt(x)
// // console.log(xx);
// // console.log(typeof(xx));

// // console.log(parseInt("11", 2));

// // console.log(parseInt("FF", 16));

// // let vv = "123.555"
// // console.log(vv);
// // console.log(typeof(vv));

// // let v1 = parseFloat(vv)
// // console.log(v1);
// // console.log(typeof(v1));


//         const submitButton = document.getElementById('submit');
//         const resetButton = document.getElementById('reset');

//         submitButton.addEventListener('click', function() {
//             const name = document.querySelector('#name').value;
//             alert(`Hello, ${name}!`);
//         });

//         resetButton.addEventListener('click', function() {
//             document.querySelector('#name').value = ''; 
//         });


// let random = (parseInt(Math.random()*10 + 1))
// console.log(random);
// const submitbutton = document.querySelector('submit');
// const reset = document.querySelector('reset')


let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let attempts = 0;
let guesses = [];

const submitButton = document.querySelector('#submitGuess');
const resetButton = document.querySelector('#resetGame');
const guessField = document.querySelector('#guessField');
const guessesDisplay = document.querySelector('.guesses');
const lastResultDisplay = document.querySelector('.lastResult');
const lowOrHiDisplay = document.querySelector('.lowOrHi');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    checkGuess();
});

resetButton.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;
    guesses.push(userGuess);
    guessesDisplay.textContent = `Previous guesses: ${guesses.join(', ')}`;
    guessField.value = '';

    if (userGuess === randomNumber) {
        lastResultDisplay.textContent = `Congratulations! You guessed it right! 🎉`;
        lowOrHiDisplay.textContent = '';
        endGame();
    } else if (userGuess < randomNumber) {
        lastResultDisplay.textContent = `Last guess was too low! 📉`;
        lowOrHiDisplay.textContent = 'Try a higher number!';
    } else {
        lastResultDisplay.textContent = `Last guess was too high! 📈`;
        lowOrHiDisplay.textContent = 'Try a lower number!';
    }
}

function endGame() {
    guessField.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = 'inline';
}

function resetGame() {
    attempts = 0;
    guesses = [];
    lastResultDisplay.textContent = '';
    lowOrHiDisplay.textContent = '';
    guessesDisplay.textContent = 'Previous guesses: ';
    guessField.disabled = false;
    submitButton.disabled = false;
    resetButton.style.display = 'none';
    randomNumber = Math.floor(Math.random() * 100) + 1; // Reset random number
}
