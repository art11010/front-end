// 1. 우선순위 큐 (Priority Queue)
// 우선순위를 설정하고 이를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조
// 우선순위 정렬 방식 : 배열 기반, 연결리스트 기반, 힙(Heap) 기반 등의 정렬 방식 존재
// ex. 비행기 탑승(비즈니스 먼저 탑승), 병원(중환자, 일반환자) 등
// 구현 메서드(method)
// 데이터 전체 획득 : PriorityQueue.getBuffer()
// 비어 있는지 확인 : PriorityQueue.isEmpty()
// 데이터 추가 : PriorityQueue.enqueue()
// 데이터 삭제 : PriorityQueue.dequeue()
// 첫번째 데이터 : PriorityQueue.front()
// 데이터 사이즈 : PriorityQueue.size()
// 전체 삭제 : PriorityQueue.clear()

// - - - - - - - - - - - - - - - - - - - -

// 2. 우선순위 큐 구현하기(1)
// Element() : 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority){
	this.data = data;
	this.priority = priority;
}

// PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue(array){
	this.array = [];
}

// prototype를 이용해 새로운 메서드(method) 추가

// getBuffer() : 객체 내 데이터 셋 반환(element의 data만 배열로 반환)
PriorityQueue.prototype.getBuffer = function(){
	return this.array.map((element) => element.data);
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function(){
	return this.array.length == 0;
};

// Test code
// console.log(Object.getOwnPropertyDescriptors(Element.prototype));	// 객체 내부 확인
// console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));	// 객체 내부 확인

// - - - - - - - - - - - - - - - - - - - -

// 3. 우선순위 큐 구현하기(2)
// enqueue() : 데이터 추가
PriorityQueue.prototype.enqueue = function(data, priority){
	let element = new Element(data, priority);
	let added = false;
	for(let i = 0; i < this.array.length; i++){
		if(element.priority < this.array[i].priority){
			this.array.splice(i, 0, element);
			added = true;
			break;
		}
	}
	if(!added){
		this.array.push(element);
	}
	return this.array.length;
};

// dequeue() : 데이터 삭제
PriorityQueue.prototype.dequeue = function(){
	return this.array.shift();
};

// Test code
// let pq = new PriorityQueue();
// console.log(pq);				// PriorityQueue { array: [] }

// pq.enqueue('Alice', 1);
// pq.enqueue('Bob', 2);
// console.log(pq);

// pq.enqueue('Tom', 1);
// pq.enqueue('John', 3);
// console.log(pq);

// console.log(pq.dequeue());	// Element { data: 'Alice', priority: 1 }
// console.log(pq.dequeue());	// Element { data: 'Tom', priority: 1 }
// console.log(pq);

// - - - - - - - - - - - - - - - - - - - -

// 4. 우선순위 큐 구현하기(3)
// front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function(){
	return this.array.length == 0 ? undefined : this.array[0].data;
};

// size() : 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function(){
	return this.array.length;
};

// clear() : 큐 초기화
PriorityQueue.prototype.clear = function(){
	this.array = [];
};

// Test code
let pq = new PriorityQueue();

pq.enqueue('Alice', 1);
pq.enqueue('Bob', 2);
pq.enqueue('Tom', 1);
pq.enqueue('John', 3);

console.log(pq.getBuffer());	// [ 'Alice', 'Tom', 'Bob', 'John' ]

console.log(pq.dequeue());		// Element { data: 'Alice', priority: 1 }
console.log(pq.dequeue());		// Element { data: 'Tom', priority: 1 }
console.log(pq);

console.log(pq.front());			// Bob
pq.clear();
console.log(pq);							// PriorityQueue { array: [] }
console.log(pq.size());				// 0
