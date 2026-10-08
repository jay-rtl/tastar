import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import './styles.css';
import './unified.css';
import {sharedBrand, divisions, siteImages} from './brands.js';
import {company as c, navigation, services, products, steps, profile, inquiryTypes, featuredInsight, experience, earlierExperience, consultingCapabilities, fieldPhotos} from './data.js';
import {icon} from './icons.js';
import {initMotion} from './motion.js';
import {renderBusinessPage} from './business-page.js';

const arrow = icon('arrow');
const base = import.meta.env.BASE_URL;
const eyebrow = (n,text) => `<div class="eyebrow"><span>${n}</span>${text}</div>`;
const link = (text,target,cls='button') => `<a class="${cls}" href="#${target}">${text}${arrow}</a>`;
const pagePath = window.location.pathname.slice(base.length).replace(/index\.html$/, '').replace(/\/$/, '');
if(pagePath==='frujt-global')window.location.replace(`${base}tastar/${window.location.hash}`);
const currentBusiness = divisions.find(d => pagePath === d.id);
const navHref = id => divisions.some(d=>d.id===id) ? `${base}${id}/` : `${currentBusiness ? base : ''}#${id}`;
const navLinks = () => navigation.map(([name,id])=>`<a href="${navHref(id)}" ${currentBusiness?.id===id?'aria-current="page"':''}>${name}</a>`).join('');
const brandLockup = () => `<a class="brand dual-brand" href="${base}" aria-label="TASTAR home"><img src="/brand/tastar-cycle-mark-light.svg" width="64" height="64" alt=""/><span class="dual-brand-text"><strong>TASTAR</strong><span>Agricultural consulting</span></span></a>`;
const photo = (item, extra='') => `<img src="${item.src}" alt="${item.alt}" ${extra}/>`;
const motif = `<svg class="field-motif" viewBox="0 0 500 400" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1">${Array.from({length:12},(_,i)=>`<path d="M${-150+i*40} 400 250 ${i*19} 650 400"/>`).join('')}</g></svg>`;

document.querySelector('#app').innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" id="header">
  ${brandLockup()}
  <nav class="desktop-nav" aria-label="Main navigation">${navLinks()}</nav>
  <a class="header-cta" href="#contact">Let's Talk ${icon('northeast')}</a>
  <button class="menu-toggle" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open menu"><span></span><span></span></button>
</header>
<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>${navLinks()}<p>${c.location}</p></nav>
<main id="main">
  <section id="home" class="hero">
    <div class="hero-image" data-scale>${photo(siteImages.hero,'width="2048" height="1536" fetchpriority="high"')}</div>
    <div class="hero-shade"></div><div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-content wrap">
      <div class="hero-eyebrow"><span class="status-dot"></span> AGRICULTURE. TECHNOLOGY. GLOBAL CONNECTION.</div>
      <div class="hero-brand-line">TASTAR <span>Agronomy. Technical expertise. Grower support.</span></div><h1><span>Grounded in agriculture.</span><span>Connected to <em>possibility.</em></span></h1>
      <p>Agricultural consulting informed by experience in crop production, research, and quality management. Practical support for growers and agricultural businesses.</p>
      <div class="hero-actions">${link('Explore Our Services','services','button button-lime')}${link('Get in Touch','contact','text-link')}</div>
    </div>
    <div class="hero-bottom wrap"><span>${icon('pin')} BRISBANE, AUSTRALIA</span><span>EXPERTISE IN THE FIELD. OPPORTUNITY BEYOND IT.</span><a href="#introduction">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    <div class="image-coordinate" aria-hidden="true">AGRICULTURE / TECHNOLOGY / CONNECTION</div>
  </section>

  <section id="introduction" class="intro section wrap">
    <div class="intro-heading">${eyebrow('01','A CONNECTED APPROACH')}<h2 data-reveal>From the field<br>to the market<span class="accent">.</span></h2></div>
    <div class="intro-copy" data-reveal><p class="lead">Good agriculture grows through connection.</p><p>${sharedBrand.description}</p><a class="underlined" href="${base}tastar/">Explore TASTAR ${icon('northeast')}</a></div>
    <div class="value-chain" data-stagger><div class="chain-progress" data-line></div>${[['01','Growers','Where it all begins'],['02','Technical expertise','Knowledge with purpose'],['03','Agricultural solutions','The right resources'],['04','Market opportunities','A wider perspective']].map(([n,title,text])=>`<a href="#${n==='04'?'markets':'services'}"><span class="chain-dot"></span><span class="micro">${n}</span><h3>${title}</h3><p>${text}</p>${icon('northeast')}</a>`).join('')}</div>
  </section>

  <section id="services" class="services section">
    <div class="wrap"><div class="section-top"><div>${eyebrow('02','WHAT WE DO')}<h2 data-reveal>Technical expertise.<br><span class="muted">Practical possibilities.</span></h2></div><p>Built around agriculture.<br>Shaped around your needs.</p></div>
    <div class="service-grid" data-stagger>${services.map((s,i)=>`<a class="service-card" href="#contact" data-inquiry="${s.type}"><div class="service-top">${icon(s.icon)}<span class="micro">0${i+1}</span></div><h3>${s.name}</h3><p>${s.description}</p><span class="card-link">Let's explore ${icon('northeast')}</span></a>`).join('')}<div class="service-note">${motif}<span class="micro">ONE CONNECTED PERSPECTIVE</span><h3>Better together.<br>From the ground up.</h3>${link('Find your next step','contact','text-link')}</div></div>
    </div>
  </section>

  <section id="approach" class="approach section wrap">
    <div class="approach-sticky">${eyebrow('03','HOW WE WORK')}<h2>A clear path.<br>A practical focus.</h2><p>Every operation is different. Our approach starts with understanding yours.</p><div class="approach-image">${photo(siteImages.approach,'width="800" height="462" loading="lazy" data-parallax')}<span>YOUR OPERATION. OUR STARTING POINT.</span></div></div>
    <div class="steps">${steps.map(([title,description],i)=>`<article class="step" data-reveal><span class="step-number">0${i+1}</span><div><h3>${title}</h3><p>${description}</p></div>${icon('northeast')}</article>`).join('')}</div>
  </section>

  <section id="products" class="products section"><div class="wrap">
    <div class="section-top"><div>${eyebrow('04','AGRICULTURAL SOLUTIONS')}<h2 data-reveal>Resources for<br>productive agriculture.</h2></div><div class="section-aside"><p>The right solution starts with the right conversation. Explore our areas of focus.</p><span class="availability">Ask about products and availability</span></div></div>
    <article class="fruitlast-feature" aria-labelledby="fruitlast-title">
      <div class="fruitlast-photo"><img src="/images/products/fruitlast-pouch.png" alt="Fruitlast white resealable pouch with its original green logo and fruit and vegetable packaging artwork" width="1024" height="1024" loading="lazy"/></div>
      <div class="fruitlast-copy"><span class="eyebrow">PRODUCT SPOTLIGHT</span><h3 id="fruitlast-title">Fruitlast</h3><p class="lead">Developed with small-scale produce vendors in mind.</p><p>Valerio developed Fruitlast after observing the practices of vegetable and fruit vendors at roadside and local market stalls.</p><p class="fruitlast-note">Contact us for product details, directions for use, suitability, and availability.</p><a class="button button-forest" href="#contact" data-inquiry="Agricultural Products" data-product="Fruitlast">Inquire about Fruitlast ${icon('northeast')}</a></div>
    </article>
    <div class="product-layout"><div class="product-visual"><img id="product-image" src="${products[0].image}" alt="${products[0].imageAlt}" width="1000" height="667" loading="lazy" /><div class="product-visual-overlay"><span class="micro">AGRICULTURAL SOLUTIONS</span><span>Made for the<br>way you grow.</span></div></div>
    <div class="product-list">${products.map((p,i)=>`<details class="product-item" ${i===0?'open':''}><summary><span class="micro">0${i+1}</span><h3>${p.name}</h3><span class="plus" aria-hidden="true">+</span></summary><div class="product-detail"><span class="micro">${p.category} / CATEGORY PREVIEW</span><p>${p.description} Specific products and availability will be added once confirmed.</p><a class="underlined" data-inquiry="Agricultural Products" data-product="${p.name}" href="#contact">Inquire about this category ${icon('northeast')}</a></div></details>`).join('')}</div></div>
  </div></section>

  <section id="markets" class="markets section"><div class="wrap">
    <div class="section-top"><div>${eyebrow('05','BEYOND THE FARM GATE')}<h2 data-reveal>Helping growers reach<br>the right market.</h2></div><p>A productive field is one part of the story. Connecting that potential with the right people is where the next chapter begins.</p></div>
    <div class="market-network" aria-label="Growers connect through TASTAR with industry and markets"><div class="network-node">${icon('sprout')}<h3>Farmers &amp; growers</h3><p>Products. Knowledge. Potential.</p></div><div class="network-line" data-line><span></span></div><div class="network-hub"><div class="shared-hub">TASTAR<span>Agricultural consulting</span></div><span>THE CONNECTING POINT</span></div><div class="network-line" data-line><span></span></div><div class="network-node">${icon('network')}<h3>Industry &amp; markets</h3><p>Relationships. Possibilities. Opportunity.</p></div></div>
    <div class="market-bottom"><p>We facilitate connections between growers, agricultural products, and potential markets — with practical expertise at every step.</p>${link('Explore market connections','contact','button button-outline')}<span class="market-note">Connections open conversations. Commercial outcomes depend on each opportunity.</span></div>
  </div></section>

  <section id="about" class="about section wrap"><div class="about-visual" data-reveal>${photo(siteImages.about,'width="2048" height="1536" loading="lazy" data-parallax')}<div class="about-caption"><img src="/brand/tastar-cycle-mark-dark.svg" width="56" height="60" alt=""/><span>Grounded in agriculture.<br>Looking ahead.</span></div></div><div class="about-content">${eyebrow('06','OUR PURPOSE')}<h2 data-reveal>Technical expertise<br>with a practical focus.</h2><p class="lead">Agriculture is our focus.<br>Connection is our purpose.</p><p>TASTAR supports primary producers and food processors with practical technical and management advice. Valerio?s consulting work builds on experience in agricultural research, crop production, and food safety and quality systems.</p><div class="purpose"><div><h3>Our mission</h3><p>To support farmers and growers through practical technical expertise, agricultural solutions, and stronger market connections.</p></div><div><h3>Our vision</h3><p>A more connected agricultural ecosystem where technical knowledge, productive farming, and commercial opportunities work together.</p></div></div></div></section>

  <section id="profile" class="profile section"><div class="wrap profile-grid">${siteImages.portrait ? `<div class="portrait-placeholder has-portrait">${photo(siteImages.portrait,'class="profile-portrait" width="534" height="752" loading="lazy"')}</div>` : `<div class="portrait-placeholder" role="img" aria-label="Professional portrait awaiting the supplied file">${motif}<span class="portrait-monogram">VT</span><span class="micro">PROFESSIONAL PORTRAIT TO BE SUPPLIED</span></div>`}<div class="profile-content">${eyebrow('07','THE EXPERIENCE BEHIND TASTAR')}<h2 data-reveal>${c.contact}</h2><p class="profile-subtitle">Agronomist / Plant Biologist</p><p>${profile.biography}</p><a class="underlined" href="#experience">Explore professional experience ${icon('arrow')}</a><dl class="credentials"><div><dt>Qualifications</dt><dd>${profile.qualifications.join('<br>')}</dd></div><div><dt>Industry experience</dt><dd>${profile.experience}</dd></div><div><dt>Areas of expertise</dt><dd>${profile.expertise}</dd></div></dl><a class="button button-forest" href="${c.linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ${icon('northeast')}</a></div></div></section>


  <section id="experience" class="experience-section section wrap" aria-labelledby="experience-title">
    <div class="section-top"><div><div class="eyebrow">EXPERIENCE IN PRACTICE</div><h2 id="experience-title" data-reveal>From research to the field.<br>From production to market.</h2></div><p>A selection of Valerio's consulting, industry, and research roles across agriculture.</p></div>
    <div class="experience-layout"><div class="capability-panel"><h3>Practical areas of support</h3>${consultingCapabilities.map(([title,description])=>`<div><h4>${title}</h4><p>${description}</p></div>`).join('')}</div><div class="career-list">${experience.map(item=>`<article class="career-role"><span class="micro">${item.dates}</span><h3>${item.role}</h3><p class="career-company">${item.company}</p><span class="career-location">${item.location}</span><p>${item.description}</p></article>`).join('')}<details class="earlier-career"><summary>Explore earlier experience <span aria-hidden="true">+</span></summary>${earlierExperience.map(item=>`<article class="career-role"><span class="micro">${item.dates}</span><h3>${item.role}</h3><p class="career-company">${item.company}</p><p>${item.description}</p></article>`).join('')}</details></div></div>
    <div id="field-gallery" class="field-gallery"><div class="eyebrow">IN THE FIELD</div><div class="gallery-heading"><h3>A closer look at agriculture.</h3><p>Field visits, crop development, and practical conversations. Select a photo to view the original.</p></div><div class="field-gallery-grid">${fieldPhotos.slice(0,6).map(photo=>`<figure><a href="${base+photo.src.slice(1)}" target="_blank" rel="noopener noreferrer" aria-label="View original photo: ${photo.caption}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" width="800" height="540"/></a><figcaption>${photo.caption}</figcaption></figure>`).join('')}</div><details class="more-field-photos"><summary>More field photos <span aria-hidden="true">+</span></summary><div class="field-gallery-grid">${fieldPhotos.slice(6).map(photo=>`<figure><a href="${base+photo.src.slice(1)}" target="_blank" rel="noopener noreferrer" aria-label="View original photo: ${photo.caption}"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" width="800" height="540"/></a><figcaption>${photo.caption}</figcaption></figure>`).join('')}</div></details></div>
  </section>

  <section id="insights" class="insight section wrap" aria-labelledby="insight-title">
    <div class="insight-intro"><div class="eyebrow">INSIGHTS FROM VALERIO</div><h2 id="insight-title" data-reveal>${featuredInsight.title}</h2><p>${featuredInsight.summary}</p><a class="underlined" href="${featuredInsight.url}" target="_blank" rel="noopener noreferrer">Read the original LinkedIn article ${icon('northeast')}</a><p class="insight-source">Originally published as &ldquo;${featuredInsight.articleTitle}&rdquo;. The author&#39;s subsequent update adds follow-up to the approach.</p></div>
    <div class="insight-framework">${featuredInsight.image ? `<img class="insight-photo" src="${featuredInsight.image}" alt="${featuredInsight.imageAlt}" width="800" height="450" loading="lazy" />` : ''}<h3>${featuredInsight.label}</h3><ol>${featuredInsight.principles.map(([letter,title,description])=>`<li><span class="insight-letter" aria-hidden="true">${letter}</span><div><h4>${title}</h4><p>${description}</p></div></li>`).join('')}</ol></div>
  </section>
  <section class="why section wrap">${eyebrow('08','OUR PERSPECTIVE')}<div class="why-grid" data-stagger>${[['compass','Technical knowledge','Expertise that informs practical decisions.'],['sprout','Practical agricultural support','A focus on the needs of your operation.'],['network','Industry connections','Relationships across the agricultural ecosystem.'],['layers','Market-focused thinking','Looking beyond production to possibility.']].map(([i,title,desc])=>`<article>${icon(i)}<h3>${title}</h3><p>${desc}</p></article>`).join('')}</div></section>

  <section class="cta-band"><div class="wrap">${motif}<span class="micro">GOOD CONVERSATIONS GROW POSSIBILITIES</span><h2 data-reveal>Let's grow better<br>opportunities together.</h2><p>Technical advice, agricultural solutions, or a new market opportunity.<br>Let's find your next step.</p>${link('Start a Conversation','contact','button button-forest')}</div></section>

  <section id="contact" class="contact section wrap"><div>${eyebrow('09','LET’S TALK')}<h2>Every connection<br>starts somewhere.</h2><p>Speak with TASTAR. Tell us about your operation and what you have in mind.</p><address><strong>${c.contact}</strong><a href="mailto:${c.email}">${c.email} ${icon('northeast')}</a><a href="tel:+61437119780">${c.phone}</a><span>${c.location}</span></address><span class="contact-note">Based in Brisbane. Connected to agriculture.</span></div>
    <form id="inquiry-form"><div class="form-grid"><div class="field"><label for="name">Name <span>(required)</span></label><input id="name" name="name" autocomplete="name" required maxlength="120" /></div><div class="field"><label for="company">Company / Farm</label><input id="company" name="company" autocomplete="organization" maxlength="160" /></div><div class="field"><label for="email">Email <span>(required)</span></label><input id="email" name="email" type="email" autocomplete="email" required maxlength="200" /></div><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40" /></div><div class="field full"><label for="inquiry">Inquiry type <span>(required)</span></label><select id="inquiry" name="inquiry" required><option value="">Select an inquiry type</option>${inquiryTypes.map(t=>`<option>${t}</option>`).join('')}</select></div><div class="field full"><label for="message">How can we help? <span>(required)</span></label><textarea id="message" name="message" rows="4" required minlength="10" maxlength="3000" placeholder="Tell us a little about your needs…"></textarea></div></div><p class="form-note">This form prepares an email in your email app. Review it and send it there. No inquiry is submitted or stored by this website.</p><button class="button button-forest" type="submit">Submit Inquiry ${arrow}</button><p id="form-status" role="status" aria-live="polite"></p><a id="email-draft" class="underlined" hidden>Open email draft ${icon('northeast')}</a></form>
  </section>
</main>
<footer><div class="wrap"><div class="footer-top"><div>${brandLockup()}<p class="footer-business-names">${c.fullName}</p><span>${c.location}</span></div><nav aria-label="Footer navigation">${navLinks()}</nav><div class="footer-connect"><span class="micro">STAY CONNECTED</span><a href="${c.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${icon('northeast')}</a><a href="mailto:${c.email}">Email us ${icon('northeast')}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} TASTAR. All rights reserved.</span><div><button data-legal="privacy">Privacy Policy</button><button data-legal="terms">Terms</button><a href="#home">Back to top ↑</a></div></div></div></footer>
<dialog id="legal-dialog" aria-labelledby="legal-title"><button class="dialog-close" aria-label="Close">×</button><h2 id="legal-title"></h2><div id="legal-content"></div></dialog>`.replaceAll('src="/','src="'+base).replaceAll('srcset="/','srcset="'+base).replaceAll(', /images/',`, ${base}images/`);

if (currentBusiness) {
  const contact = document.querySelector('#contact');
  document.querySelector('main').innerHTML = renderBusinessPage(currentBusiness, base);
  document.querySelector('main').append(contact);
  document.body.classList.add('business-page');
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');mobileNav.hidden=true;document.body.classList.remove('menu-open');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');mobileNav.hidden=!open;document.body.classList.toggle('menu-open',open);});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();menuToggle.focus();}if(e.key==='Tab'&&!mobileNav.hidden){const last=mobileNav.querySelector('a:last-of-type');if(e.shiftKey&&document.activeElement===menuToggle){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();menuToggle.focus();}}});
window.matchMedia('(min-width: 1200px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

const form = document.querySelector('#inquiry-form');
document.querySelectorAll('.product-item').forEach((item,index)=>item.addEventListener('toggle',()=>{
  if(!item.open)return;
  const product=products[index];const image=document.querySelector('#product-image');
  image.src=base+(product.image||products[0].image).replace(/^\//,'');
  image.alt=product.imageAlt||products[0].imageAlt;
  image.removeAttribute('srcset');
}));
document.querySelectorAll('[data-inquiry]').forEach(a=>a.addEventListener('click',()=>{form.elements.inquiry.value=a.dataset.inquiry;if(a.dataset.division)form.elements.message.value=`I'd like to discuss ${a.dataset.division} services.`;if(a.dataset.product)form.elements.message.value=`I'd like to discuss ${a.dataset.product.toLowerCase()} for my operation.`;}));
form.addEventListener('submit',e=>{e.preventDefault();const name=form.elements.name;name.setCustomValidity(name.value.trim()?'':'Please enter your name.');const message=form.elements.message;message.setCustomValidity(message.value.trim().length>=10?'':'Please add at least 10 characters about your inquiry.');if(!form.reportValidity())return;const d=new FormData(form);const body=`Name: ${d.get('name')}\nCompany / Farm: ${d.get('company')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nInquiry: ${d.get('inquiry')}\n\n${d.get('message')}`;const url=`mailto:${c.email}?subject=${encodeURIComponent(`TASTAR inquiry — ${d.get('inquiry')}`)}&body=${encodeURIComponent(body)}`;const draft=document.querySelector('#email-draft');draft.href=url;draft.hidden=false;document.querySelector('#form-status').textContent='Your email draft is ready. Open it below, then review and send it from your email app. Your inquiry has not been sent.';});
form.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('');document.querySelector('#email-draft').hidden=true;document.querySelector('#form-status').textContent='';});

const legalDialog=document.querySelector('#legal-dialog');
const legalCopy={privacy:['Privacy Policy','This website does not submit or store contact form entries. When you open the prepared email draft and send it, the information is handled by your email provider and received by TASTAR. Contact information supplied in an inquiry is intended to help respond to that inquiry.','This local preview does not use analytics or advertising cookies. Fonts and images are served with the site. LinkedIn is an external service with its own privacy practices.','Draft notice: the final policy, including retention, access and correction arrangements, must be confirmed by the business before publication. For privacy questions, contact v.tanguilig@gmail.com.'],terms:['Terms','Website content provides a general introduction to TASTAR. Agricultural solution categories are previews; specific products, availability, suitability, and service terms must be confirmed directly.','Market introductions do not guarantee sales or commercial outcomes. Any engagement will be subject to terms agreed with the business.','Draft notice: final website terms must be reviewed and approved by the business before publication.']};
document.querySelectorAll('[data-legal]').forEach(b=>b.addEventListener('click',()=>{const [title,...paragraphs]=legalCopy[b.dataset.legal];document.querySelector('#legal-title').textContent=title;document.querySelector('#legal-content').innerHTML=paragraphs.map(p=>`<p>${p}</p>`).join('');legalDialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>legalDialog.close());
legalDialog.addEventListener('click',e=>{if(e.target===legalDialog){const r=legalDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)legalDialog.close();}});
const schema=document.createElement('script');schema.type='application/ld+json';schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:sharedBrand.fullName,brand:divisions.map(d=>({'@type':'Brand',name:d.fullName})),email:c.email,telephone:c.phone,address:{'@type':'PostalAddress',addressLocality:'Brisbane',addressRegion:'Queensland',addressCountry:'AU'}});document.head.append(schema);
initMotion();
