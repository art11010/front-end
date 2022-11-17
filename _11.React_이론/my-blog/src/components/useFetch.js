import { useEffect, useState } from 'react';
import axios from 'axios';


function useFetch(url) {

	const [docs, setDocs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(url);
			const result = res.data;
			console.log(res);
			console.log(result);
			return result;
		}
		fetchData().then(res => { setDocs(res) });
	}, [url]);

	return docs;
}

export default useFetch;