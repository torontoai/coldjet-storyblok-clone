import { storyblokInit, apiPlugin } from '@storyblok/js';

const apiToken = process.env.REACT_APP_STORYBLOK_PREVIEW_TOKEN;

if (!apiToken) {
  console.error('REACT_APP_STORYBLOK_TOKEN environment variable is not set');
}

const { storyblokApi } = storyblokInit({
  accessToken: apiToken,
  use: [apiPlugin],
});

export const storyblok = storyblokApi;

export const getStoryContent = async (slug = 'home') => {
  try {
    const { data } = await storyblok.get(`cdn/stories/${slug}`, {
      version: 'draft',
      cv: Date.now(), // Cache busting for live updates
    });
    return data.story;
  } catch (error) {
    console.error(`Error fetching story for slug '${slug}':`, error);
    return null;
  }
};

export const getComponent = (componentName, content) => {
  // Component resolver for dynamic components
  const components = {
    header: () => import('../components/Header'),
    hero: () => import('../components/Hero'),
    equipmentGrid: () => import('../components/EquipmentGrid'),
    industryCards: () => import('../components/IndustryCards'),
    testimonials: () => import('../components/Testimonials'),
    footer: () => import('../components/Footer'),
    banner: () => import('../components/Banner'),
    productSection: () => import('../components/ProductSection'),
    circularEconomy: () => import('../components/CircularEconomy'),
    industrialChallenges: () => import('../components/IndustrialChallenges'),
    cleaningMethods: () => import('../components/CleaningMethods'),
    onSiteProduction: () => import('../components/OnSiteProduction'),
    coldChain: () => import('../components/ColdChain'),
    customers: () => import('../components/Customers'),
    logoGrid: () => import('../components/LogoGrid'),
    globalOffices: () => import('../components/GlobalOffices'),
  };

  const component = components[componentName];
  if (!component) {
    console.warn(`Component ${componentName} not found`);
    return null;
  }

  return component().then((module) => {
    return module.default || module;
  });
};