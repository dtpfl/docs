"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7994],{3905:function(e,t,s){s.d(t,{Zo:function(){return p},kt:function(){return m}});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(s),m=r,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||a;return s?n.createElement(d,o(o({ref:t},p),{},{components:s})):n.createElement(d,o({ref:t},p))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=s[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},74171:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=s(83117),r=s(80102),a=(s(67294),s(3905)),o=["components"],l={description:"How to create your own Vehicles",tags:["m\xeddias","vehicles","skeletal-meshes"]},i="Vehicles Meshes",c={unversionedId:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",id:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",title:"Vehicles Meshes",description:"How to create your own Vehicles",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"},{label:"vehicles",permalink:"/pt-BR/docs/next/tags/vehicles"},{label:"skeletal-meshes",permalink:"/pt-BR/docs/next/tags/skeletal-meshes"}],version:"current",frontMatter:{description:"How to create your own Vehicles",tags:["m\xeddias","vehicles","skeletal-meshes"]},sidebar:"main",previous:{title:"Characters Meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/skeletal-meshes/characters-meshes"},next:{title:"Weapons Meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/skeletal-meshes/weapons-meshes"}},p=[{value:"Preparing a Skeletal Mesh",id:"preparing-a-skeletal-mesh",children:[],level:2},{value:"Exporting the Vehicle",id:"exporting-the-vehicle",children:[],level:2}],h={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vehicles-meshes"},"Vehicles Meshes"),(0,a.kt)("p",null,"Vehicles in nanos world implement Unreal's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/"},"Wheeled Vehicle"),". The base Mesh of a vehicle is a ",(0,a.kt)("strong",{parentName:"p"},"Skeletal Mesh"),"."),(0,a.kt)("h2",{id:"preparing-a-skeletal-mesh"},"Preparing a Skeletal Mesh"),(0,a.kt)("p",null,'There is no secret to import a Vehicle Skeletal Mesh to nanos world. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so nanos world Vehicle systems can properly rotate them.'),(0,a.kt)("p",null,"Take a look on one of the default nanos world Vehicles Skeleton:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:s(68218).Z})),(0,a.kt)("p",null,"It has only 4 bones behind the root, for each Wheel: ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Right"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Right"),". Yours don't need to follow this naming, as the Wheel Bone names are set through Lua."),(0,a.kt)("h2",{id:"exporting-the-vehicle"},"Exporting the Vehicle"),(0,a.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,a.kt)("a",{parentName:"p",href:"./assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}u.isMDXComponent=!0},68218:function(e,t,s){t.Z=s.p+"assets/images/import-vehicles-01-15246f23e0b4fdd0767c10d8badd5889.jpg"}}]);