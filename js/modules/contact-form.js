/**
 * Verum Luxury - Contact Form System
 * Handles contact form submission with feedback
 */

class ContactForm {
    constructor() {
        this.form = document.getElementById('verum-contact');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const btn = this.form.querySelector('button');
        if (!btn) return;
        
        const originalContent = btn.innerHTML;
        
        // Show loading state
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span> SECURING...';
        btn.disabled = true;
        
        // Simulate secure transmission
        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> SENT';
            btn.classList.remove('bg-secondary', 'text-on-secondary');
            btn.classList.add('bg-emerald-500', 'text-white');
            
            // Reset after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.classList.remove('bg-emerald-500', 'text-white');
                btn.classList.add('bg-secondary', 'text-on-secondary');
                btn.disabled = false;
                this.form.reset();
            }, 3000);
        }, 1500);
    }
}

// Initialize contact form when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.contactForm = new ContactForm();
    });
} else {
    window.contactForm = new ContactForm();
}
