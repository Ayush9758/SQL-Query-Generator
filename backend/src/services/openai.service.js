const openai = require('../config/openai');
const systemPrompt = require('../prompts/systemPrompt');

exports.generateSQLQuery = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can use gpt-4 if available
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 500,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Service Error:", error);
    throw new Error("Failed to channel the cosmos for SQL generation.");
  }
};
