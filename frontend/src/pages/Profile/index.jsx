import React from 'react';

const Profile = () => (
  <div>
    <div className="section-header animate-fade-in-up">
      <h1 className="section-title gradient-text">👤 Astral Profile</h1>
      <p className="section-subtitle">Your identity in the cosmic SQL realm.</p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
      {/* Avatar Card */}
      <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
        <div style={{
          width: '96px', height: '96px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '42px', margin: '0 auto 20px',
          boxShadow: '0 0 30px rgba(124,58,237,0.5)',
          animation: 'float 4s ease-in-out infinite',
        }}>🧑‍🚀</div>
        <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Cosmic Explorer</div>
        <div style={{ fontSize: '13px', color: 'rgba(165,180,252,0.6)', marginBottom: '20px' }}>SQL Architect · Level 42</div>
        <div style={{
          padding: '6px 16px',
          background: 'rgba(124,58,237,0.15)',
          border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: '20px',
          fontSize: '12px', color: 'var(--purple-light)',
          display: 'inline-block',
        }}>
          ✨ Pro Member
        </div>
      </div>

      {/* Details */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>✦ Account Details</div>
        {[
          { label: 'Full Name', value: 'Cosmic Explorer', icon: '👤' },
          { label: 'Email', value: 'explorer@cosmicsql.ai', icon: '📧' },
          { label: 'Member Since', value: 'January 2024', icon: '📅' },
          { label: 'Queries Generated', value: '1,248', icon: '🔮' },
          { label: 'Preferred DB', value: 'PostgreSQL', icon: '🗄️' },
          { label: 'API Usage', value: '4,820 / 10,000 tokens', icon: '⚡' },
        ].map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            padding: '14px 0',
            borderBottom: i < 5 ? '1px solid rgba(124,58,237,0.1)' : 'none',
          }}>
            <span style={{ fontSize: '18px', width: '24px' }}>{f.icon}</span>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(165,180,252,0.5)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{f.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Profile;
