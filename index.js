const findNb = (m) => {
  let n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
};

console.log(findNb(1071225));
