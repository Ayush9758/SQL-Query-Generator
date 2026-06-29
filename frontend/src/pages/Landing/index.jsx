import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: '🔮',
    title: 'Natural Language to SQL',
    desc: 'Simply describe your data needs in plain English and watch as the cosmos transforms your words into precise SQL queries.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast Generation',
    desc: 'Powered by GPT-4 and optimized through the celestial pathways of our cosmic architecture.',
  },
  {
    icon: '🌌',
    title: 'Query History & Analytics',
    desc: 'Every query is stored in the cosmic ledger. Browse, replay, and analyze your query journey through time.',
  },
  {
    icon: '🛸',
    title: 'Multi-Database Support',
    desc: 'Compatible across dimensions — PostgreSQL, MySQL, SQLite and MongoDB, all unified under one roof.',
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Landing Nav */}
      <nav className="landing-nav">
        <span className="nav-logo">✨ CosmicSQL</span>
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate('/playground')}>Playground</button>
          <button className="nav-link" onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className="btn-cosmic" onClick={() => navigate('/playground')} style={{ padding: '8px 20px', fontSize: '13px' }}>
            Launch App →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero" style={{ paddingTop: '120px' }}>
        {/* Orbit decoration */}
        <div className="orbit-container" style={{ width: 0, height: 0 }}>
          <div className="orbit-dot orbit-dot-1" />
          <div className="orbit-dot orbit-dot-2" />
        </div>

        <div className="hero-badge animate-float">
          <span>🚀</span>
          AI-Powered · Cosmic Theme · Production Ready
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">Forge SQL</span>
          <br />
          <span style={{ color: 'var(--text-primary)' }}>from the Stars</span>
        </h1>

        <p className="hero-subtitle">
          Describe your data in plain English. Our cosmic AI transmutes your thoughts into 
          precise, optimized SQL — instantly, effortlessly, magically.
        </p>

        <div className="hero-buttons">
          <button className="btn-cosmic" onClick={() => navigate('/playground')} style={{ fontSize: '16px', padding: '14px 36px' }}>
            <span>🔮</span> Open Playground
          </button>
          <button className="btn-outline" onClick={() => navigate('/dashboard')}>
            <span>⚡</span> View Dashboard
          </button>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
