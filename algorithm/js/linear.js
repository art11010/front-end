// 2. 배열
// 여러 개체(Entity)값을 순차적으로 나열한 선형 자료 구조
// 대표 속성(property)과 메서드(method)
// 배열 선언 : new Array(), []
// let arr_1 = new Array(10);
// let arr_2 = [];
// console.log(arr_1)	// [ <10 empty items> ]
// console.log(arr_2)	// []

// 배열 크기 및 배열 여부 확인 : Array.length, Array.isArray()
// 배열 추가/삭제 : Array.delete(), Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice(), Array.concat() 등
// 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
// 배열 변형 : Array.sort(), Array.reverse, Array.join()
// 배열 반복 : Array.sort(), Array.forEach(), Array.map(), Array.find(), Array.filter(), Array.reduce()
// 배열 논리 연산 : Array.some(), Array.every()

// 배열 반복문
// 1. for ...length(index 접근)
// 2. for of(element 접근, 변수에 요소를 넣음)
// 3. for in(key(index num) 접근)

// 배열 반복
// 1. Array.sort()
// sort의 문제점 해결
// let nums = [1, -1, 4, 0, 10, 20, 12];
// console.log(nums.sort());
// // 두 가지 변수를 받아 retrun x - y 값이 > 0 일 경우 두 값의 위치 바뀜
// let ascending_num = function(x, y){ return x - y; };
// let descending_num = function(x, y){ return y - x; };
// console.log(nums.sort(ascending_num));
// console.log(nums.sort(descending_num));
// console.log(nums.sort((x, y) => x - y));
// console.log(nums.sort((x, y) => y - x));

// 2. Array.forEach() : 반복 작업
// Array.forEach(function(item, index, array){})
// item : 요소, index : 배열 위치, array : 배열
// let nums = [5, 6, 7];
// nums.forEach(function(itm, idx, arr){
// 	console.log(itm, idx, arr);
// });

// 3. Array.map() : 콜백함수 결과를 '배열로 반환'
// Array.map(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let nums = [1, 2, 3, 4, 5];
// let use_map = nums.map(function(itm, idx, arr){
// 	console.log(itm, idx, arr)
// 	return itm * 2;
// });
// console.log(use_map);

// 4. Array.find() : 조건에 만족하는 '하나의 값' 반환
// Array.find(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let users = [
// 	{name: 'mini', age: 25, job: false},
// 	{name: 'jiji', age: 26, job: false},
// 	{name: 'luving', age: 2728, job: true},
// ]
// let find_job = users.find(function(itm){
// 	return itm.job === false;
// });
// console.log(find_job, find_job.job);
// let find_age = users.find(function(itm){
// 	return itm.age > 25;
// });
// console.log(find_age, find_age.age);

// 5. Array.filter() : 조건에 만족하는 '모든 값' '배열로' 반환
// Array.filter(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let users = [
// 	{name: 'mini', age: 25, job: false},
// 	{name: 'jiji', age: 26, job: false},
// 	{name: 'luving', age: 2728, job: true},
// ]
// let filter_job = users.filter(function(itm){
// 	return itm.job === false;
// });
// console.log(filter_job);
// let filter_age = users.filter(function(itm){
// 	return itm.age > 25;
// });
// console.log(filter_age);

// 6. Array.reduce() : 누적 결과 값 반환
// Array.reduce(function(){accumulator, item, index, array},initial)
// accumulator : 이전 함수 결과
// item : 배열 요소, index : 배열 위치, array : 배열
// initial : loop를 할 초기값 index 설정 (초기값 : 1)
// let nums = [1, 2, 3, 4, 5];
// let call_count = 0;
// console.log('accumulator\titem\tindex');
// let sum = nums.reduce(function(acc, itm, idx, arr){
// 	console.log(acc, '\t\t\t', itm, '\t\t', idx)
// 	// call_count++;
// 	return acc + itm;
// },0);
// console.log(sum);

// 배열 논리 연산
// 1. Array.some() : 조건에 만족하는 값이 하나라도 있을 경우 Boolean 반환
// 빈 배열의 경우 false
// Array.some(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let users = [
// 	{name: 'mini', age: 25, job: false},
// 	{name: 'jiji', age: 26, job: false},
// 	{name: 'luving', age: 2728, job: true},
// ]
// let some_job = users.some(function(user){
// 	console.log(user)
// 	return user.job == false;
// })
// console.log(some_job);
// let some_age = users.some(function(user){
// 	console.log(user)
// 	return user.age < 16;
// })
// console.log(some_age);
// let empty = [].some((item) => item > 16);
// console.log(empty);

// 2. Array.every() : 모든 요소가 조건에 만족하는 경우 Boolean 반환
// 빈 배열의 경우 true
// Array.every(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let users = [
// 	{name: 'mini', age: 25, job: false},
// 	{name: 'jiji', age: 26, job: false},
// 	{name: 'luving', age: 2728, job: true},
// ]
// let every_job = users.every(function(user){
// 	console.log(user)
// 	return user.job == false;
// })
// console.log(every_job);
// let every_age = users.every(function(user){
// 	console.log(user)
// 	return user.age > 16;
// })
// console.log(every_age);
// let empty = [].every((item) => item > 16);
// console.log(empty);

// - - - - - - - - - - - - - - - - - - - -

// 3. 배열 문제 풀이 - 수열 최솟값 위치
// function answer(prmt){
// 	let result = [];
// 	// 내 풀이 ↓
// 	// for(let i = 0; i < prmt.length; i++){
// 	// 	if(prmt[i] == Math.min(...prmt)) result.push(i)
// 	// }
// 	// 정답 풀이 ↓
// 	let min = Number.MAX_SAFE_INTEGER;
// 	for(let i = 0; i < prmt.length; i++){
// 		if(min > prmt[i]) min = prmt[i];
// 	}
// 	let count = 0;
// 	for(let i = 0; i < prmt.length; i++){
// 		if(prmt[i] == min){
// 			result[count++] = i;
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	[5, 2, 10, 2],
// 	[4, 5, 7, 4, 8],
// 	[12, 11, 11, 16, 11, 12]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 4. 배열 문제 풀이 - 체스 세트
// function answer(prmt){
// 	let result = [];
// 	let setting = [1, 1, 2, 2, 2, 8]
// 	// 내 풀이 ↓
// 	// for(let i = 0; i < prmt.length; i++){
// 	// 	result.push(setting[i] - prmt[i]);
// 	// }
// 	// 정답 풀이 ↓
// 	let count = 0;
// 	for(let i = 0; i < prmt.length; i++){
// 		result[count++] = setting[i] - prmt[i];
// 	}
// 	return result;
// }
// let input = [
// 	[0, 1, 2, 2, 2, 7],
// 	[2, 1, 2, 1, 2, 1],
// 	[0, 1, 1, 5, 3, 6]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 5. 배열 문제 풀이 - 두 수 최대 합
// function answer(prmt){
// 	let result = [];
// 	// 내 풀이 ↓
// 	// let max_1 = Math.max(...prmt);
// 	// result.push(max_1);
// 	// prmt.splice(prmt.indexOf(max_1),1)
// 	// let max_2 = Math.max(...prmt);
// 	// result.push(max_2);

// 	// 정답 풀이 ↓
// 	result = prmt[0] > prmt[1] ? [prmt[0], prmt[1]] : [prmt[1], prmt[0]];
// 	for(let i = 2; i < prmt.length; i++){
// 		if(prmt[i] > result[0]){
// 			result[1] = result[0];
// 			result[0] = prmt[i];
// 		}else if(prmt[i] > result[1]){
// 			result[1] = prmt[i];
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	[-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
// 	[3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
// 	[-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14],
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 6. 배열 문제 풀이 - 일곱 난장이
// function answer(prmt){
// 	let result = [];
// 	// 내 풀이 ↓
// 	// let sum = prmt.reduce(function(prev, item){
// 	// 	return prev + item
// 	// },0)
// 	// for(let i = 0; i < prmt.length; i++){
// 	// 	for(let j = i; j < prmt.length; j++){
// 	// 		if( i == j ) continue;
// 	// 		if(prmt[i] + prmt[j] == sum - 100){
// 	// 			prmt.splice(i,1)
// 	// 			prmt.splice(j-1,1)
// 	// 		}
// 	// 	}
// 	// }
// 	// result = prmt
// 	// 정답 풀이 ↓
// 	let sum = -100;
// 	for(let i = 0; i < prmt.length; i++){
// 		sum += prmt[i]
// 	}
// 	let faker = []
// 	for(let i = 0; i < prmt.length; i++){
// 		for(let j = i + 1; j < prmt.length; j++){
// 			if(prmt[i] + prmt[j] == sum){
// 				faker[0] = i;
// 				faker[1] = j;
// 				break;
// 			}
// 		}
// 		if(faker != 0) break;
// 	}
// 	let count = 0;
// 	for(let i = 0; i < prmt.length; i++){
// 		if(faker[0] == i) continue;
// 		if(faker[1] == i) continue;
// 		result.push(prmt[i])
// 	}
// 	return result;
// }
// let input = [
// 	[1, 5, 6, 7, 10, 12, 19, 29, 33],
// 	[25, 23, 11, 2, 18, 3, 28, 6, 37],
// 	[3, 37, 5, 36, 6, 22, 19, 2, 28],
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 7. 배열 문제 풀이 - 나무 그리기
// function answer(prmt){
// 	let result = '\n';
// 	// 내 풀이 ↓
// 	// let arr = [];
// 	// // 1. 총 몇개
// 	// let total = 2 * prmt - 1;
// 	// // 2. 별의 시작 위치
// 	// for(let i = 0; i < prmt; i++){
// 	// 	let str = '';
// 	// 	let start = prmt - i - 1;
// 	// 	let cnt = 2 * i + 1;
// 	// 	for(let j = 0; j < total; j++){
// 	// 		if( j == start){
// 	// 			for(let j = 0; j < cnt; j++){
// 	// 				str += '*';
// 	// 			}
// 	// 		}else{
// 	// 			str += ' ';
// 	// 		}
// 	// 	}
// 	// 	arr.push(str)
// 	// }
// 	// result = arr.join(result);
// 	// 정답 풀이 ↓
// 	let str = '\n';
// 	for(let i = 0; i < prmt; i++){
// 		// 1. 공백처리 ' '
// 		for(let j = 0; j < prmt - i - 1; j++){
// 			str += ' ';
// 		}
// 		// 2. * 처리 2n+1
// 		for(let j = 0; j < 2 * i+1; j++){
// 			str += '*';
// 		}
// 		// 3.개행문자 추가
// 		str += '\n';
// 	}
// 	result = str;
// 	return result;
// }
// let input = [3, 5, 7]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 8. 배열 문제 풀이 - Two Sum
// function answer(prmt, target){
// 	// 내 풀이 ↓
// 	// for(let i = 0; i < prmt.length; i++){
// 	// 	for(let j = i + 1; j < prmt.length; j++){
// 	// 		if(prmt[i] + prmt[j] == target){
// 	// 			return [i, j];
// 	// 		}
// 	// 	}
// 	// }
// 	// 정답 풀이 ↓
// 	let map = {};	//key, value
// 	for(let i = 0; i < prmt.length; i++){
// 		if(map[target - prmt[i]] != undefined){
// 			return [ map[target - prmt[i]], i ]
// 		}
// 		map[prmt[i]] = i;
// 	}
// 	return [];
// }
// let input = [
// 	[[2, 7, 11, 15], 9],
// 	[[3, 2, 4], 6],
// 	[[3, 3], 6],
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 9. 배열 문제 풀이 - OX 퀴즈
// function answer(prmt){
// 	let result = 0;
// 	let count = 0;
// 	for(let i = 0; i < prmt.length; i++){
// 		if( prmt[i] == 0) count = 0;
// 		else count++;
// 		result += count;
// 	}
// 	return result;
// }
// let input = [
// 	[1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
// 	[1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
// 	[1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 10. 배열 문제 풀이 - 벽돌 옮기기
// function answer(prmt){
// 	let result = 0;
// 	// 내 풀이 ↓
// 	// let sum = prmt.reduce(function(prev, item){
// 	// 	return prev + item
// 	// });
// 	// sum = sum / prmt.length;
// 	// for( let i = 0; i < prmt.length; i++){
// 	// 	if(prmt[i] > sum){
// 	// 		result += prmt[i] - sum;
// 	// 	}
// 	// }
// 	// 정답 풀이 ↓
// 	let sum = 0;
// 	for( let i = 0; i < prmt.length; i++){
// 		sum += prmt[i]
// 	}
// 	sum /= prmt.length;
// 	for( let i = 0; i < prmt.length; i++){
// 		if(prmt[i] > sum){
// 			result += prmt[i] - sum;
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	[5, 2, 4, 1, 7, 5],
// 	[12, 8, 10, 11, 9, 5, 8],
// 	[27, 14, 19, 11, 26, 25, 23, 15]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 11. 배열 문제 풀이 - 숫자 빈도수 구하기
// function answer(s, e){
// 	let result = [];
// 	// 내 풀이 ↓
// 	// let str = '';
// 	// for( let i = s; i <= e; i++ ){
// 	// 	str += i;
// 	// }
// 	// for( let i = 0; i < 10; i++){
// 	// 	let count = 0;
// 	// 	for( let j = 0; j < str.length; j++){
// 	// 		if( i == str[j] ) { count++; }
// 	// 	}
// 	// 	result[i] = count;
// 	// }
// 	// 정답 풀이 ↓
// 	for( let i = 0; i < 10; i++ ){
// 		result[i] = 0;
// 	}
// 	for( let i = s; i <= e; i++ ){
// 		let num = i;
// 		while(num != 0){
// 			result[num % 10]++;
// 			num /= 10;
// 			num = parseInt(num);
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	[129, 137],
// 	[1412, 1918],
// 	[4159, 9182]
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 12. 배열 문제 풀이 - 달팽이 만들기
// function answer(prmt){
// 	let result = [];
// 	// 1. result -> 2차원 배열
// 	for( let i = 0; i < prmt; i++){
// 		result[i] = [];
// 	}

// 	// 2. 반목문 패턴 구현
// 	// 1) prmt 길이만큼 시작해서 숫자를 채워준다.
// 	// 2) prmt - i, 방향, 2회
// 	// 3) prmt == 0, 프로그램이 멈춘다.
// 	let direction = 1;
// 	let x, y, num;
// 	x = y = num = 0;
// 	x--;
// 	while(1){
// 		for( let i = 0; i < prmt; i++ ){
// 			x += direction;
// 			result[y][x] = ++num;
// 		}
// 		prmt--;
// 		if( prmt == 0 ) break;
// 		for( let j = 0; j < prmt; j++ ){
// 			y += direction;
// 			result[y][x] = ++num;
// 		}
// 		direction *= -1;
// 	}
// 	return result;
// }
// let input = [3, 5, 6]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 13. 프로토타입(prototype)
// 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
// 자바스크립트는 일반적인 객체이향 언어와는 다르게 프로토타입을 복사(Cloning)하여 새로운 객체 생성
// 일반적인 객체 생성 방식 : 속성은 생성자, 메서드는 프로토타입에서 정의
// 생성자 속성 정의
// function Test(a, b){
// 	// 속성 정의
// }
// // 첫번째 메소드 정의
// Test.prototype.x = function(){ ... };
// // 두번째 메소드 정의
// Test.prototype.y = function(){ ... };
// // 객체 생성
// let test = new Test(1, 2);

// 프로토타입 예제
// // 생성자에서 속성 정의
// function Person(name, age){
// 	this.name = name;
// 	this.age = age;
// }
// // 메소드 정의
// Person.prototype.isAudlt = function(){
// 	return this.age > 18;
// }
// // 객체 생성
// const p1 = new Person('bob', 26);
// const p2 = new Person('alice', 16);
// // 객체 메소드 호출
// console.log(p1, p1.isAudlt(), Object.getOwnPropertyDescriptors(p1));
// console.log(p2, p2.isAudlt(), Object.getOwnPropertyDescriptors(p2));

// - - - - - - - - - - - - - - - - - - - -

// 14. 연결 리스트(Linked List)
// 각 노드가 데이터와 포인터를 가지며, '한 줄'로 연결되어 데이터를 저장하는 자료 구조
// 구현 메서드(method)
// 노드 개수 : LinkedList.size()
// 비어 있는지 확인 : LinkedList.isEmpty()
// 노드 출력 : LinkedList.printNode()
// 노드 추가 : LinkedList.append(), LinkedList.insert()
// 노드 삭제 : LinkedList.remove(), LinkedList.removeAt()
// 데이터 위치 확인 : LinkedList.indexOf()

// - - - - - - - - - - - - - - - - - - - -

// 15. 연결 리스트 구현하기(1)
// Node() : data와 point를 가지고 있는 객체
function Node(data){
	this.data = data;
	this.next = null;
}
// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList(){
	this.head = null;
	this.length = 0;
}
// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function(){
	return this.length;
};
// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function(){
	return this.length === 0;
};
// Test code
// let ll = new LinkedList();
// console.log(ll);

// ll.head = new Node(123);
// ll.length++;
// console.log(ll);

// ll.head.next = new Node(456);
// ll.length++;
// console.log(ll);


// - - - - - - - - - - - - - - - - - - - -

// 16. 연결 리스트 구현하기(2)
// printNode() : 노드 출력
LinkedList.prototype.printNode = function(){
	for(let node = this.head; node != null; node = node.next){
		process.stdout.write(`${node.data} -> `);	// js 내장 함수
	}
	console.log('null');
};
// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value){
	let node = new Node(value),
		current = this.head;

	if(this.head === null){
		this.head = node;
	}else{
		while(current.next != null){
			current = current.next;
		}
		current.next = node;
	}
	this.length++;
};
// Test code
// let ll = new LinkedList();

// ll.append(1);
// ll.append(10);
// ll.append(100);

// ll.printNode();
// console.log(ll.size());

// - - - - - - - - - - - - - - - - - - - -

// 17. 연결 리스트 구현하기(3)
// insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value, position = 0){
	if(position < 0 || position > this.length){
		return false;
	}
	let node = new Node(value),
		current = this.head,
		index = 0,
		prev;

	if(position == 0){
		node.next = current;
		this.head = node;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}

		node.next = current;
		prev.next = node;
	}
	this.length++;
	return true;
};

// Test code
// let ll = new LinkedList();

// ll.insert(1);
// ll.insert(10);
// ll.insert(100);
// ll.printNode();

// ll.insert(2, 1);
// ll.insert(3, 3);
// ll.printNode();
// console.log(ll.size());

// - - - - - - - - - - - - - - - - - - - -

// 18. 연결 리스트 구현하기(4)
// remove() : 'value 데이터를 찾아' 노드 삭제
LinkedList.prototype.remove = function(value){
	let current = this.head,
		prev = current;
	while(current.data != value && current.next != null){
		prev = current;
		current = current.next;
	}
	if(current.data != value){
		return null;
	}
	if(current === this.head){
		this.head = current.next;
	}else{
		prev.next = current.next;
	}
	this.lenght--;
	return current.data;
};

// Test code
// let ll = new LinkedList();
// ll.insert(1);
// ll.insert(10);
// ll.insert(100);
// ll.insert(2, 1);
// ll.insert(3, 3);
// ll.printNode();

// console.log(ll.remove(1000));
// ll.printNode();
// console.log(ll.remove(1));
// ll.printNode();
// console.log(ll.remove(2));
// ll.printNode();
// console.log(ll.remove(100));
// ll.printNode();
// console.log(ll.size());


// - - - - - - - - - - - - - - - - - - - -

// 19. 연결 리스트 구현하기(5)
// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position = 0){
	if(position < 0 || position >= this.length){
		return null;
	}
	let current = this.head,
		index = 0,
		prev;
	if(position == 0){
		this.head = current.next;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}
		prev.next = current.next;
	}
	this.length--;
	return current.data;
};
// Test code
// let ll = new LinkedList();
// ll.insert(1);
// ll.insert(10);
// ll.insert(100);
// ll.insert(2, 1);
// ll.insert(3, 3);
// ll.printNode();

// console.log(ll.removeAt(1000));
// ll.printNode();
// console.log(ll.removeAt(4));
// ll.printNode();
// console.log(ll.removeAt());
// ll.printNode();
// console.log(ll.removeAt(1));
// ll.printNode();
// console.log(ll.size());

// - - - - - - - - - - - - - - - - - - - -

// 20. 연결 리스트 구현하기(6)
// indexOf() : value 값을 갖는 노드 '위치' 반환
LinkedList.prototype.indexOf = function(value){
	let current = this.head,
		index = 0;
	while(current != null){
		if(current.data === value){
			return index;
		}
		index++;
		current = current.next;
	}
	return -1;
};

// removeIdx() : indexOf + removeAt = remove
LinkedList.prototype.removeIdx = function(value){
	let index = this.indexOf(value);
	return this.removeAt(index);
};

// Test code
// let ll = new LinkedList();
// ll.insert(1);
// ll.insert(10);
// ll.insert(100);
// ll.insert(2, 1);
// ll.insert(3, 3);
// ll.printNode();

// console.log(ll.indexOf(1000));
// console.log(ll.indexOf(1));
// console.log(ll.indexOf(100));
// console.log(ll.indexOf(10));

// console.log(ll.removeIdx(1000));
// ll.printNode();
// console.log(ll.removeIdx(4));
// ll.printNode();
// console.log(ll.removeIdx());
// ll.printNode();
// console.log(ll.removeIdx(1));
// ll.printNode();
// console.log(ll.size());

// - - - - - - - - - - - - - - - - - - - -

// 21. 이중 연결 리스트
// 각 노드가 데이터와 포인터를 가지며, '두 줄'로 연결되어 데이터를 저장하는 자료 구조
// 구현 메서드(method)
// 노드 개수 : DoubleLinkedList.size()
// 비어 있는지 확인 : DoubleLinkedList.isEmpty()
// 노드 출력ㆍ역출력 : DoubleLinkedList.printNode(), DoubleLinkedList.printNodeInverse()
// 노드 추가 : DoubleLinkedList.append(), DoubleLinkedList.insert()
// 노드 삭제 : DoubleLinkedList.remove(), DoubleLinkedList.removeAt()
// 데이터 위치 확인 : DoubleLinkedList.indexOf()

// - - - - - - - - - - - - - - - - - - - -

// 22. 이중 연결 리스트 구현하기(1), (2)
// Node() : data와 point를 가지고 있는 객체
function DoubleNode(data){
	this.data = data;
	this.next = null;
	this.prev = null;
}
// DoubleLinkedList() : head와 length를 가지고 있는 객체
function DoubleLinkedList(){
	this.head = null;
	this.tail = null;
	this.length = 0;
}
// (1)
// size() : 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function(){
	return this.length;
};
// isEmpty() : 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function(){
	return this.length === 0;
};

// Test code
// let dll = new DoubleLinkedList();
// let node = new DoubleNode();
// console.log(dll);

// dll.head = node;
// dll.tail = node;
// dll.length++;
// console.log(dll);

// node = new Node(456);
// dll.tail.next = node;
// node.prev = dll.tail;
// dll.tail = node;
// dll.length++;
// console.log(dll);

// (2)
// printNode() : 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function(){
	process.stdout.write('head -> ');
	for(let node = this.head; node != null; node = node.next){
		process.stdout.write(`${node.data} -> `);
	}
	console.log('null');
};

// printNodeInverse() : 노트 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function(){
	let temp = [];
	process.stdout.write('null <- ');
	for(let node = this.tail; node != null; node = node.prev){
		temp.push(node.data);
	}
	for(let i = temp.length - 1; i >= 0; i--){
		process.stdout.write(`${temp[i]} <- `);
	}
	console.log('tail');
};

// append() : 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function(value){
	let node = new DoubleNode(value);
	if(this.head === null){
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
	this.length++;
};

// Test code
// let dll = new DoubleLinkedList();
// dll.append(1);
// console.log(dll);
// dll.append(10);
// dll.append(100);

// dll.printNode();
// dll.printNodeInverse();

// - - - - - - - - - - - - - - - - - - - -

// 23. 이중 연결 리스트 구현하기(3), (4)
// (3)
// insert() : position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function(value, position = 0){
	if(position < 0 || position > this.length){
		return false;
	}
	let node = new DoubleNode(value),
		current = this.head,
		index = 0,
		prev;
	if(position === 0){
		if(this.head === null){
			this.head = node;
			this.tail = node;
		}else{
			node.next = current;
			current.prev = node;
			this.head = node;
		}
	}else if(position === this.length){
		current = this.tail;
		current.next = node;
		node.prev = current;
		this.tail = node;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}
		node.next = current;
		prev.next = node;

		current.prev = node;
		node.prev = prev;
	}
	this.length++;
	return true;
};

// Test code
// let dll = new DoubleLinkedList();
// dll.insert(1);
// dll.insert(10);
// dll.insert(100);
// dll.printNode();
// dll.printNodeInverse();

// dll.insert(2, 1);
// dll.insert(3, 3);
// dll.printNode();
// dll.printNodeInverse();

// (4)
// remove() : value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function(value){
	let current = this.head,
		prev = current;
	while(current.data != value && current.next != null){
		prev = current;
		current = current.next;
	}

	if(current.data != value){
		return null;
	}

	if(current === this.head){
		this.head = current.next;
		if(this.length === 1) {this.tail = null; console.log('hi');}
		else this.head.prev = null;
	}else if(current === this.tail){
		this.tail = current.prev;
		this.tail.next = null;
	}else{
		prev.next = current.next;
		current.next.prev = prev;
	}

	this.length--;

	return current.data;
};

// Test code
// let dll = new DoubleLinkedList();

// dll.insert(1);
// dll.insert(10);
// dll.insert(100);
// dll.insert(2, 1);
// dll.insert(3, 3);
// dll.printNode();
// dll.printNodeInverse();

// console.log(dll.remove(1000));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove(1));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove(2));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove(100));
// dll.printNode();
// dll.printNodeInverse();

// - - - - - - - - - - - - - - - - - - - -

// 24. 이중 연결 리스트 구현하기(5)
DoubleLinkedList.prototype.removeAt = function(position = 0){
	if(position < 0 || position >= this.length){
		return null;
	}
	let current = this.head,
		index = 0,
		prev;
	if(position === 0){
		this.head = current.next;
		if(this.length === 1) this.tail = null;
		else this.head.prev = null;
	}else if(position === this.length - 1){
		current = this.tail;
		this.tail = current.prev;
		this.tail.next = null;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}
		prev.next = current.next;
		current.next.prev = prev;
	}

	this.length;

	return current.data;
};

// Test code
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.removeAt(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt(4));
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt());
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt(1));
dll.printNode();
dll.printNodeInverse();






// - - - - - - - - - - - - - - - - - - - -

// 내 풀이 ↓
// 정답 풀이 ↓
// function answer(prmt){
// 	let result = '';
// 	return result;
// }
// let input = [
	
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
// }
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]));
// }