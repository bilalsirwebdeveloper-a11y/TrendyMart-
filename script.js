// LOADER
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// STICKY NAVBAR
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// COUNTDOWN TIMER
function updateCountdown() {
    // Set the date we're counting down to (3 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);
    
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
        }
    }, 1000);
}

// Start countdown
updateCountdown();

// SCROLL REVEAL ANIMATION
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .section-title');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.querySelectorAll('.feature-card, .product-card, .section-title').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// SEARCH OVERLAY
const searchIcon = document.getElementById('searchIcon');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        // Create search overlay if it doesn't exist
        if (!document.querySelector('.search-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'search-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10,10,10,0.95);
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            overlay.innerHTML = `
                <div style="width: 80%; max-width: 600px;">
                    <input type="text" placeholder="Search for products..." style="
                        width: 100%;
                        padding: 20px;
                        font-size: 24px;
                        background: transparent;
                        border: none;
                        border-bottom: 2px solid var(--gold);
                        color: white;
                        outline: none;
                    ">
                    <div style="text-align: center; margin-top: 20px; color: var(--gray);">
                        Press ESC to close
                    </div>
                </div>
                <i class="fas fa-times" style="
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    font-size: 30px;
                    color: white;
                    cursor: pointer;
                "></i>
            `;
            
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
            
            // Close functionality
            overlay.querySelector('.fa-times').addEventListener('click', function() {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            });
            
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                    }, 300);
                }
            });
            
            // ESC key to close
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                    }, 300);
                    document.removeEventListener('keydown', escHandler);
                }
            });
        }
    });
}

// ADD TO CART FUNCTIONALITY
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Create toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: var(--gold);
            color: var(--black);
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        toast.textContent = '✓ Added to cart!';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2000);
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// WISHLIST FUNCTIONALITY
document.querySelectorAll('.product-wishlist').forEach(wishlist => {
    wishlist.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = 'var(--gold)';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
        }
    });
});

// NEWSLETTER FORM
document.querySelector('.newsletter-form button')?.addEventListener('click', function() {
    const input = document.querySelector('.newsletter-form input');
    if (input.value.trim() !== '') {
        alert('Thank you for subscribing! Check your email for 10% off.');
        input.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});