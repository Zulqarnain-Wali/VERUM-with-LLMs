/**
 * Verum Luxury - Page-Specific Features
 * Handles interactive elements like architecture rows, parallax, etc.
 */

class PageFeatures {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupArchitectureRows();
        this.setupParallaxEffect();
        this.setupHard3DCards();
    }
    
    setupArchitectureRows() {
        const rows = document.querySelectorAll('.architecture-row');
        
        rows.forEach(row => {
            row.addEventListener('click', () => {
                const content = row.querySelector('.architecture-content');
                const icon = row.querySelector('.material-symbols-outlined');
                
                if (!content || !icon) return;
                
                const isOpen = !content.classList.contains('hidden');
                
                // Close all other rows
                document.querySelectorAll('.architecture-content').forEach(c => {
                    c.classList.add('hidden');
                });
                document.querySelectorAll('.architecture-row .material-symbols-outlined').forEach(i => {
                    if (i.innerText === 'expand_more') {
                        i.style.transform = 'rotate(0deg)';
                    }
                });
                
                // Open current row if it wasn't open
                if (!isOpen) {
                    content.classList.remove('hidden');
                    if (icon.innerText === 'expand_more') {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        });
    }
    
    setupParallaxEffect() {
        document.addEventListener('mousemove', (e) => {
            const amount = 15;
            const x = (e.clientX / window.innerWidth - 0.5) * amount;
            const y = (e.clientY / window.innerHeight - 0.5) * amount;
            
            document.querySelectorAll('img, .glass-card:not(header *)').forEach(el => {
                const depth = el.hasAttribute('data-depth') ? parseFloat(el.getAttribute('data-depth')) : 1;
                el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
            });
        });
    }
    
    setupHard3DCards() {
        const cards = document.querySelectorAll('.hard-3d-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -15;
                const rotateY = ((x - centerX) / centerX) * 15;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                card.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(233,195,73, 0.2)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.boxShadow = `none`;
            });
        });
    }
}

// Initialize page features when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.pageFeatures = new PageFeatures();
    });
} else {
    window.pageFeatures = new PageFeatures();
}
