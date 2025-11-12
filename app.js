// Trade Table Enhanced App JavaScript (optimized)

(function(){
'use strict';
// Trade Table Enhanced App JavaScript

class TradeTableApp {
    constructor() {
        this.currentUser = 'current_user';
        this.currentView = 'feed';
        this.userLocation = null;
        this.selectedRadius = 2; // Default 2km
        this.selectedItem = null;
        this.savedItems = new Set();
        
        
        this.addItemImages = [];
        this.isAdmin = false;
// Data from application_data_json
        this.communityItems = [];
        this.retailItems = [];
        this.businesses = [];
        this.categories = [];
        this.conditions = [];
        this.sortOptions = [];
        this.retailSortOptions = [];
        
        
        this._loadSavedItems && this._loadSavedItems();
this.loadAppData();
        this.init();
    
        try {
            const m = location.hash && location.hash.match(/^#item-(\d+)/);
            if (m) this.showItemDetail(parseInt(m[1],10));
        } catch(e) {}
    }
    
    loadAppData() {
        // Load data from the provided JSON
        const appData = {
            "communityItems": [
                {
                    "id": 1,
                    "title": "MacBook Pro Charger - 61W USB-C",
                    "description": "Original Apple 61W USB-C power adapter. Works perfectly, comes with cable. Perfect for MacBook Pro 13-inch.",
                    "category": "Electronics & Gadgets",
                    "condition": "Very Good",
                    "location": "Computer Science Building",
                    "address": "CS Building, Room 204",
                    "coordinates": {"lat": 40.7829, "lng": -73.9654},
                    "distance": 0.2,
                    "postedDate": "2025-09-24T14:30:00Z",
                    "userId": "user1",
                    "userName": "Alex Chen",
                    "userAvatar": "AC",
                    "userRating": 4.8,
                    "views": 45,
                    "saved": false,
                    "status": "active",
                    "type": "community",
                    "images": [
                        "https://images.unsplash.com/photo-1615526753224-7da539054580?w=400&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1611532736444-8117b7c0fec6?w=400&h=300&fit=crop"
                    ]
                },
                {
                    "id": 2,
                    "title": "Organic Chemistry Textbook + Solution Manual",
                    "description": "Complete set with textbook and solutions manual. Some highlighting but all pages intact. Saved me $200!",
                    "category": "Books & Textbooks", 
                    "condition": "Good",
                    "location": "Chemistry Lab Building",
                    "address": "Chem Lab, Floor 3 Lounge",
                    "coordinates": {"lat": 40.7831, "lng": -73.9648},
                    "distance": 0.1,
                    "postedDate": "2025-09-23T09:15:00Z",
                    "userId": "user2",
                    "userName": "Sarah Kim",
                    "userAvatar": "SK",
                    "userRating": 4.9,
                    "views": 78,
                    "saved": true,
                    "status": "active",
                    "type": "community",
                    "images": [
                        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
                    ]
                },
                {
                    "id": 3,
                    "title": "IKEA Desk Chair - Adjustable Height",
                    "description": "Black office chair in great condition. Very comfortable for long study sessions. Just graduating!",
                    "category": "Furniture & Decor",
                    "condition": "Good", 
                    "location": "Student Apartments Block B",
                    "address": "Apt B-312, Student Housing",
                    "coordinates": {"lat": 40.7825, "lng": -73.9662},
                    "distance": 1.2,
                    "postedDate": "2025-09-22T18:45:00Z",
                    "userId": "user3",
                    "userName": "Mike Rodriguez",
                    "userAvatar": "MR",
                    "userRating": 4.7,
                    "views": 32,
                    "saved": false,
                    "status": "active",
                    "type": "community",
                    "images": [
                        "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop"
                    ]
                },
                {
                    "id": 4,
                    "title": "Winter Coat - Columbia Women's M",
                    "description": "Warm winter coat, size medium. Navy blue, barely worn. Perfect for upcoming winter semester.",
                    "category": "Clothing & Accessories",
                    "condition": "Like New",
                    "location": "Student Center",
                    "address": "Student Center, Main Lobby",
                    "coordinates": {"lat": 40.7833, "lng": -73.9645},
                    "distance": 0.3,
                    "postedDate": "2025-09-21T12:20:00Z",
                    "userId": "user4",
                    "userName": "Emma Thompson",
                    "userAvatar": "ET",
                    "userRating": 5.0,
                    "views": 56,
                    "saved": false,
                    "status": "active",
                    "type": "community",
                    "images": [
                        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                    ]
                },
                {
                    "id": 5,
                    "title": "Graphing Calculator TI-84 Plus",
                    "description": "Essential for calculus and statistics courses. All functions working perfectly. Includes manual and case.",
                    "category": "Study Materials",
                    "condition": "Good",
                    "location": "Mathematics Building",
                    "address": "Math Bldg, Room 150",
                    "coordinates": {"lat": 40.7827, "lng": -73.9651},
                    "distance": 0.4,
                    "postedDate": "2025-09-20T16:00:00Z",
                    "userId": "user5",
                    "userName": "David Park",
                    "userAvatar": "DP",
                    "userRating": 4.6,
                    "views": 89,
                    "saved": true,
                    "status": "active",
                    "type": "community",
                    "images": [
                        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
                    ]
                }
            ],
            "retailItems": [
                {
                    "id": 101,
                    "title": "Wireless Bluetooth Headphones - Sony WH-1000XM4",
                    "description": "Brand new, unopened Sony WH-1000XM4 headphones. Excess inventory from holiday season. Industry-leading noise canceling.",
                    "category": "Electronics & Gadgets",
                    "condition": "Like New",
                    "location": "TechWorld Store",
                    "address": "Broadway & 116th St",
                    "coordinates": {"lat": 40.7851, "lng": -73.9641},
                    "distance": 2.1,
                    "postedDate": "2025-09-24T10:00:00Z",
                    "businessId": "business1",
                    "businessName": "TechWorld Electronics",
                    "businessAvatar": "TW",
                    "businessRating": 4.6,
                    "businessVerified": true,
                    "originalPrice": 349.99,
                    "discountedPrice": 199.99,
                    "discountPercentage": 43,
                    "views": 156,
                    "saved": false,
                    "status": "active",
                    "type": "retail",
                    "images": [
                        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
                        "https://images.unsplash.com/photo-1484704324500-b23545449e8e?w=400&h=300&fit=crop"
                    ],
                    "businessHours": "Mon-Sat 9AM-8PM, Sun 11AM-6PM",
                    "businessPhone": "(212) 555-0123"
                },
                {
                    "id": 102,
                    "title": "Student Backpacks - Various Brands",
                    "description": "End-of-season backpack clearance. Multiple brands and colors available. Perfect for students. Some minor display wear.",
                    "category": "Clothing & Accessories",
                    "condition": "Very Good",
                    "location": "Campus Bookstore",
                    "address": "Student Center, Lower Level",
                    "coordinates": {"lat": 40.7833, "lng": -73.9645},
                    "distance": 0.3,
                    "postedDate": "2025-09-23T14:30:00Z",
                    "businessId": "business2",
                    "businessName": "Columbia Bookstore",
                    "businessAvatar": "CB",
                    "businessRating": 4.2,
                    "businessVerified": true,
                    "originalPrice": 89.99,
                    "discountedPrice": 29.99,
                    "discountPercentage": 67,
                    "views": 203,
                    "saved": true,
                    "status": "active",
                    "type": "retail",
                    "images": [
                        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
                    ],
                    "businessHours": "Mon-Fri 8AM-7PM, Sat-Sun 10AM-5PM",
                    "businessPhone": "(212) 555-0456"
                },
                {
                    "id": 103,
                    "title": "Coffee Machine - Keurig K-Elite",
                    "description": "Display model coffee makers. Fully functional, cleaned and sanitized. Minor cosmetic scratches on base.",
                    "category": "Kitchen & Household",
                    "condition": "Good",
                    "location": "Kitchen Essentials",
                    "address": "Amsterdam Ave & 110th St",
                    "coordinates": {"lat": 40.7891, "lng": -73.9598},
                    "distance": 4.8,
                    "postedDate": "2025-09-22T11:15:00Z",
                    "businessId": "business3",
                    "businessName": "Kitchen Essentials Plus",
                    "businessAvatar": "KE",
                    "businessRating": 4.4,
                    "businessVerified": true,
                    "originalPrice": 179.99,
                    "discountedPrice": 89.99,
                    "discountPercentage": 50,
                    "views": 87,
                    "saved": false,
                    "status": "active",
                    "type": "retail",
                    "images": [
                        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop"
                    ],
                    "businessHours": "Mon-Sat 9AM-7PM, Sun 12PM-5PM",
                    "businessPhone": "(212) 555-0789"
                },
                {
                    "id": 104,
                    "title": "Desk Lamps - LED Adjustable",
                    "description": "Overstock LED desk lamps with adjustable arms. Energy efficient, multiple brightness settings. Perfect for study rooms.",
                    "category": "Furniture & Decor",
                    "condition": "Like New",
                    "location": "Dorm Essentials",
                    "address": "Broadway & 114th St",
                    "coordinates": {"lat": 40.7845, "lng": -73.9643},
                    "distance": 1.8,
                    "postedDate": "2025-09-21T16:45:00Z",
                    "businessId": "business4",
                    "businessName": "Dorm Essentials Co",
                    "businessAvatar": "DE",
                    "businessRating": 4.8,
                    "businessVerified": true,
                    "originalPrice": 59.99,
                    "discountedPrice": 24.99,
                    "discountPercentage": 58,
                    "views": 124,
                    "saved": false,
                    "status": "active",
                    "type": "retail",
                    "images": [
                        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop"
                    ],
                    "businessHours": "Daily 8AM-9PM",
                    "businessPhone": "(212) 555-0321"
                }
            ],
            "categories": [
                {"name": "All Categories", "icon": "🏷️", "count": 9},
                {"name": "Books & Textbooks", "icon": "📚", "count": 1},
                {"name": "Electronics & Gadgets", "icon": "📱", "count": 2},
                {"name": "Furniture & Decor", "icon": "🪑", "count": 2},
                {"name": "Clothing & Accessories", "icon": "👕", "count": 2},
                {"name": "Sports & Recreation", "icon": "⚽", "count": 0},
                {"name": "Study Materials", "icon": "📝", "count": 1},
                {"name": "Kitchen & Household", "icon": "🍽️", "count": 1},
                {"name": "Others", "icon": "📦", "count": 0}
            ],
            "conditions": [
                {"value": "Like New", "color": "#10b981", "icon": "✨", "score": 4},
                {"value": "Very Good", "color": "#3b82f6", "icon": "👍", "score": 3},
                {"value": "Good", "color": "#f59e0b", "icon": "👌", "score": 2},
                {"value": "Fair", "color": "#ef4444", "icon": "⚠️", "score": 1}
            ]
        };
        
        this.communityItems = appData.communityItems;
        this.retailItems = appData.retailItems;
        this.categories = appData.categories;
        this.conditions = appData.conditions;
        
        // Initialize saved items from data
        this.communityItems.concat(this.retailItems).forEach(item => {
            if (item.saved) {
                this.savedItems.add(item.id);
            }
        });
        
        // Default user location (Columbia University)
        this.userLocation = {
            lat: 40.7831,
            lng: -73.9648,
            address: "Columbia University, NYC"
        };
    }
    
    init() {
        this.setupEventListeners();
        
        this._maybeRestoreAdmin && this._maybeRestoreAdmin();
this.populateDropdowns();
        this.updateLocationDisplay();
        this.renderCurrentView();
    }
    
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.closest('.nav-btn').dataset.view;
                this.showView(view);
            });
        });
        
        // Location controls
        document.getElementById('location-btn').addEventListener('click', () => {
            this.requestLocation();
        });
        
        document.getElementById('radius-selector').addEventListener('change', (e) => {
            this.selectedRadius = parseFloat(e.target.value);
            this.updateDistances();
            this.renderCurrentView();
        });
        
        // Community feed controls
        document.getElementById('search-input').addEventListener('input', () => this.renderFeed());
        document.getElementById('category-filter').addEventListener('change', () => this.renderFeed());
        document.getElementById('condition-filter').addEventListener('change', () => this.renderFeed());
        document.getElementById('sort-filter').addEventListener('change', () => this.renderFeed());
        
        // Retail feed controls
        document.getElementById('retail-search-input').addEventListener('input', () => this.renderRetailers());
        document.getElementById('retail-category-filter').addEventListener('change', () => this.renderRetailers());
        document.getElementById('retail-condition-filter').addEventListener('change', () => this.renderRetailers());
        document.getElementById('retail-sort-filter').addEventListener('change', () => this.renderRetailers());
        
        // Business registration
        document.getElementById('register-business-btn').addEventListener('click', () => {
            this.showModal('business-registration-modal');
        });
        
        // Add item form
        document.getElementById('add-item-form').addEventListener('submit', (e) => this.handleAddItem(e));
        document.getElementById('cancel-add').addEventListener('click', () => this.showView('feed'));
        
        
        // Image uploads (Add Item)
        const imgInput = document.getElementById('item-images');
        if (imgInput) {
            imgInput.addEventListener('change', (e) => this.handleImageSelect(e));
        }
        
        // Admin nav
        const adminNav = document.querySelector('[data-view="admin"]');
        if (adminNav) {
            adminNav.addEventListener('click', () => {
                if (!this.isAdmin) {
                    const pass = prompt('Ange adminlösenord:');
                    if (pass === 'tredtable-admin') {
                        this.isAdmin = true;
                        try { localStorage.setItem('tt_is_admin','1'); } catch(e){}
                        this.showMessage('Inloggad som admin', 'success');
                    } else {
                        this.showMessage('Fel lösenord', 'error');
                        return;
                    }
                }
                this.showView('admin');
            });
        }
// Modal controls
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__backdrop') || 
                    e.target.classList.contains('modal__close') ||
                    e.target.classList.contains('modal-close')) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Item detail modal actions
        document.getElementById('save-item-btn').addEventListener('click', () => this.toggleSaveItem());
        document.getElementById('contact-btn').addEventListener('click', () => this.contactSeller());
        document.getElementById('mark-taken-btn').addEventListener('click', () => this.markItemAsTaken());
        
        // Location permission modal
        document.getElementById('enable-location-btn').addEventListener('click', () => {
            this.closeModal('location-permission-modal');
            this.enableLocation();
        });
    }
    
    populateDropdowns() {
        // Community feed dropdowns
        const categoryFilter = document.getElementById('category-filter');
        const conditionFilter = document.getElementById('condition-filter');
        const itemCategory = document.getElementById('item-category');
        const itemCondition = document.getElementById('item-condition');
        
        // Retail feed dropdowns
        const retailCategoryFilter = document.getElementById('retail-category-filter');
        const retailConditionFilter = document.getElementById('retail-condition-filter');
        
        // Categories
        this.categories.forEach(category => {
            if (category.name !== 'All Categories') {
                [categoryFilter, retailCategoryFilter, itemCategory].forEach(select => {
                    const option = document.createElement('option');
                    option.value = category.name;
                    option.textContent = category.name;
                    select.appendChild(option);
                });
            }
        });
        
        // Conditions
        this.conditions.forEach(condition => {
            [conditionFilter, retailConditionFilter, itemCondition].forEach(select => {
                const option = document.createElement('option');
                option.value = condition.value;
                option.textContent = condition.value;
                select.appendChild(option);
            });
        });
    }
    
    showView(viewName) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const navBtn = document.querySelector(`[data-view="${viewName}"]`);
        if (navBtn) navBtn.classList.add('active');
        
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) targetView.classList.add('active');
        
        this.currentView = viewName;
        
        if (viewName === 'admin') {
            if (!this.isAdmin) return;
            this.populateAdminDropdowns && this.populateAdminDropdowns();
            this.renderAdmin && this.renderAdmin();
            this.bindAdminControls && this.bindAdminControls();
            return;
        }
        this.renderCurrentView();
    }
    
    renderCurrentView() {
        switch(this.currentView) {
            case 'feed':
                this.renderFeed();
                break;
            case 'retailers':
                this.renderRetailers();
                break;
            case 'saved':
                this.renderSaved();
                break;
            case 'profile':
                this.renderProfile();
                break;
            case 'add-item':
                this.resetAddForm();
                break;
        }
    }
    
    renderFeed() {
        const grid = document.getElementById('items-grid');
        const noItems = document.getElementById('no-items');
        
        let filteredItems = this.getFilteredItems(this.communityItems, 'community');
        
        if (filteredItems.length === 0) {
            grid.innerHTML = '';
            noItems.classList.remove('hidden');
            return;
        }
        
        noItems.classList.add('hidden');
        grid.innerHTML = filteredItems.map(item => this.createItemCard(item)).join('');
        this.addItemCardListeners();
    }
    
    renderRetailers() {
        const grid = document.getElementById('retail-items-grid');
        const noItems = document.getElementById('no-retail-items');
        
        let filteredItems = this.getFilteredItems(this.retailItems, 'retail');
        
        if (filteredItems.length === 0) {
            grid.innerHTML = '';
            noItems.classList.remove('hidden');
            return;
        }
        
        noItems.classList.add('hidden');
        grid.innerHTML = filteredItems.map(item => this.createItemCard(item)).join('');
        this.addItemCardListeners();
    }
    
    renderSaved() {
        const grid = document.getElementById('saved-items-grid');
        const noItems = document.getElementById('no-saved-items');
        
        const savedItems = this.communityItems.concat(this.retailItems)
            .filter(item => this.savedItems.has(item.id));
        
        if (savedItems.length === 0) {
            grid.innerHTML = '';
            noItems.classList.remove('hidden');
            return;
        }
        
        noItems.classList.add('hidden');
        grid.innerHTML = savedItems.map(item => this.createItemCard(item)).join('');
        this.addItemCardListeners();
    }
    
    renderProfile() {
        const container = document.getElementById('my-items-list');
        const noItems = document.getElementById('no-my-items');
        
        const myItems = this.communityItems.filter(item => item.userId === this.currentUser);
        
        if (myItems.length === 0) {
            container.innerHTML = '';
            noItems.classList.remove('hidden');
            return;
        }
        
        noItems.classList.add('hidden');
        container.innerHTML = myItems.map(item => this.createMyItemCard(item)).join('');
        
        // Add delete listeners
        document.querySelectorAll('.delete-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.my-item-card').dataset.itemId);
                this.deleteItem(itemId);
            });
        });
    }
    
    getFilteredItems(items, type) {
        let filtered = [...items];
        
        // Get appropriate filter elements based on type
        const searchInput = type === 'retail' ? 
            document.getElementById('retail-search-input') : 
            document.getElementById('search-input');
        const categoryFilter = type === 'retail' ? 
            document.getElementById('retail-category-filter') : 
            document.getElementById('category-filter');
        const conditionFilter = type === 'retail' ? 
            document.getElementById('retail-condition-filter') : 
            document.getElementById('condition-filter');
        const sortFilter = type === 'retail' ? 
            document.getElementById('retail-sort-filter') : 
            document.getElementById('sort-filter');
        
        // Search filter
        const searchTerm = searchInput?.value?.toLowerCase() || '';
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }
        
        // Category filter
        const selectedCategory = categoryFilter?.value || '';
        if (selectedCategory) {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }
        
        // Condition filter
        const selectedCondition = conditionFilter?.value || '';
        if (selectedCondition) {
            filtered = filtered.filter(item => item.condition === selectedCondition);
        }
        
        // Radius filter
        if (this.selectedRadius < 1000 && this.userLocation) {
            filtered = filtered.filter(item => 
                this.calculateDistance(this.userLocation, item.coordinates) <= this.selectedRadius
            );
        }
        
        // Sort
        const sortBy = sortFilter?.value || 'latest';
        this.sortItems(filtered, sortBy);
        
        return filtered;
    }
    
    sortItems(items, sortBy) {
        switch(sortBy) {
            case 'latest':
                items.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                break;
            case 'oldest':
                items.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
                break;
            case 'popular':
                items.sort((a, b) => b.views - a.views);
                break;
            case 'nearest':
                if (this.userLocation) {
                    items.sort((a, b) => 
                        this.calculateDistance(this.userLocation, a.coordinates) - 
                        this.calculateDistance(this.userLocation, b.coordinates)
                    );
                }
                break;
            case 'condition_best':
                items.sort((a, b) => this.getConditionScore(b.condition) - this.getConditionScore(a.condition));
                break;
            case 'condition_worst':
                items.sort((a, b) => this.getConditionScore(a.condition) - this.getConditionScore(b.condition));
                break;
            case 'most_saved':
                items.sort((a, b) => (b.saved ? 1 : 0) - (a.saved ? 1 : 0));
                break;
            case 'biggest_discount':
                items.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
                break;
            case 'lowest_price':
                items.sort((a, b) => (a.discountedPrice || 0) - (b.discountedPrice || 0));
                break;
            case 'store_rating':
                items.sort((a, b) => (b.businessRating || 0) - (a.businessRating || 0));
                break;
        }
    }
    
    getConditionScore(condition) {
        const conditionObj = this.conditions.find(c => c.value === condition);
        return conditionObj ? conditionObj.score : 0;
    }
    
    createItemCard(item) {
        const distance = this.userLocation ? 
            this.calculateDistance(this.userLocation, item.coordinates) : item.distance;
        const isSaved = this.savedItems.has(item.id);
        
        const imageHtml = item.images && item.images.length > 0 ? 
            `<img src="${item.images[0]}" alt="${item.title}">` : 
            `<i class="fas fa-image"></i><span>No Image</span>`;
        
        const conditionClass = item.condition.toLowerCase().replace(' ', '-');
        
        let cardContent = `
            <div class="item-card" data-item-id="${item.id}">
                <div class="item-card__image">
                    ${imageHtml}
                    <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); window.app.toggleSaveItem(${item.id})">
                        <i class="fas fa-heart"></i>
                    </button>`;
        
        if (item.type === 'retail' && item.discountPercentage) {
            cardContent += `<div class="discount-badge">${item.discountPercentage}% OFF</div>`;
        }
        
        cardContent += `</div>
                <div class="item-card__content">
                    <h3 class="item-card__title">${item.title}</h3>
                    <p class="item-card__description">${item.description}</p>`;
        
        if (item.type === 'retail') {
            cardContent += `
                    <div class="item-pricing">
                        <div class="price-comparison">
                            <span class="original-price">$${item.originalPrice}</span>
                            <span class="discounted-price">$${item.discountedPrice}</span>
                        </div>
                    </div>
                    <div class="item-business">
                        <div class="business-avatar">${item.businessAvatar}</div>
                        <span class="business-name">${item.businessName}</span>
                        ${item.businessVerified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
                    </div>`;
        } else {
            cardContent += `
                    <div class="item-user">
                        <div class="user-avatar">${item.userAvatar}</div>
                        <span>${item.userName} (${item.userRating}★)</span>
                    </div>`;
        }
        
        cardContent += `
                    <div class="item-card__meta">
                        <span class="item-category">${item.category}</span>
                        <span class="condition-badge ${conditionClass}">${item.condition}</span>
                    </div>
                    <div class="item-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${item.location}</span>
                    </div>
                    <div class="distance-badge">
                        <i class="fas fa-location-arrow"></i>
                        ${distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`}
                    </div>
                </div>
            </div>`;
        
        return cardContent;
    }
    
    createMyItemCard(item) {
        const imageHtml = item.images && item.images.length > 0 ? 
            `<img src="${item.images[0]}" alt="${item.title}">` : 
            `<i class="fas fa-image"></i>`;
        
        return `
            <div class="my-item-card" data-item-id="${item.id}">
                <div class="my-item-card__image">
                    ${imageHtml}
                </div>
                <div class="my-item-card__content">
                    <h4 class="my-item-card__title">${item.title}</h4>
                    <div class="my-item-card__meta">
                        <span class="item-category">${item.category}</span>
                        <span class="condition-badge">${item.condition}</span>
                        <span class="item-date">${this.formatDate(item.postedDate)}</span>
                    </div>
                </div>
                <div class="my-item-card__actions">
                    <button class="btn btn--sm btn--outline" onclick="window.app.showItemDetail(${item.id})">
                        <i class="fas fa-eye"></i>
                        View
                    </button>
                    <button class="btn btn--sm btn--primary delete-item-btn">
                        <i class="fas fa-check"></i>
                        Mark Taken
                    </button>
                </div>
            </div>
        `;
    }
    
    addItemCardListeners() {
        document.querySelectorAll('.item-card').forEach(card => {
            card.addEventListener('click', () => {
                const itemId = parseInt(card.dataset.itemId);
                this.showItemDetail(itemId);
            });
        });
    }
    
    showItemDetail(itemId) {
        const item = this.communityItems.concat(this.retailItems).find(i => i.id === itemId);
        if (!item) return;
        
        this.selectedItem = item;
        
        // Populate modal
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-category').textContent = item.category;
        document.getElementById('modal-condition').textContent = item.condition;
        document.getElementById('modal-description').textContent = item.description;
        document.getElementById('modal-location').textContent = item.location;
        document.getElementById('modal-address').textContent = item.address || '';
        
        // Distance
        const distance = this.userLocation ? 
            this.calculateDistance(this.userLocation, item.coordinates) : item.distance;
        document.getElementById('modal-distance').textContent = 
            `${distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`} away`;
        
        
        // Images
        const imageContainer = document.getElementById('modal-image-container');
        if (item.images && item.images.length > 0) {
            imageContainer.innerHTML = `
                <img id="modal-main-image" src="${item.images[0]}" alt="${this.escape(item.title)}">
                ${item.images.length > 1 ? `
                  <div class="carousel-nav">
                    <button class="carousel-btn" id="img-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-btn" id="img-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
                  </div>` : ``}
            `;
            let idx = 0;
            const update = () => {
                const el = document.getElementById('modal-main-image');
                if (el) el.src = item.images[idx];
            };
            const prev = document.getElementById('img-prev');
            const next = document.getElementById('img-next');
            if (prev && next) {
                prev.onclick = (ev)=>{ ev.stopPropagation(); idx = (idx - 1 + item.images.length) % item.images.length; update(); };
                next.onclick = (ev)=>{ ev.stopPropagation(); idx = (idx + 1) % item.images.length; update(); };
            }
        } else {
            imageContainer.innerHTML = `
                <div class="item-image-placeholder">
                    <i class="fas fa-image"></i>
                    <span>No Image</span>
                </div>`;
        }
        
        // Deep link for sharing
        try { history.replaceState(null, '', `#item-${item.id}`); } catch(e) {}

        // Type-specific content
        if (item.type === 'retail') {
            // Show pricing
            document.getElementById('modal-pricing').style.display = 'block';
            document.getElementById('modal-original-price').textContent = `$${item.originalPrice}`;
            document.getElementById('modal-discounted-price').textContent = `$${item.discountedPrice}`;
            document.getElementById('modal-discount-badge').textContent = `${item.discountPercentage}% OFF`;
            
            // Show business info
            document.getElementById('modal-user-info').style.display = 'none';
            const businessInfo = document.getElementById('modal-business-info');
            businessInfo.style.display = 'block';
            businessInfo.querySelector('#modal-business-name').textContent = item.businessName;
            businessInfo.querySelector('#modal-business-rating').textContent = `${item.businessRating}★ rating`;
            businessInfo.querySelector('#modal-business-hours').textContent = item.businessHours;
            businessInfo.querySelector('#modal-business-phone').textContent = item.businessPhone;
        } else {
            // Hide pricing
            document.getElementById('modal-pricing').style.display = 'none';
            
            // Show user info
            document.getElementById('modal-business-info').style.display = 'none';
            const userInfo = document.getElementById('modal-user-info');
            userInfo.style.display = 'block';
            userInfo.querySelector('#modal-user-name').textContent = item.userName;
            userInfo.querySelector('#modal-user-rating').textContent = `${item.userRating}★ rating`;
        }
        
        // Update save button
        const saveBtn = document.getElementById('save-item-btn');
        const isSaved = this.savedItems.has(item.id);
        saveBtn.classList.toggle('saved', isSaved);
        saveBtn.querySelector('span').textContent = isSaved ? 'Saved' : 'Save';
        saveBtn.querySelector('i').className = isSaved ? 'fas fa-heart' : 'far fa-heart';
        
        // Show/hide owner actions
        const markTakenBtn = document.getElementById('mark-taken-btn');
        if (item.userId === this.currentUser) {
            markTakenBtn.style.display = 'inline-flex';
        } else {
            markTakenBtn.style.display = 'none';
        }
        
        this.showModal('item-detail-modal');
    }
    
    toggleSaveItem(itemId = null) {
        const id = itemId || (this.selectedItem ? this.selectedItem.id : null);
        if (!id) return;
        
        if (this.savedItems.has(id)) {
            this.savedItems.delete(id);
            this.showMessage('Item removed from saved items', 'info');
        } else {
            this.savedItems.add(id);
            this.showMessage('Item saved for later', 'success');
        }
        
        this._persistSavedItems && this._persistSavedItems();
        
        // Update UI
        this.renderCurrentView();
        if (this.selectedItem && this.selectedItem.id === id) {
            this.showItemDetail(id); // Refresh modal
        }
    }
    
    contactSeller() {
        this.showMessage('Contact feature coming soon!', 'info');
    }
    
    markItemAsTaken() {
        if (this.selectedItem) {
            this.deleteItem(this.selectedItem.id);
        }
    }
    
    deleteItem(itemId) {
        if (confirm('Mark this item as taken and remove it from the catalogue?')) {
            this.communityItems = this.communityItems.filter(item => item.id !== itemId);
            this.savedItems.delete(itemId);
            this.showMessage('Item marked as taken and removed.', 'success');
            this.renderCurrentView();
            this.closeModal('item-detail-modal');
        }
    }
    
    handleAddItem(e) {
        e.preventDefault();
        
        const title = document.getElementById('item-title').value.trim();
        const description = document.getElementById('item-description').value.trim();
        const category = document.getElementById('item-category').value;
        const condition = document.getElementById('item-condition').value;
        const location = document.getElementById('item-location').value.trim();
        const address = document.getElementById('item-address').value.trim();
        
        if (!title || !description || !category || !condition || !location) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        const newItem = {
            id: Date.now(),
            title,
            description,
            category,
            condition,
            location,
            address,
            coordinates: this.userLocation || {lat: 40.7831, lng: -73.9648},
            distance: 0,
            postedDate: new Date().toISOString(),
            userId: this.currentUser,
            userName: 'You',
            userAvatar: 'YU',
            userRating: 5.0,
            views: 0,
            saved: false,
            status: 'active',
            type: 'community',
            images: this.addItemImages || []
        };
        
        this.communityItems.unshift(newItem);
        this.showMessage('Item posted successfully!', 'success');
        this.showView('feed');
    }
    
    resetAddForm() {
        document.getElementById('add-item-form').reset();
    }
// --- Admin helpers ---
    _maybeRestoreAdmin(){
        try { this.isAdmin = localStorage.getItem('tt_is_admin') === '1'; } catch(e){}
    }
    populateAdminDropdowns(){
        const cat = document.getElementById('admin-category');
        const cond = document.getElementById('admin-condition');
        if (!cat || !cond) return;
        if (!cat.options.length) {
            this.categories.filter(c => c.name !== 'All Categories')
                .forEach(c => {
                    const o = document.createElement('option');
                    o.value = c.name; o.textContent = c.name; cat.appendChild(o);
                });
        }
        if (!cond.options.length) {
            this.conditions.forEach(cn => {
                const o = document.createElement('option');
                o.value = cn.value; o.textContent = cn.value; cond.appendChild(o);
            });
        }
    }
    renderAdmin(){
        const tbody = document.getElementById('admin-tbody');
        if (!tbody) return;
        tbody.innerHTML = this.communityItems.map(i => {
            const chipClass = i.status === 'active' ? 'admin-chip admin-chip--active' : 'admin-chip admin-chip--taken';
            const chipText = i.status === 'active' ? 'Aktiv' : 'Tagen';
            return `
              <tr data-id="${i.id}">
                <td>${i.id}</td>
                <td contenteditable="true" data-field="title">${this.escape(i.title)}</td>
                <td>
                  <select data-field="category" class="form-control" style="min-width:140px;">
                    ${this.categories.filter(c=>c.name!=='All Categories').map(c => `<option ${c.name===i.category?'selected':''}>${c.name}</option>`).join('')}
                  </select>
                </td>
                <td>
                  <select data-field="condition" class="form-control" style="min-width:140px;">
                    ${this.conditions.map(cn => `<option ${cn.value===i.condition?'selected':''}>${cn.value}</option>`).join('')}
                  </select>
                </td>
                <td contenteditable="true" data-field="location">${this.escape(i.location)}</td>
                <td><span class="${chipClass}">${chipText}</span></td>
                <td>
                  <button class="btn btn--sm btn--outline" data-action="toggle">${i.status==='active'?'Markera tagen':'Aktivera'}</button>
                  <button class="btn btn--sm btn--primary" data-action="save">Spara</button>
                  <button class="btn btn--sm btn--outline" data-action="delete">Ta bort</button>
                </td>
              </tr>`;
        }).join('');
    }
    bindAdminControls(){
        const addBtn = document.getElementById('admin-add-btn');
        if (addBtn) {
            addBtn.onclick = () => {
                const title = document.getElementById('admin-title').value.trim();
                const desc = document.getElementById('admin-desc').value.trim();
                const cat = document.getElementById('admin-category').value;
                const cond = document.getElementById('admin-condition').value;
                const loc = document.getElementById('admin-location').value.trim();
                const addr = document.getElementById('admin-address').value.trim();
                if (!title || !desc || !cat || !cond || !loc) {
                    this.showMessage('Fyll i alla obligatoriska fält', 'error'); return;
                }
                const newItem = {
                    id: Date.now(),
                    title, description: desc, category: cat, condition: cond,
                    location: loc, address: addr,
                    coordinates: this.userLocation || {lat: 40.7831, lng: -73.9648},
                    distance: 0, postedDate: new Date().toISOString(),
                    userId: this.currentUser, userName: 'Admin', userAvatar: 'AD',
                    userRating: 5.0, views: 0, saved: false, status: 'active', type: 'community',
                    images: []
                };
                this.communityItems.unshift(newItem);
                this.showMessage('Item skapat', 'success');
                this.renderAdmin();
            };
        }
        const tbody = document.getElementById('admin-tbody');
        if (!tbody) return;
        tbody.onclick = (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const tr = e.target.closest('tr');
            const id = parseInt(tr.dataset.id,10);
            const item = this.communityItems.find(x => x.id === id);
            if (!item) return;
            if (btn.dataset.action === 'toggle') {
                item.status = item.status === 'active' ? 'taken' : 'active';
                this.showMessage('Status uppdaterad', 'success');
                this.renderAdmin();
                this.renderCurrentView();
            }
            if (btn.dataset.action === 'delete') {
                if (confirm('Ta bort detta item?')) {
                    this.communityItems = this.communityItems.filter(x => x.id !== id);
                    this.savedItems.delete(id);
                    this.showMessage('Item borttaget', 'success');
                    this.renderAdmin();
                    this.renderCurrentView();
                }
            }
            if (btn.dataset.action === 'save') {
                const titleCell = tr.querySelector('[data-field="title"]');
                const locCell = tr.querySelector('[data-field="location"]');
                const catSel = tr.querySelector('[data-field="category"]');
                const condSel = tr.querySelector('[data-field="condition"]');
                item.title = titleCell.textContent.trim();
                item.location = locCell.textContent.trim();
                item.category = catSel.value;
                item.condition = condSel.value;
                this.showMessage('Sparat', 'success');
                this.renderAdmin();
                this.renderCurrentView();
            }
        };
    }
    escape(s){ return (s||'').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;' }[m])); }
    
    // --- Image upload helpers ---
    handleImageSelect(e){
        const files = Array.from(e.target.files || []);
        const max = 5;
        if (!files.length) return;
        const preview = document.getElementById('image-preview');
        this.addItemImages = [];
        const toBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
        const take = files.slice(0, max);
        Promise.all(take.map(f => toBase64(f))).then(imgs => {
            this.addItemImages = imgs;
            if (preview) {
                preview.innerHTML = imgs.map(src => `<div class="thumb"><img src="${src}" alt="preview"></div>`).join('');
            }
        }).catch(()=> {
            this.showMessage('Kunde inte läsa bildfil.', 'error');
        });
    }
    resetAddForm(){
        const form = document.getElementById('add-item-form');
        if (form) form.reset();
        this.addItemImages = [];
        const preview = document.getElementById('image-preview');
        if (preview) preview.innerHTML = '';
    }

    // Location functions
    requestLocation() {
        this.showModal('location-permission-modal');
    }
    
    enableLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        address: 'Current location'
                    };
                    this.updateLocationDisplay();
                    this.updateDistances();
                    this.renderCurrentView();
                    this.showMessage('Location enabled successfully!', 'success');
                },
                (error) => {
                    this.showMessage('Unable to access location. Using default.', 'error');
                }
            );
        } else {
            this.showMessage('Geolocation not supported by browser.', 'error');
        }
    }
    
    updateLocationDisplay() {
        const locationBtn = document.getElementById('location-btn');
        if (this.userLocation) {
            locationBtn.classList.add('active');
            locationBtn.querySelector('span').textContent = 'Location Enabled';
            locationBtn.querySelector('i').className = 'fas fa-location-dot';
        }
    }
    
    updateDistances() {
        if (!this.userLocation) return;
        
        this.communityItems.concat(this.retailItems).forEach(item => {
            item.distance = this.calculateDistance(this.userLocation, item.coordinates);
        });
    }
    
    calculateDistance(pos1, pos2) {
        const R = 6371; // Earth's radius in km
        const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
        const dLng = (pos2.lng - pos1.lng) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    // Utility functions
    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }
    
    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        this.selectedItem = null;
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    }
    
    showMessage(message, type = 'info') {
        const container = document.getElementById('message-container');
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-circle' : 
                    'info-circle';
        
        messageEl.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(messageEl);
        
        setTimeout(() => messageEl.classList.add('show'), 100);
        
        setTimeout(() => {
            messageEl.classList.remove('show');
            setTimeout(() => {
                if (messageEl.parentNode) {
                    container.removeChild(messageEl);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TradeTableApp();
});
// --- small runtime safety helpers added ---
TradeTableApp.prototype._isHttps = function(){
  return location.protocol === 'https:' || location.hostname === 'localhost';
};

TradeTableApp.prototype._loadSavedItems = function(){
  try {
    const raw = localStorage.getItem('tt_saved_items');
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) this.savedItems = new Set(arr);
    }
  } catch(e) { /* ignore */ }
};

TradeTableApp.prototype._persistSavedItems = function(){
  try { localStorage.setItem('tt_saved_items', JSON.stringify(Array.from(this.savedItems))); } catch(e) { /* ignore */ }
};

// Patch constructor after class definition if present
const _init = TradeTableApp;
if (_init && _init.prototype) {
  const original = _init.prototype.initialize || function(){};
  _init.prototype.initialize = function(){
    // call original if user defined
    try{ original.apply(this, arguments); } catch(e){}
    // load saved
    this._loadSavedItems();
    // if any geolocation usage, warn if not https
    if (!this._isHttps()) {
      console.warn('Geolocation kräver HTTPS i moderna webbläsare.');
    }
  };
}

// simple debounce utility
window.ttDebounce = function(fn, wait){
  let t; return function(){
    clearTimeout(t); const args = arguments, ctx = this;
    t = setTimeout(function(){ fn.apply(ctx, args); }, wait);
  };
};

})();
