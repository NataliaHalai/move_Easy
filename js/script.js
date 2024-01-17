window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
    menuItem = document.querySelectorAll('.header_menu_item'),
    hamburger = document.querySelector('.header_burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header_burger_active');
        menu.classList.toggle('header_menu_active');
       
    });

    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header_burger_active');
            menu.classList.toggle('header_menu_active');
        })
    })
})
