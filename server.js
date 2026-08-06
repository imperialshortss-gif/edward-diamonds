import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

// SPA fallback: any route that isn't a static file goes to index.html,
// so React Router (wouter) can handle it client-side.
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Edward Diamonds site running on port ${port}`);
});
