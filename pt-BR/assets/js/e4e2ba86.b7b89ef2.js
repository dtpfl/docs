"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8554],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return k},SM:function(){return c},Ut:function(){return v},YS:function(){return i},Yb:function(){return p},aj:function(){return g},p2:function(){return b},rt:function(){return h}});n(83117),n(80102),n(67294);var r=n(3905),o=n(65551),a=function(){return(0,o.zu)().path},i=function(e){var t=e.title,n=e.description,o=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:a()+"/"+o},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},v={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},k={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},b={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},44087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(87469),c=["components"],s={id:"welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",image:"/img/docs/new-docs.png",keywords:["docs"],sidebar_position:0,slug:"/"},u=void 0,l={unversionedId:"welcome",id:"version-latest/welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/pt-BR/docs/",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/welcome.mdx",tags:[],version:"latest",sidebarPosition:0,frontMatter:{id:"welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",image:"/img/docs/new-docs.png",keywords:["docs"],sidebar_position:0,slug:"/"},sidebar:"version-latest/main",next:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/pt-BR/docs/signing-up-alpha"}},d={},p=[{value:"Come\xe7e Agora",id:"come\xe7e-agora",level:2}],f={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25897).Z,width:"1950",height:"800"})),(0,a.kt)("p",null,"Bem-vindo \xe0 ",(0,a.kt)("strong",{parentName:"p"},"documenta\xe7\xe3o oficial nanos world"),"! Uma compila\xe7\xe3o da documenta\xe7\xe3o t\xe9cnica escrita pelo nanos e por voc\xea! Comece lendo as p\xe1ginas introdut\xf3rias ou navegue at\xe9 uma p\xe1gina espec\xedfica usando a caixa de pesquisa."),(0,a.kt)("iframe",{class:"steam-widget",src:"https://store.steampowered.com/widget/1841660/",frameborder:"0",width:"620",height:"190",loading:"lazy"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ud83d\udcb9 Esta documenta\xe7\xe3o est\xe1 constantemente crescendo e melhorando. Contamos com sua ajuda nos dando feedback e at\xe9 mesmo adicionando novas p\xe1ginas ou informa\xe7\xf5es na docs \ud83d\ude01!"),(0,a.kt)("p",{parentName:"div"},"\ud83d\udc91 You are allowed and encouraged to edit this and the other pages of this docs, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/pt-BR/docs/contributing-to-the-docs"},"Contributing to the Docs")," for more information on how to collaborate!"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Temos um espa\xe7o centralizado para reportar ",(0,a.kt)("strong",{parentName:"p"},"BUGs")," e ",(0,a.kt)("strong",{parentName:"p"},"Sugerir")," novas ideias em ",(0,a.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"https://issues.nanos.world"),". nanos world \xe9 um jogo desenvolvido com base em seu feedback, todas as suas sugest\xf5es s\xe3o ouvidas e profundamente discutidas internamente!"))),(0,a.kt)("p",null,"If you desire to become a Closed Tester, please check the following page:"),(0,a.kt)(i.SM,{href:"signing-up-alpha",mdxType:"ReferenceLink"},"\ud83e\uddea Sign Up for Alpha Testing"),(0,a.kt)("h2",{id:"come\xe7e-agora"},"Come\xe7e Agora"),(0,a.kt)("p",null,"Start now creating content for nanos world!"),(0,a.kt)(i.SM,{href:"getting-started/quick-start",mdxType:"ReferenceLink"},"\ud83d\udccc In\xedcio r\xe1pido"),(0,a.kt)(i.SM,{href:"getting-started/tutorials-and-examples",mdxType:"ReferenceLink"},"\ud83d\udcd1 Tutoriais e Exemplos"),(0,a.kt)(i.SM,{href:"core-concepts/server-manual/server-installation",mdxType:"ReferenceLink"},"\ud83d\udcbb Instala\xe7\xe3o do Servidor"),(0,a.kt)(i.SM,{href:"core-concepts/packages/packages-guide",mdxType:"ReferenceLink"},"\ud83d\udce6 Guia de Packages"),(0,a.kt)(i.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"\ud83d\udcda Guia de Classes"))}m.isMDXComponent=!0},25897:function(e,t,n){t.Z=n.p+"assets/images/new-docs-899f7fa511a6b734c8b3153ea914dd86.png"}}]);