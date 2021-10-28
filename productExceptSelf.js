// return an array "answer" such that answer[i] = product of all the elements of "nums" except nums[i].

// DON'T use the division operation.

// example
// nums = [1,2,3,4]
// output = [24,12,8,6]

// when i = 0, then nums[1] * nums[2] * nums[3] = 24;
// when i = 1, then nums[0] * nums[2] * nums[3] = 12;
// when i = 2, then nums[0] * nums[1] * nums[3] = 8;
// when i = 3, then nums[0] * nums[1] * nums[2] = 6;

// when it's at nums[i], skip/ignore that value and multiply other numbers that are NOT nums[i].

/////////solution2
// nums = [1,2,3,4]
// leftProduct =  [ 1, 1, 2, 6];
// rightProduct = [ 24, 12 , 4 , 1];
// solution = [24, 12, 8, 6]
let productExceptSelf = function (nums) {
  let leftProduct = [];
  let rightProduct = [];
  let solution = [];

  // populate leftProduct.
  for (let i = 0; i < nums.length; i++) {
    if (leftProduct.length === 0) {
      leftProduct.push(1);
    } else {
      leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
    }
  }

  // populate rightProduct.
  for (let i = nums.length - 1; i >= 0; i--) {
    if (rightProduct.length === 0) {
      rightProduct.push(1);
    } else {
      rightProduct.unshift(rightProduct[0] * nums[i + 1]);
    }
  }

  // populate solution.
  for (let i = 0; i < leftProduct.length; i++) {
    solution.push(leftProduct[i] * rightProduct[i]);
  }

  return solution;
};

nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
