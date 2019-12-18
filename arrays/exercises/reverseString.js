const input = 'Hi, my name is Gjorgji Kirkov';

function reverseString(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    throw new Error('Not a valid input');
  }

  let result = '';
  for (let index = string.length - 1; index >= 0; index--) {
    result += string[index];
  }
  return result;
}

console.log(reverseString(input));