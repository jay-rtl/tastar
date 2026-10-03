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
  biography:'Valerio brings a background in plant biology and agronomy, alongside experience in operations and research and development management. His professional interests connect crop science, practical technical support, and agricultural problem-solving.',
  qualifications:'University of the Philippines Los Baños; Nutrient Advantage Agronomy in Practice (Incitec Pivot Fertilisers, 2017).',
  experience:'Plant biology and agronomy; operations and R&D management.',
  expertise:'Technical support, research, training, project management, and environmental consulting.',
  portrait:null,
};
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
