const { generateSQLQuery } = require('../services/openai.service');

exports.generateSQL = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Please provide a natural language prompt." });
    }

    const sqlQuery = await generateSQLQuery(prompt);
    
    res.status(200).json({
      success: true,
      data: {
        query: sqlQuery,
        message: "SQL successfully forged from the stars."
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
