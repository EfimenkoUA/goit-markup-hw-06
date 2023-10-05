
    /*(() => {
        const refs = {
            openPopupBtn: document.querySelector('[data-popup-open]'),
            closePopupBtn: document.querySelector('[data-popup-close]'),
            popup: document.querySelector('[data-popup]'),
        };

        refs.openPopupBtn.addEventListener('click', togglePopup);
        refs.closePopupBtn.addEventListener('click', togglePopup);

        function togglePopup() {
            refs.popup.classList.toggle('is-hidden');
        }
    })();*/

    // Меню бургер
    const iconMenu = document.querySelector('.menu-toggle');
    const menuBody = document.querySelector('.menu-container');
    const closeMenu = document.querySelector('.mobile-menu-btn');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        //document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('is-open');
        menuBody.classList.toggle('is-open');
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", function (e) {
        //document.body.classList.toggle('_lock');
        console.log('ok')
        menuBody.classList.remove('is-open');
    });
}