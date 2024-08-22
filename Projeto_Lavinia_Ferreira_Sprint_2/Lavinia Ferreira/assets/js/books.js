// JavaScript para interação na página de livros
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#d2c6bb"; // Mudança de cor ao passar o mouse
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white"; // Voltar à cor original
        });
    });
});
