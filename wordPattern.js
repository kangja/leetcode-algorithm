// find if "s" follows the same pattern when "pattern" is given

// if pattern is "abba" and s is "dog cat cat dog" because a= "dog", b =   // "cat", b = "cat", and a = "dog".

// separate each word of "pattern" into individual letters. For instance, let pattern = a, b, b, a.

// separate each sentences of "s" into individual word. For instance, let  // s = "dog", "cat", "cat", "dog"
// s = "dog", "cat", "cat", "fish"

// Then, let each word of "pattern" point to individual words of "s". For instance, make it so that
// "a: dog", "b: cat"
// { a: 'fish', b: 'cat', b: 'cat', a: 'fish' }

// only return the values of an object.

// check if duplicates exit in an array. Then, compare the length of withduplicates vs. noDuplicates.
// let pattern = "abba";
// let s = "dog cat cat fish";

// let wordPattern = function (pattern, s) {
//   let individualLetter = pattern.split("");
//   console.log("individualLetter:", individualLetter);
//   //   ["a", "b", "b", "a"];

//   let individualWord = s.split(" ");
//   console.log("individualWord:", individualWord);
//   //   ["dog", "cat", "cat", "dog"];

//   const keyValuePair = Object.fromEntries(
//     individualLetter.map((v, i) => [v, individualWord[i]])
//   );

//   console.log(keyValuePair);

//   var values = Object.keys(keyValuePair).map(function (key) {
//     return keyValuePair[key];
//   });

//   console.log("values:", values);
//   [ 'dog', 'cat', 'cat' ]

//   const noDuplicates = new Set(values);
//   console.log("noDuplicates:", noDuplicates);
//   noDuplicates: Set(2) { 'dog', 'cat' }

//   console.log(values.length == noDuplicates.size);
//   return values.length == noDuplicates.size;
// };

// wordPattern(pattern, s);

// another solution
const wordPattern = (pattern, str) => {
  const mapCharToWord = {};
  const mapWordToChar = {};

  pattern = pattern.split("");
  //   console.log("pattern:", pattern);
  //   pattern: [ 'a', 'b', 'b', 'a' ]

  str = str.split(" ");
  //   console.log("str:", str);
  //   str: [ 'dog', 'cat', 'cat', 'fish' ]

  //   check if length is the same. If it's different, return false.
  if (pattern.length !== str.length) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let currentLetter = pattern[i];
    let currentWord = str[i];

    if (
      mapCharToWord[currentLetter] !== undefined &&
      mapCharToWord[currentLetter] !== currentWord
    ) {
      return false;
    }

    if (
      mapWordToChar[currentWord] !== undefined &&
      mapWordToChar[currentWord] !== currentLetter
    ) {
      return false;
    }

    mapWordToChar[currentWord] = currentLetter;
    console.log("mapWordToChar[currentWord]:", mapWordToChar[currentWord]);

    mapCharToWord[currentLetter] = currentWord;
    console.log("mapCharToWord[currentLetter]:", mapCharToWord[currentLetter]);
  }
  return true;
};

let pattern = "aba";
let str = "dog cat fish";
console.log(wordPattern(pattern, str));
