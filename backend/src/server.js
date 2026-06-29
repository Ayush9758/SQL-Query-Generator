require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ The Cosmic Server has awakened on port ${PORT} ✨`);
});
