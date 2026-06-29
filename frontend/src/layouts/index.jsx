import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: '⚡', label: 'Dashboard' },
  { to: '/playground', icon: '🔮', label: 'Playground' },
  { to: '/history', icon: '📜', label: 'History' },
  { to: '/analytics', icon: '📊', label: 'Analytics' },
  { to: '/profile', icon: '👤', label: 'Profile' },
  { to: '/settings', icon: '⚙️', label: 'Settings' },
];

const MainLayout = () => {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">✨</div>
          <span className="sidebar-logo-text">CosmicSQL</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ borderTop: '1px solid rgba(120,80,255,0.2)', paddingTop: '20px', marginTop: '20px' }}>
          <NavLink to="/" className="sidebar-link">
            <span className="icon">🌌</span>
            Home
          </NavLink>
        </div>
      </aside>

      {/* Main Area */}
      <div className="main-content">
        {/* Top Nav */}
        <header className="topnav">
          <span className="topnav-title gradient-text">AI SQL Generator</span>
          <div className="topnav-right">
            <div className="status-badge">
              <div className="status-dot" />
              Server Online
            </div>
          </div>
        </header>

        {/* Page */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
