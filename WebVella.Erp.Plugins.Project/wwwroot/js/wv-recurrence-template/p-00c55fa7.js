const e="wv-recurrence-template";let t=0,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},o=new WeakMap,c=e=>o.get(e),i=(e,t)=>o.set(t.s=e,t),a=(e,t)=>t in e,u=e=>console.error(e),f=new Map,m=[],p=[],$=[],d=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&r.t?h(y):r.raf(y))},w=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(s){u(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},y=()=>{t++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){u(t)}e.length=0})(m);const e=2==(6&r.t)?performance.now()+10*Math.ceil(t*(1/22)):1/0;w(p,e),w($,e),p.length>0&&($.push(...p),p.length=0),(n=m.length+p.length+$.length>0)?r.raf(y):t=0},h=e=>Promise.resolve().then(e),b=d(p,!0),_={},j=e=>"object"==(e=typeof e)||"function"===e,v=()=>l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wv_recurrence_template("./p-d8631f0b.js").then(()=>{r.o=l.__stencil_cssshim}),g=async()=>{r.o=l.__stencil_cssshim;const t=new RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(s.querySelectorAll("script")).find(n=>t.test(n.src)||n.getAttribute("data-stencil-namespace")===e),o=n["data-opts"];{const e=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,l.location.href));return M(e.href,n),window.customElements||await __sc_import_wv_recurrence_template("./p-3b66a627.js"),Object.assign(Object.assign({},o),{resourcesUrl:e.href})}},M=(t,n)=>{const r=(e=>`__sc_import_${e.replace(/\s|-/g,"_")}`)(e);try{l[r]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const e=new Map;l[r]=o=>{const c=new URL(o,t).href;let i=e.get(c);if(!i){const t=s.createElement("script");t.type="module",t.crossOrigin=n.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${r}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(l[r].m),t.remove()}}),e.set(c,i),s.head.appendChild(t)}return i}}},O=(e,t,...n)=>{let l=null,s=null,r=!1,o=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!j(l))&&(l=String(l)),r&&o?c[c.length-1].i+=l:c.push(r?U(null,l):l),o=r)};if(i(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=U(e,null);return a.u=t,c.length>0&&(a.p=c),a.$=s,a},U=(e,t)=>({t:0,h:e,i:t,_:null,p:null,u:null,$:null}),k={},L=(e,t,n,s,o,c)=>{if(n===s)return;let i=a(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=P(n),r=P(s);t.remove(...l.filter(e=>e&&!r.includes(e))),t.add(...r.filter(e=>e&&!l.includes(e)))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if(i||"o"!==t[0]||"n"!==t[1]){const l=j(s);if((i||l&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(f){}null==s||!1===s?e.removeAttribute(t):(!i||4&c||o)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):a(l,u)?u.slice(2):u[2]+t.slice(3),n&&r.rel(e,t,n,!1),s&&r.ael(e,t,s,!1)},R=/\s/,P=e=>e?e.split(R):[],x=(e,t,n,l)=>{const s=11===t._.nodeType&&t._.host?t._.host:t._,r=e&&e.u||_,o=t.u||_;for(l in r)l in o||L(s,l,r[l],void 0,n,t.t);for(l in o)L(s,l,r[l],o[l],n,t.t)},A=(e,t,n)=>{let l,r,o=t.p[n],c=0;if(null!==o.i)l=o._=s.createTextNode(o.i);else if(l=o._=s.createElement(o.h),x(null,o,!1),o.p)for(c=0;c<o.p.length;++c)(r=A(e,o,c))&&l.appendChild(r);return l},E=(e,t,n,l,s,r)=>{let o,c=e;for(;s<=r;++s)l[s]&&(o=A(null,n,s))&&(l[s]._=o,c.insertBefore(o,t))},T=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l._.remove()},C=(e,t)=>e.h===t.h&&e.$===t.$,F=(e,t)=>{const n=t._=e._,l=e.p,s=t.p;null===t.i?(x(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,r,o=0,c=0,i=0,a=0,u=t.length-1,f=t[0],m=t[u],p=l.length-1,$=l[0],d=l[p];for(;o<=u&&c<=p;)if(null==f)f=t[++o];else if(null==m)m=t[--u];else if(null==$)$=l[++c];else if(null==d)d=l[--p];else if(C(f,$))F(f,$),f=t[++o],$=l[++c];else if(C(m,d))F(m,d),m=t[--u],d=l[--p];else if(C(f,d))F(f,d),e.insertBefore(f._,m._.nextSibling),f=t[++o],d=l[--p];else if(C(m,$))F(m,$),e.insertBefore(m._,f._),m=t[--u],$=l[++c];else{for(i=-1,a=o;a<=u;++a)if(t[a]&&null!==t[a].$&&t[a].$===$.$){i=a;break}i>=0?((r=t[i]).h!==$.h?s=A(t&&t[c],n,i):(F(r,$),t[i]=void 0,s=r._),$=l[++c]):(s=A(t&&t[c],n,c),$=l[++c]),s&&f._.parentNode.insertBefore(s,f._)}o>u?E(e,null==l[p+1]?null:l[p+1]._,n,l,c,p):c>p&&T(t,o,u)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),E(n,null,t,s,0,s.length-1)):null!==l&&T(l,0,l.length-1)):e.i!==t.i&&(n.data=t.i)},S=(e,t)=>{t&&!e.j&&t["s-p"].push(new Promise(t=>e.j=t))},W=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const s=t.s,r=()=>q(e,t,n,s);let o;return S(t,t.v),l&&(o=V(s,"componentWillLoad")),z(o,()=>b(r))},q=(e,t,n,l)=>{const s=e["s-rc"];((e,t,n,l)=>{const s=t.g||U(null,null),r=(e=>e&&e.h===k)(l)?l:O(null,null,l);r.h=null,r.t|=4,t.g=r,r._=s._=e,F(s,r)})(e,t,0,B(l)),t.t&=-17,t.t|=2,s&&(s.forEach(e=>e()),e["s-rc"]=void 0);{const l=e["s-p"],s=()=>H(e,t,n);0===l.length?s():(Promise.all(l).then(s),t.t|=4,l.length=0)}},B=e=>{try{e=e.render()}catch(t){u(t)}return e},H=(e,t,n)=>{const l=t.v;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.M(e),l||N()),t.j&&(t.j(),t.j=void 0),512&t.t&&h(()=>W(e,t,n,!1)),t.t&=-517},N=()=>{s.documentElement.classList.add("hydrated"),r.t|=2},V=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){u(l)}},z=(e,t)=>e&&e.then?e.then(t):t(),D=(e,t,n)=>{if(t.O){const l=Object.entries(t.O),s=e.prototype;if(l.forEach(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>c(e).U.get(t))(this,e)},set(n){((e,t,n,l)=>{const s=c(this),r=s.k,o=s.U.get(t),i=s.t,a=s.s;(n=((e,t)=>null==e||j(e)?e:1&t?String(e):e)(n,l.O[t][0]))===o||8&i&&void 0!==o||(s.U.set(t,n),a&&2==(18&i)&&W(r,s,l,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){r.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},G=(e,t={})=>{const n=[],i=t.exclude||[],a=s.head,m=l.customElements,p=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let w,y=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",s.baseURI).href,t.syncQueue&&(r.t|=4),e.forEach(e=>e[1].forEach(t=>{const l={t:t[0],L:t[1],O:t[2],R:t[3]};l.O=t[2];const s=l.L,a=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,k:e,U:new Map};t.P=new Promise(e=>t.M=e),e["s-p"]=[],e["s-rc"]=[],o.set(e,t)})(e=this)}connectedCallback(){w&&(clearTimeout(w),w=null),y?d.push(this):r.jmp(()=>((e,t)=>{if(0==(1&r.t)){const n=()=>{},l=c(e);if(!(1&l.t)){l.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){S(l,l.v=t);break}}t.O&&Object.entries(t.O).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),h(()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=(e=>{const t=e.L.replace(/-/g,"_"),n=e.A,l=f.get(n);return l?l[t]:__sc_import_wv_recurrence_template(`./${n}.entry.js`).then(e=>(f.set(n,e),e[t]),u)})(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(D(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(c){u(c)}t.t&=-9,e()}}const r=t.v,o=()=>W(e,t,n,!0);r&&r["s-rc"]?r["s-rc"].push(o):o()})(e,l,t))}n()}})(this,l))}disconnectedCallback(){r.jmp(()=>void 0)}forceUpdate(){((e,t)=>{{const n=c(e);n.k.isConnected&&2==(18&n.t)&&W(e,n,t,!1)}})(this,l)}componentOnReady(){return c(this).P}};l.A=e[0],i.includes(s)||m.get(s)||(n.push(s),m.define(s,D(a,l,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,p?p.nextSibling:a.firstChild),y=!1,d.length>0?d.forEach(e=>e.connectedCallback()):r.jmp(()=>w=setTimeout(N,30,"timeout"))};export{v as a,G as b,O as h,g as p,i as r};