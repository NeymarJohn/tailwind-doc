(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9567],{88305:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/letter-spacing",function(){return s(32191)}])},32191:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var a=s(85893),t=s(11151),l=s(72788),o=s(36336),p=s(64637),r=s(90954),i=s(63491),c=s(2964);let u=l.L,d=o.X_;function g(n){let e=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,t.ah)(),n.components),{Heading:s,Example:l,Editor:o}=e;return o||m("Editor",!0),l||m("Example",!0),s||m("Heading",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,a.jsx)(s,{level:3,id:"setting-the-letter-spacing",children:"Setting the letter spacing"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"tracking-*"})," utilities to control the letter spacing of an element."]}),"\n",(0,a.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col gap-8">\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-tight</span>\n    <p class="tracking-tight text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-normal</span>\n    <p class="tracking-normal text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-wide</span>\n    <p class="tracking-wide text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n</div>'}),"\n",(0,a.jsx)(e.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tracking-tight</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tracking-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tracking-wide</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,a.jsx)(s,{level:3,id:"using-negative-values",children:"Using negative values"}),"\n",(0,a.jsx)(e.p,{children:"To use a negative letter-spacing value, prefix the class name with a dash to convert it to a negative value."}),"\n",(0,a.jsx)(e.p,{children:"Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, but if you’ve opted to customize your letter-spacing scale to use numbers instead of descriptive words like “wide” the negative value modifier can be useful."}),"\n",(0,a.jsxs)(p.E,{children:[(0,a.jsx)(o,{filename:"HTML",code:'<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">-tracking-2</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code></pre>'}),(0,a.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">letterSpacing</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string-property property">\'1\'</span><span class="token operator">:</span> <span class="token string">\'0em\'</span><span class="token punctuation">,</span>\n      <span class="token string-property property">\'2\'</span><span class="token operator">:</span> <span class="token string">\'0.025em\'</span><span class="token punctuation">,</span>\n      <span class="token string-property property">\'3\'</span><span class="token operator">:</span> <span class="token string">\'0.05em\'</span><span class="token punctuation">,</span>\n      <span class="token string-property property">\'4\'</span><span class="token operator">:</span> <span class="token string">\'0.1em\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'})]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,a.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,a.jsx)(c.k,{defaultClass:"tracking-tight",featuredClass:"tracking-wide",element:"p"}),"\n",(0,a.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,a.jsx)(i.p,{defaultClass:"tracking-tight",featuredClass:"tracking-wide",element:"p"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,a.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,a.jsxs)(e.p,{children:["By default, Tailwind provides six ",(0,a.jsx)(e.code,{children:"letter-spacing"})," utilities. You can change, add, or remove these by editing the ",(0,a.jsx)(e.code,{children:"theme.letterSpacing"})," section of your Tailwind config."]}),"\n",(0,a.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">letterSpacing</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">tightest</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'-.075em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">tighter</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'-.05em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token literal-property property">tight</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'-.025em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">normal</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'0\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token literal-property property">wide</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.025em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">wider</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.05em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js deleted"><span class="token plain">      </span><span class="token literal-property property">widest</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.1em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">widest</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.25em\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,a.jsxs)(e.p,{children:["Learn more about customizing the default theme in the ",(0,a.jsx)(e.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,a.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,a.jsx)(r.k,{property:"letter-spacing",featuredClass:"tracking-[.25em]",element:"p"})]})}function k(n={}){return(0,a.jsx)(d,Object.assign({},n,{children:(0,a.jsx)(g,n)}))}var h=k;function m(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}k.layoutProps={Layout:u,classes:{utilities:{".tracking-tighter":{"letter-spacing":"-0.05em"},".tracking-tight":{"letter-spacing":"-0.025em"},".tracking-normal":{"letter-spacing":"0em"},".tracking-wide":{"letter-spacing":"0.025em"},".tracking-wider":{"letter-spacing":"0.05em"},".tracking-widest":{"letter-spacing":"0.1em"}}},meta:{title:"Letter Spacing",description:"Utilities for controlling the tracking (letter spacing) of an element."},slug:"letter-spacing",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the letter spacing",slug:"setting-the-letter-spacing",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},64637:function(n,e,s){"use strict";s.d(e,{E:function(){return u}});var a=s(85893),t=s(67294),l=s(5255),o=s(86010),p=s(4493);function r({className:n}){return(0,a.jsx)("div",{className:(0,o.Z)("pointer-events-none absolute inset-0",n)})}function i({children:n,selectedIndex:e,myIndex:s,marker:t}){let p=e===s,i={leading:p?null:e===s-1?"capped":"normal",trailing:p?null:e===s+1?"capped":"normal"};return(0,a.jsxs)(l.OK,{className:(0,o.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1 [&:not(:focus-visible)]:focus:outline-none",p?"text-sky-300":"text-slate-400"),children:[(0,a.jsx)("span",{className:"z-10",children:n}),"close"===t&&(0,a.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,a.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===t&&(0,a.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!p&&(0,a.jsx)(r,{className:(0,o.Z)("bg-slate-700/50 border-y border-slate-500/30","capped"===i.leading&&"border-l rounded-tl","capped"===i.trailing&&"border-r rounded-tr")}),"normal"===i.trailing&&(0,a.jsx)(r,{className:"inset-y-px border-r border-slate-200/5 z-20"}),p&&(0,a.jsx)(r,{className:"border-b border-b-sky-300"})]})}let c={plain:({children:n})=>(0,a.jsx)("div",{className:"not-prose bg-slate-800 rounded-xl shadow-md",children:n}),framed:({children:n,...e})=>(0,a.jsx)(p.RQ,{...e,children:(0,a.jsx)("div",{className:"not-prose bg-slate-800 rounded-tl-xl shadow-md",children:n})})};function u({children:n,style:e="plain",actions:s,...p}){let[r,u]=(0,t.useState)(0),d=c[e];return(0,a.jsx)(d,{...p,children:(0,a.jsxs)(l.OK.Group,{onChange:u,children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.OK.List,{className:"flex text-slate-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:n.map((n,e)=>(0,a.jsx)(i,{myIndex:e,selectedIndex:r,children:n.props.filename},n.props.filename))}),(0,a.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,a.jsx)("div",{className:(0,o.Z)("flex-auto flex justify-end bg-slate-700/50 border-y border-slate-500/30 pr-4",r===n.length-1?"rounded-tl border-l":"")})}),s?(0,a.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:s({selectedIndex:r})}):null]}),(0,a.jsx)(l.OK.Panels,{className:"flex overflow-auto",children:n.map(n=>(0,a.jsx)(l.OK.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-slate-50 ligatures-none",...n.props.code?{dangerouslySetInnerHTML:{__html:n.props.code}}:{children:n.props.children}},n.props.filename))})]})})}},5255:function(n,e,s){"use strict";s.d(e,{OK:function(){return L}});var a,t,l,o=s(63370),p=s(18419),r=s(67294),i=s(63766),c=s(73781),u=s(16723),d=s(3855),g=s(14157),k=s(23784),h=s(14879),m=s(46045);function f({onFocus:n}){let[e,s]=(0,r.useState)(!0),a=(0,h.t)();return e?r.createElement(m._,{as:"button",type:"button",features:m.x.Focusable,onFocus:e=>{e.preventDefault();let t,l=50;t=requestAnimationFrame(function e(){if(l--<=0){t&&cancelAnimationFrame(t);return}if(n()){if(cancelAnimationFrame(t),!a.current)return;s(!1);return}t=requestAnimationFrame(e)})}}):null}var x=s(84575),v=s(32984),b=s(81021),y=s(15466),j=s(12351);let w=r.createContext(null);function T({children:n}){let e=r.useRef({groups:new Map,get(n,e){var s;let a=this.groups.get(n);a||(a=new Map,this.groups.set(n,a));let t=null!=(s=a.get(e))?s:0;return a.set(e,t+1),[Array.from(a.keys()).indexOf(e),function(){let n=a.get(e);n>1?a.set(e,n-1):a.delete(e)}]}});return r.createElement(w.Provider,{value:e},n)}function E(n){let e=r.useContext(w);if(!e)throw Error("You must wrap your component in a <StableCollection>");let s=function(){var n,e,s;let a=null!=(s=null==(e=null==(n=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:n.ReactCurrentOwner)?void 0:e.current)?s:null;if(!a)return Symbol();let t=[],l=a;for(;l;)t.push(l.index),l=l.return;return"$."+t.join(".")}(),[a,t]=e.current.get(n,s);return r.useEffect(()=>t,[]),a}var P=s(61363),I=((a=I||{})[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a),O=((t=O||{})[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t),N=((l=N||{})[l.SetSelectedIndex=0]="SetSelectedIndex",l[l.RegisterTab=1]="RegisterTab",l[l.UnregisterTab=2]="UnregisterTab",l[l.RegisterPanel=3]="RegisterPanel",l[l.UnregisterPanel=4]="UnregisterPanel",l);let C={0(n,e){var s;let a=(0,x.z2)(n.tabs,n=>n.current),t=(0,x.z2)(n.panels,n=>n.current),l=a.filter(n=>{var e;return!(null!=(e=n.current)&&e.hasAttribute("disabled"))}),o={...n,tabs:a,panels:t};if(e.index<0||e.index>a.length-1){let s=(0,v.E)(Math.sign(e.index-n.selectedIndex),{[-1]:()=>1,0:()=>(0,v.E)(Math.sign(e.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===l.length)return o;let t=(0,v.E)(s,{0:()=>a.indexOf(l[0]),1:()=>a.indexOf(l[l.length-1])});return{...o,selectedIndex:-1===t?n.selectedIndex:t}}let p=a.slice(0,e.index),r=[...a.slice(e.index),...p].find(n=>l.includes(n));if(!r)return o;let i=null!=(s=a.indexOf(r))?s:n.selectedIndex;return -1===i&&(i=n.selectedIndex),{...o,selectedIndex:i}},1(n,e){if(n.tabs.includes(e.tab))return n;let s=n.tabs[n.selectedIndex],a=(0,x.z2)([...n.tabs,e.tab],n=>n.current),t=n.selectedIndex;return n.info.current.isControlled||-1===(t=a.indexOf(s))&&(t=n.selectedIndex),{...n,tabs:a,selectedIndex:t}},2:(n,e)=>({...n,tabs:n.tabs.filter(n=>n!==e.tab)}),3:(n,e)=>n.panels.includes(e.panel)?n:{...n,panels:(0,x.z2)([...n.panels,e.panel],n=>n.current)},4:(n,e)=>({...n,panels:n.panels.filter(n=>n!==e.panel)})},_=(0,r.createContext)(null);function S(n){let e=(0,r.useContext)(_);if(null===e){let e=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,S),e}return e}_.displayName="TabsDataContext";let z=(0,r.createContext)(null);function R(n){let e=(0,r.useContext)(z);if(null===e){let e=Error(`<${n} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,R),e}return e}function A(n,e){return(0,v.E)(e.type,C,n,e)}z.displayName="TabsActionsContext";let F=j.VN.RenderStrategy|j.VN.Static,L=Object.assign((0,j.yV)(function(n,e){var s,a;let t=(0,r.useId)(),{id:l=`headlessui-tabs-tab-${t}`,disabled:d=!1,autoFocus:h=!1,...m}=n,{orientation:f,activation:w,selectedIndex:T,tabs:I,panels:O}=S("Tab"),N=R("Tab"),C=S("Tab"),_=(0,r.useRef)(null),z=(0,k.T)(_,e);(0,u.e)(()=>N.registerTab(_),[N,_]);let A=E("tabs"),F=I.indexOf(_);-1===F&&(F=A);let L=F===T,q=(0,c.z)(n=>{var e;let s=n();if(s===x.fE.Success&&"auto"===w){let n=null==(e=(0,y.r)(_))?void 0:e.activeElement,s=C.tabs.findIndex(e=>e.current===n);-1!==s&&N.change(s)}return s}),M=(0,c.z)(n=>{let e=I.map(n=>n.current).filter(Boolean);if(n.key===P.R.Space||n.key===P.R.Enter){n.preventDefault(),n.stopPropagation(),N.change(F);return}switch(n.key){case P.R.Home:case P.R.PageUp:return n.preventDefault(),n.stopPropagation(),q(()=>(0,x.jA)(e,x.TO.First));case P.R.End:case P.R.PageDown:return n.preventDefault(),n.stopPropagation(),q(()=>(0,x.jA)(e,x.TO.Last))}if(q(()=>(0,v.E)(f,{vertical:()=>n.key===P.R.ArrowUp?(0,x.jA)(e,x.TO.Previous|x.TO.WrapAround):n.key===P.R.ArrowDown?(0,x.jA)(e,x.TO.Next|x.TO.WrapAround):x.fE.Error,horizontal:()=>n.key===P.R.ArrowLeft?(0,x.jA)(e,x.TO.Previous|x.TO.WrapAround):n.key===P.R.ArrowRight?(0,x.jA)(e,x.TO.Next|x.TO.WrapAround):x.fE.Error}))===x.fE.Success)return n.preventDefault()}),U=(0,r.useRef)(!1),D=(0,c.z)(()=>{var n;U.current||(U.current=!0,null==(n=_.current)||n.focus({preventScroll:!0}),N.change(F),(0,b.Y)(()=>{U.current=!1}))}),B=(0,c.z)(n=>{n.preventDefault()}),{isFocusVisible:V,focusProps:Y}=(0,o.Fx)({autoFocus:h}),{isHovered:G,hoverProps:H}=(0,p.X)({isDisabled:d}),{pressed:K,pressProps:W}=(0,i.x)({disabled:d}),Z=(0,r.useMemo)(()=>({selected:L,hover:G,active:K,focus:V,autofocus:h,disabled:d}),[L,G,V,K,h,d]),$=(0,j.dG)({ref:z,onKeyDown:M,onMouseDown:B,onClick:D,id:l,role:"tab",type:(0,g.f)(n,_),"aria-controls":null==(a=null==(s=O[F])?void 0:s.current)?void 0:a.id,"aria-selected":L,tabIndex:L?0:-1,disabled:d||void 0,autoFocus:h},Y,H,W);return(0,j.sY)({ourProps:$,theirProps:m,slot:Z,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,j.yV)(function(n,e){let{defaultIndex:s=0,vertical:a=!1,manual:t=!1,onChange:l,selectedIndex:o=null,...p}=n,i=a?"vertical":"horizontal",g=t?"manual":"auto",h=null!==o,m=(0,d.E)({isControlled:h}),v=(0,k.T)(e),[b,y]=(0,r.useReducer)(A,{info:m,selectedIndex:null!=o?o:s,tabs:[],panels:[]}),w=(0,r.useMemo)(()=>({selectedIndex:b.selectedIndex}),[b.selectedIndex]),E=(0,d.E)(l||(()=>{})),P=(0,d.E)(b.tabs),I=(0,r.useMemo)(()=>({orientation:i,activation:g,...b}),[i,g,b]),O=(0,c.z)(n=>(y({type:1,tab:n}),()=>y({type:2,tab:n}))),N=(0,c.z)(n=>(y({type:3,panel:n}),()=>y({type:4,panel:n}))),C=(0,c.z)(n=>{S.current!==n&&E.current(n),h||y({type:0,index:n})}),S=(0,d.E)(h?n.selectedIndex:b.selectedIndex),R=(0,r.useMemo)(()=>({registerTab:O,registerPanel:N,change:C}),[]);return(0,u.e)(()=>{y({type:0,index:null!=o?o:s})},[o]),(0,u.e)(()=>{if(void 0===S.current||b.tabs.length<=0)return;let n=(0,x.z2)(b.tabs,n=>n.current);n.some((n,e)=>b.tabs[e]!==n)&&C(n.indexOf(b.tabs[S.current]))}),r.createElement(T,null,r.createElement(z.Provider,{value:R},r.createElement(_.Provider,{value:I},I.tabs.length<=0&&r.createElement(f,{onFocus:()=>{var n,e;for(let s of P.current)if((null==(n=s.current)?void 0:n.tabIndex)===0)return null==(e=s.current)||e.focus(),!0;return!1}}),(0,j.sY)({ourProps:{ref:v},theirProps:p,slot:w,defaultTag:"div",name:"Tabs"}))))}),List:(0,j.yV)(function(n,e){let{orientation:s,selectedIndex:a}=S("Tab.List"),t=(0,k.T)(e),l=(0,r.useMemo)(()=>({selectedIndex:a}),[a]);return(0,j.sY)({ourProps:{ref:t,role:"tablist","aria-orientation":s},theirProps:n,slot:l,defaultTag:"div",name:"Tabs.List"})}),Panels:(0,j.yV)(function(n,e){let{selectedIndex:s}=S("Tab.Panels"),a=(0,k.T)(e),t=(0,r.useMemo)(()=>({selectedIndex:s}),[s]);return(0,j.sY)({ourProps:{ref:a},theirProps:n,slot:t,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,j.yV)(function(n,e){var s,a,t,l;let p=(0,r.useId)(),{id:i=`headlessui-tabs-panel-${p}`,tabIndex:c=0,...d}=n,{selectedIndex:g,tabs:h,panels:f}=S("Tab.Panel"),x=R("Tab.Panel"),v=(0,r.useRef)(null),b=(0,k.T)(v,e);(0,u.e)(()=>x.registerPanel(v),[x,v]);let y=E("panels"),w=f.indexOf(v);-1===w&&(w=y);let T=w===g,{isFocusVisible:P,focusProps:I}=(0,o.Fx)(),O=(0,r.useMemo)(()=>({selected:T,focus:P}),[T,P]),N=(0,j.dG)({ref:b,id:i,role:"tabpanel","aria-labelledby":null==(a=null==(s=h[w])?void 0:s.current)?void 0:a.id,tabIndex:T?c:-1},I);return T||null!=(t=d.unmount)&&!t||null!=(l=d.static)&&l?(0,j.sY)({ourProps:N,theirProps:d,slot:O,defaultTag:"div",features:F,visible:T,name:"Tabs.Panel"}):r.createElement(m._,{as:"span","aria-hidden":"true",...N})})})},11151:function(n,e,s){"use strict";s.d(e,{Zo:function(){return p},ah:function(){return l}});var a=s(67294);let t=a.createContext({});function l(n){let e=a.useContext(t);return a.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let o={};function p({components:n,children:e,disableParentContext:s}){let p;return p=s?"function"==typeof n?n({}):n||o:l(n),a.createElement(t.Provider,{value:p},e)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=88305)}),_N_E=n.O()}]);