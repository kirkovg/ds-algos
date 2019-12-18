const inputArray = [1, 2, 3, 4, 5, 6, 7];
const steps = 3;

const inputArray2 = [-1, -100, 3, 99];
const steps2 = 2;

function rotate(nums, k) {
  while (k !== 0) {
    nums.unshift(nums.splice(nums.length - 1, 1)[0]);
    k--;
  }
  return nums;
}

console.log(rotate(inputArray, steps));
console.log(rotate(inputArray2, steps2));