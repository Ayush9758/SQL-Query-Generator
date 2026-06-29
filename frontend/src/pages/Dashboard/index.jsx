import React from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { icon: '🔮', value: '1,248', label: 'Queries Generated' },
  { icon: '⚡', value: '98.7%', label: 'Success Rate' },
  { icon: '⏱️', value: '1.2s', label: 'Avg Response Time' },
  { icon: '🌌', value: '42', label: 'Today\'s Queries' },
];

const recentQueries = [
  { prompt: 'Top 5 customers by revenue', time: '2 min ago', status: 'success' },
  { prompt: 'Orders pending more than 7 days', time: '15 min ago', status: 'success' },
  { prompt: 'Users who never placed an order', time: '1 hour ago', status: 'success' },
  { prompt: 'Monthly sales grouped by region', time: '3 hours ago', status: 'success' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="section-header animate-fade-in-up">
        <h1 className="section-title gradient-text">⚡ Mission Control</h1>
        <p className="section-subtitle">Your cosmic SQL command center — overview at a glance.</p>
      </div>

      {/* Stats */}
      <div className="dashboard-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Action */}
      <div
        className="glass-card"
        style={{ padding: '28px', marginBottom: '24px', cursor: 'pointer' }}
        onClick={() => navigate('/playground')}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              🔮 Generate a New SQL Query
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(165,180,252,0.6)' }}>
              Open the Playground and start weaving SQL from natural language
            </div>
          </div>
          <div style={{
            width: '48px', height: '48px',
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            →
          </div>
        </div>
      </div>

      {/* Recent Queries */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>📜</span> Recent Queries
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recentQueries.map((q, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 16px',
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.12)',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.12)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>✦</span>
                <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{q.prompt}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(165,180,252,0.5)' }}>{q.time}</span>
                <span style={{
                  fontSize: '11px', padding: '3px 10px',
                  background: 'rgba(16,185,129,0.15)', color: '#6ee7b7',
                  borderRadius: '20px', border: '1px solid rgba(16,185,129,0.25)',
                }}>
                  ✓ {q.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
