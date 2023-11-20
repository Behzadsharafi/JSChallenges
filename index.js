const findMissingLetter = (array) => {
  var i = array[0].charCodeAt();
  array.map((x) => (x.charCodeAt() === i ? i++ : i));
  return String.fromCharCode(i);
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
