# Quick Start Guide - Making All Homepage Content Editable

## ✅ What's Already Done

1. **React Components Created:**
   - ✅ ButtonSection component (for CTA buttons)
   - ✅ WhyChooseBlasting component (for comparison table)
   - ✅ All components wired into App.js ComponentMap

2. **Storyblok Component Schemas:**
   - ✅ buttonSection schema
   - ✅ whyChooseBlasting schema  
   - ✅ comparisonRow schema

3. **Documentation:**
   - ✅ Complete content structure guide (STORYBLOK-CONTENT-SETUP.md)
   - ✅ Automated script ready (add-all-content-blocks.js)

---

## 🚀 Two Options to Complete Setup

### Option 1: Automated (Fastest) ⚡

**Requirements:**
- Storyblok Space ID
- Storyblok Management Token (with Read & Write permissions)

**Steps:**

1. **Add credentials to `.env` file:**
```bash
# Add these lines to coldjet-storyblok-clone/.env
STORYBLOK_SPACE_ID=your_space_id_here
STORYBLOK_MANAGEMENT_TOKEN=your_management_token_here
```

2. **Find your credentials in Storyblok:**
   - **Space ID**: Settings → General → Space ID
   - **Management Token**: Settings → Access Tokens → Create New Token
     - Name it "Management API"
     - Select "Read & Write" permissions
     - Copy the token

3. **Run the script:**
```bash
cd coldjet-storyblok-clone
node add-all-content-blocks.js
```

4. **Deploy to Netlify:**
```bash
npm run build
npx netlify-cli deploy --prod --dir=build --site=4a113cde-26cd-4f2c-b6cb-c2a3653714de
```

---

### Option 2: Manual (More Control) 🎨

**Follow the detailed guide in `STORYBLOK-CONTENT-SETUP.md`**

1. Open Storyblok → Content → Home story
2. Click "Add Block" 16 times for each section
3. Configure each block using the JSON examples
4. Save and Publish
5. Deploy to Netlify (same command as above)

---

## 📋 Complete Block Checklist

Add these blocks to your Home story in this order:

- [ ] 1. Hero Section
- [ ] 2. Equipment Grid
- [ ] 3. Button Section (View all equipment)
- [ ] 4. Why Choose
- [ ] 5. Circular Economy
- [ ] 6. Industrial Challenges
- [ ] 7. Industry Cards
- [ ] 8. Button Section (Find a solution)
- [ ] 9. Why Choose Blasting (Comparison Table)
- [ ] 10. Cleaning Methods
- [ ] 11. On-Site Production
- [ ] 12. Cold Chain
- [ ] 13. Customers
- [ ] 14. Logo Grid
- [ ] 15. Testimonials
- [ ] 16. Global Offices

---

## 🎯 After Adding All Blocks

1. **Test in Storyblok Visual Editor:**
   - Every section should be clickable and editable
   - Changes should appear immediately in preview

2. **Deploy to Netlify:**
   ```bash
   cd coldjet-storyblok-clone
   npm run build
   npx netlify-cli deploy --prod --dir=build --site=4a113cde-26cd-4f2c-b6cb-c2a3653714de
   ```

3. **Verify on Live Site:**
   - Visit https://coldjet-storyblok-clone.netlify.app/
   - All 16 sections should display correctly

4. **Edit Content via CMS:**
   - Make changes in Storyblok
   - They'll appear instantly in Visual Editor
   - Publish to make them live

---

## 💡 Tips

- **Images**: Upload to Storyblok Assets first, then select in blocks
- **Alt Text**: Already added to 61+ assets
- **Component Order**: Must match the order above for correct layout
- **Publishing**: Always click "Publish" not just "Save"
- **Visual Editor**: Refresh if changes don't appear immediately

---

## 🐛 Troubleshooting

**Script fails with "This record could not be found":**
- Check your Space ID is correct
- Verify Management Token has Read & Write permissions

**Visual Editor shows my-company.com:**
- Already fixed! Should be working now

**Component not found error:**
- Verify component schema exists in Storyblok Settings → Block Library
- Check component name matches exactly (case-sensitive)

**Changes not appearing on live site:**
- Make sure to deploy after making Storyblok changes
- Clear browser cache

---

## ⏭️ What to Do Right Now

**Choose your path:**

**Path A (Automated):**
1. Provide Space ID and Management Token
2. I'll update .env and run the script
3. Deploy to Netlify
4. Done! ✅

**Path B (Manual):**
1. Open Storyblok
2. Follow STORYBLOK-CONTENT-SETUP.md guide
3. Add all 16 blocks manually
4. Deploy to Netlify
5. Done! ✅

**Which path would you like to take?**