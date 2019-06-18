export function capitalize(str) {
  let newStr = str.split(' ').map((word) => (
    word.charAt(0).toUpperCase() + word.slice(1)
  ));
  return newStr.join(' ');
}

export function hasMatch(obj1, arr) {
  for (let unit of arr) {
    if (obj1[unit]) {
      return true;
    }
  }
  return false;
}