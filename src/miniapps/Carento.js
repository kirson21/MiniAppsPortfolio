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

  // Mock data for cars with premium car images
  const cars = [
    {
      id: 1,
      name: 'Audi A3 1.6 TDI S line',
      price: 498.25,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&h=400&fit=crop&crop=center',
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

  // Featured cars for carousel
  const featuredCars = [
    {
      id: 1,
      name: 'Delicious Burgers',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=500&fit=crop&crop=center',
      title: 'Premium Luxury Collection'
    },
    {
      id: 2,
      name: 'Fresh Pancakes',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=center',
      title: 'Sports & Performance'
    },
    {
      id: 3,
      name: 'Order Salmon Steak Today',
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=500&fit=crop&crop=center',
      title: 'SUV & Family Cars'
    },
    {
      id: 4,
      name: 'Electric Future',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop&crop=center',
      title: 'Electric & Hybrid'
    },
    {
      id: 5,
      name: 'Business Class',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center',
      title: 'Business & Executive'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cars', count: cars.length, icon: 'M12 2L2 7V10C2 11.1 2.9 12 4 12H20C21.1 12 22 11.1 22 10V7L12 2Z' },
    { id: 'SUV', name: 'SUV', count: cars.filter(c => c.category === 'SUV').length, icon: 'M5 15V9H19V15H17V17C17 17.55 16.55 18 16 18H15C14.45 18 14 17.55 14 17V15H10V17C10 17.55 9.55 18 9 18H8C7.45 18 7 17.55 7 17V15H5Z' },
    { id: 'Sedan', name: 'Sedan', count: cars.filter(c => c.category === 'Sedan').length, icon: 'M5 11L6.5 6.5H17.5L19 11H5ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16Z' },
    { id: 'Luxury', name: 'Luxury', count: cars.filter(c => c.category === 'Luxury').length, icon: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z' },
    { id: 'Electric', name: 'Electric', count: cars.filter(c => c.category === 'Electric').length, icon: 'M14.69 2.21L4.33 11.49C4.25 11.55 4.24 11.65 4.29 11.72L6.15 14.27C6.22 14.37 6.36 14.37 6.44 14.27L16.8 5C16.88 4.94 16.89 4.84 16.84 4.77L14.98 2.22C14.91 2.12 14.77 2.12 14.69 2.21Z' },
    { id: 'Hatchback', name: 'Hatchback', count: cars.filter(c => c.category === 'Hatchback').length, icon: 'M18 16C18.55 16 19 15.55 19 15V9L17 7H7L5 9V15C5 15.55 5.45 16 6 16H7C7 17.1 7.9 18 9 18S11 17.1 11 16H13C13 17.1 13.9 18 15 18S17 17.1 17 16H18Z' }
  ];

  const brands = [
    { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg', color: '#EB0A1E' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', color: '#0066B2' },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', color: '#0F1419' },
    { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg', color: '#BB0A30' },
    { name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Lexus_logo.svg', color: '#0F1419' },
    { name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg', color: '#151F6D' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg', color: '#E31837' },
    { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Porsche_logo.svg', color: '#D5001C' }
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
      setFeaturedCarIndex(prev => (prev + 1) % featuredCars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredCars.length]);

  const renderIcon = (path) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  );

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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#4f46e5">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
          </svg>
          <div>
            <h1>Carento</h1>
            <p>Premium Car Rental</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="location-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
            </svg>
            {searchFilters.location}
          </button>
          <button className="profile-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const renderSearchForm = () => (
    <div className="search-section">
      <h2>Looking for a vehicle? You're in the perfect spot.</h2>
      <p>High quality at a low cost • Premium services • 24/7 roadside support</p>
      
      <div className="search-form">
        <div className="search-row">
          <div className="search-field">
            <label>Pick Up Location</label>
            <div className="input-with-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
              </svg>
              <input 
                type="text" 
                value={searchFilters.location}
                onChange={(e) => setSearchFilters(prev => ({...prev, location: e.target.value}))}
                placeholder="New York, USA"
              />
            </div>
          </div>
          <div className="search-field">
            <label>Drop Off Location</label>
            <div className="input-with-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
              </svg>
              <input 
                type="text" 
                value={searchFilters.dropoffLocation}
                onChange={(e) => setSearchFilters(prev => ({...prev, dropoffLocation: e.target.value}))}
                placeholder="Delaware, USA"
              />
            </div>
          </div>
        </div>
        
        <div className="search-row">
          <div className="search-field">
            <label>Pick Up Date & Time</label>
            <div className="input-with-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
              </svg>
              <input 
                type="datetime-local" 
                value={searchFilters.pickupDate}
                onChange={(e) => setSearchFilters(prev => ({...prev, pickupDate: e.target.value}))}
              />
            </div>
          </div>
          <div className="search-field">
            <label>Return Date & Time</label>
            <div className="input-with-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
              </svg>
              <input 
                type="datetime-local" 
                value={searchFilters.returnDate}
                onChange={(e) => setSearchFilters(prev => ({...prev, returnDate: e.target.value}))}
              />
            </div>
          </div>
        </div>
        
        <button className="search-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"/>
          </svg>
          Find a Vehicle
        </button>
      </div>
    </div>
  );

  const renderFeaturedCars = () => (
    <div className="featured-section">
      <div className="section-header">
        <h2>Most Searched Vehicles</h2>
        <p>The world's leading car brands</p>
      </div>
      <div className="featured-carousel">
        <div className="featured-grid">
          {featuredCars.slice(0, 4).map((car, index) => (
            <div key={car.id} className="featured-slide">
              <img src={car.image} alt={car.title} />
              <div className="featured-overlay">
                <h3>{car.title}</h3>
                <button 
                  className="featured-btn"
                  onClick={() => setActiveTab('cars')}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBrands = () => (
    <div className="brands-section">
      <div className="section-header">
        <h2>Premium Brands</h2>
        <p>Unveil the Finest Selection of High-End Vehicles</p>
      </div>
      <div className="brands-grid">
        <div className="brands-row">
          {brands.map(brand => (
            <div key={brand.name} className="brand-item">
              <div className="brand-logo">
                <img src={brand.logo} alt={brand.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="brands-row brands-row-reverse">
          {brands.map(brand => (
            <div key={`${brand.name}-2`} className="brand-item">
              <div className="brand-logo">
                <img src={brand.logo} alt={brand.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="categories-section">
      <div className="section-header">
        <h2>Browse by Type</h2>
        <p>Find the perfect ride for any occasion</p>
      </div>
      <div className="categories-grid">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-item ${searchFilters.category === category.id ? 'active' : ''}`}
            onClick={() => setSearchFilters(prev => ({...prev, category: category.id}))}
          >
            <div className="category-icon">
              {renderIcon(category.icon)}
            </div>
            <span className="category-name">{category.name}</span>
            <span className="category-count">{category.count} Vehicles</span>
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
        <button className="load-more-btn">Load More Cars</button>
      </div>
      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="car-info">
              <div className="car-rating">
                {renderStars(car.rating)}
                <span>({car.reviews} reviews)</span>
              </div>
              <h3>{car.name}</h3>
              <p className="car-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                {car.location}
              </p>
              <div className="car-specs">
                <div className="spec-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.89 2 10 2.89 10 4C10 5.11 10.89 6 12 6C13.11 6 14 5.11 14 4C14 2.89 13.11 2 12 2ZM21 9V7L15 1L9 7V9H21Z"/>
                  </svg>
                  <span>{car.mileage}</span>
                </div>
                <div className="spec-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.33 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z"/>
                  </svg>
                  <span>{car.transmission}</span>
                </div>
                <div className="spec-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.77 7.23L19.78 7.22L16.06 3.5L15.45 4.11L17.34 6H14.43C13.55 6 12.8 6.55 12.54 7.36L12 9H8.5C7.67 9 7 9.67 7 10.5S7.67 12 8.5 12H12L12.54 13.64C12.8 14.45 13.55 15 14.43 15H17.34L15.45 16.89L16.06 17.5L19.78 13.78L19.77 13.77C20.07 13.47 20.07 12.97 19.77 12.67L19.77 7.23Z"/>
                  </svg>
                  <span>{car.fuel}</span>
                </div>
                <div className="spec-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 8.5C4 7.12 5.12 6 6.5 6S9 7.12 9 8.5 7.88 11 6.5 11 4 9.88 4 8.5ZM15 8.5C15 7.12 16.12 6 17.5 6S20 7.12 20 8.5 18.88 11 17.5 11 15 9.88 15 8.5ZM2 14V17C2 17.55 2.45 18 3 18H4C4.55 18 5 17.55 5 17V16H8V17C8 17.55 8.45 18 9 18H10C10.55 18 11 17.55 11 17V16H13V17C13 17.55 13.45 18 14 18H15C15.55 18 16 17.55 16 17V16H19V17C19 17.55 19.45 18 20 18H21C21.55 18 22 17.55 22 17V14L20 9H4L2 14Z"/>
                  </svg>
                  <span>{car.seats} seats</span>
                </div>
              </div>
              <div className="car-footer">
                <div className="car-price">
                  <span className="price-label">From</span>
                  <span className="price">${car.price}</span>
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
          <button className="close-btn" onClick={() => setSelectedCar(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
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
              <p className="car-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                {selectedCar.location}
              </p>
              
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
                    <span key={feature} className="feature-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </span>
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
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
                </svg>
                Dec 15, 2024 - Dec 20, 2024
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                Munich, Germany
              </p>
              <div className="booking-status">
                <span className="status active">Active</span>
                <span className="booking-total">$3,750.00</span>
              </div>
            </div>
            <div className="booking-card">
              <h3>Mercedes-Benz C220d</h3>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
                </svg>
                Nov 10, 2024 - Nov 12, 2024
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                Berlin, Germany
              </p>
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
              <div className="profile-avatar">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                </svg>
              </div>
              <h3>John Doe</h3>
              <p>john.doe@email.com</p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                </svg>
                +1 (555) 123-4567
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                New York, USA
              </p>
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
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"/>
          </svg>
        </div>
        <span className="nav-label">Browse</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'cars' ? 'active' : ''}`}
        onClick={() => setActiveTab('cars')}
      >
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
          </svg>
        </div>
        <span className="nav-label">Cars</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
        onClick={() => setActiveTab('bookings')}
      >
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
          </svg>
        </div>
        <span className="nav-label">Bookings</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <div className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
          </svg>
        </div>
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