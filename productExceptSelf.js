// return an array "answer" such that answer[i] = product of all the elemtns of "nums" except nums[i].

// DON'T use the division operation.

// example
// nums = [1,2,3,4]
// output = [24,12,8,6]

// when i = 0, then nums[1] * nums[2] * nums[3] = 24;
// when i = 1, then nums[0] * nums[2] * nums[3] = 12;
// when i = 2, nums[0] * nums[1] * nums[3] = 8;
// when i = 3, nums[0] * nums[1] * nums[2] = 6;

// run 2 for loops for num.

// when it's at nums[i], skip/ignore that value only and multiply other numbers that are NOT nums[i] ONLY.

// push the multiplied result to an emptyArray.

// return the emptyArray.

let productExceptSelf = function (nums) {
  let emptyArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
    }
  }

  return emptyArray;
};
