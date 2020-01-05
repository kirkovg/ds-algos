class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    if (index >= this.length || index < 0) {
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

  insert(index, value) {
    if (index >= this.length || index < 0) {
      throw new Error('index out of bounds');
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingNode;
    holdingNode.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      throw new Error('index out of bounds');
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next.prev = leader;
    leader.next = unwantedNode.next;
    this.length--;
  }

  print() {
    let temp = this.head;
    const values = [];
    while (temp !== null) {
      values.push('[' + temp.value + ']');
      temp = temp.next;
    }
    console.log(values.join('<-->'));
  }
}


const myList = new DoubleLinkedList(10);
myList.prepend(5);
myList.prepend(22);
myList.append(88);
myList.append(99);
myList.insert(4, 77);
myList.remove(2);
myList.print();