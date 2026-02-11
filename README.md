# MERN Glass Portfolio

A production-ready full stack developer portfolio built with the MERN stack (MongoDB, Express, React, Node.js) featuring a modern glassmorphism design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Installation

1. Install all dependencies:
```bash
npm run install:all
```

2. Set up environment variables:
   - Copy `server/.env.example` to `server/.env` and configure MongoDB connection
   - Copy `client/.env.example` to `client/.env` if needed

3. Start development servers:
```bash
npm run dev
```

This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) concurrently.

## 📁 Project Structure

```
mern-glass-portfolio/
├── client/          # React frontend (Vite)
├── server/          # Node.js + Express backend
└── package.json     # Root package.json with scripts
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## 📝 Scripts

- `npm run dev` - Run both frontend and backend
- `npm run client` - Run frontend only
- `npm run server` - Run backend only
- `npm run install:all` - Install dependencies for all packages
