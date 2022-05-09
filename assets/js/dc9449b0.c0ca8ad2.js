"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9779],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return c},Ut:function(){return b},YS:function(){return o},Yb:function(){return f},aj:function(){return g},p2:function(){return k},rt:function(){return h}});n(83117),n(80102),n(67294);var r=n(3905),a=n(65551),i=function(){return(0,a.zu)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},f=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},p=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},k={StaticMesh:function(){return p("StaticMesh Asset")},SkeletalMesh:function(){return p("SkeletalMesh Asset")},Animation:function(){return p("Animation Asset")},Particle:function(){return p("Particle Asset")},Material:function(){return p("Material Asset")},Map:function(){return p("Map Asset")},Blueprint:function(){return p("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},18274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(87469),c=["components"],s={title:"Game-Modes & Packages",description:"List of Common Game-Modes and Packages of nanos world!",sidebar_position:3},u=void 0,l={unversionedId:"getting-started/game-modes-and-packages",id:"getting-started/game-modes-and-packages",title:"Game-Modes & Packages",description:"List of Common Game-Modes and Packages of nanos world!",source:"@site/docs/getting-started/game-modes-and-packages.mdx",sourceDirName:"getting-started",slug:"/getting-started/game-modes-and-packages",permalink:"/docs/next/getting-started/game-modes-and-packages",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/game-modes-and-packages.mdx",tags:[],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649242488,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:3,frontMatter:{title:"Game-Modes & Packages",description:"List of Common Game-Modes and Packages of nanos world!",sidebar_position:3},sidebar:"main",previous:{title:"X-Ray & Highlight",permalink:"/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight"},next:{title:"Server Installation",permalink:"/docs/next/core-concepts/server-manual/server-installation"}},d={},f=[{value:"Game-Modes",id:"game-modes",level:2},{value:"Packages &amp; Libraries",id:"packages--libraries",level:2}],p={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List of Common Game-Modes and Packages of nanos world!"),(0,i.kt)("h2",{id:"game-modes"},"Game-Modes"),(0,i.kt)("div",{class:"card-links"},(0,i.kt)(o.YS,{title:"Sandbox",description:"nanos world Sandbox game-mode",image_src:"https://user-images.githubusercontent.com/6226807/121760112-7d254d80-caff-11eb-968e-20f77aa3c7d3.png",href:"https://github.com/nanos-world/nanos-world-sandbox",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Deathmatch",description:"nanos world Deathmatch game-mode",image_src:"https://user-images.githubusercontent.com/6226807/121760221-ec02a680-caff-11eb-8b2a-c0aea9168e41.jpg",href:"https://github.com/nanos-world/nanos-world-deathmatch",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Halloween",description:"Halloween special game-mode",image_src:"https://user-images.githubusercontent.com/6226807/121760299-60d5e080-cb00-11eb-8809-6197d3c98c85.png",href:"https://github.com/gtnardy/nanos-world-halloween",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Laser Quake",description:"game-mode developed by Falaxir",image_src:"https://camo.githubusercontent.com/6da612c3c5d1ca62f50e3a71cf9244dd02a5b4e7e86b47cf0cbec18e1bbb2042/68747470733a2f2f66616c617869722e66722f696d616765732f6e616e6f732f4c617365725175616b652e6a7067",href:"https://github.com/Falaxir/nanos-world_laser-quake",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Boss vs Players",description:"game-mode developed by Falaxir",image_src:"https://camo.githubusercontent.com/df021e74b679955b48412b002c5e48274306cdcbc3d6cf14c8f8702d168af855/68747470733a2f2f66616c617869722e66722f696d616765732f6e616e6f732f426f73735673506c61796572735468756d6261692e706e67",href:"https://github.com/Falaxir/nanos-world_boss-vs-players",mdxType:"CardLink"})),(0,i.kt)("h2",{id:"packages--libraries"},"Packages & Libraries"),(0,i.kt)("div",{class:"card-links"},(0,i.kt)(o.YS,{title:"Default Vehicles",description:"nanos world default Vehicle Pack ready to use",image_src:"/img/docs/vehicles-pack.jpg",href:"https://github.com/nanos-world/nanos-world-vehicles",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Default Weapons",description:"nanos world default Weapon Pack ready to use",image_src:"/img/docs/weapons-pack.jpg",href:"https://github.com/nanos-world/nanos-world-weapons",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Battlefield Kill UI",description:"Battlefield-like Kill and Feed UI",image_src:"/img/docs/battlefield-kill-ui.jpg",href:"https://github.com/gtnardy/nanos-world-battlefield-kill-ui/",mdxType:"CardLink"}),(0,i.kt)(o.YS,{title:"Official Community Lua Library",description:"nanos world official Lua Library. All definition of our basic structs (Vector, Rotation), math and helper methods!",image_src:"/img/docs/nanos-world-background.jpg",href:"https://github.com/nanos-world/nanos-world-lua-lib",mdxType:"CardLink"})))}m.isMDXComponent=!0}}]);