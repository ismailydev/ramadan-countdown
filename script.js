const ndays = document.getElementById('days');
const nhours = document.getElementById('hours');
const nminutes = document.getElementById('minutes');
const nseconds = document.getElementById('seconds');


<<<<<<< HEAD
const ramadan = 'Apr 03 2022';
=======
const ramadan = 'Apr 01 2022';
>>>>>>> 43d2d4899a667fef4916791e04ebd24140beabe2

function countdown() {
    const ramadanDate = new Date(ramadan);
    const currentDate = new Date();

    const totalSeconds = (ramadanDate - currentDate) / 1000;

    days = Math.floor(totalSeconds / 60 / 60 / 24);
    hours = Math.floor(totalSeconds / 60 / 60 % 24);
    minutes = Math.floor(totalSeconds / 60 % 60);
    seconds = Math.floor(totalSeconds % 60);


    ndays.innerHTML = days;
    nhours.innerHTML = formatTime(hours);
    nminutes.innerHTML = formatTime(minutes);
    nseconds.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

countdown();

setInterval(countdown, 1000);
