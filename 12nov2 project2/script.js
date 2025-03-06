const form  = document.querySelector('form');

form.addEventListener('submit', function(n) {
  n.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = (document.querySelector('#results'));




if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = `please give valid value ${height}`;
}
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `please give valid value ${weight}`;
}
else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2)


let category = '';
    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    results.innerHTML = `<span>BMI: ${bmi}</span> <br> <span>Category: ${category}</span>`;

}

// const resetbutton = (document.getElementById('#reset'))

// resetbutton.addEventListener('click', function() {
//   document.querySelector('#height').value = ''; 
//   document.querySelector('#weight').value = ''; 

//   document.querySelector('#result').innerHTML = ''; 

// });

});

const resetbutton = (document.getElementById('#reset'))

resetbutton.addEventListener('click', function() {
  document.querySelector('#height').value = ''; 
  document.querySelector('#weight').value = ''; 

  document.querySelector('#result').innerHTML = ''; 

});