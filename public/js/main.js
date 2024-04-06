// Mobile Navbar 
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav_close-btn');
const closeBtnIcon = document.querySelector('.mnav_close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

// Function to close the navbar
function closeNavbar() {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
    closeBtnIcon.classList.remove(arrowLeftClass);
    closeBtnIcon.classList.add(arrowRightClass);
}

// Event listener for the close button
closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);
        closeBtnIcon.classList.toggle(arrowLeftClass);
        closeBtnIcon.classList.toggle(arrowRightClass);
    }
});

// Event listener for clicks outside the navbar
document.addEventListener('click', (event) => {
    const isClickedOutside = !mobileNav.contains(event.target) && !closeBtn.contains(event.target);
    if (isClickedOutside && mobileNav.classList.contains(navOpenedClass)) {
        closeNavbar();
    }
});
