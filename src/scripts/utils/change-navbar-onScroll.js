window.addEventListener('scroll', () => {
  const nav = document.getElementById('header');
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav.classList.add('navbar-scroll');
    nav.classList.remove('navbar-transparent');
  } else {
    nav.classList.add('navbar-transparent');
    nav.classList.remove('navbar-scroll');
  }
});
