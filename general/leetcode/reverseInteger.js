const input = -123;

function reverse(x) {
  let reversed = Math.abs(x).toString().split('').reverse().join('');
  let converted = 0;
  if (x > 0) {
    converted = Number.parseInt(reversed);
    return Number.isNaN(converted) ? 0 : converted;
  }
  converted = Number.parseInt(reversed) * -1;
  return Number.isNaN(converted) ? 0 : converted;
}

console.log(reverse(input));