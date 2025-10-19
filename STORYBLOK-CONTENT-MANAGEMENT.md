# Storyblok Content Management Guide

## Overview

This Cold Jet homepage is now fully manageable through the Storyblok CMS UI. All content can be edited, added, or removed without touching code, while maintaining pixel-perfect design fidelity to the original site.

## 🎯 What Has Been Set Up

### 1. Component Schemas (16 Total)
All components have been created in Storyblok with proper field definitions:

- **page** - Root container component
- **hero** - Hero section with video background
- **equipmentGrid** - Equipment product grid
- **equipmentItem** - Individual equipment card
- **industryCards** - Industry service cards grid
- **industryCard** - Individual industry card
- **onSiteProduction** - Production applications section
- **productionCard** - Individual production card
- **testimonials** - Customer testimonials section
- **testimonial** - Individual testimonial
- **logoGrid** - Partner logo grid
- **logo** - Individual logo
- **footer** - Site footer
- **socialLink** - Social media link
- **menuColumn** - Footer menu column
- **link** - Generic link component

#### Detailed Schema Updates
- **Hero Schema**:
  - Uses **RichText** fields for flexible headline, subheadline, and description (supports bold, italic, links).
  - Fields: `headline` (RichText), `subheadline` (RichText), `description` (RichText), `video_url` (Asset/Video), `background_image` (Asset/Image).
  - Benefits: Allows inline formatting without custom parsing.

- **Footer Schema**:
  - Uses **Datasource** for predefined links (e.g., legal pages, social platforms) to ensure consistency.
  - Uses **Blocks** for nested menu structures (e.g., columns with sub-items).
  - Fields: `columns` (Blocks of `menuColumn`), `social_links` (Datasource multi-select), `copyright` (RichText), `logo` (Asset/Image).
  - Benefits: Dynamic nesting for complex footers; datasource prevents invalid URLs.

### 2. React Integration
All React components now:
- Accept data from Storyblok via the `blok` prop
- Provide sensible defaults if Storyblok data is unavailable
- Maintain exact CSS styling from the original site
- Support Storyblok's visual editor

### 3. Visual Editor Setup
- Preview URL configured: https://coldjet-storyblok-clone.netlify.app/
- Real-time editing enabled in Storyblok UI
- Changes visible immediately in preview

## 📝 How to Manage Content

### Accessing Storyblok

1. Go to https://app.storyblok.com/
2. Log in to your account
3. Select Space ID: **324703**
4. Navigate to the 'home' story: https://app.storyblok.com/#/me/spaces/324703/stories/0/0/621399566

### Editing Content

#### Hero Section
Fields you can edit:
- **Headline**: Main white headline text (RichText for formatting)
- **Subheadline**: Green accent headline (RichText)
- **Description**: Paragraph text (RichText)
- **Video URL**: Background video (MP4 format)
- **Background Image**: Fallback image if video doesn't load

#### Equipment Grid
Manage equipment products:
- **Add Item**: Click "+ Add block" and select "Equipment Item"
- **Edit Item**: Click on any equipment card
  - Title: Equipment name
  - Description: Product description
  - Image: Product photo (will use filename URL)
  - Link URL: Where the "View Solutions" button goes
  - Link Text: Button text

#### Industry Cards
Grid of 12 industry service cards:
- **Add/Remove Cards**: Use "+ Add block" or delete icon
- **Edit Card**:
  - Title: Industry name
  - Image: Background image with overlay
  - Link: Industry page URL

#### On-Site Production
Production application cards:
- **Title**: Section heading
- **Cards**: Array of production cards
  - Title: Application name
  - Image: Card background
  - Link: Application page URL

#### Logo Grid
Partner/customer logos:
- **Title**: Section heading (optional)
- **Logos**: Array of logo blocks
  - Image: Logo file
  - Alt: Accessibility text

#### Testimonials
Customer testimonial carousel:
- **Title**: Section heading
- **Items**: Array of testimonials
  - Quote: Customer testimonial text
  - Author: Person's name
  - Company: Company name and title
  - Image: Company/person logo (optional)

### Content Migration Steps
To migrate or update content from static to dynamic:

1. **Prepare Data**:
   - Export original content (e.g., copy text from clone components).
   - Organize assets: Upload images/videos to Storyblok Asset Library.

2. **Run Setup Script** (One-time):
   ```
   cd coldjet-storyblok-clone
   node setup-storyblok-components.js
   ```
   - Creates all schemas if not present.

3. **Populate 'home' Story**:
   ```
   node populate-with-schemas.js
   ```
   - Imports content into the 'home' story as draft.
   - Maps static props to fields (e.g., hero headline to RichText).

4. **Manual Review and Edit**:
   - Open 'home' story in Storyblok.
   - Verify RichText rendering (e.g., bold in hero).
   - Adjust Footer blocks/datasources for nested menus.

5. **Asset Migration**:
   - See "Asset Organization" section below.
   - Update image fields to use Storyblok URLs.

6. **Test and Publish**:
   - Preview changes.
   - Publish (mind 3/day limit).

**Reference**: See [REFINEMENT-PLAN.md](REFINEMENT-PLAN.md) for Phase 2 migration details.

### Asset Organization
Assets are structured for easy management:

- **/equipment/**: Product images (e.g., dry-ice-blasting.jpg) – Upload here for equipmentGrid items.
- **/industry/**: Background images for industry cards (e.g., aerospace-bg.png).
- **/assets/**: SVGs/icons (e.g., social-icons.svg, logos/) – Used in footer/logoGrid.

**Best Practices**:
- Upload to Storyblok Asset Library for CDN optimization.
- Name files descriptively (kebab-case).
- Add alt text/metadata during upload.
- For external assets (coldjet.com), reference URLs; prefer internal for performance.

### Publishing Changes

**Important**: Free Storyblok plan allows only 3 publishes per day.

#### Option 1: Manual Publishing (Recommended)
1. Make all your edits in Storyblok UI
2. Click the green "Publish" button in top right
3. Changes will appear on live site within ~30 seconds

#### Option 2: Draft Mode Testing
1. Make edits and save as draft
2. Test in preview mode
3. Publish when ready

## 🔧 Technical Details

### Environment Variables
Required in Netlify:
```
REACT_APP_STORYBLOK_TOKEN=p5y8wD4f0W4g3qPr9uClpgtt
```

### Component Mapping
React components automatically map to Storyblok blocks:
```javascript
hero → Hero.js
equipmentGrid → EquipmentGrid.js
industryCards → IndustryCards.js
onSiteProduction → OnSiteProduction.js
testimonials → Testimonials.js
logoGrid → LogoGrid.js
footer → Footer.js
```

### Image Assets
Images can be:
1. **External URLs** (current setup): Images hosted on coldjet.com
2. **Storyblok Assets** (recommended for production):
   - Upload to Storyblok Asset Library
   - Use `image.filename` in components
   - Better performance and control

### Default Fallbacks
All components have hardcoded defaults that match the original site. If Storyblok data isn't available, the site will still render correctly with the original content.

## 🚀 Deployment Workflow

### Current Setup
- **Repository**: Local development
- **Hosting**: Netlify (https://coldjet-storyblok-clone.netlify.app/)
- **CMS**: Storyblok Space 324703
- **CDN Token**: p5y8wD4f0W4g3qPr9uClpgtt

### Making Updates

#### Content Updates (No Code Changes)
1. Edit content in Storyblok UI
2. Publish changes
3. Site automatically updates (uses draft CDN endpoint)

#### Code/Design Updates
1. Make changes to React components locally
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=build`
4. Site updates within seconds

## 📊 Storyblok Scripts Reference

### Setup Component Schemas
```bash
node setup-storyblok-components.js
```
Creates all 16 component schemas in Storyblok. Only needs to run once.

### Populate Content
```bash
node populate-with-schemas.js
```
Updates the 'home' story with schema-based content. Saves as draft to avoid publish limits.

### List Stories
```bash
node list-stories-new-space.js
```
Lists all stories in the Storyblok space for debugging.

## 🎨 Maintaining Design Fidelity

### CSS/Styling
All CSS remains in component `.css` files:
- Colors: `#aed049` (green), `#084896` (blue), `#2a385b` (footer)
- Fonts: Avenir Next Condensed, Avenir Next, Montserrat
- Overlays: `rgba(0, 0, 0, 0.5)` for hero, `rgba(0, 0, 0, 0.4)` for cards

### Layout
- Container widths: `container`, `container-xxl`, `container--xl`
- Grid: Bootstrap-style `row` and `col-*` classes
- Spacing: Margin/padding utility classes

### Images
- Equipment images: Local `/images/` directory
- Industry/production cards: External coldjet.com URLs
- Logos: External URLs

## ⚠️ Important Notes

### Free Plan Limitations
- **3 publishes per day**: Save edits as drafts, publish when ready
- **Development mode**: Limited to draft content editing
- **No custom workflow**: Manual approval not available

### Best Practices
1. **Batch Your Edits**: Make multiple changes before publishing
2. **Use Draft Mode**: Test thoroughly before publishing
3. **Backup Content**: Export story JSON before major changes
4. **Image Optimization**: Compress images before uploading
5. **Consistent Naming**: Use clear, descriptive names for blocks

### Troubleshooting

**Site shows old content after publishing:**
- Clear browser cache
- Wait 30-60 seconds for CDN propagation
- Check if using `version=draft` in API call

**Components not rendering:**
- Verify component mapping in App.js
- Check console for errors
- Ensure blok data structure matches schema

**Images not loading:**
- Check image URLs are accessible
- Verify CORS if using external images
- Consider uploading to Storyblok Asset Library

**RichText/Blocks Issues:**
- Ensure nested blocks are properly configured in schema.
- Test formatting in Visual Editor.

## 📞 Support Resources

- **Storyblok Docs**: https://www.storyblok.com/docs
- **React SDK**: https://github.com/storyblok/storyblok-react
- **API Reference**: https://www.storyblok.com/docs/api

## 🔄 Future Enhancements

Consider implementing:
1. **Storyblok Asset Library**: Upload images to Storyblok for better control
2. **Webhooks**: Auto-deploy on publish events
3. **Multi-language**: Set up internationalization
4. **Scheduled Publishing**: Plan content releases
5. **Collaboration**: Invite team members to edit content
6. **Custom Fields**: Add SEO metadata, structured data
7. **Paid Plan**: Remove publish limits, add workflows

---

**Last Updated**: 2025-10-19  
**Space ID**: 324703  
**Site URL**: https://coldjet-storyblok-clone.netlify.app/  
**Storyblok Story**: https://app.storyblok.com/#/me/spaces/324703/stories/0/0/621399566

**References**:
- [REFINEMENT-PLAN.md](REFINEMENT-PLAN.md) for phase details
- [COMPARISON-GUIDE.md](COMPARISON-GUIDE.md) for fidelity verification
- [USER-GUIDE.md](USER-GUIDE.md) for end-user instructions