# Visual Fixes Implementation Plan

## Issues to Fix

### 1. Hero Video Height
- **Problem**: Hero video is 100vh (too tall)
- **Solution**: Change to match original site height (~600-700px)
- **File**: `src/components/Hero.js`

### 2. Equipment Grid Layout
- **Problem**: Items stacked vertically, using same image
- **Solution**: Display side-by-side, use unique images for each item
- **Files**: `src/components/EquipmentGrid.js`, `src/components/EquipmentGrid.css`

### 3. Fonts Throughout Homepage
- **Problem**: Fonts don't match original (should be Avenir Next)
- **Solution**: Ensure consistent font family across all components
- **Files**: All component JS files

### 4. Industry Cards Grid Layout
- **Problem**: Currently 3 wide x 4 high (col-6 col-md-3)
- **Solution**: Change to 4 wide x 3 high (col-6 col-md-3 col-lg-3)
- **File**: `src/components/IndustryCards.js`

### 5. Production Cards Spacing
- **Problem**: Not enough white space around borders
- **Solution**: Increase padding/margins to match original
- **File**: `src/components/OnSiteProduction.js`, `src/components/OnSiteProduction.css`

### 6. Customers Section
- **Problem**: Layout doesn't match original
- **Solution**: Update styling to match original exactly
- **File**: `src/components/Customers.js`

### 7. Global Offices Section
- **Problem**: Doesn't match original layout
- **Solution**: Fix layout and styling
- **File**: `src/components/GlobalOffices.js`

### 8. Header/Footer as Storyblok Content
- **Problem**: Currently hardcoded
- **Solution**: Create as Storyblok components following best practices
- **Files**: Create new component schemas and update App.js

### 9. Image Assets in Storyblok
- **Problem**: No images in Storyblok Assets
- **Solution**: Upload all 28 images to Storyblok Assets and update content
- **Action**: Manual upload through Storyblok UI or use Storyblok MCP

## Implementation Order

1. ✅ Fix Hero video height (immediate visual impact)
2. ✅ Fix Equipment Grid layout and images
3. ✅ Fix Industry Cards grid (3x4 → 4x3)
4. ✅ Fix Production Cards spacing
5. ✅ Fix Customers section layout
6. ✅ Fix Global Offices section
7. ✅ Fix fonts throughout (global consistency)
8. ✅ Upload images to Storyblok Assets
9. ✅ Create Header/Footer schemas and components
10. ✅ Update content to use Storyblok asset URLs

## Font Specifications (from original site)

- **Primary Font**: "Avenir Next", sans-serif
- **Headings**: Avenir Next, weight 600-700
- **Body**: Avenir Next, weight 400
- **Condensed Headings**: "Avenir Next Condensed"