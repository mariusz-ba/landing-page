(() => {
  const menuToggler = document.querySelector('[data-js=menu-toggler]');
  const navbarNav = document.querySelector('[data-js=navbar-nav]');

  menuToggler && navbarNav &&
    menuToggler.addEventListener('mousedown', () => {
      menuToggler.classList.toggle('navbar__toggler--open');
      navbarNav.classList.toggle('navbar__nav--open');
    })

  if(!menuToggler) throw 'Could not find data-js=menu-toggler';
  if(!navbarNav) throw 'Could not find data-js=navbar-nav';
})()