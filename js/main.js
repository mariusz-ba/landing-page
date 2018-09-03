(() => {
  const menuToggler = document.querySelector('[data-js=menu-toggler]');
  const navbarNav = document.querySelector('[data-js=navbar-nav]');
  const workItems = document.querySelectorAll('[data-js=work-item]');

  // Scrolling to anchor
  const links = document.querySelectorAll('[data-js=menu-item]');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      
      const node = document.getElementById(event.target.hash.slice(1));

      window.scroll({
        top: node.offsetTop,
        left: 0,
        behavior: 'smooth'
      })

      // Hide menu on mobile
      navbarNav &&
        navbarNav.classList.remove('navbar__nav--open');

      menuToggler &&
        menuToggler.classList.remove('navbar__toggler--open');
    })
  })

  // Preview image
  let top = 0;

  workItems &&
    workItems.forEach(item => {
      item.addEventListener('click', () => {
        workItems.forEach(element => { if(element !== item) element.classList.remove('preview'); });
        if(item.classList.contains('preview')) {
          item.classList.remove('preview');
          document.body.classList.remove('body--fixed');
          document.documentElement.scrollTop = top;
        } else {
          item.classList.add('preview');
          top = document.documentElement.scrollTop;
          document.body.classList.add('body--fixed');
        }
        // Adjust scroll position
        const positionX = item.scrollWidth / 2;
        const positionY = item.scrollHeight / 2;
        item.scrollLeft = positionX;
        item.scrollHeight = positionY;
      })
    })

  menuToggler && navbarNav &&
    menuToggler.addEventListener('mousedown', () => {
      menuToggler.classList.toggle('navbar__toggler--open');
      navbarNav.classList.toggle('navbar__nav--open');
    })

  if(!menuToggler) throw 'Could not find data-js=menu-toggler';
  if(!navbarNav) throw 'Could not find data-js=navbar-nav';
  if(!workItems) throw 'Could not find data-js=work-item';
  if(!links) throw 'Could not find data-js=menu-item';
})()