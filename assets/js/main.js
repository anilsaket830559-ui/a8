(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function chips(id,cb){var w=$(id);if(!w)return;[].forEach.call(w.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(+b.getAttribute('data-v'));});});}
if($('qt-l')){var course=1,style=0,qg=$('qt-g');function g(x){return x>=1000?(Math.round(x/100)/10)+' kg':Math.round(x/5)*5+' g';}
 function qt(){var n=+qg.value,r=n*(course?80:50),st=r*3.2/1000,rows=[['Risotto rice (Arborio or Carnaroli)',g(r)],['Hot stock',(Math.round(st*10)/10)+(Math.round(st*10)/10===1?' litre':' litres')],['Onion or shallots',Math.max(1,Math.round(n/3))+(Math.round(n/3)>1?' onions':' onion')],['Butter',g(n*12)],['Parmesan, finely grated',g(n*18)]];
  if(style===1)rows.push(['Mixed mushrooms',g(n*70)]);if(style===2)rows.push(['Saffron threads','a generous pinch per '+(n>4?Math.ceil(n/4)+' batches':'pan')]);if(style===3)rows.push(['Peas, asparagus or courgette',g(n*60)],['Lemon zest','1 lemon']);
  $('qt-go').textContent=n;$('qt-l').innerHTML=rows.map(function(x){return '<li><span>'+x[0]+'</span><b>'+x[1]+'</b></li>';}).join('');
  $('qt-n').textContent=(r>700?'More than about 700 g of rice is easier to cook in two pans, so every grain gets enough attention. ':'')+'Keep a little extra stock hot: some rice drinks more than others.';}
 qg.addEventListener('input',qt);chips('qt-c',function(v){course=v;qt();});chips('qt-s',function(v){style=v;qt();});qt();}
var go=$('tm-go');if(go){var t=0,run=null,ring=$('tm-ring'),L=817,lis=[].slice.call($('tm-l').children),END=20;
 var MSG=[[0,'Toast the rice'],[2,'First ladle of stock'],[4,'Add a ladle when absorbed'],[15,'Taste the rice'],[18,'Off the heat: butter and cheese'],[20,'Rest, then serve']];
 function draw(){var m=Math.floor(t),s=Math.floor((t-m)*60);$('tm-t').textContent=m+':'+(s<10?'0':'')+s;ring.style.strokeDashoffset=(L*(1-Math.min(t,END)/END)).toFixed(1);var cur=0;MSG.forEach(function(x,i){if(t>=x[0])cur=i;});$('tm-s').textContent=t===0&&!run?'Ready':MSG[cur][1];
  lis.forEach(function(li,i){li.classList.toggle('on',i===cur&&(run||t>0));li.classList.toggle('done',i<cur);});$('tm-ld').textContent=t<2?0:Math.min(10,1+Math.floor((Math.min(t,15)-2)/1.4));
  $('tm-rice').style.fill=t<4?'#F2E3BE':t<15?'#EFD9A4':'#F6E7C1';}
 go.addEventListener('click',function(){if(run){clearInterval(run);run=null;go.textContent='Resume';draw();return;}if(t>=END)t=0;go.textContent='Pause';var fast=$('tm-f').checked,step=fast?1/40:1/60*0.25;run=setInterval(function(){t=Math.min(END,t+(fast?0.0125:1/240));draw();if(t>=END){clearInterval(run);run=null;go.textContent='Start again';$('tm-s').textContent='Buon appetito!';}},fast?25:250);draw();});
 $('tm-r').addEventListener('click',function(){clearInterval(run);run=null;t=0;go.textContent='Start cooking';draw();});draw();}
})();
