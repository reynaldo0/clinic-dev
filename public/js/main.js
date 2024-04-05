// Mobile Navbar 
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav_close-btn');
const closeBtnIcon = document.querySelector('.mnav_close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
    if (mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcon.classList.toggle(arrowLeftClass);
        closeBtnIcon.classList.toggle(arrowRightClass);
    }
})