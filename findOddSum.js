// function getOddSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
//   return sum;
// }

// const myNumbers = [54, 458, 98, 844, 2, 45, 4, 65, 847, 23, 48];
// getOddSum(myNumbers);

// practice sfind sum of the function in the array elements

// function findAvrgSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
// }

// const myNumber = [45, 415, 454, 454, 4554, 545, 8485, 887, 65695, 9859];
// findAvrgSum(myNumber);

// again practice

// sum

// function findAvrgSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
// }

// const arrayNumber = [489, 486, 87487, 8768, 3546887, 687, 74, 645];
// findAvrgSum(arrayNumber);

// find out the odd number

function findOddNumber(numbers) {
  let oddNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumber.push(numbers[i]);
    }
  }
  const total = oddNumber.reduce(
    (value, currentValue) => value + currentValue,
    0
  );
  return total;
}

const arrayNumber = [49, 46, 87, 88, 57, 67, 74, 65];
const oddNumbers = findOddNumber(arrayNumber);
console.log(oddNumbers);
