const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

const sec = document.querySelector('.sec-hand .sec');
const min = document.querySelector('.min-hand .min');
const hour = document.querySelector('.hour-hand .hr');

setInterval(function(){
    let time = new Date();
    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hour.style.transform = `rotateZ(${hours + (mins/12)}deg)`;
});

VanilaTilt.init(document.querySelector("#clock-01"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});