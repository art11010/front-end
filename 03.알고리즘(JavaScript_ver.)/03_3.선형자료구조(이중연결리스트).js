// 21. 이중 연결 리스트(Double Linked List)
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
// Node() : data와 point인 next, prev를 가지고 있는 객체
function DoubleNode(data){
	this.data = data;
	this.next = null;
	this.prev = null;
}
// DoubleLinkedList() : head, tail과 length를 가지고 있는 객체
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

// node = new DoubleNode(456);
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

// 24. 이중 연결 리스트 구현하기(5), (6)
// (5)
// removeAt() : position 위치 노드 삭제
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
// let dll = new DoubleLinkedList();

// dll.insert(1);
// dll.insert(10);
// dll.insert(100);
// dll.insert(2, 1);
// dll.insert(3, 3);
// dll.printNode();
// dll.printNodeInverse();

// console.log(dll.removeAt(1000));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.removeAt(4));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.removeAt());
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.removeAt(1));
// dll.printNode();
// dll.printNodeInverse();

// (6)
// indexOf() : value 값을 갖는 노드 위치 반환
DoubleLinkedList.prototype.indexOf = function(value){
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

// remove2() : indexOf + removeAt = remove
DoubleLinkedList.prototype.remove2 = function(value){
	let index = this.indexOf(value);
	return this.removeAt(index);
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

// console.log(dll.indexOf(1000));
// console.log(dll.indexOf(1));
// console.log(dll.indexOf(100));
// console.log(dll.indexOf(10));

// console.log(dll.remove2(1000));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove2(1));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove2(2));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove2(100));
// dll.printNode();
// dll.printNodeInverse();