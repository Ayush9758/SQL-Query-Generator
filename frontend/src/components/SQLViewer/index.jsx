import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const SQLViewer = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-gray-400 font-mono text-sm">Generated SQL</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-purple-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default SQLViewer;
