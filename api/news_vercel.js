import fetch from 'node-fetch';

export default async (req, res) => {
  const url = 'https://newsapi.org/v2/top-headlines?category=business&apiKey=285102aa06e948dd98743b4e63f95bde';

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
};