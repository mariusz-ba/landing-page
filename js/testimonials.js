(async () => {
  const testimonials = document.querySelectorAll('[data-js=testimonials-item]');
  const indicators = document.querySelectorAll('[data-js=testimonials-indicator]');
  let index = 0;

  const wait = (func, timeout) => {
    return new Promise(resolve => setTimeout(() => {
      resolve(func());
    }, timeout));
  }

  const setCurrentIndex = ind => {
    
  }

  indicators &&
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        setCurrentIndex(index);
      })
    })

  while(true) {
    await wait(() => {
      testimonials[index].classList.remove('hide');
      testimonials[index].classList.add('entry');
      indicators[index].classList.add('active');
    }, 0);

    await wait(() => {
      testimonials[index].classList.add('exit');
      indicators[index].classList.remove('active');
    }, 6500);

    await wait(() => {
      testimonials[index].classList.add('hide');
      testimonials[index].classList.remove('entry');
      testimonials[index].classList.remove('exit');
      index = ++index % testimonials.length;
    }, 250);
  }

  if(!testimonials) throw 'Could not find data-js=testimonials-item';
  if(!indicator) throw 'Could not find data-js=testimonials-indicator';
})()