
  
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }



document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = `${percentage}%`;
    });
});