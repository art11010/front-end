import React from 'react';
import ghibli from "../image/ghibli.png";

function Welcome({withImg, firstName, lastName}) {
	// image + Hello, firstName, lastName
	return (
		<>
			{withImg && <img src={ghibli} alt="welcome Ghibli" height="200" />}
			<div>Hello!</div>
			<div>
				<span>{firstName} </span>
				{lastName}
			</div>
		</>
	);
}

export default Welcome;