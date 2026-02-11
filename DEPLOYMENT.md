# Deployment Guide

## Frontend Deployment (Vercel - Recommended)

### Option 1: Vercel (Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd client
   vercel
   ```

3. **Configure:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables:**
   - Add `VITE_API_URL` if using backend

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   cd client
   npm run build
   netlify deploy --prod
   ```

3. **Configure in Netlify Dashboard:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   cd client
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Full-Stack Deployment (Render)

1. **Create account at render.com**

2. **Deploy Backend:**
   - New Web Service
   - Connect GitHub repo
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
   - Add environment variables

3. **Deploy Frontend:**
   - New Static Site
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Add environment variables

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-connection-string
```

## Production Build

```bash
# Frontend
cd client
npm run build

# Backend (if deploying separately)
cd server
npm start
```

## Custom Domain Setup

1. **Vercel/Netlify:**
   - Go to Domain Settings
   - Add custom domain
   - Update DNS records as instructed

2. **SSL:**
   - Automatically handled by Vercel/Netlify
   - Force HTTPS enabled by default

## Performance Optimization

1. **Enable Compression:**
   - Vercel/Netlify handle this automatically

2. **CDN:**
   - Automatically provided by hosting platforms

3. **Image Optimization:**
   - Use WebP format
   - Compress images before upload
   - Consider using image CDN (Cloudinary, etc.)

## Monitoring

- Set up error tracking (Sentry, LogRocket)
- Add analytics (Google Analytics, Plausible)
- Monitor performance (Lighthouse CI)
