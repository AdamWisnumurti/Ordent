function checkWalk(array) {
  if (array.length === 11) {
    return true;
  } else {
    return false;
  }
}

console.log(
  'Expected True:',
  checkWalk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'])
);

console.log(
  'Expected False:',
  checkWalk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
);
