// Seleciona o ícone do menu (hambúrguer)
let menuIcon = document.querySelector('#menu-icon');

// Seleciona a barra de navegação
let navbar = document.querySelector('.navbar');

// Ao clicar no ícone, alterna as classes para abrir/fechar o menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');    // Altera o ícone para "X" e volta para o hambúrguer
    navbar.classList.toggle('active');    // Mostra ou esconde o menu (ativa a classe com display)
}

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

/*======== • scroll reveal ====== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.inicio-content, .heading, .sobre-img, .projetos-box', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .portifolio-box, .contato form, .timeline-content', { origin: 'bottom' });
ScrollReveal().reveal('.sobre-content, .inicio-img ', { origin: 'left' });






