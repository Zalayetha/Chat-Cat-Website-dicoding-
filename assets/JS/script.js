const navbar = document.querySelector('#navbar');
const contactUs = document.querySelector('.contact');
const anchorNavbar = document.querySelectorAll('a[href^="#"]');
const listNavbar = document.querySelector('ul');
console.log(screen.width);
window.onscroll = () => {
  if (window.scrollY > 250) {
    if (screen.width < 1000) {
      navbar.classList.remove('navbar-scroll');
    } else {
      navbar.classList.add('navbar-scroll');
    }
  } else {
    navbar.classList.remove('navbar-scroll');
    listNavbar.classList.remove('ulMobile');
  }
};

anchorNavbar.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let anchor = e.target;
    let href = anchor.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
