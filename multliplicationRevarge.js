function revergeFactorial(number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
const numberOf = 4;
const result = revergeFactorial(numberOf);
console.log(result);
