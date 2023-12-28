/* Scroll animation */
const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('isSticy', window.scrollY > 100)
    header.classList.toggle('sticy', window.scrollY > 130)
})
