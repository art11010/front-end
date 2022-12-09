let start = '20221109000052115';
let hihi =
  start.slice(0, 4) +
  '-' +
  start.slice(4, 6) +
  '-' +
  start.slice(6, 8) +
  'T' +
  start.slice(8, 10) +
  ':' +
  start.slice(10, 12) +
  ':' +
  start.slice(12, 14) +
  '.' +
  start.slice(14, start.length) +
  'Z';
console.log(hihi);
console.log('2022-11-09T00:00:52.115Z');

let plus = 0.859 * 1000;

let date = Date.parse('2022-11-09T00:00:52.115Z');
let milliseconds = date + plus;
let enddate_ = new Date(milliseconds);

let hoho = JSON.stringify(enddate_);
// console.log(hoho);
// console.log(hoho.replace(/-|T|:|Z|\./g, ''));
