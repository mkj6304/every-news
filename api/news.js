export default async function handler(req, res) {
  const API_KEY = process.env.REACT_APP_API_KEY; // hardcoded temporarily
  const { country = "in", category = "general", page = 1, pageSize = 5 } = req.query;

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
