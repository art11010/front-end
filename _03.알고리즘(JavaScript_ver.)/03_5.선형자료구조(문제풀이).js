// 29. 연결리스트 문제풀이 - 열차 연결
// function Train(number){
// 	this.number = number;
// 	this.next = null;
// }
// function LinkedList(){
// 	this.head = null;
// }

// function answer(nums){
// 	let ll = new LinkedList();
// 	// 내 풀이 ↓
// 	// for(let i = 0; i < nums.length; i++){
// 	// 	let train = new Train(nums[i]),
// 	// 		current = ll.head;
// 	// 	if( ll.head == null ) ll.head = train;
// 	// 	else {
// 	// 		while(current.next != null){
// 	// 			current = current.next;
// 	// 		}
// 	// 		current.next = train;
// 	// 	}
// 	// }

// 	// 정답 풀이 ↓
// 	let train, current;
// 	for(let i = 0; i < nums.length; i++){
// 		train = new Train(nums[i]);
// 		if( i == 0 ){
// 			ll.head = train;
// 		}else {
// 			current.next = train;
// 		}
// 		current = train;
// 	}
// 	return ll;
// }
// let input = [
// 	[4, 7, 1, 10, 6],
// 	[3, 10, 6, 9, 11, 3, 4],
// 	[5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
// ];
// LinkedList.prototype.printNode = function(){
// 	for(let node = this.head; node != null; node = node.next){
// 		process.stdout.write(`${node.number} -> `);
// 	}
// 	console.log('null');
// };
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	answer(input[i]).printNode();
// }

// - - - - - - - - - - - - - - - - - - - -

// 30. 연결리스트 문제풀이 - 서류 정리
// function File(number){
// 	this.number = number;
// 	this.next = null;
// }
// function LinkedList(){
// 	this.next = null;
// }

// function answer(ll){
// 	let current = ll.head,
// 		prev = null,
// 		next;
// 	// 역방향 정렬
// 	while(current != null){
// 		next = current.next;
// 		current.next = prev;
// 		prev = current;
// 		current = next;
// 	}
// 	// head 업데이트
// 	ll.head = prev;
// 	return ll;
// }

// let input = [
// 	[7, 3, 1],
// 	[4, 6, 9, 1, 3],
// 	[3, 4, 1, 2, 7, 9, 6]
// ];
// LinkedList.prototype.printNode = function(){
// 	for(let node = this.head; node != null; node = node.next){
// 		process.stdout.write(`${node.number} -> `);
// 	}
// 	console.log('null');
// };
// LinkedList.prototype.makeFiles = function(files){
// 	let current = this.head;
// 	let node;
// 	for(let i = 0; i < files.length; i++){
// 		node = new File(files[i]);
// 		node.next = current;
// 		this.head = node;

// 		current = node;
// 	}
// };
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`${i + 1}. `);
// 	let ll = new LinkedList();
// 	ll.makeFiles(input[i]);
// 	answer(ll).printNode();
// }

// - - - - - - - - - - - - - - - - - - - -

// 31. 연결리스트 문제풀이 - 대표 선출






