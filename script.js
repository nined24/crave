// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('mobile-open');
    });
}

// Mobile cart/login logic
function updateMobileNavbar() {
    const navRight = document.querySelector('.nav-right');
    const existingMobileCartLogin = document.querySelector('.mobile-cart-login');

    if (existingMobileCartLogin) {
        existingMobileCartLogin.remove();
    }

    const mobileCartLogin = document.createElement('div');
    mobileCartLogin.className = 'mobile-cart-login';

    // Check if user is logged in (using localStorage as per login.js)
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        // Show cart button
        const cartBtn = document.createElement('button');
        cartBtn.className = 'icon-btn';
        cartBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
        `;
        cartBtn.addEventListener('click', () => {
            window.location.href = 'shop.html';
        });
        mobileCartLogin.appendChild(cartBtn);
    } else {
        // Show login link
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html';
        loginLink.className = 'nav-link';
        loginLink.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Login
        `;
        mobileCartLogin.appendChild(loginLink);
    }

    navRight.appendChild(mobileCartLogin);
}

// Initialize mobile navbar on page load
updateMobileNavbar();

// Update mobile navbar when login state changes
window.addEventListener('storage', (e) => {
    if (e.key === 'userEmail') {
        updateMobileNavbar();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('mobile-open') && 
        !navbar.contains(e.target) && 
        e.target !== mobileMenuBtn) {
        navbar.classList.remove('mobile-open');
    }
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after navigation
            navbar.classList.remove('mobile-open');
        }
    });
});

// Category dropdown functionality
document.querySelectorAll('.dropdown-menu a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
            // Scroll to specific category section
            setTimeout(() => {
                const categorySection = document.querySelector(`.product-category-section[data-category="${category}"]`);
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    categorySection.style.border = '3px solid var(--gold-yellow)';
                    categorySection.style.borderRadius = '8px';
                    categorySection.style.padding = '2rem';
                    setTimeout(() => {
                        categorySection.style.border = '';
                        categorySection.style.padding = '';
                    }, 3000);
                }
            }, 500);
        }
        navbar.classList.remove('mobile-open');
    });
});

// Category card click functionality
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
            // Scroll to specific category section
            setTimeout(() => {
                const categorySection = document.querySelector(`.product-category-section[data-category="${category}"]`);
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    categorySection.style.border = '3px solid var(--gold-yellow)';
                    categorySection.style.borderRadius = '8px';
                    categorySection.style.padding = '2rem';
                    setTimeout(() => {
                        categorySection.style.border = '';
                        categorySection.style.padding = '';
                    }, 3000);
                }
            }, 500);
        }
    });
});

// Search Modal
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeModal = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
    searchModal.style.display = 'block';
    searchInput.focus();
});

closeModal.addEventListener('click', () => {
    searchModal.style.display = 'none';
    searchInput.value = '';
    searchResults.innerHTML = '';
});

window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
});

// Search functionality
const products = [
    // Sandwiches
    { name: 'Nutella Sandwich', category: 'sandwiches', price: '₹75' },
    { name: 'Chocolate Sandwich', category: 'sandwiches', price: '₹60' },
    { name: 'Caramel Sandwich', category: 'sandwiches', price: '₹75' },
    { name: 'Dulce de Leche', category: 'sandwiches', price: '₹90' },
    // Granolas
    { name: 'Rolled Oats Granola with Honey', category: 'granolas', price: '₹1,600/kg' },
    { name: 'Rolled Oats Chocolate Granola', category: 'granolas', price: '₹1,600/kg' },
    { name: 'Rolled Oats Chocolate Orange Granola', category: 'granolas', price: '₹1,800/kg' },
    { name: 'Granola', category: 'granolas', price: '₹240' },
    { name: 'Chocolate Granola', category: 'granolas', price: '₹240' },
    { name: 'Orange Granola', category: 'granolas', price: '₹270' },
    { name: 'Roasted Royal Crunch', category: 'granolas', price: '₹180' },
    // Chocolates
    { name: 'Dutch Truffle', category: 'chocolates', price: 'Price on request' },
    { name: 'Chocolate Orange', category: 'chocolates', price: 'Price on request' },
    { name: 'Chocolate Hazelnut', category: 'chocolates', price: 'Price on request' },
    { name: 'Chocolate Chip', category: 'chocolates', price: 'Price on request' },
    { name: 'Black Forest', category: 'chocolates', price: 'Price on request' },
    { name: 'Coffee Chocolate', category: 'chocolates', price: 'Price on request' },
    { name: 'Chocolate Mousse', category: 'chocolates', price: 'Price on request' },
    // Cakes
    { name: 'Butterscotch Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Pistachio Rose Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Blueberry Cream Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Strawberry Cream Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Mix Fruit Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Ras Malai Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Lotus Biscoff Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Cream Cheese Flavour', category: 'cakes', price: 'Price on request' },
    { name: 'Red Velvet Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Blueberry Cake', category: 'cakes', price: 'Price on request' },
    { name: 'Strawberry Cake', category: 'cakes', price: 'Price on request' },
    // Cheesecakes
    { name: 'Blueberry Cheesecake', category: 'cheesecakes', price: 'Price on request' },
    { name: 'Strawberry Cheesecake', category: 'cheesecakes', price: 'Price on request' },
    { name: 'Lotus Biscoff Cheesecake', category: 'cheesecakes', price: 'Price on request' },
    { name: 'Caramel Cheesecake', category: 'cheesecakes', price: 'Price on request' },
    // Special
    { name: 'Eggless Tiramisu with Ladyfinger', category: 'special', price: 'Price on request' }
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length === 0) return;

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        searchResults.innerHTML = '<p style="color: #666; padding: 1rem;">No products found.</p>';
        return;
    }

    filtered.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.style.cssText = 'padding: 1rem; border-bottom: 1px solid #eee; cursor: pointer; transition: background 0.3s;';
        resultItem.innerHTML = `
            <h4 style="margin-bottom: 0.5rem; color: var(--dark-brown);">${product.name}</h4>
            <p style="color: #666; margin: 0;">${product.price}</p>
        `;
        resultItem.addEventListener('mouseenter', () => {
            resultItem.style.background = '#f5f5f5';
        });
        resultItem.addEventListener('mouseleave', () => {
            resultItem.style.background = 'transparent';
        });
        resultItem.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
                searchModal.style.display = 'none';
            }
        });
        searchResults.appendChild(resultItem);
    });
});

// Shop Now Button
const shopNowBtn = document.getElementById('shopNowBtn');
shopNowBtn.addEventListener('click', () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Cart Button (placeholder for index page)
const cartBtn = document.getElementById('cartBtn');
if (cartBtn && !document.getElementById('cartModal')) {
    cartBtn.addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Product card click animation
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add smooth fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .about-content, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

