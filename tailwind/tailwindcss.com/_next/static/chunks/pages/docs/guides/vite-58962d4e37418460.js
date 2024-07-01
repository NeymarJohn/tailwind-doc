(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7990],{88875:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/vite",function(){return n(53188)}])},26261:function(e,t,n){"use strict";n.d(t,{n:function(){return d}});var i=n(85893),s=n(86010),l=n(41664),a=n.n(l);function d({tabs:e,selectedTabIndex:t}){return(0,i.jsx)("div",{className:"flex overflow-auto mb-6 -mx-4 sm:-mx-6",children:(0,i.jsx)("div",{className:"flex-none min-w-full px-4 sm:px-6",children:(0,i.jsx)("ul",{className:"border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px",children:e.map((e,n)=>(0,i.jsx)("li",{children:(0,i.jsx)("h2",{children:(0,i.jsx)(a(),{href:e.href,scroll:!1,className:(0,s.Z)("flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px",n===t?"text-sky-500 border-current [&_code]:bg-sky-50":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800"),children:e.name})})},e.key||e.name))})})})}},53974:function(e,t,n){"use strict";n.d(t,{L:function(){return l}});var i=n(11163),s=n(67294);function l(){let e=(0,i.useRouter)(),[t,n]=(0,s.useState)(0);return(0,s.useEffect)(()=>n(window.location.hash),[]),(0,s.useEffect)(()=>{function i(){t!==window.location.hash&&n(window.location.hash)}return e.events.on("hashChangeComplete",i),()=>{e.events.off("hashChangeComplete",i)}},[e.events]),t}},52196:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var i=n(85893),s=n(76239);function l({title:e,description:t,children:n}){return(0,i.jsxs)(s.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:n})]})}},53188:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return p}});var i=n(85893),s=n(53974),l=n(72788),a=n(52196),d=n(39897),o=n(26261);let r=[{name:"Using React",href:"#react",steps:[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use"," ",(0,i.jsx)("a",{href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"Create Vite"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm create vite@latest my-project -- --template react\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./src/index.css"})," file."]}),code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"App.jsx",lang:"jsx",code:`  export default function App() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`}}]},{name:"Using Vue",href:"#vue",steps:[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use"," ",(0,i.jsx)("a",{href:"https://github.com/vitejs/vite/tree/main/packages/create-vite#readme",children:"Create Vite"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm create vite@latest my-project -- --template vue\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./src/style.css"})," file."]}),code:{name:"style.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"App.vue",lang:"html",code:`  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`}}]},{name:"Using Svelte",href:"#svelte",steps:[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use"," ",(0,i.jsx)("a",{href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"Create Vite"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm create vite@latest my-project -- --template svelte\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, then generate your"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"})," files."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{svelte,js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./src/app.css"})," file."]}),code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"App.svelte",lang:"html",code:`<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`}}]}];var c=!0;function p({code:e}){let t=(0,s.L)(),n=r.findIndex(e=>e.href===t);return -1===n&&(n=0),(0,i.jsxs)(a.a,{title:"Install Tailwind CSS with Vite",description:"Setting up Tailwind CSS in a Vite project.",children:[(0,i.jsx)(o.n,{tabs:r,selectedTabIndex:n}),(0,i.jsx)(d.R,{steps:r[n].steps,code:e[n]})]})}p.layoutProps={meta:{title:"Install Tailwind CSS with Vite",description:"Setting up Tailwind CSS in a Vite project.",section:"Installation"},Layout:l.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=88875)}),_N_E=e.O()}]);