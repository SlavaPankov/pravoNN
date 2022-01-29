(function() {
  const scrollClass = {
    header: 'header-scroll',
    text: 'text-scroll',
    visuallyHidden: 'visually-hidden',
    hide: 'hide',
  }

  const header = {
    header: document.querySelector('.header'),
    logoPictureLight: document.querySelector('.logo__light'),
    logoPictureDark: document.querySelector('.logo__dark'),
    logoText: document.querySelector('.logo__text'),
    logoTitle: document.querySelector('.logo__title'),
    link: document.querySelectorAll('.nav__link'),
    button: document.querySelector('.header__btn'),
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
  }

  if (pageYOffset > 0) {
    scroll()
  } else {
    scrollRemove()
  }

  let position = pageYOffset;
  document.addEventListener('scroll', () => {
    clearTimeout(timer);

    if (pageYOffset === 0) {
      scrollRemove()
    } else {
      scroll()
    }

    if (position < pageYOffset) {
      header.header.classList.add(scrollClass.hide);
      position = pageYOffset;
    } else {
      header.header.classList.remove(scrollClass.hide);
      position = pageYOffset;
    }
    if (pageYOffset === 0) {
      header.header.classList.remove(scrollClass.hide);
      position = pageYOffset;
    }

    const timer = setTimeout(function () {
      header.header.classList.remove(scrollClass.hide);
    }, 700)
  });
})();
