import React, { useState } from "react";

const Banner = () => {
	const [visible, setVisible] = useState(true);

	const getCoupon = () => {
		alert('행복 당첨 : )');
	}
	const closeBanner = (e) => {
		e.stopPropagation();
		setVisible(false);	// 비동기
	}

	return visible &&
		<div onClick={ getCoupon }
			style={{
				backgroundColor: "orange",
				fontWeight: "bold",
				height: "50px",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			이 곳을 클릭해서 쿠폰을 받아가세요.
			<button onClick={ closeBanner }>닫기</button>
		</div>
};

export default Banner;