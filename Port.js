document.addEventListener("DOMContentLoaded", function () {
    // Barre de compétences animée
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = `${percentage}%`;
    });

    // Toggle du menu responsive
    const toggleBtn = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fermer le menu quand on clique sur un lien
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
