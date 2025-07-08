let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*======== • Link ativo da seção de rolagem ====== */

function activeMenu() {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));

      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}
window.addEventListener('scroll', activeMenu);
window.addEventListener('load', activeMenu);

/*======== • Ao clicar no ícone, alterna as classes para abrir/fechar o menu ====== */
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*======== • Fecha o menu se clicar fora do ícone ou da navbar ======*/
document.addEventListener('click', function (e) {
  const target = e.target;
  const isClickInsideMenu = navbar.contains(target);
  const isClickOnMenuIcon = menuIcon.contains(target);

  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
});

/*======== • ScrollReveal com ajuste para mobile ====== */
if (window.innerWidth <= 768) {
  ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 800,
    delay: 50
  });
} else {
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
}

// Elementos a serem revelados
ScrollReveal().reveal('.inicio-content, .heading, .sobre-img, .projetos-box', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .portifolio-box, .contato form, .timeline-content', { origin: 'bottom' });
ScrollReveal().reveal('.sobre-content, .inicio-img', { origin: 'left' });


/*======== • Mostrar seta ao rolar a página (voltar ao topo) ======*/
const scrollTopBtn = document.querySelector('.footer-iconTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show'); // Exibe a seta ao descer a página
  } else {
    scrollTopBtn.classList.remove('show'); // Esconde a seta ao voltar para o topo
  }
});




