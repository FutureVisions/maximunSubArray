// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// nums = [-2,1,-3,4,-1,2,1,-5,4]

const maximumSubArray = (nums) => {
  let solution = nums[0];
  for ( let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
};

const maximumSubArray2 = (nums) => {
  let max = nums[0];
  let sum = nums[0];
  for ( let i = 1; i < nums.length; i++) {
    if (sum+nums[i]>nums[i]) {
      sum+=nums[i];
    }
    else {
      sum=nums[i];
    }
    max = Math.max(max,sum);
  }
  return max;
};

console.log(maximumSubArray2([-2,1,-3,4,-1,2,1,-5,4]))



const maxSubArray3 = (nums) => {
  // initiate two variable, maxSum for total max, sum for current max
  let maxSum = -Infinity
  let currentSum = 0
  // iterate through the nums, store sub-problems result
  for(let i = 0; i < nums.length; i++){ 
      //cumulating answers to the top
      
      //compare currentSum add current number 
      //with current number and store the maximum value
      currentSum = Math.max(nums[i], currentSum + nums[i])
      
      //compare maxSum with currentSum and store the greater value
      maxSum = Math.max(currentSum, maxSum)
      
  }
  return maxSum
}