const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

/* Abrir / fechar no botão */
btn.addEventListener('click', (e) => {
  e.stopPropagation();           // 🔴 ESSENCIAL
  nav.classList.toggle('active');
});

/* Fechar ao clicar em um link */
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

/* Fechar ao clicar fora */
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('active');
  }
});

/* Fechar ao redimensionar (girar celular) */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});
