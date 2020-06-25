window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-list'),
    hamburger = document.querySelector('.hamburger'),
    modal = document.querySelector('.modal-btn_white'),
    menuItem = document.querySelectorAll('.menu-list__item'),
    logo = document.querySelector('.site-logo_header');

    hamburger.addEventListener('click', () => {
        if (window.screen.width < 1280) {
            menu.classList.toggle('menu-list_active');
            hamburger.classList.toggle('hamburger_active');
            modal.classList.toggle('modal-btn_white_active');
            logo.classList.toggle('site-logo_header_active');
        }
});

    menuItem.forEach(item => {
        item.addEventListener('click', () => {   
            if (window.screen.width < 1280) {      
                menu.classList.toggle('menu-list_active');
                hamburger.classList.toggle('hamburger_active');
                modal.classList.toggle('modal-btn_white_active');
                logo.classList.toggle('site-logo_header_active');
            }
        })
    })
})
