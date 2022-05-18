// do something!
import { Nav, NewsList } from './components/index.js';

Nav();
NewsList();
const ctgyItem = document.querySelectorAll('.category-item');

const watcher = (variable, callback) => new Proxy(variable, {
	set: (obj, prop, value) => {
		obj[prop] = value;
		callback(obj);
	},
});

let defaultState = { value: 0, foo: 'test' };
let proxyState = watcher(defaultState, state => {
	NewsList(state.value);
});

document.querySelector('nav').addEventListener('click', (e) => {
	if(e.target.nodeName != 'LI') return;
	for(let i = 0; i < ctgyItem.length; i++){
		if(ctgyItem[i].classList.contains('active')) ctgyItem[i].classList.remove('active');
	}
	e.target.classList.add('active');
	proxyState.value = e.target.id;
});