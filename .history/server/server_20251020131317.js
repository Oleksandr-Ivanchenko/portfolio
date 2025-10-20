const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Пример API
app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, title: "Todo App" },
    { id: 2, title: "Game Project" }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
