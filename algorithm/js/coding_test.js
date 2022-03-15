// https://leetcode.com/problems/two-sum/

let nums = [2,7,11,15], target = 9, result = [];
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
		for(let j = 0; j < nums.length; j++){
			if(nums[i] + nums[j] == target){
				result.push(i,j);
				return result;
			}
		}
	}
};
console.log(twoSum(nums, target))