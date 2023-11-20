const digPow = (n, p) => {
  let sum = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return sum % n ? -1 : sum / n;
};

console.log(digPow(46288, 3));
