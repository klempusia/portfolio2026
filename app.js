const soon='Case study coming soon.';
const projects=[
{group:'miro',id:'knowledge',title:'Knowledge Integrations',subtitle:'Company knowledge, right where the thinking happens.',tags:'AI EXPERIENCE · PRODUCT STRATEGY',a:'Knowledge',b:'Canvas',challenge:'Bring organizational knowledge from more than 100 source systems into a collaborative canvas, without breaking the flow of work.',approach:'A conversational interface and contextual knowledge access inside Miro. Research and iterative testing helped shape the experience around real customer workflows.'},
{group:'miro',id:'brand-center',title:'Brand Center',subtitle:'Keeping every board on brand.',tags:'ENTERPRISE · DESIGN SYSTEMS',challenge:'Help companies keep their boards consistent with their brand.',approach:soon},
{group:'miro',id:'curated-templates',title:'Curated Templates',subtitle:'The right starting point, picked by your company.',tags:'ENTERPRISE · CONTENT',challenge:'Help admins share company templates that teams can find and trust.',approach:soon},
{group:'miro',id:'miro-other',title:'Others',subtitle:'Shortcuts, toolbars and integrations.',tags:'INTERACTION · INTEGRATIONS',challenge:'Smaller projects and contributions across the canvas and its integrations.',approach:'Including action shortcuts and contextual toolbar improvements, refined through user research and iterative testing.'},
{group:'before',id:'uizard',title:'Figma to Uizard',subtitle:'A bridge between design systems and new ideas.',tags:'DESIGN TOOLS · WORKFLOWS',a:'Figma',b:'Uizard',challenge:'Help people build interactive Uizard prototypes using their existing Figma design systems.',approach:'A plugin that converts Figma components into native Uizard elements. Research and testing informed the handoff between the two tools.'},
{group:'before',id:'dealfront-ui',title:'Dealfront UI',subtitle:'One platform. A shared language.',tags:'SAAS · DESIGN SYSTEMS',a:'Products',b:'Platform',challenge:'After a merger, bring two products together under one brand and rethink the design system and key features.',approach:'Work on the Figma design system, Web Visitors, Promote and dashboards, in collaboration with teams and stakeholders.'},
{group:'before',id:'dealfront-integrations',title:'Integrations',subtitle:'Connecting Dealfront with the tools teams already use.',tags:'SAAS · INTEGRATIONS',challenge:'Connect Dealfront data with the other tools in a sales team’s day.',approach:soon},
{group:'before',id:'tomtom',title:'TomTom',subtitle:'Travel and traffic information, made easier to navigate.',tags:'MOBILITY',challenge:'Travel and traffic information, made easier to navigate.',approach:soon},
{group:'before',id:'revotv',title:'RevoTV',subtitle:'A TV experience designed around the remote control.',tags:'TV · INTERACTION',challenge:'A TVBox experience designed around the constraints of a remote control.',approach:soon},
{group:'before',id:'uol',title:'University of Lodz',subtitle:'One university, 13 department sites, one experience.',tags:'WEB · INFORMATION ARCHITECTURE',challenge:'One coherent experience across a university and 13 department sites.',approach:soon},
{group:'side',id:'dad-game',title:'Dad Game',subtitle:'A side project.',tags:'SIDE PROJECT',challenge:soon,approach:soon},
{group:'side',id:'sisu-camp',title:'Sisu Camp',subtitle:'A side project.',tags:'SIDE PROJECT',challenge:soon,approach:soon}
];
const groups=[['miro','At Miro'],['before','Before Miro'],['side','Outside the brief']];
const projectHTML=(p,i)=>`<details class="project" name="projects" id="${p.id}"><summary><span class="number">${String(i+1).padStart(2,'0')}</span><div><h3>${p.title}</h3><span class="subtitle">${p.subtitle}</span></div><span class="tags">${p.tags}</span><span class="plus" aria-hidden="true">+</span></summary><div class="project-body"><div class="project-visual"${p.a?' aria-label="Concept diagram, not a product screenshot"':''}>${p.a?`<div class="diagram"><div>${p.a}<small>THE CONTEXT</small></div><span>→</span><div>${p.b}<small>THE CONNECTION</small></div></div>`:''}<div><h4>THE CHALLENGE</h4><p>${p.challenge}</p><h4>MY CONTRIBUTION</h4><p>${p.approach}</p></div></div></details>`;
document.querySelector('#project-list').innerHTML=groups.map(([g,label])=>`<h3 class="project-group">${label}</h3>`+projects.map((p,i)=>[p,i]).filter(([p])=>p.group===g).map(([p,i])=>projectHTML(p,i)).join('')).join('');
const shelf=[[136,130,[[1042,56],[1099,39],[1150,55],[1210,61]]],[304,133,[[1042,52],[1093,50],[1142,55],[1197,48]]],[472,130,[[1042,50],[1092,51]]],[636,132,[[1042,47],[1088,58]]]];
const shelfIds=[['knowledge','brand-center','curated-templates','miro-other'],['uizard','dealfront-ui','dealfront-integrations','tomtom'],['revotv','uol'],['dad-game','sisu-camp']];
const lightCovers=new Set(['brand-center','dealfront-ui','dad-game']);
const inkFor=id=>lightCovers.has(id)?'#1b1d1b':'#f6f1e4';
const logoFor={knowledge:'miro','brand-center':'miro','curated-templates':'miro','miro-other':'miro',uizard:'uizard','dealfront-ui':'dealfront','dealfront-integrations':'dealfront',tomtom:'tomtom',uol:'uol',revotv:'revotv'};
const shelfBooks=shelf.flatMap(([y,h,books],row)=>books.map(([x,w],i)=>{const p=projects.find(p=>p.id===shelfIds[row][i]);return{id:p.id,title:p.title,x,y,w,h,logo:logoFor[p.id],ink:inkFor(p.id)};}));
// Hand-drawn, ink-only marks on the binder fronts.
const ink='fill="none" stroke="#1d201e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="url(#ink-wobble)"';
// Binder labels: every brand icon is the size of the Miro tile (ICON) and every word has the same x-height (LETTER),
// centred on the binder's front face (measured from the illustration). Reads bottom to top.
const ICON=16,LETTER=8.5,GAP=4.5;
const faces={knowledge:[1077,203],'brand-center':[1121,203],'curated-templates':[1184.5,203],'miro-other':[1246.5,203],uizard:[1072.5,374],'dealfront-ui':[1120.5,374],'dealfront-integrations':[1173.5,374],tomtom:[1224,374],revotv:[1070.5,540],uol:[1122,540],'dad-game':[1064.5,705],'sisu-camp':[1124,705]};
const label=(b,parts)=>{const [cx,cy]=faces[b.id];const total=parts.reduce((t,p,i)=>t+p.w+(i?GAP:0),0);let x=-total/2;
 const inner=parts.map((p,i)=>{const out=p.draw(x+(i?GAP:0));x+=p.w+(i?GAP:0);return out;}).join('');
 return`<g transform="translate(${cx} ${cy}) rotate(-90)" fill="${b.ink}" opacity="${b.ink==='#1b1d1b'?.9:1}"${b.logo?' filter="url(#xerox)"':''}>${inner}</g>`;};
const iconPart=m=>{const s=(m.iconScale||1)*ICON/m.box[3];return{w:m.box[2]*s,draw:x=>`<path transform="translate(${x.toFixed(2)} ${(-ICON/2).toFixed(2)}) scale(${s.toFixed(4)})" d="${m.d}"/>`};};
// Two-line capital wordmarks (University of Lodz) match LETTER with their cap height and centre as a block.
const wordPart=(m,xh,traced,centre)=>{const s=LETTER/xh,base=traced?m.box[3]:0,y=centre?-(m.box[1]+m.box[3])/2*s:-(base-xh/2)*s;return{w:(m.box[2]-m.box[0])*s,draw:x=>`<path transform="translate(${(x-m.box[0]*s).toFixed(2)} ${y.toFixed(2)}) scale(${s.toFixed(4)})" d="${m.d}"/>`};};
// Per-brand optical tweaks: University of Lodz has a taller icon and a smaller two-line wordmark.
const tweak={uol:{icon:1.45,word:.74},revotv:{word:1.35}};
const brand=(b,key)=>{const t=tweak[key]||{},m=marks[key],word=wordPart(m.word,m.xh/(t.word||1),key!=='uizard',m.center);return label(b,m.icon?[iconPart({...m.icon,iconScale:t.icon}),word]:[word]);};
const logos={revotv:b=>brand(b,'revotv'),uol:b=>brand(b,'uol'),miro:b=>brand(b,'miro'),uizard:b=>brand(b,'uizard'),dealfront:b=>brand(b,'dealfront'),tomtom:b=>brand(b,'tomtom')};
// Names without a logo are written in the tooltip hand (Patrick Hand).
const plainName=b=>{const lines=[b.title],s=LETTER/marks.namesXh,pitch=LETTER*1.9,[cx,cy]=faces[b.id];
 const inner=lines.map((t,i)=>{const m=marks.names[t],w=(m.box[2]-m.box[0])*s,dy=(i-(lines.length-1)/2)*pitch;return`<path transform="translate(${(-w/2-m.box[0]*s).toFixed(2)} ${(dy+LETTER/2).toFixed(2)}) scale(${s.toFixed(4)})" d="${m.d}"/>`;}).join('');
 return`<g transform="translate(${cx} ${cy}) rotate(-90)" fill="${b.ink}" opacity="${b.ink==='#1b1d1b'?.9:1}">${inner}</g>`;};
// Like library shelf tags: every binder's label sits on its top edge, nudged right, at the same tilt.
const bookLabel=b=>`translate(${b.x+b.w/2+18-177} ${b.y-30}) rotate(-6 177 23)`;
document.querySelector('#books').innerHTML=shelfBooks.map((b,i)=>`<a href="#${b.id}" class="studio-hit book" aria-label="Explore ${b.title}" style="--ox:${b.x+b.w/2}px;--oy:${b.y+b.h}px"><rect class="hit-area book-art" x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="2"/><g class="book-logo" pointer-events="none">${b.logo?logos[b.logo](b):plainName(b)}</g><g class="scene-label" transform="${bookLabel(b)}"><rect width="355" height="40" rx="4"/><text x="177" y="26">${b.title}</text></g></a>`).join('');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let scrollFrame;
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(!link)return;const target=document.getElementById(link.getAttribute('href').slice(1));if(!target)return;e.preventDefault();if(target.tagName==='DETAILS')target.open=true;history.replaceState(null,'',link.getAttribute('href'));cancelAnimationFrame(scrollFrame);const start=scrollY;const end=target.getBoundingClientRect().top+start-30;const duration=reduced.matches?0:380;const time=performance.now();function step(now){const progress=duration?Math.min(1,(now-time)/duration):1;scrollTo(0,start+(end-start)*(1-Math.pow(1-progress,3)));if(progress<1)scrollFrame=requestAnimationFrame(step);else{const focus=target.querySelector('summary')||target;if(!focus.hasAttribute('tabindex'))focus.setAttribute('tabindex','-1');focus.focus({preventScroll:true});}}scrollFrame=requestAnimationFrame(step);});
['wheel','touchstart'].forEach(type=>addEventListener(type,()=>cancelAnimationFrame(scrollFrame),{passive:true}));
const cat=document.querySelector('#cat');const sound=document.querySelector('#sound');let soundOn=false,audio,catTimer;
sound.addEventListener('click',()=>{soundOn=!soundOn;sound.setAttribute('aria-pressed',String(soundOn));sound.innerHTML=`Sound ${soundOn?'on':'off'} <span>♪</span>`;});
function purr(){if(!soundOn)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume();const oscillator=audio.createOscillator(),gain=audio.createGain(),lfo=audio.createOscillator(),depth=audio.createGain();oscillator.type='triangle';oscillator.frequency.value=65;lfo.frequency.value=24;depth.gain.value=.025;gain.gain.setValueAtTime(.001,audio.currentTime);gain.gain.linearRampToValueAtTime(.045,audio.currentTime+.15);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+2);lfo.connect(depth);depth.connect(gain.gain);oscillator.connect(gain).connect(audio.destination);oscillator.start();lfo.start();oscillator.stop(audio.currentTime+2);lfo.stop(audio.currentTime+2);oscillator.onended=()=>{oscillator.disconnect();lfo.disconnect();depth.disconnect();gain.disconnect();};}catch{document.querySelector('#announcement').textContent='The cat is purring. Audio is unavailable in this browser.';}}
// Petting shows one small green heart that drifts up a little and fades.
const heartLayer=document.querySelector('#cat-hearts');
function sendHearts(){
 if(heartLayer.childElementCount)return;
 [[1042,708]].forEach(([x,y],i)=>{
  const g=document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('transform',`translate(${x} ${y})`);
  g.innerHTML='<path d="M0 10C-16 -5 -4 -15 4 -5C12 -16 26 -4 4 13Z" fill="#397e6c" opacity="0"/>';
  heartLayer.append(g);
  const rise=reduced.matches?'0 0':'0 -6px';
  g.firstChild.animate([{opacity:0,translate:'0 0'},{opacity:1,offset:.25},{opacity:1,offset:.7},{opacity:0,translate:rise}],{duration:1800,delay:i*220,easing:'ease-out'}).onfinish=()=>g.remove();
 });
}
function pet(){sendHearts();clearTimeout(catTimer);cat.classList.add('petted');cat.setAttribute('aria-pressed','true');document.querySelector('#announcement').textContent='A happy cat. Purr…';purr();catTimer=setTimeout(()=>{cat.classList.remove('petted');cat.setAttribute('aria-pressed','false');},2600);}
cat.addEventListener('click',pet);cat.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pet();}});
const hashTarget=document.getElementById(location.hash.slice(1));if(hashTarget?.tagName==='DETAILS')hashTarget.open=true;

// Fade the room, then restore the hovered object's pixels through its contour.
// The source is shared with the background: no moving crops or duplicate downloads.
const room=document.querySelector('#room');
const ns='http://www.w3.org/2000/svg';
const defs=document.createElementNS(ns,'defs');room.prepend(defs);
const sceneImage=room.querySelector(':scope > image');sceneImage.classList.add('studio-background');
room.querySelectorAll('.studio-hit').forEach((hit,index)=>{
 const shape=hit.querySelector('.hit-area');
 const clip=document.createElementNS(ns,'clipPath');clip.id=`spotlight-${index}`;
 const contour=shape.cloneNode(true);contour.removeAttribute('class');clip.append(contour);defs.append(clip);
 const image=document.createElementNS(ns,'image');
 image.setAttribute('href',sceneImage.getAttribute('href'));image.setAttribute('width','1672');image.setAttribute('height','941');
 image.setAttribute('clip-path',`url(#${clip.id})`);image.setAttribute('class','spotlight-image');image.setAttribute('aria-hidden','true');
 hit.prepend(image);
 if(hit.classList.contains('book')){const r=shape;const sh=document.createElementNS(ns,'rect');['x','y','width','height'].forEach(k=>sh.setAttribute(k,r.getAttribute(k)));sh.setAttribute('class','book-shadow');sh.setAttribute('fill','#2a1d10');sh.setAttribute('filter','url(#book-shadow-blur)');sh.setAttribute('transform','translate(2.5 1.5)');sh.setAttribute('aria-hidden','true');hit.prepend(sh);}
 const label=hit.querySelector('.scene-label');
 if(label){const rect=label.querySelector('rect');rect.setAttribute('rx','24');rect.setAttribute('height','46');label.querySelector('text').setAttribute('y','30');}
});
// Fit labels to their actual handwritten text after the local font is ready.
document.fonts.ready.then(()=>room.querySelectorAll('.scene-label').forEach(label=>{
 const text=label.querySelector('text'),rect=label.querySelector('rect');
 const width=Math.ceil(text.getComputedTextLength()+44),center=Number(text.getAttribute('x'));
 rect.setAttribute('width',width);rect.setAttribute('x',center-width/2);
}));
// Keyboard focus keeps its contour; a mouse or touch press never shows it.
room.addEventListener('pointerdown',()=>room.classList.add('pointer-input'));
addEventListener('keydown',e=>{if(e.key==='Tab')room.classList.remove('pointer-input');});
// Only one project open at a time (also for browsers without <details name>).
document.querySelector('#project-list').addEventListener('toggle',e=>{if(!e.target.open)return;document.querySelectorAll('#project-list details[open]').forEach(d=>{if(d!==e.target)d.open=false;});},true);
