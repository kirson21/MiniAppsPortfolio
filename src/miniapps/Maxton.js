import React, { useState } from 'react';
import './Maxton.css';

const Maxton = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Mock data for dashboard
  const analytics = {
    activeUsers: { value: '42.5K', label: 'Active Users', growth: '+12.5%', positive: true },
    totalUsers: { value: '97.4K', label: 'Total Users', growth: '+8.3%', positive: true },
    todaysSales: { value: '$65.4K', label: "Today's Sales", growth: '+15.2%', positive: true },
    growthRate: { value: '78.4%', label: 'Growth Rate', growth: '+5.1%', positive: true },
    totalClicks: { value: '82.7K', label: 'Total Clicks', growth: '+12.5%', positive: true },
    totalViews: { value: '68.4K', label: 'Total Views', growth: '+35K', positive: true },
    totalAccounts: { value: '85,247', label: 'Total Accounts', growth: '+23.7%', positive: true }
  };

  const recentOrders = [
    { id: 1, item: 'Sports Shoes', amount: '$149', vendor: 'Julia Sunota', status: 'Completed', rating: 5.0 },
    { id: 2, item: 'Golden Watch', amount: '$168', vendor: 'Julia Sunota', status: 'Completed', rating: 5.0 },
    { id: 3, item: 'Men Polo Tshirt', amount: '$124', vendor: 'Julia Sunota', status: 'Pending', rating: 4.0 },
    { id: 4, item: 'Blue Jeans Casual', amount: '$289', vendor: 'Julia Sunota', status: 'Completed', rating: 3.0 },
    { id: 5, item: 'Fancy Shirts', amount: '$389', vendor: 'Julia Sunota', status: 'Canceled', rating: 2.0 }
  ];

  const campaignStats = [
    { label: 'Campaigns', value: '54', change: '28%', positive: true, icon: 'calendar' },
    { label: 'Emailed', value: '245', change: '15%', positive: false, icon: 'email' },
    { label: 'Opened', value: '54', change: '30.5%', positive: true, icon: 'open' },
    { label: 'Clicked', value: '859', change: '34.6%', positive: false, icon: 'click' },
    { label: 'Subscribed', value: '24,758', change: '53%', positive: true, icon: 'subscribe' },
    { label: 'Spam Message', value: '548', change: '47%', positive: false, icon: 'spam' }
  ];

  const socialLeads = [
    { platform: 'Facebook', percentage: '55%', color: '#1877f2' },
    { platform: 'LinkedIn', percentage: '67%', color: '#0077b5' },
    { platform: 'Instagram', percentage: '78%', color: '#e4405f' },
    { platform: 'Snapchat', percentage: '46%', color: '#fffc00' },
    { platform: 'Google', percentage: '38%', color: '#4285f4' },
    { platform: 'Twitter', percentage: '15%', color: '#1da1f2' }
  ];

  const newUsers = [
    { name: 'Elon Jonado', username: 'elon_deo', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' },
    { name: 'Alexzender Clito', username: 'zli_alexzender', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' },
    { name: 'Michle Tinko', username: 'tinko_michle', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b832?w=50&h=50&fit=crop&crop=face' },
    { name: 'Kail Wemba', username: 'wemba_kl', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' },
    { name: 'Henhco Tino', username: 'Henhco_tino', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', submenu: ['Analysis', 'eCommerce'] },
    { id: 'apps', label: 'Apps & Pages', icon: 'apps', submenu: ['Email', 'Chat Box', 'File Manager', 'Todo', 'Invoice'] },
    { id: 'forms', label: 'Forms', icon: 'forms', submenu: ['Form Elements', 'Input Groups', 'Layouts', 'Validation'] },
    { id: 'tables', label: 'Tables', icon: 'tables', submenu: ['Basic Tables', 'Data Tables'] },
    { id: 'charts', label: 'Charts', icon: 'charts', submenu: ['Apex Charts', 'Chart.js'] },
    { id: 'widgets', label: 'Widgets', icon: 'widgets', submenu: ['Data Widgets', 'Static Widgets'] },
    { id: 'components', label: 'Components', icon: 'components', submenu: ['Alerts', 'Buttons', 'Cards', 'Modals'] }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      dashboard: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>,
      apps: <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>,
      forms: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>,
      tables: <path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-3h3v3zm0-5H5v-3h3v3zm0-5H5V6h3v3zm7 10h-5v-3h5v3zm0-5h-5v-3h5v3zm0-5h-5V6h5v3zm5 10h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3V6h3v3z"/>,
      charts: <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>,
      widgets: <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>,
      components: <path d="M12 2l3.09 6.26L22 9l-5.91.74L12 16l-4.09-6.26L2 9l6.91-.74z"/>,
      menu: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
      close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>,
      user: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>,
      calendar: <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>,
      email: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>,
      open: <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>,
      click: <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>,
      subscribe: <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>,
      spam: <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3h-2V7h2v7z"/>,
      search: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>,
      notifications: <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>,
      settings: <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.44,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    };
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {icons[iconName] || icons.dashboard}
      </svg>
    );
  };

  const renderMiniChart = (type, data) => {
    switch (type) {
      case 'line':
        return (
          <div className="mini-chart-line">
            <svg width="80" height="30" viewBox="0 0 80 30">
              <polyline 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                points="5,25 15,20 25,22 35,15 45,18 55,10 65,12 75,8"
              />
            </svg>
          </div>
        );
      case 'bar':
        return (
          <div className="mini-chart-bar">
            <svg width="80" height="30" viewBox="0 0 80 30">
              <rect x="5" y="20" width="8" height="8" fill="currentColor" opacity="0.7"/>
              <rect x="18" y="15" width="8" height="13" fill="currentColor" opacity="0.8"/>
              <rect x="31" y="10" width="8" height="18" fill="currentColor"/>
              <rect x="44" y="12" width="8" height="16" fill="currentColor" opacity="0.9"/>
              <rect x="57" y="8" width="8" height="20" fill="currentColor" opacity="0.6"/>
              <rect x="70" y="18" width="8" height="10" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
        );
      case 'donut':
        return (
          <div className="mini-chart-donut">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#e5e7eb" strokeWidth="6"/>
              <circle 
                cx="20" 
                cy="20" 
                r="15" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="6"
                strokeDasharray={`${data * 0.94} 94.2`}
                strokeDashoffset="23.55"
                transform="rotate(-90 20 20)"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSidebar = () => (
    <div className={`maxton-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#4f46e5">
              <path d="M12 2l3.09 6.26L22 9l-5.91.74L12 16l-4.09-6.26L2 9l6.91-.74z"/>
            </svg>
          </div>
          <div className="logo-text">
            <h4>Maxton</h4>
          </div>
        </div>
        <button 
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
        >
          {renderIcon('close')}
        </button>
      </div>
      
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <div key={item.id} className="nav-item">
              <button 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <div className="nav-icon">
                  {renderIcon(item.icon)}
                </div>
                <span className="nav-label">{item.label}</span>
                <div className="nav-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>
              </button>
              {item.submenu && (
                <div className="nav-submenu">
                  {item.submenu.map(subItem => (
                    <button key={subItem} className="nav-sublink">
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );

  const renderHeader = () => (
    <div className="maxton-header">
      <div className="header-left">
        <button 
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {renderIcon('menu')}
        </button>
        
        <div className="breadcrumb">
          <span>Dashboard</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
          <span>Analysis</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <div className="search-input">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  alert(`Searching for: ${searchValue}`);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        <button 
          className="header-btn notifications" 
          onClick={() => setNotificationsOpen(!notificationsOpen)}
        >
          {renderIcon('notifications')}
          <span className="notification-badge">5</span>
          
          {notificationsOpen && (
            <div className="notifications-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                <button onClick={() => setNotificationsOpen(false)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
              <div className="notification-item">
                <div className="notification-icon new">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="notification-content">
                  <p>New user registration completed</p>
                  <span>2 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon warning">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="notification-content">
                  <p>Server memory usage is at 85%</p>
                  <span>15 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon info">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <div className="notification-content">
                  <p>Weekly report is ready</p>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="notification-footer">
                <button onClick={() => { setActiveSection('notifications'); setNotificationsOpen(false); }}>
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </button>
        
        <button className="header-btn">
          {renderIcon('settings')}
        </button>
        
        <div className="user-profile" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="User"
            className="user-avatar"
          />
          <div className="user-info">
            <div className="user-name">John Anderson</div>
            <div className="user-role">Administrator</div>
          </div>
          <div className="profile-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
          
          {profileMenuOpen && (
            <div className="profile-dropdown">
              <div className="profile-menu-item" onClick={(e) => { e.stopPropagation(); setActiveSection('profile'); setProfileMenuOpen(false); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>View Profile</span>
              </div>
              <div className="profile-menu-item" onClick={(e) => { e.stopPropagation(); setActiveSection('settings'); setProfileMenuOpen(false); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.44,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                <span>Account Settings</span>
              </div>
              <div className="profile-menu-item" onClick={(e) => { e.stopPropagation(); setActiveSection('notifications'); setProfileMenuOpen(false); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
                <span>Notifications</span>
              </div>
              <div className="profile-menu-divider"></div>
              <div className="profile-menu-item logout" onClick={(e) => { e.stopPropagation(); alert('Logout clicked'); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
                <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfilePage();
      case 'settings':
        return renderSettingsPage();
      case 'notifications':
        return renderNotificationsPage();
      default:
        return renderDashboard();
    }
  };

  const renderProfilePage = () => (
    <div className="profile-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => setActiveSection('dashboard')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Dashboard
        </button>
        <h1>User Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
              alt="User"
              className="profile-avatar-large"
            />
            <div className="profile-info">
              <h2>John Anderson</h2>
              <p>Administrator</p>
              <span className="profile-badge">Premium User</span>
            </div>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
          
          <div className="profile-details">
            <div className="detail-row">
              <label>Email:</label>
              <span>john.anderson@company.com</span>
            </div>
            <div className="detail-row">
              <label>Phone:</label>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="detail-row">
              <label>Department:</label>
              <span>IT Administration</span>
            </div>
            <div className="detail-row">
              <label>Join Date:</label>
              <span>January 15, 2022</span>
            </div>
            <div className="detail-row">
              <label>Last Login:</label>
              <span>Today at 9:30 AM</span>
            </div>
          </div>
        </div>
        
        <div className="activity-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="activity-content">
                <p>Updated system settings</p>
                <span>2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="activity-content">
                <p>Generated monthly report</p>
                <span>1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsPage = () => (
    <div className="settings-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => setActiveSection('dashboard')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Dashboard
        </button>
        <h1>Account Settings</h1>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h3>Personal Information</h3>
          <div className="setting-item">
            <label>Display Name</label>
            <input type="text" defaultValue="John Anderson" />
          </div>
          <div className="setting-item">
            <label>Email Address</label>
            <input type="email" defaultValue="john.anderson@company.com" />
          </div>
          <div className="setting-item">
            <label>Phone Number</label>
            <input type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
        </div>
        
        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-item">
            <label>Theme</label>
            <select defaultValue="light">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Language</label>
            <select defaultValue="en">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="setting-item checkbox-item">
            <input type="checkbox" id="notifications" defaultChecked />
            <label htmlFor="notifications">Enable Email Notifications</label>
          </div>
          <div className="setting-item checkbox-item">
            <input type="checkbox" id="marketing" />
            <label htmlFor="marketing">Receive Marketing Emails</label>
          </div>
        </div>
        
        <div className="settings-section">
          <h3>Security</h3>
          <div className="setting-item">
            <label>Two-Factor Authentication</label>
            <button className="toggle-btn enabled">Enabled</button>
          </div>
          <div className="setting-item">
            <label>Password</label>
            <button className="change-password-btn">Change Password</button>
          </div>
        </div>
        
        <div className="settings-actions">
          <button className="save-btn">Save Changes</button>
          <button className="cancel-btn" onClick={() => setActiveSection('dashboard')}>Cancel</button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsPage = () => (
    <div className="notifications-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => setActiveSection('dashboard')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Dashboard
        </button>
        <h1>All Notifications</h1>
      </div>
      
      <div className="notifications-content">
        <div className="notifications-list">
          <div className="notification-item-large unread">
            <div className="notification-icon new">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="notification-content">
              <h4>New user registration completed</h4>
              <p>Sarah Johnson has successfully registered as a new user. Account verification pending.</p>
              <span>2 minutes ago</span>
            </div>
            <button className="mark-read-btn">Mark as Read</button>
          </div>
          
          <div className="notification-item-large unread">
            <div className="notification-icon warning">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
            </div>
            <div className="notification-content">
              <h4>Server memory usage is at 85%</h4>
              <p>Main server memory usage has reached critical levels. Consider scaling resources.</p>
              <span>15 minutes ago</span>
            </div>
            <button className="mark-read-btn">Mark as Read</button>
          </div>
          
          <div className="notification-item-large">
            <div className="notification-icon info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <div className="notification-content">
              <h4>Weekly report is ready</h4>
              <p>Your weekly analytics report has been generated and is ready for review.</p>
              <span>1 hour ago</span>
            </div>
            <button className="view-btn">View Report</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="dashboard-content">
      {renderWelcomeCard()}
      {renderAnalyticsCards()}
      {renderChartCards()}
      {renderBottomSection()}
    </div>
  );

  const renderWelcomeCard = () => (
    <div className="welcome-card">
      <div className="welcome-content">
        <div className="welcome-text">
          <div className="user-greeting">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="User"
              className="greeting-avatar"
            />
            <div>
              <p className="greeting-subtitle">Welcome back</p>
              <h2 className="greeting-title">John Anderson!</h2>
            </div>
          </div>
          
          <div className="stats-row">
            <div className="stat-item">
              <h3>${analytics.todaysSales.value}</h3>
              <p>Today's Sales</p>
              <div className="progress-bar">
                <div className="progress-fill sales" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>{analytics.growthRate.value}</h3>
              <p>Growth Rate</p>
              <div className="progress-bar">
                <div className="progress-fill growth" style={{width: '78%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="welcome-image">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
            alt="Welcome"
          />
        </div>
      </div>
    </div>
  );

  const renderAnalyticsCards = () => (
    <div className="analytics-grid">
      <div className="analytics-card">
        <div className="card-header">
          <div className="card-info">
            <h3>{analytics.activeUsers.value}</h3>
            <p>{analytics.activeUsers.label}</p>
          </div>
          <button className="card-menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div className="card-chart">
          {renderMiniChart('line', 42.5)}
        </div>
        <div className="card-footer">
          <span className="growth-text">24K users increased from last month</span>
        </div>
      </div>

      <div className="analytics-card">
        <div className="card-header">
          <div className="card-info">
            <h3>{analytics.totalUsers.value}</h3>
            <p>{analytics.totalUsers.label}</p>
          </div>
          <button className="card-menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div className="card-chart">
          {renderMiniChart('bar', 97.4)}
        </div>
        <div className="card-footer">
          <span className="growth-text positive">12.5% from last month</span>
        </div>
      </div>

      <div className="analytics-card">
        <div className="card-header">
          <div className="card-info">
            <h3>{analytics.totalClicks.value}</h3>
            <p>{analytics.totalClicks.label}</p>
          </div>
          <button className="card-menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div className="card-chart">
          {renderMiniChart('line', 82.7)}
        </div>
        <div className="card-footer">
          <span className="growth-text positive">12.5% from last month</span>
        </div>
      </div>

      <div className="analytics-card">
        <div className="card-header">
          <div className="card-info">
            <h3>{analytics.totalViews.value}</h3>
            <p>{analytics.totalViews.label}</p>
          </div>
          <button className="card-menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div className="card-chart">
          {renderMiniChart('bar', 68.4)}
        </div>
        <div className="card-footer">
          <span className="growth-text">35K users increased from last month</span>
        </div>
      </div>
    </div>
  );

  const renderChartCards = () => (
    <div className="chart-cards">
      <div className="chart-card revenue-card">
        <div className="card-header">
          <h3>Monthly Revenue</h3>
        </div>
        <div className="revenue-chart">
          <svg width="100%" height="150" viewBox="0 0 300 150">
            <rect x="20" y="120" width="15" height="25" fill="#3b82f6" opacity="0.8"/>
            <rect x="40" y="100" width="15" height="45" fill="#3b82f6" opacity="0.9"/>
            <rect x="60" y="80" width="15" height="65" fill="#3b82f6"/>
            <rect x="80" y="90" width="15" height="55" fill="#3b82f6" opacity="0.7"/>
            <rect x="100" y="70" width="15" height="75" fill="#3b82f6" opacity="0.8"/>
            <rect x="120" y="85" width="15" height="60" fill="#3b82f6" opacity="0.9"/>
            <rect x="140" y="95" width="15" height="50" fill="#3b82f6" opacity="0.6"/>
            <rect x="160" y="75" width="15" height="70" fill="#3b82f6" opacity="0.8"/>
            <rect x="180" y="110" width="15" height="35" fill="#3b82f6" opacity="0.7"/>
            <rect x="200" y="105" width="15" height="40" fill="#3b82f6" opacity="0.9"/>
            <rect x="220" y="90" width="15" height="55" fill="#3b82f6" opacity="0.8"/>
            <rect x="240" y="100" width="15" height="45" fill="#3b82f6" opacity="0.6"/>
          </svg>
        </div>
        <p>Average monthly sale for every author</p>
        <div className="revenue-stats">
          <div className="stat-large">
            <span className="stat-number">68.9%</span>
          </div>
          <div className="stat-growth positive">
            <span>34.5%</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="chart-card device-card">
        <div className="card-header">
          <h3>Device Type</h3>
          <button className="card-menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        
        <div className="device-chart">
          <div className="donut-chart">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10"/>
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="10"
                strokeDasharray="96 282"
                strokeDashoffset="70"
                transform="rotate(-90 60 60)"
              />
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="10"
                strokeDasharray="135 282"
                strokeDashoffset="-26"
                transform="rotate(-90 60 60)"
              />
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="10"
                strokeDasharray="76 282"
                strokeDashoffset="-161"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="donut-center">
              <div className="donut-percentage">68%</div>
              <div className="donut-label">Total Views</div>
            </div>
          </div>
        </div>
        
        <div className="device-stats">
          <div className="device-stat">
            <div className="device-icon desktop">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM21 14H3V4h18v10z"/>
              </svg>
            </div>
            <span className="device-name">Desktop</span>
            <span className="device-percentage">35%</span>
          </div>
          <div className="device-stat">
            <div className="device-icon tablet">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 18H5V6h14v12zM21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <span className="device-name">Tablet</span>
            <span className="device-percentage">48%</span>
          </div>
          <div className="device-stat">
            <div className="device-icon mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </div>
            <span className="device-name">Mobile</span>
            <span className="device-percentage">27%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBottomSection = () => (
    <div className="bottom-section">
      <div className="bottom-left">
        <div className="accounts-card">
          <div className="card-content">
            <div className="accounts-header">
              <div className="accounts-stats">
                <h2>85,247</h2>
                <div className="accounts-growth negative">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                  <span>23.7%</span>
                </div>
              </div>
              <p>Total Accounts</p>
            </div>
            <div className="accounts-chart">
              <svg width="100%" height="60" viewBox="0 0 300 60">
                <path 
                  d="M10,45 Q50,35 90,40 T170,30 Q210,25 250,35 T290,30" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth="3"
                  opacity="0.8"
                />
                <path 
                  d="M10,45 Q50,35 90,40 T170,30 Q210,25 250,35 T290,30 L290,55 L10,55 Z" 
                  fill="url(#accountsGradient)" 
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="accountsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="orders-table">
          <div className="table-header">
            <h3>Recent Orders</h3>
            <button className="table-menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          
          <div className="table-search">
            <div className="search-input">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          
          <div className="table-content">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Amount</th>
                  <th>Vendor</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <div className="item-cell">
                        <div className="item-image">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="#e5e7eb">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span>{order.item}</span>
                      </div>
                    </td>
                    <td>{order.amount}</td>
                    <td>{order.vendor}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="rating-cell">
                        <span>{order.rating}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                          <path d="M12 2l3.09 6.26L22 9l-5.91.74L12 16l-4.09-6.26L2 9l6.91-.74z"/>
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bottom-right">
        <div className="campaign-stats">
          <div className="card-header">
            <h3>Campaign Stats</h3>
            <button className="card-menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          
          <div className="campaign-list">
            {campaignStats.map((stat, index) => (
              <div key={index} className="campaign-item">
                <div className="campaign-icon">
                  {renderIcon(stat.icon)}
                </div>
                <div className="campaign-info">
                  <h4>{stat.label}</h4>
                </div>
                <div className="campaign-stats-right">
                  <span className="campaign-value">{stat.value}</span>
                  <span className={`campaign-change ${stat.positive ? 'positive' : 'negative'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="social-leads">
          <div className="card-header">
            <h3>Social Leads</h3>
            <button className="card-menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          
          <div className="social-list">
            {socialLeads.map((social, index) => (
              <div key={index} className="social-item">
                <div className="social-info">
                  <div className="social-icon" style={{backgroundColor: social.color}}>
                    <span>{social.platform.charAt(0)}</span>
                  </div>
                  <span className="social-name">{social.platform}</span>
                </div>
                <div className="social-stats">
                  <span className="social-percentage">{social.percentage}</span>
                  <div className="social-chart">
                    {renderMiniChart('donut', parseInt(social.percentage))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="new-users">
          <div className="card-header">
            <h3>New Users</h3>
            <button className="card-menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
          
          <div className="users-list">
            {newUsers.map((user, index) => (
              <div key={index} className="user-item">
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.username}</p>
                </div>
                <div className="user-actions">
                  <input type="checkbox" className="user-checkbox" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="users-footer">
            <div className="social-actions">
              <button className="social-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
              <button className="social-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
              <button className="social-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
                </svg>
              </button>
              <button className="social-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="maxton-admin">
      {renderSidebar()}
      
      <div className={`maxton-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {renderHeader()}
        
        <div className="maxton-content">
          <div className="content-wrapper">
            {renderContent()}
          </div>
        </div>
      </div>
      
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      
      {(profileMenuOpen || notificationsOpen) && (
        <div 
          className="dropdown-overlay" 
          onClick={() => {
            setProfileMenuOpen(false);
            setNotificationsOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Maxton;