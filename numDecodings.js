// message containg letters from A-Z can be encoded into numbers.
// For instance,
// A=>1
// B=>2
// C=>3
// ...
// Z=> 26

// in order to decode the above/encoded message, all the digits must be grouped first and then turned back into letters. There may be multiple ways to turn alphabet letters into numbers.

// For example, "11106" can be turned into
// 1) "AAJF" because (1, 1, 10, 6) AND
// 2) "KJF" because (11, 10, 6)
// ^ (1, 11, 06) is NOT possible because "06" can NOT be mapped into "F" since "06" is different from "6".

// INPUT
// s = containing only digits

// OUTPUT
// return the number of ways to decode the alphabet into numbers

// EXAMPLE
// s = "12"
// output is 2 because "12" can be decoded as "AB" (1,2) or "L" (12).

// EXAMPLE
// s = "226"
// output is 3 because "226" can be decoded as "BZ" (2 ,26), "VF" (22, 6), and "BBF" (2, 2, 6).

// EXAMPLE
// s = "0"
// output is 0 because there are no alphabet letters that start with "0".

// EXAMPLE
// s = "06";
// output is 0 because "06" can't be mapped to "F" because leading zero("06") is different from "6".

// pseudocode

// if "s" is between 1 and 26 inclusive, push that "s" into an empty array.

// split "s" by single digit and check if each digit is between 1 and 26 inclusive.

// split "s" by 2 digits and check if each digit is between 1 and 26 inclusive.

// let numDecodings = function (s) {
//   let emptyArray = [];

//   let splitByOneDigit = s.split("");
//   console.log("splitByOneDigit:", splitByOneDigit);
//   // [ '1', '0', '0' ]

//   if (
//     splitByOneDigit.every((el) => el >= 1) &&
//     splitByOneDigit.every((el) => el <= 26)
//   ) {
//     emptyArray.push(splitByOneDigit);
//   }

//   let splitByFirstTwoDigits = s.match(/.{1,2}/g);
//   console.log("splitByFirstTwoDigits:", splitByFirstTwoDigits);

//   console.log("splitByFirstTwoDigits:", splitByFirstTwoDigits[0][0]);

//   if (
//     splitByFirstTwoDigits.every((el) => el >= 1) &&
//     splitByFirstTwoDigits.every((el) => el <= 26) &&
//     splitByFirstTwoDigits[0][0] !== "0"
//   ) {
//     emptyArray.push(splitByFirstTwoDigits);
//   }

//   //   how to convert [226] into
//   //   ["2", "26"]

//   let splitByLastTwoDigits = [s.substr(0, 1), s.substr(1)];
//   console.log("splitByLastTwoDigits:", splitByLastTwoDigits);

//   if (
//     splitByLastTwoDigits.every((el) => el >= 1) &&
//     splitByLastTwoDigits.every((el) => el <= 26)
//   ) {
//     emptyArray.push(splitByLastTwoDigits);
//   }

//   //   get rid of duplicate.
//   //   emptyArray: [ [ '1', '2' ], [ '12' ], [ '1', '2' ] ]
//   let uniqueArray = [...new Set(emptyArray.map((e) => JSON.stringify(e)))].map(
//     (e) => JSON.parse(e)
//   );
//   console.log("uniqueArray:", uniqueArray);
//   return uniqueArray.length;
// };

// let s = "1";
// console.log(numDecodings(s));

// solution 2
let numDecodings = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  console.log("dp:", dp);

  dp[0] = 1; //empty string
  console.log("dp after the change1:", dp);

  dp[1] = s.charAt(0) == 0 ? 0 : 1;

  console.log("dp after the change2:", dp);

  for (let i = 2; i <= s.length; i++) {
    let oneDigit = s.slice(i - 1, i);
    // s = "123";
    // when i = 2
    // s.slice(1, 2);
    console.log("oneDigit:", oneDigit);
    // oneDigit: 2

    // when i = 3
    // s.slice(2, 3)
    // oneDigit: 3
    // -------------------------------

    let twoDigit = s.slice(i - 2, i);
    // s = "123"
    // when i = 2
    // s.slice(0, 2)
    console.log("twoDigit:", twoDigit);
    // twoDigit: 12;

    // when i = 3
    // s.slice(1, 3)
    // twoDigit: 23

    if (oneDigit >= 1) {
      dp[i] = dp[i] + dp[i - 1];
      //   d[2] = dp[2] + dp[2-1]
      //   d[2] = dp[2] + dp[1]
      //   d[2]    = 0 + 1
      //   [1, 1, 1, 0];
      console.log("first dp[i]:", dp[i]);
      //   first dp[i]: 1
    }

    if (twoDigit >= 10 && twoDigit <= 26) {
      //   dp[2] = dp[2] + dp[0];
      // 2    =  1 + 1
      dp[i] = dp[i] + dp[i - 2];
      console.log("second dp[i]:", dp[i]);
      //   second dp[i]: 2
    }
  }
  console.log("dp[s.length]:", dp[s.length]);
  //   return dp[s.length];
};

console.log(numDecodings("123"));
