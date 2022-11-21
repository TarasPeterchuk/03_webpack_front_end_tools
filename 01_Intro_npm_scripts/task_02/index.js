const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');
const onCounterChange = event => {
  const isButton = event.target.classList.contains('counter__button');
  if (!isButton) {
    return;
  }
  const action = event.target.dataset.action;
  const oldValue = Number(counterValueElem.textContent);
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  localStorage.setItem('counterValue', newValue);
  counterValueElem.textContent = newValue;
};
counterElem.addEventListener('click', onCounterChange);

const onStarageChange = event => {
  // console.log(event);
  counterValueElem.textContent = event.newValue;
};
window.addEventListener('storage', onStarageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
