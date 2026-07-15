# 🚀 Portfolio Project

[![Author](https://img.shields.io/badge/author-Oleksand%20Ivanchenko-blue)]()
[![Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20React%20%7C%20Vite-yellowgreen)]()
[![License](https://img.shields.io/badge/license-ISC-lightgrey)]()

# My Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Portfolio-blue?style=for-the-badge)](https://oleksandr-ivanchenko.github.io/portfolio/)

---

## 🌟 About the Project

This is a modern personal portfolio built with a full-stack JavaScript setup.

The project includes:
- a React + Vite frontend
- a Node.js + Express backend
- a collaboration request form
- an admin view for submitted requests

---

## ✨ What’s included

- polished portfolio pages for Home, About, Projects, Skills, Experience, Contact
- a collaboration request page with package selection and add-ons
- a backend API that stores collaboration requests locally in JSON
- an admin page at /admin/requests with simple password protection

---

## 📂 Project Structure

portfolio/
├─ client/   # React + Vite frontend
└─ server/   # Node.js + Express backend

---

## ⚡ Technologies

- Node.js, Express
- React, Vite
- TypeScript
- SCSS

---

## ▶️ Local Development

### 1) Backend

```bash
cd server
npm install
node server.js
```

The API will be available at:
- http://localhost:4000/api/health
- http://localhost:4000/api/requests

### 2) Frontend

```bash
cd client
npm install
npm run dev
```

The frontend will be available at the local Vite URL.

---

## 📝 Collaboration flow

1. Open the Collaboration page.
2. Choose a package and optional add-ons.
3. Submit the form.
4. The request is stored by the backend.
5. Open /admin/requests to review submissions.

Before running the backend locally, create a file named .env in the server folder and define your own values for ADMIN_PASSWORD and ADMIN_TOKEN.

> For production, this should be replaced with a stronger auth setup and a real database.

