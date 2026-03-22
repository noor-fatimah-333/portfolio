# Glass Portfolio

A modern developer portfolio built with React and Vite, featuring a glassmorphism design. Contact form submissions are handled by [Formspree](https://formspree.io) — no backend or database required.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)

### Installation

1. Install dependencies:
```bash
cd client && npm install
```

2. Set up the contact form (Formspree):
   - Go to [formspree.io](https://formspree.io) and create a free account
   - Create a new form — you'll get a form ID (e.g. `xyzabc` from `https://formspree.io/f/xyzabc`)
   - Copy `client/.env.example` to `client/.env` and add your form ID:
   ```bash
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

3. Start the dev server:
```bash
cd client && npm run dev
```

Open http://localhost:5173

## 📦 Deployment (Vercel)

1. Set **Root Directory** to `client`
2. Add environment variable: `VITE_FORMSPREE_FORM_ID` = your Formspree form ID
3. Deploy — no backend needed

## 🛠️ Tech Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree (contact form)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run install:all` - Install dependencies
