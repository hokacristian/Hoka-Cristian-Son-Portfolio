# Portfolio Setup Guide

## Overview

Your portfolio has been completely redesigned with modern card layouts, image sliders, and a professional contact form with CAPTCHA protection.

## Key Features Implemented

### ✅ Projects Section
- **Card Layout**: Modern grid layout with hover effects
- **Image Sliders**: Each project can have multiple images with navigation
- **Show More/Less**: Initially shows only featured projects (4), with option to see all (8)
- **Medium Integration**: Clicking any project card redirects to your Medium blog
- **Categories**: Each project has a category badge (Enterprise Software, IoT & Mobile, etc.)
- **Enhanced Info**: Tech stack preview, key highlights, and project impact stats

### ✅ Tech Stack Section
- **Interactive Cards**: Click to expand/collapse detailed proficiency information
- **Skill Levels**: Expert, Advanced, Intermediate badges
- **Proficiency Bars**: Animated progress bars showing skill percentages
- **Experience Info**: Years of experience for each technology
- **Featured Technologies**: Highlights your strongest skill areas

### ✅ Contact Form with Security
- **Cloudflare Turnstile CAPTCHA**: Bot protection
- **SMTP Email**: Automated email sending with professional templates
- **Auto-reply**: Sends confirmation email to visitors
- **Form Validation**: Real-time validation and user feedback
- **Status Messages**: Success/error feedback with animations

## Setup Instructions

### 1. Environment Configuration

Copy the environment template:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Get these from Cloudflare Dashboard > Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_actual_site_key
TURNSTILE_SECRET_KEY=your_actual_secret_key

# Gmail SMTP (recommended)
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### 2. Cloudflare Turnstile Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to "Turnstile" in the left sidebar
3. Create a new site:
   - **Site name**: Your Portfolio
   - **Domain**: your-domain.com (or localhost for development)
   - **Widget type**: Managed
4. Copy the Site Key and Secret Key to your `.env.local`

### 3. Gmail SMTP Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this app password (not your regular password) in `SMTP_PASSWORD`

### 4. Project Images

Add your project screenshots to `/public/projects/`:

```
public/projects/
├── inventory-1.jpg        # Office Inventory Management
├── inventory-2.jpg
├── inventory-3.jpg
├── smartbin-1.jpg         # SmartBin Monitoring
├── smartbin-2.jpg
├── smartbin-3.jpg
├── lms-1.jpg             # Learning Management System
├── lms-2.jpg
├── lms-3.jpg
├── profile-matching-1.jpg # Profile Matching System
├── profile-matching-2.jpg
├── ministry-1.jpg        # Ministry Management Pro
├── ministry-2.jpg
├── bewise-1.jpg          # BeWise App
├── bewise-2.jpg
├── bewise-3.jpg
├── kidlink-1.jpg         # KidLink App
├── kidlink-2.jpg
├── kidlink-3.jpg
├── probox-1.jpg          # PROBOX IoT
└── probox-2.jpg
```

**Image Requirements:**
- **Format**: JPG or PNG
- **Size**: 1200x800px (3:2 aspect ratio) recommended
- **Quality**: High resolution for crisp display
- **Content**: Screenshots of actual project interfaces, mobile apps, dashboards

### 5. Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 6. Deployment

For production deployment:

1. **Vercel** (Recommended):
   ```bash
   npm run build
   vercel --prod
   ```

2. **Environment Variables**: Add all environment variables to your hosting platform

## Customization

### Adding New Projects

Edit `/src/components/sections/projects-section.tsx`:

```typescript
{
  id: 'new-project',
  title: 'New Project Name',
  year: '2025',
  category: 'Project Category',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  highlights: [
    'Key achievement 1',
    'Key achievement 2'
  ],
  images: ['/projects/new-project-1.jpg'],
  featured: true // Show in featured section
}
```

### Updating Tech Stack

Edit `/src/components/sections/tech-stack-section.tsx`:

```typescript
{
  name: 'Technology Name',
  proficiency: 95, // 0-100
  experience: '2+ years'
}
```

### Email Templates

Customize email templates in `/src/app/api/contact/route.ts`:
- `mailOptionsToYou`: Email you receive
- `mailOptionsToSender`: Auto-reply to visitors

## Testing

### Contact Form Testing

1. **Development**: Use Turnstile test keys:
   - Site Key: `1x00000000000000000000AA`
   - Secret Key: `1x0000000000000000000000000000000AA`

2. **Production**: Use your actual Turnstile keys

### Email Testing

1. Send a test message through the contact form
2. Check both:
   - Your inbox (should receive the contact form submission)
   - Sender's inbox (should receive auto-reply)

## Features Overview

### Project Cards
- **Hover Effects**: Scale and shadow animations
- **Image Navigation**: Arrows and dots for multiple images
- **Tech Stack Preview**: Shows first 3 technologies
- **Category Badges**: Visual project categorization
- **Featured Badges**: Highlights important projects

### Tech Stack Cards
- **Expandable Details**: Click to see all technologies
- **Proficiency Visualization**: Color-coded progress bars
- **Experience Indicators**: Years of experience shown
- **Skill Levels**: Expert/Advanced/Intermediate badges

### Contact Form
- **Real-time Validation**: Immediate feedback on form fields
- **CAPTCHA Protection**: Prevents spam submissions
- **Professional Emails**: HTML templates with your branding
- **Status Feedback**: Success/error messages with animations

## Security Features

- **CAPTCHA Verification**: Cloudflare Turnstile prevents bots
- **Input Validation**: Server-side validation of all form fields
- **Email Sanitization**: Prevents email injection attacks
- **Environment Variables**: Sensitive keys stored securely

## Performance Optimizations

- **Image Lazy Loading**: Project images load as needed
- **Animation Optimization**: Framer Motion for smooth animations
- **Component Lazy Loading**: React components load efficiently
- **SEO Optimization**: Proper meta tags and structure

Your portfolio is now enterprise-ready with professional features that will impress HR teams and potential clients!