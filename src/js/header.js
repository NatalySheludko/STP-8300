const burgerMenu = document.querySelector('.burger-navbar');
const burgerMenuBtn = document.querySelector('.burger-navbar-btn');

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});
