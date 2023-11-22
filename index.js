// const longestConsec = (array, k) => {
//   const newArray = array
//     .map((x, ind) => {
//       const index = array.indexOf(x);
//       let result = "";
//       for (let i = 0; i < k; i++) {
//         result += array[i + index] ? array[i + index] : "";
//       }
//       return result;
//     })
//     .slice(0, array.length - k + 1);

//   const maxLength = newArray
//     .map((concat) => concat.length)
//     .reduce((max, curr) => (curr > max ? curr : max), "");

//   let result = "";

//   for (i = 0; i < newArray.length; i++) {
//     if (newArray[i].length === maxLength) {
//       result = newArray[i];
//       break;
//     }
//   }
//   return result;
// };

const longestConsec = (strarr, k) => {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempStr = strarr.slice(i, i + k).join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
};

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);

//     .reduce((longest, curr) => (longest.length > curr.length ? longest : curr));
