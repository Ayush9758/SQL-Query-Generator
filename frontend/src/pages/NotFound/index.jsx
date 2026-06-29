import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '40px',
    }}>
      <div style={{
        fontSize: '100px', marginBottom: '24px',
        animation: 'float 4s ease-in-out infinite',
      }}>🌌</div>
      <h1 style={{ fontSize: '72px', fontWeight: 900, marginBottom: '16px' }} className="gradient-text">404</h1>
      <p style={{ fontSize: '20px', color: 'rgba(165,180,252,0.7)', marginBottom: '8px' }}>
        Lost in the cosmos...
      </p>
      <p style={{ fontSize: '14px', color: 'rgba(165,180,252,0.4)', marginBottom: '36px' }}>
        The page you seek has drifted beyond the event horizon.
      </p>
      <button className="btn-cosmic" onClick={() => navigate('/')} style={{ padding: '14px 36px' }}>
        🚀 Return to Origin
      </button>
    </div>
  );
};

export default NotFound;
