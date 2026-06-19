# Adhish OS - Quick Customization Guide

## 🎯 Immediate Changes to Make

### 1. Update Your Contact Information

**File**: `src/components/sections/Contact.jsx`

```javascript
// Line ~70 - Update contact info
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your-email@example.com', href: 'mailto:your-email@example.com' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: MapPin, label: 'Location', value: 'Your City/Country', href: '#' },
]

// Line ~90 - Update social media links
const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername', color: '#ffffff' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: '#0A66C2' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourhandle', color: '#1DA1F2' },
]
```

### 2. Update Resume Download Link

**File**: `src/components/sections/Contact.jsx` (Line ~130)

```javascript
<a href="path/to/your/resume.pdf" className="...">
  <Download size={20} />
  <span>Download Resume</span>
</a>
```

### 3. Update Your Skills

**File**: `src/components/sections/SkillsGalaxy.jsx` (Line ~14)

```javascript
const skills = [
  // Add or modify skills
  { name: 'Your Skill', category: 'Category', color: '#COLOR_HEX', level: 95 },
  // ... more skills
]
```

### 4. Update Your Projects

**File**: `src/components/sections/FeaturedProjects.jsx` (Line ~9)

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description here',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: Code2,
    color: '#00D9FF',
    links: { github: 'https://github.com/...', demo: 'https://demo.com' },
    featured: true,
  },
  // ... more projects
]
```

### 5. Update Your Timeline Milestones

**File**: `src/components/sections/Timeline.jsx` (Line ~7)

```javascript
const milestones = [
  {
    year: '2021',
    title: 'Your Achievement',
    description: 'What you accomplished',
    icon: '🚀',
  },
  // ... more milestones
]
```

### 6. Update Achievements

**File**: `src/components/sections/Achievements.jsx` (Line ~8)

```javascript
const achievements = [
  {
    icon: Trophy,
    title: 'Your Achievement',
    description: 'Achievement description',
    category: 'Category',
    color: '#FFD93D',
  },
  // ... more achievements
]
```

### 7. Update About Section Text

**File**: `src/components/sections/About.jsx`

Update the bio paragraphs and highlights card content with your own information.

## 🎨 Customizing Colors

**File**: `tailwind.config.cjs`

```javascript
colors: {
  'neon-cyan': '#YOUR_CYAN_COLOR',
  'neon-purple': '#YOUR_PURPLE_COLOR',
  'dark-bg': '#YOUR_BG_COLOR',
  'dark-secondary': '#YOUR_SECONDARY_COLOR',
  'dark-tertiary': '#YOUR_TERTIARY_COLOR',
}
```

Popular color combinations:
- **Cyan-Purple**: `#00D9FF` to `#A855F7` (default)
- **Cyan-Pink**: `#00D9FF` to `#FF006E`
- **Green-Blue**: `#00FF88` to `#0099FF`
- **Orange-Red**: `#FF6B35` to `#FF0000`

## 📝 Updating Hero Section Text

**File**: `src/components/sections/Hero.jsx` (Line ~14)

```javascript
const lines = [
  '> Welcome to Your OS v1.0',
  '> Loading Your Profile...',
  '> Initializing MERN Stack environment...',
  // ... more lines
]
```

## 🔧 Deployment Checklist

- [ ] Update all social media links
- [ ] Add your resume PDF
- [ ] Update email address
- [ ] Customize all project information
- [ ] Update skills with your proficiencies
- [ ] Add your achievements
- [ ] Update timeline milestones
- [ ] Change colors if desired
- [ ] Test on mobile devices
- [ ] Test all links and form
- [ ] Test contact form (setup backend)
- [ ] Add favicons
- [ ] Update meta tags for SEO

## 🚀 Building for Production

```bash
# Build the project
npm run build

# The dist/ folder contains your production files
# Upload to your hosting service (Vercel, Netlify, GitHub Pages, etc.)
```

## 🔗 Popular Deployment Services

1. **Vercel** (Recommended for Vite)
   - Connect GitHub repo
   - Auto-deploys on push

2. **Netlify**
   - Drag and drop deploy
   - Build settings: `npm run build` → `dist`

3. **GitHub Pages**
   - Free hosting for static sites
   - Update `vite.config.js` with base path

4. **AWS Amplify**
   - AWS managed service
   - Good for scaling

## 📱 Mobile Testing

Test on various devices:
- iPhone SE (375px)
- iPad (768px)
- Samsung Galaxy (412px)
- Desktop (1920px)

All sections are fully responsive!

## ⚡ Performance Tips

1. Compress images if adding any
2. Lazy load heavy assets
3. Use React DevTools to check component renders
4. Monitor bundle size with `npm run build` report

## 🐛 Troubleshooting

### Dev server not starting?
```bash
npm install
npm run dev
```

### Styles not applying?
```bash
npm run dev
# Clear browser cache: Ctrl+Shift+Delete
```

### Build failing?
```bash
npm run build
# Check console for errors
```

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

---

**Happy customizing! Make it yours! 🚀**
