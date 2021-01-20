const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

//end date
const end = '1 Jan 2030';

// need end date, current date, subtract
function countdown(){
    const endDate = new Date(end);
    const currentDate = new Date();

    const totalSeconds = (endDate - currentDate) /1000;

    const days = Math.floor (totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days,hours, minutes, seconds);

     daysEl.innerHTML = days;
     hoursEl.innerHTML = hours;
     minsEl.innerHTML = minutes;
     secondsEl.innerHTML = seconds;
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();


setInterval(countdown, 1000);