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

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('mobile-open') && 
        !navbar.contains(e.target) && 
        e.target !== mobileMenuBtn) {
        navbar.classList.remove('mobile-open');
    }
});

// Check if user is logged in and show cart instead of login
function updateNavbarForLogin() {
    const isLoggedIn = localStorage.getItem('userEmail') !== null;
    const cartBtn = document.getElementById('cartBtn');
    const loginLink = document.getElementById('loginLink');
    
    if (isLoggedIn) {
        if (cartBtn) cartBtn.style.display = 'flex';
        if (loginLink) loginLink.style.display = 'none';
    } else {
        if (cartBtn) cartBtn.style.display = 'none';
        if (loginLink) loginLink.style.display = 'flex';
    }
}

// Call on page load
updateNavbarForLogin();

// Update navbar when login state changes
window.addEventListener('storage', (e) => {
    if (e.key === 'userEmail') {
        updateNavbarForLogin();
    }
});

// Also check on focus (when returning from login page)
window.addEventListener('focus', updateNavbarForLogin);

// Navigation smooth scroll (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        if (navbar.classList.contains('mobile-open')) {
            navbar.classList.remove('mobile-open');
        }
    });
});

// Category dropdown functionality (redirect to shop page)
document.querySelectorAll('.dropdown-menu a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        window.location.href = `shop.html?category=${encodeURIComponent(category)}`;
    });
});

// Category card click functionality (redirect to shop page)
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        window.location.href = `shop.html?category=${encodeURIComponent(category)}`;
    });
});

// Search functionality (only for shop page, removed from home)
const searchProducts = [
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
    { name: 'Butter Cake', category: 'cakes', price: 'Price on request' },
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

// Search functionality only available on shop page
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query.length === 0) return;

        const filtered = searchProducts.filter(product => 
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
                    const searchModal = document.getElementById('searchModal');
                    if (searchModal) searchModal.style.display = 'none';
                }
            });
            searchResults.appendChild(resultItem);
        });
    });
}

// Shop Now Button (go to shop page)
const shopNowBtn = document.getElementById('shopNowBtn');
if (shopNowBtn) {
    shopNowBtn.addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
}

// Cart Button
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        const isShopPage = window.location.pathname.toLowerCase().endsWith('/shop.html') || window.location.pathname.toLowerCase().endsWith('shop.html');
        if (!isShopPage) {
            window.location.href = 'shop.html';
        }
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
