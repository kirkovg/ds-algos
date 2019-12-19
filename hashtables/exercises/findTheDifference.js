const s = 'abcd';
const t = 'abcde';

function findTheDifference(s, t) {
  const map = {};
  const map1 = {};
  Array.from(s).forEach(elem => map[elem] = (map[elem] || 0) + 1);
  Array.from(t).forEach(elem => map1[elem] = (map1[elem] || 0) + 1);
  return Array.from(t).filter(elem => map1[elem] - map[elem] !== 0)[0];
}

console.log(findTheDifference(s, t));