class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertRecursively(this.root, value);
  }

  insertRecursively(node, value) {
    if (node === null || node === undefined) {
      node = new Node(value);
      return node;
    }
    if (value < node.value) {
      node.left = this.insertRecursively(node.left, value);
    }
    else if (value > node.value) {
      node.right = this.insertRecursively(node.right, value);
    }
    return node;
  }

  lookup(value) {
    return this.lookupRecursively(this.root, value);
  }

  lookupRecursively(node, value) {
    if (node === null || node.value === value) {
      return node;
    } else if (value < node.value) {
      return this.lookupRecursively(node.left, value);
    } else if (value > node.value) {
      return this.lookupRecursively(node.right, value);
    }
  }

  remove(value) {

  }
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null
    ? null
    : traverse(node.left);
  tree.right = node.right === null
    ? null
    : traverse(node.right);
  return tree;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(1);

console.log('Found node: ', tree.lookup(20));

console.log(JSON.stringify(traverse(tree.root)));