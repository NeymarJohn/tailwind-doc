(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{51611:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-duration",function(){return a(56052)}])},56052:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var t=a(85893),e=a(11151),o=a(72788),i=a(36336),l=a(90954),p=a(63491),c=a(2964);let r=o.L,u=i.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:o,Editor:i}=s;return i||k("Editor",!0),o||k("Example",!0),a||k("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"changing-transition-duration",children:"Changing transition duration"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"duration-*"})," utilities to control an element’s transition-duration."]}),"\n",(0,t.jsx)(o,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">duration-150</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-150">Button A</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">duration-300</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300">Button B</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">duration-700</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-700">Button C</button>\n  </div>\n</div>'},{hint:"Hover each button to see the expected behaviour"})),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">duration-150</span> ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">duration-300</span> ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">duration-700</span> ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"transition duration-0",featuredClass:"duration-150"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(p.p,{defaultClass:"transition duration-0",featuredClass:"duration-150"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides eight general purpose transition-duration utilities. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.transitionDuration"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.transitionDuration"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">transitionDuration</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'2000\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'2000ms\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(l.k,{property:"transition-duration",featuredClass:"duration-[2000ms]"})]})}function g(n={}){return(0,t.jsx)(u,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var h=g;function k(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:r,classes:{utilities:{".duration-0":{"transition-duration":"0s"},".duration-75":{"transition-duration":"75ms"},".duration-100":{"transition-duration":"100ms"},".duration-150":{"transition-duration":"150ms"},".duration-200":{"transition-duration":"200ms"},".duration-300":{"transition-duration":"300ms"},".duration-500":{"transition-duration":"500ms"},".duration-700":{"transition-duration":"700ms"},".duration-1000":{"transition-duration":"1000ms"}}},meta:{title:"Transition Duration",description:"Utilities for controlling the duration of CSS transitions."},slug:"transition-duration",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Changing transition duration",slug:"changing-transition-duration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return l},ah:function(){return o}});var t=a(67294);let e=t.createContext({});function o(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let i={};function l({components:n,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof n?n({}):n||i:o(n),t.createElement(e.Provider,{value:l},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=51611)}),_N_E=n.O()}]);