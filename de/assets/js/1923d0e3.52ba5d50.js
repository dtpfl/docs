"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[541],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(a),f=r,k=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return a?n.createElement(k,l(l({ref:e},d),{},{components:a})):n.createElement(k,l({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{PZ:function(){return h},SM:function(){return o},Ut:function(){return N},YS:function(){return l},Yb:function(){return c},aj:function(){return g},p2:function(){return b},rt:function(){return u}});a(83117),a(80102),a(67294);var n=a(3905),r=a(65551),i=function(){return(0,r.zu)().path},l=function(t){var e=t.title,a=t.description,r=t.href,l=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:i()+"/"+r},(0,n.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:i()+"/"+a},e,(0,n.kt)("span",null,a))},p=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},s=function(t){return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},d=function(t,e){return(0,n.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},m=function(t,e){return(0,n.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},c=function(t){var e=t.children;return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},f=function(t){return(0,n.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return p("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return p("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return p("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return p("/img/scripting/both.png","both-sides - this can be called on any side!")}},u={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},N={Vector:function(){return d("Vector")},Rotator:function(){return d("Rotator")},Color:function(){return d("Color")},Quat:function(){return d("Quat","quaternion")},Vector2D:function(){return d("Vector2D","vectortwod")}},h={Actor:function(){return m("Actor","base-classes/actor")},Paintable:function(){return m("Paintable","base-classes/paintable")},Pickable:function(){return m("Pickable","base-classes/pickable")},Billboard:function(){return m("Billboard")},Blueprint:function(){return m("Blueprint")},Canvas:function(){return m("Canvas")},Cable:function(){return m("Cable")},Character:function(){return m("Character")},Database:function(){return m("Database")},File:function(){return m("File")},Grenade:function(){return m("Grenade")},Melee:function(){return m("Melee")},Light:function(){return m("Light")},Particle:function(){return m("Particle")},Player:function(){return m("Player")},Prop:function(){return m("Prop")},Sound:function(){return m("Sound")},SceneCapture:function(){return m("SceneCapture","scene-capture")},StaticMesh:function(){return m("StaticMesh","static-mesh")},TextRender:function(){return m("TextRender","text-render")},Trigger:function(){return m("Trigger")},Vehicle:function(){return m("Vehicle")},Weapon:function(){return m("Weapon")},WebUI:function(){return m("WebUI")}},b={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},22946:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(87469),o=["components"],p={title:"Default Particles",description:"Default nanos world Particles and it's Parameters",tags:["verm\xf6gen"],keywords:["verm\xf6gen","particles","built-in","default"]},s=void 0,d={unversionedId:"assets-modding/default-asset-pack/default-particles",id:"version-latest/assets-modding/default-asset-pack/default-particles",title:"Default Particles",description:"Default nanos world Particles and it's Parameters",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/assets-modding/default-asset-pack/default-particles.mdx",sourceDirName:"assets-modding/default-asset-pack",slug:"/assets-modding/default-asset-pack/default-particles",permalink:"/de/docs/assets-modding/default-asset-pack/default-particles",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/default-asset-pack/default-particles.mdx",tags:[{label:"verm\xf6gen",permalink:"/de/docs/tags/vermogen"}],version:"latest",frontMatter:{title:"Default Particles",description:"Default nanos world Particles and it's Parameters",tags:["verm\xf6gen"],keywords:["verm\xf6gen","particles","built-in","default"]},sidebar:"version-latest/main",previous:{title:"Default Materials",permalink:"/de/docs/assets-modding/default-asset-pack/default-materials"},next:{title:"Default Weapons",permalink:"/de/docs/assets-modding/default-asset-pack/default-weapons"}},m={},c=[{value:"Template Particles",id:"template-particles",level:2},{value:"<code>P_Beam</code>",id:"p_beam",level:3},{value:"<code>P_Ribbon</code>",id:"p_ribbon",level:3},{value:"<code>P_DirectionalBurst</code>",id:"p_directionalburst",level:3},{value:"<code>P_Fountain</code>",id:"p_fountain",level:3},{value:"<code>P_HangingParticulates</code>",id:"p_hangingparticulates",level:3},{value:"<code>P_OmnidirectionalBurst</code>",id:"p_omnidirectionalburst",level:3}],f={toc:c};function k(t){var e=t.components,p=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Default nanos world Particles and it's Parameters."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note"),": All Particles in this page are already included in the base game in the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/assets-modding/default-asset-pack/"},"Default nanos world Asset Pack"),", you can reference them like that: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"nanos-world::P_Beam"),".")))),(0,i.kt)("h2",{id:"template-particles"},"Template Particles"),(0,i.kt)("p",null,"Bare minimum particles."),(0,i.kt)("h3",{id:"p_beam"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_Beam")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56961).Z,width:"1164",height:"657"})),(0,i.kt)("p",null,"This is a Niagara particle which joins two points with a Beam. Cool for creating Physics Guns or Laser effects."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BeamColor"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0, 0, 10, 1)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color of the Beam - multiply it to make it glow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BeamEnd"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector(0, 0, 0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"World position of the second joint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BeamWidth"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Beam thickness")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BeamStartTangent"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Beam start tangent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BeamEndTangent"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Beam end tangent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"JitterAmount"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of jitterness")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))),(0,i.kt)("h3",{id:"p_ribbon"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_Ribbon")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(71046).Z,width:"1674",height:"933"})),(0,i.kt)("p",null,'This is a Niagara particle which makes a "trail" effect when moves.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color - multiply it to make it glow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpawnRate"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"100.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Rate of spawn the "ribbons"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Mass"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Mass of the "ribbons"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"LifeTime"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},'How much time each "ribbon" will last')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"RibbonWidth"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The thickness of the Ribbon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))),(0,i.kt)("h3",{id:"p_directionalburst"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_DirectionalBurst")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82996).Z,width:"1136",height:"665"})),(0,i.kt)("p",null,"This is a Niagara particle which spawns a bunch of particles in a direction."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color - multiply it to make it glow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpawnCount"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"25.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of Particles to spawn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMax"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"350.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max velocity of the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMin"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"125.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Min velocity of the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))),(0,i.kt)("h3",{id:"p_fountain"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_Fountain")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(46344).Z,width:"1136",height:"665"})),(0,i.kt)("p",null,"This is a Niagara particle which simulates a fountain."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color - multiply it to make it glow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpawnRate"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"90.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rate to spawn particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMax"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"850.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMin"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"500.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Min velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))),(0,i.kt)("h3",{id:"p_hangingparticulates"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_HangingParticulates")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(35743).Z,width:"1136",height:"665"})),(0,i.kt)("p",null,'This is a Niagara particle which makes a 3-dimensional "hanging particles" effect.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color of the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"BoxSize"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector(400, 400, 100)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"3D Size to spawn the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpawnRate"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"50.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rate of spawn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))),(0,i.kt)("h3",{id:"p_omnidirectionalburst"},(0,i.kt)("inlineCode",{parentName:"h3"},"P_OmnidirectionalBurst")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72634).Z,width:"1161",height:"665"})),(0,i.kt)("p",null,'This is a Niagara particle which makes a "explosion" effect in all directions.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Ut.Color,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Color - multiply it to make it glow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpawnCount"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"50.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of Particles to spawn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"SphereRadius"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Radius to spawn the particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMax"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"300.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max velocity of the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"VelocityStrengthMin"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/classes/particle#setparameterfloat"},"Float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"75.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Min velocity of the Particles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Material"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.p2.Material,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Blank White Material")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Material to override")))))}k.isMDXComponent=!0},56961:function(t,e,a){e.Z=a.p+"assets/images/default-particles-beam-4cf14a59330bc4b109efff9496f89cb9.jpg"},82996:function(t,e,a){e.Z=a.p+"assets/images/default-particles-directional-burst-631dc2650c72a51e21be334b73a86e67.jpg"},46344:function(t,e,a){e.Z=a.p+"assets/images/default-particles-fountain-2ffa934e73cc373749137deca8c3f01f.jpg"},35743:function(t,e,a){e.Z=a.p+"assets/images/default-particles-hanging-4f4e19136d1e4946eebba163f308d39e.jpg"},72634:function(t,e,a){e.Z=a.p+"assets/images/default-particles-omnidirectional-burst-76116d7eb52d943660ad1332bc499b6f.jpg"},71046:function(t,e,a){e.Z=a.p+"assets/images/default-particles-ribbon-5adfd4e201ae01fdda6f05d04431afa6.jpg"}}]);