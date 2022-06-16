// 39. 큐 (Queue)
// 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조
// ex. 줄서기(버스에서 먼저 줄 선 사람이 먼저 탐), 카카오톡 메세지(먼저 보낸 순서대로 나에게 메세지가 전달 됨)
// 구현 메서드(method)
// 데이터 전체 획득 : Queue.getBuffer()
// 비어 있는지 확인 : Queue.inEmpty()
// 데이터 추가 : Queue.enqueue()
// 데이터 삭제 : Queue.dequeue()
// 첫번째 데이터 : Queue.front()
// 데이터 사이즈 : Queue.size()
// 전체 삭제 : Queue.clear()

// - - - - - - - - - - - - - - - - - - - -

// 40. 큐 구현하기
// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array){
	this.array = array ? array : [];
	// array 가 있을 경우 this.array = array
	// array 가 없을 경우 this.array = []
}

// prototype를 이용해 새로운 메서드(method) 추가

// getBuffer() : 객체 내 데이터 셋 반환(this.array를 복사 후 반환)
Queue.prototype.getBuffer = function(){
	return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
Queue.prototype.isEmpty = function(){
	return this.array.length == 0;
};

// Test code
// let queue = new Queue([1, 2, 3]);
// console.log(queue);

// let data = queue.getBuffer();
// console.log(data);					// [ 1, 2, 3 ]
// console.log(data === queue.array);	// false
// console.log(queue.isEmpty());		// false
// console.log(Object.getOwnPropertyDescriptors(Queue.prototype));	// 객체 내부 확인

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element){
	return this.array.push(element);
};

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function(){
	return this.array.shift();
};

// Test code
// let queue = new Queue([1, 2]);
// console.log(queue);				// Queue { array: [ 1, 2 ] }

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue);				// Queue { array: [ 1, 2, 3, 4 ] }

// console.log(queue.dequeue());	// 1
// console.log(queue.dequeue());	// 2
// console.log(queue);				// Queue { array: [ 3, 4 ] }

// front() : 가장 첫 데이터 반환
Queue.prototype.front = function(){
	return this.array.length == 0 ? undefined : this.array[0];
};

// size() : 큐 내 데이터 개수 확인
Queue.prototype.size = function(){
	return this.array.length;
};

// clear() : 큐 초기화
Queue.prototype.clear = function(){
	this.array = [];
};

// Test code
// let queue = new Queue([1, 2, 3, 4]);

// queue.dequeue();
// console.log(queue.front());	// 2
// console.log(queue);			// Queue { array: [ 2, 3, 4 ] }

// console.log(queue.size());	// 3
// queue.clear();
// console.log(queue);			// Queue { array: [] }
// console.log(queue.size());	// 0

// - - - - - - - - - - - - - - - - - - - -

// 41. 큐 최적화
// 방식 개선 : enqueue, dequeue 방식을 push, shift에서 index로 변경
// shift : O(n), index : O(1)
function Queue2(array){
	this.array = array ? array : [];
	// array 가 있을 경우 this.array = array
	// array 가 없을 경우 this.array = []
	this.tail = array ? array.length : 0;
	this.head = 0;
}

// enqueue() : 데이터 추가
Queue2.prototype.enqueue = function(element){
	return (this.array[this.tail++] = element);
};

// dequeue() : 데이터 삭제
Queue2.prototype.dequeue = function(){
	if(this.tail === this.head) return undefined;

	let element = this.array[this.head];
	delete this.array[this.head++];
	return element;
};

// Test code
// let queue = new Queue2([1, 2]);
// console.log(queue);				// Queue2 { array: [ 1, 2 ], tail: 2, head: 0 }

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue);				// Queue2 { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }

// console.log(queue.dequeue());	// 1
// console.log(queue.dequeue());	// 2
// console.log(queue);				// Queue2 { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }

// 성능 측정
// enqueue,dequeue 성능 비교 : push, shift 사용한 queue_1과 index 사용한 queue_2로 성능 비교
let queue = new Queue();
let queue2 = new Queue2();
const count = 100000;

function benchmark(queue, enqueue){
	let start = Date.now();
	for(let i = 0; i < count; i++){
		enqueue ? queue.enqueue() : queue.denqueue();
	}
	return Date.now() - start;
}

console.log('enqueue queue : ' + benchmark(queue, 1) + 'ms');	// enqueue queue : 18ms
console.log('enqueue queue2 : ' + benchmark(queue2, 1) + 'ms');	// enqueue queue2 : 15ms
console.log('dequeue queue : ' + benchmark(queue, 1) + 'ms');	// dequeue queue : 9ms
console.log('dequeue queue2 : ' + benchmark(queue2, 1) + 'ms');	// dequeue queue2 : 8ms
