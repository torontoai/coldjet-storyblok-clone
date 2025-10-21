# Remaining Fixes for Cold Jet Storyblok Clone

## ✅ COMPLETED
- Visual Editor preview is now working correctly
- Alt text added to 61+ assets
- Testimonials component rebuilt with blue background and slider
- Logo grid updated with 18 company logos
- Basic component structure in place

---

## 🔧 CRITICAL FIXES NEEDED

### 1. Equipment Grid Layout (HIGHEST PRIORITY)
**Issue**: Equipment items are stacking vertically instead of side-by-side

**Current Status**: 
- Removed Bootstrap `col-12 col-md-6` classes
- Added CSS with `!important` declarations
- **Still not working on deployed site**

**Next Steps**:
1. Investigate compiled CSS in browser DevTools
2. Check if Bootstrap CSS is loading after our custom CSS
3. Try adding inline styles as last resort
4. Consider restructuring the grid completely without Bootstrap

**Files to Check**:
- `src/components/EquipmentGrid.js` (line 41)
- `src/components/EquipmentGrid.css` (lines 28-38)

---

### 2. Hero Section Height
**Issue**: Hero may still be too tall compared to original

**Current**: 500px (changed from 650px)
**Next**: Measure exact height from original site (likely 400-450px)

**File**: `src/components/Hero.js` (line 42)

---

### 3. Missing Content Sections

#### a) "Driving a Circular Economy with Recycled CO2"
- **Component**: CircularEconomy (exists)
- **Status**: Verify it's in Storyblok Home story content
- **Should be**: Full-width section with background image

#### b) Text Section Above Industry Cards
- **Content**: "Overcoming Industrial Challenges with Dry Ice Blasting Solutions"
- **Component**: IndustrialChallenges (exists)
- **Status**: Verify it's in Storyblok Home story content

#### c) Button Below Industry Cards
- **Text**: "Find a solution in your industry"
- **Component**: ButtonSection (created, needs wiring)
- **Status**: Add to App.js ComponentMap and Storyblok content

#### d) "Why Choose Dry Ice Blasting?" Comparison Table
- **Component**: WhyChooseBlasting (created, needs wiring)
- **Features**: 5-column comparison table
- **Status**: Add to App.js ComponentMap and create Storyblok content

#### e) Production Cards Spacing
- **Issue**: Too much white space between cards
- **Current**: Changed to `gx-2 gy-2` 
- **Status**: May need further adjustment

#### f) "Ensuring Continuous Cold Chain Integrity"
- **Component**: ColdChain (exists)
- **Status**: Verify it's in Storyblok Home story content

#### g) Logo Grid Layout
- **Status**: Component updated with 18 logos
- **Issue**: Verify 2-row layout (9 logos per row)

#### h) Testimonials Count
- **Current**: 3 testimonials
- **Needed**: 6 testimonials total
- **Status**: Need to add 3 more testimonial cards

---

## 📝 IMMEDIATE ACTION ITEMS

### Step 1: Wire Up New Components
Add to `src/App.js`:

```javascript
// Add imports (around line 10)
import ButtonSection from './components/ButtonSection';
import WhyChooseBlasting from './components/WhyChooseBlasting';

// Add to ComponentMap (around line 35)
buttonSection: ButtonSection,
whyChooseBlasting: WhyChooseBlasting,
```

### Step 2: Fix Equipment Grid (Multiple Approaches)

**Option A - CSS Specificity Override:**
```css
/* In EquipmentGrid.css */
.product-equipment-grid .product-equipment-grid__item--2 {
  flex: 0 0 50% !important;
  max-width: 50% !important;
  width: 50% !important;
}
```

**Option B - Remove Bootstrap Entirely:**
```javascript
// In EquipmentGrid.js
<article className="product-equipment-grid__item">
  {/* No Bootstrap classes at all */}
</article>
```

**Option C - Inline Styles:**
```javascript
style={{ flex: '0 0 50%', maxWidth: '50%', width: '50%' }}
```

### Step 3: Add Missing Testimonials
Add 3 more testimonials to `src/components/Testimonials.js` (around line 25):

```javascript
{
  quote: "Cold Jet's dry ice blasting solutions have revolutionized our cleaning process...",
  author: "John Smith",
  position: "Operations Manager",
  company: "Manufacturing Co.",
  logo: "https://via.placeholder.com/120x60?text=Company+Logo"
},
// ... 2 more testimonials
```

### Step 4: Update Storyblok Content
Add all missing blocks to Home story in correct order:
1. Hero
2. Equipment Grid
3. Button Section ("View all equipment")
4. Why Choose
5. Circular Economy
6. Industrial Challenges
7. Industry Cards
8. Button Section ("Find a solution in your industry")
9. Why Choose Blasting (comparison table)
10. Cleaning Methods
11. On-Site Production
12. Cold Chain
13. Customers
14. Logo Grid
15. Testimonials
16. Global Offices

### Step 5: Deploy to Netlify
```bash
cd coldjet-storyblok-clone
npm run build
npx netlify-cli deploy --prod --dir=build --site=4a113cde-26cd-4f2c-b6cb-c2a3653714de
```

---

## 🎨 CSS FILES TO REVIEW

1. `src/components/EquipmentGrid.css` - Fix side-by-side layout
2. `src/components/Hero.css` - Adjust height
3. `src/components/OnSiteProduction.css` - Fix card spacing
4. `src/components/WhyChooseBlasting.css` - Already created
5. `src/components/ButtonSection.css` - May need to create

---

## 📊 PRIORITY ORDER

1. **Equipment Grid Layout** (user explicitly mentioned this is broken)
2. **Wire up ButtonSection and WhyChooseBlasting** (quick wins)
3. **Add 3 more testimonials** (content work)
4. **Verify all sections in Storyblok** (content organization)
5. **Fix Hero height** (minor adjustment)
6. **Deploy and test** (final verification)

---

## 🧪 TESTING CHECKLIST

After each fix:
- [ ] Build locally: `npm run build`
- [ ] Deploy to Netlify
- [ ] Test on desktop (1920px width)
- [ ] Test on tablet (768px width)
- [ ] Test on mobile (375px width)
- [ ] Verify in Storyblok Visual Editor
- [ ] Compare with original Cold Jet site

---

## 💡 NOTES

- The user has manually uploaded images to Storyblok Assets
- All component schemas exist in Storyblok
- Visual Editor Location is correctly configured
- Next deployment will be critical to verify Equipment Grid fix