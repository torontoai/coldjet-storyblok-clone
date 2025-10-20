# Storyblok Content Updates Required

## Overview
Based on the validation errors in Storyblok, **13 items** require updates before content can be saved.

## Schema Changes Completed ✅
- ✅ `industryCard` schema now includes required `alt_text` field
- ✅ `equipmentItem` schema already has required `alt_text` field
- ✅ React components updated to use `alt_text` from blok data

## Required Content Updates in Storyblok

### Equipment Items (2 items)

#### 1. Dry Ice Blasting Systems
- **Component**: equipmentItem
- **Required**: Add `alt_text` field
- **Suggested alt text**: "AERO2 PCS ULTRA dry ice blasting system - advanced cleaning equipment for industrial applications"
- **Status**: ⚠️ Missing alt_text
- **Image**: Already present

#### 2. Dry Ice Production Systems
- **Component**: equipmentItem
- **Required**: Add `alt_text` field
- **Suggested alt text**: "PR750H dry ice production system - on-site dry ice maker for food processing and cold chain"
- **Status**: ⚠️ Missing alt_text
- **Image**: Already present

---

### Industry Cards (11-12 items)

Based on the homepage industry cards section, the following cards need both **background images** and **alt text**:

#### 3. Plastics & Composites
- **Required**: 
  - ✅ Background image (likely present)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Dry ice blasting equipment cleaning plastic mold in composites manufacturing facility"

#### 4. Automotive
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Automotive assembly line cleaned using dry ice blasting technology"

#### 5. Food & Beverage
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Food processing equipment being sanitized with dry ice cleaning system"

#### 6. Medical Equipment
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Sterile medical device cleaned with dry ice blasting for contamination-free results"

#### 7. Contract Cleaning
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Professional contract cleaning service using dry ice blasting equipment"

#### 8. Printing
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Printing press cleaned with dry ice without disassembly or downtime"

#### 9. Aerospace & Aviation
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Aircraft component precision cleaning using dry ice blasting technology"

#### 10. Oil & Gas
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Oil and gas equipment cleaned safely with dry ice in hazardous environments"

#### 11. Restoration & Remediation
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Historical building restoration using non-abrasive dry ice cleaning"

#### 12. Textiles
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Textile manufacturing equipment gently cleaned with dry ice blasting"

#### 13. Foundry
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Foundry mold cleaned with dry ice blasting for precision casting"

#### 14. Packaging (if present)
- **Required**: 
  - ⚠️ Add background image (if missing)
  - ⚠️ Add `alt_text`
- **Suggested alt text**: "Packaging line equipment cleaned with dry ice for food safety compliance"

---

## How to Update Content in Storyblok

### Step 1: Access the Homepage Story
1. Log into Storyblok: https://app.storyblok.com/
2. Navigate to Space: "Cold Jet" (ID: 287617756728481)
3. Open the "Home" story

### Step 2: Update Equipment Items
1. Scroll to the "Equipment Grid" component
2. For each equipment item:
   - Click to edit the item
   - Add the suggested `alt_text` value (or customize)
   - Save the item

### Step 3: Update Industry Cards
1. Scroll to the "Industry Cards" component
2. For each industry card:
   - Click to edit the card
   - **Add background image** if missing (upload from original Cold Jet site)
   - **Add alt_text** using suggested values above
   - Save the card

### Step 4: Publish Changes
1. Click "Publish" button in Storyblok
2. Verify no validation errors remain
3. Check the preview to ensure images and alt text are displaying

---

## Image Sources

If background images are missing, download from:
- **Original Site**: https://www.coldjet.com/
- **Industry Pages**: Navigate to each industry page and save the hero/header image
- **Recommended Size**: 500x300px minimum (current images on site)

---

## Validation Checklist

After updates, verify:
- [ ] All 2 equipment items have alt_text
- [ ] All 11-12 industry cards have background_image
- [ ] All 11-12 industry cards have alt_text
- [ ] No validation errors in Storyblok editor
- [ ] Content can be saved and published
- [ ] Preview shows all images correctly
- [ ] Alt text improves accessibility for screen readers

---

## Next Steps After Content Update

1. ✅ Schema changes: Complete
2. ✅ React component updates: Complete
3. ⏳ Content updates in Storyblok: **In Progress**
4. ⏳ Test build locally
5. ⏳ Deploy to Netlify