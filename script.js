// Scroll effects for Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        header.style.padding = '1rem 0';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }

    // Handle Form Submission dummy logic
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Message Sent Successfully!';
                btn.style.backgroundColor = '#1B5E20';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // Embed dynamically generated images
    const heroBg = document.querySelector('.hero-background');
    if (heroBg) {
        heroBg.style.backgroundImage = "url('images/hero_background_1776074935652.png')";
    }

    const imagesToSet = [
        { id: 'about-img', src: 'images/about_coir_1776074951631.png' },
        { id: 'prod-5kg', src: 'images/5kg_block.png' },
        { id: 'prod-650g', src: 'images/coir_pith_1776074999259.png' },
        { id: 'prod-growbags', src: 'images/grow_bag.png' },
        { id: 'gal-1', src: 'images/about_coir_1776074951631.png' },
        { id: 'gal-2', src: 'images/hero_background_1776074935652.png' },
        { id: 'gal-3', src: 'images/coir_pith_1776074999259.png' },
        { id: 'gal-4', src: 'images/about_coir_1776074951631.png' }
    ];

    imagesToSet.forEach(imgData => {
        const imgEl = document.getElementById(imgData.id);
        if(imgEl) {
            imgEl.src = imgData.src;
        }
    });

    // Add animation classes on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // FAQ Accordion logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.maxHeight = null;
                a.classList.remove('show');
            });
            
            if(!isActive) {
                question.classList.add('active');
                answer.classList.add('show');
                answer.style.maxHeight = answer.scrollHeight + 50 + "px";
            }
        });
    });

    // Apply fade-in to elements
    const elementsToAnimate = document.querySelectorAll('.product-card, .feature-box, .section-title, .about-text, .gallery-grid img, .faq-item, .process-step');
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});
