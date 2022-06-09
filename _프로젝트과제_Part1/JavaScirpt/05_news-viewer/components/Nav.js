// do something!
const Nav = () => {
	// base
	const rootElmt = document.querySelector('#root');
	const navElmt = document.createElement('nav');
	navElmt.classList.add('category-list');
	rootElmt.append(navElmt);
	navElmt.innerHTML = `
		<ul>
			<li id="all" class="category-item active">전체보기</li>
			<li id="business" class="category-item">비즈니스</li>
			<li id="entertainment" class="category-item">엔터테인먼트</li>
			<li id="health" class="category-item">건강</li>
			<li id="science" class="category-item">과학</li>
			<li id="sports" class="category-item">스포츠</li>
			<li id="technology" class="category-item">기술</li>
		</ul>
	`;
	// click
	// const ctgyItem = document.querySelectorAll('.category-item');
	// navElmt.addEventListener('click', (e) => {
	// 	for(let i = 0; i < ctgyItem.length; i++){
	// 		if(ctgyItem[i].classList.contains('active')) ctgyItem[i].classList.remove('active');
	// 	}
	// 	e.target.classList.add('active');
	// 	// let ctgyName = e.target.id;
	// 	// console.log(ctgyName);
	// });
};

export default Nav;