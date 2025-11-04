// Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const toggle = document.querySelector('.menu-hamburguer');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Form Submit
function handleSubmit(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Retornaremos em breve.');
    event.target.reset();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Header Scroll Effect
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    reveal();
}

// Parallax Effect
function parallax() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
}

// Event Listeners
window.addEventListener('scroll', () => {
    handleScroll();
    parallax();
});

window.addEventListener('load', reveal);

// Initial call
reveal();