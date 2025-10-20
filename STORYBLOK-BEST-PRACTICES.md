# Storyblok Best Practices Implementation Guide

## Overview
This document outlines how the Cold Jet Storyblok clone follows best practices for content management, particularly for global elements like headers, footers, and asset management.

---

## 1. Header & Footer Management

### Current Issue
Header and Footer are currently hardcoded React components, making them impossible to edit through Storyblok's Visual Editor.

### Best Practice Solution: Global Components

Storyblok recommends using **Global Components** for site-wide elements like headers and footers. This approach:
- ✅ Allows non-technical users to edit navigation, social links, and contact info
- ✅ Maintains consistency across all pages
- ✅ Reduces code duplication
- ✅ Enables Visual Editor preview for global elements

### Implementation Approach

#### Step 1: Create Component Schemas (Completed)
We created the following schemas:
- `siteConfig` (Global Component) - Contains all header/footer data
- `menuItem` (Nestable) - For navigation menus
- `socialLink` - For social media links
- `language` - For language switcher

#### Step 2: Create Site Config Story
A single "Site Config" story contains:
- Logo
- Site name and contact information
- All navigation menus (main, utility, footer)
- Social media links
- Language options

#### Step 3: Update Components to Use Storyblok Data
Header.js and Footer.js will:
1. Fetch the site-config story on app load
2. Render navigation and content from Storyblok
3. Fall back to hardcoded values if API fails

### Example Structure
```javascript
// In App.js
const [siteConfig, setSiteConfig] = useState(null);

useEffect(() => {
  getStoryContent('site-config').then(setSiteConfig);
}, []);

// Pass to Header/Footer
<Header config={siteConfig} />
<Footer config={siteConfig} />
```

---

## 2. Asset Management

### Current Issue
All images (28 total) are loaded from external URLs:
- Equipment images from coldjet.com
- Industry card images from coldjet.com
- Logo grid images from coldjet.com

This violates Storyblok best practices because:
- ❌ End users cannot replace/edit images
- ❌ External URLs may break if original site changes
- ❌ No centralized asset management
- ❌ Cannot track image usage across content

### Best Practice Solution: Storyblok Asset Library

All images should be uploaded to Storyblok's Asset Library:
- ✅ Centralized management
- ✅ Editable by content editors
- ✅ Built-in image optimization
- ✅ CDN delivery
- ✅ Usage tracking

### Implementation Steps

#### Option A: Manual Upload (Recommended for Growth Plan)
1. Go to https://app.storyblok.com
2. Select ColdJet space (287934232080460)
3. Navigate to Content → Assets
4. Create folders:
   - `/equipment/` - 2 images
   - `/industries/` - 12 images
   - `/production/` - 8 images
   - `/logos/` - 6 images
5. Upload images from `storyblok-images/` folder
6. Copy new Storyblok CDN URLs
7. Update content to use new URLs

#### Option B: Programmatic Upload (Requires Management API Access)
The script `upload-images-to-storyblok-assets.js` was created but requires:
- Asset upload permissions on Management Token
- Or elevated permissions on the Growth Plus plan

#### Step 3: Update Content References
After upload, update each item in the Home story:
- Equipment items: Replace `image.filename` with Storyblok CDN URL
- Industry cards: Replace `background_image.filename` with Storyblok CDN URL
- Production cards: Replace `image.filename` with Storyblok CDN URL
- Logos: Replace URLs with Storyblok CDN URLs

---

## 3. Content Structure Best Practices

### ✅ Currently Implemented

#### Modular Components
- Each section (Hero, Equipment Grid, Industry Cards, etc.) is a separate component
- Components accept `blok` prop for Storyblok data
- Default fallback content for development

#### Content Type Hierarchy
- `page` (Content Type) - Top-level page container
- Nestable blocks - Can be added/removed/reordered in Visual Editor
- All content is editable through Storyblok UI

#### Field Validation
- Required fields are marked with `required: true`
- Alt text fields for all images (accessibility)
- Proper field types (text, textarea, asset, bloks, etc.)

### 🔄 To Be Implemented

#### Global Components
- Site Config for header/footer
- Global styles/theme settings
- Reusable content blocks

#### Asset Organization
- Folder structure in Asset Library
- Consistent naming conventions
- Alt text for all assets

---

## 4. Visual Editor Integration

### Current Setup
- ✅ Storyblok bridge enabled in `public/index.html`
- ✅ Bridge initialized in `App.js`
- ✅ Live reload on content changes
- ⚠️ Location URL needs to be configured in Storyblok settings

### Configuration Required
1. Go to Space Settings → Visual Editor
2. Set Location URL to: `https://coldjet-storyblok-clone.netlify.app/`
3. Save and test preview

---

## 5. Development Workflow

### Content Updates
1. Edit content in Storyblok Visual Editor
2. Changes appear live in preview
3. Click "Publish" to deploy changes
4. No code deployment needed

### Adding New Sections
1. Create component schema in Storyblok
2. Add component to React codebase
3. Add to ComponentMap in App.js
4. Add to page component whitelist
5. Edit content in Visual Editor

### Deployment
- Netlify auto-deploys on GitHub push
- Environment variables configured
- No manual deployment steps needed

---

## 6. Accessibility Best Practices

### ✅ Implemented
- Alt text on all images
- Semantic HTML (header, nav, main, footer, article)
- ARIA labels for navigation
- Screen reader friendly content

### Font Consistency
All components should use:
- Primary: `"Avenir Next", sans-serif`
- Condensed: `"Avenir Next Condensed", sans-serif`
- Fallback: System fonts

---

## Summary

The coldjet-storyblok-clone follows most Storyblok best practices. The remaining work:

1. **Upload images to Asset Library** - Manual process via Storyblok UI
2. **Implement Header/Footer as global components** - Use site-config story
3. **Configure Visual Editor Location** - Set in Storyblok settings

These changes will enable full content management by non-technical users while maintaining code quality and performance.