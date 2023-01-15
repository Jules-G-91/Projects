const countDown = () => {
    const countDate = new Date("February 7, 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const gap = countDate - currentDate;

    //How does time work

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate 

    const dayText = Math.floor(gap / day);
    const hourText = Math.floor((gap % day) / hour);
    const minuteText = Math.floor((gap % hour) / minute);
    const secondText = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = dayText;
    document.querySelector('.hour').innerText = hourText;
    document.querySelector('.minute').innerText = minuteText;
    document.querySelector('.second').innerText = secondText;
};

setInterval(countDown, 1000);