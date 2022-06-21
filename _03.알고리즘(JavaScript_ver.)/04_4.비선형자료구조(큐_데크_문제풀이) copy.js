function Queue(){
	this.array = [];
}

Queue.prototype.enqueue = function(element){
	this.array.push(element);
};

Queue.prototype.dequeue = function(){
	return this.array.length > 0 ? this.array.shift() : -1;
};

Queue.prototype.empty = function(){
	return this.array.length > 0 ? 0 : 1;
};

Queue.prototype.size = function(){
	return this.array.length;
};

Queue.prototype.front = function(){
	return this.array.length > 0 ? this.array[0] : -1;
};

Queue.prototype.back = function(){
	return this.array.length > 0 ? this.array[ this.array.length - 1 ] : -1;
};

Queue.prototype.max = function(){
	return Math.max(...this.array);
};

// 12. 큐, 데크 문제풀이 - 큐 만들기
// function answer(cmds){
// 	let result = [];
// 	let queue = new Queue();
// 	for(let i = 0; i < cmds.length; i++){
// 		let cmd = cmds[i].split(' ')[0];
// 		switch(cmd){
// 			case 'enqueue':
// 				queue.enqueue(Number(cmds[i].split(' ')[1]));
// 				break;
// 			case 'dequeue':
// 				result.push(queue.dequeue());
// 				break;
// 			case 'empty':
// 				result.push(queue.empty());
// 				break;
// 			case 'size':
// 				result.push(queue.size());
// 				break;
// 			case 'front':
// 				result.push(queue.front());
// 				break;
// 			case 'back':
// 				result.push(queue.back());
// 				break;
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	['enqueue 1', 'enqueue 2', 'dequeue', 'dequeue', 'dequeue'],
// 	['enqueue 3', 'enqueue 4', 'enqueue 5', 'enqueue 6', 'front', 'back', 'dequeue', 'size', 'empty'],
// 	['enqueue 7', 'enqueue 8', 'front', 'back', 'size', 'empty', 'dequeue', 'dequeue', 'dequeue', 'size', 'empty', 'dequeue', 'enqueue 9', 'empty', 'front']
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 14. 큐, 데크 문제풀이 - 카드 뽑기
// function answer(n){
// 	let result = [];
// 	let queue = new Queue();
// 	let count = 0;
// 	for(let i = 1; i <= n; i++){
// 		queue.enqueue(i);
// 	}
// 	while( !queue.empty() ){
// 		count++;
// 		if( count % 2 ) result.push(queue.dequeue())
// 		else {
// 			queue.enqueue(queue.dequeue());
// 		}
// 	}
// 	return result;
// }
// let input = [4, 7, 10]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 15. 큐, 데크 문제풀이 - 프린터 출력
// function answer(priorities, select){
// 	let result = -1;
// 	let vq = new Queue();
// 	let pq = new Queue();
// 	let count = 0;
// 	for(let i = 0; i < priorities.length; i++){
// 		vq.enqueue(i);
// 		pq.enqueue(priorities[i]);
// 	}
// 	for(;;){
// 		if( pq.max() === pq.front() ){
// 			count++;
// 			if(vq.front() === select){
// 				result = count;
// 				break;
// 			}else{
// 				vq.dequeue();
// 				pq.dequeue();
// 			}
// 		}else{
// 			vq.enqueue(vq.dequeue());
// 			pq.enqueue(pq.dequeue());
// 		}
// 		// console.log('f : '+pq.front(), vq, pq);
// 	}
// 	return result;
// }
// let input = [
// 	[[3], 0],
// 	[[3, 4, 5, 6], 2],
// 	[[1, 1, 5, 1, 1, 1], 0],
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i][0], input[i][1]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 16. 큐, 데크 문제풀이 - 대표 선출
function CircularQueue(size){
	this.array = new Array(size);
	this.size = this.array.length;
	this.length = 0;
	this.head = 0;
	this.tail = 0;
}

CircularQueue.prototype.enqueue = function(element){
	this.length++;
	this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function(){
	this.length--;
	return this.array[this.head++ % this.size];
};

// function answer(n, m, k){
// 	let result = [];
// 	let cq = new CircularQueue(n);
// 	for(let i = 1; i <= n; i++){
// 		cq.enqueue(i);
// 	}
// 	cq.tail = cq.head = (n + m - 1) % n;
// 	let count = 0;
// 	result.push(cq.dequeue());
// 	while(cq.length != 0){
// 		count = k - 1;
// 		while(count--){
// 			cq.enqueue(cq.dequeue());
// 		}
// 		result.push(cq.dequeue());
// 	}
// 	return result;
// }
// let input = [
// 	[8, 2, 3],
// 	[10, 2, 3],
// 	[20, 5, 7]
// ];
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	console.log(answer(input[i][0], input[i][1], input[i][2]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 17. 큐, 데크 문제풀이 - 데크 만들기
function Deque(array = []){
	this.array = array;
}
Deque.prototype.pushFront = function(element){
	this.array.unshift(element);
};
Deque.prototype.pushBack = function(element){
	this.array.push(element);
};
Deque.prototype.popFront = function(){
	return this.array.length > 0 ? this.array.shift() : -1;
};
Deque.prototype.popBack = function(){
	return this.array.length > 0 ? this.array.pop() : -1;
};
Deque.prototype.empty = function(){
	return this.array.length == 0 ? 1 : 0;
};
Deque.prototype.size = function(){
	return this.array.length;
};
Deque.prototype.front = function(){
	return this.array.length > 0 ? this.array[0] : -1;
};
Deque.prototype.back = function(){
	return this.array.length > 0 ? this.array[this.array.length - 1] : -1;
};

function answer(cmds){
	let result = [];
	let deque = new Deque();
	for(let i = 0; i < cmds.length; i++){
		let cmd = cmds[i].split(' ')[0];
		switch (cmd) {
			case 'push_front':
				deque.pushFront(Number(cmds[i].split(' ')[1]));
				break;
			case 'push_back':
				deque.pushBack(Number(cmds[i].split(' ')[1]));
				break;
			case 'pop_front':
				result.push(deque.popFront());
				break;
			case 'pop_back':
				result.push(deque.popBack());
				break;
			case 'empty':
				result.push(deque.empty());
				break;
			case 'size':
				result.push(deque.size());
				break;
			case 'front':
				result.push(deque.front());
				break;
			case 'back':
				result.push(deque.back());
				break;
		}
	}
	return result;
}
let input = [
	['push_back 1', 'push_front 2', 'pop_front', 'pop_back', 'pop_front'],
	['push_back 3', 'push_front 4', 'push_back 5', 'push_front 6', 'front', 'back', 'pop_front', 'size', 'empty'],
	['push_back 7', 'push_front 8', 'front', 'back', 'size', 'empty', 'pop_front', 'pop_back', 'pop_front', 'size', 'empty', 'pop_back', 'push_front 9', 'empty', 'front']
];
for(let i = 0; i < input.length; i++){
	process.stdout.write(`${i + 1}. `);
	console.log(answer(input[i]));
}


// 내 풀이 ↓
// 정답 풀이 ↓