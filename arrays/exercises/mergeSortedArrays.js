const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

function mergeSortedArrays(arr1, arr2) {
  if ((arr1 === null || arr1.length === null) || (arr2 === null || arr2.length === null)) {
    return new Error('You need to provide two arrays!');
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeSortedArrays2(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays(arr1, arr2));
console.log(mergeSortedArrays2(arr1, arr2));