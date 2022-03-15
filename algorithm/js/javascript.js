// 4.
// console.log('hello world');

// - - - - - - - - - - - - - - - - - - - -

// 5.
// const fs = require('fs');
// const input = fs.readFileSync('./input.txt', 'utf8');

// console.log(input);

// - - - - - - - - - - - - - - - - - - - -

// 6.
// let 안녕 = '하세요';
// let hi = 'hello';
// let HI = 'HELLO';

// console.log(안녕, hi, HI)

// - - - - - - - - - - - - - - - - - - - -

// 7.
// 변수는 let, const : 상수
// let A = 123;
// console.log(A);
// A = 456;
// console.log(A);
// let A = 789;	SyntaxError

// const B = 123;
// console.log(B);
// B = 456	TypeError

// const C;	SyntaxError
// C = 123;

// // 선언 후 할당
// let hi;
// hi = 'hello';
// // 선언과 동시에 초기화
// let halo = 'hello!';
// // 한줄에 여러 변수 선언하고 초기와
// let name = 'john', age = 13, msg = 'hello';
// // 상수는 보통 대문자로 표기
// const TESTCASE = 5;
// const BIRTYDAY = '2020. 1. 1';
// console.log(TESTCASE, BIRTYDAY);

// // using var
// console.log(name_1);
// var name_1 = 'john';
// console.log(name_1);
// // hosting var
// var name_2;
// console.log(name_2);
// var name_2 = 'john';
// console.log(name_2);
// // let ver
// console.log(name_3)
// let name_3 = 'john';	ReferenceError

// - - - - - - - - - - - - - - - - - - - -

// 8.
// let str = 'hello world';
// console.log(typeof str);
// console.log(typeof undefined);
// console.log(typeof 123);
// console.log(typeof 456n);
// console.log(typeof true);
// console.log(typeof 'hello');
// console.log(typeof Symbol('id'));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof console.log);

// // null undefined
// let null_check = null;
// let unde_check;
// console.log(null_check === null, unde_check);
// // Number
// let num_1 = 123;
// let num_2 = 123.456;
// let num_3 = 1 / 0;
// let num_4 = 456n;
// console.log(num_1 - num_2);
// console.log((num_1 - num_2).toFixed(3));
// console.log(num_3);
// console.log(num_1 / 'hello');
// console.log(typeof num_4);
// // String (Backtick 백틱, 역 따옴표) : 문자열 안에 변수를 같이 쓸 수 있음
// let num = 3;
// let str = `hello_${num}`;
// console.log(str)

// - - - - - - - - - - - - - - - - - - - -

// 9.
// let user = {
// 	name: 'john',
// 	age: 27
// };
// console.log(typeof user, typeof user.name, typeof user.age);
// console.log(user, user.name, user.age, user['age']);

// // user.age = 30;
// // console.log(user.age);
// // 개체(entity) 추가
// user.height = 180;
// console.log(user);

// // 개체(entity) 삭제
// delete user.height;
// console.log(user);

// // 객체 복사 문제점
// let admin = user;
// admin.name = 'park'
// console.log(admin.name);
// console.log(user.name);	john -> park 으로 변경됨
// user.age = 30
// console.log(user.age);	27 -> 30 으로 변경됨
// console.log(admin.age);

// - - - - - - - - - - - - - - - - - - - -

// 10.
// let user = {
// 	name: 'john',
// 	age: 23,
// 	sizes : {
// 		height: 180,
// 		weight: 72,
// 	}
// };

// *shallow copy의 문제점 : 객체 내 또 다른 객체가 있다면 복사되지 않음
// // shallow copy 1 (얕은 복사)
// let admin = {};
// for(let key in user){
// 	admin[key] = user[key]
// };

// // shallow copy 2 (얕은 복사)
// let admin = Object.assign({},user);

// // shallow copy 3 (얕은 복사)
// let admin = {...user};

// admin.name = 'park';
// console.log(user.name);		john
// console.log(admin.name);		park

// depp copy 1 (깊은 복사)
// let admin = JSON.parse(JSON.stringify(user));

// admin.sizes.height++;
// console.log(admin.sizes.height, user.sizes.height);

// - - - - - - - - - - - - - - - - - - - -

// 11.
// String
// console.log(String(123));
// console.log(String(1 / 0));
// console.log(String(-1 / 0));
// console.log(String(NaN));
// console.log(String(true));
// console.log(String(undefined));
// console.log(String(null));
// Number
// console.log(Number(''));
// console.log(Number('123'));
// console.log(Number('hello'));
// console.log(Number('123hello'));
// console.log(Number(123));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(parseInt('123.123'));	소수점 제거
// console.log(parseFloat('123.123'));	소수점 포함
// Boolean
// console.log(Boolean(''));
// console.log(Boolean('123'));
// console.log(Boolean('hello'));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(123));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// - - - - - - - - - - - - - - - - - - - -

// 12.
// 더하기 : +, 빼기 : -, 곱하기 : *, 나누기 : /
// // 몫
// console.log(parseInt(31 / 10));
// // 나머지 연산자 : %
// console.log(31 % 10);
// // 거듭제곱 연산자 : **
// console.log(2 ** 3);
// // 대입 연산자 : = (오른쪽에 있는 값이 왼쪽 변수에 들어감)
// let num_1 = 123;
// let num_2 = 456;
// let str_1 = 'hello';
// let str_2 = 'world';
// let num_3, str_3;
// num_3 = num_1 + num_2;
// str_3 = str_1 + str_2;
// console.log(num_3);
// console.log(str_3);
// let num_4 = num_1 - num_2;
// console.log(num_4);
// // 복합 대입 연산자 : +=, -=, *=, /=, %=
// num_1 = num_1 + num_2; === num_1 += num_2;
// 증감 연산자 : ++, --

// - - - - - - - - - - - - - - - - - - - -

// 13.
// 비교 연산자
// == : 단순 값의 같음을 비교
// === : 자료 형까지 같음을 비교
// 논리 연산자
// && : AND, || : OR, ! : NOT

// - - - - - - - - - - - - - - - - - - - -

// 14. 조건문 if else
// 3항 연산자
// 변수 = (조건식) ? 참일 때 값 : 거짓일 때 값
// let age = 20;
// let msg = age < 19 ? 'You are not adult' :'You are adult';
// console.log(msg)

// - - - - - - - - - - - - - - - - - - - -

// 16. 조건문 switch
// break, default는 optional
// let day_number = 1;
// let day;
// switch(day_number){
// 	case 0:
// 		day = 'Sunday'; break;
// 	case 1:
// 		day = 'Monday'; break;
// 	case 2:
// 		day = 'Tuesday'; break;
// 	case 3:
// 		day = 'Wednesday'; break;
// 	case 4:
// 		day = 'Thursday'; break;
// 	case 5:
// 		day = 'Friday'; break;
// 	case 6:
// 		day = 'Saturday'; break;
// 	default:
// 		day = 'error'; break;
// }
// console.log(day);

// let browser = 'Chrome';
// let msg;
// switch(browser){
// 	case 'Explorer':
// 		msg = 'Bad :('; break;
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		msg = 'Good :D'; break;
// 	default:
// 		msg = 'Soso :|'; break;
// }
// console.log(msg);

// - - - - - - - - - - - - - - - - - - - -

// 17. 연습 문제
// const day = 3;
// let weekend = '';
// switch(day){
// 	case 1:
// 		weekend = '월'; break;
// 	case 2:
// 		weekend = '화'; break;
// 	case 3:
// 		weekend = '수'; break;
// 	case 4:
// 		weekend = '목'; break;
// 	case 5:
// 		weekend = '금'; break;
// 	case 6:
// 		weekend = '토'; break;
// 	case 7:
// 		weekend = '일'; break;
// }
// console.log(weekend);

// - - - - - - - - - - - - - - - - - - - -

// 18. for
// for(let i = 0; i < 2; i++){
// 	console.log('i = ' + i);
// }
// let num = 0;
// for(; num < 2;){
// 	console.log('num = ' + num);
// 	num++;
// }
// // 2중 for
// for(let f = 0; f < 3; f++){
// 	for(let s = 0; s < 3; s++){
// 		console.log(`${f} + ${s} = ${f + s}`);
// 	}
// }
// // for in(객체 for문) : for(key in objName){}
// const person = {fname: 'john', lname: 'park', age: 25};
// let info = '';
// for(let x in person){
// 	info += person[x];
// }
// console.log(info);
// // for of : for(variable of iterable){}
// // ES6에 추가된 Collection 기반 반복문
// let lang = 'JavaScript';
// let text = '';
// for(let x of lang){
// 	text += x;
// 	console.log(x)
// }
// console.log(text);

// - - - - - - - - - - - - - - - - - - - -

// 19.
// // while 반복문
// let i = 4;
// while(i < 3){
// 	console.log(i);
// 	i++;
// }
// // do while 반복문
// i = 4;
// do{
// 	console.log(i);
// 	i++;
// }while(i < 3)

// - - - - - - - - - - - - - - - - - - - -

// 20. 반복문 제어
// // break : 코드 블록을 탈출할 때 사용되는 식별자
// let text = '';
// for(let i = 0; i < 10; i++){
// 	if(i === 3) break;
// 	text += i;
// }
// console.log(text);
// // continue : 해당 라인에서 중지 시킨 후 명시된 조건에 따라 재진행
// text = '';
// for(let i = 0; i < 10; i++){
// 	if(i === 3) continue;
// 	text += i;
// }
// console.log(text);
// lable : 특정 영역을 지정하여 이름을 붙이는 식별자
// break와 continue를 사용하는 반복문 안에서만 사용 가능
// break나 continue를 쓰고 싶은 for 문에 이름 지정
// *기본 for문 ↓
// for(let i = 0; i < 3; i++){
// 	for(let j = 0; j < 3; j++){
// 		console.log(i + 'x' + j + '=' + i * j);
// 		break;
// 	}
// }
// *lable for문 ↓
// end: for(let i = 0; i < 3; i++){
// 	for(let j = 0; j < 3; j++){
// 		console.log(i + 'x' + j + '=' + i * j);
// 		break end;
// 	}
// }

// - - - - - - - - - - - - - - - - - - - -

// 21.
// *연습 문제 1
// 내 풀이 ↓
// const UNTIL_NUM = 10;
// let sum = 0;
// for(let i = 0; i <= UNTIL_NUM; i++){
// 	if(i % 2) continue;
// 	console.log(i);
// 	sum += i;
// }
// console.log(sum);
// 정답 풀이 ↓
// const UNTIL_NUM2 = 10;
// let sum2 = 0;
// for(let i = 0; i <= UNTIL_NUM2; i++){
// 	if(i % 2 == 0){
// 		sum2 += i;
// 		console.log(i);
// 	}
// }
// console.log(sum2);

// *연습 문제 2
// 내 풀이 ↓ (정답 풀이와 같음)
// for(let i = 2; i <= 9; i++){
// 	for(let j = 1; j <= 9; j++){
// 		console.log(`${i} x ${j} = ${i * j}`);
// 	}
// }


let nums = [2,7,11,15], target = 9, result = [];
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
		for(let j = 0; j < nums.length; j++){
			if(nums[i] + nums[j] == target){
				result.push(i,j);
				return result;
			}
		}
	}
};
console.log(twoSum(nums, target))