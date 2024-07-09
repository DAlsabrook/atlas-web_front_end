function countPrimeNumbers() {
  let primeCount = 0;

  for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeCount++
    }
  }
  return primeCount;
}

let start = performance.now();
// Sends all function calls to the queue to be executed when the stack has cleared and main file is done running
setTimeout(() => {
  for(let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  let end = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
}, 0);
