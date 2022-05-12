// IIFE
(function() {
	console.log('IIFE');
	const body = document.querySelector('body');
	const nav = document.querySelector('nav');
	const togBtn = document.querySelector('i.toggle');
	let strgTog = localStorage.toggle;
	// load active add
	function loadActive(){
		body.style.visibility = 'visible';
		if(strgTog) nav.classList.add(strgTog);
	}
	// nav toggle
	function navToggle(){
		togBtn.addEventListener('click',function(){
			nav.classList.toggle('active')
		})
	}
	// stop transition
	function stopTransition(){
		body.classList.remove('preload')
	}

	// functions
	loadActive();
	navToggle();

	// LOAD
	window.addEventListener('load',function(){
		stopTransition();
	});
	// UNLOAD
	window.addEventListener('beforeunload',function(){
		localStorage.toggle = nav.classList;
	})
}());

