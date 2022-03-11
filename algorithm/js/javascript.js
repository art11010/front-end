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
let user = {
	name: 'john',
	age: 27
};
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
// admin.name = "park"
// console.log(admin.name);
// console.log(user.name);	john -> park 으로 변경됨
// user.age = 30
// console.log(user.age);	27 -> 30 으로 변경됨
// console.log(admin.age);