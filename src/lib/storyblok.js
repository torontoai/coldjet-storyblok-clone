const apiToken = process.env.REACT_APP_STORYBLOK_PREVIEW_TOKEN;

if (!apiToken) {
  console.error('REACT_APP_STORYBLOK_PREVIEW_TOKEN environment variable is not set');
}

export const getStoryContent = async (slug = 'home') => {
  if (!apiToken) {
    console.error('No API token available');
    return null;
  }
  
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=draft&token=${apiToken}&cv=${Date.now()}`
    );
    
    if (!response.ok) {
      console.error(`Storyblok API error: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
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