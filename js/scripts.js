/*-------------------------Video---------------------------*/
const play = document.querySelector('.video-block__btn-play');
const video = document.querySelector('.video-block video');
const overlay = document.querySelector('.overlay');
const mute = document.querySelector('.video-block__btn-mute');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('btn-play-hidden');
    overlay.classList.add('overlay-hidden');
    mute.classList.add('mute-hidden');
});
/*-------------------------Swiper---------------------------*/
new Swiper('.portfolio-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween:30,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});

new Swiper('.feedback__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});
/*-------------------------Progressbar---------------------------*/
const circle_or = document.querySelector('.facts__progressbar-circle-or');
const radius_or = circle_or.r.baseVal.value;
const circumference_or = 2 * Math.PI * radius_or;

circle_or.style.strokeDasharray = `${circumference_or} ${circumference_or}`;
circle_or.style.strokeDashoffset = circumference_or;

function setProgress_or(percent) {
    const offset = circumference_or - percent / 100 * circumference_or;
    circle_or.style.strokeDashoffset = offset;
}

setProgress_or(88);



const circle_cr = document.querySelector('.facts__progressbar-circle-cr');
const radius_cr = circle_cr.r.baseVal.value;
const circumference_cr = 2 * Math.PI * radius_cr;

circle_cr.style.strokeDasharray = `${circumference_cr} ${circumference_cr}`;
circle_cr.style.strokeDashoffset = circumference_cr;

function setProgress_cr(percent) {
    const offset = circumference_cr - percent / 100 * circumference_cr;
    circle_cr.style.strokeDashoffset = offset;
}

setProgress_cr(75);



const circle_bl = document.querySelector('.facts__progressbar-circle-bl');
const radius_bl = circle_bl.r.baseVal.value;
const circumference_bl = 2 * Math.PI * radius_bl;

circle_bl.style.strokeDasharray = `${circumference_bl} ${circumference_bl}`;
circle_bl.style.strokeDashoffset = circumference_bl;

function setProgress_bl(percent) {
    const offset = circumference_bl - percent / 100 * circumference_bl;
    circle_bl.style.strokeDashoffset = offset;
}

setProgress_bl(83);
/*-------------------------Scrolling---------------------------*/
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

var button = document.querySelector('.go-to-top__btn');
var header = document.querySelector('#header');

button.addEventListener('click', () =>{
    scrollTo(header);
});