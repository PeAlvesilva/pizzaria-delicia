// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Pega o ID da seção associada ao link
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Faz scroll suave até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth', // Scroll suave
            block: 'start' // Alinha com o topo da seção
        });
    });
});