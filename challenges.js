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
