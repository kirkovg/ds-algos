class CustomHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    const computedHash = this._hash(key);
    const currentBucket = this.data[computedHash];
    if (currentBucket) {
      return currentBucket.filter(item => item[0] === key).map(item => item[1]);
    }
    return null;
  }

  set(key, value) {
    const computedHash = this._hash(key);
    if (!this.data[computedHash]) {
      this.data[computedHash] = [];
    }
    this.data[computedHash].push([key, value]);
    return this.data;
  }

  keys() {
    return this.data.filter(item => item[1] !== []).map(item => item[0][0]);
  }
}

const table = new CustomHashTable(50);
table.set('grapes', 10000);
table.set('apples', 54);
table.set('oranges', 2);
console.log(table.data);
console.log(table.get('grapes'));
console.log(table.get('non-existent-key'));
console.log(table.keys());