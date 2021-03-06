function concatStrings(arg, separator) {
  if (typeof arg !== 'string') {
    return '';
  }
  if (typeof separator !== 'string') {
    separator = '';
  }
  return curry();
  function curry() {
    return function concat(nextArg) {
      if (typeof nextArg !== 'string') {
        return arg;
      }
      arg = arg.concat(separator, nextArg);
      return curry();
    };
  }
}

class Calculator {
  constructor(x, y) {
    if (Number.isSafeInteger(x) && Number.isSafeInteger(y)) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('Ошибка!');
    }
  }

  setX = (num) => {
    if (Number.isSafeInteger(num)) {
      this.x = num;
    } else {
      throw new Error('Ошибка!');
    }
  }

  setY = (num) => {
    if (Number.isSafeInteger(num)) {
      this.y = num;
    } else {
      throw new Error('Ошибка!');
    }
  }
  
  logSum = () => {
    console.log(this.x + this.y);
  }
  
  logMul = () => {
    console.log(this.x * this.y);
  }
  
  logSub = () => {
    console.log(this.x - this.y);
  }
  
  logDiv = () => {
    if (this.y !== 0) {
      console.log(this.x / this.y);
    } else {
      throw new Error('Ошибка!');
    }
  }
}
