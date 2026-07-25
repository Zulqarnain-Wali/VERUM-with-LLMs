/**
 * Verum Luxury - Custom Cursor System
 * Handles dual-element cursor (dot + ring) with smooth tracking
 */

class CustomCursor {
    constructor() {
        this.cursorDot = document.getElementById('cursor-dot');
        this.cursorRing = document.getElementById('cursor-ring');
        
        // Mouse position
        this.mouseX = 0;
        this.mouseY = 0;
        
        // Ring position (lagging behind for smooth effect)
        this.ringX = 0;
        this.ringY = 0;
        
        // Easing factor for smooth trail
        this.ease = 0.15;
        
        // Animation frame ID
        this.animationFrame = null;
        
        this.init();
    }
    
    init() {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        
        // Handle interactive elements
        this.setupInteractiveElements();
        
        // Start animation loop for ring
        this.animate();
    }
    
    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Update dot immediately
        if (this.cursorDot) {
            this.cursorDot.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
        }
    }
    
    animate() {
        // Smooth lag effect for ring
        this.ringX += (this.mouseX - this.ringX) * this.ease;
        this.ringY += (this.mouseY - this.ringY) * this.ease;
        
        if (this.cursorRing) {
            this.cursorRing.style.transform = `translate(${this.ringX}px, ${this.ringY}px)`;
        }
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
    
    setupInteractiveElements() {
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .interactive-target, [data-cursor]'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.activate());
            el.addEventListener('mouseleave', () => this.deactivate());
        });
    }
    
    activate() {
        if (this.cursorRing) {
            this.cursorRing.classList.add('active');
        }
    }
    
    deactivate() {
        if (this.cursorRing) {
            this.cursorRing.classList.remove('active');
        }
    }
    
    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
}

// Initialize cursor when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.customCursor = new CustomCursor();
    });
} else {
    window.customCursor = new CustomCursor();
}
