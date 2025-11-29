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
        const categoriesSection = document.getElementById('categories');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
            // Highlight the category card
            setTimeout(() => {
                const categoryCard = document.querySelector(`.category-card[data-category="${category}"]`);
                if (categoryCard) {
                    categoryCard.style.border = '2px solid var(--primary-gold)';
                    categoryCard.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        categoryCard.style.border = '';
                        categoryCard.style.transform = '';
                    }, 2000);
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
            // Highlight products of selected category
            setTimeout(() => {
                document.querySelectorAll('.product-card').forEach(productCard => {
                    const productName = productCard.querySelector('h3').textContent.toLowerCase();
                    if (productName.includes(category.slice(0, -1))) {
                        productCard.style.border = '2px solid var(--primary-gold)';
                        productCard.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            productCard.style.border = '';
                            productCard.style.transform = '';
                        }, 2000);
                    }
                });
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
    { name: 'Chocolate Chip Cookies', category: 'cookies', price: '₹999' },
    { name: 'Plum Cake', category: 'cakes', price: '₹1,999' },
    { name: 'Gourmet Chocolates', category: 'chocolates', price: '₹1,199' },
    { name: 'Gourmet Chocolates', category: 'chocolates', price: '₹1,299' },
    { name: 'Oatmeal Cookies', category: 'cookies', price: '₹899' },
    { name: 'Custom Cakes', category: 'cakes', price: 'From ₹2,999' }
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

