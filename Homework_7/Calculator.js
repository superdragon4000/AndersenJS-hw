class Calculator {
  sum(x, y) {
    return parseFloat((x + y).toFixed(8), 10);
  }

  sub(x, y) {
    return parseFloat((x - y).toFixed(8), 10);
  }

  mult(x, y) {
    return parseFloat((x * y).toFixed(8), 10);
  }

  div(x, y) {
    if (y !== 0) {
      return parseFloat((x / y).toFixed(8), 10);
    }
  }
}

class InputManager {
  firstNumber = 0;
  secondNumber;
  operator;
  isOperatorClicked = false;

  calc = new Calculator();
  
  onNumberClick(number) {
    if (!this.isOperatorClicked) {
      this.firstNumber = (this.firstNumber === 0) ? number : 
        this.firstNumber + number;
      updateOutput(this.firstNumber);
    } else {
      this.secondNumber = (this.secondNumber === undefined) ? number : 
        this.secondNumber + number;
      updateOutput(this.secondNumber);
    }
  }

  onOperatorClick(operator) {
    this.isOperatorClicked = true;
    this.operator = operator;
  }

  onOppositeClick() {
    if (this.isOperatorClicked) {
      this.secondNumber = -this.secondNumber;
      updateOutput(this.secondNumber);
    } else {
      this.firstNumber = -this.firstNumber;
      updateOutput(this.firstNumber);
    }
  }

  onDeleteClick() {
    if (!this.isOperatorClicked) {
      this.firstNumber = Math.floor(this.firstNumber / 10);
      updateOutput(this.firstNumber);
    } else {
      this.secondNumber = Math.floor(this.secondNumber / 10);
      updateOutput(this.secondNumber);
    }
  }

  onClearClick() {
    this.firstNumber = 0;
    this.secondNumber = undefined;
    updateOutput(0);
  }

  onEqualsClick() {
    if(this.secondNumber === undefined) return;
    switch(this.operator) {
      case '+':
        this.firstNumber = this.calc.sum(this.firstNumber, this.secondNumber);
        break;
      case '-':
        this.firstNumber = this.calc.sub(this.firstNumber, this.secondNumber);
        break;
      case '*':
        this.firstNumber = this.calc.mult(this.firstNumber, this.secondNumber);
        break;
      case '/':
        this.firstNumber = this.calc.div(this.firstNumber, this.secondNumber);
        break;
    }
    updateOutput(this.firstNumber);
    this.isOperatorClicked = false;
    this.secondNumber = undefined;
  }

  onDotClick() {
    if (this.secondNumber === undefined && !this.firstNumber.toString().includes('.')) {
      this.firstNumber += '.';
      updateOutput(this.firstNumber);
    } else if (!this.secondNumber.toString().includes('.')) {
      this.secondNumber += '.';
      updateOutput(this.secondNumber);
    }
  }
}

function updateOutput(value) {
  const output = document.getElementsByClassName('output')[0];
  output.value = value;
}
