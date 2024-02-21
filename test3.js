function GroupingString(x, y, z) {
  const xLength = x.length;
  const yLength = y.length;
  const zLength = z.length;
  let result = '';

  if (xLength === yLength && xLength === zLength) {
    let tempVal = [];
    for (let i = 0; i < xLength; i++) {
      tempVal.push(`${x[i]}${y[i]}${z[i]}`);
    }
    result = tempVal.join('');
  } else {
    result = 'All inputs must have same length';
  }
  return result;
}

console.log(
  'Expected abcabcabc:',
  GroupingString('aaa', 'bbb', 'ccc')
);

console.log('Expected Error:', GroupingString('aaa', 'bbbbb', 'ccc'));
