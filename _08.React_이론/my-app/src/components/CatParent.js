import React, { useRef, useState } from "react";
import Cat from "./Cat";

export default function CatParent() {
	// const catRef = useRef();
	const [height, setHeight] = useState(1);

	const catCallbackRef = (node) => {
		if(node !== null){
			setHeight(node.getBoundingClientRect().height)
		}
	}

	console.log('부모 컴포넌트 CatParent : ');
	// console.log(catRef);

	const ageRef = useRef(1);

	return (
		<div>
			<h4> 고양이가 세상을 구한다 ️</h4>
			<div>
				<Cat a={"a"} ref={catCallbackRef} />
				<h3>나이 : { ageRef.current }</h3>
				<h3>키 : { height }</h3>
				{/* <button onClick={ () => { alert(catRef.current.height) } }>고앵스 크기 plz</button> */}
				<button onClick={ () => ageRef.current = ageRef.current + 1 }>새해</button>
				{/* <button onClick={ () => setState(state + 1) }>테스트</button> */}
			</div>
		</div>
	);
}