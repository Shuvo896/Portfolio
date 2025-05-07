// Improved Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle menu
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    
    // Animate menu items
    if (navLinks.classList.contains('active')) {
        navItems.forEach((item, index) => {
            item.style.animation = `navItemFade 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        });
    } else {
        navItems.forEach(item => {
            item.style.animation = '';
        });
    }
});

// Close menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes navItemFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Touch-friendly hover effects
document.querySelectorAll('.project-card, .btn').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.classList.add('hover-effect');
    });
    
    element.addEventListener('touchend', function() {
        setTimeout(() => {
            this.classList.remove('hover-effect');
        }, 200);
    });
});