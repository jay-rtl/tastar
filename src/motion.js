import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export function initMotion(){
  gsap.registerPlugin(ScrollTrigger);
  const header=document.querySelector('#header');
  const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(a=>{if(a.hash===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
    const timeline=gsap.timeline({defaults:{ease:'power2.out'}});
    timeline.from('.site-header .brand, .desktop-nav, .header-cta',{y:-12,opacity:0,duration:.7,stagger:.08})
      .from('.hero-eyebrow',{y:14,opacity:0,duration:.6},.15)
      .from('.hero h1>span',{y:25,opacity:0,clipPath:'inset(0 0 100% 0)',duration:1,stagger:.12},.25)
      .from('.hero-content>p, .hero-actions',{y:15,opacity:0,duration:.7,stagger:.12},.6)
      .from('[data-scale]',{scale:1.045,duration:1.7},0);
    gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{y:22,opacity:0,duration:.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
    gsap.utils.toArray('[data-stagger]').forEach(el=>gsap.from(Array.from(el.children).filter(x=>!x.hasAttribute('data-line')),{y:18,opacity:0,duration:.65,stagger:.07,scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
  });
  mm.add('(min-width: 801px) and (prefers-reduced-motion: no-preference)',()=>{
    gsap.utils.toArray('[data-parallax]').forEach(el=>gsap.fromTo(el,{yPercent:-7},{yPercent:0,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
    gsap.utils.toArray('[data-line]').forEach(el=>gsap.from(el,{scaleX:0,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top 80%',end:'center 55%',scrub:1}}));
  });
}
