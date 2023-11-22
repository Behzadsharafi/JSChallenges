const findOutlier = (array) => {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < 3; i++) {
    if (array[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let isOutlierEven = evenCount > oddCount;
  for (let num of array) {
    if (isOutlierEven && num % 2 != 0) {
      return num;
    } else if (!isOutlierEven && num % 2 == 0) {
      return num;
    }
  }

  throw new IllegalArgumentException("No outlier found.");

  // const sum = array
  //   .slice(0, 3)
  //   .map((num) => num % 2)
  //   .reduce((acc, curr) => acc + curr);

  // const mod = sum === 1 || sum === 0 ? 1 : 0;

  // return array.filter((num) => num % 2 === mod)[0];
};

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
