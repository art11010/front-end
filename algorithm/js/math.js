// 2. 알고리즘 복잡도
// 시간 복잡도
// 단위 연산을 몇 번 수행하는지를 계산하여 알고리즘 수행시간 평가
// big-O(빅오) : '최악의 상황'을 고려한 성능 측정 결과
// θ(세타) : '평균 상황'을 고려한 성능 측정 결과(big-θ)
// Ω(오메가) : '최선의 상황'을 고려한 성능 측정 결과(big-Ω)

// big-O(빅오)의 복잡도(뒤로 갈수록 느림)
// O(log n),O(1) > O(n) > O(n log n) > O(n^2) > O(2^n) > O(n!)

// // O(log n) : n*2로 하여 n보다 빠름
// function big_o( n){
// 	let sum = 0;
// 	for(let i = 0; i < n; i *= 2){
// 		sum += 2;
// 	}
// 	return sum;
// }
// // O(1) : 상수
// function big_o(n){
// 	let sum = 0;
// 	sum = n * 2;
// 	return sum;
// }
// // O(n) : for문 1개
// function big_o(arr, n){
// 	let sum = 0;
// 	for(let i = 0; i < n; i++){
// 		sum += arr[i];
// 	}
// 	return sum;
// }
// // O(n^2) : for문 2개
// function big_o(arr, n){
// 	let sum = 0;
// 	for(let i = 0; i < n; i++){
// 		for(let i = 0; i < n; i++){
// 			sum += arr[i][j];
// 		}
// 	}
// 	return sum;
// }

// - - - - - - - - - - - - - - - - - - - -

// 3. 경우의 수
// 완전 탐색 : 순열, 조합, 중복 순열
// 순열 : 서로 다른 n개의 원소 중 r을 중복 없이 골라 '순서에 상관 있게' 나열(nPr)
// 조합 : 서로 다른 n개의 원소 중 r을 중복 없이 골라 '순서에 상관 없이' 나열(nCr)
// 중복 순열 : 서로 다른 n개의 원소 중 r을 '중복 있게' 골라 순서에 상관 있게 나열(nH)

// - - - - - - - - - - - - - - - - - - - -

// 4. 순열
// 서로 다른 n개의 원소 중 r을 중복 없이 골라 '순서에 상관 있게' 나열(nPr = n! / (n-r)!)

// 순열 예제 : for문, for의 개수 -> 뽑는 개수 -> r : 3
// let input = ['a', 'b', 'c'];
// let count = 0;
// function permutation(arr){
// 	// for i -> [i, 0, 0]
// 	for(let i = 0; i < arr.length; i++){
// 		// for j -> [i, j, 0]
// 		for(let j = 0; j < arr.length; j++){
// 			if(i == j) continue;
// 			// for k -> [i, j, k]
// 			for(let k = 0; k < arr.length; k++){
// 				if(i == k) continue;
// 				if(j == k) continue;
// 				console.log(arr[i], arr[j], arr[k]);
// 				count++;
// 			}
// 		}
// 	}
// }
// permutation(input);
// console.log(count);

// 순열 예제 : 재귀함수(자기 자신인 함수를 계속 호출하는 것)
// let input = ['a', 'b', 'c'];
// let count = 0;
// // function permutation(배열, startIdx, endIdx){}
// function permutation(arr, s, r){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(s == r){
// 		count++;
// 		console.log('join : ' + arr.join(' '));
// 		return;
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	for(let i = s; i < arr.length; i++){
// 		// console.log(s,i);
// 		[arr[s], arr[i]] = [arr[i], arr[s]];	// swap
// 		permutation(arr, s + 1, r);
// 		[arr[s], arr[i]] = [arr[i], arr[s]];	// 원상복귀
// 	}
// }
// permutation(input, 0, 2);
// console.log(count);

// - - - - - - - - - - - - - - - - - - - -

// 5. 조합
// 서로 다른 n개의 원소 중 r을 중복 없이 골라 '순서에 상관 없이' 나열(nCr = n! / (n-r)!r!)

// 조합 예제 : for문, for의 개수 -> 뽑는 개수 -> r : 2
// let input = [1, 2, 3, 4];
// let count = 0;
// function combination(arr){
// 	for(let i = 0; i < arr.length; i++){
// 		for(let j = i + 1; j < arr.length; j++){
// 			count++;
// 			console.log(arr[i], arr[j]);
// 		}
// 	}
// }
// combination(input);
// console.log(count);

// 조합 예제 : 재귀함수(자기 자신인 함수를 계속 호출하는 것)
// let input = [1, 2, 3, 4];
// let output = [];	// 뽑은 애들을 output에 저장
// let count = 0;
// // function permutation(배열, output에 저장될 매개변수, startIdx, currentIdx, endIdx){}
// function combination(arr, data, s, idx, r){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(s == r){
// 		count++;
// 		console.log(data);
// 		return;
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	for(let i = idx; arr.length - i >= r - s; i++){
// 		data[s] = arr[i];
// 		combination(arr, data, s + 1, i + 1, r);
// 	}
// }
// combination(input, output, 0, 0, 2);
// console.log(count);

// - - - - - - - - - - - - - - - - - - - -

// 6. 점화식 = 재귀식
// 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
// 등차 수열 : F(n) = F(n - 1) + a
// 등비 수열 : F(n) = F(n - 1) * a
// 팩토리얼 : F(n) = F(n - 1) * n
// 피보나치 수열 : F(n) = F(n - 1) + F(n - 2)


// 등차 수열 : F(n) = F(n - 1) + a
// 1. for문
// let result;
// function forloop(초기값, 차이값, 반복횟수){}
// function forloop(s, t, number){
// 	let acc = 0;
// 	for(let i = 1; i <= number; i++){
// 		if(i == 1)
// 			acc += s;
// 		else
// 			acc += t;
// 		console.log(i, acc);
// 	}
// 	return acc;
// }
// result = forloop(3, 2, 5);
// console.log(result);

// 2. 재귀함수
// let result;
// // function forloop(초기값, 차이값, 반복횟수){}
// function recursive(s, t, number){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(number == 1){
// 		return s;
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	return recursive(s, t, number - 1) + t;
// }
// result = recursive(3, 2, 5);
// console.log(result);

// 등비 수열 : F(n) = F(n - 1) * a
// 1. for문
// let result;
// function forloop(s, t, number){
// 	let acc = 1;
// 	for(let i = 1; i <= number; i++){
// 		if(i == 1)
// 			acc *= s;
// 		else
// 			acc *= t;
// 		console.log(i, acc)
// 	}
// 	return acc;
// }
// result = forloop(3, 2, 5);
// console.log(result);

// 2. 재귀함수
// let result;
// // function forloop(초기값, 차이값, 반복횟수){}
// function recursive(s, t, number){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(number == 1){
// 		return s;
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	return recursive(s, t, number - 1) * t;
// }
// result = recursive(3, 2, 5);
// console.log(result);

// 팩토리얼 : F(n) = F(n - 1) * n
// let result;
// function recursive(number){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(number == 1){
// 		return number;
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	return recursive(number - 1) * number;
// }
// result = recursive(5);
// console.log(result);

// 피보나치 수열 : F(n) = F(n - 1) + F(n - 2)
// let result;
// function recursive(number){
// 	// 1. 재귀함수를 멈춰야할 조건
// 	if(number == 1 || number == 0){
// 		return number
// 	}
// 	// 2. 메인 로직(재귀를 돌면서 변경되어야할 부분)
// 	return recursive(number - 1) + recursive(number - 2)
// }
// result = recursive(5);
// console.log(result);

// 기본 재귀
// function recursive(num){
// 	if(num == 0) return;
// 	console.log('1 : ' + num);
// 	recursive(--num);
// 	console.log('2 : ' + num);
// }
// recursive(3);

// !더하기 재귀함수
// function recursive(num){
// 	if(num == 0) return 0;
// 	console.log('1 : ' + num);
// 	return num + recursive(--num);
// 	console.log('2 : ' + num);
// }
// // 함수가 있는 곳에 함수의 return 값이 들어가는 거!!!!!
// // 3 + (2 + (1 + (0))) = 6
// recursive(3);

// 팩토리얼
// function factorial(num){
// 	if(num == 0) return 1;
// 	return num * factorial(num-1);
// }
// // 4 * (3 * (2 * (1))) = 24
// console.log(factorial(4));