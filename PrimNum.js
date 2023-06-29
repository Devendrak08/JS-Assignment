const isPrime = (n) => {
  //check number is divisible by n/2
  for (let i = 2; i <= n / 2; i++) {
    //if divisible it is not prime number
    if (n % i === 0) {
      return false
    }
  }
  return true
};
//tp print first 10 prime number
const PrimeNum = (num) => {
  //create empty array
  const arr = []
  let i = 2
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i)
    }
    i = i === 2 ? i + 1 : i + 2
  }
  return arr;
};
console.log(PrimeNum(10))
