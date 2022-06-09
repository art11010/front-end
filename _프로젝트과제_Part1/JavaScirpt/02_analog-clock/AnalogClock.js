const AnalogClock = $container => {
  // do something!
  // Create element
  const handArr = ['hour', 'minute', 'second'];
  for(let i = 1;i <= handArr.length;i++){
    const handElmt = document.createElement('div');
    handElmt.classList.add('hand');
    handElmt.classList.add(handArr[i-1]);
    $container.appendChild(handElmt);
  }
  for(let i = 1;i <= 12;i++){
    const timeElmt = document.createElement('div');
    timeElmt.classList.add('time');
    timeElmt.classList.add('time' + i);
    $container.appendChild(timeElmt);
  }
  // Setting time
  setInterval( () => {
    let Time = new Date();
    let hour = $container.querySelector('.hour');
    let minute = $container.querySelector('.minute');
    let second = $container.querySelector('.second');
    hour.style.setProperty('--deg', Time.getHours() * 30);
    minute.style.setProperty('--deg', Time.getMinutes() * 6);
    second.style.setProperty('--deg', Time.getSeconds() * 6);
  }, 1000);
};

export default AnalogClock;
