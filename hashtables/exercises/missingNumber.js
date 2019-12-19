const input = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // expected output 8

function missingNumber(nums) {
  let missingNumber = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missingNumber ^= i ^ nums[i];
  }
  return missingNumber;
}

function missingNumberGauss(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;
  for (let num of nums) {
    actualSum += num;
  }
  return expectedSum - actualSum;
}

console.log(missingNumber(input));
console.log(missingNumberGauss(input));