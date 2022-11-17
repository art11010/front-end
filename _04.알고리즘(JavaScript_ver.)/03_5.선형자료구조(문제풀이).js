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
function Node(data){
	this.data = data;
	this.next = null;
}
function LinkedList(){
	this.head = null;
}

function answer(n, m, k){
	// n : 전체 개수
	// m : 시작 위치
	// k : 움직이는 값
	let result = [];

	// 1. Circular Liked List 제작
		let ll = new LinkedList();
		// 연결 리스트 할 때는 current, prev 기본적으로 생성하기
		let current,	// 현재위치
			prev;		// 이전위치
		for(let i = 1; i <= n; i++){
			current = new Node(i);

			if(i === 1){
				ll.head = current;		// 1. head에 노드 연결
			}else{
				prev.next = current;	// 3. current에 담겨져 있는 next 값에 새로운 노드 연결
			}

			prev = current;				// 2 or 4. 연결한 노드를 current에 담음
		}
		current.next = ll.head;			// 마지막 노드의 next 값에 head 연결

	// 2. Start node 위치 설정
	current = ll.head;
	while(--m){
		prev = current;
		current = current.next;
	}

	// 3. 후보자들 중 k만큼 움직이면서 제거
	let count;
	while(current.next != current){	// current의 next가 나 자신이 아닐 때까지
		result.push(current.data);
		prev.next = current.next;	// push된 current.data 값을 없애기 위해 current.next로 덮음

		count = k;
		while(count--){
			prev = current;
			current = current.next;
		}
	}

	// 4. 혼자 남은 후보 번호를 result에 추가
	result.push(current.data);

	return result;
}

let input = [
	[8, 2, 3],
	[10, 2, 3],
	[20, 5, 7]
];
for(let i = 0; i < input.length; i++){
	process.stdout.write(`${i + 1}. `);
	console.log(answer(input[i][0], input[i][1], input[i][2]));
}


