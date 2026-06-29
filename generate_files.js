const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

const files = [
  // Components
  ...[
    'Navbar', 'Sidebar', 'Footer', 'Loader', 'Buttons', 'Cards', 'Charts', 
    'SQLViewer', 'QueryVisualizer', 'TableViewer', 'QueryInput', 
    'SchemaViewer', 'HistoryCard', 'ProfileCard'
  ].map(name => ({
    path: `components/${name}/index.jsx`,
    content: `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    <div>\n      ${name} Component\n    </div>\n  );\n};\n\nexport default ${name};\n`
  })),

  // Pages
  ...[
    'Landing', 'Login', 'Register', 'Dashboard', 'Playground', 
    'History', 'Analytics', 'Profile', 'Settings', 'NotFound'
  ].map(name => ({
    path: `pages/${name}/index.jsx`,
    content: `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    <div className="p-4">\n      <h1 className="text-2xl font-bold">${name} Page</h1>\n    </div>\n  );\n};\n\nexport default ${name};\n`
  })),

  // Services
  ...[
    'auth.service.js', 'ai.service.js', 'history.service.js', 'analytics.service.js'
  ].map(name => ({
    path: `services/${name}`,
    content: `import axiosInstance from './axios';\n\nexport const exampleRequest = async () => {\n  const response = await axiosInstance.get('/example');\n  return response.data;\n};\n`
  })),
  {
    path: 'services/axios.js',
    content: `import axios from 'axios';\n\nconst axiosInstance = axios.create({\n  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});\n\nexport default axiosInstance;\n`
  },

  // Others
  { path: 'context/index.jsx', content: `export const AppContext = {};` },
  { path: 'hooks/index.js', content: `export const useExample = () => {};` },
  { path: 'utils/index.js', content: `export const formatDate = (date) => new Date(date).toLocaleDateString();` },
  { path: 'constants/index.js', content: `export const API_URL = import.meta.env.VITE_API_URL;` },

  // Public Assets
  { path: '../public/robots.txt', content: `User-agent: *\nDisallow:` },
];

files.forEach(file => {
  const fullPath = path.join(srcDir, file.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, file.content);
});

console.log('All files generated successfully.');
