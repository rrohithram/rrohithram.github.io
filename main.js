// Custom cursor with smooth movement
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    const ease = 0.15;
    
    currentX += (cursorX - currentX) * ease;
    currentY += (cursorY - currentY) * ease;
    
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect to cursor
document.querySelectorAll('a, button, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Splash screen
const splashScreen = document.querySelector('.splash-screen');
if (splashScreen) {
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 2500);
}

// Fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

