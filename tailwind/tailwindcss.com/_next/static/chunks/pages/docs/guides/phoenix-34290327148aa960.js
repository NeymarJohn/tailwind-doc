(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9107],{51389:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/phoenix",function(){return i(72198)}])},52196:function(e,t,i){"use strict";i.d(t,{a:function(){return l}});var n=i(85893),s=i(76239);function l({title:e,description:t,children:i}){return(0,n.jsxs)(s.i,{children:[(0,n.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,n.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,n.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,n.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,n.jsx)("section",{className:"mb-16 relative",children:i})]})}},72198:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return o},default:function(){return c}});var n=i(85893),s=i(72788),l=i(52196),a=i(39897);let d=[{title:"Create your project",body:()=>(0,n.jsxs)("p",{children:["Start by creating a new Phoenix project if you don't have one set up already. You can follow their ",(0,n.jsx)("a",{href:"https://hexdocs.pm/phoenix/installation.html",children:"installation guide"})," to get up and running."]}),code:{name:"Terminal",lang:"terminal",code:"mix phx.new myproject\ncd myproject"}},{title:"Install the Tailwind plugin",body:()=>(0,n.jsxs)("p",{children:["Add the Tailwind plugin to your dependencies and run ",(0,n.jsx)("code",{children:"mix deps.get"})," to install it."]}),code:{name:"mix.exs",lang:"elixir",code:`  defp deps do
    [
>     {:tailwind, "~> 0.1", runtime: Mix.env() == :dev}
    ]
  end`}},{title:"Configure the Tailwind plugin",body:()=>(0,n.jsxs)("p",{children:["In your ",(0,n.jsx)("code",{children:"config.exs"})," file you can set which version of Tailwind CSS you want to use, the path to your Tailwind config, and customize your asset paths."]}),code:{name:"config.exs",lang:"elixir",code:`config :tailwind, version: "${i(2226).i}", default: [
  args: ~w(
    --config=tailwind.config.js
    --input=css/app.css
    --output=../priv/static/assets/app.css
  ),
  cd: Path.expand("../assets", __DIR__)
]`}},{title:"Update your deployment script",body:()=>(0,n.jsxs)("p",{children:["Configure your ",(0,n.jsx)("code",{children:"assets.deploy"})," alias to build your CSS on deployment."]}),code:{name:"mix.exs",lang:"elixir",code:`  defp aliases do
    [
      setup: ["deps.get", "ecto.setup"],
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"],
>     "assets.deploy": ["tailwind default --minify", "esbuild default --minify", "phx.digest"]
    ]
  end`}},{title:"Enable watcher in development",body:()=>(0,n.jsxs)("p",{children:["Add Tailwind to your list of watchers in your ",(0,n.jsx)("code",{children:"./config/dev.exs"})," file."]}),code:{name:"dev.exs",lang:"elixir",code:`  watchers: [
    # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
    esbuild: {Esbuild, :install_and_run, [:default, ~w(--sourcemap=inline --watch)]},
>   tailwind: {Tailwind, :install_and_run, [:default, ~w(--watch)]}
  ]`}},{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Run the install command to download the standalone Tailwind CLI and generate a"," ",(0,n.jsx)("code",{children:"tailwind.config.js"})," file in the ",(0,n.jsx)("code",{children:"./assets"})," directory."]}),code:{name:"Terminal",lang:"terminal",code:"mix tailwind.install"}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"./assets/tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     './js/**/*.js',
>     '../lib/*_web.ex',
>     '../lib/*_web/**/*.*ex',
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Add the ",(0,n.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to"," ",(0,n.jsx)("code",{children:"./assets/css/app.css"})]}),code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Remove the default CSS import",body:()=>(0,n.jsxs)("p",{children:["Remove the CSS import from ",(0,n.jsx)("code",{children:"./assets/js/app.js"}),", as Tailwind is now handling this for you."]}),code:{name:"app.js",lang:"diff-js",code:`- // Remove this line if you add your own CSS build pipeline (e.g postcss).
- import "../css/app.css"`}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"mix phx.server"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"mix phx.server"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"index.html.heex",lang:"html",code:`<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`}}];var o=!0;function c({code:e}){return(0,n.jsx)(l.a,{title:"Install Tailwind CSS with Phoenix",description:"Setting up Tailwind CSS in a Phoenix project.",children:(0,n.jsx)(a.R,{steps:d,code:e})})}c.layoutProps={meta:{title:"Install Tailwind CSS with Phoenix",description:"Setting up Tailwind CSS in a Phoenix project.",section:"Installation"},Layout:s.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=51389)}),_N_E=e.O()}]);