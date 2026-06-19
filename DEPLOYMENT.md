# Adhish OS Portfolio - Deployment Guide

## 🚀 Quick Start

Your portfolio is ready to deploy! Choose your preferred hosting platform below.

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information (name, email, links)
- [ ] Add resume PDF to public folder
- [ ] Update all project links and descriptions
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Update social media links
- [ ] Update meta tags (favicon, title, description)
- [ ] Run `npm run build` and verify no errors
- [ ] Test production build with `npm run preview`

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Vite)

**Best for**: Speed, automation, free tier

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Framework: Vite
6. Deploy!

**Auto-deploys on every push!**

### Option 2: Netlify

**Best for**: Easy deployment, generous free tier

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Option 3: GitHub Pages (Free)

**Best for**: No additional costs

1. Create repo named `yourusername.github.io`
2. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/',  // or '/repo-name/' if not using username.github.io
  // ... rest of config
})
```
3. Push to GitHub
4. Enable GitHub Pages in Settings → Pages
5. Your site is live at `yourusername.github.io`

### Option 4: AWS Amplify

**Best for**: Scalability, AWS ecosystem

1. Push to GitHub/CodeCommit
2. Go to AWS Amplify Console
3. Connect your repository
4. Choose Next.js/React
5. Build settings auto-configured
6. Deploy!

### Option 5: Self-Hosting (Advanced)

**Best for**: Full control

1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure web server (Nginx/Apache)
4. Point domain to server

## 📝 Update Before Deploying

### Step 1: Update Email
**File**: `src/components/sections/Contact.jsx`
```javascript
value: 'your-actual-email@example.com',
href: 'mailto:your-actual-email@example.com'
```

### Step 2: Update Resume Link
**File**: `src/components/sections/Contact.jsx`
```javascript
<a href="https://your-resume-url-or-path.pdf">
```

### Step 3: Update Social Links
**File**: `src/components/sections/Contact.jsx`
```javascript
const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername', ... },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', ... },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourhandle', ... },
]
```

### Step 4: Add Project Links
**File**: `src/components/sections/FeaturedProjects.jsx`
```javascript
links: { 
  github: 'https://github.com/yourusername/repo', 
  demo: 'https://your-project-demo.com' 
}
```

## 🔧 Environment Variables (If Needed)

Create `.env` file:
```
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=your-email@example.com
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📊 Build & Test

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Check Build Size
```bash
npm run build
# Check dist/ folder size
```

## ✅ Post-Deployment

1. **Test Everything**
   - All links work
   - Contact form submits
   - Responsiveness on mobile
   - Animations load smoothly

2. **Setup Analytics** (Optional)
   - Google Analytics
   - Vercel Analytics

3. **SEO Setup**
   - Update `index.html` meta tags
   - Add sitemap.xml
   - Submit to Google Search Console

4. **Custom Domain**
   - Update DNS settings
   - Point to your hosting service
   - Set up SSL certificate

## 🔗 Domain Setup

### For Vercel
1. Add domain in Vercel dashboard
2. Update DNS records
3. Auto SSL certificate

### For Netlify
1. Add custom domain in settings
2. Update DNS records
3. Auto HTTPS

### For GitHub Pages
1. Add domain in repository settings
2. Create CNAME file in root
3. Update DNS records

## 📱 SEO Meta Tags

Update in `index.html`:

```html
<meta name="description" content="Adhish Kumar - AI & Data Science Developer Portfolio">
<meta name="keywords" content="MERN Stack, AI, Cloud, Developer, Portfolio">
<meta name="author" content="Adhish Kumar">
<meta property="og:title" content="Adhish Kumar - AI Developer">
<meta property="og:description" content="Portfolio of Adhish Kumar showcasing AI, MERN Stack, and Cloud expertise">
<meta property="og:image" content="https://your-domain.com/preview-image.png">
```

## 🎯 Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Compress before uploading
   - Lazy load images

2. **Code Splitting**
   - Vite handles this automatically
   - Monitor bundle size in build output

3. **Caching**
   - Enable browser caching
   - Use CDN for static assets

## 🚨 Troubleshooting

### Page not loading after deploy?
- Check build output for errors
- Verify all file paths are correct
- Check browser console for errors

### Styles not applying?
- Clear browser cache
- Check CSS is included in build
- Verify Tailwind config is correct

### Animations not smooth?
- Check browser performance
- Reduce animation complexity
- Test on actual device

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [AWS Amplify Docs](https://docs.amplify.aws)

## 🎉 You're Live!

Share your portfolio with:
- LinkedIn
- Twitter/X
- GitHub README
- Job applications
- Network connections

---

**Congratulations! Your Adhish OS portfolio is live! 🚀**

Share your portfolio URL and get feedback. Update it regularly with new projects and achievements!
