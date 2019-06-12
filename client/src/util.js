export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function hasMatch(obj1, arr) {
  for (let unit of arr) {
    if (obj1[unit]) {
      return true;
    }
  }
  return false;
}