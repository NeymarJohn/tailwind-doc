(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2633],{22354:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return a(95560)}])},95560:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t=a(85893),e=a(11151),o=a(72788),i=a(36336),p=a(90954),l=a(63491),c=a(2964);let u=o.L,r=i.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:o,Editor:i}=s;return i||h("Editor",!0),o||h("Example",!0),a||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"controlling-the-easing-curve",children:"Controlling the easing curve"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"ease-*"})," utilities to control an element’s easing curve."]}),"\n",(0,t.jsx)(o,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around text-white text-sm font-bold leading-6">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ease-in</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-in duration-300">Button A</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ease-out</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-out duration-300">Button B</button>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">ease-in-out</p>\n    <button class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300">Button C</button>\n  </div>\n</div>'},{hint:"Hover each button to see the expected behaviour"})),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ease-in</span> duration-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ease-out</span> duration-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ease-in-out</span> duration-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"transition duration-150 ease-out",featuredClass:"ease-in"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(l.p,{defaultClass:"transition duration-150 ease-out",featuredClass:"ease-in"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides four general purpose transition-timing-function utilities. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.transitionTimingFunction"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.transitionTimingFunction"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">transitionTimingFunction</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'in-expo\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'cubic-bezier(0.95, 0.05, 0.795, 0.035)\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'out-expo\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'cubic-bezier(0.19, 1, 0.22, 1)\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(p.k,{property:"transition-timing-function",featuredClass:"ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"})]})}function g(n={}){return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var k=g;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:u,classes:{utilities:{".ease-linear":{"transition-timing-function":"linear"},".ease-in":{"transition-timing-function":"cubic-bezier(0.4, 0, 1, 1)"},".ease-out":{"transition-timing-function":"cubic-bezier(0, 0, 0.2, 1)"},".ease-in-out":{"transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)"}}},meta:{title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions."},slug:"transition-timing-function",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Controlling the easing curve",slug:"controlling-the-easing-curve",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return p},ah:function(){return o}});var t=a(67294);let e=t.createContext({});function o(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let i={};function p({components:n,children:s,disableParentContext:a}){let p;return p=a?"function"==typeof n?n({}):n||i:o(n),t.createElement(e.Provider,{value:p},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=22354)}),_N_E=n.O()}]);