Array.prototype.myFilter = function (callback) {
  let filteredArray = [];
  for(let i = 0; i < this.length; i++) {
      if(callback(this[i], i, this)) {
          filteredArray.push(this[i]);
      }
  }
  return filteredArray;
}

function createDebounceFunction(callback, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback(arguments);
    }, ms);
  };
}