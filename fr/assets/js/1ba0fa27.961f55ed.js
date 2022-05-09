"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1717],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return v},SM:function(){return u},Ut:function(){return h},YS:function(){return o},Yb:function(){return f},aj:function(){return g},p2:function(){return b},rt:function(){return k}});n(83117),n(80102),n(67294);var r=n(3905),a=n(65551),i=function(){return(0,a.zu)().path},o=function(t){var e=t.title,n=t.description,a=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},u=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,r.kt)("span",null,n))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},l=function(t){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},c=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},f=function(t){var e=t.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},d=function(t){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},m=function(t){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},k={Number:function(){return l("number")},String:function(){return l("string")},Boolean:function(){return l("boolean")},Table:function(){return l("table")},Iterator:function(){return l("iterator")},Any:function(){return l("any")},Function:function(){return l("function")},Nil:function(){return l("nil")}},h={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},v={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},12958:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(87469),u=["components"],s={title:"Quat",description:"Quaternion \xe0 virgule flottante qui peut repr\xe9senter une rotation sur un axe dans l'espace 3-D",tags:["classe-utilitaire"]},l=void 0,c={unversionedId:"scripting-reference/utility-classes/quaternion",id:"scripting-reference/utility-classes/quaternion",title:"Quat",description:"Quaternion \xe0 virgule flottante qui peut repr\xe9senter une rotation sur un axe dans l'espace 3-D",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/quaternion.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/quaternion",permalink:"/fr/docs/next/scripting-reference/utility-classes/quaternion",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/quaternion.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/next/tags/classe-utilitaire"}],version:"current",frontMatter:{title:"Quat",description:"Quaternion \xe0 virgule flottante qui peut repr\xe9senter une rotation sur un axe dans l'espace 3-D",tags:["classe-utilitaire"]},sidebar:"main",previous:{title:"NanosUtils",permalink:"/fr/docs/next/scripting-reference/utility-classes/nanosutils"},next:{title:"Rotator",permalink:"/fr/docs/next/scripting-reference/utility-classes/rotator"}},p={},f=[{value:"Utilisation",id:"utilisation",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Functions",id:"functions",level:2}],d={toc:f};function m(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Quaternion \xe0 virgule flottante qui peut repr\xe9senter une rotation sur un axe dans l'espace 3-D"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Cette structure est Open Source dans ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". N'h\xe9sitez pas \xe0 proposer des demandes de fusion et \xe0 sugg\xe9rer des modifications !"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Cette structure supporte des op\xe9rations ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring"),"."))),(0,i.kt)("h2",{id:"utilisation"},"Utilisation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local nouveau_quaternion = Quat(0.5, 0.5, 1, -1)\nlocal rotation = nouveau_quaternion:Rotator()\n")),(0,i.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Nom")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"X"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Le composant X du quaternion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Le composant Y du quaternion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Le composant Z du quaternion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"W"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Le composant W du quaternion")))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",{"spaces-before":"0"},(0,i.kt)("tr",null,(0,i.kt)("th",{align:"left"},(0,i.kt)("strong",{"x-id":"1"},"Valeur retourn\xe9e")),(0,i.kt)("th",{align:"left"},(0,i.kt)("strong",{"x-id":"1"},"Nom")),(0,i.kt)("th",{align:"left"},(0,i.kt)("strong",{"x-id":"1"},"Description"))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"left"}),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",{"x-id":"1"},(0,i.kt)("code",null,"Normalize()"))),(0,i.kt)("td",{align:"left"},"Normaliser ce quaternion")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"left"},(0,i.kt)(o.Ut.Rotator,null)),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",{"x-id":"1"},(0,i.kt)("code",null,"Rotator()"))),(0,i.kt)("td",{align:"left"},"Obtenir la repr\xe9sentation Rotator de ce Quaternion."))))}m.isMDXComponent=!0}}]);