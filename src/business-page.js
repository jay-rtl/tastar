import {divisions, siteImages} from './brands.js';
import {services, company} from './data.js';
import {icon} from './icons.js';

export function renderBusinessPage(business, base) {
  const other = divisions.find(d=>d.id!==business.id);
  const image = business.id==='frujt-global' ? siteImages.about : siteImages.approach;
  return `<section id="home" class="business-hero wrap">
    <nav class="business-breadcrumb" aria-label="Breadcrumb"><a href="${base}">Home</a><span aria-hidden="true">/</span><span aria-current="page">${business.name}</span></nav>
    <div class="business-hero-grid"><div><div class="eyebrow">${business.label}</div>${business.id==='frujt-global'?`<img class="business-mark" src="${base}brand/frujt-mark-dark.svg" alt="" width="90" height="90"/>`:`<img class="business-mark tastar-business-mark" src="${base}brand/tastar-mark.svg" alt="" width="90" height="126"/>`}<h1 class="${business.id==='tastar'?'tastar-wordmark':''}">${business.name}</h1><p class="business-full-name">${business.fullName}</p><p class="lead">${business.description}</p><a href="#contact" class="button button-forest" data-inquiry="General Inquiry" data-division="${business.name}">Connect with ${business.name} ${icon('northeast')}</a></div><img class="business-hero-photo" src="${base+image.src.slice(1)}" alt="${image.alt}" width="800" height="700" fetchpriority="high"/></div>
  </section>
  <section class="business-support section"><div class="wrap"><div class="section-top"><div><div class="eyebrow">OUR SHARED AGRICULTURAL FOCUS</div><h2>Start with your needs.</h2></div><p>${business.name} and ${other.name} share one contact point. Tell us what you need so we can discuss the appropriate support.</p></div><div class="business-focus-grid">${services.map(service=>`<article>${icon(service.icon)}<h3>${service.name}</h3><p>${service.description}</p></article>`).join('')}</div><a class="underlined" href="${base}#products">Explore shared products and resources ${icon('northeast')}</a></div></section>
  <section class="business-connection section wrap"><div><div class="eyebrow">CONNECTED THROUGH PEOPLE</div><h2>A shared point of contact.</h2><p>Speak with ${company.contact}, Agronomist / Plant Biologist, about agriculture, technical services, and market connections.</p><a class="underlined" href="${base}#profile">Meet Valerio ${icon('northeast')}</a></div><aside><span class="micro">OUR CONNECTED BUSINESS</span>${other.id==='tastar'?`<img class="connected-tastar-mark" src="${base}brand/tastar-mark.svg" alt="" width="50" height="70"/>`: ''}<h3 class="${other.id==='tastar'?'tastar-wordmark':''}">${other.name}</h3><p>${other.fullName}</p><a class="underlined" href="${base}${other.id}/">Explore ${other.name} ${icon('northeast')}</a></aside></section>`;
}
