# Storyblok Content Setup Guide

## Complete Home Story Content Structure

This document shows the exact order and configuration for all content blocks in the Home story to make every section editable via Storyblok CMS.

---

## Block Order (Top to Bottom)

### 1. Hero Section
**Component**: `hero`
```json
{
  "component": "hero",
  "headline": "Cold Jet: Leading Dry Ice Solutions Manufacturer",
  "subheadline": "Driving Sustainable Innovation in Industrial Applications",
  "background_image": {
    "filename": "https://a.storyblok.com/f/.../hero-background.jpg",
    "alt": "Industrial dry ice blasting equipment"
  },
  "cta_text": "Get Started",
  "cta_url": "https://www.coldjet.com/contact-us/",
  "show_cta": true
}
```

### 2. Equipment Grid
**Component**: `equipmentGrid`
```json
{
  "component": "equipmentGrid",
  "kicker": "Our Equipment",
  "title": "Dry Ice Blasting Equipment & Dry Ice Production",
  "items": [
    {
      "title": "Aero Series",
      "description": "Dry ice blasting machines for industrial cleaning",
      "image": {
        "filename": "https://a.storyblok.com/f/.../aero-series.jpg",
        "alt": "Aero Series dry ice blasting equipment"
      },
      "link": "https://www.coldjet.com/our-equipment/dry-ice-blasting/"
    },
    {
      "title": "Dry Ice Production",
      "description": "On-site dry ice production equipment",
      "image": {
        "filename": "https://a.storyblok.com/f/.../ice-production.jpg",
        "alt": "Dry ice production equipment"
      },
      "link": "https://www.coldjet.com/our-equipment/dry-ice-production/"
    }
  ]
}
```

### 3. Button Section - View All Equipment
**Component**: `buttonSection`
```json
{
  "component": "buttonSection",
  "text": "View all equipment",
  "url": "https://www.coldjet.com/our-equipment/",
  "style": "bordered",
  "alignment": "center"
}
```

### 4. Why Choose
**Component**: `whyChoose`
```json
{
  "component": "whyChoose",
  "kicker": "Why Choose Cold Jet?",
  "title": "The Leader in Dry Ice Technology",
  "description": "For over 30 years, Cold Jet has been at the forefront of dry ice technology innovation.",
  "features": [
    {
      "icon": "✓",
      "text": "Industry-leading equipment"
    },
    {
      "icon": "✓",
      "text": "Global support network"
    },
    {
      "icon": "✓",
      "text": "Proven ROI"
    }
  ]
}
```

### 5. Circular Economy
**Component**: `circularEconomy`
```json
{
  "component": "circularEconomy",
  "kicker": "Sustainability",
  "title": "Driving a Circular Economy with Recycled CO₂",
  "description": "Our dry ice is made from recycled CO₂, a by-product of industrial processes.",
  "background_image": {
    "filename": "https://a.storyblok.com/f/.../circular-economy-bg.jpg",
    "alt": "Circular economy concept"
  },
  "learn_more_url": "https://www.coldjet.com/sustainability/"
}
```

### 6. Industrial Challenges
**Component**: `industrialChallenges`
```json
{
  "component": "industrialChallenges",
  "kicker": "Applications",
  "title": "Overcoming Industrial Challenges with Dry Ice Blasting Solutions",
  "description": "From automotive to food processing, our technology solves complex cleaning challenges across industries."
}
```

### 7. Industry Cards
**Component**: `industryCards`
```json
{
  "component": "industryCards",
  "title": "Industries We Serve",
  "cards": [
    {
      "title": "Automotive",
      "image": {
        "filename": "https://a.storyblok.com/f/.../automotive.jpg",
        "alt": "Automotive industry"
      },
      "link": "https://www.coldjet.com/industries/automotive/"
    },
    {
      "title": "Food & Beverage",
      "image": {
        "filename": "https://a.storyblok.com/f/.../food-beverage.jpg",
        "alt": "Food and beverage industry"
      },
      "link": "https://www.coldjet.com/industries/food-beverage/"
    },
    // ... more industry cards
  ]
}
```

### 8. Button Section - Find a Solution
**Component**: `buttonSection`
```json
{
  "component": "buttonSection",
  "text": "Find a solution in your industry",
  "url": "https://www.coldjet.com/dry-ice-blasting/industries/",
  "style": "bordered",
  "alignment": "center"
}
```

### 9. Why Choose Blasting - Comparison Table
**Component**: `whyChooseBlasting`
```json
{
  "component": "whyChooseBlasting",
  "kicker": "Why Choose Dry Ice Blasting?",
  "title": "A Cleaner, Faster, and More Sustainable Approach to Industrial Cleaning",
  "description": "Discover the benefits of dry ice blasting. It offers a non-toxic, non-abrasive, and waste-free alternative to traditional surface cleaning methods.\n\nPlus, dry ice blasting is highly efficient, leading to significant savings on operating and maintenance costs. This makes it a incredibly cost-effective cleaning solution. Compare the key benefits and see why industries are making the switch.",
  "comparison_table": [
    {
      "method": "Dry Ice Blasting",
      "abrasive": false,
      "secondary_waste": false,
      "sustainable": true,
      "toxic": false,
      "conductive": false
    },
    {
      "method": "Sand Blasting",
      "abrasive": true,
      "secondary_waste": true,
      "sustainable": false,
      "toxic": false,
      "conductive": false
    },
    {
      "method": "Water Blasting",
      "abrasive": false,
      "secondary_waste": true,
      "sustainable": false,
      "toxic": false,
      "conductive": true
    },
    {
      "method": "Chemical Cleaning",
      "abrasive": false,
      "secondary_waste": true,
      "sustainable": false,
      "toxic": true,
      "conductive": false
    },
    {
      "method": "Manual Scraping",
      "abrasive": true,
      "secondary_waste": false,
      "sustainable": false,
      "toxic": false,
      "conductive": false
    }
  ]
}
```

### 10. Cleaning Methods
**Component**: `cleaningMethods`
```json
{
  "component": "cleaningMethods",
  "kicker": "Applications",
  "title": "Dry Ice Blasting Applications",
  "description": "Versatile cleaning solutions for various industrial needs",
  "methods": [
    {
      "title": "Surface Preparation",
      "description": "Remove coatings without substrate damage",
      "icon": "prep"
    },
    {
      "title": "Mold Cleaning",
      "description": "Clean production molds in-place",
      "icon": "mold"
    },
    // ... more methods
  ]
}
```

### 11. On-Site Production
**Component**: `onSiteProduction`
```json
{
  "component": "onSiteProduction",
  "kicker": "Production Solutions",
  "title": "On-Site Dry Ice Production Cards",
  "cards": [
    {
      "title": "Gaining Control: The Advantages of On-Site Dry Ice Production",
      "image": {
        "filename": "https://a.storyblok.com/f/.../production-control.jpg",
        "alt": "On-site dry ice production control"
      },
      "link": "https://www.coldjet.com/blog/gaining-control/"
    },
    // ... more production cards
  ]
}
```

### 12. Cold Chain
**Component**: `coldChain`
```json
{
  "component": "coldChain",
  "kicker": "Cold Chain",
  "title": "Ensuring Continuous Cold Chain Integrity",
  "description": "Protect temperature-sensitive products throughout the supply chain",
  "background_image": {
    "filename": "https://a.storyblok.com/f/.../cold-chain-bg.jpg",
    "alt": "Cold chain logistics"
  },
  "features": [
    {
      "title": "Temperature Control",
      "description": "Maintain precise temperatures"
    },
    {
      "title": "Product Protection",
      "description": "Preserve product quality"
    }
  ]
}
```

### 13. Customers
**Component**: `customers`
```json
{
  "component": "customers",
  "title": "Trusted by Industry Leaders",
  "description": "Join thousands of companies worldwide who trust Cold Jet"
}
```

### 14. Logo Grid
**Component**: `logoGrid`
```json
{
  "component": "logoGrid",
  "title": "Trusted by Industry Leaders",
  "logos": [
    {
      "name": "3M",
      "image": {
        "filename": "https://a.storyblok.com/f/.../3m-logo.jpg",
        "alt": "3M logo"
      }
    },
    {
      "name": "Apple",
      "image": {
        "filename": "https://a.storyblok.com/f/.../apple-logo.png",
        "alt": "Apple logo"
      }
    },
    // ... 18 logos total
  ]
}
```

### 15. Testimonials
**Component**: `testimonials`
```json
{
  "component": "testimonials",
  "kicker": "What Our Customers Say",
  "title": "Real Results from Industry Leaders",
  "subtitle": "Discover how Cold Jet's dry ice technology transformed their operations",
  "testimonials": [
    {
      "quote": "Cold Jet's dry ice blasting technology has revolutionized our cleaning process...",
      "author": "John Smith",
      "position": "Operations Manager",
      "company": "Manufacturing Co.",
      "logo": {
        "filename": "https://a.storyblok.com/f/.../company-logo.png",
        "alt": "Company logo"
      }
    },
    // ... 6 testimonials total
  ]
}
```

### 16. Global Offices
**Component**: `globalOffices`
```json
{
  "component": "globalOffices",
  "kicker": "Global Presence",
  "title": "Worldwide Support",
  "description": "With offices and distributors in over 70 countries, we're here to support you wherever you are.",
  "offices": [
    {
      "region": "North America",
      "address": "455 Wards Corner Road, Loveland, OH 45140, USA",
      "phone": "+1 800 337 9423"
    },
    // ... more offices
  ]
}
```

---

## How to Add This Content to Storyblok

### Option 1: Manual Entry (Recommended for Visual Control)

1. **Go to Storyblok** → Content → Home story
2. **Click "Add Block"** for each section
3. **Select the component type** from the dropdown
4. **Fill in the fields** using the JSON values above as reference
5. **Upload images** to Storyblok Assets first, then select them
6. **Save and Publish** after adding all blocks

### Option 2: JSON Import

1. Copy the complete JSON structure (see next section)
2. Go to Home story → Click the "..." menu → "View JSON"
3. Replace the `body` array with the complete structure
4. Save and Publish

---

## Complete JSON Structure for Home Story Body

```json
{
  "body": [
    { "component": "hero", "_uid": "hero-1", ... },
    { "component": "equipmentGrid", "_uid": "equipment-1", ... },
    { "component": "buttonSection", "_uid": "button-1", ... },
    { "component": "whyChoose", "_uid": "why-choose-1", ... },
    { "component": "circularEconomy", "_uid": "circular-1", ... },
    { "component": "industrialChallenges", "_uid": "challenges-1", ... },
    { "component": "industryCards", "_uid": "industries-1", ... },
    { "component": "buttonSection", "_uid": "button-2", ... },
    { "component": "whyChooseBlasting", "_uid": "blasting-1", ... },
    { "component": "cleaningMethods", "_uid": "methods-1", ... },
    { "component": "onSiteProduction", "_uid": "production-1", ... },
    { "component": "coldChain", "_uid": "coldchain-1", ... },
    { "component": "customers", "_uid": "customers-1", ... },
    { "component": "logoGrid", "_uid": "logos-1", ... },
    { "component": "testimonials", "_uid": "testimonials-1", ... },
    { "component": "globalOffices", "_uid": "offices-1", ... }
  ]
}
```

---

## Verification Checklist

After adding all blocks:

- [ ] All 16 content blocks are present in the correct order
- [ ] Each block has proper component type
- [ ] Images are uploaded to Storyblok Assets
- [ ] Alt text is added to all images
- [ ] All text content is editable via CMS
- [ ] Visual Editor preview works correctly
- [ ] Story is Published (not just Saved as Draft)
- [ ] Site displays all sections correctly after deployment

---

## Next Steps

1. Add missing content blocks to Storyblok Home story
2. Test in Visual Editor to ensure all sections are editable
3. Deploy updated React code to Netlify
4. Verify all sections appear on live site
5. Make any final adjustments via Storyblok CMS