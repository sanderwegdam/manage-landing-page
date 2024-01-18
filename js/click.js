document.addEventListener('DOMContentLoaded', function () {
  const iconHamburger = document.querySelector('.hamburger-icon');
  const menu = document.querySelector('.menu-links');
  const menuLinks = menu.querySelectorAll('a');
  let isOpen = false;

  iconHamburger.addEventListener('click', function (e) {
    e.preventDefault();

    if (isOpen) {
      menu.classList.remove('menu-open');
      menu.classList.add('menu-links');
      iconHamburger.classList.remove('close-icon');
      // Verander de src naar het hamburger-icoon bij het sluiten van het menu
      document.querySelector('.hamburger-icon').src = 'images/icon-hamburger.svg';
    } else {
      menu.classList.add('menu-open');
      iconHamburger.classList.add('close-icon');
      // Verander de src naar het sluit-icoon bij het openen van het menu
      document.querySelector('.hamburger-icon').src = 'images/icon-close.svg';
    }
    isOpen = !isOpen;
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      menu.classList.remove('menu-open');
      menu.classList.add('menu-links');
      iconHamburger.classList.remove('close-icon');
      document.querySelector('.hamburger-icon').src = 'images/icon-hamburger.svg';
      isOpen = false;
    });
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !iconHamburger.contains(e.target)) {
      menu.classList.remove('menu-open');
      menu.classList.add('menu-links');
      iconHamburger.classList.remove('close-icon');
      document.querySelector('.hamburger-icon').src = 'images/icon-hamburger.svg';
      isOpen = false;
    }
  });
});