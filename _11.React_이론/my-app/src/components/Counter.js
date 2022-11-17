import React, { useState } from 'react';

function Counter() {
	// 관용적으로 변수명을 state, setState로 사용
	// 값, 값을 변경할 때 쓰는 함수
	// useState 함수를 호출할 때 인자로 초기값을 넘길 수 있음
	// setCount 함수 안에 count값을 업데이트 할 식 or 값을 씀
	const operators = ['+', '-', '*'];
	// 원시 타입
	// const [count, setCount] = useState(0);
	// const [show, setShow] = useState(true);
	// const [operator, setOperator] = useState(operators[0]);

	// 참조 타입
	const [info, setInfo] = useState({
		count: 0,
		show: true,
		operator: operators[0]
	});
	return (
		<div>
			<button onClick={ () => {
				let result;
				if(info.operator === '+') result = info.count + 1;
				if(info.operator === '-') result = info.count - 1;
				if(info.operator === '*') result = info.count * -1;
				setInfo({...info, count: result});
			} }>{info.operator}1</button>
			<button onClick={ () => {
				// info.show = !info.show
				setInfo({...info, show : !info.show});
			} }>Show & Hide</button>
			<button onClick={ () => {
				const idx = Math.floor((Math.random() * operators.length));
				setInfo({...info, operator : operators[idx]})
			}}>Change Operator</button>
			<br />
			{ info.show && `Counter : ${info.count}` }
		</div>
	);
}

export default Counter;