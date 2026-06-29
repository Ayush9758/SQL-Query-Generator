import React from 'react';

const bars = [42, 78, 55, 91, 63, 87, 74, 96, 58, 83, 70, 88];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Analytics = () => {
  return (
    <div>
      <div className="section-header animate-fade-in-up">
        <h1 className="section-title gradient-text">📊 Cosmic Analytics</h1>
        <p className="section-subtitle">Gaze into the orb — your query data visualized across the cosmos.</p>
      </div>

      {/* Summary Stats */}
      <div className="dashboard-grid" style={{ marginBottom: '28px' }}>
        {[
          { icon: '🔮', label: 'Total Queries', value: '1,248' },
          { icon: '📈', label: 'This Month', value: '+184' },
          { icon: '⚡', label: 'Avg Daily', value: '41' },
          { icon: '🌟', label: 'Top DB', value: 'PostgreSQL' },
        ].map((s, i) => (
          <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="glass-card" style={{ padding: '28px', marginBottom: '24px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>
          ✦ Queries per Month (2024)
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '160px' }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
              <div
                style={{
                  width: '100%',
                  height: `${h}%`,
                  background: 'linear-gradient(to top, #7c3aed, #3b82f6)',
                  borderRadius: '6px 6px 0 0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  cursor: 'default',
                  opacity: 0.85,
                  boxShadow: '0 0 10px rgba(124,58,237,0.4)',
                }}
                onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.boxShadow = '0 0 20px rgba(124,58,237,0.8)'; }}
                onMouseLeave={e => { e.target.style.opacity = 0.85; e.target.style.boxShadow = '0 0 10px rgba(124,58,237,0.4)'; }}
                title={`${h} queries`}
              />
              <span style={{ fontSize: '11px', color: 'rgba(165,180,252,0.5)' }}>{months[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>
          ✦ Query Type Distribution
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: 'SELECT', pct: 68, color: '#7c3aed' },
            { label: 'INSERT/UPDATE', pct: 18, color: '#3b82f6' },
            { label: 'DELETE', pct: 8, color: '#ec4899' },
            { label: 'CREATE/ALTER', pct: 6, color: '#06b6d4' },
          ].map((r, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{r.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: r.color }}>{r.pct}%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${r.pct}%`,
                  background: `linear-gradient(90deg, ${r.color}, ${r.color}88)`,
                  borderRadius: '4px',
                  boxShadow: `0 0 8px ${r.color}`,
                  transition: 'width 1s ease',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
