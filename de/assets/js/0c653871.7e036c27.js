"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4794],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return u},Ut:function(){return b},YS:function(){return i},Yb:function(){return p},aj:function(){return m},p2:function(){return k},rt:function(){return h}});n(83117),n(80102),n(67294);var r=n(3905),a=n(65551),o=function(){return(0,a.zu)().path},i=function(e){var t=e.title,n=e.description,a=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:o()+"/"+a},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},u=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},s=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},g=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},k={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},36373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(87469),u=["components"],c={id:"roadmap",title:"\ud83d\udee3\ufe0f Feedback, Bugs & Roadmap",description:"nanos world Feedback, Ideas, Bugs & future Roadmap",image:"/img/docs/roadmap.jpg",keywords:["future","plan","updates"],sidebar_position:.2},s=void 0,l={unversionedId:"roadmap",id:"roadmap",title:"\ud83d\udee3\ufe0f Feedback, Bugs & Roadmap",description:"nanos world Feedback, Ideas, Bugs & future Roadmap",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/de/docs/next/roadmap",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/roadmap.mdx",tags:[],version:"current",sidebarPosition:.2,frontMatter:{id:"roadmap",title:"\ud83d\udee3\ufe0f Feedback, Bugs & Roadmap",description:"nanos world Feedback, Ideas, Bugs & future Roadmap",image:"/img/docs/roadmap.jpg",keywords:["future","plan","updates"],sidebar_position:.2},sidebar:"main",previous:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/de/docs/next/signing-up-alpha"},next:{title:"\ud83e\udd1d Contributing to the Docs",permalink:"/de/docs/next/contributing-to-the-docs"}},d={},p=[{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"Suggesting new Ideas",id:"suggesting-new-ideas",level:2},{value:"Future Updates &amp; Roadmap",id:"future-updates--roadmap",level:2}],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to submit new Ideas, report Bugs and check our Roadmap."),(0,o.kt)("p",null,"nanos world is a feedback-driven game, that means we are always listening to community feedback and ideas to follow a development path!"),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,"Our official channel for bug tracking is our ",(0,o.kt)("strong",{parentName:"p"},"Github Issue Tracker"),". All bugs reported there get a special attention and is resolved as soon as possible."),(0,o.kt)(i.SM,{href:"https://issues.nanos.world",mdxType:"ReferenceLink"},"\ud83d\udc1b Official Issue Tracker"),(0,o.kt)("h2",{id:"suggesting-new-ideas"},"Suggesting new Ideas"),(0,o.kt)("p",null,"All your suggestion and ideas can be collected in our official ",(0,o.kt)("strong",{parentName:"p"},"Feedback & Ideas Hub"),". We read all ideas in there and deeply discuss them to add the feature to the game! Also you can vote for already suggested ideas and get a rank on the best ideas."),(0,o.kt)(i.SM,{href:"https://docs.nanos.world/feedback",mdxType:"ReferenceLink"},"\ud83d\udca1 Official Feedback Hub"),(0,o.kt)("p",null,"You can also join us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," and brainstorm with us in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#\ud83e\udde0\uff5cbrainstorm")," channel \ud83d\ude1b! But note that the official list that will get the due attention and will be properly tracked in the Feedback Hub!"),(0,o.kt)("h2",{id:"future-updates--roadmap"},"Future Updates & Roadmap"),(0,o.kt)("p",null,"All good ideas that are screened and selected for implementation are grouped in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nanos.world/feedback"},"Feedback Hub")," as well, in the ",(0,o.kt)("strong",{parentName:"p"},"Roadmap")," tab."))}g.isMDXComponent=!0}}]);