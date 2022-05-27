(function() {
const countdown = () => {
    const countDay = new Date("June 27, 2022, 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeToOpen = countDay - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const timeDay = Math.floor(timeToOpen / day);
    const timeHour = Math.floor((timeToOpen % day)/hour);
    const timeMinute = Math.floor((timeToOpen % hour)/minute);
    const timeSecond = Math.floor((timeToOpen % minute)/second);

    document.querySelector('.countdown-day').innerText = timeDay;
    document.querySelector('.countdown-hour').innerText = timeHour;
    document.querySelector('.countdown-minute').innerText = timeMinute;
    document.querySelector('.countdown-second').innerText = timeSecond;
}

setInterval(countdown, 1000);
})();