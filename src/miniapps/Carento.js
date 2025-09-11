import React, { useState, useEffect } from 'react';
import './Carento.css';

const Carento = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    location: 'New York, USA',
    dropoffLocation: 'Delaware, USA',
    pickupDate: '',
    returnDate: '',
    category: 'all',
    priceRange: [0, 1000],
    transmission: 'all'
  });
  const [featuredCarIndex, setFeaturedCarIndex] = useState(0);

  // Mock data for cars
  const cars = [
    {
      id: 1,
      name: 'Audi A3 1.6 TDI S line',
      price: 498.25,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
      rating: 4.96,
      reviews: 672,
      location: 'Manchester, England',
      mileage: '25,100 miles',
      transmission: 'Automatic',
      fuel: 'Diesel',
      seats: 7,
      category: 'Sedan',
      features: ['GPS Navigation', 'Bluetooth', 'Air Conditioning', 'Cruise Control']
    },
    {
      id: 2,
      name: 'Mercedes-Benz C220d',
      price: 598.50,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop',
      rating: 4.8,
      reviews: 524,
      location: 'Berlin, Germany',
      mileage: '18,500 miles',
      transmission: 'Automatic',
      fuel: 'Diesel',
      seats: 5,
      category: 'Luxury',
      features: ['Premium Sound', 'Leather Seats', 'Sunroof', 'Premium Package']
    },
    {
      id: 3,
      name: 'BMW X5 xDrive40i',
      price: 750.00,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
      rating: 4.9,
      reviews: 892,
      location: 'Munich, Germany',
      mileage: '12,000 miles',
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 7,
      category: 'SUV',
      features: ['4WD', 'Premium Interior', 'Advanced Safety', 'Sport Mode']
    },
    {
      id: 4,
      name: 'Volkswagen Golf GTD 2.0 TDI',
      price: 345.75,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop',
      rating: 4.6,
      reviews: 428,
      location: 'Amsterdam, Netherlands',
      mileage: '35,200 miles',
      transmission: 'Manual',
      fuel: 'Diesel',
      seats: 5,
      category: 'Hatchback',
      features: ['Sport Suspension', 'Turbo Engine', 'Sport Seats', 'Digital Display']
    },
    {
      id: 5,
      name: 'Tesla Model S',
      price: 890.00,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
      rating: 4.95,
      reviews: 1200,
      location: 'San Francisco, USA',
      mileage: '8,500 miles',
      transmission: 'Automatic',
      fuel: 'Electric',
      seats: 5,
      category: 'Electric',
      features: ['Autopilot', 'Supercharging', 'Premium Connectivity', 'Full Self-Driving']
    },
    {
      id: 6,
      name: 'Range Rover Evoque',
      price: 675.25,
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&h=300&fit=crop',
      rating: 4.7,
      reviews: 356,
      location: 'London, UK',
      mileage: '22,800 miles',
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 5,
      category: 'SUV',
      features: ['All-Terrain', 'Luxury Interior', 'Panoramic Roof', 'Terrain Response']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cars', count: cars.length, icon: '🚗' },
    { id: 'SUV', name: 'SUV', count: cars.filter(c => c.category === 'SUV').length, icon: '🚙' },
    { id: 'Sedan', name: 'Sedan', count: cars.filter(c => c.category === 'Sedan').length, icon: '🚗' },
    { id: 'Luxury', name: 'Luxury', count: cars.filter(c => c.category === 'Luxury').length, icon: '✨' },
    { id: 'Electric', name: 'Electric', count: cars.filter(c => c.category === 'Electric').length, icon: '⚡' },
    { id: 'Hatchback', name: 'Hatchback', count: cars.filter(c => c.category === 'Hatchback').length, icon: '🚙' }
  ];

  const brands = [
    { name: 'BMW', logo: 'https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png' },
    { name: 'Mercedes', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png' },
    { name: 'Audi', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Audi-Logo.png' },
    { name: 'Tesla', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Tesla-Logo.png' },
    { name: 'Volkswagen', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Volkswagen-Logo.png' }
  ];

  const filteredCars = cars.filter(car => {
    if (searchFilters.category !== 'all' && car.category !== searchFilters.category) return false;
    if (car.price < searchFilters.priceRange[0] || car.price > searchFilters.priceRange[1]) return false;
    if (searchFilters.transmission !== 'all' && car.transmission.toLowerCase() !== searchFilters.transmission) return false;
    return true;
  });

  // Auto-rotate featured cars
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedCarIndex(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  const renderHeader = () => (
    <div className="carento-header">
      <div className="header-content">
        <div className="logo">
          <h1>🚗 Carento</h1>
          <p>Premium Car Rental</p>
        </div>
        <div className="header-actions">
          <button className="location-btn">
            📍 {searchFilters.location}
          </button>
          <button className="profile-btn">
            👤
          </button>
        </div>
      </div>
    </div>
  );

  const renderSearchForm = () => (
    <div className="search-section">
      <h2>Find Your Perfect Car</h2>
      <p>High quality at competitive prices • Premium services • 24/7 support</p>
      
      <div className="search-form">
        <div className="search-row">
          <div className="search-field">
            <label>Pick Up Location</label>
            <input 
              type="text" 
              value={searchFilters.location}
              onChange={(e) => setSearchFilters(prev => ({...prev, location: e.target.value}))}
              placeholder="Enter pick up location"
            />
          </div>
          <div className="search-field">
            <label>Drop Off Location</label>
            <input 
              type="text" 
              value={searchFilters.dropoffLocation}
              onChange={(e) => setSearchFilters(prev => ({...prev, dropoffLocation: e.target.value}))}
              placeholder="Enter drop off location"
            />
          </div>
        </div>
        
        <div className="search-row">
          <div className="search-field">
            <label>Pick Up Date</label>
            <input 
              type="date" 
              value={searchFilters.pickupDate}
              onChange={(e) => setSearchFilters(prev => ({...prev, pickupDate: e.target.value}))}
            />
          </div>
          <div className="search-field">
            <label>Return Date</label>
            <input 
              type="date" 
              value={searchFilters.returnDate}
              onChange={(e) => setSearchFilters(prev => ({...prev, returnDate: e.target.value}))}
            />
          </div>
        </div>
        
        <button className="search-btn">Find Vehicle</button>
      </div>
    </div>
  );

  const renderFeaturedCars = () => (
    <div className="featured-section">
      <h2>Featured Cars</h2>
      <div className="featured-carousel">
        <div className="featured-car" style={{ transform: `translateX(-${featuredCarIndex * 100}%)` }}>
          {cars.slice(0, 3).map((car, index) => (
            <div key={car.id} className="featured-slide">
              <img src={car.image} alt={car.name} />
              <div className="featured-overlay">
                <h3>{car.name}</h3>
                <p>Starting from ${car.price}/day</p>
                <button 
                  className="featured-btn"
                  onClick={() => setSelectedCar(car)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {[0, 1, 2].map(index => (
            <button
              key={index}
              className={`indicator ${index === featuredCarIndex ? 'active' : ''}`}
              onClick={() => setFeaturedCarIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderBrands = () => (
    <div className="brands-section">
      <h2>Premium Brands</h2>
      <div className="brands-grid">
        {brands.map(brand => (
          <div key={brand.name} className="brand-item">
            <div className="brand-logo">
              {brand.name.charAt(0)}
            </div>
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="categories-section">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-item ${searchFilters.category === category.id ? 'active' : ''}`}
            onClick={() => setSearchFilters(prev => ({...prev, category: category.id}))}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
            <span className="category-count">{category.count} cars</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderFilters = () => (
    <div className="filters-section">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Transmission</label>
        <select 
          value={searchFilters.transmission} 
          onChange={(e) => setSearchFilters(prev => ({...prev, transmission: e.target.value}))}
        >
          <option value="all">All</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Price Range: $0 - $1000/day</label>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="50"
          value={searchFilters.priceRange[1]}
          onChange={(e) => setSearchFilters(prev => ({...prev, priceRange: [0, parseInt(e.target.value)]}))}
        />
        <span>Max: ${searchFilters.priceRange[1]}/day</span>
      </div>
    </div>
  );

  const renderCarsList = () => (
    <div className="cars-list">
      <div className="cars-header">
        <h2>Available Cars ({filteredCars.length})</h2>
      </div>
      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <div className="car-info">
              <div className="car-rating">
                {renderStars(car.rating)}
                <span>({car.reviews} reviews)</span>
              </div>
              <h3>{car.name}</h3>
              <p className="car-location">📍 {car.location}</p>
              <div className="car-specs">
                <span>📏 {car.mileage}</span>
                <span>⚙️ {car.transmission}</span>
                <span>⛽ {car.fuel}</span>
                <span>👥 {car.seats} seats</span>
              </div>
              <div className="car-footer">
                <div className="car-price">
                  <span className="price-label">From</span>
                  <span className="price">${car.price}</span>
                  <span className="price-period">/day</span>
                </div>
                <button 
                  className="book-btn"
                  onClick={() => setSelectedCar(car)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCarDetails = () => {
    if (!selectedCar) return null;
    
    return (
      <div className="car-details-modal">
        <div className="modal-content">
          <button className="close-btn" onClick={() => setSelectedCar(null)}>×</button>
          <div className="car-details">
            <div className="car-image-section">
              <img src={selectedCar.image} alt={selectedCar.name} />
            </div>
            <div className="car-info-section">
              <h2>{selectedCar.name}</h2>
              <div className="car-rating">
                {renderStars(selectedCar.rating)}
                <span>({selectedCar.reviews} reviews)</span>
              </div>
              <p className="car-location">📍 {selectedCar.location}</p>
              
              <div className="car-specs-detailed">
                <h3>Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Mileage:</span>
                    <span>{selectedCar.mileage}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Transmission:</span>
                    <span>{selectedCar.transmission}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Fuel:</span>
                    <span>{selectedCar.fuel}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Seats:</span>
                    <span>{selectedCar.seats} seats</span>
                  </div>
                </div>
              </div>

              <div className="car-features">
                <h3>Features</h3>
                <div className="features-list">
                  {selectedCar.features.map(feature => (
                    <span key={feature} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
              </div>

              <div className="booking-section">
                <div className="price-section">
                  <span className="price-large">${selectedCar.price}</span>
                  <span className="price-period">/day</span>
                </div>
                <div className="booking-form">
                  <div className="booking-dates">
                    <input type="date" placeholder="Pick up date" />
                    <input type="date" placeholder="Return date" />
                  </div>
                  <button className="book-now-btn" onClick={() => {
                    alert('Booking confirmed! Thank you for choosing Carento.');
                    setSelectedCar(null);
                  }}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'browse':
        return (
          <div className="tab-content">
            {renderSearchForm()}
            {renderFeaturedCars()}
            {renderBrands()}
          </div>
        );
      case 'cars':
        return (
          <div className="tab-content">
            {renderCategories()}
            {renderFilters()}
            {renderCarsList()}
          </div>
        );
      case 'bookings':
        return (
          <div className="tab-content">
            <h2>My Bookings</h2>
            <div className="booking-card">
              <h3>BMW X5 xDrive40i</h3>
              <p>📅 Dec 15, 2024 - Dec 20, 2024</p>
              <p>📍 Munich, Germany</p>
              <div className="booking-status">
                <span className="status active">Active</span>
                <span className="booking-total">$3,750.00</span>
              </div>
            </div>
            <div className="booking-card">
              <h3>Mercedes-Benz C220d</h3>
              <p>📅 Nov 10, 2024 - Nov 12, 2024</p>
              <p>📍 Berlin, Germany</p>
              <div className="booking-status">
                <span className="status completed">Completed</span>
                <span className="booking-total">$1,197.00</span>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="tab-content">
            <h2>Profile</h2>
            <div className="profile-info">
              <div className="profile-avatar">👤</div>
              <h3>John Doe</h3>
              <p>john.doe@email.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 New York, USA</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Total Bookings</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderBottomNav = () => (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'browse' ? 'active' : ''}`}
        onClick={() => setActiveTab('browse')}
      >
        <span className="nav-icon">🔍</span>
        <span className="nav-label">Browse</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'cars' ? 'active' : ''}`}
        onClick={() => setActiveTab('cars')}
      >
        <span className="nav-icon">🚗</span>
        <span className="nav-label">Cars</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
        onClick={() => setActiveTab('bookings')}
      >
        <span className="nav-icon">📋</span>
        <span className="nav-label">Bookings</span>
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
    <div className="carento-app">
      {renderHeader()}
      <div className="app-content">
        {renderTabContent()}
      </div>
      {renderBottomNav()}
      {selectedCar && renderCarDetails()}
    </div>
  );
};

export default Carento;