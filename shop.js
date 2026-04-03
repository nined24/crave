const products = [
    // Sandwiches
    {
        id: 1,
        name: "Nutella Sandwich",
        category: "sandwiches",
        price: 75,
        displayPrice: "₹75",
        description: "Nutella filled sandwich.",
        emoji: "🥪",
        images: []
    },
    {
        id: 2,
        name: "Chocolate Sandwich",
        category: "sandwiches",
        price: 60,
        displayPrice: "₹60",
        description: "Rich chocolate filled sandwich.",
        emoji: "🥪",
        images: []
    },
    {
        id: 3,
        name: "Caramel Sandwich",
        category: "sandwiches",
        price: 75,
        displayPrice: "₹75",
        description: "Sweet caramel filled sandwich.",
        emoji: "🥪",
        images: []
    },
    {
        id: 4,
        name: "Dulce de Leche",
        category: "sandwiches",
        price: 90,
        displayPrice: "₹90",
        description: "Traditional caramel milk spread sandwich.",
        emoji: "🥪",
        images: []
    },

    // Granolas (packs)
    {
        id: 10,
        name: "Granola (150 gms)",
        category: "granolas",
        price: 240,
        displayPrice: "₹240",
        description: "150 gms pack.",
        emoji: "🥣",
        images: ["photos/granola/IMG_1974.jpg"]
    },
    {
        id: 11,
        name: "Chocolate Granola (150 gms)",
        category: "granolas",
        price: 240,
        displayPrice: "₹240",
        description: "150 gms pack.",
        emoji: "🥣",
        images: ["photos/chocolate_granola/IMG_1974.jpg"]
    },
    {
        id: 12,
        name: "Orange Granola (150 gms)",
        category: "granolas",
        price: 270,
        displayPrice: "₹270",
        description: "150 gms pack.",
        emoji: "🥣",
        images: ["photos/chocolate_orange/IMG_8237.jpg"]
    },
    {
        id: 13,
        name: "Roasted Royal Crunch (150 gms)",
        category: "granolas",
        price: 180,
        displayPrice: "₹180",
        description: "150 gms pack.",
        emoji: "🥣",
        images: ["photos/royal_roasted/IMG_7684.jpg"]
    },

    // Granolas (per kg)
    {
        id: 14,
        name: "Rolled Oats Granola With Honey (per kg)",
        category: "granolas",
        price: 1600,
        displayPrice: "₹1,600 / kg",
        description: "Rolled oats granola with honey.",
        emoji: "🥣",
        images: ["photos/granola/IMG_1966.jpg"]
    },
    {
        id: 15,
        name: "Rolled Oats Chocolate Granola (per kg)",
        category: "granolas",
        price: 1600,
        displayPrice: "₹1,600 / kg",
        description: "Rolled oats chocolate granola.",
        emoji: "🥣",
        images: ["photos/chocolate_granola/IMG_1970.jpg"]
    },
    {
        id: 16,
        name: "Rolled Oats Chocolate Orange Granola (per kg)",
        category: "granolas",
        price: 1800,
        displayPrice: "₹1,800 / kg",
        description: "Rolled oats chocolate orange granola.",
        emoji: "🥣",
        images: ["photos/chocolate_orange/IMG_8226.jpg"]
    },

    // Cookies (prices are for 250g)
    {
        id: 100,
        name: "Oats Almond Chocolate Cookies",
        category: "cookies",
        price: 300,
        displayPrice: "₹300",
        description: "Signature flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/oat_almond/IMG_2406.jpg", 
            "photos/oat_almond/IMG_2383.jpg",
            "photos/oat_almond/IMG_2384.jpg",
            "photos/oat_almond/IMG_2407.jpg"
        ]
    },
    {
        id: 101,
        name: "Double Chocolate Chips Cookies",
        category: "cookies",
        price: 280,
        displayPrice: "₹280",
        description: "Signature flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/double_chocolate/double1.jpg",
            "photos/double_chocolate/double2.jpg",
            "photos/double_chocolate/double3.jpg",
            "photos/double_chocolate/double4.jpg"
        ]
    },
    {
        id: 102,
        name: "Chocolate Chips Cookies",
        category: "cookies",
        price: 250,
        displayPrice: "₹250",
        description: "Signature flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/chocolate_chips/IMG_2193.jpg",
            "photos/chocolate_chips/IMG_2395.jpg",
            "photos/chocolate_chips/IMG_2400.jpg",
            "photos/chocolate_chips/IMG_2404.jpg"
        ]
    },
    {
        id: 103,
        name: "Chocolate Walnuts Cookies",
        category: "cookies",
        price: 300,
        displayPrice: "₹300",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/walnut/walnut1.jpg",
            "photos/walnut/walnut2.jpg",
            "photos/walnut/walnut3.jpg",
            "photos/walnut/walnut4.jpg"
        ]
    },
    {
        id: 104,
        name: "Chocolate Orange Cookies",
        category: "cookies",
        price: 330,
        displayPrice: "₹330",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/chocolate_orange/IMG_8208.jpeg",
            "photos/chocolate_orange/IMG_8215.jpeg",
            "photos/chocolate_orange/IMG_8218.jpeg"
        ]
    },
    {
        id: 105,
        name: "Nutella Stuffed Cookies",
        category: "cookies",
        price: 350,
        displayPrice: "₹350",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/nuttela/Nutella.jpg",
            "photos/nuttela/Nutella2.jpg",
            "photos/nuttela/Nutella3.jpg",
            "photos/nuttela/Nutella4.jpg"
        ]
    },
    {
        id: 106,
        name: "Coffee Crunch Cookies",
        category: "cookies",
        price: 280,
        displayPrice: "₹280",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/coffee/IMG_2579.jpg",
            "photos/coffee/IMG_2580.jpg",
            "photos/coffee/IMG_2581.jpg",
            "photos/coffee/IMG_2582.jpg"
        ]
    },
    {
        id: 107,
        name: "Almond Cranberry Cookies",
        category: "cookies",
        price: 300,
        displayPrice: "₹300",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/almond_cranberry/almond1.jpg", 
            "photos/almond_cranberry/almond2.jpg",
            "photos/almond_cranberry/almond3.jpg",
            "photos/almond_cranberry/almond4.jpg"
        ]
    },
    {
        id: 108,
        name: "Almond Blueberry Cookies",
        category: "cookies",
        price: 300,
        displayPrice: "₹300",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/almond_blueberry/IMG_8159.jpg",
            "photos/almond_blueberry/IMG_8160.jpg",
            "photos/almond_blueberry/IMG_8161.jpg",
            "photos/almond_blueberry/IMG_8162.jpg"
        ]
    },
    {
        id: 109,
        name: "Almond Raisin Cookies",
        category: "cookies",
        price: 280,
        displayPrice: "₹280",
        description: "Classic flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/almond_raisin/almond_raisin1.jpg",
            "photos/almond_raisin/almond_raisin2.jpg",
            "photos/almond_raisin/almond_raisin3.jpg",
            "photos/almond_raisin/almond_raisin4.jpg"
        ]
    },
    {
        id: 110,
        name: "Ragi Oats Chocolate Cookies",
        category: "cookies",
        price: 330,
        displayPrice: "₹330",
        description: "Wholesome flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/ragi/IMG_2416.jpg",
            "photos/ragi/IMG_2417.jpg",
            "photos/ragi/IMG_2418.jpg",
            "photos/ragi/IMG_2419.jpg"
        ]
    },
    {
        id: 111,
        name: "Jowar Almond Cookies",
        category: "cookies",
        price: 320,
        displayPrice: "₹320",
        description: "Wholesome flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/jowar_almond/jowar1.jpg",
            "photos/jowar_almond/jowar2.jpg",
            "photos/jowar_almond/jowar3.jpg",
            "photos/jowar_almond/jowar4.jpg"
        ]
    },
    {
        id: 112,
        name: "Dry Fruit Cookies",
        category: "cookies",
        price: 320,
        displayPrice: "₹320",
        description: "Wholesome flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/shahi_dryfruit_cookies/IMG_8736.jpg", 
            "photos/shahi_dryfruit_cookies/IMG_8740.jpg",
            "photos/shahi_dryfruit_cookies/IMG_8737.jpg",
            "photos/shahi_dryfruit_cookies/IMG_8738.jpg",
            "photos/shahi_dryfruit_cookies/IMG_8739.jpg"
        ]
    },
    {
        id: 113,
        name: "NutriSeeds Cookies",
        category: "cookies",
        price: 350,
        displayPrice: "₹350",
        description: "Wholesome flavor • 250g",
        emoji: "🍪",
        images: [
            "photos/nutriseed/nutri1.jpg",
            "photos/nutriseed/nutri2.jpg",
            "photos/nutriseed/nutri3.jpg",
            "photos/nutriseed/nutri4.jpg"
        ]
    },

    // Cakes (photos available; pricing can be set later)
    {
        id: 200,
        name: "Plum Cake",
        category: "cakes",
        price: 0,
        displayPrice: "Price on request",
        description: "Available on order.",
        emoji: "🍰",
        images: ["photos/plum_cake/IMG_2622.jpg"]
    },
    {
        id: 201,
        name: "Butter Cake",
        category: "cakes",
        price: 0,
        displayPrice: "Price on request",
        description: "Available on order.",
        emoji: "🍰",
        images: ["photos/butter_cake/IMG_2434.jpg", "photos/butter_cake/IMG_2224.jpg", "photos/butter_cake/IMG_2250.jpg"]
    }
];

let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let currentModalProductId = null;
let currentModalImages = [];
let currentModalImageIndex = 0;

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

    // Check if user is logged in and show cart instead of login
    function updateNavbarForLogin() {
        const isLoggedIn = localStorage.getItem('userEmail') !== null;
        const cartBtn = document.getElementById('cartBtn');
        const loginLink = document.getElementById('loginLink');
        
        // On shop page, always show cart button, but show/hide login based on login status
        if (cartBtn) cartBtn.style.display = 'flex';
        if (loginLink) {
            if (isLoggedIn) {
                loginLink.style.display = 'none';
            } else {
                loginLink.style.display = 'flex';
            }
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
                if (navbar.classList.contains('mobile-open')) {
                    navbar.classList.remove('mobile-open');
                }
            }
        });
    });
}

// Helper to generate Add to Cart / Quantity adjuster button
function getProductCartHtml(product, isLarge = false) {
    const canAddToCart = typeof product.price === 'number' && product.price > 0;
    if (!canAddToCart) {
        return `<button class="add-to-cart-btn ${isLarge ? 'large' : ''}" disabled onclick="event.stopPropagation()">Enquire</button>`;
    }

    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
        return `
            <div class="card-quantity-controls ${isLarge ? 'large' : ''}" onclick="event.stopPropagation()">
                <button type="button" class="qty-btn" onclick="updateCartItemQuantity(${product.id}, -1)">-</button>
                <span class="qty-display">${cartItem.quantity}</span>
                <button type="button" class="qty-btn" onclick="updateCartItemQuantity(${product.id}, 1)">+</button>
            </div>
        `;
    } else {
        return `<button class="add-to-cart-btn ${isLarge ? 'large' : ''}" onclick="event.stopPropagation(); addToCart(${product.id}, event)">Add to Cart</button>`;
    }
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

    grid.innerHTML = filteredProducts.map(product => {
        const canAddToCart = typeof product.price === 'number' && product.price > 0;
        const priceText = product.displayPrice ?? (canAddToCart ? `₹${product.price.toLocaleString()}` : 'Price on request');
        const imageSrc = (product.images && product.images.length > 0) ? product.images[0] : '';
        return `
            <div class="shop-product-card" onclick="openProductModal(${product.id})">
                <div class="shop-product-image">
                    <img
                        src="${imageSrc}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.querySelector('.shop-product-fallback').style.display='flex';"
                    />
                    <div class="shop-product-fallback" style="display:none;">${product.emoji ?? '🍪'}</div>
                </div>
                <div class="shop-product-category">${product.category}</div>
                <h3>${product.name}</h3>
                <p class="shop-product-description">${product.description}</p>
                <div class="shop-product-footer">
                    <span class="shop-product-price">${priceText}</span>
                    <div id="cart-action-${product.id}">
                        ${getProductCartHtml(product)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
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
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            document.getElementById('cartModal').classList.add('active');
            displayCart();
        });
    }

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

    // Setup Product Modal Close
    const closeProductModal = document.getElementById('closeProductModal');
    if (closeProductModal) {
        closeProductModal.addEventListener('click', () => {
            document.getElementById('productModal').classList.remove('active');
        });
    }
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target.id === 'productModal') {
                productModal.classList.remove('active');
            }
        });
    }
    
    // Carousel Buttons
    const prevBtn = document.getElementById('modalPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => changeModalImage(-1));
    const nextBtn = document.getElementById('modalNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => changeModalImage(1));

    // Apply category from URL e.g. shop.html?category=cookies
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get('category');
    if (urlCategory) {
        currentCategory = urlCategory;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-category') === urlCategory);
        });
        const allBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (allBtn && urlCategory === 'all') allBtn.classList.add('active');
        displayProducts();
    }
}

// Open detailed product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentModalProductId = productId;

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalOneLiner').textContent = product.description;
    // Use a long description if added to the object in the future, else fallback
    document.getElementById('modalDesc').textContent = product.longDescription || "Made with premium ingredients and baked to perfection. Experience the rich taste and gourmet quality of Cravé in every bite.";
    
    const canAddToCart = typeof product.price === 'number' && product.price > 0;
    document.getElementById('modalPrice').textContent = product.displayPrice ?? (canAddToCart ? `₹${product.price.toLocaleString()}` : 'Price on request');

    currentModalImages = product.images && product.images.length > 0 ? product.images : [];
    currentModalImageIndex = 0;
    updateModalGallery();

    document.getElementById('modalCartAction').innerHTML = getProductCartHtml(product, true);
    document.getElementById('productModal').classList.add('active');
}

function updateModalGallery() {
    const mainImage = document.getElementById('modalMainImage');
    const prevBtn = document.getElementById('modalPrevBtn');
    const nextBtn = document.getElementById('modalNextBtn');
    const thumbnails = document.getElementById('modalThumbnails');
    
    if (currentModalImages.length === 0) {
        mainImage.style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        thumbnails.style.display = 'none';
        return;
    }

    mainImage.style.display = 'block';
    mainImage.src = currentModalImages[currentModalImageIndex];
    mainImage.onerror = function() { this.style.display = 'none'; };

    if (currentModalImages.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        thumbnails.style.display = 'flex';
        
        thumbnails.innerHTML = currentModalImages.map((img, index) => `
            <img src="${img}" class="thumbnail ${index === currentModalImageIndex ? 'active' : ''}" 
                 onclick="setModalImageIndex(${index})" onerror="this.style.display='none'">
        `).join('');
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        thumbnails.style.display = 'none';
    }
}

function setModalImageIndex(index) {
    currentModalImageIndex = index;
    updateModalGallery();
}

function changeModalImage(delta) {
    if (currentModalImages.length <= 1) return;
    currentModalImageIndex += delta;
    if (currentModalImageIndex < 0) {
        currentModalImageIndex = currentModalImages.length - 1;
    } else if (currentModalImageIndex >= currentModalImages.length) {
        currentModalImageIndex = 0;
    }
    updateModalGallery();
}

// Update quantity for an item
function updateCartItemQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    } else if (delta > 0) {
        const product = products.find(p => p.id === productId);
        if (product) cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    displayCart();
    
    // Refresh product card and modal button UI implicitly
    const cardAction = document.getElementById(`cart-action-${productId}`);
    if (cardAction) cardAction.innerHTML = getProductCartHtml(products.find(p => p.id === productId));
    const modalAction = document.getElementById('modalCartAction');
    if (modalAction && currentModalProductId === productId) modalAction.innerHTML = getProductCartHtml(products.find(p => p.id === productId), true);
}

// Add to cart
function addToCart(productId, e) {
    if (e) e.stopPropagation();
    updateCartItemQuantity(productId, 1);
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
                <div class="cart-item-quantity">
                    <div class="card-quantity-controls">
                        <button type="button" class="qty-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button type="button" class="qty-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-item-price">
                <div style="font-size: 0.8rem; color: #666; margin-bottom: 0.2rem;">₹${item.price.toLocaleString()} each</div>
                ₹${(item.price * item.quantity).toLocaleString()}
            </div>
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
