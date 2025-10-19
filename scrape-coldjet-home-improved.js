const puppeteer = require('puppeteer');

async function scrapeHomepage() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.coldjet.com/', { waitUntil: 'networkidle2' });

  // Wait for hero/video to load
  await page.waitForSelector('video, .hero, .banner, .home-hero', { timeout: 10000 }).catch(() => {});

  // Extract hero section with better selectors
  const hero = await page.evaluate(() => {
    // Try multiple selectors for hero
    const heroSelectors = ['.hero', '.banner', '.home-hero', '[class*="hero"]', '[class*="banner"]', '.video-background', 'section:first-of-type'];
    let heroEl = null;
    for (const selector of heroSelectors) {
      heroEl = document.querySelector(selector);
      if (heroEl) break;
    }
    if (heroEl) {
      // Look for overlay text
      const overlay = heroEl.querySelector('.overlay, .content, .text-content, .hero-content');
      const headline = overlay ? overlay.querySelector('h1')?.innerText.trim() : heroEl.querySelector('h1')?.innerText.trim() || '';
      const subheadline = overlay ? overlay.querySelector('h2')?.innerHTML.trim() : heroEl.querySelector('h2')?.innerHTML.trim() || '';
      const text = overlay ? overlay.querySelector('p')?.innerText.trim() : heroEl.querySelector('p')?.innerText.trim() || '';
      const cta = overlay ? overlay.querySelector('a.btn, .cta') : heroEl.querySelector('a.btn, .cta');
      const ctaText = cta ? cta.innerText.trim() : '';
      const ctaUrl = cta ? cta.href : '';
      const video = heroEl.querySelector('video');
      const videoUrl = video ? video.querySelector('source')?.src || video.src : '';
      return {
        headline,
        subheadline,
        text,
        ctaText,
        ctaUrl,
        videoUrl,
        backgroundVideo: !!video,
      };
    }
    return null;
  });

  // Extract equipment grid with better selectors
  const equipment = await page.evaluate(() => {
    const gridSelectors = ['.equipment', '.grid', '.products', '[class*="equipment"]', '[class*="product"]', '.row .col-md-6'];
    let gridEl = null;
    for (const selector of gridSelectors) {
      gridEl = document.querySelector(selector);
      if (gridEl && gridEl.querySelectorAll('.item, .card, .product').length > 0) break;
    }
    if (gridEl) {
      const items = Array.from(gridEl.querySelectorAll('.item, .card, .product, .col-md-6')).slice(0, 4).map(item => ({
        name: item.querySelector('h3, h4, .title')?.innerText.trim() || '',
        description: item.querySelector('p')?.innerText.trim() || '',
        image: item.querySelector('img')?.src || '',
        url: item.querySelector('a')?.href || '',
      })).filter(item => item.name);
      const title = gridEl.querySelector('h2, .section-title')?.innerText.trim() || '';
      return { title, items };
    }
    return null;
  });

  // Extract industry cards
  const industries = await page.evaluate(() => {
    const cardSelectors = ['.industries', '.cards', '[class*="industry"]', '.row .col-lg-3'];
    let cardsEl = null;
    for (const selector of cardSelectors) {
      cardsEl = document.querySelector(selector);
      if (cardsEl && cardsEl.querySelectorAll('.card, .industry-card, .col').length > 0) break;
    }
    if (cardsEl) {
      const cards = Array.from(cardsEl.querySelectorAll('.card, .industry-card, .col-lg-3')).slice(0, 6).map(card => ({
        title: card.querySelector('h3, h4, .title')?.innerText.trim() || '',
        description: card.querySelector('p')?.innerText.trim() || '',
        image: card.querySelector('img')?.src || '',
        url: card.querySelector('a')?.href || '',
      })).filter(card => card.title);
      const title = cardsEl.querySelector('h2')?.innerText.trim() || '';
      return { title, cards };
    }
    return null;
  });

  // Extract testimonials
  const testimonials = await page.evaluate(() => {
    const testSelectors = ['.testimonials', '[class*="testimonial"]', '.quotes'];
    let testEl = null;
    for (const selector of testSelectors) {
      testEl = document.querySelector(selector);
      if (testEl) break;
    }
    if (testEl) {
      const quotes = Array.from(testEl.querySelectorAll('.testimonial, .quote, .review')).map(quote => ({
        quote: quote.querySelector('.quote-text, p')?.innerText.trim() || '',
        author: quote.querySelector('.author, .name')?.innerText.trim() || '',
        company: quote.querySelector('.company')?.innerText.trim() || '',
      })).filter(q => q.quote);
      const title = testEl.querySelector('h2')?.innerText.trim() || '';
      return { title, testimonials: quotes };
    }
    return null;
  });

  // Extract footer
  const footer = await page.evaluate(() => {
    const footerEl = document.querySelector('footer');
    if (footerEl) {
      const links = Array.from(footerEl.querySelectorAll('a')).map(a => ({
        text: a.innerText.trim(),
        url: a.href,
      })).filter(l => l.text);
      const copyright = footerEl.querySelector('.copyright')?.innerText.trim() || '';
      return { links, copyright };
    }
    return null;
  });

  // Extract other sections (banners, products, challenges, etc.)
  const otherSections = await page.evaluate(() => {
    const sections = [];
    const sectionEls = document.querySelectorAll('section, .section, .block');
    sectionEls.forEach((el, index) => {
      if (!el.closest('.hero, .equipment, .industries, .testimonials, footer')) {
        const type = el.className.split(' ')[0] || `section-${index}`;
        const title = el.querySelector('h2, h3')?.innerText.trim() || '';
        const text = el.innerText.substring(0, 300).trim() + (el.innerText.length > 300 ? '...' : '');
        const image = el.querySelector('img')?.src || '';
        const cta = el.querySelector('a.btn')?.innerText.trim() || '';
        sections.push({ type, title, text, image, cta });
      }
    });
    return sections.slice(0, 10); // Limit to top 10
  });

  await browser.close();

  const scrapedData = {
    hero,
    equipment,
    industries,
    testimonials,
    footer,
    otherSections,
  };

  console.log('Scraped Data:', JSON.stringify(scrapedData, null, 2));
  return scrapedData;
}

scrapeHomepage().catch(console.error);