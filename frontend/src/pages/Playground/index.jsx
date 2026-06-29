import React, { useState } from 'react';
import { generateSQL } from '../../services/ai.service';

// Basic SQL syntax highlighter
function highlightSQL(sql) {
  const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER',
    'ON', 'AS', 'AND', 'OR', 'NOT', 'IN', 'LIKE', 'IS', 'NULL', 'ORDER', 'BY', 'GROUP',
    'HAVING', 'LIMIT', 'OFFSET', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
    'CREATE', 'TABLE', 'DROP', 'ALTER', 'INDEX', 'DISTINCT', 'COUNT', 'SUM', 'AVG',
    'MAX', 'MIN', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'UNION', 'ALL', 'WITH', 'TOP'];

  const parts = sql.split(/(\s+|[(),;])/);
  return parts.map((part, i) => {
    if (keywords.includes(part.toUpperCase())) {
      return <span key={i} style={{ color: '#60a5fa', fontWeight: 600 }}>{part}</span>;
    }
    if (/^'.*'$/.test(part) || /^".*"$/.test(part)) {
      return <span key={i} style={{ color: '#86efac' }}>{part}</span>;
    }
    if (/^\d+$/.test(part)) {
      return <span key={i} style={{ color: '#fb923c' }}>{part}</span>;
    }
    return <span key={i} style={{ color: '#c4b5fd' }}>{part}</span>;
  });
}

const EXAMPLE_PROMPTS = [
  'Get all users who signed up in the last 30 days',
  'Show the top 10 products by sales revenue',
  'Find all orders that are pending and older than 7 days',
  'Count employees grouped by department and city',
];

const Playground = () => {
  const [prompt, setPrompt] = useState('');
  const [sql, setSql] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError('');
    setSql('');

    try {
      const response = await generateSQL(prompt);
      if (response.success) {
        setSql(response.data.query);
      } else {
        setError(response.error || 'An unknown cosmic disturbance occurred.');
      }
    } catch (err) {
      setError(typeof err === 'string' ? err : err.message || 'Failed to reach the cosmic server.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {/* Header */}
      <div className="playground-header">
        <h1 className="playground-title gradient-text">🔮 SQL Playground</h1>
        <p className="playground-subtitle">
          Channel your natural language into the cosmos to forge raw SQL.&nbsp;
          Press <kbd style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', padding: '2px 7px', borderRadius: '5px', fontSize: '12px' }}>Ctrl+Enter</kbd> to generate.
        </p>
      </div>

      {/* Example Prompts */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {EXAMPLE_PROMPTS.map((p, i) => (
          <button
            key={i}
            onClick={() => setPrompt(p)}
            style={{
              padding: '6px 14px',
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: '20px',
              color: 'rgba(165,180,252,0.8)',
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(124,58,237,0.25)'; e.target.style.color = 'white'; }}
            onMouseLeave={e => { e.target.style.background = 'rgba(124,58,237,0.1)'; e.target.style.color = 'rgba(165,180,252,0.8)'; }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Query Input Box */}
      <div className="query-box">
        <textarea
          className="cosmic-input"
          style={{ border: 'none', padding: 0, background: 'transparent', fontSize: '16px' }}
          placeholder="E.g., Show me all customers who spent more than $1000 last quarter..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={5}
          disabled={loading}
        />
        <div className="query-box-footer">
          <span className="query-hint">💡 Tip: Be specific about table names and conditions for best results.</span>
          <button
            className="btn-generate"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? (
              <>
                <div className="spinner" />
                Channeling cosmos...
              </>
            ) : (
              <>
                <span>✨</span>
                Generate SQL
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="result-panel">
          <div className="loading-overlay">
            <div className="cosmic-loader" />
            <p className="loading-text">The cosmic AI is weaving your query from the stars...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-box">
          <span style={{ fontSize: '20px' }}>💥</span>
          <div>
            <strong style={{ display: 'block', marginBottom: '4px' }}>Cosmic Disturbance Detected</strong>
            {error}
          </div>
        </div>
      )}

      {/* SQL Result */}
      {sql && !loading && (
        <div className="result-panel">
          <div className="result-panel-header">
            <div className="result-panel-title">
              <div className="result-dot" />
              Generated SQL
            </div>
            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>
          </div>
          <div className="sql-code">
            {highlightSQL(sql)}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!sql && !loading && !error && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'rgba(165,180,252,0.3)',
        }}>
          <div style={{ fontSize: '64px', marginBottom: '16px', animation: 'float 4s ease-in-out infinite' }}>🌌</div>
          <p style={{ fontSize: '16px' }}>Your SQL query will appear here, forged from the cosmos.</p>
        </div>
      )}
    </div>
  );
};

export default Playground;
