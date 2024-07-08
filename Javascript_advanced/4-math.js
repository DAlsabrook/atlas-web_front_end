function divideBy (firstNumber) {
  return (secondNumber) => {
    return secondNumber / firstNumber;
  }
}

function addBy (firstNumber) {
  return (secondNumber) => {
    return firstNumber + secondNumber;
  }
}

const addBy100 = addBy(100); // uses the function addBy with the number 100
const addBy1000 = addBy(1000); // uses the function addBy with the number 1000
const divideBy10 = divideBy(10); // uses the function divideBy with the number 10
const divideBy100 = divideBy(100); // uses the function divideBy with the number 100
