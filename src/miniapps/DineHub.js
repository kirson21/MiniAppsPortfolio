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

  const renderIcon = (type) => {
    const icons = {
      bell: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5S10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"/></svg>,
      cart: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18C5.9 18 5.01 18.9 5.01 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H18.21L15.27 11H8.53L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z"/></svg>,
      home: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/></svg>,
      menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"/></svg>,
      heart: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/></svg>,
      orders: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 7H18V6C18 3.79 16.21 2 14 2H10C7.79 2 6 3.79 6 6V7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9C21 7.9 20.1 7 19 7ZM10 4H14C15.1 4 16 4.9 16 6V7H8V6C8 4.9 8.9 4 10 4ZM19 19H5V9H19V19ZM12 12C10.9 12 10 12.9 10 14S10.9 16 12 16 14 15.1 14 14 13.1 12 12 12Z"/></svg>,
      profile: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/></svg>,
      heartEmpty: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"/></svg>,
      location: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/></svg>
    };
    return icons[type] || null;
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
            {renderIcon('bell')}
            <span className="notification-badge">3</span>
          </button>
          <button 
            className="cart-btn"
            onClick={() => setActiveTab('cart')}
          >
            {renderIcon('cart')}
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
            <div className="products-list">
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
            <div className="empty-state">
              {renderIcon('heartEmpty')}
              <p>Your favorite items will appear here</p>
            </div>
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
              <p>
                {renderIcon('location')}
                123 Food Street, Taste City
              </p>
            </div>
          </div>
        );
      case 'cart':
        return (
          <div className="tab-content">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-state">
                {renderIcon('cart')}
                <p>Your cart is empty</p>
              </div>
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
        <span className="nav-icon">{renderIcon('home')}</span>
        <span className="nav-label">Home</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
        onClick={() => setActiveTab('menu')}
      >
        <span className="nav-icon">{renderIcon('menu')}</span>
        <span className="nav-label">Menu</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        <span className="nav-icon">{renderIcon('heart')}</span>
        <span className="nav-label">Favorites</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => setActiveTab('orders')}
      >
        <span className="nav-icon">{renderIcon('orders')}</span>
        <span className="nav-label">Orders</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <span className="nav-icon">{renderIcon('profile')}</span>
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