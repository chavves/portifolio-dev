// Seleciona o ícone do menu (hambúrguer)
let menuIcon = document.querySelector('#menu-icon');

// Seleciona a barra de navegação
let navbar = document.querySelector('.navbar');

// Ao clicar no ícone, alterna as classes para abrir/fechar o menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');    // Altera o ícone para "X" e volta para o hambúrguer
    navbar.classList.toggle('active');    // Mostra ou esconde o menu (ativa a classe com display)
}
