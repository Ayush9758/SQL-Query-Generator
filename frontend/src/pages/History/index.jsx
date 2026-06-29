import React from 'react';

const historyItems = [
  { id: 1, prompt: 'Get all users who signed up in the last 30 days', sql: 'SELECT * FROM users WHERE created_at >= NOW() - INTERVAL 30 DAY;', time: '2 min ago', db: 'MySQL' },
  { id: 2, prompt: 'Top 10 products by total sales', sql: 'SELECT p.name, SUM(oi.quantity) as total FROM products p JOIN order_items oi ON p.id = oi.product_id GROUP BY p.id ORDER BY total DESC LIMIT 10;', time: '1 hour ago', db: 'PostgreSQL' },
  { id: 3, prompt: 'Find customers who never placed an order', sql: 'SELECT * FROM customers WHERE id NOT IN (SELECT customer_id FROM orders);', time: '3 hours ago', db: 'MySQL' },
  { id: 4, prompt: 'Monthly revenue for 2024', sql: 'SELECT MONTH(order_date) as month, SUM(total) as revenue FROM orders WHERE YEAR(order_date) = 2024 GROUP BY MONTH(order_date);', time: 'Yesterday', db: 'PostgreSQL' },
  { id: 5, prompt: 'All pending orders older than a week', sql: 'SELECT * FROM orders WHERE status = \'pending\' AND created_at < NOW() - INTERVAL 7 DAY;', time: '2 days ago', db: 'MySQL' },
];

const History = () => {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <div>
      <div className="section-header animate-fade-in-up">
        <h1 className="section-title gradient-text">📜 Query History</h1>
        <p className="section-subtitle">Your ancient scrolls — every query you've ever summoned from the cosmos.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {historyItems.map((item, i) => (
          <div
            key={item.id}
            className="glass-card"
            style={{ padding: '20px 24px', cursor: 'pointer', animationDelay: `${i * 0.05}s` }}
            onClick={() => setExpanded(expanded === item.id ? null : item.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '16px' }}>✦</span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.prompt}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', paddingLeft: '26px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(165,180,252,0.5)' }}>⏱ {item.time}</span>
                  <span style={{
                    fontSize: '11px', padding: '2px 8px',
                    background: 'rgba(59,130,246,0.15)', color: '#93c5fd',
                    borderRadius: '10px', border: '1px solid rgba(59,130,246,0.25)',
                  }}>
                    {item.db}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: '18px', color: 'rgba(165,180,252,0.5)',
                transform: expanded === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}>
                ▾
              </span>
            </div>

            {expanded === item.id && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: 'rgba(4,4,20,0.8)',
                  borderRadius: '10px',
                  border: '1px solid rgba(124,58,237,0.2)',
                  animation: 'fade-in 0.3s ease',
                }}
              >
                <pre style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  color: '#c4b5fd',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>
                  {item.sql}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
