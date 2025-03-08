// Mobile Menu Toggle with smooth transition
document.querySelector('.mobile-menu').addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show-menu');
    if (navMenu.classList.contains('show-menu')) {
        navMenu.style.transition = 'transform 0.3s ease-in-out';
        navMenu.style.transform = 'translateX(0)';
    } else {
        navMenu.style.transition = 'transform 0.3s ease-in-out';
        navMenu.style.transform = 'translateX(-100%)';
    }
});

// Smooth Scroll with scroll position highlight
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight active link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu after selection on smaller screens
        if(window.innerWidth <= 768) {
            document.querySelector('nav ul').classList.remove('show-menu');
        }
    });
});

// Intersection Observer for fade-in effect with optional delay
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.6s ease-out';
        }
    });
});

// Setting initial styles for each section to be invisible and animated
document.querySelectorAll('.section').forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = `all 0.6s ease-out ${index * 0.2}s`; // Delay for each section
    observer.observe(section);
});

// Adding animation to flower-divider and timeline as well
document.querySelectorAll('.flower-divider').forEach((divider, index) => {
    divider.style.opacity = 0;
    divider.style.transform = 'translateY(20px)';
    divider.style.transition = `all 0.6s ease-out ${index * 0.2}s`; // Delay for each flower divider
    observer.observe(divider);
});

document.querySelectorAll('.timeline').forEach((timeline, index) => {
    timeline.style.opacity = 0;
    timeline.style.transform = 'translateY(20px)';
    timeline.style.transition = `all 0.6s ease-out ${index * 0.2}s`; // Delay for each timeline
    observer.observe(timeline);
});

// Event Cards Animation with staggered delay
document.querySelectorAll('.event-card').forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.2}s`; // Staggered delay for each card
    observer.observe(card);
});

// Button Hover Effect (Enlarging effect with scale transition)
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('mouseenter', function() {
        button.style.transition = 'transform 0.3s ease-in-out';
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', function() {
        button.style.transition = 'transform 0.3s ease-in-out';
        button.style.transform = 'scale(1)';
    });
});

// Add smooth background transition for sections when navigating via anchor links
const sections = document.querySelectorAll('.section');
const sectionOffsets = [...sections].map(section => section.offsetTop);
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;
    sections.forEach((section, index) => {
        if (currentScroll >= sectionOffsets[index] - 50 && currentScroll < sectionOffsets[index + 1] - 50) {
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.classList.remove('active');
            });
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
});

// Back-to-Top Button Animation (only visible after scrolling down)
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.opacity = 1;
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = 0;
        backToTopButton.style.transform = 'translateY(20px)';
    }
});

// Event for when a user resizes the window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('nav ul');
        navMenu.style.transform = 'translateX(0)'; // Ensure nav menu is open on larger screens
    }
});
