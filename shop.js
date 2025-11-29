// Sample products data (will be replaced with database data later)
const products = [
    {
        id: 1,
        name: "Chocolate Chip Cookies",
        category: "cookies",
        price: 999,
        description: "Handcrafted with premium Belgian chocolate chunks, these cookies are baked to perfection with a crispy edge and chewy center. Made with real butter and the finest ingredients.",
        emoji: "🍪"
    },
    {
        id: 2,
        name: "Plum Cake",
        category: "cakes",
        price: 1999,
        description: "A delightful cake featuring fresh, juicy plums baked into a golden, buttery batter. The perfect balance of sweet and tart flavors, ideal for any occasion.",
        emoji: "🍰"
    },
    {
        id: 3,
        name: "Gourmet Chocolates",
        category: "chocolates",
        price: 1199,
        description: "Artisan truffles and premium chocolate bars made with the finest cocoa. Each piece is carefully crafted to deliver an exquisite chocolate experience.",
        emoji: "🍫"
    },
    {
        id: 4,
        name: "Oatmeal Cookies",
        category: "cookies",
        price: 899,
        description: "Wholesome and hearty oatmeal cookies made with love. Packed with rolled oats, raisins, and a hint of cinnamon. Perfect for a healthy snack or breakfast on the go.",
        emoji: "🍪"
    },
    {
        id: 5,
        name: "Custom Cakes",
        category: "cakes",
        price: 2999,
        description: "Personalized cakes for every occasion. From birthdays to weddings, our custom cakes are beautifully decorated and made with premium ingredients. Contact us for special orders.",
        emoji: "🎂"
    },
    {
        id: 6,
        name: "Red Velvet Cake",
        category: "cakes",
        price: 2499,
        description: "A classic red velvet cake with cream cheese frosting. Moist, rich, and perfectly balanced with a hint of cocoa and vanilla. A timeless favorite that never disappoints.",
        emoji: "🍰"
    },
    {
        id: 7,
        name: "Double Chocolate Cookies",
        category: "cookies",
        price: 1099,
        description: "For the ultimate chocolate lover. These cookies are loaded with both chocolate chips and cocoa powder, creating an intensely rich and satisfying treat.",
        emoji: "🍪"
    },
    {
        id: 8,
        name: "Dark Chocolate Truffles",
        category: "chocolates",
        price: 1299,
        description: "Luxurious dark chocolate truffles with a smooth, velvety center. Each truffle is hand-rolled and dusted with premium cocoa powder for an elegant finish.",
        emoji: "🍫"
    },
    {
        id: 9,
        name: "Vanilla Bean Cake",
        category: "cakes",
        price: 1899,
        description: "A simple yet elegant vanilla bean cake with real vanilla extract. Light, fluffy, and perfectly sweet. Topped with vanilla buttercream frosting.",
        emoji: "🎂"
    }
];

let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// Initialize shop page
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    displayProducts();
    setupEventListeners();
    setupNavbar();
});

// Setup navbar functionality
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Navbar scroll effect
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

    // Navigation smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navbar.classList.remove('mobile-open');
            }
        });
    });
}

// Display products
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    let filteredProducts = products;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }

    if (filteredProducts.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    grid.innerHTML = filteredProducts.map(product => `
        <div class="shop-product-card">
            <div class="shop-product-image">${product.emoji}</div>
            <div class="shop-product-category">${product.category}</div>
            <h3>${product.name}</h3>
            <p class="shop-product-description">${product.description}</p>
            <div class="shop-product-footer">
                <span class="shop-product-price">₹${product.price.toLocaleString()}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            displayProducts();
        });
    });

    // Search input
    const searchInput = document.getElementById('productSearch');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        displayProducts();
    });

    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('active');
        displayCart();
    });

    // Close cart
    const closeCart = document.getElementById('closeCart');
    closeCart.addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('active');
    });

    // Close cart on outside click
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            document.getElementById('cartModal').classList.remove('active');
        }
    });

    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Checkout functionality will be available soon!');
    });

    // Dropdown category filters
    document.querySelectorAll('.category-filter').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            currentCategory = category;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                if (b.getAttribute('data-category') === category) {
                    b.classList.add('active');
                }
            });
            displayProducts();
        });
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Display cart
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '₹0';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity} × ₹${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString()}</div>
        </div>
    `).join('');

    cartTotal.textContent = `₹${total.toLocaleString()}`;
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('craveCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('craveCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

