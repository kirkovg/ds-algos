class ArrayStack {

  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());