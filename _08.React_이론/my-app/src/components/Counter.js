import React, { useState } from 'react';

function Counter() {
	// 관용적으로 변수명을 state, setState로 사용
	// 값, 값을 변경할 때 쓰는 함수
	// useState 함수를 호출할 때 인자로 초기값을 넘길 수 있음
	// setCount 함수 안에 count값을 업데이트 할 식 or 값을 씀
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={ () => setCount(count+1) }>+1</button>
			<br />
			Counter : {count}
		</div>
	);
}

export default Counter;