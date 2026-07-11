// TaiZone E-commerce Website Controller

// 1. Curated Product Database (12 Products)
const productsData = [
    {
        id: "prod-1",
        title: "AeroBuds Pro Wireless Earbuds",
        brand: "AeroSound",
        category: "electronics",
        desc: "Experience pure sonic purity with active noise cancellation, 30-hour battery life, and crystal-clear high-fidelity audio drivers. Sweat-resistant casing makes them perfect for workouts.",
        price: 149.00,
        image: "https://picsum.photos/400/300?random=1",
        rating: 4.8,
        reviews: 124,
        specs: {
            "Battery Life": "Up to 30 Hours (with charging case)",
            "Connectivity": "Bluetooth 5.3",
            "Waterproof Rating": "IPX4 Sweat Resistant",
            "Weight": "5.4g per earbud"
        }
    },
    {
        id: "prod-2",
        title: "Vortex AMOLED Smart Band",
        brand: "Vortex",
        category: "electronics",
        desc: "Stay tracked and in tune with an ultra-bright AMOLED display, continuous heart rate sensor, blood oxygen tracking, and 14 days of power on a single charge.",
        price: 99.00,
        image: "https://picsum.photos/400/300?random=2",
        rating: 4.5,
        reviews: 98,
        specs: {
            "Display": "1.62-inch AMOLED Touchscreen",
            "Battery Reserve": "Up to 14 Days",
            "Sensors": "Heart Rate, SpO2, Accelerometer",
            "Strap Material": "Hypoallergenic TPU"
        }
    },
    {
        id: "prod-3",
        title: "Lumen 100W GaN Fast Charger",
        brand: "Lumen Power",
        category: "electronics",
        desc: "The only charger you need. Utilizing advanced Gallium Nitride (GaN) technology to deliver 100W of rapid charging power through 3 USB-C and 1 USB-A port.",
        price: 49.00,
        image: "https://picsum.photos/400/300?random=3",
        rating: 4.7,
        reviews: 215,
        specs: {
            "Output Power": "100W Max USB-C PD",
            "Ports": "3x USB-C, 1x USB-A",
            "Technology": "GaN Fast Charging Technology",
            "Safety Features": "Over-voltage, short-circuit protection"
        }
    },
    {
        id: "prod-4",
        title: "KeyQuest Mech Keyboard",
        brand: "KeyQuest",
        category: "electronics",
        desc: "Hot-swappable mechanical switches, custom RGB backlighting, and a premium double-shot PBT keycap set. Features silent red switches for ultimate productivity.",
        price: 129.00,
        image: "https://picsum.photos/400/300?random=4",
        rating: 4.9,
        reviews: 86,
        specs: {
            "Layout": "75% compact mechanical layout",
            "Switches": "Outemu Silent Red (Hot-swappable)",
            "Keycaps": "Double-shot PBT Cherry profile",
            "Backlighting": "16.8 million color RGB"
        }
    },
    {
        id: "prod-5",
        title: "Thermobox Smart UV Bottle",
        brand: "Thermobox",
        category: "lifestyle",
        desc: "Keep your drinks cold for 24 hours and purify your water at the touch of a button. Features a built-in UV-C sterilization cap that neutralizes 99.9% of bacteria.",
        price: 59.00,
        image: "https://picsum.photos/400/300?random=5",
        rating: 4.6,
        reviews: 73,
        specs: {
            "Capacity": "600 ml / 20 oz",
            "Sterilization": "Built-in UV-C LED sterilization cap",
            "Insulation": "Double-wall vacuum stainless steel",
            "Battery": "USB-Rechargeable (lasts 1 month)"
        }
    },
    {
        id: "prod-6",
        title: "Aether Minimalist Oil Diffuser",
        brand: "Aether Home",
        category: "lifestyle",
        desc: "Create a peaceful sanctuary in any room. Uses ultrasonic waves to diffuse essential oils silently, complete with an ambient warm glowing ring.",
        price: 39.00,
        image: "https://picsum.photos/400/300?random=6",
        rating: 4.4,
        reviews: 142,
        specs: {
            "Capacity": "200 ml tank",
            "Misting time": "Up to 8 hours (interval misting)",
            "Noise level": "Less than 25dB",
            "Safety": "Auto-shutoff when water runs out"
        }
    },
    {
        id: "prod-7",
        title: "Nomad Slim RFID Wallet",
        brand: "Nomad Leather",
        category: "lifestyle",
        desc: "Constructed with premium Horween full-grain leather and an aluminum chamber to block RFID scanning. Holds up to 10 cards and cash without bulking.",
        price: 29.00,
        image: "https://picsum.photos/400/300?random=7",
        rating: 4.7,
        reviews: 310,
        specs: {
            "Material": "Horween Full-Grain Leather & Aluminum",
            "Card Capacity": "Up to 10 cards plus cash",
            "Security": "RFID Blocking chamber",
            "Dimensions": "10.2 x 6.5 x 1.2 cm"
        }
    },
    {
        id: "prod-8",
        title: "Ergogrip Aluminum Laptop Stand",
        brand: "Ergogrip",
        category: "lifestyle",
        desc: "Relieve neck strain. Folding aluminum laptop stand with non-slip silicone pads and 6 height adjustment options. Cools your laptop naturally via air circulation.",
        price: 35.00,
        image: "https://picsum.photos/400/300?random=8",
        rating: 4.5,
        reviews: 115,
        specs: {
            "Height Settings": "6 options (5.5cm to 15.5cm)",
            "Material": "Sandblasted Silver Anodized Aluminum",
            "Weight Capacity": "Supports up to 20kg",
            "Compatibility": "Laptops 10 to 15.6 inches"
        }
    },
    {
        id: "prod-9",
        title: "Urban Packer Commuter Backpack",
        brand: "Urban Gear",
        category: "apparel",
        desc: "Waterproof canvas shell, padded laptop compartment (up to 16 inches), hidden security pocket, and ergonomic weight-distribution shoulder straps.",
        price: 89.00,
        image: "https://picsum.photos/400/300?random=9",
        rating: 4.8,
        reviews: 167,
        specs: {
            "Volume": "24 Liters",
            "Material": "Waterproof 900D Nylon Shell",
            "Laptop Compartment": "Padded sleeve for up to 16-inch laptops",
            "Zippers": "Heavy-duty YKK zippers"
        }
    },
    {
        id: "prod-10",
        title: "HydroShield Windbreaker Jacket",
        brand: "HydroShield",
        category: "apparel",
        desc: "Ultra-light windbreaker engineered with DWR water-repellent coating. Features an adjustable storm hood, zip pockets, and packable pocket design.",
        price: 119.00,
        image: "https://picsum.photos/400/300?random=10",
        rating: 4.6,
        reviews: 54,
        specs: {
            "Fabric": "100% Recycled Polyester Ripstop",
            "Coating": "DWR Water-Repellent",
            "Weight": "180g (highly packable)",
            "Fit": "Ergonomic slim fit"
        }
    },
    {
        id: "prod-11",
        title: "Apex Sport Knit Sneakers",
        brand: "Apex Athletic",
        category: "apparel",
        desc: "Engineered 3D knit upper for maximum breathability. Features a responsive foam midsole that absorbs impact and a high-traction rubber outsole.",
        price: 79.00,
        image: "https://picsum.photos/400/300?random=11",
        rating: 4.4,
        reviews: 82,
        specs: {
            "Upper Material": "Engineered Breathable 3D Knit",
            "Midsole": "Apex Cushion EVA Foam",
            "Outsole": "Vibram high-traction rubber",
            "Weight": "240g per shoe"
        }
    },
    {
        id: "prod-12",
        title: "Chronos Minimalist Watch",
        brand: "Chronos",
        category: "apparel",
        desc: "Sleek, minimalist design featuring a surgical-grade stainless steel case, sapphire crystal glass, and a genuine Italian leather strap. Water resistant.",
        price: 199.00,
        image: "https://picsum.photos/400/300?random=12",
        rating: 4.9,
        reviews: 43,
        specs: {
            "Case Diameter": "40 mm",
            "Glass": "Scratch-Resistant Sapphire Crystal",
            "Movement": "Miyota Japanese Quartz",
            "Strap": "20mm Genuine Italian Leather"
        }
    }
];

// 2. Global State Variables
let cart = [];
let currentUser = null;
let isMockLoggedIn = false;
let isClerkActive = false;
let clerkInstance = null;

// Replace with a dummy Clerk Publishable Key for initialization test
const CLERK_PUBLISHABLE_KEY = "pk_test_Y2xlcmsuYWNjb3VudHMuZGV2JA";

// 3. App Controller Initialization
window.addEventListener("DOMContentLoaded", async () => {
    loadCartFromLocalStorage();
    setupRouter();
    setupCartActions();
    setupSortingAndFilters();
    setupCheckoutForm();
    await initAuth();
});

// 4. Client-side Router
function setupRouter() {
    function navigateToView() {
        const hash = window.location.hash || "#home";
        
        // Hide all views
        document.querySelectorAll(".route-view").forEach(view => view.classList.add("hidden"));
        
        // Remove active class from nav link items
        document.querySelectorAll(".nav-link-item").forEach(link => link.classList.remove("active"));
        document.getElementById("cart-badge-trigger").classList.remove("active");

        if (hash === "#home" || hash === "") {
            document.getElementById("view-home").classList.remove("hidden");
            document.querySelectorAll(".nav-link-item")[0]?.classList.add("active");
            renderFeaturedProducts();
        } else if (hash === "#products") {
            document.getElementById("view-products").classList.remove("hidden");
            document.querySelectorAll(".nav-link-item")[0]?.classList.add("active");
            renderAllProducts();
        } else if (hash.startsWith("#product-detail")) {
            document.getElementById("view-product-detail").classList.remove("hidden");
            const urlParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
            const id = urlParams.get("id");
            renderProductDetail(id);
        } else if (hash === "#cart") {
            document.getElementById("view-cart").classList.remove("hidden");
            document.getElementById("cart-badge-trigger").classList.add("active");
            renderCartPage();
        } else if (hash === "#checkout") {
            document.getElementById("view-checkout").classList.remove("hidden");
            renderCheckoutPage();
        }

        // Scroll page to top on routing
        window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", navigateToView);
    navigateToView(); // Initial run
    
    // Wire category card clicks on landing page
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.getAttribute("data-category");
            window.location.hash = "#products";
            
            // Set filter radio selection
            setTimeout(() => {
                const radio = document.querySelector(`input[name="category-filter"][value="${cat}"]`);
                if (radio) {
                    radio.checked = true;
                    renderAllProducts();
                }
            }, 100);
        });
    });
}

// 5. Authentication Initialization (Clerk with Mock Fallback)
async function initAuth() {
    const loadingSpinner = document.getElementById("auth-loading-spinner");
    const clerkUserBtn = document.getElementById("clerk-user-button");
    const clerkSignBtn = document.getElementById("clerk-signin-btn");
    const fallbackUi = document.getElementById("fallback-auth-ui");

    // Check if Clerk object exists from CDN script
    if (window.Clerk) {
        try {
            clerkInstance = window.Clerk;
            // Load Clerk
            await clerkInstance.load({ publishableKey: CLERK_PUBLISHABLE_KEY });
            isClerkActive = true;
            loadingSpinner.classList.add("hidden");
            
            // Render Clerk user button or sign in triggers
            if (clerkInstance.user) {
                currentUser = {
                    name: clerkInstance.user.fullName,
                    email: clerkInstance.user.primaryEmailAddress.emailAddress,
                    avatar: clerkInstance.user.imageUrl
                };
                clerkInstance.mountUserButton(clerkUserBtn);
                clerkSignBtn.classList.add("hidden");
            } else {
                currentUser = null;
                clerkUserBtn.innerHTML = "";
                clerkSignBtn.classList.remove("hidden");
                
                clerkSignBtn.querySelector("button").addEventListener("click", () => {
                    clerkInstance.openSignIn();
                });
                
                // Handle checkout page login trigger
                const checkoutLoginTrigger = document.getElementById("checkout-login-trigger");
                if (checkoutLoginTrigger) {
                    checkoutLoginTrigger.addEventListener("click", () => {
                        clerkInstance.openSignIn();
                    });
                }
            }

            // Sync checkout view if route is active
            if (window.location.hash === "#checkout") {
                renderCheckoutPage();
            }

        } catch (err) {
            console.warn("Clerk initialization failed or key was invalid. Activating premium Fallback Auth Simulation.", err);
            activateMockAuth();
        }
    } else {
        console.warn("Clerk JS SDK not loaded. Activating fallback mock auth.");
        activateMockAuth();
    }
}

// Fallback Mock Authentication UI Controls
function activateMockAuth() {
    document.getElementById("auth-loading-spinner").classList.add("hidden");
    const fallbackUi = document.getElementById("fallback-auth-ui");
    const fallbackLoginBtn = document.getElementById("fallback-login-btn");
    const fallbackUserMenu = document.getElementById("fallback-user-menu");
    const fallbackAvatar = document.getElementById("fallback-avatar");
    const fallbackUsername = document.getElementById("fallback-username");
    const fallbackLogout = document.getElementById("fallback-logout-btn");
    const checkoutLoginTrigger = document.getElementById("checkout-login-trigger");

    fallbackUi.classList.remove("hidden");

    function loginMock() {
        isMockLoggedIn = true;
        currentUser = {
            name: "Girish Kumar",
            email: "girish@domain.com",
            avatar: "https://picsum.photos/100/100?random=50"
        };

        fallbackLoginBtn.classList.add("hidden");
        fallbackUserMenu.classList.remove("hidden");
        fallbackAvatar.src = currentUser.avatar;
        fallbackUsername.textContent = currentUser.name;

        // Unlock checkout page if active
        if (window.location.hash === "#checkout") {
            renderCheckoutPage();
        }
    }

    function logoutMock() {
        isMockLoggedIn = false;
        currentUser = null;
        fallbackLoginBtn.classList.remove("hidden");
        fallbackUserMenu.classList.add("hidden");

        // Lock checkout page if active
        if (window.location.hash === "#checkout") {
            renderCheckoutPage();
        }
    }

    fallbackLoginBtn.addEventListener("click", loginMock);
    fallbackLogout.addEventListener("click", logoutMock);
    
    if (checkoutLoginTrigger) {
        checkoutLoginTrigger.addEventListener("click", loginMock);
    }
}

// Check if user is authenticated (Either via Clerk or Mock fallback)
function isAuthenticated() {
    if (isClerkActive && clerkInstance) {
        return clerkInstance.user !== null;
    }
    return isMockLoggedIn;
}

// 6. Cart Manager (Add, Quantity update, Remove, Persist in LocalStorage)
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("taizone-cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartNavbarBadge();
}

function saveCartToLocalStorage() {
    localStorage.setItem("taizone-cart", JSON.stringify(cart));
    updateCartNavbarBadge();
}

function updateCartNavbarBadge() {
    const badge = document.getElementById("cart-count");
    if (!badge) return;
    
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function addToCart(productId, quantity = 1) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += quantity;
    } else {
        const prod = productsData.find(p => p.id === productId);
        if (prod) {
            cart.push({
                id: productId,
                title: prod.title,
                price: prod.price,
                image: prod.image,
                qty: quantity
            });
        }
    }
    saveCartToLocalStorage();
    
    // Visual pop animation on cart badge trigger
    const cartTrigger = document.getElementById("cart-badge-trigger");
    cartTrigger.style.transform = "scale(1.25)";
    setTimeout(() => {
        cartTrigger.style.transform = "scale(1)";
    }, 150);
}

function updateCartQuantity(productId, newQty) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty = parseInt(newQty);
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    saveCartToLocalStorage();
    renderCartPage();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    renderCartPage();
}

function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = subtotal > 150.00 || subtotal === 0 ? 0.00 : 15.00;
    const tax = subtotal * 0.18; // 18% GST/tax
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
}

// 7. Dynamic Rendering Functions

// A. Renders 4 Featured products on Landing Home View
function renderFeaturedProducts() {
    const container = document.getElementById("featured-products-grid");
    if (!container) return;

    // Take first 4 items as featured
    const featured = productsData.slice(0, 4);

    container.innerHTML = featured.map(p => `
        <div class="product-card">
            <div class="prod-image-wrap">
                <a href="#product-detail?id=${p.id}">
                    <img src="${p.image}" alt="${p.title}" class="prod-image" loading="lazy">
                </a>
                <span class="prod-category-badge">${p.category}</span>
            </div>
            <div class="prod-info">
                <h3><a href="#product-detail?id=${p.id}" class="prod-title-link">${p.title}</a></h3>
                <div class="prod-rating">
                    <span class="material-symbols-rounded font-size-s">star</span>
                    <span>${p.rating}</span>
                    <span class="rating-count">(${p.reviews})</span>
                </div>
                <div class="prod-footer">
                    <span class="prod-price">$${p.price.toFixed(2)}</span>
                    <button class="add-cart-icon-btn" onclick="triggerAddToCart('${p.id}')" title="Add to Cart">
                        <span class="material-symbols-rounded">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// Global addToCart helper to wire to onclick attributes in template strings
window.triggerAddToCart = function(id, qty = 1) {
    addToCart(id, qty);
};

// B. Renders 12+ products on Product Listing View (with filters/sorting)
function renderAllProducts() {
    const container = document.getElementById("all-products-grid");
    if (!container) return;

    const catFilter = document.querySelector('input[name="category-filter"]:checked')?.value || "all";
    const searchQuery = document.getElementById("global-search").value.trim().toLowerCase();
    const priceMin = parseFloat(document.getElementById("price-min").value) || 0;
    const priceMax = parseFloat(document.getElementById("price-max").value) || Infinity;
    const sortVal = document.getElementById("sort-select").value;

    // 1. Filter
    let filtered = productsData.filter(p => {
        const matchesCategory = catFilter === "all" || p.category === catFilter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery) || p.brand.toLowerCase().includes(searchQuery);
        const matchesPrice = p.price >= priceMin && p.price <= priceMax;
        
        return matchesCategory && matchesSearch && matchesPrice;
    });

    // 2. Sort
    if (sortVal === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // 3. Count label
    document.getElementById("results-count").textContent = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results-state">No products match your filter parameters.</div>`;
        return;
    }

    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="prod-image-wrap">
                <a href="#product-detail?id=${p.id}">
                    <img src="${p.image}" alt="${p.title}" class="prod-image" loading="lazy">
                </a>
                <span class="prod-category-badge">${p.category}</span>
            </div>
            <div class="prod-info">
                <h3><a href="#product-detail?id=${p.id}" class="prod-title-link">${p.title}</a></h3>
                <div class="prod-rating">
                    <span class="material-symbols-rounded font-size-s">star</span>
                    <span>${p.rating}</span>
                    <span class="rating-count">(${p.reviews})</span>
                </div>
                <div class="prod-footer">
                    <span class="prod-price">$${p.price.toFixed(2)}</span>
                    <button class="add-cart-icon-btn" onclick="triggerAddToCart('${p.id}')" title="Add to Cart">
                        <span class="material-symbols-rounded">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// C. Renders single product detailed specifications and buy button
function renderProductDetail(id) {
    const container = document.getElementById("product-detail-container");
    if (!container) return;

    const p = productsData.find(item => item.id === id);
    if (!p) {
        container.innerHTML = `<div class="error-detail-state">Product not found. <a href="#products">Return to Browse</a></div>`;
        return;
    }

    const specsRows = Object.entries(p.specs).map(([lbl, val]) => `
        <div class="specs-row">
            <span class="spec-lbl">${lbl}</span>
            <span class="spec-val">${val}</span>
        </div>
    `).join("");

    container.innerHTML = `
        <div class="detail-visual">
            <div class="main-detail-img-wrap">
                <img src="${p.image}" alt="${p.title}">
            </div>
        </div>
        
        <div class="detail-info">
            <span class="detail-brand">${p.brand}</span>
            <h1>${p.title}</h1>
            <div class="prod-rating">
                <span class="material-symbols-rounded">star</span>
                <span>${p.rating} • <strong>${p.reviews} Verified Reviews</strong></span>
            </div>
            <div class="detail-price">$${p.price.toFixed(2)}</div>
            <p class="detail-desc">${p.desc}</p>
            
            <div class="detail-actions-row">
                <div class="qty-selector">
                    <button class="qty-btn" id="qty-decrement-btn">-</button>
                    <input type="number" class="qty-input" id="detail-qty-input" value="1" min="1" max="10" readonly>
                    <button class="qty-btn" id="qty-increment-btn">+</button>
                </div>
                
                <button class="btn btn-primary" id="detail-add-cart-btn">
                    <span>Add to Cart</span>
                    <span class="material-symbols-rounded">add_shopping_cart</span>
                </button>
            </div>

            <div class="detail-specs-table">
                <h3>Technical Details</h3>
                ${specsRows}
            </div>
        </div>
    `;

    // Add local quantity counter listeners
    const qtyInput = document.getElementById("detail-qty-input");
    document.getElementById("qty-decrement-btn").addEventListener("click", () => {
        let val = parseInt(qtyInput.value);
        if (val > 1) qtyInput.value = val - 1;
    });

    document.getElementById("qty-increment-btn").addEventListener("click", () => {
        let val = parseInt(qtyInput.value);
        if (val < 10) qtyInput.value = val + 1;
    });

    document.getElementById("detail-add-cart-btn").addEventListener("click", () => {
        const qty = parseInt(qtyInput.value);
        addToCart(p.id, qty);
        
        // Change button to visual success check temporarily
        const addBtn = document.getElementById("detail-add-cart-btn");
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = `<span>ADDED</span><span class="material-symbols-rounded">done</span>`;
        addBtn.style.background = "linear-gradient(135deg, #00e676, #00b0ff)";
        
        setTimeout(() => {
            addBtn.innerHTML = originalText;
            addBtn.style.background = "";
        }, 1500);
    });
}

// D. Renders Cart View listing
function renderCartPage() {
    const container = document.getElementById("cart-content-layout");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <span class="material-symbols-rounded">shopping_cart_off</span>
                <h3>YOUR CART IS EMPTY</h3>
                <p>Looks like you haven't added any products to your cart yet.</p>
                <a href="#products" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    const itemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img-wrap">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>Quantity: ${item.qty} • $${item.price.toFixed(2)} each</p>
            </div>
            
            <div class="qty-selector">
                <button class="qty-btn" onclick="adjustItemQuantity('${item.id}', -1)">-</button>
                <span class="qty-input" style="padding-top:8px">${item.qty}</span>
                <button class="qty-btn" onclick="adjustItemQuantity('${item.id}', 1)">+</button>
            </div>

            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>

            <button class="remove-cart-item-btn" onclick="triggerRemoveCartItem('${item.id}')" title="Remove Item">
                <span class="material-symbols-rounded">delete</span>
            </button>
        </div>
    `).join("");

    const totals = getCartTotals();

    container.innerHTML = `
        <div class="cart-items-list">
            ${itemsHTML}
        </div>
        
        <aside class="cart-summary-card">
            <h3>ORDER SUMMARY</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${totals.subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Estimated Tax (18%)</span>
                <span>$${totals.tax.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Estimated Shipping</span>
                <span>${totals.shipping === 0 ? 'FREE' : '$' + totals.shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row total-row">
                <span>Total</span>
                <span>$${totals.total.toFixed(2)}</span>
            </div>
            
            <a href="#checkout" class="btn btn-primary btn-block checkout-action-btn">
                <span>PROCEED TO CHECKOUT</span>
                <span class="material-symbols-rounded">payments</span>
            </a>
        </aside>
    `;
}

// Global Quantity increment/decrement buttons in Cart view
window.adjustItemQuantity = function(id, amount) {
    const item = cart.find(i => i.id === id);
    if (item) {
        updateCartQuantity(id, item.qty + amount);
    }
};

window.triggerRemoveCartItem = function(id) {
    removeFromCart(id);
};

// E. Renders Checkout Screen (Validates auth and displays shipping details)
function renderCheckoutPage() {
    const lockScreen = document.getElementById("checkout-lock-screen");
    const unlockedLayout = document.getElementById("checkout-unlocked-layout");
    const successState = document.getElementById("checkout-success-state");

    // Clear success view
    successState.classList.add("hidden");

    if (!isAuthenticated()) {
        lockScreen.classList.remove("hidden");
        unlockedLayout.classList.add("hidden");
        return;
    }

    lockScreen.classList.add("hidden");
    unlockedLayout.classList.remove("hidden");

    // Populate checkout item list
    const itemsContainer = document.getElementById("checkout-summary-items");
    itemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-summary-item">
            <span class="item-title">${item.title}</span>
            <span class="item-qty">x${item.qty}</span>
            <span class="item-price">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join("");

    // Populate pricing
    const totals = getCartTotals();
    const totalsContainer = document.getElementById("checkout-summary-totals");
    totalsContainer.innerHTML = `
        <div class="summary-row">
            <span>Subtotal</span>
            <span>$${totals.subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Estimated Shipping</span>
            <span>${totals.shipping === 0 ? 'FREE' : '$' + totals.shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>GST/Tax (18%)</span>
            <span>$${totals.tax.toFixed(2)}</span>
        </div>
        <div class="summary-row total-row" style="margin-top: 12px; border-top:1px solid var(--border-color); padding-top:12px">
            <span>Grand Total</span>
            <span>$${totals.total.toFixed(2)}</span>
        </div>
    `;

    // Autofill name and email if user is authenticated
    if (currentUser) {
        document.getElementById("shipping-name").value = currentUser.name;
        document.getElementById("shipping-email").value = currentUser.email;
    }
}

// 8. Sorting, filters and Search listeners on product catalog
function setupSortingAndFilters() {
    const filters = document.querySelectorAll('input[name="category-filter"]');
    filters.forEach(radio => {
        radio.addEventListener("change", renderAllProducts);
    });

    const minPrice = document.getElementById("price-min");
    const maxPrice = document.getElementById("price-max");
    minPrice.addEventListener("input", renderAllProducts);
    maxPrice.addEventListener("input", renderAllProducts);

    const sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", renderAllProducts);

    const searchInput = document.getElementById("global-search");
    searchInput.addEventListener("input", () => {
        // Switch to browse view if not already active to show search results
        if (window.location.hash !== "#products") {
            window.location.hash = "#products";
        }
        renderAllProducts();
    });
}

function setupCartActions() {
    // Dynamic global action bindings (handled inline in render HTML to avoid mismatching list events)
}

// 9. Checkout Form Submission & Billing authorization
function setupCheckoutForm() {
    const form = document.getElementById("checkout-shipping-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Clear errors
        document.querySelectorAll(".checkout-form .error-msg").forEach(span => span.textContent = "");

        const name = document.getElementById("shipping-name").value.trim();
        const email = document.getElementById("shipping-email").value.trim();
        const address = document.getElementById("shipping-address").value.trim();
        const city = document.getElementById("shipping-city").value.trim();
        const zip = document.getElementById("shipping-zip").value.trim();

        let isValid = true;

        if (name.length < 3) {
            document.getElementById("name-error").textContent = "Full name must be at least 3 characters.";
            isValid = false;
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (address.length < 5) {
            document.getElementById("address-error").textContent = "Please enter a complete street address.";
            isValid = false;
        }

        if (city.length < 2) {
            document.getElementById("city-error").textContent = "Please enter a valid city.";
            isValid = false;
        }

        if (zip.length < 4) {
            document.getElementById("zip-error").textContent = "ZIP/Postal code must be at least 4 digits.";
            isValid = false;
        }

        if (isValid) {
            // Generate Mock Invoice
            const totals = getCartTotals();
            document.getElementById("invoice-client").textContent = name;
            document.getElementById("invoice-total").textContent = `$${totals.total.toFixed(2)}`;
            
            const randomRef = Math.floor(100000 + Math.random() * 900000);
            document.getElementById("invoice-ref").textContent = `TAIZONE-${randomRef}-G`;

            // Hide form layout, show invoice success view
            document.getElementById("checkout-unlocked-layout").classList.add("hidden");
            document.getElementById("checkout-success-state").classList.remove("hidden");

            // Empty cart after successful order authorization
            cart = [];
            saveCartToLocalStorage();
        }
    });
}
