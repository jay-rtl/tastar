// Client-editable content. Confirm draft copy before publication.
export const company = {
  name: 'TASTAR', fullName: 'Triple A Services, Technologies, and Resources',
  contact: 'Valerio C. Tanguilig, PhD', email: 'v.tanguilig@gmail.com', phone: '+61 437 119 780',
  location: 'Brisbane, Queensland, Australia',
  linkedin: 'https://www.linkedin.com/in/valerio-tanguilig-phd-a79479125/',
};
export const navigation = [['Home','home'],['About','about'],['TASTAR','tastar'],['Services','services'],['Profile','profile'],['Contact','contact']];
export const services = [
  {name:'Agricultural consulting', description:'Practical technical guidance for farmers, growers, and agricultural businesses.', icon:'compass', type:'Consulting'},
  {name:'Agricultural inputs', description:'Connecting your operation with agricultural inputs, technologies, and resources.', icon:'sprout', type:'Agricultural Products'},
  {name:'Farmer & grower support', description:'Technical support shaped around the specific needs of your growing operation.', icon:'sun', type:'Consulting'},
  {name:'Market connection', description:'Helping producers explore relevant markets and commercial opportunities.', icon:'network', type:'Market Connections'},
  {name:'Technical services', description:'Practical technical guidance informed by crop science, production needs, and grower experience.', icon:'layers', type:'Consulting'},
];
// Category placeholders only. Replace with confirmed products, descriptions and images.
// Product structure supports name, category, description, image and imageAlt.
export const products = [
  {name:'Agricultural inputs',category:'Inputs',description:'Explore inputs suited to your agricultural operation.',image:'/images/client/63873b8c-89e7-4f3a-83fc-a95aea07ec1e.jpg',imageAlt:'Vegetable crops growing in rows beneath protective netting'},
  {name:'Crop support solutions',category:'Crop support',description:'Discuss resources to support your crop and growing needs.'},
  {name:'Technical products',category:'Technical products',description:'Explore technical product needs with TASTAR.'},
  {name:'Farm technologies',category:'Technology',description:'Start a conversation about technology for your operation.'},
  {name:'Agricultural resources',category:'Resources',description:'Discuss other resources and agricultural requirements.'},
];
export const steps = [
  ['Understand','We start with your operation: its technical needs, practical challenges, and commercial direction.'],
  ['Advise','We bring technical expertise and practical recommendations to the conversation.'],
  ['Support','We help connect the right agricultural products, technologies, or resources.'],
  ['Connect','We help bridge producers with relevant market opportunities and industry relationships.'],
];
// Paraphrased from the supplied public LinkedIn profile on 4 October 2026.
// Public experience entries omit role titles and dates; do not infer these.
export const profile = {
  biography:'Valerio is a consultant, agronomist, and plant biologist whose experience spans crop production, research, food safety and quality systems, and agricultural business development. Through TASTAR, he supports primary producers and food processors with practical technical and management advice.',
  qualifications:'University of the Philippines Los Baños; Nutrient Advantage Agronomy in Practice (Incitec Pivot Fertilisers, 2017).',
  experience:'TASTAR consulting since 2013, with earlier roles in agricultural research, production management, quality assurance, and university teaching.',
  expertise:'Crop and soil management, tailored crop nutrition, food safety and quality systems, organic production, post-harvest quality, and grower training.',
  portrait:null,
};

// Selected experience supplied by the user. Dates preserve the source chronology;
// overlapping consulting, academic and employed roles are intentional.
export const experience = [
  {company:'Triple A Services, Technologies, and Resources',role:'Consultant',dates:'October 2026 - present',location:'Greater Brisbane Area',description:'Technical and management consulting for primary producers and food processors. Building on TASTAR consultancy as a consultant, agronomist, and plant biologist from January 2013 to September 2026.'},
  {company:'REMONDIS Australia',role:'Organics Manager - Queensland',dates:'July 2025 - September 2026',location:'Swanbank, Queensland',description:'Compost market development, operational quality improvements, and relationships with horticultural growers and industry bodies.'},
  {company:'Vicmill Ag. Solutions Pty Ltd',role:'Area Business Manager / Senior Agronomist',dates:'October 2022 - June 2025',location:'Greater Shepparton, Victoria',description:'Agronomic support across fruit, nut, and vegetable crops, including soil and tissue analysis, crop nutrition programs, and agricultural inputs.'},
  {company:'AgPlus Consultancy',role:'Agronomist',dates:'June 2022 - September 2022',location:'Bundaberg, Queensland',description:'Technical support and crop nutrition programs for horticultural growers, alongside agricultural input sales and marketing.'},
  {company:'Carnarvon Growers Association',role:'Industry Extension Agronomist',dates:'June 2021 - June 2022',location:'Carnarvon, Western Australia',description:'Grower support in crop nutrition, soil fertility, irrigation, and crop management; food safety system support and presentations at grower forums.'},
];
export const earlierExperience = [
  {company:'TND Farm',role:'Farm Hand / Consultant',dates:'November 2019 - January 2021',description:'Hands-on farm work and support for the farm’s food safety and quality management system.'},
  {company:'School of Agricultural Sciences, Xichang University',role:'Visiting Professor',dates:'October 2017 - October 2020',description:'Professorial teaching on tailored crop nutrition for modern production systems.'},
  {company:'Terragen',role:'Plant Biologist - Field',dates:'November 2015 - December 2016',description:'Field trials, horticultural crop research, and technical liaison with growers.'},
  {company:'Golden Circle',role:'Manager, Horticulture',dates:'January 2003 - October 2005',description:'Grower services, research collaboration, and best management practices for pineapple and beetroot production.'},
  {company:'Fresh Del Monte',role:'Senior Manager',dates:'August 2000 - May 2002',description:'Pineapple field operations, production planning, fruit quality, and export market requirements.'},
  {company:'Dole Food Company',role:'Senior Scientist and Agri. Research & Services Manager',dates:'October 1995 - July 2000',description:'Agricultural R&D, crop nutrition, field services, and research into yield and fruit quality.'},
  {company:'Cargill',role:'Quality Assurance Manager, Seed Division',dates:'August 1992 - August 1994',description:'Seed quality systems, laboratory management, technical assistance, and training.'},
  {company:'International Rice Research Institute',role:'Research Fellow',dates:'October 1983 - August 1987',description:'Research on upland rice, root growth, nutrient uptake, soil compaction, and drought stress.'},
];
export const consultingCapabilities = [
  ['Crop & soil management','Crop nutrition programs, soil and tissue test interpretation, irrigation, and practical production advice.'],
  ['Food safety & quality','Support with food safety and quality management systems, internal auditing, and customer requirements.'],
  ['Production & post-harvest','Plant propagation, nursery management, protected cropping, organic production, and post-harvest quality.'],
  ['Research & grower training','Field and varietal trials, technical seminars, seed quality management, and practical grower education.'],
];
// Original photographs supplied locally by the user from the LinkedIn profile.
// Captions describe visible activities only; no farm ownership or location is inferred.
export const fieldPhotos = [
  {src:'/images/client/1448671e-0169-4258-9fc3-07c3006208f2.jpg',alt:'Tall tomato vines with ripening fruit inside a greenhouse',caption:'Growing under cover'},
  {src:'/images/client/e61f52b5-09e1-46a4-a495-368bb0c2cbfa.jpg',alt:'Bunches of pink grapes hanging from a vine',caption:'Fruit on the vine'},
  {src:'/images/client/07a9184f-4e3e-4af9-855e-83cb705060ad.jpg',alt:'A grower tending tall tomato vines from a raised platform inside a greenhouse',caption:'Hands-on crop care'},
  {src:'/images/client/774b3cda-6166-4a6e-aad1-cf1c144fc6c8.jpg',alt:'Ripe red cherries hanging among green leaves',caption:'Orchard fruit up close'},
  {src:'/images/client/915bb3e1-1bd1-43cd-b40c-6df3bf2ca769.jpg',alt:'Long rows of leafy crops under a clear blue sky',caption:'A view across the growing rows'},
  {src:'/images/client/ece16f5d-2edd-4961-9e02-e9a7b3b662ae.jpg',alt:'Dark purple eggplants growing on a plant above a mulched bed',caption:'Vegetable crops in focus'},
  {src:'/images/client/07c79561-dfd2-4d77-b582-44013aacb71e.jpg',alt:'Bunches of green bananas growing on a banana plant',caption:'Bananas on the plant'},
  {src:'/images/client/9ec4958f-87f4-434a-9baf-103aeaf9b941.jpg',alt:'Orange citrus fruit growing among glossy green leaves',caption:'Citrus in the orchard'},
  {src:'/images/client/28259cb0-9b07-469c-a17f-b5627ebda81d.jpg',alt:'A field of grain beneath an overcast sky',caption:'Across the grain field'},
  {src:'/images/client/1789904269782.jpg',alt:'Tractor laying plastic mulch along prepared planting beds',caption:'Preparing the ground'},
  {src:'/images/client/1775256128759.jpg',alt:'A person standing beside harvested green peppers in buckets',caption:'From the field to harvest'},
  {src:'/images/client/1783563534659.jpg',alt:'Strawberries at different stages of ripening beside a flower',caption:'Flowering and fruit development'},
];
export const inquiryTypes = ['Consulting','Agricultural Products','Market Connections','Partnership','General Inquiry'];

// Original article plus the author's follow-up update in the supplied screenshot.
export const featuredInsight = {
  title:'Good relationships grow through follow-through.',
  label:'The SHIFT approach',
  summary:'Valerio’s practical approach to customer relationships brings together service, hands-on help, useful information, follow-up, and teaching.',
  articleTitle:'SHIT strategy to achieve sales target',
  url:'https://www.linkedin.com/pulse/personal-strategy-achieve-sales-target-valerio-c-tanguilig',
  image:null, // Add an approved local presentation photo, e.g. /images/valerio-training.jpg.
  imageAlt:'Valerio Tanguilig presenting agricultural guidance to a group',
  principles:[
    ['S','Service','Start with the needs of the grower and where technical guidance can add value.'],
    ['H','Help','Offer practical support grounded in the realities of day-to-day operations.'],
    ['I','Inform','Share useful knowledge about products, technologies, and production practices.'],
    ['F','Follow up','Check back with customers to see how recommendations are being put into practice.'],
    ['T','Teach','Help growers understand and apply new approaches through training.'],
  ],
};
