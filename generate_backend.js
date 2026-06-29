const fs = require('fs');
const path = require('path');

const backendDir = path.join(__dirname, 'backend');
const srcDir = path.join(backendDir, 'src');

const files = [
  // Config
  { path: 'config/database.js', content: `// Connect to the Cosmic Database (MongoDB)\nmodule.exports = {};\n` },
  { path: 'config/sqlDatabase.js', content: `// Connect to the Astral Relational Database\nmodule.exports = {};\n` },
  { path: 'config/openai.js', content: `// OpenAI Client Setup\nmodule.exports = {};\n` },
  { path: 'config/redis.js', content: `// Redis Cache (The ethereal memory)\nmodule.exports = {};\n` },
  { path: 'config/cloudinary.js', content: `// Cloudinary Config\nmodule.exports = {};\n` },

  // Controllers
  { path: 'controllers/auth.controller.js', content: `exports.register = async (req, res) => { res.send('Awaken new user'); };\n` },
  { path: 'controllers/ai.controller.js', content: `exports.generateSQL = async (req, res) => { res.send('Channeling the cosmos to generate SQL'); };\n` },
  { path: 'controllers/history.controller.js', content: `exports.getHistory = async (req, res) => { res.send('Reading the ancient scrolls of history'); };\n` },
  { path: 'controllers/analytics.controller.js', content: `exports.getAnalytics = async (req, res) => { res.send('Gazing into the analytics orb'); };\n` },
  { path: 'controllers/profile.controller.js', content: `exports.getProfile = async (req, res) => { res.send('Viewing the astral profile'); };\n` },
  { path: 'controllers/visualization.controller.js', content: `exports.visualize = async (req, res) => { res.send('Manifesting data into visions'); };\n` },

  // Services
  { path: 'services/openai.service.js', content: `// Prompt Engineering Service\nmodule.exports = {};\n` },
  { path: 'services/sql.service.js', content: `// Execute SQL Service\nmodule.exports = {};\n` },
  { path: 'services/explain.service.js', content: `// EXPLAIN QUERY PLAN Service\nmodule.exports = {};\n` },
  { path: 'services/visualization.service.js', content: `// Random Dataset Generator Service\nmodule.exports = {};\n` },
  { path: 'services/chart.service.js', content: `// Graph Data Service\nmodule.exports = {};\n` },
  { path: 'services/optimization.service.js', content: `// SQL Optimization Service\nmodule.exports = {};\n` },

  // Middleware
  { path: 'middleware/auth.middleware.js', content: `// Authenticate the cosmic wanderer\nmodule.exports = (req, res, next) => next();\n` },
  { path: 'middleware/validation.middleware.js', content: `// Validate incoming astral projections\nmodule.exports = (req, res, next) => next();\n` },
  { path: 'middleware/error.middleware.js', content: `// Handle cosmic disturbances\nmodule.exports = (err, req, res, next) => res.status(500).send('A disruption in the space-time continuum occurred.');\n` },
  { path: 'middleware/rateLimiter.js', content: `// Limit the flow of magical energy\nmodule.exports = (req, res, next) => next();\n` },
  { path: 'middleware/logger.js', content: `// Log events into the Akashic records\nmodule.exports = (req, res, next) => next();\n` },

  // Models
  { path: 'models/User.js', content: `// User Schema\nmodule.exports = {};\n` },
  { path: 'models/QueryHistory.js', content: `// QueryHistory Schema\nmodule.exports = {};\n` },
  { path: 'models/PromptHistory.js', content: `// PromptHistory Schema\nmodule.exports = {};\n` },
  { path: 'models/Feedback.js', content: `// Feedback Schema\nmodule.exports = {};\n` },
  { path: 'models/APIUsage.js', content: `// APIUsage Schema\nmodule.exports = {};\n` },

  // Routes
  { path: 'routes/auth.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },
  { path: 'routes/ai.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },
  { path: 'routes/history.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },
  { path: 'routes/analytics.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },
  { path: 'routes/profile.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },
  { path: 'routes/visualization.routes.js', content: `const express = require('express');\nconst router = express.Router();\nmodule.exports = router;\n` },

  // Prompts
  { path: 'prompts/systemPrompt.js', content: `// SQL Generator Prompt\nmodule.exports = "You are a cosmic entity of immense knowledge, weaving SQL queries from the fabric of natural language...";\n` },
  { path: 'prompts/optimizationPrompt.js', content: `// Query Optimizer\nmodule.exports = "Optimize this spell (query) to run with the speed of starlight...";\n` },
  { path: 'prompts/explanationPrompt.js', content: `// SQL Explanation\nmodule.exports = "Unveil the mysteries of this query, explaining it to the mortals...";\n` },

  // Entry Points
  { path: 'app.js', content: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.get('/', (req, res) => res.send('Welcome to the Cosmic API Gateway'));\n\nmodule.exports = app;\n` },
  { path: 'server.js', content: `const app = require('./app');\nconst PORT = process.env.PORT || 5000;\n\napp.listen(PORT, () => {\n  console.log(\`✨ The Cosmic Server has awakened on port \${PORT} ✨\`);\n});\n` }
];

// Empty directories
const emptyDirs = [
  'src/validators', 'src/helpers', 'src/utils', 'src/docs',
  'uploads', 'logs', 'tests'
];

// Execute
if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir);
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);

files.forEach(file => {
  const fullPath = path.join(srcDir, file.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, file.content);
});

emptyDirs.forEach(dir => {
  const fullPath = path.join(backendDir, dir);
  fs.mkdirSync(fullPath, { recursive: true });
});

console.log('Backend architecture materialised successfully.');
