// Calendar Setting
const calendarSet = () => {
	let activeDate = new Date();
	// current date
	let curtYear = activeDate.getFullYear();
	let curtMonth = activeDate.getMonth();
	// prev date
	let startDay = new Date(curtYear, curtMonth, 0);
	let prevDate = startDay.getDate();
	let prevDay = startDay.getDay();
	// next date
	let endDay = new Date(curtYear, curtMonth + 1, 0);
	let nextDate = endDay.getDate();
	let nextDay = endDay.getDay();

	// Calendar Render
	const calendarRender = (activeDate) => {
		curtYear = activeDate.getFullYear();
		curtMonth = activeDate.getMonth();
		// Calendar Year Month
		const calYear = document.querySelector('.calendar-nav .year');
		const calMonth = document.querySelector('.calendar-nav .month');
		const monArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		calYear.innerText = curtYear;
		calMonth.innerText = monArr[curtMonth];

		// Calendar create
		const calGrid = document.querySelector('.calendar-grid');
		calGrid.innerHTML = `
			<div class="day">SUN</div>
			<div class="day">MON</div>
			<div class="day">TUE</div>
			<div class="day">WED</div>
			<div class="day">THU</div>
			<div class="day">FRI</div>
			<div class="day">SAT</div>
		`;
		const dateElement = (i,g) => {
			let calBtn = '<button class="date" type="button">' + i + '</button>';
			if(g) calBtn = '<button class="date g" type="button">' + i + '</button>';
			calGrid.innerHTML = calGrid.innerHTML + calBtn;
		};
		// prev create
		for(let i = prevDate - prevDay + 1; i <= prevDate; i++){
			dateElement(i,'g');
		}
		// current create
		for(let i = 1; i <= nextDate; i++){
			dateElement(i);
		}
		// next create
		for(let i = 1; i <= ( 7 - nextDate == 7 ? 0 : 7 - nextDay ); i++){
			dateElement(i,'g');
		}
	};

	// Functions
	calendarRender(activeDate);
	const calNav = document.querySelector('.calendar-nav');
	calNav.addEventListener('click',(e) => {
		if( e.target.classList == 'prev' ){
			activeDate = new Date(curtYear, curtMonth - 1, 1);
			calendarRender(activeDate);
		}else{
			activeDate = new Date(curtYear, curtMonth + 1, 1);
			calendarRender(activeDate);
		}
	});
};

(function(){
	calendarSet();
} ());