
const counter = document.querySelectorAll('.js-actions button');
const valueCounter = document.querySelector('#value');

let counterValue = 0;
const counterActions = (value) =>  valueCounter.textContent = counterValue += value;

const increment = counter[1].addEventListener('click', () => counterActions(1)); 
const decrement = counter[0].addEventListener('click', () =>  counterActions(-1));