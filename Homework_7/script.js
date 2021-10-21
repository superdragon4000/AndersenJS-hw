const inputManager = new InputManager();

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const oppositeButton = document.querySelector('[data-opposite]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const dotButton = document.querySelector('[data-dot]');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputManager.onNumberClick(+button.value);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputManager.onOperatorClick(button.value);
  });
});

oppositeButton.addEventListener('click', () => {
  inputManager.onOppositeClick();
});

deleteButton.addEventListener('click', () => {
  inputManager.onDeleteClick();
});

clearButton.addEventListener('click', () => {
  inputManager.onClearClick();
});

equalsButton.addEventListener('click', () => {
  inputManager.onEqualsClick();
});

dotButton.addEventListener('click', () => {
  inputManager.onDotClick();
});
