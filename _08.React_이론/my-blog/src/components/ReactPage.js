import React from 'react';
import { Link } from 'react-router-dom';

// ↓ useFetch()
// import useFetch from './useFetch';

// ↓ swr
import axios from 'axios';
import useSWR from 'swr';
import { useState } from 'react';

function ReactPage() {
	// ↓ useFetch()
	// const docs = useFetch('https://jsonplaceholder.typicode.com/posts');

	// ↓ swr
	const [number, setNumber] = useState(0);
	async	function fetcher(url){
		const res = await axios.get(url);
		const result = res.data;
		console.log(res);
		console.log(result);
		return result;
	}
	const { data : docs, error } = useSWR('posts', fetcher('https://jsonplaceholder.typicode.com/posts'))

	if( error ) return <div>failed to load</div>
	if( !docs ) return <div>loading...</div>

	return (
		<div>
			<button onClick={ () => { setNumber(number + 1) } }>{ number }</button>
			<ul>
			{ docs.map((doc) =>
				<li key={doc.id}><Link to={`${doc.title}`}>{doc.title}</Link></li>
			) }
			</ul>
		</div>
	);
}

export default ReactPage;