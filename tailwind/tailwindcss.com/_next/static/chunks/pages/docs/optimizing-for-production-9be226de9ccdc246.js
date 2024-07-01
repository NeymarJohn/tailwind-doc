(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3261],{52863:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/optimizing-for-production",function(){return t(81456)}])},81456:function(e,n,t){"use strict";t.r(n);var s=t(85893),r=t(11151),a=t(72788),l=t(36336);t(50224),t(30196),t(64637),t(19812);let o=a.L,i=l.X_;function u(e){let n=Object.assign({p:"p",em:"em",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components),{Editor:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Tailwind CSS is incredibly performance focused and aims to produce the smallest CSS file possible by only generating the CSS you are ",(0,s.jsx)(n.em,{children:"actually using"})," in your project."]}),"\n",(0,s.jsxs)(n.p,{children:["Combined with minification and network compression, this usually leads to CSS files that are less than 10kB, even for large projects. For example, Netflix uses Tailwind for ",(0,s.jsx)(n.a,{href:"https://top10.netflix.com/",children:"Netflix Top 10"})," and the entire website delivers only 6.5kB of CSS over the network."]}),"\n",(0,s.jsx)(n.p,{children:"With CSS files this small, you don’t have to worry about complex solutions like code-splitting your CSS for each page, and can instead just ship a single small CSS file that’s downloaded once and cached until you redeploy your site."}),"\n",(0,s.jsxs)(n.p,{children:["For the smallest possible production build, we recommend minifying your CSS with a tool like ",(0,s.jsx)(n.a,{href:"https://cssnano.github.io/cssnano",children:"cssnano"}),", and compressing your CSS with ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Brotli",children:"Brotli"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you’re using Tailwind CLI, you can minify your CSS by adding the ",(0,s.jsx)(n.code,{children:"--minify"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell">npx tailwindcss <span class="token parameter variable">-o</span> build.css <span class="token parameter variable">--minify</span></code>'}}),"\n",(0,s.jsxs)(n.p,{children:["If you’ve installed Tailwind as a PostCSS plugin, add ",(0,s.jsx)(n.code,{children:"cssnano"})," to the end of your plugin list:"]}),"\n",(0,s.jsx)(t,{filename:"postcss.config.js",code:'<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token spread operator">...</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">\'production\'</span> <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">cssnano</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,s.jsx)(n.p,{children:"If you’re using a framework, check the documentation as this is often handled for you in production automatically and you don’t even need to configure it."})]})}function c(e={}){return(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(u,e)}))}n.default=c,c.layoutProps={Layout:o,meta:{title:"Optimizing for Production",description:"Getting the most performance out of Tailwind CSS projects."},slug:"optimizing-for-production",tableOfContents:[]}},64637:function(e,n,t){"use strict";t.d(n,{E:function(){return d}});var s=t(85893),r=t(67294),a=t(5255),l=t(86010),o=t(4493);function i({className:e}){return(0,s.jsx)("div",{className:(0,l.Z)("pointer-events-none absolute inset-0",e)})}function u({children:e,selectedIndex:n,myIndex:t,marker:r}){let o=n===t,u={leading:o?null:n===t-1?"capped":"normal",trailing:o?null:n===t+1?"capped":"normal"};return(0,s.jsxs)(a.OK,{className:(0,l.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1 [&:not(:focus-visible)]:focus:outline-none",o?"text-sky-300":"text-slate-400"),children:[(0,s.jsx)("span",{className:"z-10",children:e}),"close"===r&&(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===r&&(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!o&&(0,s.jsx)(i,{className:(0,l.Z)("bg-slate-700/50 border-y border-slate-500/30","capped"===u.leading&&"border-l rounded-tl","capped"===u.trailing&&"border-r rounded-tr")}),"normal"===u.trailing&&(0,s.jsx)(i,{className:"inset-y-px border-r border-slate-200/5 z-20"}),o&&(0,s.jsx)(i,{className:"border-b border-b-sky-300"})]})}let c={plain:({children:e})=>(0,s.jsx)("div",{className:"not-prose bg-slate-800 rounded-xl shadow-md",children:e}),framed:({children:e,...n})=>(0,s.jsx)(o.RQ,{...n,children:(0,s.jsx)("div",{className:"not-prose bg-slate-800 rounded-tl-xl shadow-md",children:e})})};function d({children:e,style:n="plain",actions:t,...o}){let[i,d]=(0,r.useState)(0),p=c[n];return(0,s.jsx)(p,{...o,children:(0,s.jsxs)(a.OK.Group,{onChange:d,children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(a.OK.List,{className:"flex text-slate-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:e.map((e,n)=>(0,s.jsx)(u,{myIndex:n,selectedIndex:i,children:e.props.filename},e.props.filename))}),(0,s.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,s.jsx)("div",{className:(0,l.Z)("flex-auto flex justify-end bg-slate-700/50 border-y border-slate-500/30 pr-4",i===e.length-1?"rounded-tl border-l":"")})}),t?(0,s.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:t({selectedIndex:i})}):null]}),(0,s.jsx)(a.OK.Panels,{className:"flex overflow-auto",children:e.map(e=>(0,s.jsx)(a.OK.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-slate-50 ligatures-none",...e.props.code?{dangerouslySetInnerHTML:{__html:e.props.code}}:{children:e.props.children}},e.props.filename))})]})})}},30196:function(e,n,t){"use strict";t.d(n,{$o:function(){return l},Vw:function(){return r},qm:function(){return a}});var s=t(85893);function r({children:e}){return(0,s.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,s.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,s.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,s.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,s.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:e})]})}function a({children:e}){return(0,s.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,s.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,s.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,s.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,s.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:e})]})}function l({children:e}){return(0,s.jsxs)("div",{className:"mt-6 -mb-1 flex space-x-2",children:[(0,s.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,s.jsx)("p",{className:"m-0 text-slate-700 text-sm font-medium dark:text-slate-200",children:e})]})}},72788:function(e,n,t){"use strict";t.d(n,{L:function(){return o}});var s=t(85893),r=t(97903),a=t(77929),l=t(87308);function o(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,{nav:l.u,...e})]})}o.nav=l.u},5255:function(e,n,t){"use strict";t.d(n,{OK:function(){return A}});var s,r,a,l=t(63370),o=t(18419),i=t(67294),u=t(63766),c=t(73781),d=t(16723),p=t(3855),f=t(14157),x=t(23784),m=t(14879),h=t(46045);function b({onFocus:e}){let[n,t]=(0,i.useState)(!0),s=(0,m.t)();return n?i.createElement(h._,{as:"button",type:"button",features:h.x.Focusable,onFocus:n=>{n.preventDefault();let r,a=50;r=requestAnimationFrame(function n(){if(a--<=0){r&&cancelAnimationFrame(r);return}if(e()){if(cancelAnimationFrame(r),!s.current)return;t(!1);return}r=requestAnimationFrame(n)})}}):null}var g=t(84575),v=t(32984),y=t(81021),k=t(15466),j=t(12351);let w=i.createContext(null);function T({children:e}){let n=i.useRef({groups:new Map,get(e,n){var t;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let r=null!=(t=s.get(n))?t:0;return s.set(n,r+1),[Array.from(s.keys()).indexOf(n),function(){let e=s.get(n);e>1?s.set(n,e-1):s.delete(n)}]}});return i.createElement(w.Provider,{value:n},e)}function E(e){let n=i.useContext(w);if(!n)throw Error("You must wrap your component in a <StableCollection>");let t=function(){var e,n,t;let s=null!=(t=null==(n=null==(e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:n.current)?t:null;if(!s)return Symbol();let r=[],a=s;for(;a;)r.push(a.index),a=a.return;return"$."+r.join(".")}(),[s,r]=n.current.get(e,t);return i.useEffect(()=>r,[]),s}var N=t(61363),S=((s=S||{})[s.Forwards=0]="Forwards",s[s.Backwards=1]="Backwards",s),P=((r=P||{})[r.Less=-1]="Less",r[r.Equal=0]="Equal",r[r.Greater=1]="Greater",r),I=((a=I||{})[a.SetSelectedIndex=0]="SetSelectedIndex",a[a.RegisterTab=1]="RegisterTab",a[a.UnregisterTab=2]="UnregisterTab",a[a.RegisterPanel=3]="RegisterPanel",a[a.UnregisterPanel=4]="UnregisterPanel",a);let C={0(e,n){var t;let s=(0,g.z2)(e.tabs,e=>e.current),r=(0,g.z2)(e.panels,e=>e.current),a=s.filter(e=>{var n;return!(null!=(n=e.current)&&n.hasAttribute("disabled"))}),l={...e,tabs:s,panels:r};if(n.index<0||n.index>s.length-1){let t=(0,v.E)(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,v.E)(Math.sign(n.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===a.length)return l;let r=(0,v.E)(t,{0:()=>s.indexOf(a[0]),1:()=>s.indexOf(a[a.length-1])});return{...l,selectedIndex:-1===r?e.selectedIndex:r}}let o=s.slice(0,n.index),i=[...s.slice(n.index),...o].find(e=>a.includes(e));if(!i)return l;let u=null!=(t=s.indexOf(i))?t:e.selectedIndex;return -1===u&&(u=e.selectedIndex),{...l,selectedIndex:u}},1(e,n){if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],s=(0,g.z2)([...e.tabs,n.tab],e=>e.current),r=e.selectedIndex;return e.info.current.isControlled||-1===(r=s.indexOf(t))&&(r=e.selectedIndex),{...e,tabs:s,selectedIndex:r}},2:(e,n)=>({...e,tabs:e.tabs.filter(e=>e!==n.tab)}),3:(e,n)=>e.panels.includes(n.panel)?e:{...e,panels:(0,g.z2)([...e.panels,n.panel],e=>e.current)},4:(e,n)=>({...e,panels:e.panels.filter(e=>e!==n.panel)})},O=(0,i.createContext)(null);function _(e){let n=(0,i.useContext)(O);if(null===n){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return n}O.displayName="TabsDataContext";let R=(0,i.createContext)(null);function L(e){let n=(0,i.useContext)(R);if(null===n){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return n}function z(e,n){return(0,v.E)(n.type,C,e,n)}R.displayName="TabsActionsContext";let F=j.VN.RenderStrategy|j.VN.Static,A=Object.assign((0,j.yV)(function(e,n){var t,s;let r=(0,i.useId)(),{id:a=`headlessui-tabs-tab-${r}`,disabled:p=!1,autoFocus:m=!1,...h}=e,{orientation:b,activation:w,selectedIndex:T,tabs:S,panels:P}=_("Tab"),I=L("Tab"),C=_("Tab"),O=(0,i.useRef)(null),R=(0,x.T)(O,n);(0,d.e)(()=>I.registerTab(O),[I,O]);let z=E("tabs"),F=S.indexOf(O);-1===F&&(F=z);let A=F===T,M=(0,c.z)(e=>{var n;let t=e();if(t===g.fE.Success&&"auto"===w){let e=null==(n=(0,k.r)(O))?void 0:n.activeElement,t=C.tabs.findIndex(n=>n.current===e);-1!==t&&I.change(t)}return t}),D=(0,c.z)(e=>{let n=S.map(e=>e.current).filter(Boolean);if(e.key===N.R.Space||e.key===N.R.Enter){e.preventDefault(),e.stopPropagation(),I.change(F);return}switch(e.key){case N.R.Home:case N.R.PageUp:return e.preventDefault(),e.stopPropagation(),M(()=>(0,g.jA)(n,g.TO.First));case N.R.End:case N.R.PageDown:return e.preventDefault(),e.stopPropagation(),M(()=>(0,g.jA)(n,g.TO.Last))}if(M(()=>(0,v.E)(b,{vertical:()=>e.key===N.R.ArrowUp?(0,g.jA)(n,g.TO.Previous|g.TO.WrapAround):e.key===N.R.ArrowDown?(0,g.jA)(n,g.TO.Next|g.TO.WrapAround):g.fE.Error,horizontal:()=>e.key===N.R.ArrowLeft?(0,g.jA)(n,g.TO.Previous|g.TO.WrapAround):e.key===N.R.ArrowRight?(0,g.jA)(n,g.TO.Next|g.TO.WrapAround):g.fE.Error}))===g.fE.Success)return e.preventDefault()}),V=(0,i.useRef)(!1),B=(0,c.z)(()=>{var e;V.current||(V.current=!0,null==(e=O.current)||e.focus({preventScroll:!0}),I.change(F),(0,y.Y)(()=>{V.current=!1}))}),G=(0,c.z)(e=>{e.preventDefault()}),{isFocusVisible:U,focusProps:W}=(0,l.Fx)({autoFocus:m}),{isHovered:Y,hoverProps:K}=(0,o.X)({isDisabled:p}),{pressed:$,pressProps:q}=(0,u.x)({disabled:p}),H=(0,i.useMemo)(()=>({selected:A,hover:Y,active:$,focus:U,autofocus:m,disabled:p}),[A,Y,U,$,m,p]),Z=(0,j.dG)({ref:R,onKeyDown:D,onMouseDown:G,onClick:B,id:a,role:"tab",type:(0,f.f)(e,O),"aria-controls":null==(s=null==(t=P[F])?void 0:t.current)?void 0:s.id,"aria-selected":A,tabIndex:A?0:-1,disabled:p||void 0,autoFocus:m},W,K,q);return(0,j.sY)({ourProps:Z,theirProps:h,slot:H,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,j.yV)(function(e,n){let{defaultIndex:t=0,vertical:s=!1,manual:r=!1,onChange:a,selectedIndex:l=null,...o}=e,u=s?"vertical":"horizontal",f=r?"manual":"auto",m=null!==l,h=(0,p.E)({isControlled:m}),v=(0,x.T)(n),[y,k]=(0,i.useReducer)(z,{info:h,selectedIndex:null!=l?l:t,tabs:[],panels:[]}),w=(0,i.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),E=(0,p.E)(a||(()=>{})),N=(0,p.E)(y.tabs),S=(0,i.useMemo)(()=>({orientation:u,activation:f,...y}),[u,f,y]),P=(0,c.z)(e=>(k({type:1,tab:e}),()=>k({type:2,tab:e}))),I=(0,c.z)(e=>(k({type:3,panel:e}),()=>k({type:4,panel:e}))),C=(0,c.z)(e=>{_.current!==e&&E.current(e),m||k({type:0,index:e})}),_=(0,p.E)(m?e.selectedIndex:y.selectedIndex),L=(0,i.useMemo)(()=>({registerTab:P,registerPanel:I,change:C}),[]);return(0,d.e)(()=>{k({type:0,index:null!=l?l:t})},[l]),(0,d.e)(()=>{if(void 0===_.current||y.tabs.length<=0)return;let e=(0,g.z2)(y.tabs,e=>e.current);e.some((e,n)=>y.tabs[n]!==e)&&C(e.indexOf(y.tabs[_.current]))}),i.createElement(T,null,i.createElement(R.Provider,{value:L},i.createElement(O.Provider,{value:S},S.tabs.length<=0&&i.createElement(b,{onFocus:()=>{var e,n;for(let t of N.current)if((null==(e=t.current)?void 0:e.tabIndex)===0)return null==(n=t.current)||n.focus(),!0;return!1}}),(0,j.sY)({ourProps:{ref:v},theirProps:o,slot:w,defaultTag:"div",name:"Tabs"}))))}),List:(0,j.yV)(function(e,n){let{orientation:t,selectedIndex:s}=_("Tab.List"),r=(0,x.T)(n),a=(0,i.useMemo)(()=>({selectedIndex:s}),[s]);return(0,j.sY)({ourProps:{ref:r,role:"tablist","aria-orientation":t},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.List"})}),Panels:(0,j.yV)(function(e,n){let{selectedIndex:t}=_("Tab.Panels"),s=(0,x.T)(n),r=(0,i.useMemo)(()=>({selectedIndex:t}),[t]);return(0,j.sY)({ourProps:{ref:s},theirProps:e,slot:r,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,j.yV)(function(e,n){var t,s,r,a;let o=(0,i.useId)(),{id:u=`headlessui-tabs-panel-${o}`,tabIndex:c=0,...p}=e,{selectedIndex:f,tabs:m,panels:b}=_("Tab.Panel"),g=L("Tab.Panel"),v=(0,i.useRef)(null),y=(0,x.T)(v,n);(0,d.e)(()=>g.registerPanel(v),[g,v]);let k=E("panels"),w=b.indexOf(v);-1===w&&(w=k);let T=w===f,{isFocusVisible:N,focusProps:S}=(0,l.Fx)(),P=(0,i.useMemo)(()=>({selected:T,focus:N}),[T,N]),I=(0,j.dG)({ref:y,id:u,role:"tabpanel","aria-labelledby":null==(s=null==(t=m[w])?void 0:t.current)?void 0:s.id,tabIndex:T?c:-1},S);return T||null!=(r=p.unmount)&&!r||null!=(a=p.static)&&a?(0,j.sY)({ourProps:I,theirProps:p,slot:P,defaultTag:"div",features:F,visible:T,name:"Tabs.Panel"}):i.createElement(h._,{as:"span","aria-hidden":"true",...I})})})},11151:function(e,n,t){"use strict";t.d(n,{Zo:function(){return o},ah:function(){return a}});var s=t(67294);let r=s.createContext({});function a(e){let n=s.useContext(r);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let l={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||l:a(e),s.createElement(r.Provider,{value:o},n)}}},function(e){e.O(0,[3430,3306,9495,224,7308,9994,9812,9774,2888,179],function(){return e(e.s=52863)}),_N_E=e.O()}]);