(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3530],{76864:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-image",function(){return s(10080)}])},10080:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return k}});var t=s(85893),e=s(11151),o=s(72788),p=s(36336),i=s(90954),l=s(63491),r=s(2964);let c=o.L,u=p.X_;function g(n){let a=Object.assign({p:"p",code:"code",a:"a",pre:"pre",hr:"hr"},(0,e.ah)(),n.components),{Heading:s,Example:o,Editor:p}=a;return p||h("Editor",!0),o||h("Example",!0),s||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(s,{level:3,id:"linear-gradients",children:"Linear gradients"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"bg-gradient-*"})," utilities in combination with the ",(0,t.jsx)(a.a,{href:"/docs/gradient-color-stops",children:"gradient color stop"})," utilities to give an element a linear gradient background."]}),"\n",(0,t.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="space-y-4">\n  <div class="h-14 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>\n  <div class="h-14 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"></div>\n  <div class="h-14 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>\n  <div class="h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>\n</div>'}),"\n",(0,t.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-14 <span class="code-highlight bg-code-highlight">bg-gradient-to-r from-cyan-500 to-blue-500</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-14 <span class="code-highlight bg-code-highlight">bg-gradient-to-r from-sky-500 to-indigo-500</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-14 <span class="code-highlight bg-code-highlight">bg-gradient-to-r from-violet-500 to-fuchsia-500</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-14 <span class="code-highlight bg-code-highlight">bg-gradient-to-r from-purple-500 to-pink-500</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(r.k,{defaultClass:"bg-gradient-to-l",featuredClass:"bg-gradient-to-r"}),"\n",(0,t.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(l.p,{defaultClass:"bg-gradient-to-l",featuredClass:"bg-gradient-to-r"}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsx)(a.p,{children:"By default, Tailwind includes background image utilities for creating linear gradient backgrounds in eight directions."}),"\n",(0,t.jsxs)(a.p,{children:["You can add your own background images by editing the ",(0,t.jsx)(a.code,{children:"theme.backgroundImage"})," section of your ",(0,t.jsx)(a.code,{children:"tailwind.config.js"})," file:"]}),"\n",(0,t.jsx)(p,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">backgroundImage</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'hero-pattern\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">"url(\'/img/hero-pattern.svg\')"</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'footer-texture\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">"url(\'/img/footer-texture.png\')"</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsx)(a.p,{children:"These don’t just have to be gradients — they can be any background images you need."}),"\n",(0,t.jsxs)(a.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(a.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(i.k,{property:"background-image",featuredClass:"bg-[url('/img/hero-pattern.svg')]"})]})}function d(n={}){return(0,t.jsx)(u,Object.assign({},n,{children:(0,t.jsx)(g,n)}))}var k=d;function h(n,a){throw Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}d.layoutProps={Layout:c,classes:{utilities:{".bg-none":{"background-image":"none"},".bg-gradient-to-t":{"background-image":"linear-gradient(to top, var(--tw-gradient-stops))"},".bg-gradient-to-tr":{"background-image":"linear-gradient(to top right, var(--tw-gradient-stops))"},".bg-gradient-to-r":{"background-image":"linear-gradient(to right, var(--tw-gradient-stops))"},".bg-gradient-to-br":{"background-image":"linear-gradient(to bottom right, var(--tw-gradient-stops))"},".bg-gradient-to-b":{"background-image":"linear-gradient(to bottom, var(--tw-gradient-stops))"},".bg-gradient-to-bl":{"background-image":"linear-gradient(to bottom left, var(--tw-gradient-stops))"},".bg-gradient-to-l":{"background-image":"linear-gradient(to left, var(--tw-gradient-stops))"},".bg-gradient-to-tl":{"background-image":"linear-gradient(to top left, var(--tw-gradient-stops))"}}},meta:{title:"Background Image",description:"Utilities for controlling an element's background image."},slug:"background-image",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Linear gradients",slug:"linear-gradients",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,a,s){"use strict";s.d(a,{Zo:function(){return i},ah:function(){return o}});var t=s(67294);let e=t.createContext({});function o(n){let a=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(a):{...a,...n},[a,n])}let p={};function i({components:n,children:a,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||p:o(n),t.createElement(e.Provider,{value:i},a)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=76864)}),_N_E=n.O()}]);