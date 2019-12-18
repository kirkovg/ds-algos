const numbers = [1, 2, 3, 4, 5];

numbers.push(8); // O(1)

numbers.pop(); // O(1)

numbers.unshift(2); // O(n) - changes all indexes after adding at the beginning

numbers.splice(2, 0, 5); // O(n) - same as unshift

console.log(numbers);


class Tocak {
  constructor(length) {
    this.length = length;
  }
}

const tocace = new Tocak(5);

console.log(tocace.length);