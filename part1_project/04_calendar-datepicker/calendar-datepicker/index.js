// Calendar Setting
const CalendarSet = () => {
	const calNav = document.querySelector('.calendar-nav');
	const calGrid = document.querySelector('.calendar-grid');
	const calYear = document.querySelector('.calendar-nav .year');
	const calMonth = document.querySelector('.calendar-nav .month');
	const monArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const selctDate = document.querySelector('#datePicker');
	let activeDate = new Date();
	let todayDate = new Date();
	// current date
	let curtYear = activeDate.getFullYear();
	let curtMonth = activeDate.getMonth();

	// Calendar Render
	const calendarRender = (activeDate) => {
		// current date
		curtYear = activeDate.getFullYear();
		curtMonth = activeDate.getMonth();
		// prev date
		let startDay = new Date(curtYear, curtMonth, 0);
		let prevDate = startDay.getDate();
		let prevDay = startDay.getDay();
		// next date
		let endDay = new Date(curtYear, curtMonth + 1, 0);
		let nextDate = endDay.getDate();
		let nextDay = endDay.getDay();

		// Calendar Year Month
		calYear.innerText = curtYear;
		calMonth.innerText = monArr[curtMonth];

		// Calendar create
		calGrid.innerHTML = `
			<div class="day">SUN</div>
			<div class="day">MON</div>
			<div class="day">TUE</div>
			<div class="day">WED</div>
			<div class="day">THU</div>
			<div class="day">FRI</div>
			<div class="day">SAT</div>
		`;
		let count = 0;
		const dateElement = (i, curt) => {
			let calBtn = '<button class="date" type="button">' + i + '</button>';
			if(count % 7 == 0 && count != 0) calBtn = '<button class="date curt sun" type="button">' + i + '</button>';
			else if(curt) calBtn = '<button class="date curt" type="button">' + i + '</button>';
			calGrid.innerHTML = calGrid.innerHTML + calBtn;
			count++;
		};
		// prev create
		for(let i = prevDate - prevDay ; i <= prevDate; i++){
			dateElement(i);
		}
		// current create
		for(let i = 1; i <= nextDate; i++){
			dateElement(i, 'curt');
		}
		// next create
		for(let i = 1; i <= ( 6 - nextDate == 6 ? 0 : 6 - nextDay ); i++){
			dateElement(i);
		}
		// today
		if( todayDate.getMonth() == curtMonth ){
			let curtDays = document.querySelectorAll('.date.curt');
			curtDays[todayDate.getDate() - 1].classList.add('today');
		}
	};

	// Functions
	calendarRender(activeDate);
	calNav.addEventListener('click',(e) => {
		if( e.target.classList == 'prev' ){
			activeDate = new Date(curtYear, curtMonth - 1, 1);
			calendarRender(activeDate);
		}else{
			activeDate = new Date(curtYear, curtMonth + 1, 1);
			calendarRender(activeDate);
		}
	});
	calGrid.addEventListener('click',(e) => {
		const btnsDate = [...document.querySelectorAll('.date.curt')];
		if( e.target.nodeName == 'BUTTON' ){
			let setMM = curtMonth;
			curtMonth < 10 ? setMM = '0' + setMM : setMM;
			selctDate.value = `${curtYear}-${Number(setMM) + 1}-${e.target.innerText}`;
			console.log(selctDate.value);
			for(let i = 0; i < btnsDate.length; i++){
				if(btnsDate[i].classList.contains('selct')) btnsDate[i].classList.remove('selct');
			}
			e.target.classList.add('selct');
			document.querySelector('.calendar').style.display = 'none';
		}

	});
};

export default CalendarSet;