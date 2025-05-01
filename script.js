// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky navigation on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Typewriter effect
function initTypewriter() {
    const phrases = [
        "Development",
        "Problem Solving",
        "Technologia",
        "Arduino",
        "Digital Logic Design",
        "Circuits"

    ];
    const element = document.querySelector('.subtitle');
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;
    
    function loop() {
        isEnd = false;
        element.textContent = currentPhrase.join('');
        
        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                element.textContent = currentPhrase.join('');
            }
            
            if (isDeleting && j >= 0) {
                currentPhrase.pop();
                j--;
                element.textContent = currentPhrase.join('');
            }
            
            if (j === phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }
            
            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) {
                    i = 0;
                }
            }
        }
        
        const speedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
        setTimeout(loop, time);
    }
    
    loop();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    
    // Add active class to current section in view
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show confirmation
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}