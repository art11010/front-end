import CalendarSet from './calendar-datepicker/index.js';

CalendarSet();

const pickerWrap = document.querySelector('.date-picker');
const selctDate = document.querySelector('#datePicker');
const cal = document.querySelector('.calendar');
// picker click
selctDate.addEventListener('click', () => {
	cal.style.display = 'block';
});
// other click
document.addEventListener('click', (e) => {
	if( !pickerWrap.contains(e.target) ){
		cal.style.display = 'none';
	}
});