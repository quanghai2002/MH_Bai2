
const listSwitchContent = document.querySelectorAll('.header-nav-switch-content');
const iconBacktop = document.querySelector('.icon-backtop');
const containerHomePage = document.querySelector('.container-homepage');
const containerArticle = document.querySelector('.container-article');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 600) {
    iconBacktop.classList.remove('hidden');
  } else {
    iconBacktop.classList.add('hidden');
  }
});

if (iconBacktop) {
  iconBacktop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })
};


listSwitchContent.forEach((item, index) => {
  item.addEventListener('click', () => {
    const itemActive = document.querySelector('.header-nav-switch-content-active');

    if (itemActive) {
      itemActive.classList.remove('header-nav-switch-content-active');
    };

    item.classList.add('header-nav-switch-content-active');

    if (index === 0) {
      containerHomePage.classList.remove('hidden');
      containerArticle.classList.add('hidden');

    } else {
      containerHomePage.classList.add('hidden');
      containerArticle.classList.remove('hidden');
    }
  })
});
