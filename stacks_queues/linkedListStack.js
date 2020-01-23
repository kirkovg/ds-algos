class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      throw new Error('The stack is empty!');
    }
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('The stack is already empty!');
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }

}

const myStack = new LinkedListStack();
myStack.push('google');
myStack.push('netflix');
myStack.push('apple');
myStack.push('microsoft');
myStack.push('amazon');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());