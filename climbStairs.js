// you can only climb 1 or 2 steps. how many distinct ways can you climb to the top?

// example one
// input n = 2;
// output should be 2
// because
// 1. 1 step + 1step.
// 2. 2 steps.

// example two
// input n = 3
// output should be 3
// because
// 1. 1 step + 1 step + 1step.
// 2. 1 step + 2steps.
// 3. 2 steps + 1step.

// first check if n is greater than or equal to 1 AND less than or equal to 45.

// check if n is divisible by 1. And if it is, increase count.

// check if n is divisible by 2 and if there is no remainder, increase the count.

// if n is NOT completely divisible by 2 because there is a remainder and if the value of the remainder is 1 then, increase the count twice.

// let climbStairs = function (n) {
//   let count = 0;

//   if (n >= 1 && n <= 45) {
//     if (n === 1) {
//       return 1;
//     }

//     if (n === 2) {
//       return 2;
//     }

//     if (n % 1 === 0) {
//       count++;
//     }

//     if (n % 2 === 0) {
//       count++;
//     }

//     if (n % 2 === 1) {
//       count = count + 2;
//     }

//     if (n % 1 === 0 && n % 2 === 0) {
//       count = count + 3;
//     }

//     return count;
//   }
// };

// example
// if n = 2;
// outcome should be 2 because
// 1 + 1;
// 2;

// example
// if n = 4,
// 1 + 1 + 1 + 1;
// 1 + 1 + 2;
// 1 + 2 + 1;
// 2 + 1 + 1;
// 2 + 2;

// if n = 5,
// 1 + 1 + 1 + 1;
// 1 + 1 + 1 + 2;
// 1 + 1 + 2 + 1;
// 1 + 2 + 1 + 1;
// 2 + 1 + 1 + 1;
// 2 + 2 + 1;
// 2 + 1 + 2;
// 1 + 2 + 2.

// let n = 5;
// console.log(climbStairs(n));

// another solution
