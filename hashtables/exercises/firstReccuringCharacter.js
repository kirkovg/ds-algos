const input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const input2 = [2, 3, 4, 5];

function findFirstReccuringCharacter(array) {
  const map = new Map();
  for (let elem of array) {
    if (map.get(elem)) {
      return elem;
    }
    map.set(elem, true);
  }
  return null;
}

console.log(findFirstReccuringCharacter(input));
console.log(findFirstReccuringCharacter(input2));