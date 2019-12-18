const input = [1, 0, 0, 1, 3];

function moveZeroes(nums) {
  let i = 0;
  let zeroesLength = nums.filter(n => n === 0).length;
  while (zeroesLength !== 0) {
    if (nums[i] === 0) {
      const zeroElement = nums.splice(i, 1)[0];
      nums.push(zeroElement);
      zeroesLength--;
      i--;
    }
    i++;
  }
  return nums;
}

console.log(moveZeroes(input));
