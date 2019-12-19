const input = [4, 1, 2, 1, 2];


function singleNumber(array) {
  const map = {};
  for (let elem of array) {
    if (!map[elem]) {
      map[elem] = 1;
    } else {
      ++map[elem];
    }
  }
  return Object.keys(map).filter(key => map[key] === 1)[0];
}

console.log(singleNumber(input));