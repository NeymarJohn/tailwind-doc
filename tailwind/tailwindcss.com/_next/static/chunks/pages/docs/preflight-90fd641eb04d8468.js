(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7112],{46841:function(n,s){"use strict";s.Z=n=>Object.getOwnPropertySymbols(n).filter(s=>Object.prototype.propertyIsEnumerable.call(n,s))},64290:function(n){"use strict";n.exports=function(n){var s=typeof n;return null!==n&&("object"===s||"function"===s)}},37777:function(n){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},99289:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/preflight",function(){return a(75449)}])},75449:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var e=a(85893),t=a(11151),p=a(72788),l=a(36336),o=a(50224);a(94110),a(67294);let c=p.L,i=l.X_;function r(n){let s=Object.assign({p:"p",a:"a",code:"code",pre:"pre",hr:"hr",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),n.components),{Editor:a}=s;return a||function(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.X,{hidden:!0,level:2,id:"overview",children:"Overview"}),"\n",(0,e.jsxs)(s.p,{children:["Built on top of ",(0,e.jsx)(s.a,{href:"https://github.com/sindresorhus/modern-normalize",children:"modern-normalize"}),", Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system."]}),"\n",(0,e.jsxs)(s.p,{children:["Tailwind automatically injects these styles when you include ",(0,e.jsx)(s.code,{children:"@tailwind base"})," in your CSS:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span> <span class="token comment">/* Preflight will be injected here */</span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsx)(s.p,{children:"While most of the styles in Preflight are meant to go unnoticed — they simply make things behave more like you’d expect them to — some are more opinionated and can be surprising when you first encounter them."}),"\n",(0,e.jsxs)(s.p,{children:["For a complete reference of all the styles applied by Preflight, ",(0,e.jsx)(s.a,{href:"https://unpkg.com/tailwindcss@%5E3/src/css/preflight.css",children:"see the stylesheet"}),"."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"default-margins-are-removed",children:"Default margins are removed"}),"\n",(0,e.jsx)(s.p,{children:"Preflight removes all of the default margins from elements like headings, blockquotes, paragraphs, etc."}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">blockquote<span class="token punctuation">,</span>\ndl<span class="token punctuation">,</span>\ndd<span class="token punctuation">,</span>\nh1<span class="token punctuation">,</span>\nh2<span class="token punctuation">,</span>\nh3<span class="token punctuation">,</span>\nh4<span class="token punctuation">,</span>\nh5<span class="token punctuation">,</span>\nh6<span class="token punctuation">,</span>\nhr<span class="token punctuation">,</span>\nfigure<span class="token punctuation">,</span>\np<span class="token punctuation">,</span>\npre</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(s.p,{children:"This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale."}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"headings-are-unstyled",children:"Headings are unstyled"}),"\n",(0,e.jsx)(s.p,{children:"All heading elements are completely unstyled by default, and have the same font-size and font-weight as normal text."}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">h1<span class="token punctuation">,</span>\nh2<span class="token punctuation">,</span>\nh3<span class="token punctuation">,</span>\nh4<span class="token punctuation">,</span>\nh5<span class="token punctuation">,</span>\nh6</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(s.p,{children:"The reason for this is two-fold:"}),"\n",(0,e.jsxs)(s.ul,{role:"list",children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"It helps you avoid accidentally deviating from your type scale"}),". By default, browsers assign sizes to headings that don’t exist in Tailwind’s default type scale, and aren’t guaranteed to exist in your own type scale."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"In UI development, headings should often be visually de-emphasized"}),". Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately."]}),"\n"]}),"\n",(0,e.jsxs)(s.p,{children:["You can always add default header styles to your project by ",(0,e.jsx)(s.a,{href:"/docs/adding-custom-styles#adding-base-styles",children:"adding your own base styles"}),"."]}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to selectively introduce sensible default heading styles into article-style parts of a page, we recommend the ",(0,e.jsx)(s.a,{href:"/docs/typography-plugin/",children:"@tailwindcss/typography plugin"}),"."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"lists-are-unstyled",children:"Lists are unstyled"}),"\n",(0,e.jsx)(s.p,{children:"Ordered and unordered lists are unstyled by default, with no bullets/numbers and no margin or padding."}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">ol<span class="token punctuation">,</span>\nul</span> <span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to style a list, you can do so using the ",(0,e.jsx)(s.a,{href:"/docs/list-style-type",children:"list-style-type"})," and ",(0,e.jsx)(s.a,{href:"/docs/list-style-position",children:"list-style-position"})," utilities:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list-disc list-inside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["You can always add default list styles to your project by ",(0,e.jsx)(s.a,{href:"/docs/adding-custom-styles#adding-base-styles",children:"adding your own base styles"}),"."]}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to selectively introduce default list styles into article-style parts of a page, we recommend the ",(0,e.jsx)(s.a,{href:"/docs/typography-plugin/",children:"@tailwindcss/typography plugin"}),"."]}),"\n",(0,e.jsx)(o.X,{level:3,id:"accessibility-considerations",children:"Accessibility considerations"}),"\n",(0,e.jsxs)(s.p,{children:["Unstyled lists are ",(0,e.jsx)(s.a,{href:"https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/",children:"not announced as lists by VoiceOver"}),". If your content is truly a list but you would like to keep it unstyled, ",(0,e.jsx)(s.a,{href:"https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html",children:"add a “list” role"})," to the element:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"images-are-block-level",children:"Images are block-level"}),"\n",(0,e.jsxs)(s.p,{children:["Images and other replaced elements (like ",(0,e.jsx)(s.code,{children:"svg"}),", ",(0,e.jsx)(s.code,{children:"video"}),", ",(0,e.jsx)(s.code,{children:"canvas"}),", and others) are ",(0,e.jsx)(s.code,{children:"display: block"})," by default."]}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">img<span class="token punctuation">,</span>\nsvg<span class="token punctuation">,</span>\nvideo<span class="token punctuation">,</span>\ncanvas<span class="token punctuation">,</span>\naudio<span class="token punctuation">,</span>\niframe<span class="token punctuation">,</span>\nembed<span class="token punctuation">,</span>\nobject</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["This helps to avoid unexpected alignment issues that you often run into using the browser default of ",(0,e.jsx)(s.code,{children:"display: inline"}),"."]}),"\n",(0,e.jsxs)(s.p,{children:["If you ever need to make one of these elements ",(0,e.jsx)(s.code,{children:"inline"})," instead of ",(0,e.jsx)(s.code,{children:"block"}),", simply use the ",(0,e.jsx)(s.code,{children:"inline"})," utility:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"images-are-constrained-to-the-parent-width",children:"Images are constrained to the parent width"}),"\n",(0,e.jsx)(s.p,{children:"Images and videos are constrained to the parent width in a way that preserves their intrinsic aspect ratio."}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">img<span class="token punctuation">,</span>\nvideo</span> <span class="token punctuation">{</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["This prevents them from overflowing their containers and makes them responsive by default. If you ever need to override this behavior, use the ",(0,e.jsx)(s.code,{children:"max-w-none"})," utility:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-none<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"border-styles-are-reset-globally",children:"Border styles are reset globally"}),"\n",(0,e.jsxs)(s.p,{children:["In order to make it easy to add a border by simply adding the ",(0,e.jsx)(s.code,{children:"border"})," class, Tailwind overrides the default border styles for all elements with the following rules:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector">*<span class="token punctuation">,</span>\n<span class="token pseudo-element">::before</span><span class="token punctuation">,</span>\n<span class="token pseudo-element">::after</span></span> <span class="token punctuation">{</span>\n  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>\n  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">\'borderColor.DEFAULT\'</span><span class="token punctuation">,</span> currentColor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["Since the ",(0,e.jsx)(s.code,{children:"border"})," class only sets the ",(0,e.jsx)(s.code,{children:"border-width"})," property, this reset ensures that adding that class always adds a solid 1px border using your configured default border color."]}),"\n",(0,e.jsxs)(s.p,{children:["This can cause some unexpected results when integrating certain third-party libraries, like ",(0,e.jsx)(s.a,{href:"https://github.com/tailwindlabs/tailwindcss/issues/484",children:"Google maps"})," for example."]}),"\n",(0,e.jsx)(s.p,{children:"When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:"}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.google-map</span> *</span> <span class="token punctuation">{</span>\n  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"extending-preflight",children:"Extending Preflight"}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to add your own base styles on top of Preflight, simply add them to your CSS using the ",(0,e.jsx)(s.code,{children:"@layer base"})," directive:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@layer</span> base</span> <span class="token punctuation">{</span>\n  <span class="token selector">h1</span> <span class="token punctuation">{</span>\n    <span class="token atrule atapply"><span class="token rule">@apply</span> text-2<span class="token unit">xl</span><span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">h2</span> <span class="token punctuation">{</span>\n    <span class="token atrule atapply"><span class="token rule">@apply</span> text-xl<span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">h3</span> <span class="token punctuation">{</span>\n    <span class="token atrule atapply"><span class="token rule">@apply</span> text-lg<span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">a</span> <span class="token punctuation">{</span>\n    <span class="token atrule atapply"><span class="token rule">@apply</span> text-blue-600 underline<span class="token punctuation">;</span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["Learn more in the ",(0,e.jsx)(s.a,{href:"/docs/adding-custom-styles#adding-base-styles",children:"adding base styles documentation"}),"."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(o.X,{level:2,id:"disabling-preflight",children:"Disabling Preflight"}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to completely disable Preflight — perhaps because you’re integrating Tailwind into an existing project or because you’d like to provide your own base styles — all you need to do is set ",(0,e.jsx)(s.code,{children:"preflight"})," to ",(0,e.jsx)(s.code,{children:"false"})," in the ",(0,e.jsx)(s.code,{children:"corePlugins"})," section of your ",(0,e.jsx)(s.code,{children:"tailwind.config.js"})," file:"]}),"\n",(0,e.jsx)(a,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">  </span><span class="token literal-property property">corePlugins</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">    </span><span class="token literal-property property">preflight</span><span class="token operator">:</span><span class="token plain"> </span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'})]})}function u(n={}){return(0,e.jsx)(i,Object.assign({},n,{children:(0,e.jsx)(r,n)}))}var d=u;u.layoutProps={Layout:c,meta:{title:"Preflight",description:"An opinionated set of base styles for Tailwind projects."},slug:"preflight",tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Default margins are removed",slug:"default-margins-are-removed",children:[]},{title:"Headings are unstyled",slug:"headings-are-unstyled",children:[]},{title:"Lists are unstyled",slug:"lists-are-unstyled",children:[{title:"Accessibility considerations",slug:"accessibility-considerations",children:[]}]},{title:"Images are block-level",slug:"images-are-block-level",children:[]},{title:"Images are constrained to the parent width",slug:"images-are-constrained-to-the-parent-width",children:[]},{title:"Border styles are reset globally",slug:"border-styles-are-reset-globally",children:[]},{title:"Extending Preflight",slug:"extending-preflight",children:[]},{title:"Disabling Preflight",slug:"disabling-preflight",children:[]}]}},72788:function(n,s,a){"use strict";a.d(s,{L:function(){return o}});var e=a(85893),t=a(97903),p=a(77929),l=a(87308);function o(n){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,e.jsx)(t.C,{nav:l.u,...n})]})}o.nav=l.u},94110:function(n,s,a){"use strict";let e=a(37777),t=a(64290),p=a(46841).Z;n.exports=(n,s,a)=>{let l=[];return function n(s,a,o){let c;(a=a||{}).indent=a.indent||"	",o=o||"",c=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};let i=n=>{if(void 0===a.inlineCharacterLimit)return n;let s=n.replace(RegExp(c.newLine,"g"),"").replace(RegExp(c.newLineOrSpace,"g")," ").replace(RegExp(c.pad+"|"+c.indent,"g"),"");return s.length<=a.inlineCharacterLimit?s:n.replace(RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(RegExp(c.pad,"g"),o).replace(RegExp(c.indent,"g"),o+a.indent)};if(-1!==l.indexOf(s))return'"[Circular]"';if(null==s||"number"==typeof s||"boolean"==typeof s||"function"==typeof s||"symbol"==typeof s||e(s))return String(s);if(s instanceof Date)return`new Date('${s.toISOString()}')`;if(Array.isArray(s)){if(0===s.length)return"[]";l.push(s);let e="["+c.newLine+s.map((e,t)=>{let p=s.length-1===t?c.newLine:","+c.newLineOrSpace,l=n(e,a,o+a.indent);return a.transform&&(l=a.transform(s,t,l)),c.indent+l+p}).join("")+c.pad+"]";return l.pop(),i(e)}if(t(s)){let e=Object.keys(s).concat(p(s));if(a.filter&&(e=e.filter(n=>a.filter(s,n))),0===e.length)return"{}";l.push(s);let t="{"+c.newLine+e.map((t,p)=>{let l=e.length-1===p?c.newLine:","+c.newLineOrSpace,i="symbol"==typeof t,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(t),u=i||r?t:n(t,a),d=n(s[t],a,o+a.indent);return a.transform&&(d=a.transform(s,t,d)),c.indent+String(u)+": "+d+l}).join("")+c.pad+"}";return l.pop(),i(t)}return(s=String(s).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes)?`"${s=s.replace(/"/g,'\\"')}"`:`'${s=s.replace(/\\?'/g,"\\'")}'`}(n,s,a)}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return o},ah:function(){return p}});var e=a(67294);let t=e.createContext({});function p(n){let s=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function o({components:n,children:s,disableParentContext:a}){let o;return o=a?"function"==typeof n?n({}):n||l:p(n),e.createElement(t.Provider,{value:o},s)}}},function(n){n.O(0,[3430,3306,9495,224,7308,9774,2888,179],function(){return n(n.s=99289)}),_N_E=n.O()}]);