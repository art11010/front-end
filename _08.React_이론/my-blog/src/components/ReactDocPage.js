import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReactDocPage(props) {
	const params = useParams();

	const navigate = useNavigate();
	return (
		<>
			<h5 onClick={() => navigate('/')}>logo</h5>
			<div>
				ReactDocPage ##{ params.docId }
			</div>
		</>
	);
}

export default ReactDocPage;