/**
 * Verum Luxury - Theme Toggle System
 * Handles dark/light mode switching with localStorage persistence
 */

class ThemeToggle {
    constructor() {
        this.htmlElement = document.documentElement;
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        
        // Default theme
        this.defaultTheme = 'dark';
        
        this.init();
    }
    
    init() {
        // Load saved theme or use default
        this.loadTheme();
        
        // Setup toggle button
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggle());
        }
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem('verum-theme') || this.defaultTheme;
        this.setTheme(savedTheme);
    }
    
    setTheme(theme) {
        // Remove both classes first
        this.htmlElement.classList.remove('dark', 'light');
        
        // Add the active theme class
        this.htmlElement.classList.add(theme);
        
        // Update icon
        if (this.themeIcon) {
            this.themeIcon.textContent = theme === 'light' ? 'light_mode' : 'contrast';
        }
        
        // Save to localStorage
        localStorage.setItem('verum-theme', theme);
    }
    
    toggle() {
        const currentTheme = this.htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Initialize theme toggle when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.themeToggle = new ThemeToggle();
    });
} else {
    window.themeToggle = new ThemeToggle();
}

// Make toggle function globally available for inline onclick handlers
function toggleTheme() {
    if (window.themeToggle) {
        window.themeToggle.toggle();
    }
}
