/**
 * Testimonials Section JavaScript
 * Handles animations, interactions, and dynamic features
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        animationDelay: 200,
        observerThreshold: 0.1,
        starAnimationDelay: 100
    };

    // DOM Elements
    let testimonialCards;
    let stars;
    let observer;

    /**
     * Initialize the testimonials functionality
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setup);
        } else {
            setup();
        }
    }

    /**
     * Setup all testimonials functionality
     */
    function setup() {
        // Cache DOM elements
        cacheElements();
        
        // Setup intersection observer for animations
        setupIntersectionObserver();
        
        // Add hover effects
        setupHoverEffects();
        
        // Setup star animations
        setupStarAnimations();
        
        // Setup keyboard accessibility
        setupAccessibility();
        
        console.log('Testimonials section initialized successfully');
    }

    /**
     * Cache frequently used DOM elements
     */
    function cacheElements() {
        testimonialCards = document.querySelectorAll('.testimonial-card');
        stars = document.querySelectorAll('.star');
    }

    /**
     * Setup intersection observer for scroll animations
     */
    function setupIntersectionObserver() {
        // Check if browser supports Intersection Observer
        if (!window.IntersectionObserver) {
            // Fallback: add animation class immediately
            testimonialCards.forEach(card => {
                card.classList.add('fade-in');
            });
            return;
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, index * CONFIG.animationDelay);
                    
                    // Stop observing this element
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: CONFIG.observerThreshold,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all testimonial cards
        testimonialCards.forEach(card => {
            observer.observe(card);
        });
    }

    /**
     * Setup hover effects for testimonial cards
     */
    function setupHoverEffects() {
        testimonialCards.forEach(card => {
            const customerImage = card.querySelector('.customer-image');
            
            card.addEventListener('mouseenter', () => {
                // Add subtle pulse effect to stars on hover
                const cardStars = card.querySelectorAll('.star.filled');
                cardStars.forEach((star, index) => {
                    setTimeout(() => {
                        star.style.transform = 'scale(1.1)';
                    }, index * 50);
                });
            });

            card.addEventListener('mouseleave', () => {
                // Reset star animations
                const cardStars = card.querySelectorAll('.star.filled');
                cardStars.forEach(star => {
                    star.style.transform = 'scale(1)';
                });
            });
        });
    }

    /**
     * Setup star rating animations
     */
    function setupStarAnimations() {
        // Animate stars on scroll into view
        const starContainers = document.querySelectorAll('.testimonial-rating');
        
        starContainers.forEach(container => {
            const containerStars = container.querySelectorAll('.star');
            
            // Create observer for star animations
            if (window.IntersectionObserver) {
                const starObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateStars(containerStars);
                            starObserver.unobserve(entry.target);
                        }
                    });
                });
                
                starObserver.observe(container);
            } else {
                // Fallback for browsers without Intersection Observer
                animateStars(containerStars);
            }
        });
    }

    /**
     * Animate individual stars
     */
    function animateStars(stars) {
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.opacity = '0';
                star.style.transform = 'scale(0.5)';
                
                setTimeout(() => {
                    star.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    star.style.opacity = '1';
                    star.style.transform = 'scale(1)';
                }, 50);
            }, index * CONFIG.starAnimationDelay);
        });
    }

    /**
     * Setup keyboard accessibility
     */
    function setupAccessibility() {
        testimonialCards.forEach(card => {
            // Make cards focusable
            card.setAttribute('tabindex', '0');
            
            // Add keyboard interaction
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Trigger hover effect on keyboard activation
                    card.dispatchEvent(new Event('mouseenter'));
                    
                    setTimeout(() => {
                        card.dispatchEvent(new Event('mouseleave'));
                    }, 1000);
                }
            });
        });
    }

    /**
     * Utility function to generate stars programmatically
     * Useful if you want to add testimonials dynamically
     */
    function generateStars(rating, maxRating = 5) {
        let starsHTML = '';
        
        for (let i = 1; i <= maxRating; i++) {
            const filled = i <= rating ? 'filled' : '';
            starsHTML += `<span class="star ${filled}">★</span>`;
        }
        
        return starsHTML;
    }

    /**
     * Add a new testimonial dynamically
     * Useful for Shopify apps that need to add testimonials via JavaScript
     */
    function addTestimonial(testimonialData) {
        const { name, role, content, rating, image } = testimonialData;
        
        const testimonialHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <div class="testimonial-rating">
                        ${generateStars(rating)}
                    </div>
                    <blockquote class="testimonial-quote">
                        <p>"${content}"</p>
                    </blockquote>
                    <div class="testimonial-customer">
                        <div class="customer-avatar">
                            <img src="${image}" alt="${name} testimonial" class="customer-image">
                        </div>
                        <div class="customer-details">
                            <p class="customer-name">${name}</p>
                            <p class="customer-role">${role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const grid = document.querySelector('.testimonials-grid');
        if (grid) {
            grid.insertAdjacentHTML('beforeend', testimonialHTML);
            
            // Re-cache elements and setup effects for new testimonial
            cacheElements();
            const newCard = grid.lastElementChild;
            setupHoverEffects();
            
            // Animate the new testimonial
            setTimeout(() => {
                newCard.classList.add('fade-in');
            }, 100);
        }
    }

    /**
     * Cleanup function
     */
    function cleanup() {
        if (observer) {
            observer.disconnect();
        }
    }

    // Public API
    window.TestimonialsSection = {
        init,
        addTestimonial,
        generateStars,
        cleanup
    };

    // Auto-initialize
    init();

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

})();