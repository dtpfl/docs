"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1743],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return v},SM:function(){return s},Ut:function(){return b},YS:function(){return a},Yb:function(){return d},aj:function(){return m},p2:function(){return y},rt:function(){return g}});n(83117),n(80102),n(67294);var r=n(3905),i=n(65551),o=function(){return(0,i.zu)().path},a=function(e){var t=e.title,n=e.description,i=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},v={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},y={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},44076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(87469),s=["components"],c={id:"signing-up-alpha",title:"\ud83e\uddea Sign Up for Alpha Testing",description:"How to become a Tester",image:"/img/docs/uncle-sam.png",keywords:["alpha","beta","test","tester","sign-up"],sidebar_position:.1},u=void 0,l={unversionedId:"signing-up-alpha",id:"version-latest/signing-up-alpha",title:"\ud83e\uddea Sign Up for Alpha Testing",description:"How to become a Tester",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/signing-up-alpha.mdx",sourceDirName:".",slug:"/signing-up-alpha",permalink:"/de/docs/signing-up-alpha",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/signing-up-alpha.mdx",tags:[],version:"latest",sidebarPosition:.1,frontMatter:{id:"signing-up-alpha",title:"\ud83e\uddea Sign Up for Alpha Testing",description:"How to become a Tester",image:"/img/docs/uncle-sam.png",keywords:["alpha","beta","test","tester","sign-up"],sidebar_position:.1},sidebar:"version-latest/main",previous:{title:"\ud83d\udc4b Welcome",permalink:"/de/docs/"},next:{title:"\ud83d\udee3\ufe0f Feedback, Bugs & Roadmap",permalink:"/de/docs/roadmap"}},p={},d=[{value:"Who can become a Tester?",id:"who-can-become-a-tester",level:2},{value:"How do I know I was selected?",id:"how-do-i-know-i-was-selected",level:2},{value:"Will I keep the game after the Testing Phase ends?",id:"will-i-keep-the-game-after-the-testing-phase-ends",level:2},{value:"Registering to become an Alpha Tester",id:"registering-to-become-an-alpha-tester",level:2}],f={toc:d};function h(e){var t=e.components,c=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to subscribe to become a Tester."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96635).Z,width:"750",height:"427"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We want you!")," nanos world is under heavy development since 2 years! And finally has come to an Alpha state! This means a lot is already done and it's time to test the limits!"),(0,o.kt)("p",null,"We love our testers! We consider testers as a fundamental part of nanos world. Most of our features and bug fixes is worked on based on your feedback! Therefore we choose the testers thoroughly!"),(0,o.kt)("h2",{id:"who-can-become-a-tester"},"Who can become a Tester?"),(0,o.kt)("p",null,"Everyone can register! We are looking for people who are enthusiastic about sandbox games looking to help! All opinions count! We are giving preference to people interested in creating content, scripting and testing our API! Let us know of your interest! We heavily recommend getting in touch to us in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord"),"! Active community members will much likely get the access earlier! Be sure to introduce yourself so we can get to know each other \ud83d\ude04!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the forms to tell us why you should become a tester and how you can contribute to the development of nanos world! Feel free to express your skills in other areas you have abilities and would like to contribute in other ways too!"))),(0,o.kt)("h2",{id:"how-do-i-know-i-was-selected"},"How do I know I was selected?"),(0,o.kt)("p",null,"Once selected, you will get notified or by e-mail or through Discord (by ",(0,o.kt)("strong",{parentName:"p"},"SyedMuhammad"),")!"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We weekly review the applications to become a tester. But we are not always able to respond as quickly as possible, all subscriptions are stored and never discarded. If you are an community active member, your chances are much better of being prioritized!"))),(0,o.kt)("h2",{id:"will-i-keep-the-game-after-the-testing-phase-ends"},"Will I keep the game after the Testing Phase ends?"),(0,o.kt)("p",null,"We want to be able to give back in some way to testers who actively contributed to the nanos world. So ",(0,o.kt)("strong",{parentName:"p"},"YES"),", we desire to to give away keys to the deserving testers after the testing phase is over!"),(0,o.kt)("h2",{id:"registering-to-become-an-alpha-tester"},"Registering to become an Alpha Tester"),(0,o.kt)("p",null,"In the bottom of our website there is a forms to input your e-mail and receive the link to subscribe:"),(0,o.kt)(a.SM,{href:"https://nanos.world/#subscribe",mdxType:"ReferenceLink"},"nanos world Subscribe"))}h.isMDXComponent=!0},96635:function(e,t,n){t.Z=n.p+"assets/images/uncle-sam-d033425b97aa7fb6f98a9829a3748868.png"}}]);