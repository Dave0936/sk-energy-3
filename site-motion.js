// Shared premium motion: GSAP ScrollTrigger reveals, counters, parallax, magnetic buttons, hero word rise.
(function(){
function ready(cb,n){n=n||0;if(window.gsap&&window.ScrollTrigger)return cb();if(n<80)setTimeout(()=>ready(cb,n+1),100);}
window.SKMotion={init(){
  let ctx,safe;const stop=()=>{try{ctx&&ctx.revert();}catch(e){}clearTimeout(safe);};
  ready(()=>{
    const gsap=window.gsap,ST=window.ScrollTrigger;gsap.registerPlugin(ST);
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine=window.matchMedia('(pointer:fine)').matches;
    ctx=gsap.context(()=>{
      if(reduce)return;
      gsap.from('[data-word]',{yPercent:110,duration:1.1,ease:'expo.out',stagger:.09,delay:.1});
      gsap.from('[data-hero-in]',{opacity:0,y:24,duration:1,ease:'expo.out',stagger:.1,delay:.35});
      gsap.utils.toArray('[data-hero-img]').forEach(im=>{
        gsap.fromTo(im,{scale:1.14},{scale:1,duration:2.2,ease:'expo.out'});
        gsap.to(im,{yPercent:8,ease:'none',scrollTrigger:{trigger:im.parentElement,start:'top top',end:'bottom top',scrub:true}});
      });
      gsap.utils.toArray('main h2, [data-reveal]').filter(el=>el.getBoundingClientRect().top>window.innerHeight*.9)
        .forEach(el=>gsap.from(el,{opacity:0,y:40,duration:1.1,ease:'expo.out',immediateRender:false,scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
      document.querySelectorAll('[data-count]').forEach(el=>{const to=+el.dataset.count,o={v:0},fmt=v=>Math.round(v).toLocaleString('en-GB');
        ST.create({trigger:el,start:'top 92%',once:true,onEnter:()=>gsap.to(o,{v:to,duration:1.8,ease:'expo.out',onUpdate:()=>{el.textContent=fmt(o.v);}})});});
      document.querySelectorAll('[data-parallax]').forEach(im=>gsap.fromTo(im,{yPercent:-5,scale:1.12},{yPercent:5,scale:1.12,ease:'none',scrollTrigger:{trigger:im.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
      document.querySelectorAll('[data-line]').forEach(l=>gsap.fromTo(l,{scaleX:0},{scaleX:1,transformOrigin:'left',ease:'none',scrollTrigger:{trigger:l.parentElement,start:'top 80%',end:'bottom 50%',scrub:true}}));
      if(fine){
        document.querySelectorAll('[data-magnetic]').forEach(el=>{
          const xt=gsap.quickTo(el,'x',{duration:.6,ease:'elastic.out(1,.4)'}),yt=gsap.quickTo(el,'y',{duration:.6,ease:'elastic.out(1,.4)'});
          el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();xt((e.clientX-r.left-r.width/2)*.2);yt((e.clientY-r.top-r.height/2)*.3);});
          el.addEventListener('pointerleave',()=>{xt(0);yt(0);});
        });
        document.querySelectorAll('[data-tilt]').forEach(el=>{
          gsap.set(el,{transformPerspective:1000});
          const rx=gsap.quickTo(el,'rotationX',{duration:.8,ease:'power3.out'}),ry=gsap.quickTo(el,'rotationY',{duration:.8,ease:'power3.out'});
          el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();ry(((e.clientX-r.left)/r.width-.5)*6);rx(-((e.clientY-r.top)/r.height-.5)*6);});
          el.addEventListener('pointerleave',()=>{rx(0);ry(0);});
        });
      }
    });
    setTimeout(()=>ST.refresh(),800);
    const SEL='main h2, [data-reveal], [data-hero-in], [data-word]';
    const unstick=()=>document.querySelectorAll(SEL).forEach(el=>{if(+getComputedStyle(el).opacity<.05||(el.hasAttribute('data-word')&&el.style.transform&&el.style.transform!=='none')){gsap.killTweensOf(el);el.style.opacity=1;el.style.transform='none';}});
    const f0=gsap.ticker.frame;
    setTimeout(()=>{if(gsap.ticker.frame-f0<5)unstick();},1500);
    safe=setTimeout(unstick,5000);
  });
  return stop;
}};
})();
