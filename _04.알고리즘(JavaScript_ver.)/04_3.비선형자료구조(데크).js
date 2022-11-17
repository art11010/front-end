// 9. 데크 (Deque)
// Double-Ended Queue의 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는비선형 자료 구조
// 구현 메서드(method)
// 데이터 전체 획득 : Deque.getBuffer()
// 비어 있는지 확인 : Deque.isEmpty()
// 데이터 추가 : Deque.pushFront(), Deque.pushBack()
// 데이터 삭제 : Deque.popFront(), Deque.popBack()
// 첫번째 데이터 : Deque.front()
// 마지막 데이터 : Deque.back()
// 데이터 사이즈 : Deque.size()
// 전체 삭제 : Deque.clear()

// - - - - - - - - - - - - - - - - - - - -

// 10. 데크 구현하기(1)
// Deque() : 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []){
	this.array = array;
}
// prototype를 이용해 새로운 메서드(method) 추가

// getBuffer() : 객체 내 데이터 셋 반환(this.array를 복사 후 반환)
Deque.prototype.getBuffer = function(){
	return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
Deque.prototype.isEmpty = function(){
	return this.array.length == 0;
};

// Test code
// let dq = new Deque([1, 2, 3]);
// console.log(dq);	// Deque { array: [ 1, 2, 3 ] }

// let data = dq.getBuffer();
// console.log(data);							// [ 1, 2, 3 ]
// console.log(data == dq.array);	// false

// console.log(dq.isEmpty());			// false
// console.log(Object.getOwnPropertyDescriptors(Deque.prototype));	// 객체 내부 확인

// - - - - - - - - - - - - - - - - - - - -

// 11. 데크 구현하기(2)
// pushFront() : Front 데이터 추가
Deque.prototype.pushFront = function(element){
	return this.array.unshift(element);
};

// popFront() : Front 데이터 추가
Deque.prototype.popFront = function(){
	return this.array.shift();
};

// pushBack() : Back 데이터 추가
Deque.prototype.pushBack = function(element){
	return this.array.push(element);
};

// popBack() : Back 데이터 추가
Deque.prototype.popBack = function(){
	return this.array.pop();
};

// Test code
// let dq = new Deque([1, 2, 3]);
// console.log(dq);	// Deque { array: [ 1, 2, 3 ] }

// dq.pushFront(0);
// dq.pushBack(4);
// console.log(dq);	// Deque { array: [ 0, 1, 2, 3, 4 ] }

// console.log(dq.popFront());	// 0
// console.log(dq.popBack());	// 4
// console.log(dq);	// Deque { array: [ 1, 2, 3 ] }

// - - - - - - - - - - - - - - - - - - - -

// 12. 데크 구현하기(3)
// front() : 가장 첫 데이터 반환
Deque.prototype.front = function(){
	return this.array.length == 0 ? undefined : this.array[0];
};

// back() : 가장 끝 데이터 반환
Deque.prototype.back = function(){
	return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
};

// size() : 큐 내 데이터 개수 확인
Deque.prototype.size = function(){
	return this.array.length;
};

// clear() : 큐 초기화
Deque.prototype.clear = function(){
	this.array = [];
};

// Test code
let dq = new Deque([1, 2, 3]);
console.log(dq);	// Deque { array: [ 1, 2, 3 ] }

console.log(dq.front());	// 1
console.log(dq.back());		// 3
console.log(dq.size());		// 3

dq.clear();
console.log(dq);	// Deque { array: [] }
