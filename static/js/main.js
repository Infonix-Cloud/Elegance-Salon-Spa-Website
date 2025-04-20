/**
 * Elegance Salon & Spa
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initAnimations();
    initForms();
    
    // Add any page-specific initializations based on current page
    if (document.querySelector('.testimonials')) {
        initTestimonialCarousel();
    }
});

/**
 * Initialize navbar behavior
 */
function initNavbar() {
    // Change navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });

        // Set initial state based on scroll position
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Handle mobile navbar toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
}

/**
 * Initialize subtle animations for page elements
 */
function initAnimations() {
    // Add fade-in animation to sections as they come into view
    const sections = document.querySelectorAll('.section-padding');
    
    // If IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        sections.forEach(section => {
            section.classList.add('fade-in');
        });
    }
    
    // Add hover animations to cards
    const cards = document.querySelectorAll('.service-card, .team-card, .testimonial-card, .package-card, .job-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
        });
    });
}

/**
 * Initialize form handling
 */
function initForms() {
    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!validateForm(contactForm)) {
                event.preventDefault();
            }
        });
    }
    
    // Application form validation
    const applicationForm = document.querySelector('.application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            if (!validateForm(applicationForm)) {
                event.preventDefault();
            }
        });
    }
}

/**
 * Validate form inputs
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(form) {
    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            highlightInvalidField(input);
        } else {
            removeInvalidHighlight(input);
            
            // Additional validation for email fields
            if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                highlightInvalidField(input, 'Please enter a valid email address');
            }
        }
    });
    
    return isValid;
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Highlight invalid form field
 * @param {HTMLElement} field - The field to highlight
 * @param {string} message - Optional custom error message
 */
function highlightInvalidField(field, message = 'This field is required') {
    field.classList.add('is-invalid');
    
    // Create or update error message
    let errorMessage = field.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('invalid-feedback')) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'invalid-feedback';
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
    
    errorMessage.textContent = message;
}

/**
 * Remove invalid highlight from form field
 * @param {HTMLElement} field - The field to update
 */
function removeInvalidHighlight(field) {
    field.classList.remove('is-invalid');
    
    // Remove error message if it exists
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('invalid-feedback')) {
        errorMessage.textContent = '';
    }
}

/**
 * Initialize testimonial carousel/rotation if needed
 */
function initTestimonialCarousel() {
    // This is a placeholder function in case you want to add a testimonial carousel/slider later
    // For now, we're using a static grid layout, but this could be expanded
    console.log('Testimonials section initialized');
}

/**
 * Add smooth scrolling for anchor links
 * @param {Event} e - Click event
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '') {
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add .fade-in CSS class for animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .section-hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);
