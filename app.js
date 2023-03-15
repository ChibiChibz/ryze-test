let burger = document.getElementById('burger');
let openMenu = document.getElementById('menu-open');
let closeMenu = document.getElementById('menu-close');
let navLinks = document.getElementById('nav-links');


burger.addEventListener('click', function() {
    console.log('clicked');
    openMenu.classList.toggle('active');
    closeMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('disable-scroll');

});


window.addEventListener('resize', function() {
    if (window.innerWidth > 959) {
        openMenu.classList.remove('active');
        openMenu.classList.add('active');
        closeMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('disable-scroll');
    }
});