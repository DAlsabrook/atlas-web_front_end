function countPrimeNumbers () {
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
countPrimeNumbers();
let end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
