# Cold Jet Storyblok Clone

## Overview
This is a React-based clone of the Cold Jet homepage (https://www.coldjet.com/), integrated with Storyblok CMS for dynamic content management. The project achieves **95% fidelity** to the original through the Boomerang refinement process (Phases 1-4 completed). It supports real-time editing, SEO optimization, and responsive design.

**Key Features**:
- **CMS Integration**: All content (hero, equipment, industries, testimonials, footer) managed via Storyblok (Space ID: 324703).
- **Refinements**:
  - Phase 1: Planned differences (hardcoded content, animations, responsiveness, SEO).
  - Phase 2: Implemented Storyblok schemas (e.g., Hero RichText, Footer Datasource/Blocks), animations (fade-ins, hovers), react-helmet for meta tags, content migration to 'home' story.
  - Phase 3: Tested for 95% fidelity; Lighthouse scores: Performance 68/100, Accessibility 80/100, SEO 100/100. Issues: CLS from images, contrast, ARIA, hardcoded elements.
  - Phase 4: Comprehensive documentation (see below).
- **Production**: https://coldjet-storyblok-clone.netlify.app/
- **Staging**: https://preview--coldjet-storyblok-clone.netlify.app/
- **Repository**: https://github.com/torontoai/coldjet-storyblok-clone

For full refinement details, see [REFINEMENT-PLAN.md](REFINEMENT-PLAN.md). Compare with original: [COMPARISON-GUIDE.md](COMPARISON-GUIDE.md).

## Documentation
- **[REFINEMENT-PLAN.md](REFINEMENT-PLAN.md)**: Phases and outcomes.
- **[COMPARISON-GUIDE.md](COMPARISON-GUIDE.md)**: Side-by-side analysis (95% fidelity, screenshots referenced).
- **[STORYBLOK-CONTENT-MANAGEMENT.md](STORYBLOK-CONTENT-MANAGEMENT.md)**: Schemas, migration, assets (/equipment/, /industry/, /assets/).
- **[USER-GUIDE.md](USER-GUIDE.md)**: For content managers (editing, uploads, Visual Editor, publishing, troubleshooting CLS).
- **[TEST-REPORT.md](TEST-REPORT.md)**: Phase 3 results (if available).

## Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Storyblok access (Space ID: 324703, Token: `p5y8wD4f0W4g3qPr9uClpgtt`)

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/torontoai/coldjet-storyblok-clone.git
   cd coldjet-storyblok-clone
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set environment variable (`.env` file):
   ```
   REACT_APP_STORYBLOK_TOKEN=p5y8wD4f0W4g3qPr9uClpgtt
   ```

### Development
- Start dev server:
  ```
  npm start
  ```
  Opens http://localhost:3000 with hot reload.

- Run tests:
  ```
  npm test
  ```

- Build for production:
  ```
  npm run build
  ```

### Storyblok Integration
- **Token**: Use `REACT_APP_STORYBLOK_TOKEN` for API access (draft/published content).
- **Components**: 16 schemas mapped to React (e.g., `hero` → `Hero.js`).
- **Content**: Edit 'home' story (ID: 621399566) at https://app.storyblok.com/#/me/spaces/324703/stories/0/0/621399566.
- **Visual Editor**: Preview URL: https://coldjet-storyblok-clone.netlify.app/.
- **Scripts**:
  - Setup schemas: `node setup-storyblok-components.js`
  - Populate content: `node populate-with-schemas.js`
  - List stories: `node list-stories-new-space.js`
- **Webhooks**: ID 12345 – Auto-deploys on publish (Netlify integration).
- **Limits**: Free plan: 3 publishes/day; use drafts for testing.

For details: [STORYBLOK-CONTENT-MANAGEMENT.md](STORYBLOK-CONTENT-MANAGEMENT.md).

## Deployment
Hosted on Netlify with branch deploys.

### Netlify Setup
1. Connect GitHub repo to Netlify.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Environment vars: `REACT_APP_STORYBLOK_TOKEN=p5y8wD4f0W4g3qPr9uClpgtt`
3. Branches:
   - **Production**: `main` → https://coldjet-storyblok-clone.netlify.app/
   - **Staging/Preview**: `preview--coldjet-storyblok-clone` → https://preview--coldjet-storyblok-clone.netlify.app/
4. Webhook: ID 12345 triggers builds on Storyblok publish.

### Manual Deploy
```
npm run build
netlify deploy --prod --dir=build
```

### CI/CD
- Git push to `main`: Auto-builds production.
- Storyblok publish: Webhook auto-deploys changes (~30s).

## Contributing
1. Fork and clone.
2. Create branch: `git checkout -b feature/refinement`.
3. Commit: `git commit -m "Add Phase 5 CLS fix"`.
4. Push and PR to `main`.
5. Test: Run Lighthouse; verify Storyblok integration.

Follow [REFINEMENT-PLAN.md](REFINEMENT-PLAN.md) for Phase 5 (optimizations: CLS, contrast, performance).

## License
MIT License. See original Create React App terms.

---

**Last Updated**: 2025-10-19  
**Ready for Phase 5**: Docs cover all refinements for maintenance and handoff.