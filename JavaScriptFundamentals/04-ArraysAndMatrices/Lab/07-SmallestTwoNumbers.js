function showTwoSmallest(nums){
    nums = nums.map(Number);
    nums.sort((a,b) => a - b);
    return nums[0] + " " + nums[1];
}

// console.log(showTwoSmallest(['30', '15', '50', '5']));