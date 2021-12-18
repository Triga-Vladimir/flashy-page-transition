const links = document.querySelectorAll('[data-page-link]');
const overlay = document.querySelector('.overlay__scene');
const label = document.querySelector('.overlay__label-content');

const ANIMATION_TIME = 400;
links.forEach(link => {
  const href = link.getAttribute('href');
  const title = link.getAttribute('title');
  const target = document.querySelector(href);

  link.addEventListener('click', e => {
    e.preventDefault();
    if (!target)
    return;

    const currentTarget = document.querySelector('.page__content--active');

    overlay.classList.remove("overlay__scene--in");
    overlay.classList.remove("overlay__scene--out");

    overlay.classList.add("overlay__scene--in");

    label.innerText = title;

    setTimeout(() => {
      if (currentTarget)
      currentTarget.classList.remove('page__content--active');

      //Random loading time after the overlay rolls in
      setTimeout(() => {
        target.classList.add('page__content--active');
        overlay.classList.add("overlay__scene--out");

      }, Math.random() * 400 + 400);
    }, ANIMATION_TIME);


  });
});