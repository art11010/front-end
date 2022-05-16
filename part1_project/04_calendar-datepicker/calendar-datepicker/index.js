// do something!
const StarRating = $container => {
	// Add link css
	const lastLink = document.querySelectorAll('link');
	const addLink = document.createElement('link');
	addLink.setAttribute('href','star-rating/theme.css');
	addLink.setAttribute('rel','stylesheet');
	if(document.querySelector('link[href="star-rating/theme.css"]') == null){
		let addNum = lastLink[lastLink.length - 1]
		addNum.parentNode.insertBefore(addLink, addNum.nextSibling);
	}

	// Create star
	let ratingNum = $container.getAttribute('data-max-rating');
	const starContainer = document.createElement('div');
	starContainer.classList.add('star-rating-container');
	$container.append(starContainer);
	for(let i = 0; i < ratingNum; i++){
		const star = document.createElement('i');
		star.classList.add('bx');
		star.classList.add('bxs-star');
		star.classList.add('bx-flip-horizontal');
		starContainer.append(star);
	}

	// Funtions
	const stars = [...starContainer.querySelectorAll('i')]
	const setAll = (clsName) => {
		for(let i = 0; i < stars.length; i++){
			if(stars[i].classList.contains(clsName)) stars[i].classList.remove(clsName);
		}
	}
	const setActive = (clsName, e) => {
		for(let i = 0; i <= stars.indexOf(e.target); i++){
			stars[i].classList.toggle(clsName);
		};
		if( clsName == 'selected'){
			$container.dispatchEvent( new CustomEvent('rating-change',{
				detail: stars.indexOf(e.target) + 1
			}));
		}
	}

	// Click
	starContainer.addEventListener('click',(e) => {
		setAll('selected');
		setActive('selected', e);
	});
	// Hover
	starContainer.addEventListener('mouseover',(e) => {
		setAll('hovered');
		setActive('hovered', e);
	})
	// Out
	starContainer.addEventListener('mouseout',(e) => {
		setAll('hovered');
	})
}

export default StarRating;