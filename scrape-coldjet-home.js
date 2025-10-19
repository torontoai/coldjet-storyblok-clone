const puppeteer = require('puppeteer');

async function scrapeHomepage() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.coldjet.com/', { waitUntil: 'networkidle2' });

  // Extract hero section
  const hero = await page.evaluate(() => {
    const heroEl = document.querySelector('.hero, .banner, [class*="hero"], [class*="banner"]');
    if (heroEl) {
      return {
        headline: heroEl.querySelector('h1')?.innerText || '',
        subheadline: heroEl.querySelector('h2')?.innerHTML || '',
        text: heroEl.querySelector('p')?.innerText || '',
        ctaText: heroEl.querySelector('a.btn')?.innerText || '',
        ctaUrl: heroEl.querySelector('a.btn')?.href || '',
        videoUrl: heroEl.querySelector('video source')?.src || heroEl.querySelector('video')?.src || '',
      };
    }
    return null;
  });

  // Extract equipment grid
  const equipment = await page.evaluate(() => {
    const gridEl = document.querySelector('.grid, .equipment, [class*="grid"], [class*="equipment"]');
    if (gridEl) {
      const items = Array.from(gridEl.querySelectorAll('.item, .card, [class*="item"], [class*="card"]')).map(item => ({
        name: item.querySelector('h3, .title')?.innerText || '',
        description: item.querySelector('p')?.innerText || '',
        image: item.querySelector('img')?.src || '',
        url: item.querySelector('a')?.href || '',
      }));
      return { title: gridEl.querySelector('h2, .title')?.innerText || '', items };
    }
    return null;
  });

  // Extract industry cards
  const industries = await page.evaluate(() => {
    const cardsEl = document.querySelector('.industries, .cards, [class*="industry"], [class*="card"]');
    if (cardsEl) {
      const cards = Array.from(cardsEl.querySelectorAll('.card, .industry-card')).map(card => ({
        title: card.querySelector('h3, .title')?.innerText || '',
        description: card.querySelector('p')?.innerText || '',
        image: card.querySelector('img')?.src || '',
        url: card.querySelector('a')?.href || '',
      }));
      return { title: cardsEl.querySelector('h2')?.innerText || '', cards };
    }
    return null;
  });

  // Extract testimonials
  const testimonials = await page.evaluate(() => {
    const testEl = document.querySelector('.testimonials, [class*="testimonial"]');
    if (testEl) {
      const quotes = Array.from(testEl.querySelectorAll('.testimonial, .quote')).map(quote => ({
        quote: quote.querySelector('.quote-text')?.innerText || '',
        author: quote.querySelector('.author')?.innerText || '',
      }));
      return { title: testEl.querySelector('h2')?.innerText || '', testimonials: quotes };
    }
    return null;
  });

  // Extract footer
  const footer = await page.evaluate(() => {
    const footerEl = document.querySelector('footer');
    if (footerEl) {
      return {
        links: Array.from(footerEl.querySelectorAll('a')).map(a => ({ text: a.innerText, url: a.href })),
      };
    }
    return null;
  });

  // Extract other sections (banner, products, etc.)
  const otherSections = await page.evaluate(() => {
    const sections = [];
    const sectionEls = document.querySelectorAll('.section, .block, [class*="section"]');
    sectionEls.forEach((el, index) => {
      if (!el.querySelector('.hero, .grid, .testimonials, footer')) { // Avoid duplicates
        sections.push({
          type: el.className || `section-${index}`,
          title: el.querySelector('h2, h3')?.innerText || '',
          text: el.innerText.substring(0, 200) + '...',
          image: el.querySelector('img')?.src || '',
        });
      }
    });
    return sections;
  });

  await browser.close();

  console.log('Hero:', JSON.stringify(hero, null, 2));
  console.log('Equipment:', JSON.stringify(equipment, null, 2));
  console.log('Industries:', JSON.stringify(industries, null, 2));
  console.log('Testimonials:', JSON.stringify(testimonials, null, 2));
  console.log('Footer:', JSON.stringify(footer, null, 2));
  console.log('Other Sections:', JSON.stringify(otherSections, null, 2));
}

scrapeHomepage().catch(console.error);