import React, { useState } from 'react';
import './DineHub.css';

const DineHub = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data
  const carousel = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Delicious Burgers'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Fresh Pancakes'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Order Salmon Steak Today'
    }
  ];

  const categories = [
    { id: 1, name: 'Meat', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&h=200&fit=crop' },
    { id: 2, name: 'Salads', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop' },
    { id: 3, name: 'Pasta', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=200&h=200&fit=crop' },
    { id: 4, name: 'Fish', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=200&h=200&fit=crop' },
    { id: 5, name: 'Drinks', image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=200&h=200&fit=crop' }
  ];

  const products = [
    {
      id: 1,
      name: 'Pan-Seared Salmon',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=300&fit=crop',
      rating: 4.8,
      description: '10 kcal • 200g',
      category: 'Fish',
      is_recommended: true
    },
    {
      id: 2,
      name: 'Creamy Chicken Alfredo',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop',
      rating: 4.6,
      description: 'Tender chicken with creamy pasta',
      category: 'Pasta',
      is_recommended: true
    },
    {
      id: 3,
      name: 'Caesar with Chicken',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      rating: 4.7,
      description: 'Fresh romaine with grilled chicken',
      category: 'Salads',
      is_recommended: true
    },
    {
      id: 4,
      name: 'Grilled Steak',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
      rating: 4.9,
      description: 'Premium beef with herbs',
      category: 'Meat',
      is_recommended: false
    },
    {
      id: 5,
      name: 'Vegetable Salad',
      price: 11.49,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      rating: 4.5,
      description: 'Combining yogurt with fresh juice and spices',
      category: 'Salads',
      is_recommended: false
    },
    {
      id: 6,
      name: 'Burger Combo',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
      rating: 4.4,
      description: 'Classic burger with fries',
      category: 'Meat',
      is_recommended: false
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing food quality and fast delivery! The burgers are absolutely delicious.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b832?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 4,
      comment: 'Great variety and excellent customer service. My go-to food delivery app!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      rating: 5,
      comment: 'Fresh ingredients and perfect packaging. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
    }
  ];

  const recommended = products.filter(p => p.is_recommended);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, change) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  const renderHeader = () => (
    <div className="dine-header">
      <div className="header-content">
        <div className="user-info">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="User"
            className="user-avatar"
          />
          <div>
            <p className="greeting">Good Morning!</p>
            <p className="username">John Doe</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="notification-btn">
            🔔
            <span className="notification-badge">3</span>
          </button>
          <button 
            className="cart-btn"
            onClick={() => setActiveTab('cart')}
          >
            🛒
            {cart.length > 0 && <span className="cart-badge">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
          </button>
        </div>
      </div>
    </div>
  );

  const renderCarousel = () => (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {carousel.map((item, index) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.image} alt={item.title} />
            <div className="carousel-overlay">
              <h3>{item.title}</h3>
              {index === 2 && (
                <div className="discount-info">
                  <p>And Save Up To</p>
                  <span className="discount">35%</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {carousel.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="section">
      <div className="section-header">
        <h2>We Offer</h2>
        <button className="see-all">See All</button>
      </div>
      <div className="categories-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecommended = () => (
    <div className="section">
      <div className="section-header">
        <h2>Recommended for You</h2>
      </div>
      <div className="products-list">
        {recommended.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-rating">
                {renderStars(Math.floor(product.rating))}
                <span className="rating-text">({product.rating})</span>
              </div>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button 
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="section">
      <div className="section-header">
        <h2>Our Happy Clients Say</h2>
        <button className="see-all">See All</button>
      </div>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} />
              <div>
                <h4>{review.name}</h4>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="tab-content">
            {renderCarousel()}
            {renderCategories()}
            {renderRecommended()}
            {renderReviews()}
          </div>
        );
      case 'menu':
        return (
          <div className="tab-content">
            <h2>Menu</h2>
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                      {renderStars(Math.floor(product.rating))}
                      <span className="rating-text">({product.rating})</span>
                    </div>
                    <div className="product-footer">
                      <span className="price">${product.price}</span>
                      <button 
                        className="add-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'favorites':
        return (
          <div className="tab-content">
            <h2>Favorites</h2>
            <p className="empty-state">❤️ Your favorite items will appear here</p>
          </div>
        );
      case 'orders':
        return (
          <div className="tab-content">
            <h2>Orders</h2>
            <div className="order-card">
              <h3>Recent Order #12345</h3>
              <p>2x Classic Burger, 1x Margherita Pizza</p>
              <p className="order-status">Status: <span className="delivered">Delivered</span></p>
              <p className="order-total">Total: $40.97</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="tab-content">
            <h2>Profile</h2>
            <div className="profile-info">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="profile-avatar"
              />
              <h3>John Doe</h3>
              <p>john.doe@email.com</p>
              <p>📍 123 Food Street, Taste City</p>
            </div>
          </div>
        );
      case 'cart':
        return (
          <div className="tab-content">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
              <p className="empty-state">🛒 Your cart is empty</p>
            ) : (
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const renderBottomNav = () => (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
        onClick={() => setActiveTab('menu')}
      >
        <span className="nav-icon">📋</span>
        <span className="nav-label">Menu</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        <span className="nav-icon">❤️</span>
        <span className="nav-label">Favorites</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => setActiveTab('orders')}
      >
        <span className="nav-icon">📦</span>
        <span className="nav-label">Orders</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profile</span>
      </button>
    </div>
  );

  return (
    <div className="dinehub-app">
      {renderHeader()}
      <div className="app-content">
        {renderTabContent()}
      </div>
      {renderBottomNav()}
    </div>
  );
};

export default DineHub;