// MENU MOBILE
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

if (btn) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('active');
    }
  });
}

// ACCORDION CATEGORIA
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {

    const category = header.parentElement;

    document.querySelectorAll('.accordion-category').forEach(cat => {
      if (cat !== category) {
        cat.classList.remove('active');
      }
    });

    category.classList.toggle('active');
  });
});

// ACCORDION ITEM
document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    item.classList.toggle('active');
  });
});