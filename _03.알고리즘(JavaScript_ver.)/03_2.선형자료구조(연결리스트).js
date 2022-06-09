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