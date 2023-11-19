function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// const result = isEven(25);
// console.log(result);

function isEven(number) {
  const reminder = number % 2;
  if (reminder == 0) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(100);
console.log(result);
