const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_FILE = path.join(__dirname, 'data', 'requests.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portfolio-admin';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'portfolio-admin-token';

app.use(cors());
app.use(express.json());

function readRequests() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeRequests(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function isAuthorized(req) {
  const headerToken = req.headers.authorization;
  const token = headerToken?.startsWith('Bearer ') ? headerToken.slice(7) : req.headers['x-admin-token'];
  return token === ADMIN_TOKEN;
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is up' });
});

app.post('/api/auth', (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    return res.json({ ok: true, token: ADMIN_TOKEN });
  }

  return res.status(401).json({ error: 'Invalid password' });
});

app.get('/api/requests', (req, res) => {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.json(readRequests());
});

app.post('/api/requests', (req, res) => {
  const { name, email, project, package: selectedPackage, addOns } = req.body;

  if (!name || !email || !project) {
    return res.status(400).json({ error: 'Name, email and project are required' });
  }

  const newRequest = {
    id: Date.now(),
    name,
    email,
    project,
    package: selectedPackage || 'Not selected',
    addOns: Array.isArray(addOns) ? addOns : [],
    createdAt: new Date().toISOString(),
  };

  const requests = readRequests();
  requests.unshift(newRequest);
  writeRequests(requests);

  res.status(201).json({ success: true, request: newRequest });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { app, readRequests, writeRequests };
