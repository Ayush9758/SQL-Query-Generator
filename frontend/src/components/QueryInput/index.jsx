import React from 'react';
import { Send, Loader2 } from 'lucide-react';

const QueryInput = ({ onSubmit, loading }) => {
  const [prompt, setPrompt] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent transition-all">
        <textarea
          className="flex-1 p-4 outline-none resize-none h-32 text-gray-700"
          placeholder="E.g., Find the top 5 customers by revenue in 2023..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <div className="p-4 flex self-end">
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center shadow-lg"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QueryInput;
