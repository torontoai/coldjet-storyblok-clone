# Storyblok Visual Editor Setup Guide

## Current Configuration

### ✅ Completed Setup

**Storyblok Space:** ColdJet (Growth Plus)
- Space ID: 287934232080460
- Preview Token: 3jBwdYnafWqZjJUX2nCTqAtt
- Region: eu-central-1

**Netlify Deployment:**
- Site URL: https://coldjet-storyblok-clone.netlify.app
- Environment Variable Set: `REACT_APP_STORYBLOK_PREVIEW_TOKEN=3jBwdYnafWqZjJUX2nCTqAtt`

**Content Migrated:**
- ✅ Hero section
- ✅ Equipment Grid (2 items with alt_text)
- ✅ Industry Cards (12 cards with alt_text and background images)
- ✅ On-Site Production (8 cards with alt_text)
- ✅ Logo Grid (6 logos)
- ✅ Testimonials (3 items)

**Technical Setup:**
- ✅ Storyblok bridge initialized in App.js
- ✅ Component schemas created with required fields
- ✅ All alt_text fields populated
- ✅ Story published in new space

---

## Visual Editor Configuration Steps

### Step 1: Access Visual Editor Settings

1. Go to [Storyblok](https://app.storyblok.com/)
2. Select the "ColdJet" space (ID: 287934232080460)
3. Click Settings (gear icon) → Visual Editor

### Step 2: Configure Location

In the **Location (default environment)** field, enter:
```
https://coldjet-storyblok-clone.netlify.app/
```

**Important:** 
- Include the trailing slash `/`
- Use HTTPS protocol
- Do NOT add `/home` or any path

### Step 3: Save Settings

Click the **Save** button in the Visual Editor settings page.

### Step 4: Test Visual Editor

1. Navigate to Content → Stories
2. Click on the "Home" story
3. The Visual Editor should now load your deployed site in the iframe
4. You should see the actual content, NOT "my-company.com/home" placeholder

### Step 5: Test Live Editing

1. In the Visual Editor, try editing some content:
   - Change the hero headline
   - Modify an industry card title
   - Update equipment description
2. Changes should appear INSTANTLY in the preview iframe
3. Click "Publish" to save changes

---

## Troubleshooting

### If Preview Shows Blank/White Screen

1. Check browser console in the iframe (F12)
2. Verify environment variable in Netlify:
   - Site Settings → Environment Variables
   - Confirm `REACT_APP_STORYBLOK_PREVIEW_TOKEN` is set
3. Redeploy if needed: `netlify deploy --prod --dir=build`

### If Preview Shows "my-company.com/home"

1. Verify Location URL is exactly: `https://coldjet-storyblok-clone.netlify.app/`
2. Clear browser cache and refresh
3. Ensure story is published (not just saved as draft)

### If Content Not Updating

1. Check Storyblok bridge is initialized (console should show no errors)
2. Verify story is saved and published
3. Try hard refresh in Visual Editor (Ctrl+Shift+R)

---

## Component Mapping

The following components are available for use in the page body:

1. **hero** - Hero section with headline, subheadline, description, video
2. **equipmentGrid** - Grid of equipment items with images
3. **industryCards** - Grid of industry cards with background images
4. **onSiteProduction** - Production application cards
5. **logoGrid** - Customer logo grid
6. **testimonials** - Customer testimonial carousel

---

## Next Steps (Optional)

### Add More Components

To add components not yet mapped (like `footer` in page body):
1. Update component mapping in `src/App.js` `ComponentMap` object
2. Redeploy to Netlify

### Enable Additional Sections

The home story can include these additional sections from the original site:
- Circular Economy section
- Industrial Challenges
- Cleaning Methods comparison
- Cold Chain section
- Customers section
- Global Offices map

Create component schemas in Storyblok and add to the page body.

---

## Summary

Your Cold Jet Storyblok homepage is now:
- ✅ Fully functional on Growth Plus space
- ✅ Deployed to Netlify with proper configuration
- ✅ Ready for Visual Editor live preview
- ✅ All content editable via Storyblok CMS
- ✅ 22 content items with proper accessibility (alt_text)

**To start editing:** Go to Storyblok → Content → Home story → Edit in Visual Editor