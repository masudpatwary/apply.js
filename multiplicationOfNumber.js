function factorial(numbers) {
  let factor = 1;
  for (i = 1; i <= numbers; i++) {
    factor = factor * i;
  }
  return factor;
}
const result = factorial(10);
console.log(result);
