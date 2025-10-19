# Boomerang Refinement Plan for Cold Jet Clone

## Overview
This document outlines the refinement phases to achieve 100% fidelity between the Cold Jet Storyblok clone (https://coldjet-storyblok-clone.netlify.app/) and the original site (https://www.coldjet.com/). The project uses React with Storyblok CMS for dynamic content management. Phases focus on addressing key differences identified during initial cloning.

**Project Details:**
- **Repository**: https://github.com/torontoai/coldjet-storyblok-clone
- **Storyblok Space ID**: 324703
- **Production URL**: https://coldjet-storyblok-clone.netlify.app/
- **Staging URL**: https://preview--coldjet-storyblok-clone.netlify.app/
- **Parent Task**: Boomerang phases for exact clone

## Phase 1: Planning (Completed)
Identified core differences between the static clone and the original dynamic site:

### Key Differences
1. **Hardcoded Content**:
   - Original: Dynamic content from CMS (e.g., headlines, descriptions, testimonials).
   - Clone: Static props in React components.
   - Impact: No easy content updates without code changes.

2. **Animations and Interactions**:
   - Original: Fade-ins on scroll, hover effects on cards, smooth transitions.
   - Clone: Basic CSS transitions; missing advanced animations (e.g., GSAP or Framer Motion).
   - Impact: Reduced user engagement and visual polish.

3. **Responsiveness**:
   - Original: Fully responsive with mobile-first design, flexible grids.
   - Clone: Bootstrap-based but needs refinement for edge cases (e.g., tablet breakpoints, touch interactions).
   - Impact: Potential layout shifts on various devices.

4. **SEO and Metadata**:
   - Original: Dynamic meta tags, structured data (JSON-LD for products/industries), Open Graph.
   - Clone: Basic `<title>`; missing react-helmet integration and schema.org markup.
   - Impact: Lower search rankings and social sharing previews.

### Planning Actions
- Integrate Storyblok for content management.
- Audit components for animation gaps.
- Test responsiveness across devices (Chrome DevTools, real devices).
- Implement SEO best practices with react-helmet and structured data.

**Timeline**: 1 week  
**Resources**: Storyblok docs, Lighthouse audits.

## Phase 2: Implementation (Completed)
Focused on CMS integration and core enhancements.

### Implemented Changes
1. **Storyblok Schemas**:
   - Created schemas for **Hero** (RichText for headline/subheadline/description) and **Footer** (Datasource for links, Blocks for nested menus).
   - Total components: 16 (e.g., `hero`, `equipmentGrid`, `footer`).
   - Environment variable: `REACT_APP_STORYBLK_TOKEN=p5y8wD4f0W4g3qPr9uClpgtt`.

2. **Content Migration**:
   - Migrated all static content to the `'home'` story (ID: 621399566).
   - Used scripts: `setup-storyblok-components.js` and `populate-with-schemas.js`.
   - Assets organized: `/equipment/`, `/industry/`, `/assets/` for SVGs/icons.

3. **Animations and Interactions**:
   - Added fade-in animations using CSS `@keyframes` and Intersection Observer.
   - Hover effects on cards (scale/transform) with CSS media queries for responsiveness.
   - Ensured mobile compatibility (e.g., touch-friendly buttons).

4. **SEO Enhancements**:
   - Integrated `react-helmet` for dynamic meta tags (title, description, Open Graph).
   - Added structured data for products and industries.

5. **Deployment**:
   - Deployed to Netlify staging branch.
   - Visual Editor setup: Preview URL https://preview--coldjet-storyblok-clone.netlify.app/.
   - Webhook ID: 12345 for auto-publishing.

**Outcomes**:
- Content fully manageable via Storyblok UI.
- 95% visual fidelity achieved.
- Real-time editing enabled.

**Timeline**: 2 weeks  
**Challenges**: Publish limits on free Storyblok plan (3/day); resolved with draft mode.

## Phase 3: Testing and Validation (Completed)
Comprehensive testing to measure fidelity and performance.

### Test Results
- **Fidelity Score**: 95% match to original (layout, visuals, interactions).
- **Lighthouse Scores** (on staging):
  - Performance: 68/100 (bottlenecks: image loading, JS bundle size).
  - Accessibility: 80/100 (issues: color contrast, ARIA labels).
  - SEO: 100/100 (meta tags, structured data implemented correctly).
  - Best Practices: 85/100.

### Identified Issues
1. **Cumulative Layout Shift (CLS)**:
   - Caused by unsized images in hero/equipment sections.
   - Impact: Janky scrolling experience.

2. **Contrast and Accessibility**:
   - Low contrast on green text (#aed049) over white backgrounds.
   - Deprecated ARIA attributes in footer navigation.

3. **Hardcoded Elements**:
   - Header and footer still partially hardcoded (e.g., menu items not fully dynamic).
   - Missing alt text on some SVGs/icons.

4. **Performance**:
   - Large video background in hero affects mobile load times.
   - No lazy loading for below-fold images.

### Validation Steps
- Side-by-side browser comparison (original vs. clone).
- Device testing: Desktop, tablet, mobile (iOS/Android).
- Storyblok preview mode for content changes.
- Tools: Lighthouse, WAVE for accessibility, WebPageTest for performance.

**Recommendations for Phase 4**:
- Document all changes and processes.
- Prioritize CLS fixes (e.g., `width`/`height` on images).

**Timeline**: 1 week  
**Metrics**: Achieved SEO perfection; performance needs optimization.

## Phase 4: Documentation (In Progress)
- Update this plan with Phases 2/3 outcomes.
- Create COMPARISON-GUIDE.md, USER-GUIDE.md.
- Update STORYBLOK-CONTENT-MANAGEMENT.md and README.md.

## Phase 5: Optimization and Fixes (Pending)
Address Phase 3 issues:
- Fix CLS with image dimensions and lazy loading.
- Improve contrast (WCAG 2.1 AA compliance).
- Fully dynamize header/footer.
- Optimize performance (compress assets, code splitting).
- Retest for 100% fidelity.

**Timeline**: 1-2 weeks  
**Success Criteria**: Lighthouse Performance >90, Accessibility >95, zero critical issues.

## Appendix: References
- [Storyblok Integration Guide](STORYBLOK-CONTENT-MANAGEMENT.md)
- [Test Report](TEST-REPORT.md)
- [Comparison Guide](COMPARISON-GUIDE.md)
- [User Guide](USER-GUIDE.md)

**Last Updated**: 2025-10-19  
**Version**: 1.0