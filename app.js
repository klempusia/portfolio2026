const projects=[
{id:'glean',title:'Bringing AI agents to Miro',subtitle:'Knowledge, right where the thinking happens.',tags:'AI EXPERIENCE · PRODUCT STRATEGY',a:'Glean',b:'Miro',challenge:'Bring organizational knowledge from more than 100 source systems into a collaborative canvas, without breaking the flow of work.',approach:'A conversational interface and contextual knowledge access inside Miro. Research and iterative testing helped shape the experience around real customer workflows.',color:'#74a99a',spine:'GLEAN × MIRO'},
{id:'uizard',title:'Figma → Uizard',subtitle:'A bridge between design systems and new ideas.',tags:'DESIGN TOOLS · WORKFLOWS',a:'Figma',b:'Uizard',challenge:'Help people build interactive Uizard prototypes using their existing Figma design systems.',approach:'A plugin that converts Figma components into native Uizard elements. Research and testing informed the handoff between the two tools.',color:'#9eafcc',spine:'FIGMA → UIZARD'},
{id:'shortcuts',title:'Action shortcuts in Miro',subtitle:'Less friction. More flow.',tags:'INTERACTION · ACCESSIBILITY',a:'Intent',b:'Action',challenge:'Help people complete common tasks faster while keeping the experience accessible.',approach:'An intuitive shortcut system focused on power-user efficiency and accessibility, refined through user research and iterative testing.',color:'#dbd49e',spine:'ACTION SHORTCUTS'},
{id:'dealfront',title:'One platform. A shared language.',subtitle:'Connecting the pieces at Dealfront.',tags:'SAAS · DESIGN SYSTEMS',a:'Products',b:'Platform',challenge:'After a merger, bring two products together under one brand and rethink the design system and key features.',approach:'Work on the Figma design system, Web Visitors, Promote, integrations and dashboards, in collaboration with teams and stakeholders.',color:'#507970',spine:'DEALFRONT'}
];
document.querySelector('#project-list').innerHTML=projects.map((p,i)=>`<details class="project" id="${p.id}"><summary><span class="number">0${i+1}</span><div><h3>${p.title}</h3><span class="subtitle">${p.subtitle}</span></div><span class="tags">${p.tags}</span><span class="plus" aria-hidden="true">+</span></summary><div class="project-body"><div class="project-visual" aria-label="Concept diagram, not a product screenshot"><div class="diagram"><div>${p.a}<small>THE CONTEXT</small></div><span>→</span><div>${p.b}<small>THE CONNECTION</small></div></div><div><h4>THE CHALLENGE</h4><p>${p.challenge}</p><h4>MY CONTRIBUTION</h4><p>${p.approach}</p></div></div></details>`).join('');
document.querySelector('.archive').id='earlier';
const shelfBooks=[
...projects.map((p,i)=>({id:p.id,title:p.title,x:[1043,1102,1152,1211][i],y:139,w:[52,35,51,59][i],h:127})),
{id:'earlier',title:'TomTom · Earlier work',x:1040,y:309,w:49,h:127},
{id:'earlier',title:'RevoTV · Earlier work',x:1100,y:309,w:37,h:127},
{id:'earlier',title:'University of Lodz · Earlier work',x:1150,y:309,w:48,h:127},
{id:'side-projects',title:'Experiments & side projects',x:1043,y:480,w:49,h:120},
{id:'side-projects',title:'Experiments & side projects',x:1102,y:480,w:40,h:120},
{id:'side-projects',title:'Experiments & side projects',x:1155,y:480,w:35,h:120}
];
shelfBooks.push({id:'dealfront',title:'Dealfront',x:1280,y:139,w:47,h:127}, ...[1205,1254,1277].map(x=>({id:'earlier',title:'Earlier explorations',x,y:309,w:x===1205?40:18,h:127})), ...[1198,1252,1268].map(x=>({id:'side-projects',title:'Experiments & side projects',x,y:480,w:x===1198?45:18,h:120})), ...[1043,1102,1154,1209,1265].map(x=>({id:'side-projects',title:'Experiments & side projects',x,y:643,w:43,h:126})));
document.querySelector('#books').innerHTML=shelfBooks.map(b=>`<a href="#${b.id}" class="studio-hit book" aria-label="Explore ${b.title}"><rect class="hit-area book-art" x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="2"/><g class="scene-label" transform="translate(1000 ${b.y-50})"><rect width="355" height="40" rx="4"/><text x="177" y="26">${b.title}</text></g></a>`).join('');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let scrollFrame;
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(!link)return;const target=document.getElementById(link.getAttribute('href').slice(1));if(!target)return;e.preventDefault();if(target.tagName==='DETAILS')target.open=true;history.replaceState(null,'',link.getAttribute('href'));cancelAnimationFrame(scrollFrame);const start=scrollY;const end=target.getBoundingClientRect().top+start-30;const duration=reduced.matches?0:380;const time=performance.now();function step(now){const progress=duration?Math.min(1,(now-time)/duration):1;scrollTo(0,start+(end-start)*(1-Math.pow(1-progress,3)));if(progress<1)scrollFrame=requestAnimationFrame(step);else{const focus=target.querySelector('summary')||target;if(!focus.hasAttribute('tabindex'))focus.setAttribute('tabindex','-1');focus.focus({preventScroll:true});}}scrollFrame=requestAnimationFrame(step);});
['wheel','touchstart'].forEach(type=>addEventListener(type,()=>cancelAnimationFrame(scrollFrame),{passive:true}));
const cat=document.querySelector('#cat');const sound=document.querySelector('#sound');let soundOn=false,audio,catTimer;
sound.addEventListener('click',()=>{soundOn=!soundOn;sound.setAttribute('aria-pressed',String(soundOn));sound.innerHTML=`Sound ${soundOn?'on':'off'} <span>♪</span>`;});
function purr(){if(!soundOn)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume();const oscillator=audio.createOscillator(),gain=audio.createGain(),lfo=audio.createOscillator(),depth=audio.createGain();oscillator.type='triangle';oscillator.frequency.value=65;lfo.frequency.value=24;depth.gain.value=.025;gain.gain.setValueAtTime(.001,audio.currentTime);gain.gain.linearRampToValueAtTime(.045,audio.currentTime+.15);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+2);lfo.connect(depth);depth.connect(gain.gain);oscillator.connect(gain).connect(audio.destination);oscillator.start();lfo.start();oscillator.stop(audio.currentTime+2);lfo.stop(audio.currentTime+2);oscillator.onended=()=>{oscillator.disconnect();lfo.disconnect();depth.disconnect();gain.disconnect();};}catch{document.querySelector('#announcement').textContent='The cat is purring. Audio is unavailable in this browser.';}}
function pet(){clearTimeout(catTimer);cat.classList.add('petted');cat.setAttribute('aria-pressed','true');document.querySelector('#announcement').textContent='A happy cat. Purr…';purr();catTimer=setTimeout(()=>{cat.classList.remove('petted');cat.setAttribute('aria-pressed','false');},2600);}
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
 const label=hit.querySelector('.scene-label');
 if(label){const rect=label.querySelector('rect');rect.setAttribute('rx','24');rect.setAttribute('height','46');label.querySelector('text').setAttribute('y','30');}
});
// Fit labels to their actual handwritten text after the local font is ready.
document.fonts.ready.then(()=>room.querySelectorAll('.scene-label').forEach(label=>{
 const text=label.querySelector('text'),rect=label.querySelector('rect');
 const width=Math.ceil(text.getComputedTextLength()+44),center=Number(text.getAttribute('x'));
 rect.setAttribute('width',width);rect.setAttribute('x',center-width/2);
}));
