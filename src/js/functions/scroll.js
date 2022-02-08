(function() {
  const scrollClass = {
    header: 'header-scroll',
    text: 'text-scroll',
    borderColor: 'border-scroll',
    visuallyHidden: 'visually-hidden',
    hide: 'hide',
    burger: 'burger-scroll',
  }

  const header = {
    header: document.querySelector('.header'),
    logoPictureLight: document.querySelector('.logo__light'),
    logoPictureDark: document.querySelector('.logo__dark'),
    logoText: document.querySelector('.logo__text'),
    logoTitle: document.querySelector('.logo__title'),
    link: document.querySelectorAll('.nav__link'),
    button: document.querySelector('.header__btn'),
    burger: document?.querySelectorAll('.burger__line'),
  }

  function scroll() {
    header.header.classList.add(scrollClass.header);
    header.logoPictureLight.classList.add(scrollClass.visuallyHidden);
    header.logoPictureDark.classList.remove(scrollClass.visuallyHidden);
    header.logoText.classList.add(scrollClass.text);
    header.logoTitle.classList.add(scrollClass.text);
    header.link.forEach(item => {
      item.classList.add(scrollClass.text);
    });
    header.button.classList.add(scrollClass.text);
    header.button.classList.add(scrollClass.borderColor);
    header.burger?.forEach(item => {
      item?.classList.add(scrollClass.burger);
    })
  }

  function scrollRemove() {
    header.header.classList.remove(scrollClass.header);
    header.logoPictureLight.classList.remove(scrollClass.visuallyHidden);
    header.logoPictureDark.classList.add(scrollClass.visuallyHidden);
    header.logoText.classList.remove(scrollClass.text);
    header.logoTitle.classList.remove(scrollClass.text);
    header.link.forEach(item => {
      item.classList.remove(scrollClass.text);
    });
    header.button.classList.remove(scrollClass.text);
    header.button.classList.remove(scrollClass.borderColor);
    header.burger?.forEach(item => {
      item?.classList.remove(scrollClass.burger);
    })
  }

  header.link.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      let href = item.getAttribute('href').substring(1);
      const targetElement = document.getElementById(href);
      const topOffset = header.header.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  });

  if (window.scrollY > 0) {
    scroll()
  } else {
    scrollRemove()
  }

  let position = window.scrollY;
  document.addEventListener('scroll', () => {
    clearTimeout(timer);

    if (window.scrollY === 0) {
      scrollRemove()
    } else {
      scroll()
    }

    if (position < window.scrollY) {
      header.header.classList.add(scrollClass.hide);
      position = window.scrollY;
    } else {
      header.header.classList.remove(scrollClass.hide);
      position = window.scrollY;
    }
    if (window.scrollY === 0) {
      header.header.classList.remove(scrollClass.hide);
      position = window.scrollY;
    }

    const timer = setTimeout(function () {
      header.header.classList.remove(scrollClass.hide);
    }, 700)
  });
})();
