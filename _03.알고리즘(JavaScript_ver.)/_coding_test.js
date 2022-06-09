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
// let strs = ["flower","flow","flight","hi"];
// let longestCommonPrefix = function(strs) {
// 	for(let i = 0; i <= strs[0].length; i++){
// 		for(let j = 1; j < strs.length; j++){
// 			// console.log(j + ' : ' + strs[0][i],strs[j][i])
// 			// if (strs[0][i] !== strs[j][i]) {
//             //     return strs[0].slice(0, i);
//             // }
// 		}
// 	}
// };
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

// 1.
// let A = [3, 12, 18];
// function solution(A) {
// 	A.sort((x, y) => x - y)
// 	let Amax = Math.max(...A);
// 	let arr = [];
// 	let result = [];
// 	for(let i = 0; i < A.length - 1; i++){
// 		for(let j = 0; j <= Amax; j++){
// 			if(A[i] % j === 0){
// 				arr.push(j)
// 			}
// 		}
// 	}
// 	arr.sort((x, y) => x - y)
// 	for(let i = 1; i < arr.length; i++){
// 		if(arr[i-1] == arr[i]){result.push(arr[i])}
// 	}
// 	return Math.max(...result)
// }
// console.log(solution(A))

// 2.
// 마이너스일 경우 어케?
// let N = 278;
// let K = -3;
// function solution(N, K) {
// 	let a = Number(String(N) + String(K));
// 	let b = Number(String(K) + String(N));
// 	console.log(a,b)
// 	a > b ? result = a : result = b;
// 	return result
// }
// console.log(solution(N, K))

// 3.
// N = 7
// K = 3
// function solution(N, K) {
// 	let nums = [];
// 	for(let i = 1; i <= N; i++){
// 		nums.push(i)
// 	}
// 	let orgK = K;
// 	while(nums.length > 1){
// 		K = K - 1;
// 		if( K > nums.length){
// 			K = K - nums.length
// 			if(K == nums.length){
// 				K = K - 2;
// 			}
// 		}
// 		nums.splice(K,1)
// 		console.log(nums)
// 		K += orgK
// 	}
// 	return nums[0]
// }
// console.log(solution(N, K))

// 4.
// N = 25;
// K = 2;
// function solution(N, K) {
// 	let nums = [];
// 	for(let i = 1; i <= N; i++){
// 		nums.push(i)
// 	}
// 	let join = nums.join('');
// 	let split = join.split('');
// 	let count = 0;
// 	for(let i = 0; i < split.length; i++){
// 		if(split[i] == K) count++;
// 	}
// 	return count;
// }
// console.log(solution(N, K))

// 5.
// A = [1, 2, 3, 4, 5];
// K = 1;
// function solution(A, K) {
// 	if( K > 0) K = K - 1;
// 	let arr = [];
// 	for(let i = 0; i < A.length; i++){
// 		for(let k = 0; k < A.length; k++){
// 			if( i == k) continue;
// 			arr.push(String(A[i]) + String(A[k]))
// 		}
// 	}
// 	arr.sort((x, y) => y - x)
// 	return Number(arr[K]);
// }

// console.log(solution(A, K))

// 6.
// S = 'MAMA';
// function solution(S) {
// 	let rever = S.split('').reverse().join('');
// 	S == rever ? result =  1 : result = 0;
// 	return result
// }
// console.log(solution(S))

// 7.
// A = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
// function solution(A) {
//     var answer = 0;
//     return answer;
// }
// console.log(solution(A))


// 8.
// A = [["A", "B"], ["B", "C"], ["A", "C"], ["A", "D"], ["B", "E"]]
// S = 'D'
// function solution(A, S) {
//     var answer = [];
// 	let arr = [];
// 	let arr2 = [];
// 	let zom;
// 	for(let i = 0; i < A.length; i++){
// 		if(A[i].includes(S)) zom = i;
// 	}
// 	for(let i = 0; i < zom; i++){
// 		arr.push(A[i].join(''))
// 	}
// 	answerJoin = arr.join('').split('');
// 	answerJoin.sort();
// 	// console.log(answerJoin)
// 	let count = 0;
// 	for(let i = 0; i < answerJoin.length; i++){
// 		for(let j = 0; j < answerJoin.length; j++){
// 			if(answerJoin[i] == answerJoin[j]){
// 				count++;
// 			}
// 			arr2.push(count)
// 		}
// 	}
// 	console.log(arr2)
// 	answer.push(answerJoin[0])
//     return answer;
// }
// console.log(solution(A, S))




// function answer(arr){
// 	let new_arr = [];
// 	for(let i = 0; i < arr.length; i++){
// 		let obj = {}
// 		obj.key = arr[i];
// 		obj.num = 1;
// 		if( i > 0 ){
// 			let result = true;
// 			for(let j = 0; j < new_arr.length; j++){
// 				if(new_arr[j].key == obj.key){
// 					new_arr[j].num = new_arr[j].num + 1;
// 					result = false;
// 				}
// 			}
// 			if(result) new_arr.push(obj);
// 		}else{
// 			new_arr.push(obj)
// 		}
// 	}
// 	return new_arr;
// }
// let input = [
// 	['john', 'alice', 'alice', 'alice', 'alice'],
// 	['Hello', 'hello', 'HELLO', 'hello', 'hello', 'hello'],
// 	['kiwi', 'banana', 'mango', 'kiwi', 'banana']
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i]))
// }









// 9.
// A = [[1, 1, 1, 1], [0, 0, 0, 1], [0, 1, 1, 1], [0, 1, 1, 0], [0, 0, 1, 1]]
// function solution(A) {
//     var answer = 0;
// 	let count = 0;
// 	for(let i = 0; i < 4; i++){
// 		if(A[0][i] == A[1][i]){
// 			count = 1;
// 			for(let i = 0; i < 4; i++){
// 				if(A[1][i] == A[2][i]){
// 					count = 2;
// 					for(let i = 0; i < 4; i++){
// 						if(A[2][i] == A[3][i]){
// 							count = 3;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	if(count == 3){
// 		answer = 1
// 	}else{
// 		answer = 0
// 	}
//     return answer;
// }
// console.log(solution(A))

// function solution(A) {
//     var answer = 0;
// 	let count = 0;
// 	let aa = 0;
// 	while(aa<4){
// 		for(let i = 0; i < A[count].length-1; i++){
// 			if(A[count][i] == A[count+1][i]){
// 				count++;
// 				break;
// 			}
// 		}
// 		aa++;
// 	}
// 	if(aa == 4){
// 		answer = 1
// 	}else{
// 		answer = 0
// 	}
//     return answer;
// }




// 1.
// arr = [71, 111, 111, 103, 108, 101]
// function solution(arr) {
//     var answer = '';
// 	for (const item of arr) {
// 		answer += String.fromCharCode(item)
// 	}
//     return answer;
// }
// console.log(solution(arr))

// 2.
// n = 5
// function solution(n) {
//     var answer = '';
// 	answer = n.toString(2)
//     return answer;
// }
// console.log(solution(n))

// 3.
// arr = ["10110", "1010", "11110"]
// function solution(arr) {
//     var answer = 0;
// 	var arry = [];
// 	for(let i = 0; i < arr.length; i++){
// 		arry.push(parseInt(arr[i], 2))
// 	}
// 	for(let i = 1; i < arry.length; i++){
// 		answer = arry[i-1]&arry[i]
// 	}
//     return parseInt(answer, 2);
// }
// console.log(solution(arr))


// 4.
// S = "ABBA"
// function solution(S) {
// 	let split = S.split('');
// 	let count = 0;
// 	while(1){
// 		if(split.length == 0) return 1;
// 		if(split.length == count) return 0;
// 		for(let i = 1; i < split.length; i++){
// 			if(split[i-1] == split[i]){
// 				split.splice(i-1,2)
// 				console.log(split)
// 			}
// 		}
// 		count++;
// 	}
// }
// console.log(solution(S))

// 5.
// A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]
// function solution(A) {
// 	let arr = [];
// 	let sum = 0;
// 	let count = 0;
// 	let prev = 0;
// 	while(count < A.length){
// 		if(count == 0){
// 			sum = A[count][0];
// 		}else{
// 			// console.log('1 : '+ A[count][prev-1], A[count][prev+1])
// 			if(A[count][prev-1] == undefined){
// 				prev = prev + 1;
// 			}
// 			if(A[count][prev-1] != undefined && A[count][prev-1] < A[count][prev+1]){
// 				prev = prev - 1;
// 			}else{
// 				prev = prev + 1;
// 			}
// 			console.log(A[count],prev)
// 			sum += A[count][prev]
// 		}
// 		// console.log(Math.min(...A[count]))
// 		count++;
// 		console.log(sum)
// 	}
// }
// console.log(solution(A))


// 6.
// A = [100000, 99000, 99000, 98000, 97000]
// function solution(A) {
// 	let sum = 0;
// 	for(let i = 0; i < A.length; i++){
// 		if(i % 2){
// 			sum += A[i]
// 		}else{
// 			sum -= A[i]
// 		}
// 	}
// 	return sum > 0 ? sum : 0
// }
// console.log(solution(A))

// 7.
// S1 = "HelloWorld"
// S2 = "WorldHello"
// function solution(S1, S2) {
// 	return S1.slice(S1.indexOf(S2[0])) + S1.slice(0,S1.indexOf(S2[0])) == S2 ? 1 : 0;
// }
// console.log(solution(S1, S2))

// 8.
// A = [14, 1, 15, 6, 8];
// K = 15;
// function solution(A, K) {
// 	A = A.sort(function(x, y){ return x - y; });
// 	let sum = 0;
// 	let count = 0;
// 	if( A[0] > K) return count;
// 	while(sum < K - 1){
// 		sum += A[count]
// 		count++
// 	}
// 	return count;
// }
// console.log(solution(A, K))

// 9.
// A = [1, 2, 3, 4, 5, 6]
// K = 5
// function solution(A, K) {
//     var answer = 0;
//     let count = 0;
// 	let arr = []
// 	for(let i = 0; i < A.length; i++){
// 		if(A[i] % K == 0) answer++;
// 	}
// 	while(count < A.length){
// 		let sum = 0;
// 		for(let i = count; i < A.length; i++){
// 			if( (A[i]+1) == (A[i+1]) ){
// 				sum += A[i+1]
// 			}
// 		}
// 		if(sum % K == 0) answer++;
// 		count++
// 	}
//     return answer;
// }
// console.log(solution(A, K))

// 10.
// A = [[0, 3], [1, 5], [3, 10]]
// function solution(A) {
//     var answer = 0;
// 	// for()
// 	3
// 	3 - 1 + 5 = 7
// 	5 - 3 + 10 = 8
//     return answer;
// }
// console.log(solution(A))


// 1.
// fruits = [-2, 5, -3, 6, 8, -1, -5, 3]
// function solution(fruits) {
// 	let count = 0;
// 	let result = Number.MIN_SAFE_INTEGER;
// 	while(count < fruits.length){
// 		let sum = 0;
// 		for(let i = count; i < fruits.length; i++){
// 			sum += fruits[i];
// 			if(sum > result) result = sum;
// 		}
// 		count++;
// 	}
// 	return result;
// }
// console.log(solution(fruits))

// 2.
// n = 5;
// k = 3;
// function solution(n, k) {
// 	// while( k > 0 ){
// 	// 	for(let i = 0; i < k; i++){
// 	// 		console.log(i,k)
// 	// 	}
// 	// 	k--;
// 	// }
// 	let num = 0;
// 	let sum = 0;
// 	while( k > 0 ){
// 		for(let i = num; i <= k; i++){
// 			sum += i;
// 			console.log(sum)
// 			if( sum < n ){
// 				num++
// 				break;
// 			}
// 		}
// 	}
// }
// console.log(solution(n, k))

// 3.
// arr = [3, 2, 3];
// function solution(arr) {
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	for(let i = 0; i < arr.length; i++){
// 		if( arr[i] <= 0) return 0;
// 	}
// 	return arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3]
// }
// function solution(arr) {
// 	if( arr.length < 3)  return 0;
// 	for(let i = 0; i < arr.length; i++){
// 		if( arr[i] <= 0) return 0;
// 	}
// 	let maxArr = [];
// 	while(maxArr.length < 3){
// 		maxArr.push(Number(arr.splice(arr.indexOf(Math.max(...arr)),1)))
// 	}
// 	let sum = maxArr.reduce(function(acc, itm){
// 		return acc + itm;
// 	})
// 	return sum;
// }
// console.log(solution(arr))

// 4.
// n = 99999;
// function solution(n) {
// 	let squared = 0;
// 	for(let i = 0; i < n; i++){
// 		if(i ** 3 > n) break;
// 		squared = i ** 3;
// 	}
// 	return squared;
// }
// console.log(solution(n))


// 5.
// distance = [1, 2, 8];
// time = [1, 1, 2];
// function solution(distance, time) {
// }
// console.log(solution(distance, time))

// 6.
// puzzle = [
// 	["대", "한", "가", "나"],
// 	["국", "민", "다", "라"],
// 	["마", "바", "사", "아"],
// 	["자", "차", "카", "타"]
// ]
// word = "대한민국"
// function solution(puzzle, word) {
// 	let tb = 0;
// 	let lr = 0;
// 	let count = 0;
// 	let result = 0;
// 	for(let i = 0; i < puzzle.length; i++){
// 		for(let j = 0; j < puzzle[i].length; j++){
// 			if( puzzle[i][j] == word[0]){
// 				tb = i;
// 				lr = j;
// 			}
// 		}
// 	}
// 	while(count < word.length){
// 		let tbM = tb-1;
// 		let tbP = tb+1;
// 		let lrM = lr-1;
// 		let lrP = lr+1;
// 		if( tbM < 0) tbM = 0;
// 		if( tbP > puzzle.length) tbP = puzzle.length - 1;
// 		else if( tbP < 0 ) tbP = 0;
// 		if( lrM > puzzle[tb].length) lrM = puzzle[tb].length - 1;
// 		else if( lrM < 0 ) lrM = 0;
// 		if( lrP < 0) lrP = 0;
// 		// 배열 탐색
// 		if(
// 			puzzle[tbM][lr] == word[count+1] || 
// 			puzzle[tbM][lrM] == word[count+1] || 
// 			puzzle[tbM][lrP] == word[count+1] || 
// 			puzzle[tbP][lr] == word[count+1] || 
// 			puzzle[tbP][lrM] == word[count+1] || 
// 			puzzle[tbP][lrP] == word[count+1] || 
// 			puzzle[tb][lrM] == word[count+1] || 
// 			puzzle[tbM][lrM] == word[count+1] || 
// 			puzzle[tbP][lrM] == word[count+1] || 
// 			puzzle[tb][lrP] == word[count+1] || 
// 			puzzle[tbM][lrP] == word[count+1] || 
// 			puzzle[tbP][lrP] == word[count+1]
// 		){
// 			result++;
// 		}
// 		count++;
// 	}
// 	return result == word.length-1 ? true : false;
// }
// console.log(solution(puzzle, word))

// 7.
// field = [[1, 0, 1], [0, 0, 1], [0, 1, 1]];
// n = 2;
// function solution(field, n) {
// 	let sum = 0;
// 	for(let i = 0; i < field.length; i++){
// 		count = 0;
// 		for(let j = 0; j < field[i].length; j++){
// 			// field[i][j]
// 			count++;
// 			console.log(i,j)
// 			if(count == n) break;
// 		}
// 	}
// }
// console.log(solution(field, n))

// 8.
// arr = [3, 2, 3, 1];
// function solution(arr) {
// 	if( arr.length < 4)  return 0;
// 	for(let i = 0; i < arr.length; i++){
// 		if( arr[i] <= 0) return 0;
// 	}
// 	let maxArr = [];
// 	while(maxArr.length < 4){
// 		maxArr.push(Number(arr.splice(arr.indexOf(Math.max(...arr)),1)))
// 	}
// 	let sum = maxArr.reduce(function(acc, itm){
// 		return acc + itm;
// 	})
// 	return sum;
// }
// console.log(solution(arr))

// 9.
// arr = [4, 1, 3, 2];
// function solution(arr) {
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	let sum = 0;
// 	for(let i = 1; i <= arr.length; i++){
// 		if( i % 2 === 0){
// 			sum += arr[i-1]
// 		}
// 	}
// 	return sum;
// }
// console.log(solution(arr))

// 10.
// p = "?ast*";
// s = ["fastcampus", "fast", "faster", "notfast", "notfaster"]
// function solution(p, s) {
// 	let count = 0;
// 	if( p.includes('*')) p = p.slice(0, p.indexOf('*'));
// 	if( p.includes('?')){
// 		let startp = p.slice(0, p.indexOf('?'));
// 		let endp = p.slice(p.indexOf('?') + 1);
// 		let ends;
// 		for(let i = 0; i < s.length; i++){
// 			if(s[i].startsWith(startp)){
// 				ends = s[i].slice(p.indexOf('?'))
// 				if(ends.startsWith(endp)){
// 					count++;
// 				}
// 			}
// 		}
// 	}else{
// 		for(let i = 0; i < s.length; i++){
// 			if( s[i].startsWith(p) ){
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// }
// console.log(solution(p, s))


// 1.
// s = 'google'
// function solution(s) {
//     var answer = 0;
// 	s = s.split('');
// 	let set = new Set(s)
// 	// return set.size
//     return answer = set.size;
// }
// console.log(solution(s))

// 3.
// arr = ["10110", "1010", "11110"];
// function solution(arr) {
//     var answer = 0;
// 	if(arr.length < 2){
// 		answer = parseInt(arr[0],2)
// 	}else{
// 		answer = parseInt(arr[0],2)|parseInt(arr[1],2)
// 		for(let i = 2; i < arr.length; i++){
// 			answer = answer|parseInt(arr[i],2)
// 		}
// 	}
//     return answer;
// }
// console.log(solution(arr))

// 4.
// arr = [5, 3, 4, 3, 1]
// function solution(arr) {
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	arr.splice(arr.indexOf(Math.max(...arr)),1)
// 	arr.splice(arr.indexOf(Math.min(...arr)),1)
// 	console.log(arr)
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		sum += arr[i]
// 	}
// 	return parseInt(sum/arr.length)
// }
// console.log(solution(arr))

// 5.
// arr = [0, 2, 1, 4, 3, 0]
// function solution(arr) {
// 	let newArr = [];
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i]%2 == 0){
// 			newArr.push(arr[i])
// 		}else{
// 			newArr.push(arr[i])
// 			newArr.push(arr[i])
// 		}
// 	}
// 	newArr.splice(arr.length)
// 	return newArr
// }
// console.log(solution(arr))

// 6.
// n = 3;
// function solution(n) {
// 	let sum = '';
// 	let result = 0;
// 	for(let i = 0; i <= n; i++){
// 		sum += i.toString(2);
// 	}
// 	for(let i = 0; i < sum.length; i++){
// 		result += Number(sum[i]);
// 	}
// 	return result
// }
// console.log(solution(n))

// 7.
// arr = ["Happy new year", "Hello world", "Nice to meet you"]
// function solution(arr) {
// 	let num = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		let newArr = []
// 		newArr = arr[i].split(' ');
// 		if(newArr.length > num) num = newArr.length;
// 	}
// 	return num;
// }
// console.log(solution(arr))

// 8.
// h = 1;
// w = 4;
// function solution(h, w) {
// 	let min = 0;
// 	h < w ? min = h : min = w;
// 	let multiply = (h * w) / min;
// 	if(h == 1 || w == 1) multiply = 1;
// 	return multiply;
// }
// console.log(solution(h, w))

// 9.
// arr = [6, 2, 1, 4]
// K = 2
// function solution(arr, K) {
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	let sum = 0;
// 	for(let i = 1; i <= arr.length; i++){
// 		if( i % K === 0){
// 			sum += arr[i-1]
// 		}
// 	}
// 	return sum;
// }
// console.log(solution(arr, K))

// 10.
// Friends = ["bob", "andrew", "bobby", "ant"]
// Taste = [
// 	["bobby", "ant"],
// 	["bob", "ant"],
// 	["bob"],
// 	["bob", "bobby"],
// 	["andrew", "bobby"],
// 	["andrew", "ant"]
// ]
// function solution(Friends, Taste) {
//     var answer = 0;
// 	for(let i = 0; i < Taste.length; i++){
// 		for(let j = 0; j < Taste[i].length; j++){
// 			if(Friends.includes(Taste[i][j])){
// 				answer += 1/Taste[i].length;
// 				Friends.splice(Friends.indexOf(Taste[i][j]),1);
// 			}
// 		}
// 	}
//     return answer;
// }
// console.log(solution(Friends, Taste))

// 1.
// let s= "Hello world Nice world";
// function solution(s) {
// 	let split = s.split(' ');
// 	let answer = new Set(split);
// 	return answer.size;
// }
// console.log(solution(s));



// 2.
// let arr1 =[1, 7, 8, 4];
// let arr2 = [2, 4, 6, 8];
// function solution(arr1, arr2) {
//     var answer = [];
// 	for(let i = 0; i < arr1.length; i++){
// 		for(let j = 0; j < arr2.length; j++){
// 			if(arr1[i] == arr2[j]){
// 				console.log(arr1[i], arr2[j]);
// 				answer.push(arr1[i]);
// 			}
// 		}
// 	}
// 	answer = answer.sort(function(x, y){ return x - y; });
//     return answer;
// }
// console.log(solution(arr1, arr2));

// 3.
// let arr = [5, 2, 1, 3];
// function solution(arr) {
//     var answer = 0;
// 	arr = arr.sort(function(x, y){ return x - y; });
//     return answer = arr[0];
// }
// console.log(solution(arr));

// 4.
// S = 'ABCXAXYABC';
// function solution(S) {
//     var answer = '';
// 	let split = S.split('');
// 	if( split.includes('X') && split.includes('Y') ){
// 		split.splice(S.indexOf('X'), 1, 'Y');
// 		split.splice(S.lastIndexOf('Y'), 1, 'X');
// 	}
//     return answer = split.join('');
// }
// console.log(solution(S));

// 5.
// finish = ["A", "B", "C", "D"];
// submit = ["B", "C", "D", "E"];
// function solution(finish, submit) {
//     var answer = 0;
// 	for(let i = 0; i < finish.length; i++){
// 		for(let j = 0; j < submit.length; j++){
// 			if(finish[i] == submit[j]){
// 				answer++;
// 			}
// 		}
// 	}
//     return answer;
// }
// console.log(solution(finish, submit));

// 6.
// nums = [1, 3, 5, 3, 2];
// n = 3;
// function solution(nums, n) {
//     var answer = 0;
// 	nums = nums.sort(function(x, y){ return x - y; });
//     return answer = nums.indexOf(n);
// }
// console.log(solution(nums, n));

// 7.
// arr = ["no pain", "no", "gain"];
// function solution(arr) {
//     var answer = 0;
// 	arr = arr.join(' ').split(' ');
// 	let set = new Set(arr);
//     return answer = set.size;
// }
// console.log(solution(arr));

// 8.
// let prices = [5, 10, 3];
// function solution(prices) {
//     var answer = 0;
// 	prices = prices.sort(function(x, y){ return x - y; });
// 	let first = prices[1];
// 	let second = prices[0];
//     return answer = first - second;
// }
// console.log(solution(prices));

// 9.
// let l = [1, 10, 10, 10, 5];
// function solution(l) {
// 	let arr = [];
// 	let result = [];
// 	for(let i = 0; i < l.length; i++){
// 		let num = 0;
// 		for(let j = 0; j < l.length; j++){
// 			if( l[i] <= l[j] ){
// 				num++;
// 			}
// 		}
// 		arr.push(num);
// 	}
// 	for(let i = 0; i < l.length; i++){
// 		result.push(l[i] * arr[i]);
// 	}
// 	return Math.max(...result);
// }
// console.log(solution(l));

// 10.
// let s = 'DACC32';
// function solution(s) {
//     var answer = true;
// 	let code = ['A', 'B', 'C', 'D', 'E', 'F'];
// 	if(s.length != 6) return answer = false;
// 	if(s != s.toUpperCase()) return answer = false;

//     return answer;
// }

// console.log(solution(s));

// 1.
// let s = "work";
// function solution(s) {
//     var answer = [];
// 	s = s.split('');
// 	for(let i = 0; i < s.length; i++){
// 		answer.push(s[i].charCodeAt());
// 	}
//     return answer;
// }
// console.log(solution(s));

// 2.
// let arr = [1, 3, 5, 4, 3, 1, 1];
// function solution(arr) {
//     var answer = true;
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	let set = Array.from(new Set(arr));
// 	let numarr = [];
// 	for(let i = 0; i < set.length; i++){
// 		let count = 0;
// 		for(let j = 0; j < arr.length; j++){
// 			if(set[i] == arr[j]) count++;
// 		}
// 		numarr.push(count);
// 	}
// 	numarr = new Set(numarr);
// 	set.length == numarr.size ? answer = true : answer = false;
//     return answer;
// }
// console.log(solution(arr));

// 3.
// let note = ["dolphin", "B", "B", "A", "A"];
// function solution(note) {
//     var answer = '';
// 	note = note.sort();
// 	let set = Array.from(new Set(note));
// 	let numarr = [];
// 	for(let i = 0; i < set.length; i++){
// 		let count = 0;
// 		for(let j = 0; j < note.length; j++){
// 			if(set[i] == note[j]) count++;
// 		}
// 		numarr.push(count);
// 	}
// 	let reset = 0;
// 	for(let i = 0; i < numarr.length; i++){
// 		if(numarr[i] > reset) {
// 			reset = numarr[i];
// 			answer = set[i];
// 		}
// 	}
//     return answer;
// }
// console.log(solution(note));

// 4.
// let ZERO = [1, 2, 1, 2, 1];
// function solution(ZERO) {
//     var answer = new Set(ZERO).size;
//     return answer;
// }
// console.log(solution(ZERO));

// 5.
// let now = [3, 3, 3];
// let tobe = [5, 2, 1];
// function solution(now, tobe) {
//     var answer = 0;
// 	for(let i = 0; i < now.length; i++){
// 		if(now[i] < tobe[i]){
// 			answer += tobe[i] - now[i];
// 		}else if(now[i] > tobe[i]){
// 			answer += now[i] + tobe[i];
// 		}
// 	}
//     return answer;
// }
// console.log(solution(now, tobe));

// 6.
// let arr = [-5, 2, 1, -1, 3];
// function solution(arr) {
// 	var answer = 0;
// 	arr = arr.sort(function(x, y){ return x - y; });
// 	let arrAbs = [];
// 	for(let i = 0; i < arr.length; i++){
// 		arrAbs.push(Math.abs(arr[i]));
// 	}
// 	let reset = Number.MAX_SAFE_INTEGER;
// 	for(let i = 0; i < arrAbs.length; i++){
// 		if(reset > arrAbs[i]){
// 			reset = arrAbs[i];
// 			answer = arr[i];
// 		}
// 	}
//     return answer;
// }
// console.log(solution(arr));

// 7.
// let grid = [
// 	['1', '1', '1', '1', '0'],
// 	['1', '1', '0', '1', '0'],
// 	['1', '1', '0', '0', '0'],
// 	['0', '0', '0', '0', '0']
// ];
// let grid = [
// 	['1', '1', '0', '0', '0'],
// 	['1', '1', '0', '0', '0'],
// 	['1', '1', '0', '0', '0'],
// 	['0', '0', '1', '0', '0'],
// 	['0', '0', '0', '1', '1']
// ];
// function solution(grid) {
//     var answer = 0;
	
//     return answer;
// }
// console.log(solution(grid));

// 8.
// let N = 4;
// let K = 2;
// function solution(N, K) {
//     var answer = new Array(N);
// 	let nArr = [];
// 	for(let i = 1; i <= N; i++){
// 		nArr.push(i);
// 	}
// 	for(let i = 0; i < nArr.length; i++){
// 		for(let j = 1; j <= nArr.length; j++){
// 			if( Math.abs(nArr[i]-j) == K) {
// 				answer[i] = j;
// 			}
// 		}
// 	}
// 	for(let i = 0; i < answer.length; i++){
// 		if( typeof answer[i] != 'number' ) answer = [-1];
// 	}
//     return answer;
// }
// console.log(solution(N, K));

// 9.
// let arr = ["We can", "give advice", "but we cannot give conduct"];
// function solution(arr) {
// 	arr = arr.join(' ').split(' ').sort();
// 	let answer = Array.from(new Set(arr));
//     return answer;
// }
// console.log(solution(arr));

// 10.
// let cars = [[10, 100], [2, 200], [30, 300]];
// let clients = [[5, 110], [9, 500], [20, 400]];
// function solution(cars, clients) {
//     var answer = 0;
// 	for(let i = 0; i < cars.length; i++){
// 		for(let j = 0; j < clients.length; j++){
// 			if(cars[i][0] >= clients[j][0] && cars[i][1] <= clients[j][1]){
// 				answer++;
// 				clients.splice(j,1);
// 			}
// 		}
// 	}
//     return answer;
// }
// console.log(solution(cars, clients));