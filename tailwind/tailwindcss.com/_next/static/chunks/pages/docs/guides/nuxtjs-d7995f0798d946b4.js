(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9623],{39721:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/nuxtjs",function(){return n(20678)}])},26261:function(e,t,n){"use strict";n.d(t,{n:function(){return o}});var s=n(85893),i=n(86010),a=n(41664),l=n.n(a);function o({tabs:e,selectedTabIndex:t}){return(0,s.jsx)("div",{className:"flex overflow-auto mb-6 -mx-4 sm:-mx-6",children:(0,s.jsx)("div",{className:"flex-none min-w-full px-4 sm:px-6",children:(0,s.jsx)("ul",{className:"border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px",children:e.map((e,n)=>(0,s.jsx)("li",{children:(0,s.jsx)("h2",{children:(0,s.jsx)(l(),{href:e.href,scroll:!1,className:(0,i.Z)("flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px",n===t?"text-sky-500 border-current [&_code]:bg-sky-50":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800"),children:e.name})})},e.key||e.name))})})})}},53974:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var s=n(11163),i=n(67294);function a(){let e=(0,s.useRouter)(),[t,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>n(window.location.hash),[]),(0,i.useEffect)(()=>{function s(){t!==window.location.hash&&n(window.location.hash)}return e.events.on("hashChangeComplete",s),()=>{e.events.off("hashChangeComplete",s)}},[e.events]),t}},52196:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var s=n(85893),i=n(76239);function a({title:e,description:t,children:n}){return(0,s.jsxs)(i.i,{children:[(0,s.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,s.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,s.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,s.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,s.jsx)("section",{className:"mb-16 relative",children:n})]})}},20678:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var s=n(85893),i=n(53974),a=n(72788),l=n(52196),o=n(39897),d=n(26261);let r=[{name:"Standard installation",href:"#standard",steps:[{title:"Create your project",body:()=>(0,s.jsxs)("p",{children:["Start by creating a new Nuxt project if you don’t have one set up already. The most common approach is to use the"," ",(0,s.jsx)("a",{href:"https://nuxt.com/docs/getting-started/installation",children:"Nuxt Command Line Interface"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npx nuxi init my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,s.jsxs)("p",{children:["Install ",(0,s.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate a ",(0,s.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init"}},{title:"Add Tailwind to your PostCSS configuration",body:()=>(0,s.jsxs)("p",{children:["Add ",(0,s.jsx)("code",{children:"tailwindcss"})," and ",(0,s.jsx)("code",{children:"autoprefixer"})," to the"," ",(0,s.jsx)("code",{children:"postcss.plugins"})," object in your ",(0,s.jsx)("code",{children:"nuxt.config.js"})," file."]}),code:{name:"nuxt.config.js",lang:"js",code:`  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: true },
>   postcss: {
>     plugins: {
>       tailwindcss: {},
>       autoprefixer: {},
>     },
>   },
  })`}},{title:"Configure your template paths",body:()=>(0,s.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,s.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./app.vue",
>     "./error.vue",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,s.jsxs)("p",{children:["Create an ",(0,s.jsx)("code",{children:"./assets/css/main.css"})," file and add the ",(0,s.jsx)("code",{children:"@tailwind"})," ","directives for each of Tailwind’s layers."]}),code:{name:"main.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Add the CSS file globally",body:()=>(0,s.jsxs)("p",{children:["Add your newly-created ",(0,s.jsx)("code",{children:"./assets/css/main.css"})," to the ",(0,s.jsx)("code",{children:"css"})," array in your ",(0,s.jsx)("code",{children:"nuxt.config.js"})," file."]}),code:{name:"nuxt.config.js",lang:"js",code:`  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: true },
>   css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })`}},{title:"Start your build process",body:()=>(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,s.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"app.vue",lang:"html",code:`  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`}}]},{name:"Using Nuxt Modules",href:"#modules",steps:[{title:"Create your project",body:()=>(0,s.jsxs)("p",{children:["Start by creating a new Nuxt project if you don’t have one set up already. The most common approach is to use the"," ",(0,s.jsx)("a",{href:"https://nuxt.com/docs/getting-started/installation",children:"Nuxt Command Line Interface"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npx nuxi init my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,s.jsxs)("p",{children:["Using nuxi, install the ",(0,s.jsx)("code",{children:"@nuxtjs/tailwindcss"})," module and then run the init command to generate a ",(0,s.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"Terminal",lang:"terminal",code:"npm install\nnpx nuxi module add @nuxtjs/tailwindcss\nnpx tailwindcss init"}},{title:"Start your build process",body:()=>(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,s.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"app.vue",lang:"html",code:`  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`}}]}];var c=!0;function u({code:e}){let t=(0,i.L)(),n=r.findIndex(e=>e.href===t);return -1===n&&(n=0),(0,s.jsxs)(l.a,{title:"Install Tailwind CSS with Nuxt",description:"Setting up Tailwind CSS in a Nuxt project.",children:[(0,s.jsx)(d.n,{tabs:r,selectedTabIndex:n}),(0,s.jsx)(o.R,{steps:r[n].steps,code:e[n]})]})}u.layoutProps={meta:{title:"Install Tailwind CSS with Nuxt",description:"Setting up Tailwind CSS in a Nuxt project.",section:"Installation"},Layout:a.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=39721)}),_N_E=e.O()}]);