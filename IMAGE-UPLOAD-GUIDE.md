# Manual Image Upload Guide for Storyblok Assets

## Why Upload Images to Storyblok?

Currently, all 28 images are loaded from external URLs (coldjet.com). This is **not recommended** because:
- ❌ End users cannot edit/replace images in Storyblok
- ❌ External URLs may break if the original site changes
- ❌ No centralized asset management
- ❌ Images not optimized through Storyblok CDN

**After uploading**, all images will be:
- ✅ Editable by content managers
- ✅ Hosted on Storyblok's CDN (fast, reliable)
- ✅ Optimized automatically
- ✅ Trackable (see which content uses which image)

---

## Step-by-Step Upload Process

### Part 1: Access Storyblok Assets

1. Go to https://app.storyblok.com
2. Select **ColdJet** space (Space ID: 287934232080460)
3. Click **Content** in left sidebar
4. Click **Assets** tab at the top

### Part 2: Create Folder Structure

Create these folders in Assets:

1. Click **"+ Create folder"**
2. Create folder: `equipment`
3. Create folder: `industries` 
4. Create folder: `production`
5. Create folder: `logos`

### Part 3: Upload Images

#### Upload Equipment Images (2 files)
Navigate to `equipment` folder and upload:
- `AERO2-PCS-ULTRA.jpg` → Rename to "Dry Ice Blasting System"
- `PR750H.jpg` → Rename to "Dry Ice Production System"

#### Upload Industry Images (12 files)
Navigate to `industries` folder and upload:
- `IMG_1696-500x300.jpg` → "Plastics & Composites"
- `DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg` → "Automotive"
- `Cold_Jet_Food_Processing-500x300.webp` → "Food & Beverage"
- `Medical3-1-500x300.jpg` → "Medical Equipment"
- `Contract-Cleaning-500x300.jpg` → "Contract Cleaning"
- `Main-Image-500x300.jpg` → "Printing"
- `DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg` → "Aerospace & Aviation"
- `DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg` → "Oil & Gas"
- `DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg` → "Restoration & Remediation"
- `DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg` → "Textiles"
- `Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg` → "Foundry"
- `DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg` → "Packaging"

#### Upload Production Images (8 files)
Navigate to `production` folder and upload:
- `DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg` → "Airline Catering"
- `DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg` → "Food Processors"
- `Cold_Jet_Life_Science-500x300.jpg` → "Life Sciences"
- `DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg` → "Production for Resale"
- `DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg` → "Cold Chain Management"
- `Cold_Jet_Food_Home_Delivery-500x300.jpg` → "Food Shipping"
- `DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg` → "Production for Blasting"
- `DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg` → "Remote Production"

#### Upload Logo Images (6 files)
Navigate to `logos` folder and upload:
- `img.logo-grid__logo-image.lazyload.loaded-13.png` → "3M Logo"
- `img.logo-grid__logo-image.lazyload.loaded-14.png` → "Apple Logo"
- `img.logo-grid__logo-image.lazyload.loaded-15.png` → "Bayer Logo"
- `img.logo-grid__logo-image.lazyload.loaded-16.png` → "Millet Logo"
- `img.logo-grid__logo-image.lazyload.loaded-17.png` → "GE Logo"
- `img.logo-grid__logo-image.lazyload.loaded-18.jpg` → "Goodyear Logo"

**Note**: 2 additional logos (KSPG, Performance Plastics) can be uploaded to logos folder as well.

### Part 4: Add Alt Text to Each Image

After uploading each image:
1. Click on the image in Assets
2. Find **Alt text** field
3. Add descriptive alt text (e.g., "Dry ice blasting system for automotive industry")
4. Click **Save**

---

## Part 5: Update Content to Use Storyblok Assets

### After All Images Are Uploaded:

1. Go to **Content** → **Stories** → **Home**
2. For each equipment item:
   - Click the image field
   - Select from Storyblok Assets instead of external URL
3. For each industry card:
   - Update background_image field
   - Select from `industries/` folder
4. For each production card:
   - Update image field
   - Select from `production/` folder
5. For logo grid:
   - Update each logo image field
   - Select from `logos/` folder
6. Click **Publish**

---

## Alternative: Script-Based Update (After Manual Upload)

Once images are uploaded, you can use this script to batch-update content:

```javascript
// update-content-with-assets.js
// 1. Get all uploaded asset URLs from Storyblok
// 2. Map to content items by name
// 3. Update home story with new URLs
// 4. Publish updated story
```

---

## Expected Outcome

After completing this process:
- ✅ All 28 images hosted on Storyblok CDN
- ✅ Content editors can replace images anytime
- ✅ Images show in Storyblok Asset Library with usage tracking
- ✅ Faster load times (Storyblok CDN is optimized)
- ✅ No dependency on external coldjet.com URLs

---

## Estimated Time

- Creating folders: 2 minutes
- Uploading 28 images: 15 minutes
- Adding alt text: 10 minutes
- Updating content: 15 minutes
- **Total: ~45 minutes**

---

## Troubleshooting

### "Upload Failed"
- Check file size (max 5MB on Growth plan)
- Verify file format (JPG, PNG, WebP, GIF supported)
- Try renaming file to remove special characters

### "Cannot Find Image in Content"
- Make sure image is published in Assets
- Check folder path matches
- Verify asset picker is set to correct space

### "Old Images Still Showing"
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Verify content was published (not just saved)

---

## Next Steps After Upload

1. **Update Home Story** - Replace all external URLs with Storyblok asset URLs
2. **Test Visual Editor** - Verify images load in preview
3. **Publish** - Make changes live
4. **Create Header/Footer** - Follow global component pattern for site config

This completes the asset management best practice implementation!