class Stack {
  #capacity;
  #size = 0;
  #pointer;
  constructor(capacity) {
    if (Number.isSafeInteger(capacity) && capacity >=0) {
      this.#capacity = capacity;
    } else if (capacity === undefined) {
      this.#capacity = 10;
    } else {
      throw new Error('Ошибка!');
    }
  }

  push = (value) => {
    if (this.#size === this.#capacity) {
      throw new Error("Стек переполнен");
    } else {
      let nextPointer = Object.create(null);
      nextPointer.value = value;
      nextPointer.next = this.#pointer;
      this.#pointer = nextPointer;
      this.#size += 1;
    }
  };

  pop = () => {
    if (this.#size === 0) {
      throw new Error("Стек пуст");
    } else {
      let value = this.#pointer.value;
      this.#pointer = this.#pointer.next;
      this.#size -= 1;
      return value;
    }
  };

  peek = () => {
    if (this.#size === 0) {
      return null;
    } else {
      let value = this.pop();
      this.push(value);
      return value;
    }
  };

  isEmpty = () => {
    if (this.#size === 0) {
      return true;
    } else {
      return false;
    }
  };

  toArray = () => {
    if (this.#size === 0) {
      return [];
    } else {
      let arr = [];
      let currentPointer = this.#pointer;
      for (let i = 1; i <= this.#size; i++) {
        arr[this.#size - i] = currentPointer.value;
        currentPointer = currentPointer.next;
      }
      return arr;
    }
  };
  
  static fromIterable(iterable) {
    if (typeof iterable?.[Symbol.iterator] !== "function") {
      throw new Error("Не итерируемый");
    } else {
      let stack = new Stack(iterable.length);
      for (let el of iterable) {
        stack.push(el);
      }
      return stack;
    }
  }
}

module.exports = { Stack };