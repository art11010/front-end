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

// // 1. basic recursive function
// function recursive(num){
// 	if(num == 0) return 0;
// 	return num + recursive(num - 1);
// }
// console.log(recursive(3));
// // 2. factorial function
// function factorial(x){
// 	if(x === 0) return 1;
// 	return x * factorial(x - 1);
// }
// console.log(factorial(3));

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

