// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
  return str.replace(/[-_](.)/g, (first, second) => second.toUpperCase());
};

const toCamelCase2 = (str) => {
  return str.replace(/[-_]\w/gi, (match) => match.charAt(1).toUpperCase());
};

const toCamelCase3 = (str) => {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
};

const toCamelCase4 = (str) => {
  const arr = str.split(/[-_]/);
  return arr.reduce((acc, curr) => {
    const capitalizedWord = curr.charAt(0).toUpperCase() + curr.slice(1);
    return acc + capitalizedWord;
  });
};

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
};

const reverseWords2 = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};

//	Write a function that takes an integer as input, and returns the number of
//	bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
//	Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = (n) => n.toString(2).split("0").join("").length;

const countBits2 = (n) => n.toString(2).replace(/0/g, "").length;

//	Some numbers have funny properties. For example:
//
//		89 --> 8¹ + 9² = 89 * 1
//
//		695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
//		46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
//		Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//
//		we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//		In other words:
//
//		Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
//		If it is the case we will return k, if not return -1.
//
//		Note: n and p will always be given as strictly positive integers.

const digPow = (n, p) => {
  let sum = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return sum % n ? -1 : sum / n;
};

const digPow2 = (n, p) => {
  let sum = String(n)
    .split("")
    .map((d, i) => {
      return Math.pow(d, p + i);
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });
  return sum % n ? -1 : sum / n;
};

//	Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of
//	n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of (1)^3.
//	You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//  The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you
//	have to return the integer n such as n^3 + (n-1)^3 + (n-2)^3 + .and..and + 1^3 = m  if such a n exists or -1 if there is no such n.
//	Examples:
//	findNb(1071225) --> 45
//
//	findNb(91716553919377) --> -1

const findNb = (m) => {
  let sum = 0;
  let n = 0;
  while (sum < m) {
    sum += Math.pow(++n, 3);
  }
  return sum === m ? n : -1;
};

//clever
const findNb2 = (m) => {
  let n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
};

//	You might know some pretty large perfect squares. But what about the NEXT one?
//
//	Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
//	If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
//
//	Examples:(Input --> Output)
//
//	121 --> 144
//	625 --> 676
//	114 --> -1 since 114 is not a perfect square

const findNextSquare = (sq) => {
  return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
};

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

const findMissingLetter = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
  throw new Error("Invalid input");
};

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = (str) => {
  let hashtag = str.split(" ").reduce((curr, acc) => {
    return curr + acc.charAt(0).toUpperCase() + acc.substring(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
};

const generateHashtag2 = (str) => {
  const result =
    "#" +
    str
      .trim()
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join("");

  return result.length > 140 || str.trim().length === 0 || result.length === 0
    ? false
    : result;
};

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (A) => {
  return A.reduce((acc, curr) => acc ^ curr, 0);
};

//clever
const findOdd2 = (A) => {
  let obj = {};
  A.forEach((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
};

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

const findOutlier = (array) => {
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    sum += array[i] % 2;
  }

  const mod = sum === 1 || sum === 0 ? 1 : 0;

  //We could use filter but this method is less costly
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === mod) {
      return array[i];
    }
  }

  return null;
};
