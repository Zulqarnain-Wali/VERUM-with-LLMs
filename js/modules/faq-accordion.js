/**
 * Verum Luxury - FAQ Accordion System
 * Handles accordion expand/collapse functionality
 */

class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        if (this.faqItems.length === 0) return;
        
        this.faqItems.forEach((item, index) => {
            const button = item.querySelector('button');
            if (button) {
                button.addEventListener('click', () => this.toggleAccordion(item));
            }
        });
        
        // Initialize first item as open
        if (this.faqItems.length > 0) {
            const firstButton = this.faqItems[0].querySelector('button');
            if (firstButton) {
                this.toggleAccordion(this.faqItems[0]);
            }
        }
    }
    
    toggleAccordion(item) {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');
        const isActive = item.classList.contains('active');
        
        // Close all other accordions
        this.faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherContent = otherItem.querySelector('.faq-content');
                if (otherContent) {
                    otherContent.style.maxHeight = null;
                }
            }
        });
        
        // Toggle current
        if (isActive) {
            item.classList.remove('active');
            if (content) {
                content.style.maxHeight = null;
            }
        } else {
            item.classList.add('active');
            if (content) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}

// Initialize FAQ accordion when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.faqAccordion = new FAQAccordion();
    });
} else {
    window.faqAccordion = new FAQAccordion();
}
