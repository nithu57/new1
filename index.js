import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Sample data
const articles = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Healthcare',
    content: '...',
    summary: 'Exploring how AI is revolutionizing medical diagnosis and treatment planning.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200',
    category: 'Technology',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-03-10T10:00:00Z'
  },
  // Add more articles
];

app.use(express.json());

// Get all articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Get article by ID
app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === req.params.id);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.json(article);
});

// Get articles by category
app.get('/api/categories/:category', (req, res) => {
  const categoryArticles = articles.filter(
    a => a.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(categoryArticles);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});