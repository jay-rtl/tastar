// Client-editable content. Confirm draft copy before publication.
export const company = {
  name: 'TASTAR', fullName: 'Triple A Services, Technologies, and Resources',
  contact: 'Valerio Tanguilig', email: 'v.tanguilig@gmail.com', phone: '+61 437 119 780',
  location: 'Brisbane, Queensland, Australia',
  linkedin: 'https://www.linkedin.com/in/valerio-tanguilig-phd-a79479125/',
};
export const navigation = [['Home','home'],['About','about'],['Services','services'],['Products','products'],['Market Connections','markets'],['Professional Profile','profile'],['Contact','contact']];
export const services = [
  {name:'Technical consulting', description:'Practical technical guidance for farmers, growers, and agricultural businesses.', icon:'compass', type:'Consulting'},
  {name:'Agricultural solutions', description:'Connecting your operation with agricultural inputs, technologies, and resources.', icon:'sprout', type:'Agricultural Products'},
  {name:'Grower support', description:'Technical support shaped around the specific needs of your growing operation.', icon:'sun', type:'Consulting'},
  {name:'Market connection', description:'Helping producers explore relevant markets and commercial opportunities.', icon:'network', type:'Market Connections'},
  {name:'Industry collaboration', description:'Bringing growers, suppliers, industry partners, and buyers into the conversation.', icon:'layers', type:'Partnership'},
];
// Category placeholders only. Replace with confirmed products, descriptions and images.
// Product structure supports name, category, description, image and imageAlt.
export const products = [
  {name:'Agricultural inputs',category:'Inputs',description:'Explore inputs suited to your agricultural operation.',image:'/images/harvest.jpg',imageAlt:'Fresh vegetables displayed at a produce market; illustrative category photography'},
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
  {src:'/images/client/1789904269782.jpg',alt:'Tractor laying plastic mulch along prepared planting beds',caption:'Preparing the ground'},
  {src:'/images/client/1789904269365.jpg',alt:'Young crops growing in parallel mulched rows',caption:'Establishing a crop'},
  {src:'/images/client/1789904269187.jpg',alt:'Dense green crops growing in cultivated field rows',caption:'Crop growth in the field'},
  {src:'/images/client/1776831811727.jpg',alt:'A group discussing crop conditions during a field visit',caption:'Learning together on farm'},
  {src:'/images/client/1776831819168.jpg',alt:'Green crop rows with plant residue between the beds',caption:'A closer look at crop rows'},
  {src:'/images/client/1776831813953.jpg',alt:'Two people walking through rows of growing crops',caption:'Practical field conversations'},
  {src:'/images/client/1775241585520.jpg',alt:'People visiting a growing area with trellised vines',caption:'Conversations among the crops'},
  {src:'/images/client/1775256128759.jpg',alt:'A person standing beside harvested green peppers in buckets',caption:'From the field to harvest'},
  {src:'/images/client/1783563520923.jpg',alt:'Ripening strawberries on plants in a mulched bed',caption:'Fruit development up close'},
  {src:'/images/client/1783563527062.jpg',alt:'Rows of strawberry plants under a blue sky',caption:'Growing across the season'},
  {src:'/images/client/1783563534659.jpg',alt:'Strawberries at different stages of ripening beside a flower',caption:'Flowering and fruit development'},
  {src:'/images/client/1783563534959.jpg',alt:'Strawberry beds extending across a cultivated growing area',caption:'A view across the growing beds'},
  {src:'/images/client/1783563541658.jpg',alt:'Strawberry rows alongside trees at the edge of a field',caption:'Field observations'},
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
