import React, { useEffect, useState } from 'react';
import datas from './../data/cards';
import BusinessCard from './BusinessCard';

function PickedCards() {
	const [cards, setCards] = useState([]);
	const [pickedCards, setPickedCards] = useState([]);

	function draw(){
		// 조건 추가
		if( pickedCards.length > 2){
			const names = pickedCards.reduce((acc, cur) => {
				return acc = acc.concat(`${cur.name}, `)
			},'');
			return alert(`당첨자는 ${names}입니다.`);
		}

		// 추첨 버튼 클릭 시, 랜덤 명함 추출
		const randomIdx = Math.floor(Math.random() * cards.length);
		const randomItem = cards[randomIdx];

		// 중복 제거
		setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
		// 당첨자 저장(array)
		setPickedCards([...pickedCards, randomItem])
	}

	useEffect(() => {
		setCards(datas);
	}, [])

	const result = pickedCards.map((pickedCard) => <BusinessCard info={pickedCard} key={pickedCard.phoneNumber} />);

	return (
		<div className="App">
			{cards.length > 0 && <button onClick={draw}>추첨하기</button>}
			{/* {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]}/>} */}
			{pickedCards.length > 0 && result}
		</div>
	);
}

export default PickedCards;