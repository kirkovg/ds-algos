class SingleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    this.head = {
      value,
      next: this.head
    };
    this.length++;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index > this.length || index < 0) {
      throw new Error('index out of bounds');
    }
    const newNode = {
      value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index out of bounds');
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
  }

  traverseToIndex(index) {
    if (index > this.length || index < 0) {
      throw new Error('index out of bounds');
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  print() {
    let temp = this.head;
    const values = [];
    while (temp !== null) {
      values.push('[' + temp.value + ']');
      temp = temp.next;
    }
    console.log(values.join('-->'));
  }
}

const myLinkedList = new SingleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(4);
myLinkedList.reverse();
myLinkedList.print();