const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const button = document.querySelector('.creations__btn');
const buttonDesk = document.querySelector('.creations__btn--desktop');



menu.addEventListener('click', () => {
    console.log('toggle-menu');
    menu.classList.toggle('active');
    nav.classList.toggle('active');

       
      
       
})

