/**
 * Verum Luxury - Mobile Navigation System
 * Handles hamburger menu and mobile drawer
 */

class MobileNav {
    constructor() {
        this.hamburgerBtn = document.getElementById('hamburger');
        this.mobileNav = document.getElementById('mobile-nav');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        // Setup hamburger button
        if (this.hamburgerBtn) {
            this.hamburgerBtn.addEventListener('click', () => this.toggle());
        }
        
        // Close drawer when clicking on a link
        if (this.mobileNav) {
            const links = this.mobileNav.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.isOpen = true;
        
        if (this.hamburgerBtn) {
            this.hamburgerBtn.classList.add('open');
        }
        
        if (this.mobileNav) {
            this.mobileNav.classList.add('open');
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.isOpen = false;
        
        if (this.hamburgerBtn) {
            this.hamburgerBtn.classList.remove('open');
        }
        
        if (this.mobileNav) {
            this.mobileNav.classList.remove('open');
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Initialize mobile nav when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.mobileNav = new MobileNav();
    });
} else {
    window.mobileNav = new MobileNav();
}

// Make toggle function globally available for inline onclick handlers
function toggleMobileNav() {
    if (window.mobileNav) {
        window.mobileNav.toggle();
    }
}
