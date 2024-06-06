
// Mobile Navbar
const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav_close-btn");
const closeBtnIcon = document.querySelector(".mnav_close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

// Function to close the navbar
function closeNavbar() {
  mobileNav.classList.remove(navOpenedClass);
  mobileNav.classList.add(navClosedClass);
  closeBtnIcon.classList.remove(arrowLeftClass);
  closeBtnIcon.classList.add(arrowRightClass);
}

// Event listener for the close button
closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);
    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
  }
});

// Event listener for clicks outside the navbar
document.addEventListener("click", (event) => {
  const isClickedOutside =
    !mobileNav.contains(event.target) && !closeBtn.contains(event.target);
  if (isClickedOutside && mobileNav.classList.contains(navOpenedClass)) {
    closeNavbar();
  }
});
// mobile navbar ends

// Swiper starts
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
  });
// Swiper ends

// faq start
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach((item)=> {
  const faqBtn = item.querySelector('.faq_btn');

  item.addEventListener('click', ()=> {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// scroll reveal animations
const sr = ScrollReveal ({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  //reset: true // resets animation
});

//hero
sr.reveal('.hero_text', { origin: 'top'});
sr.reveal('.hero_img');

//stats
sr.reveal('.stats_item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'top'
});

//services
sr.reveal('.services');
sr.reveal('.services_top');
sr.reveal('.services_item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
});

// appoinment
sr.reveal('.appointment_title');
sr.reveal('.appointment_form ');

// testimonial
sr.reveal('.testimonial');
sr.reveal('.testimonial_container');


// team
sr.reveal('.team_title');
sr.reveal('.team_slider');

// faq
sr.reveal('.faq_title ');
sr.reveal('.faq_item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'button',
});

// departements
sr.reveal('.departments_bg');
sr.reveal('.departments_container');

// blog
sr.reveal('.blog_title');
sr.reveal('.blog_post', {
  delay: 500,
  distance: '100px',
  interval: 100,
  origin:'bottom',
});

// brands
sr.reveal('.brands_logo', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin:'bottom',
});

// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter_container');

// footer
sr.reveal('.footer_item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin:'bottom',
});