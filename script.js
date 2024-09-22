const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});