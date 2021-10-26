// return indices of the the two numbers that they add up to "target"

// example.
// nums = [2,7,11,15]
// target = 9
// output is [0,1] because nums[0] + nums[1] equal to 9.

// loop through 'nums' array from index 0 and run another for loop starting from index 1.

// if both numbers add up to target, return their indice.

// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// nums = [2, 7, 11, 15];
// target = 9;

// let nums = [3, 3];
// let target = 6;
// console.log(twoSum(nums, target));

// second solution
const twoSum = (nums, target) => {
  let storage = {};

  //  iterate through every element in nums and extracting the index and actual number
  for (let [index, num] of nums.entries()) {
    //   check if the number we're looking exists in storage. if it exists, return that particular element and its index.
    if (storage[num] !== undefined) {
      return [storage[num], index];
    } else storage[target - num] = index;
  }

  // if it doesn't exist, add below value to storage.
  // example
  // nums = [2, 7, 11, 15];
  // target = 9;

  // index = 0;
  // index = 1;

  // num = 2;
  // num = 7;

  // storage = {
  // "7": 0,
  //  7 already exists in storage, so we return 0 because storage[7] equals to 0, and the current index which is 1.
  // };
};

nums = [2, 7, 11, 15];
target = 9;

console.log(twoSum(nums, target));
