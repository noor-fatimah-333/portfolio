# Quick Start: Personalize Your Portfolio

## Step 1: Update Personal Information (5 minutes)

Edit `client/src/config/personalInfo.js` and fill in:

```javascript
export const personalInfo = {
  name: 'Your Full Name',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  // ... update all fields
}
```

## Step 2: Add Your Assets (2 minutes)

```bash
# Add your professional photo
cp /path/to/your-photo.jpg client/public/profile-photo.jpg

# Add your resume
cp /path/to/your-resume.pdf client/public/resume.pdf
```

## Step 3: Update Social Links (2 minutes)

In `client/src/config/personalInfo.js`, update:
- GitHub URL
- LinkedIn URL
- Any other social profiles

## Step 4: Review Content (10 minutes)

Check these files and update with your real information:

1. **Hero Section** - `client/src/components/sections/Hero.jsx`
   - Update roles array
   - Update description

2. **About Section** - `client/src/components/sections/About.jsx`
   - Update bio text
   - Update highlights

3. **Tech Stack** - `client/src/components/sections/TechStack.jsx`
   - Adjust skill percentages
   - Add/remove technologies

4. **Testimonials** - `client/src/components/sections/Testimonials.jsx`
   - Replace with real testimonials OR comment out the section

5. **Contact** - `client/src/components/sections/Contact.jsx`
   - Update email addresses

## Step 5: Update Meta Tags (2 minutes)

Edit `client/index.html`:
- Update `<title>`
- Add meta description
- Update favicon

## Step 6: Test Locally (5 minutes)

```bash
npm run dev
```

Check:
- [ ] All links work
- [ ] Contact form works (currently shows success message)
- [ ] Resume downloads correctly
- [ ] All text is accurate
- [ ] Images load properly

## Step 7: Build for Production (1 minute)

```bash
cd client
npm run build
```

## Step 8: Deploy (5 minutes)

### Option A: Vercel (Easiest)
```bash
cd client
npm i -g vercel
vercel
```

### Option B: Netlify
```bash
cd client
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

## Step 9: Post-Deployment

1. Test your live site
2. Share on social media
3. Add to your LinkedIn profile
4. Update your resume with the portfolio URL

## ⚠️ Important Reminders

- **Remove dummy testimonials** if you don't have real ones
- **Update all email addresses** (contact@example.com → your real email)
- **Add your real social media links**
- **Test the contact form** - currently it just shows success, you'll need to implement backend
- **Optimize images** before uploading (compress, use WebP if possible)

## 🐛 Common Issues

**Images not loading?**
- Make sure images are in `client/public/` folder
- Use relative paths: `/profile-photo.jpg` not `./profile-photo.jpg`

**Contact form not working?**
- Currently shows success message only
- To actually send emails, implement backend endpoint
- See `server/routes/` for example API structure

**Build errors?**
- Run `npm run install:all` to ensure all dependencies are installed
- Check for any console errors in development mode first

## 📞 Need Help?

- Check `PERSONALIZATION_CHECKLIST.md` for detailed checklist
- Check `DEPLOYMENT.md` for deployment options
- Review component files for inline comments
