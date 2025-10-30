import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Vision5 AI server is running!");
});

// ✅ Chatbot API route (uses free API endpoint)
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    // Example AI response (you can connect your model later)
    const reply = `AI Response to: "${message}" — This is Vision5 AI 🚀`;

    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Use PORT from environment or default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
