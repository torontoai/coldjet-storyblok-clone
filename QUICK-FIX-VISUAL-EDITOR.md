# Quick Fix: Storyblok Visual Editor Preview Issue

## Problem
The Visual Editor is showing `https://www.my-company.com/home` instead of your actual deployed site.

## Solution (2 minutes)

### Step 1: Update Visual Editor Location
1. Go to your Storyblok space: https://app.storyblok.com/#!/me/spaces/287934232080460
2. Click **Settings** in the left sidebar
3. Click **Visual Editor** 
4. Under **Location (default environment)**, you should see: `https://coldjet-storyblok-clone.netlify.app/`
5. If it shows a different URL, update it to: `https://coldjet-storyblok-clone.netlify.app/`
6. Click **Save** button (top right)

### Step 2: Test the Preview
1. Go back to **Content** in the left sidebar
2. Click on your **home** story
3. The Visual Editor preview should now load your actual Netlify site
4. You should see the Cold Jet homepage with all sections rendering

## Why This Fixes the Issue

The Visual Editor Location setting tells Storyblok which URL to load in the iframe preview. The placeholder `my-company.com/home` was just an example URL that needed to be replaced with your actual deployment URL.

## Current Status

Your site is fully deployed and functional at:
- **Live URL**: https://coldjet-storyblok-clone.netlify.app/
- **Storyblok Bridge**: ✅ Connected and working
- **All Components**: ✅ Rendering correctly

The Visual Editor will now show a live preview of your site with Storyblok content.

## Additional Notes

### Image URLs
Currently, your images are loading from external URLs (coldjet.com). This works fine, but for better performance and control, you can:
1. Upload images to Storyblok Assets (see `IMAGE-UPLOAD-GUIDE.md`)
2. Update image URLs in your content to use Storyblok CDN

This is optional and doesn't affect the Visual Editor preview functionality.

### What You'll See After the Fix

Once the Visual Editor Location is updated, when you click on the **home** story, you'll see:
- ✅ Hero section with video background
- ✅ Equipment grid (2 items side-by-side)
- ✅ Industry cards (4×3 grid layout)
- ✅ Production cards with proper spacing
- ✅ Customer testimonials section
- ✅ Global Leader/Offices section
- ✅ All other homepage sections

Everything will be editable through Storyblok's Visual Editor!