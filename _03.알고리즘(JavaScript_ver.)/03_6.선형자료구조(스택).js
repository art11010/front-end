// 32. 스택 (Stack)
// 나중에 넣은 데이터가 먼저 나오는 LIFO(Last In First Out, 팬케이크!!) 기반의 선형 자료 구조
// 문서를 작성할 때 ctrl + z 같은 것도 스택 기반, 웹브라우저 페이지 이동(뒤로가기)도 스택 기반
// 구현 메서드(method)
// 데이터 전체 획득 : Stack.getBuffer()
// 비어 있는지 확인 : Stack.inEmpty()
// 데이터 추가 : Stack.push()
// 데이터 삭제 : Stack.pop()
// 가장 끝 데이터 반환 : Stack.peak()
// 데이터 크기 확인 : Stack.size()
// 데이터 위치 : Stack.indexOf()
// 존재 여부 확인 : Stack.includes()

// - - - - - - - - - - - - - - - - - - - -

// 33. 스택 구현하기
// Stack() : 생성자 함수로 초기 데이터 설정
function Stack(array){
	this.array = array ? array : [];
	// array 가 있을 경우 this.array = array
	// array 가 없을 경우 this.array = []
}

// prototype를 이용해 새로운 메서드(method) 추가

// getBuffer() : 객체 내 데이터 셋 반환(this.array를 복사 후 반환)
Stack.prototype.getBuffer = function(){
	return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
};

// Test code
// let stack = new Stack([1, 2, 3]);
// console.log(stack);					// Stack { array: [ 1, 2, 3 ] }

// let data = stack.getBuffer();
// console.log(data);					// [ 1, 2, 3 ]
// console.log(data === stack.array);	// false
// console.log(stack.isEmpty());		// false
// console.log(Object.getOwnPropertyDescriptors(Stack.prototype));	// 객체 내부 확인

// push() : 데이터 추가
Stack.prototype.push = function(element){
	return this.array.push(element);
};

// pop() : 데이터 삭제
Stack.prototype.pop = function(){
	return this.array.pop();
};

// peak() : 가장 끝 데이터 반환
Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
};

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function(){
	return this.array.length;
};

// Test code
// let stack = new Stack([1, 2]);
// console.log(stack);			// Stack { array: [ 1, 2 ] }
// stack.push(3);
// console.log(stack);			// Stack { array: [ 1, 2, 3 ] }

// console.log(stack.pop());	// 3
// console.log(stack.pop());	// 2
// console.log(stack.peek());	// 1
// console.log(stack.size());	// 1

// indexOf() : 데이터 위치 값 조회
Stack.prototype.indexOf = function(element, position = 0){
	/* case 1 */
	// return this.array.indexOf(element, position);

	/* case 2 */
	for(let i = position; i < this.array.length; i++){
		if(element == this.array[i]) return i;
	}

	return -1;
};

// includes() : 데이터 존재 여부 확인
Stack.prototype.includes = function(element, position = 0){
	/* case 1 */
	// return this.array.includes(element);

	/* case 2 */
	for(let i = position; i < this.array.length; i++){
		if(element == this.array[i]) return true;
	}

	return false;
};

// Test code
// let stack = new Stack([1, 2, 3]);
// console.log(stack.indexOf(1));		// 0
// console.log(stack.indexOf(1, 2));	// -1
// console.log(stack.includes(1));		// true
// console.log(stack.includes(1, 2));	// false

// - - - - - - - - - - - - - - - - - - - -

// 34. 스택 문제 풀이 - 기차 운행
// if(!Array.prototype.peek){
// 	Array.prototype.peek = function(){
// 		return this[this.length - 1];
// 	};
// }
// if(!Array.prototype.isEmpty){
// 	Array.prototype.isEmpty = function(){
// 		return this.length == 0;
// 	};
// }

// function answer(train){
// 	let stack = [];
// 	let num = 0;
// 	for(let i = 0; i < train.length; i++){
// 		while(stack.isEmpty() || stack.peek() < train[i]){
// 			stack.push(++num);
// 		}
// 		if(stack.peek() == train[i]){
// 			stack.pop();
// 		}else{
// 			return false;
// 		}
// 	}
// 	return true;
// }

// let input = [
// 	[1, 2, 3],
// 	[3, 2, 1],
// 	[3, 1, 2]
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 35. 스택 문제 풀이 - 괄호 짝 찾기
// if(!Array.prototype.peek){
// 	Array.prototype.peek = function(){
// 		return this[this.length - 1];
// 	};
// }
// if(!Array.prototype.isEmpty){
// 	Array.prototype.isEmpty = function(){
// 		return this.length == 0;
// 	};
// }

// function answer(str){
// 	let result = [];
// 	let stack = [];
// 	for(let i = 0; i < str.length; i++){
// 		if(str[i] == '('){
// 			stack.push(i);
// 		}else if(str[i] == ')'){
// 			if(stack.isEmpty()){
// 				return [];
// 			}
// 			result.push([stack.pop(), i]);
// 		}
// 	}
// 	if(!stack.isEmpty()) return [];
// 	return result;
// }

// let input = [
// 	'(a+b)',
// 	'(a*(b+c)+d)',
// 	'(a*(b+c)+d+(e)',
// 	'(a*(b+c)+d)+e)',
// 	'(a*(b+c)+d+(e*(f+g)))'
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 36. 스택 문제 풀이 - 접시 꺼내기
// if(!Array.prototype.peek){
// 	Array.prototype.peek = function(){
// 		return this[this.length - 1];
// 	};
// }
// if(!Array.prototype.isEmpty){
// 	Array.prototype.isEmpty = function(){
// 		return this.length == 0;
// 	};
// }

// function answer(str){
// 	let result = [];
// 	let stack = [];
// 	let dish = str.split('').sort().join('');
// 	let dish_index = 0;
// 	for(let i = 0; i < str.length; i++){
// 		while(stack.isEmpty() || stack.peek() < str[i]){
// 			stack.push(dish[dish_index++]);
// 			result.push(0);
// 		}
// 		if(stack.isEmpty() || stack.peek() > str[i]){
// 			return [];
// 		}else{
// 			stack.pop();
// 			result.push(1);
// 		}
// 	}
// 	return result;
// }

// let input = [
// 	'bacd',
// 	'dabc',
// 	'edcfgbijha'
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 37. 스택 문제 풀이 - 소들의 시야 기린의 시야
// if(!Array.prototype.peek){
// 	Array.prototype.peek = function(){
// 		return this[this.length-1];
// 	};
// }
// if(!Array.prototype.isEmpty){
// 	Array.prototype.isEmpty = function(){
// 		return this.length == 0;
// 	};
// }

// function answer(giraffe){
// 	let result = 0;
// 	// 내 풀이 ↓
// 	// for(let i = 0; i < giraffe.length; i++){
// 	// 	for(let j = i; j < giraffe.length; j++){
// 	// 		if(i == j) continue;
// 	// 		if(giraffe[i] >= giraffe[j]){
// 	// 			result++;
// 	// 		}else{
// 	// 			break;
// 	// 		}
// 	// 	}
// 	// }

// 	// 정답 풀이 ↓
// 	let stack = [];
// 	giraffe.push(Number.MAX_SAFE_INTEGER);
// 	for(let i = 0; i < giraffe.length; i++){
// 		while(!stack.isEmpty() && stack.peek()['h'] < giraffe[i]){
// 			result += i - stack.pop()['i'] - 1;
// 		}
// 		stack.push({h: giraffe[i], i: i});
// 	}
// 	return result;
// }

// let input = [
// 	[10, 3, 7, 4, 12, 2],
// 	[7, 4, 12, 1, 13, 11, 12, 6],
// 	[20, 1, 19, 18, 15, 4, 6, 8, 3, 3]
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 38. 스택 문제 풀이 - 괄호 계산
if(!Array.prototype.peek){
	Array.prototype.peek = function(){
		return this[this.length - 1];
	};
}
if(!Array.prototype.isEmpty){
	Array.prototype.isEmpty = function(){
		return this.length == 0;
	};
}

function answer(str){
	let result = 0;
	let stack = [];
	let temp = 1;
	for(let i = 0; i < str.length; i++){
		let mark = str[i];
		switch(mark){
			case '(':
				temp *= 2;
				stack.push(mark);
				break;
			case '[':
				temp *= 3;
				stack.push(mark);
				break;
			case ')':
				if(stack.isEmpty() || stack.peek() != '(') return 0;
				if(str[i - 1] == '(') result += temp;
				stack.pop();
				temp /= 2;
				break;
			case ']':
				if(stack.isEmpty() || stack.peek() != '[') return 0;
				if(str[i - 1] == '[') result += temp;
				stack.pop();
				temp /= 3;
				break;
		}
	}
	if(!stack.isEmpty()) return 0;
	return result;
}

let input = [
	'(()[[]])',
	'[][]((])',
	'(()[[]])([])'
];
for(let i = 0; i < input.length; i++){
	process.stdout.write(`${i + 1}. `);
	console.log(answer(input[i]));
}

// - - - - - - - - - - - - - - - - - - - -


// 내 풀이 ↓
// 정답 풀이 ↓