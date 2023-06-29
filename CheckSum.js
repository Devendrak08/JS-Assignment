function checkSum(a, b) {
  let c = a + b;
  //comparing sum of value is less than 100 or not
  if (c <= 100) return true;
  return false;
}
console.log(checkSum(6, 1000));

// output: [false]
