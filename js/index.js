// Select Item to DOM

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Inital state Of Menu

let ShowMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!ShowMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State

    ShowMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('add');

    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State

    ShowMenu = false;
  }
}
