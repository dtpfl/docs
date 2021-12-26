"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1139],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(a),u=n,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(k,i(i({ref:e},c),{},{components:a})):r.createElement(k,i({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{YS:function(){return i},SM:function(){return o},Yb:function(){return d},aj:function(){return f},rt:function(){return N},Ut:function(){return h},PZ:function(){return g},p2:function(){return b}});a(83117),a(80102),a(67294);var r=a(3905),n=a(80907),l=function(){return(0,n.zu)().path},i=function(t){var e=t.title,a=t.description,n=t.href,i=t.image_src;return(0,r.kt)("a",{class:"card-link",href:n.startsWith("http")?n:l()+"/"+n},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,r.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},e,(0,r.kt)("span",null,a))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},p=function(t){return(0,r.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},c=function(t,e){return(0,r.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},m=function(t,e){return(0,r.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,r.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},u=function(t){return(0,r.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,r.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},f={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},N={Number:function(){return p("number")},String:function(){return p("string")},Boolean:function(){return p("boolean")},Table:function(){return p("table")},Iterator:function(){return p("iterator")},Any:function(){return p("any")},Function:function(){return p("function")},Nil:function(){return p("nil")}},h={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},g={Actor:function(){return m("Actor","base-classes/actor")},Paintable:function(){return m("Paintable","base-classes/paintable")},Pickable:function(){return m("Pickable","base-classes/pickable")},Cable:function(){return m("Cable")},Character:function(){return m("Character")},File:function(){return m("File")},Grenade:function(){return m("Grenade")},Melee:function(){return m("Melee")},Light:function(){return m("Light")},Particle:function(){return m("Particle")},Player:function(){return m("Player")},Prop:function(){return m("Prop")},Sound:function(){return m("Sound")},SceneCapture:function(){return m("SceneCapture","scene-capture")},StaticMesh:function(){return m("StaticMesh","static-mesh")},TextRender:function(){return m("TextRender","text-render")},Trigger:function(){return m("Trigger")},Vehicle:function(){return m("Vehicle")},Weapon:function(){return m("Weapon")},WebUI:function(){return m("WebUI")}},b={StaticMesh:function(){return u("StaticMesh Asset")},SkeletalMesh:function(){return u("SkeletalMesh Asset")},Animation:function(){return u("Animation Asset")},Particle:function(){return u("Particle Asset")},Material:function(){return u("Material Asset")},Map:function(){return u("Map Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},57121:function(t,e,a){a.d(e,{ZP:function(){return c}});var r=a(83117),n=a(80102),l=a(67294),i=a(3905),o=a(87469),s=["components"],p={toc:[]};function c(t){var e=t.components,a=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(o.SM,{href:"scripting-reference/classes/base-classes/paintable",mdxType:"ReferenceLink"},"Base Paintable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromwebui"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialFromWebUI")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor to a WebUI object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromscenecapture"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialFromSceneCapture")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor to a SceneCapture object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#resetmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ResetMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resets the material from the specified index to the original one")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialcolorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialColorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Color parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialScalarParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a scalar parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialtextureparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialTextureParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a texture parameter in this Actor's material to an image on disk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialvectorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialVectorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Vector parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/paintable#setphysicalmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetPhysicalMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Overrides this Actor's Physical Material with a new one")))))}c.isMDXComponent=!0},16354:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=a(87469),o=a(57121),s=["components"],p={description:"Base class for all Paintables",tags:["base-class"]},c="Base Paintable",m={unversionedId:"scripting-reference/classes/base-classes/paintable",id:"scripting-reference/classes/base-classes/paintable",title:"Base Paintable",description:"Base class for all Paintables",source:"@site/docs/scripting-reference/classes/base-classes/paintable.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/paintable",permalink:"/docs/next/scripting-reference/classes/base-classes/paintable",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/base-classes/paintable.mdx",tags:[{label:"base-class",permalink:"/docs/next/tags/base-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1640522345,formattedLastUpdatedAt:"12/26/2021",frontMatter:{description:"Base class for all Paintables",tags:["base-class"]},sidebar:"main",previous:{title:"Base Actor",permalink:"/docs/next/scripting-reference/classes/base-classes/actor"},next:{title:"Base Pickable",permalink:"/docs/next/scripting-reference/classes/base-classes/pickable"}},d=[{value:"Functions",id:"functions",children:[{value:"<AuthorityType.Both /><code>SetMaterial</code>",id:"setmaterial",children:[],level:3},{value:"<AuthorityType.ClientOnly /><code>SetMaterialFromSceneCapture</code>",id:"setmaterialfromscenecapture",children:[],level:3},{value:"<AuthorityType.ClientOnly /><code>SetMaterialFromWebUI</code>",id:"setmaterialfromwebui",children:[],level:3},{value:"<AuthorityType.Both /><code>ResetMaterial</code>",id:"resetmaterial",children:[],level:3},{value:"<AuthorityType.Both /><code>SetMaterialColorParameter</code>",id:"setmaterialcolorparameter",children:[],level:3},{value:"<AuthorityType.Both /><code>SetMaterialScalarParameter</code>",id:"setmaterialscalarparameter",children:[],level:3},{value:"<AuthorityType.Both /><code>SetMaterialTextureParameter</code>",id:"setmaterialtextureparameter",children:[],level:3},{value:"<AuthorityType.Both /><code>SetMaterialVectorParameter</code>",id:"setmaterialvectorparameter",children:[],level:3},{value:"<AuthorityType.Both /><code>SetPhysicalMaterial</code>",id:"setphysicalmaterial",children:[],level:3}],level:2}],u={toc:d};function k(t){var e=t.components,a=(0,n.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"base-paintable"},"Base Paintable"),(0,l.kt)("p",null,"Base class for all Paintables"),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"Paintable")," class is a base class in nanos world which provides customization for materials, exposing common functions to allow you to set custom material parameters, including loading textures from disk."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a base class. You cannot spawn it directly."))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)(o.ZP,{hidden_reference:!0,mdxType:"BasePaintableFunctions"}),(0,l.kt)("h3",{id:"setmaterial"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the material at the specified index of this Actor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterial(new_material, index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.p2.Material,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"material_path")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The new Material to apply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indices")))),(0,l.kt)("h3",{id:"setmaterialfromscenecapture"},(0,l.kt)(i.aj.ClientOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialFromSceneCapture")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the material at the specified index of this Actor to a SceneCapture object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialFromSceneCapture(webui, index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.SceneCapture,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scene_capture")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The SceneCapture object to use as a material")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indices")))),(0,l.kt)("h3",{id:"setmaterialfromwebui"},(0,l.kt)(i.aj.ClientOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialFromWebUI")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the material at the specified index of this Actor to a WebUI object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialFromWebUI(webui, index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.WebUI,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"webui")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The WebUI object to use as a material")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indices")))),(0,l.kt)("h3",{id:"resetmaterial"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"ResetMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Resets the material from the specified index to the original one")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:ResetMaterial(index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indices")))),(0,l.kt)("h3",{id:"setmaterialcolorparameter"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialColorParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Color parameter in this Actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialColorParameter(parameter_name, color)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parameter_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Color,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to set")))),(0,l.kt)("h3",{id:"setmaterialscalarparameter"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialScalarParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Scalar parameter in this Actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialScalarParameter(parameter_name, number)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parameter_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scalar")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to set")))),(0,l.kt)("h3",{id:"setmaterialtextureparameter"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialTextureParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a texture parameter in this Actor's material to an image on disk")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialTextureParameter(parameter_name, texture_path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parameter_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.p2.Image,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"texture_path")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The path to the texture")))),(0,l.kt)("h3",{id:"setmaterialvectorparameter"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialVectorParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Vector parameter in this Actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialVectorParameter(parameter_name, vector)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parameter_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vector")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to set")))),(0,l.kt)("h3",{id:"setphysicalmaterial"},(0,l.kt)(i.aj.Both,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetPhysicalMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Overrides this Actor's Physical Material with a new one")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetPhysicalMaterial(physical_material_path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.p2.Material,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"physical_material_path")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Physical Material to override")))))}k.isMDXComponent=!0}}]);