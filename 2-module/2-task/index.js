function isEmpty(obj) {
  for (let key in obj) {
    if (key) { }
    return false;
  }
  return true;
}