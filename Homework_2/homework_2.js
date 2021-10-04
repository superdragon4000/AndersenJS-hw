function makeObjectDeepCopy(object) {
  let clone = {};
  if (Array.isArray(object)) {
    clone = [];
  }
  for (let key in object) {
    if (typeof object[key] === 'object') {
      clone[key] = makeObjectDeepCopy(object[key]);
    } else {
      clone[key] = object[key];
    }
  }
  return clone;
}

function selectFromInterval(arr, first, second) {
  let result;
  function isValidNumber(value) {
    return typeof value === 'number' && isFinite(value) && !isNaN(value);
  }
  if (Array.isArray(arr) && arr.every((item) => {return isValidNumber(item)}) && isValidNumber(first) &&
    isValidNumber(second)) {
    result = first < second ? 
      arr.filter((item) => item >= first && item <= second) :
      arr.filter((item) => item <= first && item >= second);
  } else {
    throw new Error('Ошибка!');
  }
  return result;
}

const myIterable = {
  from: 4,
  to: 5,
  
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  
  next() {
    if (this.hasOwnProperty('from') && this.hasOwnProperty('to') 
      && typeof this.from === 'number' && isFinite(this.from) && !isNaN(this.from)
      && typeof this.to === 'number' && isFinite(this.to) && !isNaN(this.to) 
      && this.to > this.from) {
      if (this.current <= this.to) {
        return {
          done: false,
          value: this.current++
        }
      } else {
        return {
          done: true
        }
      }
    } else {
      throw new Error('Ошибка!');
    }
  }
};
