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
// A === A && expression
// 조건이 true일 경우 : && 이후에 위치한 expression 반환
// const andPrmt = 'yeahzing';
// const count = 0;
// function solution(andPrmt,count) {
// 	console.log(count, !count, !!count);
// 	return andPrmt === 'yeahzing' && `Hello, ${andPrmt}!! Learn React`
// }
// console.log(solution(andPrmt, count));


// - - - - - - - - - - - - - - - - - - - -

// 14. 조건문 if else
// 삼항 연산자
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

// - - - - - - - - - - - - - - - - - - - -

// 22. 함수
// // 함수 선언식
// function add(x, y){
// 	return x + y;
// }
// // 함수 표현식
// const add = function(x, y){
// 	return x + y;
// }
// // 화살표 함수
// const add = (x, y) => x + y;

// // 매개변수 기본 값 설정
// function add(x, y = 10){
// 	console.log(x,y);
// }
// add(5);

// // 매개변수 없이 인자 전달 (arguments)
// function add(){
// 	console.log(arguments[0] - arguments[1]);
// }
// add(10, 20);

// // 함수 반환
// function add(x, y){
// 	return x + y;
// 	console.log('hello');
// }
// console.log(add(10, 20));

// function dummy(){}
// console.log(dummy());

// function chckAge(age){
// 	if(age >= 18){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
// console.log(chckAge(14), chckAge(20));

// - - - - - - - - - - - - - - - - - - - -

// 23. 재귀 함수
// 함수 내부에서 자기 자신을 또 다시 호출하는 것
// 무한 루프에 빠지지 않게 exit code 필요
// function recurseFn(){
// 	recurseFn();
// }
// recurseFn();

// 1. 기본 재귀
// function recursive(num){
// 	if(num == 0) return;
// 	console.log('1 : ' + num);
// 	recursive(--num);
// 	console.log('2 : ' + num);
// }
// recursive(3);

// 2. 더하기 재귀함수
// function recursive(num){
// 	if(num == 0) return 0;
// 	console.log('1 : ' + num);
// 	return num + recursive(--num);
// 	console.log('2 : ' + num);
// }
// // 함수가 있는 곳에 함수의 return 값이 들어가는 거!!!!!
// // 3 + (2 + (1 + (0))) = 6
// recursive(3);

// 3. 팩토리얼
// function factorial(num){
// 	if(num == 0) return 1;
// 	return num * factorial(num-1);
// }
// // 4 * (3 * (2 * (1))) = 24
// console.log(factorial(4));

// - - - - - - - - - - - - - - - - - - - -

// 24.
// 콜백 함수 : 다른 함수의 매개변수로 전달되는 함수
// 고차 함수 : 매개변수를 통해 함수를 받아 호출하는 함수
// function add(x, y){return x + y;}
// function sub(x, y){return x - y;}
// function mul(x, y){return x * y;}
// function div(x, y){return x / y;}
// function calc(callback, x, y){
// 	return callback(x, y);
// }
// console.log(add(7, 3));
// console.log(calc(add, 7, 3));
// console.log(calc(sub, 7, 3));
// console.log(calc(mul, 7, 3));
// console.log(calc(div, 7, 3));

// - - - - - - - - - - - - - - - - - - - -

// 25.
// *연습 문제 1
// 내 풀이 ↓ (정답 풀이와 같음)
// function MAX(x, y){
// 	if(x > y) return x;
// 	return y;
// }
// console.log(MAX(0,3));
// console.log(MAX(-1,5));
// console.log(MAX(100,7));
// 정답 풀이 ↓
// function MAX2(x, y){
// 	return x > y ? x : y;
// }
// console.log(MAX2(0,3));
// console.log(MAX2(-1,5));
// console.log(MAX2(100,7));

// - - - - - - - - - - - - - - - - - - - -

// 26. Method
// 함수 선언식
// function add_1(x, y){
// 	return x + y;
// }
// // 함수 표현식
// const add_2 = function(x, y){
// 	return x + y;
// }
// // 화살표 함수
// const add_3 = (x, y) => x + y;

// const add_4 = add_1;

// console.log(add_4(1,3));
// console.log(add_1 == add_2, add_1 == add_4);
// console.log(Object.getOwnPropertyDescriptors(add_1));
// console.log(Object.getOwnPropertyDescriptors(add_2));
// console.log(Object.getOwnPropertyDescriptors(add_3));
// console.log(Object.getOwnPropertyDescriptors(add_4));

// 배열의 요소(element) or 객체의 속성(property)에 함수 저장 가능
// let arr = ['john', 27, function subFn(){ console.log('Hey'); }];
// arr[2]();

// let obj = {
// 	name: 'john',
// 	age: 27,
// 	subFn(){
// 		console.log('Hey ' + this.name);
// 	},
// 	func: subFn
// }
// function subFn(){ console.log('Hey'); }
// obj.subFn();
// obj.func();

// console.log(typeof arr[2]);
// console.log(typeof obj.subFn);
// console.log(typeof subFn);
// console.log(Object.getOwnPropertyDescriptors(arr));
// console.log(Object.getOwnPropertyDescriptors(obj));

// this
// let user = {name: 'john'};
// let admin = {name: 'admin'};
// function heyFn(){
// 	console.log('hey '+ this.name);
// }
// user.func = heyFn;
// admin.func = heyFn;
// user.func();
// admin.func();
// user['func']();
// admin['func']();

// - - - - - - - - - - - - - - - - - - - -

// 27. Number
// 지수 표기법(Exponential notation)
// let billion_1 = 1000000000;	// 0이 9개
// let billion_2 = 1e9;	// 0이 9개
// let us = 1e-6;	// 0.000001

// 진법 표기 : 0x(16진수), 0o(8진수), 0b(2진수)
// console.log(0x0f, 0o17, 0b1111);

// 형 변환
// let num = 10;
// num.toString(16) : 16진수
// num.toString(2) : 2진수
// parseInt(num, 2) : 10진수
// console.log(us.toString(), typeof us.toString(), typeof String(us));

// 자리 수 표현
// Number.toFixed(x) : x자리까지 소수 보여짐
// Number.toPrecision(x) : 양수(음수 안 됨)를 포함한 x자리까지 보여짐
// let num_1 = 125.0;
// let num_2 = 123.456;
// console.log(num_1 - num_2);
// console.log((num_1 - num_2).toFixed(3), (num_1 - num_2).toPrecision(2));
// console.log(us.toFixed(3), us.toPrecision(3));

// Number 자료형 확인
// isNaN : 숫자가 아닌지 맞는지 확인(Not a Number, 부정형)
// isFinite : 숫자인지 확인(Infinity도 false)
// console.log(!Number.isNaN(123), !Number.isNaN('hey'));
// console.log(Number.isFinite(123), Number.isFinite(Infinity), Number.isFinite('hey'));

// 정수 실수 확인
// Number.isInteger() : 정수인지 실수 인지 확인
// console.log(Number.isInteger(Math.sqrt(3)));

// 정수 실수 형 변환
// Number.parseInt : 정수로 변환
// Number.parseFloat : 실수로 변환
// console.log(Number.parseInt('1.25px'), Number.parseInt('0f', 16))
// console.log(Number.parseFloat('1.25em'))

// - - - - - - - - - - - - - - - - - - - -

// 28. String
// 문자 표기
// console.log('line\nfeed');			// 줄 내림
// console.log('carriage\rreturn');	// 줄 내림
// console.log('backslash \\');		// 슬래시 표현
// console.log('tab\ttab');			// tab 표현
// console.log('\u{1F60D}');			// 유니코드 표현

// 문자열 길이 / 접근
// let str = `hello
// world`;
// let linStr = 'hello\nworld';
// // 길이
// console.log(str.length, linStr.length);
// // 접근
// console.log(str.charAt(1));			// 1번 째 문자 => e
// console.log(str.charCodeAt(1));		// 1번 째 문자(e)에 대한 코드 값
// console.log(str[1]);					// 1번 째 문자 => e

// 문자열 검색 / 변환
// // 검색
// let str2 = 'Hello World';
// console.log(str2.indexOf('l'));				// i의 index
// console.log(str2.indexOf('l', 3));			// 3번재 문자 이후의 i index
// console.log(str2.lastIndexOf('l'));			// 마지막 i의 index
// console.log(str2.includes('hello'));		// hello를 포함하는지 확인
// console.log(str2.startsWith('ello', 1));	// ello로 시작하는 지 확인
// console.log(str2.endsWith('world'));		// world로 끝나는 지 확인
// // 변환
// console.log(str2.toUpperCase());	// 모두 대문자
// console.log(str2.toLowerCase());	// 모두 소문자


// - - - - - - - - - - - - - - - - - - - -

// 29. String
// 문자열 치환
// String.replace(orginal, change)
// /문자/g(전체)i(대소문자 구분 X)
// let text = 'helLo, world:)';
// let chngTxt = '';
// chngTxt = text.replace('world','earth');
// console.log(text, chngTxt);
// console.log(text.replace(':)','!'), text.replace('L','l'));
// console.log(text.replace(/l/g, 'i'));
// console.log(text.replace(/l/gi, 'i'));

// 문자열 추출
// 위치 기반 추출 : String.slice(start, end), String.substring(start, end)
// 길이 기반 추출 : String.substr(start, length)
// let text = 'hello, world:)';
// console.log(text.slice(2, 6));	// 2번째 부터 6번째 문자
// console.log(text.slice(2));		// 2번째 이후 문자
// console.log(text.slice(-2));		// 뒤에서 2번째까지의 문자
// console.log(text.substring(2, 6));	// text.slice(2,6)와 같음
// console.log(text.substring(6, 2));	// 인자 중 작은 값을 시작 지점으로 여김
// console.log(text.slice(2, 6));
// console.log(text.substr(2, 6));		// 2번째 부터 6개의 문자
// console.log(text.substr(-5, 3));	// 뒤에서 5번째 부터 3개의 문자

// 문자열 분할
// 배열로 문자열 분할 : String.split(Separator, limit)
// let fruits = 'apple banana melon';

// result = fruits.split(' ');
// console.log(result, result[0], result[1], result[2]);

// result = fruits.split('');
// console.log(result, result.length, result[0]);

// result = fruits.split('', 3);		// 3번째 문자까지 분할
// console.log(result, result.length);


// - - - - - - - - - - - - - - - - - - - -

// 30. Array
// *배열 선언법
// let arry = [];				// []
// let arry = new Array(10);	// [ 10 empty items]

// 배열의 개수 및 접근
// let num = [1, 2, 3, 4];
// console.log(num.length, num[0])
// num[0] = 5;
// console.log(num)		// 5

// 배열 타입 확인 : Array.isArray(변수명)
// let num = 123, str = ':D', arry = [':)',':D'];
// console.log(Array.isArray(num), Array.isArray(str), Array.isArray(arry))

// 배열 요소 삭제 : delete array[index]	// 삭제해도 빈 배열로 남아있음
// let arry = [':)',':D','<3'];
// console.log(arry, arry.length);
// delete arry[1]
// console.log(arry, arry.length);	// [ ':)', <1 empty item>, '<3' ]

// - - - - - - - - - - - - - - - - - - - -

// 31. 배열 조작
// 배열 추가 / 삭제 (LIFO - last in front out, 마지막에 들어온 게 먼저 나간다.)
// let arry = ['송','강','짱'];
// Back
// ret = arry.push('멋져');
// console.log(arry, ret);	// 맨 뒤에 추가됨, push : arry.length를 return
// ret = arry.pop();
// console.log(arry, ret);	// 맨 뒤 값 삭제, pop : 삭제된 데이터를 return
// // Front
// ret = arry.unshift('멋져');
// console.log(arry, ret);	// 맨 앞에 추가됨, unshift : arry.length를 return
// ret = arry.shift();
// console.log(arry, ret);	// 맨 앞 값 삭제, shift : 삭제된 데이터를 return

// *배열 데이터 조작
// 원본 배열을 자름
// 배열 쪼개기 : Array.splice(index,deleteNum,elementName,...)
// let arry = ['송','강','짱'];
// ret = arry.splice(1);		// 1번째 이후에 배열을 짤라 쪼갬
// console.log(arry, ret);		// splice(i) : 짜른 값 return
// arry = ['송','강','짱'];
// ret = arry.splice(1, 1);	// 1번째 이후에 1개만 짤라 쪼갬
// console.log(arry, ret);		// splice(i, n) : 짜른 값 return
// arry = ['송','강','짱'];
// ret = arry.splice(1, 1, '예','지');	// 삭제된 위치에서 데이터 추가
// console.log(arry, ret);		// splice(i, n, v) : 짜른 값 return

// *배열에서 데이터 추출
// 원본 배열에 영향을 미치지 않음
// 배열 삭제 : Array.slice(start, end)
// let fruits = ['apple','orange','melon'];
// console.log(fruits, fruits.slice(1));	// 2(1+1)번째 이후의 배열 추출
// console.log(fruits, fruits.slice(1,2));	// 2(1+1)번째 부터 2번째 배열 추출
// console.log(fruits, fruits.slice(-2));	// 뒤에서 2번째 배열 추출
// 배열 병합 : Array.concat(arg1, arg2...)
// console.log(fruits.concat('strawberry'));
// console.log(fruits.concat(['cherry','banana']));
// console.log(fruits.concat(['cherry','banana'],'mango'));

// 배열 반복문
// let fruits = ['apple','orange','melon'];
// // 1. for ...length(index 접근)
// for(let i = 0; i < fruits.length; i++){
// 	console.log('for : ' + fruits[i]);
// }
// // 2. for of(element 접근, 변수에 요소를 넣음)
// for(let fruit of fruits){
// 	console.log('of : ' + fruit);
// }
// // 3. for in(key(index num) 접근)
// for(let key in fruits){
// 	console.log('in : ' + fruits[key] + ', key : '+ key);
// }

// - - - - - - - - - - - - - - - - - - - -

// 32.
// *배열 탐색
// let fruits = ['apple','orange','banana','orange','melon'];
// 1. index 탐색(앞에서부터) : Array.indexOf(item, from)
// console.log(fruits.indexOf('orange'));		// 가장 앞에 있는 orange index 값을 return
// console.log(fruits.indexOf('Orange'));		// 값이 없을 땐 -1 return
// console.log(fruits.indexOf('orange'), 2);	// 2번째 이후의 orange index 값을 return

// // 2. index 탐색(뒤에서부터) : Array.lastIndexOf(item, from)
// console.log(fruits.lastIndexOf('orange'));		// 가장 뒤에 있는 orange index 값을 return
// console.log(fruits.lastIndexOf('orange', -3));	// 뒤에서 3번째 이후의 orange index 값을 return
// console.log(fruits.lastIndexOf('orange', 0));	// 0, 즉 1번째 이후의 데이터는 없기 때문에 -1 return

// // 3. 값 포함 여부 확인(Boolean) : Array.includes(item, from)
// console.log(fruits.includes('banana',3));
// console.log(fruits.includes('Banana'));
// console.log(fruits.includes(0));

// *배열 변형
// 1. 배열 정렬/반전 : Array.sort(), Array.reverse()
// Number, String 모두 사용 가능(전부 String으로 변환하여 정렬)
// let nums = [1, -1, 4, 5, 2, 0];
// console.log(nums.sort());		// 값을 정렬(오름차순)
// console.log(nums.reverse());	// 현재 있는 데이터를 기반으로 좌우 반전
// // 2. 배열 값을 문자열로 변환 : Array.join()
// let fruits = ['apple', 'orange', 'banana', 'melon'];
// console.log(fruits.sort());		// 문자도 알바펫 or 가나다 기준으로 정렬
// let str = fruits.join();				// 배열을 ,로 구분하여 문자열 변환
// let str_separator = fruits.join(';');	// 배열을 ;로 구분하여 문자열 변환
// let result = str.split(',');			// ,로 구분하여 배열로 변환
// console.log(str, str_separator, result);

// - - - - - - - - - - - - - - - - - - - -

// 33. 고차함수 part 1
// 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
// 매개변수로 전달되는 함수 : 콜백 함수(Callback function)
// 대표 배열 조작 메서드 : sort, forEach, map, find, filter, reduce

// 임의 정렬 : Array.sort(callback function)
// sort의 문제점 : [4, 10] 일 경우 sort 사용시 [10, 4]로 return
// sort의 한계점 : 대소문자 구분 없이 정렬 불가능
// ↑ 위 문제ㆍ한계점을 해결하기 위해 callback함수을 받아 고차함수를 지원

// sort의 문제점 해결
// let nums = [1, -1, 4, 0, 10, 20, 12];
// console.log(nums.sort());
// // 두 가지 변수를 받아 retrun x - y 값이 > 0 일 경우 두 값의 위치 바뀜
// let ascending_num = function(x, y){ return x - y; };
// let descending_num = function(x, y){ return y - x; };
// console.log(nums.sort(ascending_num));
// console.log(nums.sort(descending_num));

// sort의 한계점 해결
// let fruits = ['apple','Orange','orange','melon'];
// let ascending_str = function(x, y){
// 	x = x.toUpperCase();	// 변수를 대문자로 바꿈
// 	y = y.toUpperCase();
// 	if(x > y) return 1;			// retrun 값이 1 일 경우 두 값의 위치 바뀜
// 	else if(y > x) return -1;
// 	else return 0;
// }
// let descending_str = function(x, y){
// 	x = x.toUpperCase();
// 	y = y.toUpperCase();
// 	if(x < y) return 1;
// 	else if(y < x) return -1;
// 	else return 0;
// }
// console.log(fruits.sort(ascending_str));
// console.log(fruits.sort(descending_str));

// // sort의 문제점ㆍ한계점 해결
// let ascending_order = function(x, y){
// 	if( typeof x === 'string') x = x.toUpperCase();
// 	if( typeof y === 'string') y = y.toUpperCase();
// 	return x > y ? 1 : -1;
// }
// let descending_order = function(x, y){
// 	if( typeof x === 'string') x = x.toUpperCase();
// 	if( typeof y === 'string') y = y.toUpperCase();
// 	return x < y ? 1 : -1;
// }
// let nums = [1, -1, 4, 0, 10, 20, 12];
// console.log(nums.sort(ascending_order));
// console.log(nums.sort(descending_order));
// let fruits = ['apple','Orange','orange','melon'];
// console.log(fruits.sort(ascending_order));
// console.log(fruits.sort(descending_order));


// - - - - - - - - - - - - - - - - - - - -

// 34. 고차함수 part 2

// 반복 작업 : Array.forEach(function(item, index, array){})
// item : 요소, index : 배열 위치, array : 배열
// let nums = [5, 6, 7];
// 같은 작업 for 이용
// for(let i = 0; i < nums.length; i++){
// 	console.log(nums[i]);
// }
// 같은 작업 forEach 이용
// nums.forEach(function(itm, idx, arr){
// 	console.log(itm, idx, arr);
// });

// 콜백함수 결과를 '배열로 반환' : Array.map(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let nums = [1, 2, 3, 4, 5];
// let use_for = [];
// // 같은 작업 for 이용
// for(let i = 0; i < nums.length; i++){
// 	use_for.push(nums[i] * 2);
// }
// console.log(use_for);
// // 같은 작업 map 이용
// let use_map = nums.map(function(itm, idx, arr){
// 	console.log(itm, idx, arr)
// 	return itm * 2;
// });
// console.log(use_map);

// 조건에 만족하는 '하나의 값' 반환 : Array.find(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let users = [
// 	{name: 'mini', age: 25, job: false},
// 	{name: 'jiji', age: 26, job: false},
// 	{name: 'luving', age: 2728, job: true},
// ]
// let find_job = users.find(function(itm){
// 	return itm.job === false;
// });
// console.log(find_job, find_job.job);
// let find_age = users.find(function(itm){
// 	return itm.age > 25;
// });
// console.log(find_age, find_age.age);

// 조건에 만족하는 '모든 값' '배열로' 반환 : Array.filter(function(item, index, array){})
// item : 배열 요소, index : 배열 위치, array : 배열
// let filter_job = users.filter(function(itm){
// 	return itm.job === false;
// });
// console.log(filter_job);
// let filter_age = users.filter(function(itm){
// 	return itm.age > 25;
// });
// console.log(filter_age);

// 누적 결과 값 반환 : Array.reduce(function(){accumulator, item, index, array},initial)
// accumulator : 이전 함수 결과
// item : 배열 요소, index : 배열 위치, array : 배열
// initial : loop를 할 초기값 index 설정 (초기값 : 1)
// let nums = [2, 2, 3, 4, 5];
// let call_count = 0;
// console.log('accumulator\titem\tindex');
// let sum = nums.reduce(function(acc, itm, idx, arr){
// 	console.log(acc, '\t\t\t\t\t', itm, '\t\t', idx)
// 	// call_count++;
// 	return acc + itm;
// },0);
// console.log(sum);

// - - - - - - - - - - - - - - - - - - - -

// 35. 생성자 함수
// 유사한 객체를 다중으로 만들 때 사용되는 함수
// 일반적으로 생성자 함수는 대문자로 시작
// 생성자 함수로 객체 생성시 new 연산자를 통해 '객체 생성'
// function FishBread(flavor, price){
// 	this.flavor = flavor;
// 	this.price = price;
// 	this.base = 'flour';
// }
// let bread = FishBread('sample', 1200);
// let cbread = new FishBread('cream', 1200);
// let rbread = new FishBread('redbeen', 1000);
// let mbread = new FishBread('milk', 1100);
// console.log(bread);		// undefined
// console.log(cbread);
// console.log(rbread);
// console.log(mbread);

// new.target : new 가 호출 됐는지 안 됐는지 확인
// let 몇번도는지확인 = 0;
// function User(name){
// 	console.log(몇번도는지확인, new.target);
// 	몇번도는지확인 ++;
// 	// new 가 없을 경우 if 문을 탐
// 	if(!new.target){
// 		return new User(name);
// 	}
// 	this.name = name;
// }
// console.log(User('john'));

// - - - - - - - - - - - - - - - - - - - -

// 36. collection
// 구조 or 비구조화 형태로 값을 담을 수 있는 공간
// Indexed collection : array, typed array
// keyed collection : object, map, set, week map, week set

// - - - - - - - - - - - - - - - - - - - -

// 37. Map
// Odject 대비 다양한 자료형의 key 허용
// [key, value] 형태로 이루어진 collection
// 값의 추가/삭제 시 메소드를 통해 수행이 필요함
// ↓ 대표 속성 및 메서드
// Map 생성자 : new Map()
// Map 개수 확인 : Map.size()
// Map 요소 추가 : Map.set(key, value)
// Map 요소 접근 : Map.get(key)
// Map 요소 삭제 : Map.delete(key)
// Map 전체 삭제 : Map.clear()
// Map 요소 존재 여부 확인 : Map.has(key)
// Map 그 밖의 메서드 : Map.keys(), Map.values(), Map.entires()

// Map 요소 추가/삭제
// let map = new Map();
// // Map 요소 추가 : Map.set(key, value)
// map.set('name', 'john');
// map.set(123, 456);
// map.set(true, 'boolean');
// console.log(map);
// // Map 개수 확인 : Map.size()
// console.log(map.size);
// // Map 요소 접근 : Map.get(key)
// console.log(map.get(123));
// console.log(map.get('name'));
// // Map 요소 삭제 : Map.delete(key)
// map.delete('name');
// console.log(map);
// // Map 전체 삭제 : Map.clear()
// map.clear();
// console.log(map);
// map.set('name', 'john').set(123, 456).set(true, 'boolean');	// chaining(연쇄) 사용 가능
// console.log(map);

// Map 반복문
// Map은 collection이기 때문에 iterator(반복자) 속성을 갖음
// 위 이유로 for of 구문을 통해 반복문 수행을 많이 함
// let recipe = new Map([
// 	// [key, values]
// 	['starwberry', 50],
// 	['banana', 100],
// 	['ice', 150],
// ]);
// for(let item of recipe.keys()) console.log(item);
// for(let amount of recipe.values()) console.log(amount);
// for(let entity of recipe) console.log(entity);
// console.log(recipe);

// Map -> Object 변환 : Map.entries()
// console.log(recipe.entries());
// console.log(recipe.entries().next(),recipe.entries().next().value);

// Object -> Map 변환 : Object.entries(), Object.fromEntries()
// console.log(recipe);
// let recipe_obj = Object.fromEntries(recipe);
// console.log(recipe_obj);		// Object 형태로 변환
// let recipe_kv = Object.entries(recipe_obj);
// console.log(recipe_kv);		// Array key,value 형태로 변환
// let recipe_map = new Map(recipe_kv);
// console.log(recipe_map);	// 다시 Map으로 형태 변환

// - - - - - - - - - - - - - - - - - - - -

// 38. Set
// value만을 저장, 중복을 허용하지 않는 collection
// 다양한 자료형을 value로 사용 가능
// ↓ 대표 속성 및 메서드
// Set 생성자 : new Set()
// Set 개수 확인 : Set.size
// Set 요소 추가 : Set.add()
// Set 요소 삭제 : Set.delete(value)
// Set 전체 삭제 : Set.clear()
// Set 요소 존재 여부 확인 : Set.has(value)
// Set 그 밖의 메서드 : Set.keys(), Set.values(), Set.entires()

// Set 요소 추가/삭제
// let set = new Set();
// let num = new Set([1, 2, 3, 4, 5]);
// let str = new Set('hello');
// console.log(set, num, str);
// // Set 요소 추가 : Set.add(value)
// set.add(1).add(1).add(10).add(20);	// chaining(연쇄) 사용 가능
// console.log(set);
// // Set 요소 존재 여부 확인 : Set.has(value)
// console.log(set.has(10), set.has(2));
// // Set 요소 삭제 : Set.delete(value)
// console.log(set.delete(1), set.delete(-1), set);
// // Set 전체 삭제 : Set.clear()
// console.log(set.clear(), set);


// Set 반복문
// Set은 collection이기 때문에 iterator(반복자) 속성을 갖음
// 위 이유로 for of 구문을 통해 반복문 수행을 많이 함
// let str = new Set('hello');
// console.log(str);
// for(let item of str) console.log(item);			// 전부 value return
// for(let item of str.keys()) console.log(item);	// 전부 value return
// for(let item of str.values()) console.log(item);	// 전부 value return
// for(let item of str.entries()) console.log(item);	// Map과의 호환성을 위해 key, value 값으로 return
// console.log(str.keys(), str.entries())

// Set -> Object 변환
// 1. Set.entries()
// console.log(recipe.entries());
// console.log(recipe.entries().next(),recipe.entries().next().value);
// 2. Array.from(new Set(arr));

// Object -> Set 변환 : Object.entries(), Object.fromEntries()
// console.log(recipe);
// let recipe_obj = Object.fromEntries(recipe);
// console.log(recipe_obj);	// Object 형태로 변환
// let recipe_kv = Object.entries(recipe_obj);
// console.log(recipe_kv);		// Array key,value 형태로 변환
// let recipe_Set = new Set(recipe_kv);
// console.log(recipe_Set);	// 다시 Set으로 형태 변환

// - - - - - - - - - - - - - - - - - - - -

// 39. Math
// 표준 Built-in 객체
// 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
// Math는 생성자 함수가 아니면 모든 속성과 메서드는 정적 Math.메서드명()으로 호출 가능
// ↓ 대표 속성 및 메서드
// Math.E : 오일러 상수
// Math.PI : PI
// Math.abs(x) : 절대값
// Math.max(...x) : 최대값
// Math.min(...x) : 최소값
// Math.random() : 랜덤 난수 값
// Math.pow(x, y), Math.sqrt(x) : 제곱과 제곱근
// Math.round(x), Math.ceil(x), Math.floor(x) : 소수점 처리

// Math 최대/최소/절대값
// // Math.max(...x) : 최대값
// // Math.min(...x) : 최소값
// console.log(Math.max(1, -1), Math.min(1, -1));
// console.log(Math.max(1, -1, 5, 17, -4), Math.min(1, -1, 5, 17, -4));
// let nums = [1, -1, 5, 23, 17, -4];
// console.log(Math.max(nums));	// output : NaN
// // Math.max()는 'value : number'형태로 return 시키기 때문에 Number가 아님
// // 때문에 apply 함수를 써서 최대값 추출
// console.log(Math.max.apply(null, nums));
// console.log(Math.min.apply(null, nums));
// // ... <- Spread 문법
// // Spread 문법 설명 : https://paperblock.tistory.com/62
// console.log(Math.max(...nums), Math.min(...nums));
// // Math.abs(x) : 절대값
// console.log(Math.abs(1), Math.abs(-1), Math.abs(-Infinity));

// Math 속성 및 랜덤 값
// console.log(Math.E, Math.PI);
// for(let i = 0; i < 3; i++){
// 	// Math.random : 0 ~ 1 사이 난 수 return
// 	// Number.parseInt : 정수로 바꿔줌
// 	console.log(Math.random(), Number.parseInt(Math.random() * 10));
// 	// Number.parseInt(Math.random() * 10) : 1자리 정수
// 	// Number.parseInt(Math.random() * 100) : 10자리 정수
// 	// Number.parseInt(Math.random() * 1000) : 100자리 정수 등등
// }

// Math 제곱/제곱근/소수점 처리
// // 제곱 : Math.pow(x, y)
// console.log(Math.pow(2, 3), 2 ** 3);
// // 제곱근 : Math.sqrt(x)
// console.log(Math.sqrt(4), Math.sqrt(2));
// // 소수점 반올림 : Math.round(x)
// console.log(Math.round(3.5), Math.round(-2.3), Math.round(-2.7));
// // 소수점 올림 : Math.ceil(x)
// console.log(Math.ceil(3.5), Math.ceil(-2.3), Math.ceil(-2.7));
// // 소수점 내림 : Math.floor(x)
// console.log(Math.floor(3.5), Math.floor(-2.3), Math.floor(-2.7));


// - - - - - - - - - - - - - - - - - - - -

// 40. Date
// 표준 Built-in 객체
// 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
// ↓ 대표 속성 및 메서드
// Date 생성자 : new Date()
// 현재 시간 기준 문자열 : Date()
// 날짜 정보 얻기 (년/월/일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
// 날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
// 날짜 정보 설정 (시/분/초/ms) : Date.setFullYear(), Date.setMonth(), Date.setDate()
// 날짜 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
// 그 외 날짜 정보 얻기 : Date.getDay(), Date.getTime(). Date.getTimezoneOffset()
// 그 외 날짜 정보 설정 : Date.parse(string)

// Date 생성자 종류 : new Date(), new Date(miniseconds), new Date(datestring), new Date(yeae, month, date, hours, minutes, seconds, ms)
// // 1. Default
// console.log(new Date());	// 현재 날짜 기준 Object
// console.log(Date());		// 현재 String
// // 2. milliseconds (1/1000)sec
// console.log(new Date(0));					// 초기값(1970.01.01) return
// console.log(new Date(1000 * 3600 * 24));	// 초기값에 하루를 추가
// // 3. date string
// console.log(new Date('2020-01-01'));	// String을 받아서 데이터 객체로 변환
// // 4. year, month(0 ~ 11), ..., ms
// console.log(new Date(2021, 0, 1));		// 개별 요소를 받아 설정 가능
// 										// UTC 때매 9시간 차이남
// console.log(new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24)));
// // Date.UTC()를 통해 보정? 가능
// console.log(new Date(Date.UTC(2021, 0, 1)));

// 날짜 정보 얻기
// let date = new Date(Date.UTC(2022, 2, 22));
// console.log(date);
// // 년/월/일 : Date.getFullYear(), Date.getMonth(), Date.getDate(), Date.getDay()
// // Date.getDay() : 일요일(0) ~ 토요일(6)
// console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getDay());
// // 시/분/초/ms : Date.getHours(), Date.getMinutes(), Date.getSeconds()
// console.log(date.getHours(), date.getUTCHours());
// // console.log(date.getHours(), date.getMinutes(), date.getSeconds());
// // 주어진 일시 : Date.getTime()
// console.log(date.getTime(), new Date(date.getTime()));	// 현재 시간을 milliseconds로 return
// // 현지 시간 : Date.getTimezoneOffset()
// console.log(date.getTimezoneOffset());	// UTC 기준으로 현지 시간과 얼마나 차이나는지 나옴

// 날짜 정보 설정
// let date = new Date();
// console.log(date);
// // 시/분/초/ms : Date.setFullYear(), Date.setMonth(), Date.setDate()
// let now_year = date.setFullYear(2022, 3, 22);
// 원하는 연도 설정, milliseconds로 return
// console.log(date, now_year);
// console.log(new Date(now_year));
// date.setDate(2);		// 원하는 일 설정
// console.log(date);
// date.setDate(0);		// 이전 달의 마지막 날
// console.log(date);
// date.setMonth(7);		// 원하는 달 설정
// console.log(date);
// // 시/분/초/ms : Date.setHours(), Date.setMinutes(), Date.setSeconds()
// date.setHours(date.getHours() + 2);	// 원하는 시간 설정 (+2 시간)
// console.log(date);

// 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
// YYYY-MM-DD : 연-월-일
// T : 구분 기호
// HH:mm.ss.sss : 시-분-초.밀리초
// Z : option, 미설정 - 현재 로컬 기준 UTO, 설정 - UTO + 0 기준
// milliseconds로 return
// let parse = Date.parse('2020-03-31T00:00:00.000');
// console.log(parse);
// console.log(new Date(parse));
// console.log(new Date(Date.parse('2020-03-31T00:00:00.000Z')));

// beanchmark, 성능 측정
// function dataSub(new_date, old_date){
// 	return new_date - old_date;
// }
// function getTime(new_date, old_date){
// 	return new_date.getTime() - old_date.getTime();
// }
// function beanchmark(callback){
// 	let date_1 = new Date('2020-01-01');
// 	let date_2 = new Date();
// 	let start = Date.now();
// 	for(let i = 0; i < 100000; i++){
// 		callback(date_1, date_2);
// 	}
// 	return Date.now() - start;
// }
// console.log('dataSub : ' + beanchmark(dataSub) + 'ms');
// console.log('getTime : ' + beanchmark(getTime) + 'ms');

// - - - - - - - - - - - - - - - - - - - -

// 41. N차원 Array
// 배열 안에 N개 만큼의 배열이 존재하는 객체
// 2ㆍ3차 지도 정보나 RGB를 저장하는 2차원 사진 파일 등을 표현할 때 사용

// 2차원 배열
// let array = [
// 	[101, 102, 103],
// 	[201, 202, 203],
// 	[301, 302, 303]
// ]
// let arrPop = array.pop();					// 가장 뒷 요소를 뺌
// 											// 빼낸 요소 return
// console.log(arrPop, array, array.length);
// let arrPush = array.push([401, 402, 403]);	// 추가된 후 length return
// console.log(arrPush, array, array.length);

// 2차원 배열 반복문
// let array = [
// 	[101, 102, 103],
// 	[201, 202, 203],
// 	[301, 302, 303]
// ]
// for(let i = 0; i < array.length; i++){
// 	for(let j = 0; j < array.length; j++){
// 		console.log(array[i][j]);
// 	}
// }
// let fruits = [
// 	['strawberry', 50],
// 	['banana', 100],
// 	['ice', 150],
// ]
// for(let i = 0; i < array.length; i++){
// 	console.log(`fruit : ${fruits[i][0]}, amount : ${fruits[i][1]}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 43. 기본 문제 풀이(반복문) - 별별별
// function answer(num){
// 	let result = '';
// 	for(let i = 0; i < num; i++){
// 		result += '*'
// 	}
// 	return result;
// }
// let input = [5, 7, 12]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }


// - - - - - - - - - - - - - - - - - - - -

// 44. 기본 문제 풀이(반복문) - 두 수 사이 숫자
// function answer(x, y){
// 	let result = [];
// 	if(x > y){
// 		// let z = x; x = y; y = z;
// 		[x, y] = [y, x]		// x = y; y = x;
// 	}
// 	for(let i = x; i <= y; i++){
// 		result.push(i)
// 	}
// 	return result;
// }
// let input = [ [3, 7], [8, 3], [12, 10] ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]))
// }


// - - - - - - - - - - - - - - - - - - - -

// 45. 기본 문제 풀이(반복문) - 반 평균
// function answer(score){
// 	let average = 0;
// 	for(let i = 0; i < score.length; i++){
// 		average += score[i];
// 	}
// 	// average = (average / score.length).toFixed(2);
// 	average /= score.length
// 	average = average.toFixed(2);
// 	return average;
// }
// let input = [
// 	[80, 95, 65, 70, 100],
// 	[82, 77, 51, 64, 73, 90, 80],
// 	[100, 71, 59, 88, 72, 75, 91, 93]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 46. 기본 문제 풀이(반복문) - 핸드폰 판매
// function answer(employee){
// 	let employee_id;
// 	// employee_id = employee.indexOf(Math.max(...employee)) + 1;
// 	let max = 0;
// 	for(let i = 0; i < employee.length; i++){
// 		if( max < employee[i] ){
// 			max = employee[i];
// 			employee_id = i + 1;
// 			// employee_id = employee.indexOf(max) + 1;
// 		}
// 	}
// 	return employee_id;
// }
// let input = [
// 	[3, 7, 9, 6, 1],
// 	[2, 7, 1, 4, 3, 0, 5],
// 	[7, 5, 0, 1, 2, 12, 6]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 47. 기본 문제 풀이(반복문) - 무한 뺄셈
// function answer(s, e){
// 	let sequence = [];
// 	sequence.push(s);
// 	sequence.push(e);
// 	// 내 풀이 ↓
// 	// for(let i = sequence.length - 2; i < sequence.length - 1; i++){
// 	// 	if(sequence[i] - sequence[i + 1] >= 0){
// 	// 		sequence.push(sequence[i] - sequence[i + 1]);
// 	// 	}
// 	// }

// 	// 정답 풀이 ↓
// 	// let sum;
// 	// while(1){
// 	// 	sum = s - e;
// 	// 	s = e;
// 	// 	e = sum;
// 	// 	if(e < 0) break;
// 	// 	sequence.push(e)
// 	// }
// 	// return sequence;
// }
// let input = [ [9, 3],[6, 3],[13, 7] ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]))
// }

// - - - - - - - - - - - - - - - - - - - -

// 48. 기본 문제 풀이(조건문) - 대소 비교
// function answer(x, y){
// 	let result = '';
// 	if(x > y) result = '>';
// 	else if(x < y) result = '<';
// 	else  result = '=';
// 	return result;
// }
// let input = [ [3, 5], [7, 4], [2, 2] ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 49. 기본 문제 풀이(조건문) - 나누기와 대소 비교
// function answer(a, b, c, d){
// 	let result = '';
// 	x = a/b;
// 	y = c/d;
// 	if(x > y) result = 1;
// 	else if(x < y) result = -1;
// 	else  result = 0;
// 	return result;
// }
// let input = [ [14, 2, 6, 6], [6, 7, 8, 9], [18, 2, 36, 4] ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 50. 기본 문제 풀이(조건문) - 윤년 판결기
// function answer(year){
// 	let result;
// 	if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) result = true;
// 	else result = false;
// 	return result;
// }
// let input = [4, 100, 124, 247, 400]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 51. 기본 문제 풀이(조건문) - ATM 기기
// function answer(withdraw, total){
// 	let result;
// 	if( withdraw % 5 !== 0){
// 		result = total;
// 	}else{
// 		result = total < withdraw + 0.5 ? total : total - withdraw - 0.5
// 	}
// 	return result;
// }
// let input = [ [40, 130.0], [33, 130.0], [300, 300.0] ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 52. 기본 문제 풀이(조건문) - 네 번째 좌표
// function answer(x_arr, y_arr){
// 	let result = [];
// 	if( x_arr[0] == x_arr[1] ) result[0] = x_arr[2]
// 	else if( x_arr[0] == x_arr[2] ) result[0] = x_arr[1]
// 	else result[0] = x_arr[0]

// 	if( y_arr[0] == y_arr[1] ) result[1] = y_arr[2]
// 	else if( y_arr[0] == y_arr[2] ) result[1] = y_arr[1]
// 	else result[1] = y_arr[0]
// 	return result;
// }
// let input = [
// 	[ [5, 5, 8], [5, 8, 5]],
// 	[ [3, 1, 1], [2, 1, 2]],
// 	[ [7, 7, 3], [4, 1, 1]]
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]))
// }

// - - - - - - - - - - - - - - - - - - - -

// 53. 기본 문제 풀이(종합) - 최솟값 구하기
// function answer(x, y){
// 	let min;
// 	min = x > y ? min = y : min = x;
// 	return min;
// }
// let input = [ [16, 3], [-3, 1], [1000, 525] ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 54. 기본 문제 풀이(종합) - 제곱 구현
// function answer(x, y){
// 	let result = x;
// 	for(let i = 1; i < y; i++){
// 		result *= x
// 		console.log(result,i)
// 	}
// 	return result;
// }
// let input = [ [2, 3], [4, 6], [1, 100] ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 55. 기본 문제 풀이(종합) - 놀이기구 입장 제한
// function answer(user){
// 	let permit;
// 	// 내 풀이 ↓
// 	permit = user.height < 150 ? false : true;
// 	// 정답 풀이 ↓
// 	permit = user.height >= 150
// 	return permit;
// }
// let input = [
// 	{name: 'john', age: 27, height: 181},
// 	{name: 'alice', age: 12, height: 148},
// 	{name: 'bob', age: 14, height: 156},
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 56. 기본 문제 풀이(종합) - 요일 구하기
// function answer(str){
// 	let week = new Array(
// 		'sunday',
// 		'monday',
// 		'tuseday',
// 		'wendsday',
// 		'thursday',
// 		'firday',
// 		'saterday'
// 	);
// 	let day = new Date(str);
// 	day = week[day.getDay()];
// 	return day;
// }
// let input = [ '2021-01-27', '2021-02-27', '2021-03-14' ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 57. 기본 문제 풀이(종합) - 중복 단어 제거
// function answer(arr){
// 	let new_arr = [];
// 	// 내 풀이 ↓
// 	// 1. Set
// 	// new_arr = new Set(arr);
// 	// 2. for
// 	// for(let i = 0; i < arr.length; i++){
// 	// 	for(let j = i+1; j < arr.length; j++){
// 	// 		console.log(i, j);
// 	// 		if( arr[i] == arr[j]) arr.splice(j,1);
// 	// 	}
// 	// }
// 	// new_arr = arr;
// 	// 3. object
// 	// for(let i = 0; i < arr.length; i++){
// 	// 	let obj = {}
// 	// 	obj.key = arr[i];
// 	// 	obj.num = 1;
// 	// 	if( i > 0 ){
// 	// 		let result = true;
// 	// 		for(let j = 0; j < new_arr.length; j++){
// 	// 			if(new_arr[j].key == obj.key){
// 	// 				new_arr[j].num = new_arr[j].num + 1;
// 	// 				result = false;
// 	// 			}
// 	// 		}
// 	// 		if(result) new_arr.push(obj);
// 	// 	}else{
// 	// 		new_arr.push(obj)
// 	// 	}
// 	// }

// 	// 정답 풀이 ↓
// 	// 1.
// 	// new Set(arr).forEach(function(itm){
// 	// 	new_arr.push(itm);	// set 자료형을 배열로 변환
// 	// });
// 	// 2.
// 	// new_arr = Array.from(new Set(arr));	// set 자료형을 배열로 변환

// 	return new_arr;
// }
// let input = [
// 	['john', 'alice', 'alice', 'alice', 'alice'],
// 	['Hello', 'hello', 'HELLO', 'hello', 'hello', 'hello'],
// 	['kiwi', 'banana', 'mango', 'kiwi', 'banana']
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i]))
// }

// - - - - - - - - - - - - - - - - - - - -

// 58. 기본 문제 풀이(종합) - 배열 내 최대값 구하기
// function answer(arr){
// 	let max;
// 	// 내 풀이 ↓
// 	// 1. for
// 	max = arr[0];
// 	for(let i = 0; i < arr.length; i++){
// 		if( arr[i] > max ) max = arr[i];
// 	}
// 	// 2. Math
// 	max = Math.max.apply(null, arr);
// 	max = Math.max(...arr);
// 	// 정답 풀이 ↓ : 변수 초기하 외 다 같음
// 	max = Number.MIN_SAFE_INTEGER;	// 음수 중 가장 작은 음수
// 	return max;
// }
// let input = [
// 	[1, 6, 5, 2, 3],
// 	[19, 41, 23, -4, 17],
// 	[-64, -27, -41, -33, -59]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 59. 기본 문제 풀이(종합) - 스팸 메일
// function answer(str){
// 	let span_flag;
// 	return span_flag = str.toUpperCase().includes('ADVERT');
// }
// let input = [
// 	'RE: Request documents',
// 	'[Advertisement] free mobile!',
// 	'50% off this week (advertising)'
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`)
// }

// - - - - - - - - - - - - - - - - - - - -

// 60. 기본 문제 풀이(종합) - 배열 회전
// function answer(prmt){
// 	let result = [];
// 	// 내 풀이 ↓
// 	for(let i = prmt.length-1; i >= 0; i--){
// 		result.push(prmt[i])
// 	}
// 	// 정답 풀이 ↓
// 	let tmp;
// 	for(let i = 0; i < prmt.length / 2; i++){
// 		tmp = prmt[i];
// 		prmt[i] = prmt[prmt.length - 1 -i];
// 		prmt[prmt.length - 1 -i] = tmp
// 	}
// 	return result = prmt;
// }
// let input = [
// 	[1, 2, 3, 4],
// 	[-1, 6, 'hello', -15],
// 	['apple', 'banana', 'mango']
// ]
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i]));
// }

// - - - - - - - - - - - - - - - - - - - -

// 61. 기본 문제 풀이(종합) - 문자 교정
// function answer(prmt){
// 	let result = '';
// 	// 내 풀이 ↓
// 	spt = prmt.split(' ');
// 	for(let i = 0; i < spt.length; i++){
// 		first = spt[i].slice(0,1)
// 		spt[i] = spt[i].replace(first,first.toUpperCase());
// 	}
// 	return result = spt.join(' ');
// 	// 정답 풀이 ↓
// 	for(let item of prmt.split(' ')){
// 		// 1.
// 		item = item.replace(item[0],item[0].toUpperCase());
// 		result += item + ' ';
// 		// 2.
// 		result += item[0].toUpperCase() + item.slice(1) + ' ';
// 	}

// 	return result;
// }
// let input = [
// 	'Hello, My name is john',
// 	'This week closed due to COVID-19',
// 	'fifty persent off this week'
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 62. 기본 문제 풀이(종합) - 2차원 배열의 곱셈 합

// function answer(prmt){
// 	let result = 1;
// 	for(let i = 0; i < prmt.length; i++){
// 		for(item of prmt[i]){
// 			result *= item;
// 		}
// 	}
// 	return result;
// }
// let input = [
// 	[[1],[2],[3]],
// 	[
// 		[1, 2], [3, 4], [5, 6, 7]
// 	],
// 	[
// 		[5, 1], [0.2, 4, 0.5], [3, 9]
// 	]
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }

// - - - - - - - - - - - - - - - - - - - -

// 내 풀이 ↓
// 정답 풀이 ↓
// function answer(prmt){
// 	let result = '';
// 	return result;
// }
// let input = [
	
// ]
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i])}`);
// }
// for(let i = 0; i < input.length; i++){
// 	console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
// }
// for(let i = 0; i < input.length; i++){
// 	process.stdout.write(`#${i + 1} `);
// 	console.log(answer(input[i][0], input[i][1]));
// }