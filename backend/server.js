const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  "Believe in yourself!",
  "Stay consistent.",
  "Every day is a fresh start.",
  "You are capable of amazing things."
];

app.get('/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});