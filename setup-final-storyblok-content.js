const axios = require('axios');
const fs = require('fs');
const path = require('path');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_';

// Step 1: Create WhyChoose component schema
async function createWhyChooseComponent() {
  try {
    const response = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components`,
      {
        component: {
          name: 'whyChoose',
          display_name: 'Why Choose',
          schema: {
            kicker: { type: 'text' },
            title: { type: 'text' },
            description: { type: 'textarea' },
            features: {
              type: 'bloks',
              restrict_components: true,
              component_whitelist: []
            }
          },
          is_root: false,
          is_nestable: true,
          component_group_uuid: null
        }
      },
      { headers: { 'Authorization': TOKEN } }
    );
    console.log('✓ Created WhyChoose component schema');
    return true;
  } catch (error) {
    if (error.response?.data?.error?.includes('already been taken')) {
      console.log('⏭ WhyChoose component already exists');
      return true;
    }
    console.error('✗ Failed to create WhyChoose:', error.response?.data || error.message);
    return false;
  }
}

// Step 2: Upload 18 logos to Storyblok
async function uploadLogos() {
  const logosFolder = 103373447989905;
  const logosDir = path.join(__dirname, 'storyblok-images', 'logos');
  
  const logoFiles = [
    { file: '3m-logo.jpg', alt: '3M company logo', title: '3M' },
    { file: 'apple-logo.png', alt: 'Apple company logo', title: 'Apple' },
    { file: 'bayer-logo.png', alt: 'Bayer company logo', title: 'Bayer' },
    { file: 'frito-lay-logo.png', alt: 'Frito-Lay company logo', title: 'Frito-Lay' },
    { file: 'ge-logo.png', alt: 'GE company logo', title: 'GE' },
    { file: 'goodyear-logo.png', alt: 'Goodyear company logo', title: 'Goodyear' },
    { file: 'graham-packaging-logo.png', alt: 'Graham Packaging company logo', title: 'Graham Packaging' },
    { file: 'honeywell-logo.png', alt: 'Honeywell company logo', title: 'Honeywell' },
    { file: 'john-deere-logo.png', alt: 'John Deere company logo', title: 'John Deere' },
    { file: 'johnson-johnson-logo.png', alt: 'Johnson & Johnson company logo', title: 'Johnson & Johnson' },
    { file: 'kraft-logo.png', alt: 'Kraft company logo', title: 'Kraft' },
    { file: 'nike-logo.png', alt: 'Nike company logo', title: 'Nike' },
    { file: 'red-d-arc-logo.png', alt: 'Red-D-Arc company logo', title: 'Red-D-Arc' },
    { file: 'siemens-logo.png', alt: 'Siemens company logo', title: 'Siemens' },
    { file: 'silgan-logo.png', alt: 'Silgan company logo', title: 'Silgan' },
    { file: 'true-logo.png', alt: 'True company logo', title: 'True' },
    { file: 'tyco-logo.png', alt: 'Tyco company logo', title: 'Tyco' },
    { file: 'westrock-logo.jpg', alt: 'WestRock company logo', title: 'WestRock' }
  ];
  
  console.log('\n📤 Uploading 18 logos to Storyblok...\n');
  
  const FormData = require('form-data');
  const uploaded = {};
  
  for (const logo of logoFiles) {
    const filePath = path.join(logosDir, logo.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ File not found: ${logo.file}`);
      continue;
    }
    
    try {
      // Step 1: Create signed upload
      const signResponse = await axios.post(
        `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
        {
          filename: logo.file,
          size: fs.statSync(filePath).size.toString(),
          asset_folder_id: logosFolder
        },
        { headers: { 'Authorization': TOKEN } }
      );
      
      const { id, signed_request, public_url, pretty_url } = signResponse.data;
      
      // Step 2: Upload to S3
      const formData = new FormData();
      const fields = signed_request.fields ? JSON.parse(signed_request.fields) : {};
      
      Object.keys(fields).forEach(key => {
        formData.append(key, fields[key]);
      });
      
      formData.append('file', fs.createReadStream(filePath));
      
      await axios.post(signed_request.post_url, formData, {
        headers: formData.getHeaders()
      });
      
      // Step 3: Update metadata
      await axios.put(
        `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets/${id}`,
        {
          alt: logo.alt,
          title: logo.title,
          name: logo.title
        },
        { headers: { 'Authorization': TOKEN } }
      );
      
      console.log(`✓ Uploaded: ${logo.title}`);
      uploaded[logo.file] = pretty_url || public_url;
      
      await new Promise(r => setTimeout(r, 1000));
      
    } catch (error) {
      console.error(`✗ Failed ${logo.file}:`, error.response?.data || error.message);
    }
  }
  
  // Save mapping
  fs.writeFileSync('logo-urls.json', JSON.stringify(uploaded, null, 2));
  console.log(`\n✅ Uploaded ${Object.keys(uploaded).length}/18 logos`);
  
  return uploaded;
}

async function main() {
  console.log('🚀 Setting up final Storyblok content...\n');
  console.log('═'.repeat(80));
  
  // Step 1: Create component schemas
  console.log('\n📋 Step 1: Creating component schemas...');
  await createWhyChooseComponent();
  
  // Step 2: Upload logos
  console.log('\n📋 Step 2: Uploading logos...');
  await uploadLogos();
  
  console.log('\n' + '═'.repeat(80));
  console.log('\n✅ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Update Home story in Storyblok to add whyChoose block');
  console.log('2. Ensure circularEconomy block is in the Home story content');
  console.log('3. Deploy to Netlify to see all changes live');
}

main().catch(console.error);