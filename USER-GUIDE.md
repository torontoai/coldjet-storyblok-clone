# User Guide: Managing Content for Cold Jet Storyblok Clone

## Overview
This guide is for content managers (non-developers) who need to update the Cold Jet homepage without coding. The site uses Storyblok CMS to make everything editable via a visual interface. Changes appear live on the site after publishing.

**Key Benefits**:
- Edit text, images, and sections directly.
- No code knowledge required.
- Preview changes before going live.
- Maintain 95% fidelity to the original design (https://www.coldjet.com/).

**Prerequisites**:
- Storyblok account access (Space ID: 324703).
- Basic familiarity with web interfaces (drag-and-drop, text editing).
- For publishing: Netlify webhook setup (ID: 12345 – handled by devs).

**References**:
- [STORYBLOK-CONTENT-MANAGEMENT.md](STORYBLOK-CONTENT-MANAGEMENT.md) for technical details.
- [COMPARISON-GUIDE.md](COMPARISON-GUIDE.md) to verify changes match the original.
- Site: https://coldjet-storyblok-clone.netlify.app/ (production), https://preview--coldjet-storyblok-clone.netlify.app/ (staging).

## 1. Accessing Storyblok
1. Open your browser and go to https://app.storyblok.com/.
2. Log in with your credentials (contact admin if no access).
3. Select the space: **Cold Jet Clone (ID: 324703)**.
4. Open the **'home' story**: Click "Content" > "Pages" > "home" (or direct link: https://app.storyblok.com/#/me/spaces/324703/stories/0/0/621399566).
   - This is the main page for the homepage content.

**Tip**: Bookmark the 'home' story for quick access.

## 2. Editing the 'home' Story
The 'home' story is structured as nested blocks (sections like Hero, Equipment Grid). Edit like a document.

### Step-by-Step Editing
1. **Open Edit Mode**:
   - In the 'home' story, click the pencil icon or double-click a section.

2. **Edit Text and Fields**:
   - **Hero Section**: Click the Hero block.
     - Headline/Subheadline/Description: Use the RichText editor (like Word: bold, italic, links).
     - Video URL: Paste MP4 link or upload.
     - Background Image: Drag-and-drop or browse.
   - **Equipment Grid**: Click "Equipment Grid" block > "+ Add" for new items.
     - For each Equipment Item: Edit title, description, image (upload/replace), link (URL and text).
   - **Industry Cards**: Similar to equipment; add/remove cards, edit title/image/link.
   - **On-Site Production**: Edit section title; add production cards with title/image/link.
   - **Testimonials**: Edit carousel title; add testimonials (quote, author, company, image).
   - **Logo Grid**: Edit title; add logos (image + alt text).
   - **Footer**: Click Footer block.
     - Menu Columns: Use Blocks to add sub-menus (e.g., "Products" > nested links).
     - Social Links: Select from Datasource (predefined platforms).
     - Copyright: Edit text.

3. **Save Changes**:
   - Click "Save" after each edit (auto-saves drafts).
   - Use "Preview" button to see changes in a new tab (uses staging URL).

4. **Add/Remove Sections**:
   - In the main 'home' body: "+ Add block" to insert new sections (e.g., add another grid).
   - Delete: Hover over block > trash icon.

**Example: Updating Hero Text**
- Click Hero > Headline field.
- Type new text: "Revolutionary Dry Ice Solutions".
- Format: Bold key phrases.
- Save > Preview to check alignment.

**Best Practices**:
- Keep text concise (match original lengths to avoid layout shifts).
- Use consistent formatting (e.g., green accents via subheadline).
- Test on mobile preview (Storyblok has device toggle).

## 3. Uploading Assets
Images, videos, and icons power the visuals. Upload to Storyblok for automatic optimization.

### Steps to Upload
1. In Storyblok, go to **Assets** (left sidebar) > "Upload".
2. **Drag-and-Drop or Browse**:
   - Select files from your computer (JPG, PNG, MP4, SVG).
   - Recommended sizes: Images <500KB, videos <10MB (compress first).
3. **Organize Folders**:
   - Create folders: `/equipment/` (product photos), `/industry/` (backgrounds), `/assets/` (icons/SVGs).
   - Drag files into folders during upload.
4. **Add Metadata**:
   - After upload: Edit asset > Add alt text (e.g., "Dry Ice Blasting Equipment"), title, description.
   - For SEO: Include keywords.
5. **Use in Content**:
   - In a block (e.g., Equipment Item): Click image field > "Select Asset" > Choose from library.
   - Copy filename URL if needed (e.g., for external use).

**Asset Guidelines**:
- Formats: PNG for logos (transparent), JPG for photos, SVG for icons.
- Optimization: Use tools like TinyPNG before upload.
- Organization: Follow `/equipment/`, `/industry/`, `/assets/` structure for easy finding.
- Limits: Free plan has 50MB storage; upgrade for more.

**Troubleshooting Uploads**:
- File too large? Compress or split.
- Not showing? Refresh Assets tab.

## 4. Using Visual Editor and Bridge
Storyblok's Visual Editor lets you edit directly on the site preview. Bridge is the in-browser toolbar.

### Visual Editor
1. In 'home' story > Click **"Visual Editor"** (eye icon).
2. A new tab opens with the staging site (https://preview--coldjet-storyblok-clone.netlify.app/).
3. **Inline Editing**:
   - Hover over elements (e.g., hero text) > Click edit icon.
   - Changes save to draft automatically.
   - Drag blocks to reorder sections.
4. **Exit**: Close tab or click "Save & Close".

**Benefits**: See exact layout while editing; no need to switch tabs.

### Bridge (In-Browser Toolbar)
1. Enable: In Visual Editor, Bridge appears as a floating bar.
2. **Features**:
   - **Undo/Redo**: Revert changes.
   - **Device Preview**: Switch to mobile/tablet view.
   - **Content Toggle**: Show/hide blocks.
   - **Save/Publish**: Quick actions.
3. **Using Bridge**:
   - Edit text inline > Bridge saves.
   - Add block: Click "+" in Bridge > Select type (e.g., Testimonial).

**Tip**: Use Bridge for quick tweaks; full editor for complex changes like adding columns.

## 5. Publishing to Staging/Production
Changes go live via publishing. Free plan: 3 publishes/day.

### Publishing Workflow
1. **Review Draft**:
   - In Storyblok: Ensure all edits saved.
   - Preview in Visual Editor.

2. **Publish to Staging**:
   - Click **"Publish"** in top-right (green button).
   - Select "Publish to Draft" for testing (uses staging URL).
   - Webhook (ID: 12345) auto-deploys to https://preview--coldjet-storyblok-clone.netlify.app/ (~30s).

3. **Publish to Production**:
   - After staging approval: Click "Publish" again (or schedule).
   - Webhook triggers deploy to https://coldjet-storyblok-clone.netlify.app/.
   - Live in ~1 minute.

4. **Rollback**:
   - If issues: In Storyblok > Versions tab > Revert to previous publish.

**Netlify Branches**:
- Staging: `preview--coldjet-storyblok-clone` branch.
- Production: `main` branch.
- Webhook auto-builds on publish.

**Limits and Tips**:
- Batch changes to avoid publish limits.
- Use drafts for collaboration (share preview link).
- Notify team before production publish.

## 6. Troubleshooting
Common issues and fixes for content managers.

### General
- **Changes Not Visible?**
  - Clear browser cache (Ctrl+Shift+R).
  - Wait 30-60s for CDN update.
  - Check URL: Staging vs. Production.

- **Layout Shifts (CLS)**:
  - Cause: Images without sizes.
  - Fix: In asset upload, add width/height metadata. Or contact dev to add `width`/`height` attrs in code.
  - Verify: Use Lighthouse (Performance tab) – aim for CLS <0.1.

- **Images/Videos Not Loading**:
  - Check URL in preview.
  - Re-upload if corrupted.
  - External links? Ensure no CORS blocks (prefer Storyblok assets).

- **RichText Formatting Lost**:
  - Use only supported tags (bold, italic, links).
  - Test in preview; avoid complex HTML.

- **Footer/Menu Issues**:
  - Datasource empty? Devs need to populate options.
  - Nested blocks broken? Re-add sub-items.

- **Publish Limit Reached**:
  - Wait 24h or use drafts.
  - Upgrade to paid plan for unlimited.

- **Error Messages**:
  - "Invalid Field": Check schema matches (e.g., URL field for links).
  - Bridge not loading: Disable ad-blockers; refresh.

### Advanced Troubleshooting
- Console Errors: Right-click site > Inspect > Console (share with devs).
- Compare to Original: Use [COMPARISON-GUIDE.md](COMPARISON-GUIDE.md).
- Contact Support: Storyblok help (https://www.storyblok.com/support) or project admin.

**CLS-Specific Fixes (Non-Code)**:
- Upload images with explicit dimensions (e.g., 800x600).
- Reserve space in preview (add placeholder text temporarily).
- Test on slow connections (Chrome throttling).

## Next Steps
- Practice: Edit a test story (duplicate 'home').
- Collaborate: Invite users via Storyblok settings.
- Monitor: Use Google Analytics on production for engagement.

For dev help: Refer to [REFINEMENT-PLAN.md](REFINEMENT-PLAN.md) or Phase 5 optimizations.

**Last Updated**: 2025-10-19  
**Version**: 1.0  
**Support**: Space ID 324703 | Webhook ID 12345