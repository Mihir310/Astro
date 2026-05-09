import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const API_KEY = process.env.VITE_FREE_ASTROLOGY_API_KEY;
const BASE_URL = 'https://json.freeastrologyapi.com';

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Proxy endpoint for Panchang
app.post('/api/panchang', async (req, res) => {
  try {
    if (!API_KEY) {
      return res.status(500).json({ error: 'Missing API key' });
    }

    const response = await fetch(`${BASE_URL}/complete-panchang`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error('Panchang API Error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch panchang data' });
  }
});

// Proxy endpoint for Choghadiya
app.post('/api/choghadiya', async (req, res) => {
  try {
    if (!API_KEY) {
      return res.status(500).json({ error: 'Missing API key' });
    }

    const response = await fetch(`${BASE_URL}/bchoghadiya-timings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error('Choghadiya API Error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch choghadiya data' });
  }
});

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Astro API Proxy Server running on http://localhost:${PORT}`);
});
