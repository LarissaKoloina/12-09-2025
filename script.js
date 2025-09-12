console.log("Bienvenue sur mon site !");

// Changement de couleur au clic sur le header
document.querySelector('header').addEventListener('click', function() {
    this.style.color = this.style.color === 'cyan' ? 'white' : 'cyan';
});

// Animation sur les sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.02)';
        section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});