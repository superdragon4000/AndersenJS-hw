Array.prototype.myFilter = function (callback, thisArg) {
  let filteredArray = [];
  for(let i = 0; i < this.length; i++) {
    if (thisArg !== undefined) {
      if(callback(thisArg[i], i, thisArg)) {
        filteredArray.push(this[i]);
      }  
    } else {
      if(callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
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