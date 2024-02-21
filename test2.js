function checkRemainder(x, y) {
  let biggest = 0;
  let smallest = 0;

  if (x > y) {
    biggest = x;
    smallest = y;
  } else {
    biggest = y;
    smallest = x;
  }

  result = biggest % smallest;
  return result;
}

console.log('Expected 2:', checkRemainder(17, 5));
console.log('Expected 7:', checkRemainder(13, 72));
console.log('Expected 0:', checkRemainder(0, -1));
console.log('Expected NaN:', checkRemainder(0, 1));
