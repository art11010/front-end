// do something!
const NewsList = (e) => {
	if(e){
		document.querySelector('.news-list-container').remove();
		getNews(e,1);
	}else{
		getNews();
	}
	// base
	const rootElmt = document.querySelector('#root');
	const newsListContainer = document.createElement('div');
	newsListContainer.classList.add('news-list-container');
	rootElmt.append(newsListContainer);
	newsListContainer.innerHTML = `
		<article class="news-list"></article>
		<div class="scroll-observer">
			<img src="img/ball-triangle.svg" alt="Loading..." />
		</div>
	`;
	// axios
	async function getNews(category = 'all', page = 0) {
		if(page == 0) return;
		let pageSize = 5;
		let apiKey = '9b9cc0aa70394bc4950b08fb1faca2f7';
		const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
		try {
			const e = await axios.get(url);
			axiosFn(e.data.articles);
		} catch (error) {
			console.log(error);
		}
	}
	// getNews();
	// spread
	const axiosFn = (dataArr) => {
		for(let i = 0; i < dataArr.length; i++){
			const newsList = document.querySelector('.news-list');
			const newsItem = document.createElement('section');
			newsItem.classList.add('news-item');
			newsList.append(newsItem);
			newsItem.innerHTML = `
				<div class="thumbnail">
					<a href="" target="_blank" rel="noopener noreferrer">
					<img src="" alt="thumbnail" />
					</a>
				</div>
				<div class="contents">
					<h2><a href="" target="_blank" rel="noopener noreferrer"></a></h2>
					<p></p>
				</div>
			`;
			const thumbnailA = newsItem.querySelector('.thumbnail a');
			const thumbnailImg = newsItem.querySelector('.thumbnail img');
			const contentsA = newsItem.querySelector('.contents a');
			const contentsP = newsItem.querySelector('.contents P');
			thumbnailA.href = dataArr[i].url;
			thumbnailImg.src = dataArr[i].urlToImage;
			contentsA.href = dataArr[i].url;
			contentsA.innerText = dataArr[i].title;
			contentsP.innerHTML = dataArr[i].description;
		}
	};
	// observer
	const createObserver = (category = 'all') => {
		let count = 0;
		const listEnd = document.querySelector(".scroll-observer");
		const observer = new IntersectionObserver((entries) =>
		{ // callback
			entries.forEach(entry => {
				if(entry.isIntersecting){
					getNews(category,++count);
				}
			});
		},
		{ // options
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		});
		observer.observe(listEnd);
	};
	createObserver(e);
};

export default NewsList;