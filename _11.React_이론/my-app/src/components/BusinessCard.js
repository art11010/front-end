import React from 'react';

function BusinessCard(props){
	console.log(props)
	const { company, team, name, phoneNumber, email } = props.info;
	return(
		<div>
			회사 : {company}<br />
			팀 : {team}<br />
			이름 : {name}<br />
			번호 : {phoneNumber}<br />
			메일 : {email}<br />
		</div>
	)
};

export default BusinessCard;