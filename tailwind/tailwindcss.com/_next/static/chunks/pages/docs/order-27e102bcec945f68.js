(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1018],{13763:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/order",function(){return a(5581)}])},5581:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var e=a(85893),t=a(11151),o=a(72788),l=a(36336),p=a(90954),r=a(63491),i=a(2964);let c=o.L,d=l.X_;function u(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,t.ah)(),n.components),{Heading:a,Example:o,Editor:l}=s;return l||h("Editor",!0),o||h("Example",!0),a||h("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(a,{level:3,id:"ordering-flex-and-grid-items",children:"Ordering flex and grid items"}),"\n",(0,e.jsxs)(s.p,{children:["Use the ",(0,e.jsx)(s.code,{children:"order-*"})," utilities to render flex and grid items in a different order than they appear in the DOM."]}),"\n",(0,e.jsx)(o,{containerClassName:"mt-4 -mb-3",html:'<div class="flex justify-between font-mono text-white text-sm font-bold leading-6">\n  <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg order-last">01</div>\n  <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">02</div>\n  <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">03</div>\n</div>'}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-between ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">order-last</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(a,{level:3,id:"using-negative-values",children:"Using negative values"}),"\n",(0,e.jsx)(s.p,{children:"To use a negative order value, prefix the class name with a dash to convert it to a negative value."}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">-order-1</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(i.k,{defaultClass:"order-first",featuredClass:"order-last"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(r.p,{defaultClass:"order-first",featuredClass:"order-last"}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(s.p,{children:["By default, Tailwind provides utilities for ",(0,e.jsx)(s.code,{children:"order-first"}),", ",(0,e.jsx)(s.code,{children:"order-last"}),", ",(0,e.jsx)(s.code,{children:"order-none"}),", and numbered utilities from 1 through 12. You can customize these values by editing ",(0,e.jsx)(s.code,{children:"theme.order"})," or ",(0,e.jsx)(s.code,{children:"theme.extend.order"})," in your ",(0,e.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">order</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'13\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'13\'</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(p.k,{property:"order",featuredClass:"order-[13]"})]})}function g(n={}){return(0,e.jsx)(d,Object.assign({},n,{children:(0,e.jsx)(u,n)}))}var k=g;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:c,classes:{utilities:{".order-1":{order:"1"},".order-2":{order:"2"},".order-3":{order:"3"},".order-4":{order:"4"},".order-5":{order:"5"},".order-6":{order:"6"},".order-7":{order:"7"},".order-8":{order:"8"},".order-9":{order:"9"},".order-10":{order:"10"},".order-11":{order:"11"},".order-12":{order:"12"},".order-first":{order:"-9999"},".order-last":{order:"9999"},".order-none":{order:"0"}}},meta:{title:"Order",description:"Utilities for controlling the order of flex and grid items."},slug:"order",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Ordering flex and grid items",slug:"ordering-flex-and-grid-items",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return p},ah:function(){return o}});var e=a(67294);let t=e.createContext({});function o(n){let s=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function p({components:n,children:s,disableParentContext:a}){let p;return p=a?"function"==typeof n?n({}):n||l:o(n),e.createElement(t.Provider,{value:p},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,5556,9774,2888,179],function(){return n(n.s=13763)}),_N_E=n.O()}]);