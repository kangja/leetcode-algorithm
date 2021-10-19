let isHappy = function () {
  // example
  let n = 19;
  // output should be true Because
  //   1^2 + 9^2 = 82
  //   8^2 + 2^2 = 68
  //   6^2 + 8^2 = 100
  //   1^2 + 0^2 + 0^2 = 1

  let seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);
    sum = 0;
    while (n > 0) {
      sum = sum + (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (sum === 1) {
      return true;
    }
    n = sum;
  }
  return false;
};

console.log(isHappy());
