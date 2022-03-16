// https://leetcode.com/problems/two-sum/
// let nums = [2,7,11,15], target = 9, result = [];
// let twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
// 		for(let j = 0; j < nums.length; j++){
// 			if(nums[i] + nums[j] == target){
// 				result.push(i,j);
// 				return result;
// 			}
// 		}
// 	}
// };
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
			// console.log(j + ' : ' + strs[0][i],strs[j][i])
			// if (strs[0][i] !== strs[j][i]) {
            //     return strs[0].slice(0, i);
            // }
		}
	}
};
// console.log(longestCommonPrefix(strs))


// var ss = 124021100;
// let arry = new Array;
// function solution(s) {
// 	const result = {};
// 	s = String(s);
// 	arry = s.split('');
// 	arry.reduce(function(i,j){
// 		console.log(i,j)
// 	})
// }
// console.log(solution(ss))

// var ss = 11177777000;
// let arry = new Array, common = new Array;
// function solution(s) {
// 	s = String(s);
// 	arry = s.split('');
// 	for(let i = 0; i < arry.length; i++){
// 		for(let j = i + 1; j < arry.length; j++){
// 			if(arry[i] == arry[j]){
// 				console.log(arry[i], arry[j])
// 				common.push(arry[j]);
// 			}
// 		}
// 	}
// 	console.log(common)
// 	return Math.min(...common);
// }

// console.log(solution(ss))


// s = 'aacddefg'
// function solution(s) {
// 	s = String(s);
// 	arry = s.split('');
// 	for(let i = 0; i < arry.length; i++){
// 		z = i + 1;
// 		if(arry[i] == arry[z]){
// 			for(let j = 0; j < arry.length; j++){
// 				if(arry[i] == arry[j] && i !== j){
// 					delete arry[i]
// 					delete arry[j]
// 				}
// 			}
// 		}
// 	}
// 	return arry.join('');
// }
// console.log(solution(s))


// let orders = [2, 4, 5, 7], n = 3;
// function solution(orders, n) {
// 	n = n - 1;
// 	arr = [];
// 	for(let i = 1; i <= orders[orders.length-1]; i++){
// 		arr.push(i)
// 	}
// 	for(let j = 0; j < orders.length; j++){
// 		arr.splice(arr.indexOf(orders[j]),1)
// 	}
// 	return arr[n];
// }
// console.log(solution(orders, n))

// arr = [1, 2, 1]
// function solution(arr) {
// 	return arr[1]
// }

// console.log(solution(arr))

// function solution(n) {
// 	console.log(n)
// 	// n = n - 1;
// 	console.log((2 ** n - 1) % 1000000007)
// 	return (2 ** n -1) % 1000000007
// }
// console.log(solution(5))

arr = [1, 2, 1]
function solution(arr) {
    // return arr[1]
	// for(let i = 0; i < arr.length; i++){
		// console.log(i)
		for(let j = 1; j < arr.length; j++){
			if(arr[0] == arr[j]){
				console.log(arr[0],arr[j])
				// return arr[j-1]
				delete arr[0]
				delete arr[j]
			}
		}
		return arr.join('')
	// }
}
console.log(solution(arr))