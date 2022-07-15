import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ReactPage(props) {

	// const docs = [
	// 	{
	// 		id: 1,
	// 		title: 'React 1',
	// 		date: '21/07/2022'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'React 2',
	// 		date: '22/07/2022'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'React 3',
	// 		date: '23/07/2022'
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'React 4',
	// 		date: '24/07/2022'
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'React 5',
	// 		date: '25/07/2022'
	// 	},
	// ];

	const [docs, setDocs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			const result = res.data;
			console.log(res);
			console.log(result);
			return result;
		}
		fetchData().then(res => { setDocs(res) });
	}, []);

	return (
		<div>
			{/* <h2>ReactPage</h2> */}
			<ul>
			{ docs.map((doc) =>
				<li key={doc.id}><Link to={`${doc.title}`}>{doc.title}</Link></li>
			) }
			</ul>
		</div>
	);
}

export default ReactPage;