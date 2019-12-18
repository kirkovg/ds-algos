const input = [1,2,3,1];

function containsDuplicate(array) {
  const map = new Map();
  for (let elem of array) {
    if (map.get(elem)) {
      return true;
    }
    map.set(elem, true);
  }
  return false;
}

console.log(containsDuplicate(input));