(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{54848:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-color",function(){return a(70539)}])},70539:function(n,s,a){"use strict";a.r(s);var e=a(85893),t=a(11151),l=a(72788),o=a(36336),i=a(52376),p=a(90954),c=a(63491),r=a(57830),d=a(2964);let u=l.L,g=o.X_,h={utilities:i.Z,transformSelector:n=>{let s=Object.assign({span:"span"},(0,t.ah)());return(0,e.jsxs)(e.Fragment,{children:[n.split(">").shift().trim().replace(/^\./,"").replace(/\\/g,"")," ",(0,e.jsx)(s.span,{className:"ml-1 text-purple-300",children:"> * + *"})]})},transformProperties:({selector:n,properties:s})=>(delete s["--tw-divide-opacity"],Object.keys(s).forEach(n=>{s[n]=s[n].replace(" / var(--tw-divide-opacity)","")}),s),preview:(n,{className:s})=>{let a=Object.assign({td:"td",div:"div"},(0,t.ah)());return(0,e.jsx)(a.td,{className:`relative w-20 p-2 ${s}`,children:(0,e.jsxs)(a.div,{className:"absolute inset-0 flex flex-col m-2",children:[(0,e.jsx)(a.div,{className:"flex-1"}),(0,e.jsx)(a.div,{className:"flex-1 border-t",style:{borderColor:Array.isArray(n["border-color"])?n["border-color"][0].replace("var(--tw-divide-opacity)","1"):n["border-color"].replace("var(--tw-divide-opacity)","1")}})]})})}};function k(n){let s=Object.assign({p:"p",code:"code",pre:"pre",a:"a",hr:"hr"},(0,t.ah)(),n.components),{Heading:a,Example:l}=s;return l||m("Example",!0),a||m("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(a,{level:3,id:"setting-the-divide-color",children:"Setting the divide color"}),"\n",(0,e.jsxs)(s.p,{children:["Use the ",(0,e.jsx)(s.code,{children:"divide-*"})," utilities to control the border color between elements."]}),"\n",(0,e.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-1 divide-y divide-blue-200 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">\n  <div class="p-4 text-blue-500 bg-white">01</div>\n  <div class="p-4 text-blue-500 bg-white">02</div>\n  <div class="p-4 text-blue-500 bg-white">03</div>\n</div>'},{p:"none"})),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">divide-y divide-blue-200</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(a,{level:3,id:"changing-the-opacity",children:"Changing the opacity"}),"\n",(0,e.jsx)(s.p,{children:"Use the color opacity modifier to control the opacity of the divide color."}),"\n",(0,e.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-1 divide-y-4 divide-slate-400/25 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">\n  <div class="p-4 text-slate-400 bg-white">01</div>\n  <div class="p-4 text-slate-400 bg-white">02</div>\n  <div class="p-4 text-slate-400 bg-white">03</div>\n</div>'},{p:"none"})),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>divide-y-4 divide-slate-400<span class="code-highlight bg-code-highlight">/25</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["You can use any value defined in your ",(0,e.jsx)(s.a,{href:"/docs/opacity",children:"opacity scale"}),", or use arbitrary values if you need to deviate from your design tokens."]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>divide-y-4 divide-slate-400<span class="code-highlight bg-code-highlight">/[.24]</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(d.k,{defaultClass:"divide-y divide-teal-400",featuredClass:"divide-pink-400"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(c.p,{defaultClass:"divide-y divide-teal-400",featuredClass:"divide-pink-400"}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsx)(r.h,{name:"divide",configKey:"divideColor"}),"\n",(0,e.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(p.k,{name:"divide color",featuredClass:"divide-[#243c5a]"})]})}function v(n={}){return(0,e.jsx)(g,Object.assign({},n,{children:(0,e.jsx)(k,n)}))}function m(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=v,v.layoutProps={Layout:u,classes:h,meta:{title:"Divide Color",description:"Utilities for controlling the border color between elements."},slug:"divide-color",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the divide color",slug:"setting-the-divide-color",children:[]},{title:"Changing the opacity",slug:"changing-the-opacity",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},57830:function(n,s,a){"use strict";a.d(s,{h:function(){return l}});var e=a(85893),t=a(4493);function l({name:n,configKey:s,children:a,learnMore:l=!0}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["By default, Tailwind makes the entire"," ",(0,e.jsx)("a",{href:"/docs/customizing-colors#default-color-palette",children:"default color palette"})," available as ",n," colors. You can"," ",(0,e.jsx)("a",{href:"/docs/colors#customizing",children:"customize your color palette"})," by editing"," ",(0,e.jsx)("code",{children:"theme.colors"})," or ",(0,e.jsx)("code",{children:"theme.extend.colors"})," in your"," ",(0,e.jsx)("code",{children:"tailwind.config.js"})," file."]}),a||(0,e.jsx)(t.ML,{filename:"tailwind.config.js",children:(0,e.jsx)("pre",{className:"language-diff-js",children:(0,e.jsx)("code",{className:"language-diff-js",dangerouslySetInnerHTML:{__html:'<span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">colors</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'regal-blue\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'#243c5a\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token plain language-js unchanged">\n</span>'}})})}),(0,e.jsxs)("p",{children:["Alternatively, you can customize just your ",n," colors by editing"," ",(0,e.jsxs)("code",{children:["theme.",s]})," or ",(0,e.jsxs)("code",{children:["theme.extend.",s]})," in your"," ",(0,e.jsx)("code",{children:"tailwind.config.js"})," file."]}),l&&(0,e.jsxs)("p",{children:["Learn more about customizing the default theme in the"," ",(0,e.jsx)("a",{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]})]})}}},function(n){n.O(0,[3430,3306,5989,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=54848)}),_N_E=n.O()}]);