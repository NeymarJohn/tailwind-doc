(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8934],{37205:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/emberjs",function(){return i(5614)}])},52196:function(e,t,i){"use strict";i.d(t,{a:function(){return o}});var s=i(85893),n=i(76239);function o({title:e,description:t,children:i}){return(0,s.jsxs)(n.i,{children:[(0,s.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,s.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,s.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,s.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,s.jsx)("section",{className:"mb-16 relative",children:i})]})}},5614:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return a},default:function(){return c}});var s=i(85893),n=i(72788),o=i(52196),r=i(39897);let l=[{title:"Create your project",body:()=>(0,s.jsxs)("p",{children:["Start by creating a new Ember.js project if you don't have one set up already. The most common approach is to use"," ",(0,s.jsx)("a",{href:"https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application",children:"Ember CLI"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npx ember-cli new my-project --embroider --no-welcome\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,s.jsxs)("p",{children:["Using npm, install ",(0,s.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, as well as"," ",(0,s.jsx)("code",{children:"postcss-loader"}),", and then run the ",(0,s.jsx)("code",{children:"init"})," command to generate both"," ",(0,s.jsx)("code",{children:"tailwind.config.js"})," and ",(0,s.jsx)("code",{children:"postcss.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable PostCSS support",body:()=>(0,s.jsxs)("p",{children:["In your ",(0,s.jsx)("code",{children:"ember-cli-build.js"})," file, configure PostCSS to process your CSS files."]}),code:{name:"ember-cli-build.js",lang:"js",code:`  'use strict';

  const EmberApp = require('ember-cli/lib/broccoli/ember-app');

  module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
      // Add options here
    });

    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
      skipBabel: [
        {
          package: 'qunit',
        },
      ],
>     packagerOptions: {
>       webpackConfig: {
>         module: {
>           rules: [
>             {
>               test: /\\.css$/i,
>               use: [
>                 {
>                   loader: 'postcss-loader',
>                   options: {
>                     postcssOptions: {
>                       config: 'postcss.config.js',
>                     },
>                   },
>                 },
>               ],
>             },
>           ],
>         },
>       },
>     },
    });
  };`}},{title:"Configure your template paths",body:()=>(0,s.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,s.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"javascript",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,s.jsxs)("p",{children:["Create a ",(0,s.jsx)("code",{children:"./app/app.css"})," file and add the ",(0,s.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind's layers."]}),code:{name:"app.css",lang:"css",code:`@tailwind base;
@tailwind components;
@tailwind utilities;`}},{title:"Import the CSS file",body:()=>(0,s.jsxs)("p",{children:["Import the newly-created ",(0,s.jsx)("code",{children:"./app/app.css"})," file in your ",(0,s.jsx)("code",{children:"./app/app.js"})," ","file."]}),code:{name:"app.js",lang:"js",code:`  import Application from '@ember/application';
  import Resolver from 'ember-resolver';
  import loadInitializers from 'ember-load-initializers';
  import config from 'my-project/config/environment';
> import 'my-project/app.css';

  export default class App extends Application {
    modulePrefix = config.modulePrefix;
    podModulePrefix = config.podModulePrefix;
    Resolver = Resolver;
  }

  loadInitializers(App, config.modulePrefix);`}},{title:"Start your build process",body:()=>(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run start"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run start"}},{title:"Start using Tailwind in your project",body:()=>(0,s.jsx)("p",{children:"Start using Tailwind's utility classes to style your content."}),code:{name:"application.hbs",lang:"hbs",code:`  {{page-title "MyProject"}}

> <h1 class="text-3xl font-bold underline">
>   Hello world!
> </h1>

  {{outlet}}`}}];var a=!0;function c({code:e}){return(0,s.jsx)(o.a,{title:"Install Tailwind CSS with Ember.js",description:"Setting up Tailwind CSS in an Ember.js project.",children:(0,s.jsx)(r.R,{steps:l,code:e})})}c.layoutProps={meta:{title:"Install Tailwind CSS With Ember.js",description:"Setting up Tailwind CSS in an Ember.js project.",section:"Getting Started"},Layout:n.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=37205)}),_N_E=e.O()}]);