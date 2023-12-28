const slideWrapper = document.querySelector('.swiper-wrapper');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let counter = 0;
const slideWidth = 360;
const maxSlides = 4;

next.addEventListener('click', () => {
    if (counter < slideWrapper.children.length - maxSlides) {
        counter++;
    }
    slide();
})
prev.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    slide();
});

let slide = () => {
    const maxCounter = slideWrapper.children.length - maxSlides;
    const transformValue = `translateX(-${counter * slideWidth}px)`;

    if (counter > maxCounter) {
        slideWrapper.style.transform = `translateX(-${maxCounter * slideWidth}px)`;
    } else {
        slideWrapper.style.transform = transformValue;
    }

    toggle(prev, "active", counter > 0);
    toggle(next, "disable", counter === maxCounter);
};

let toggle = (element, className, condition) => {

    if (condition) {
        element.classList.add(className)
    } else {
        element.classList.remove(className)
    }
}
