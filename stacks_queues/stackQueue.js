/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.


- You must use only standard operations of a stack -- which means only push to top, peek/pop from top,
size, and is empty operations are valid.
- Depending on your language, stack may not be supported natively.
 You may simulate a stack by using a list or deque (double-ended queue), 
 as long as you use only standard operations of a stack.
- You may assume that all operations are valid 
 (for example, no pop or peek operations will be called on an empty queue).
*/

class StackQueue {
  constructor() {
    this.data = [];
  }

  push(x) {
    this.data.push(x);
  }

  pop() {
    this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  empty() {
    return this.data.length === 0;
  }
}

const stackQueue = new StackQueue();
stackQueue.push(1);
stackQueue.push(2);
stackQueue.push(3);

console.log(stackQueue.peek());
