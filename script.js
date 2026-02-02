const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

/* Abrir / fechar pelo botão */
btn.addEventListener('click', (e) => {
  e.stopPropagation(); // impede conflito com clique fora
  nav.classList.toggle('active');
});

/* Fechar ao clicar em um link */
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

/* Fechar ao clicar fora do menu */
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('active');
  }
});

/* Fechar ao mudar o tamanho da tela */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});
