let calculation = localStorage.getItem('calculation') || '';

//display calculations when the page first loads
displayCalculator();


function updateCalculation(value) {
  calculation += value;
  // console.log(calculation);
  //display caluculation on the page instead
  // of console.log
  displayCalculator();

  localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.

  // localStorage.setItem('calculation', calculation);


function displayCalculator() {
  document.querySelector('.js-calculator')
  .innerHTML = calculation;
}