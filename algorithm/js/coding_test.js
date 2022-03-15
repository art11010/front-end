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
// console.log(twoSum(nums, target))


// https://leetcode.com/problems/palindrome-number/
let isPalindrome = function(x) {
	// 앞 뒤만 같아도 되는
	// x = String(x);
	// let result = x.split('');
	// if(result[0] == result[result.length-1]) return true;
	// return false;

	// 뒤집어도 같은
	// if( x == String(x).split('').reverse().join('')) return true;
	// return false;
};
// console.log(isPalindrome(122))

// https://leetcode.com/problems/longest-common-prefix/
// let strs = ["flower","flow","flight","hi"], arr = new Array, num = new Array, max = new Array;
// let longestCommonPrefix = function(strs) {
// 	for(let j = 1; j < strs[0].length + 1; j++){
// 		var slice = strs[0].slice(0,j);
// 		arr.push(slice);
// 	}
// 	for(let i = 1 ;i < strs.length; i++){
// 		for(let k = 0; k < arr.length; k++){
// 			if(strs[i].includes(arr[k])){
// 				num.push(k)
// 			}
// 		}
// 	}
// 	for(let q = 0 ;q < num.length; q++){
// 		for(let z = q + 1 ;z < num.length; z++){
// 			if(num[q] == num[z]){
// 				console.log(num[q], num[z])
// 				max.push(num[z])
// 			}
// 		}
// 	}
// 	return arr[max[max.length-1]]
// };
let strs = ["flower","flow","flight","hi"];
let longestCommonPrefix = function(strs) {
	for(let i = 0; i <= strs[0].length; i++){
		for(let j = 1; j < strs.length; j++){
			console.log(j + ' : ' + strs[0][i],strs[j][i])
			// if (strs[0][i] !== strs[j][i]) {
            //     return strs[0].slice(0, i);
            // }
		}
	}
};
console.log(longestCommonPrefix(strs))