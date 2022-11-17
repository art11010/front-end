// 5. 원형 큐 (Circular Queue)
// 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조
// 구현 메서드(method)
// 데이터 전체 획득 : CircularQueue.getBuffer()
// 꽉 찼는지 확인 : CircularQueue.isFull()
// 비어 있는지 확인 : CircularQueue.isEmpty()
// 데이터 추가 : CircularQueue.enqueue()
// 데이터 삭제 : CircularQueue.dequeue()
// 첫번째 데이터 : CircularQueue.front()
// 데이터 사이즈 : CircularQueue.size()
// 전체 삭제 : CircularQueue.clear()

// - - - - - - - - - - - - - - - - - - - -

// 6. 원형 큐 구현하기(1)
// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수
const DEFAULT_SIZE = 5;
function CircularQueue(array = [], size = DEFAULT_SIZE){
	this.array = array;
	this.size = array.length > size ? array.length : size;
	this.length = array.length;
	this.head = 0;
	this.tail = array.length;
}

// prototype를 이용해 새로운 메서드(method) 추가

// getBuffer() : 객체 내 데이터 셋 반환(this.array를 복사 후 반환)
CircularQueue.prototype.getBuffer = function(){
	return this.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
CircularQueue.prototype.isEmpty = function(){
	return this.length == 0;
};

// isFull() : 데이터 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function(){
	return this.length == this.size;
};

// Test code
// let cq = new CircularQueue([1, 2, 3]);
// console.log(cq);	// array: [ 1, 2, 3 ], size: 5, length: 3, head: 0, tail: 3 

// console.log(cq.isEmpty());	// false
// console.log(cq.isFull());		// false
// console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));	// 객체 내부 확인

// - - - - - - - - - - - - - - - - - - - -

// 7. 원형 큐 구현하기(2)
// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function(element){
	if( this.isFull() ) return false;

	this.array[this.tail] = element;
	this.tail = (this.tail + 1) % this.size;
	this.length++;

	return true;
};

// dequeue() : 데이터 삭제
CircularQueue.prototype.dequeue = function(){
	if( this.isEmpty() ) return undefined;

	let element = this.array[this.head];
	delete this.array[this.head];
	this.head = (this.head + 1) % this.size;
	this.length--;
	return element;
};

// Test code
// let cq = new CircularQueue([1, 2, 3, 4]);
// console.log(cq);	// array: [ 1, 2, 3, 4 ], size: 5, length: 4, head: 0, tail: 4

// console.log(cq.enqueue(5));	// true
// console.log(cq.enqueue(6));	// false
// console.log(cq);	// array: [ 1, 2, 3, 4, 5 ], size: 5, length: 5, head: 0, tail: 5

// console.log(cq.dequeue());	// 1
// console.log(cq.dequeue());	// 2
// console.log(cq);	// array: [ <2 empty items>, 3, 4, 5 ], size: 5, length: 3, head: 2, tail: 5

// cq.enqueue(6);
// console.log(cq);	// array: [ 6, <1 empty item>, 3, 4, 5 ], size: 5, length: 4, head: 2, tail: 1

// - - - - - - - - - - - - - - - - - - - -

// 8. 원형 큐 구현하기(3)
// front() : 가장 첫 데이터 반환
CircularQueue.prototype.front = function(){
	return this.length == 0 ? undefined : this.array[this.head];
};

// dataSize() : 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function(){
	return this.length;
};

// clear() : 큐 초기화
CircularQueue.prototype.clear = function(size = DEFAULT_SIZE){
	this.array = [];
	this.size = size;
	this.length = 0;
	this.head = 0;
	this.tail = 0;
};

// Test code
let cq = new CircularQueue([1, 2, 3, 4]);

console.log(cq.enqueue(5));	// true
console.log(cq.enqueue(6));	// false
console.log(cq.dequeue());	// 1
console.log(cq.dequeue());	// 2
console.log(cq);	// array: [ <2 empty items>, 3, 4, 5 ], size: 5, length: 3, head: 2, tail: 0

console.log(cq.enqueue(6));	//true
console.log(cq);	// array: [ 6, <1 empty item>, 3, 4, 5 ], size: 5, length: 4, head: 2, tail: 1
console.log(cq.front());		// 3
console.log(cq.dataSize());	// 4

cq.clear(10);
console.log(cq);	// array: [], size: 10, length: 0, head: 0, tail: 0