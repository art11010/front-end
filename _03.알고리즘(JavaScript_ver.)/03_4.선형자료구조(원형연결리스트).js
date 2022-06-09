// 25. 원형 연결 리스트(Circular Linked List)
// 각 노드가 데이터와 포인터를 가지며, '원영 형태'로 연결되어 데이터를 저장하는 자료 구조
// 구현 메서드(method)
// 노드 개수 : CircularLinkedList.size()
// 비어 있는지 확인 : CircularLinkedList.isEmpty()
// 노드 출력 : CircularLinkedList.printNode()
// 노드 추가 : CircularLinkedList.append(), CircularLinkedList.insert()
// 노드 삭제 : CircularLinkedList.remove(), CircularLinkedList.removeAt()
// 데이터 위치 확인 : CircularLinkedList.indexOf()

// - - - - - - - - - - - - - - - - - - - -

// 26. 원형 연결 리스트 구현하기(1), (2)
// Node() : data와 point를 가지고 있는 객체
function CircularNode(data){
	this.data = data;
	this.next = null;
}
// CircularLinkedList() : head와 length를 가지고 있는 객체
function CircularLinkedList(){
	this.head = null;
	this.length = 0;
}
// (1)
// size() : 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function(){
	return this.length;
};
// isEmpty() : 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function(){
	return this.length === 0;
};

// Test code
// let cll = new CircularLinkedList();
// let node = new CircularNode(123);
// console.log(cll);

// cll.head = node;
// node.next = cll.head;
// cll.length++;
// console.log(cll);

// node = new CircularNode(456);
// node.next = cll.head.next;
// cll.head.next = node;
// cll.length++;
// console.log(cll);

// (2)
// printNode() : 노드 출력
CircularLinkedList.prototype.printNode = function(){
	process.stdout.write('head -> ');
	if(this.length != 0){
		process.stdout.write(`${this.head.data} -> `);
		for(let node = this.head.next; node != this.head; node = node.next){
			process.stdout.write(`${node.data} -> `);
		}
	}
	console.log('head');
};

// append() : 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function(value){
	let node = new CircularNode(value),
		current = this.head;
	if(this.head === null){
		this.head = node;
	}else{
		while(current.next != this.head){
			current = current.next;
		}
		current.next = node;
	}
	node.next = this.head;

	this.length++;
};

// Test code
// let cll = new CircularLinkedList();
// cll.append(1);
// cll.append(10);
// cll.append(100);
// console.log(cll);
// cll.printNode();
// console.log(cll.size());

// - - - - - - - - - - - - - - - - - - - -

// 27. 원형 연결 리스트 구현하기(3), (4)
// (3)
// insert() : position 위치에 노드 추가
CircularLinkedList.prototype.insert = function(value, position = 0){
	if(position < 0 || position > this.length){
		return false;
	}
	let node = new CircularNode(value),
		current = this.head,
		index = 0,
		prev;
	if(position === 0){
		node.next = current;
		if(this.isEmpty()){
			current = node;
		}else{
			while(current.next != this.head){
				current = current.next;
			}
		}
		this.head = node;
		current.next = this.head;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}
		node.next = current;
		prev.next = node;
		if(node.next === null){
			node.next = this.head;
		}
	}
	this.length++;

	return true;
};

// Test code
// let cll = new CircularLinkedList();
// cll.insert(1);
// cll.insert(10);
// cll.insert(100);
// cll.printNode();

// cll.insert(2, 1);
// cll.insert(3, 3);
// cll.printNode();

// (4)
// remove() : value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function(value){
	let current = this.head,
		prev = current,
		data;
	while(current.data != value && current.next != this.head){
		prev = current;
		current = current.next;
	}
	if(current.data != value){
		return null;
	}
	data = current.data;
	if(current === this.head){
		while(current.next != this.head){
			current = current.next;
		}
		this.head = this.head.next;
		current.next = this.head;
	}else{
		prev.next = current.next;
	}
	this.length--;

	return data;
};

// Test code
// let cll = new CircularLinkedList();
// cll.insert(1);
// cll.insert(10);
// cll.insert(100);
// cll.insert(2, 1);
// cll.insert(3, 3);
// cll.printNode();

// console.log(cll.remove(1000));
// cll.printNode();
// console.log(cll.remove(1));
// cll.printNode();
// console.log(cll.remove(2));
// cll.printNode();
// console.log(cll.remove(100));
// cll.printNode();
// console.log(cll.size());


// - - - - - - - - - - - - - - - - - - - -

// 28. 원형 연결 리스트 구현하기(5), (6)
// (5)
// removeAt() : position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function(position = 0){
	if(position < 0 || position >= this.length){
		return null;
	}
	let current = this.head,
		index = 0,
		prev,
		data;
	if(position === 0){
		data = current.data;
		while(current.next != this.head){
			current = current.next;
		}
		this.head = this.head.next;
		current.next = this.head;
	}else{
		while(index++ < position){
			prev = current;
			current = current.next;
		}
		data = current.data;
		prev.next = current.next;
	}
	this.length--;

	return data;
};

// Test code
// let cll = new CircularLinkedList();
// cll.insert(1);
// cll.insert(10);
// cll.insert(100);
// cll.insert(2, 1);
// cll.insert(3, 3);
// cll.printNode();

// console.log(cll.removeAt(1000));
// cll.printNode();
// console.log(cll.removeAt(4));
// cll.printNode();
// console.log(cll.removeAt());
// cll.printNode();
// console.log(cll.removeAt(1));
// cll.printNode();
// console.log(cll.size());

// (6)
// indexOf() : value 값을 갖는 도느 위치 반환
// CircularLinkedList.prototype.indexOf = function(value){
// 	let current = this.head,
// 		index = 0;
// 	do{
// 		if(current.data === value){
// 			return index;
// 		}
// 		index++;
// 		current = current.next;
// 	} while (current != this.head);
// 	return -1;
// };

// CircularLinkedList.prototype.remove2 = function(value){
// 	let index = this.indexOf(value);
// 	return this.removeAt(index);
// };

// Test code
let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.indexOf(1000));
console.log(cll.indexOf(1));
console.log(cll.indexOf(100));
console.log(cll.indexOf(10));

console.log(cll.remove2(1000));
cll.printNode();
console.log(cll.remove2(1));
cll.printNode();
console.log(cll.remove2(2));
cll.printNode();
console.log(cll.remove2(100));
cll.printNode();