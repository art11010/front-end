// 29. 연결리스트 문제풀이 - 열차 연결
function Train(number){
	this.number = number;
	this.next = null;
}

function LinkedList(){
	this.head = null;
}

function answer(nums){
	let ll = new LinkedList();
	// 코드 구현 시작 영역
	// 코드 구현 종료 영역
	return ll;
}
let input = [
	[4, 7, 1, 10, 6],
	[3, 10, 6, 9, 11, 3, 4],
	[5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
];
LinkedList.prototype.printNode = function(){
	for(let node = this.head; node != null; node = node.next){
		ProcessingInstruction.stdout.write(`${node.number}`);
	}
	console.log('null');
};
for(let i = 0; i < input.length; i++){
	process.stdout.write(`${i + 1}. `);
	answer(input[i]).printNode();
}

// - - - - - - - - - - - - - - - - - - - -

// 30. 연결리스트 문제풀이 - 서류 정리

// - - - - - - - - - - - - - - - - - - - -

// 31. 연결리스트 문제풀이 - 대표 선출