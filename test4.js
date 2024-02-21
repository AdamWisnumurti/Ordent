function acronym(name) {
  const listName = String(name).replace('-', ' ').split(' ');
  let result = '';

  listName.forEach((item) => {
    if (item === 'von') {
      result += item[0].toLowerCase();
    } else {
      result += item[0].toUpperCase();
    }
  });

  return result;
  t;
}

console.log('Expected MJB:', acronym('Marry-jane Brook'));
console.log('Expected MJvB:', acronym('Marry-jane von Brook'));
