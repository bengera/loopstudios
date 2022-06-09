const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.header__logo');


menu.addEventListener('click', () => {
    console.log('toggle-menu');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
    
    
})