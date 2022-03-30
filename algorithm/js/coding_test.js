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
// let isPalindrome = function(x) {
	// 앞 뒤만 같아도 되는
	// x = String(x);
	// let result = x.split('');
	// if(result[0] == result[result.length-1]) return true;
	// return false;

	// 뒤집어도 같은
	// if( x == String(x).split('').reverse().join('')) return true;
	// return false;
// };
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

// arr = [1, 2, 1]
// function solution(arr) {
//     // return arr[1]
// 	// for(let i = 0; i < arr.length; i++){
// 		// console.log(i)
// 		for(let j = 1; j < arr.length; j++){
// 			if(arr[0] == arr[j]){
// 				console.log(arr[0],arr[j])
// 				// return arr[j-1]
// 				delete arr[0]
// 				delete arr[j]
// 			}
// 		}
// 		return arr.join('')
// 	// }
// }
// console.log(solution(arr))




// 1.
// let num = -587;
// let num = 4300;
// function solution(num) {
// 	if(Math.abs(num) > 100000) return 0;
// 	num = String(num);
// 	let result = num.split('');
// 	let max = [];
// 	let min = [];
// 	if( num < 0 ){
// 		if(result[0] == '-'){
// 			min = result.splice(0,1)
// 			for(let i = result.length - 1; i >= 0; i--){
// 				min.push(result[i]);
// 			}
// 			return Number(min.join(''));
// 		}
// 	}else{
// 		for(let i = result.length - 1; i >= 0; i--){
// 			max.push(result[i]);
// 		}
// 		return Number(max.join(''));
// 	}
// }
// console.log(solution(num))
// reverse

// 2.
// let s = "Hello, World!?"
// function solution(s) {
// 	spc = /[/?.,!]/gi
// 	newS = s.replace(spc, '');
// 	let splitS = newS.split(' ');
// 	let result = [];
// 	for(let i = 0; i < splitS.length; i++){
// 		let wrap = '';
// 		for(let j = splitS[i].length - 1; j >= 0; j--){
// 			wrap += splitS[i][j];
// 		}
// 		result.push(wrap);
// 	}
// 	return result;
// }
// console.log(solution(s))

// 3.
// let s = 221123;
// function solution(s) {
// 	s = String(s);
// 	let curr ;
// 	let hi = 0;
// 	for(let i = 0; i < s.length; i++){
// 		// console.log(s[i])
// 		curr = s[i]
// 		if(curr == s[i]){
// 			hi++;
// 			console.log(hi)
// 		}
// 		// for(let j = 1; j < s.length; j++){
// 		// }
// 	}
// 	// console.log(curr)
// }
// console.log(solution(s))

// 4.
// let n = 15;
// function solution(n) {
// 	for(let i = 1; i < 10; i++){

// 	}
// }
// console.log(solution(n))

// 5.
// let num = 5;
// function solution(num) {
// 	console.log(num % 2)
// 	if(num % 2){
// 		return true
// 	}else{
// 		return false
// 	}
// }
// console.log(solution(num))

// 6.
// let w = 4;
// let h = 4;
// function solution(w, h) {
// 	let block = ((w - parseInt(w/2)) * h) + (parseInt(w/2) * (h - 1))
// 	let half = parseInt(w/2) * 2
// 	// 블록 정상
// 	console.log((w - parseInt(w/2)) * h)
// 	// 반블록 정상
// 	console.log(parseInt(w/2) * (h - 1))
// 	// 반블록 반띵
// 	console.log(parseInt(w/2) * 2)

// 	console.log(block, half);
// 	return (block * 500) + (half * 300)
// }
// console.log(solution(w, h))

// 7.
// let n = 3;
// function solution(n) {
// 	for(let i = 1; i < 15; i++){
// 		if(n * (n-1) == 15){
// 			return n
// 		}
// 	}
// }
// console.log(solution(n))

// 8.
// arr =  [13, 14, 15, 15, 16]
// function solution(arr) {
// 	let set = new Set(arr)
// 	return set.size
// }
// console.log(solution(arr))


// 9.
// points = [0, 0, 0, 5, 5, 0]
// 1/2*밑변*높이

// 10.
// arr = [1, 2, 3, 5, 5, 5]
// i = 2
// function solution(arr, i) {
// 	max = [];
// 	min = [];
// 	for(let j = 0; j < arr.length; j++){
// 		if(arr[j] <= i+1){
// 			max.push(Math.pow(arr[j] - (i-1), 2))
// 		}
// 	}
// 	// for(let j = 0; j < arr.length; j++){
// 	// 	if(arr[j] <= i){
// 	// 		console.log(arr[j] - (i-1))
// 	// 		// min.push(Math.pow(arr[j] - (i-1), 2))
// 	// 	}
// 	// }
// 	// for(let j = 0; j < arr.length; j++){
// 	// 	if(arr[j] <= i){
// 	// 		min.push(i)
// 	// 	}else{
// 	// 		min.push(arr[j])
// 	// 	}
// 	// }
	
// 	console.log(max,min)
// }
// console.log(solution(arr, i))


// 1.
// let nums = [1, 3, 4, 8];
// function solution(nums){
// 	let arr = [];
// 	for(let i = 1; i <= nums.length; i++){
// 		if(!nums.includes(i)){
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }
// console.log(solution(nums))

// 2.
// let p = '가나다라';
// let s = '바나나 드래곤 바나나 오염';
// function solution(p,s){
// 	pArr = new Set(p.split(''));
// 	sArr = new Set(s.split(' '));
// 	if(pArr.size == sArr.size) return true
// 	else return false
// }
// console.log(solution(p,s))

// 3.
// let S = '2-6-7*8/2+5';
// function solution(S) {
// 	return eval(S).toFixed(2);
// }
// console.log(solution(S))

// 4.
// A = [2, -8, 3, -2, 4, -10];
// function solution(A) {
// 	console.log(A)
// 	for(let i = 0; i < num; i++){
// 		for(let j = i+1; j < num; j++){
			
// 		}
// 	}
// }
// console.log(solution(A))

// 5.
// S = 1101;
// function solution(S) {
// 	S = parseInt(S, 2);
// 	count = 0;
// 	while(S > 0){
// 		if(S % 2){
// 			S = S - 1;
// 		}else{
// 			S = S/2;
// 		}
// 		count++;
// 	}
// 	return count;
// }
// console.log(solution(S))

// 6.
// s = 'abssccbsbsv'
// function solution(s) {
// 	// 1
// 	// sArr = s.split('');
// 	// result = [];
// 	// start = 0;
// 	// for(let i = 0; i < sArr.length; i++){
// 	// 	z = i + 1;
// 	// 	if(sArr[i] == sArr[z]){
// 	// 		console.log(sArr[i],sArr[z])
// 	// 		result.push(s.slice(start,i+1))
// 	// 		console.log(start)
// 	// 		start = i;
// 	// 	}
// 	// }
// 	// console.log(result)
// 	// 2
// 	// for(let i = 0; i < s.length; i++){
// 	// 	let start = s.charAt(i)
// 	// 	s.lastIndexOf(start);
// 	// 	console.log(start, s.lastIndexOf(start))
// 	// 	if(s.lastIndexOf(start) == s.indexOf(start)){
// 	// 		console.log('hi')
// 	// 	}
// 	// }
// }
// console.log(solution(s))

// 7.
// A = [2, 1, 3, 4];
// function solution(A) {
// 	A = A.sort(function(x, y){ return x - y; });
// 	arr = [];
// 	result = [];
// 	for(let i = 0; i < A.length; i++){
// 		two = A[i].toString(2).split('');
// 		let sum = two.reduce(function(acc, itm){
// 			acc = Number(acc);
// 			itm = Number(itm);
// 			return acc + itm;
// 		},0);
// 		arr.push(sum)
// 	}
// 	for(let j = 1; j <= Math.max(...arr); j++){
// 		for(let k = 0; k < A.length; k++){
// 			if(arr[k] == j) result.push(A[k])
// 		}
// 	}
// 	return result;
// }
// console.log(solution(A))

// 8.
// A = 12;
// B = 6;
// function solution(A, B) {
// 	sNum(A);
// 	sNum(B);
// 	function sNum(num){
// 		let Snums = [];
// 		for(let i = 0; i < num; i++){
// 			for(let j = i+1; j < num; j++){
// 				if( i*j == num ) Snums.push(i,j)
// 			}
// 		}
// 		Snums.sort()
// 		for(let i = 0; i < Snums.length; i++){
// 			for(let j = 0; j < Snums[i]; j++){
// 				for(let k = 0; k < Snums[i]; k++){
// 					if( j*k == Snums[i] ) {
// 						Snums.splice(Snums.indexOf(Snums[i]), 1, j, k);
// 					}

// 				}
// 			}
// 		}
// 		new_arr = Array.from(new Set(Snums));
// 		return new_arr.join('');
// 	}
// 	if(sNum(A) == sNum(B)) answer = 1;
// 	else answer = 0;
//     return answer;
// }
// console.log(solution(A,B))


// 9.
// A = [["철수", "영희"], ["영희", "철수"], ["영희", "진수"], ["진수", "동수"], ["진수", "진호"]]
// function solution(A) {
//     var answer = 0;
// 	for(let i = 0; i < A.length; i++){
// 		A[i] = A[i].sort();
// 	}
// 	for(let j = 0; j < A.length; j++){
// 		for(let k = j+1; k < A.length; k++){
// 			if(A[j].join('') == A[k].join('')) answer += 1;
// 		}
// 	}
//     return answer;
// }
// console.log(solution(A))