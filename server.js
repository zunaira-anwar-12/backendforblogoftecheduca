const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const apiKey = 'f6ae20ba570f4f0cb564df77d7c2b40d'; // Your NewsAPI key

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
