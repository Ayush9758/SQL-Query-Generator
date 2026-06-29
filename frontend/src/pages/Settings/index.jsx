import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('cosmic');
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="section-header animate-fade-in-up">
        <h1 className="section-title gradient-text">⚙️ Settings</h1>
        <p className="section-subtitle">Configure your cosmic workspace to match your needs.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Theme */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>🎨 Appearance</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['cosmic', 'nebula', 'void'].map((t) => (
              <div
                key={t}
                onClick={() => setTheme(t)}
                style={{
                  padding: '14px 24px',
                  border: `1px solid ${theme === t ? 'rgba(124,58,237,0.6)' : 'rgba(124,58,237,0.15)'}`,
                  borderRadius: '12px',
                  background: theme === t ? 'rgba(124,58,237,0.2)' : 'transparent',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  fontWeight: theme === t ? 600 : 400,
                  transition: 'all 0.2s ease',
                  color: theme === t ? 'white' : 'rgba(165,180,252,0.6)',
                  boxShadow: theme === t ? '0 0 15px rgba(124,58,237,0.3)' : 'none',
                }}
              >
                {t === 'cosmic' ? '✨' : t === 'nebula' ? '🌌' : '🌑'} {t}
              </div>
            ))}
          </div>
        </div>

        {/* AI Model */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>🤖 AI Model</div>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={{
              width: '100%', maxWidth: '360px',
              background: 'rgba(12,12,34,0.8)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              padding: '12px 16px',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo (Fast)</option>
            <option value="gpt-4">GPT-4 (Precise)</option>
            <option value="gpt-4-turbo">GPT-4 Turbo (Recommended)</option>
          </select>
        </div>

        {/* API Key */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>🔑 API Configuration</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'OpenAI API Key', placeholder: 'sk-proj-...' },
              { label: 'MongoDB URI', placeholder: 'mongodb+srv://...' },
            ].map((f, i) => (
              <div key={i}>
                <label style={{ fontSize: '13px', color: 'rgba(165,180,252,0.6)', display: 'block', marginBottom: '8px' }}>{f.label}</label>
                <input
                  type="password"
                  placeholder={f.placeholder}
                  className="cosmic-input"
                  style={{ maxWidth: '480px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div>
          <button className="btn-cosmic" onClick={handleSave}>
            {saved ? '✅ Saved!' : '💾 Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
