(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6357],{15046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/angular",function(){return n(76238)}])},52196:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var i=n(85893),l=n(76239);function s({title:e,description:t,children:n}){return(0,i.jsxs)(l.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:n})]})}},76238:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},default:function(){return d}});var i=n(85893),l=n(72788),s=n(52196),a=n(39897);let r=[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new Angular project if you don’t have one set up already. The most common approach is to use ",(0,i.jsx)("a",{href:"https://angular.io/cli",children:"Angular CLI"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"ng new my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," via npm, and then run the init command to generate a"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init"}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./src/**/*.{html,ts}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./src/styles.css"})," file."]}),code:{name:"styles.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"ng serve"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"ng serve"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"app.component.html",lang:"html",code:`<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`}}];var o=!0;function d({code:e}){return(0,i.jsx)(s.a,{title:"Install Tailwind CSS with Angular",description:"Setting up Tailwind CSS in an Angular project.",children:(0,i.jsx)(a.R,{steps:r,code:e})})}d.layoutProps={meta:{title:"Install Tailwind CSS with Angular",description:"Setting up Tailwind CSS in an Angular project.",section:"Getting Started"},Layout:l.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=15046)}),_N_E=e.O()}]);