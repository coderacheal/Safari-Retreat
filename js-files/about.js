const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links-ul');
const individualLinks = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

individualLinks.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.toggle('active');
}));
