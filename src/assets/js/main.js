/**
 * Main JavaScript file for the Semantic Site
 * Handles basic interactivity and enhancement
 * 
 * @author Seu Nome
 * @version 2.0.0
 */

'use strict';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('🚀 Semantic Site initialized');
    
    // Initialize components
    setupMobileMenu();
    setupFormValidation();
    setupSmoothScrolling();
    setupLazyLoading();
}

/**
 * Setup mobile menu functionality
 */
function setupMobileMenu() {
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('is-open');
        });
    }
}

/**
 * Setup form validation
 */
function setupFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(form)) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

/**
 * Validate form fields
 * @param {HTMLFormElement} form 
 * @returns {boolean}
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            showFieldError(field, 'Este campo é obrigatório');
        } else {
            clearFieldError(field);
        }
        
        // Email validation
        if (field.type === 'email' && field.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                isValid = false;
                showFieldError(field, 'Por favor, insira um email válido');
            }
        }
    });
    
    return isValid;
}

/**
 * Show error message for field
 * @param {HTMLElement} field 
 * @param {string} message 
 */
function showFieldError(field, message) {
    const errorElement = field.parentElement.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('is-invalid');
}

/**
 * Clear error message for field
 * @param {HTMLElement} field 
 */
function clearFieldError(field) {
    const errorElement = field.parentElement.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.style.display = 'none';
    }
    
    field.removeAttribute('aria-invalid');
    field.classList.remove('is-invalid');
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update focus for accessibility
                targetElement.focus();
            }
        });
    });
}

/**
 * Setup lazy loading for images
 */
function setupLazyLoading() {
    // Use native lazy loading if supported
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    } else {
        // Fallback for browsers without native lazy loading
        loadIntersectionObserver();
    }
}

/**
 * Intersection Observer fallback for lazy loading
 */
function loadIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Utility function to debounce events
 * @param {Function} func 
 * @param {number} wait 
 * @param {boolean} immediate 
 * @returns {Function}
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        setupMobileMenu,
        setupFormValidation,
        validateForm,
        debounce
    };
}