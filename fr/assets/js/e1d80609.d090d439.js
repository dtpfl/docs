"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[34],{3905:function(e,t,s){s.d(t,{Zo:function(){return p},kt:function(){return m}});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(s),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return s?a.createElement(h,r(r({ref:t},p),{},{components:s})):a.createElement(h,r({ref:t},p))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<i;l++)r[l]=s[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},95905:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=s(87462),n=s(63366),i=(s(67294),s(3905)),r=["components"],o={description:"Comment exporter et utiliser des Static Meshes depuis Unreal Engine",tags:["assets"]},c="Static Meshes",l={unversionedId:"assets-modding/creating-assets/static-meshes/static-meshes",id:"version-latest/assets-modding/creating-assets/static-meshes/static-meshes",title:"Static Meshes",description:"Comment exporter et utiliser des Static Meshes depuis Unreal Engine",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/static-meshes/static-meshes.md",sourceDirName:"assets-modding/creating-assets/static-meshes",slug:"/assets-modding/creating-assets/static-meshes/",permalink:"/fr/docs/assets-modding/creating-assets/static-meshes/",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/static-meshes/static-meshes.md",tags:[{label:"assets",permalink:"/fr/docs/tags/assets"}],version:"latest",frontMatter:{description:"Comment exporter et utiliser des Static Meshes depuis Unreal Engine",tags:["assets"]},sidebar:"version-latest/main",previous:{title:"Kit de D\xe9veloppement des Assets",permalink:"/fr/docs/assets-modding/creating-assets/adk-assets-development-kit"},next:{title:"Mod\xe8les des personnages",permalink:"/fr/docs/assets-modding/creating-assets/skeletal-meshes/characters-meshes"}},p=[{value:"Cr\xe9er et exporter un Static Mesh",id:"cr\xe9er-et-exporter-un-static-mesh",children:[{value:"Cube Static Mesh et Materiau appliqu\xe9 au Cube",id:"cube-static-mesh-et-materiau-appliqu\xe9-au-cube",children:[],level:4},{value:"Double clique sur le cube puis: Open the static mesh overview",id:"double-clique-sur-le-cube-puis-open-the-static-mesh-overview",children:[],level:4}],level:2},{value:"Importation et utilisation d\u2019Assets sur votre serveur",id:"importation-et-utilisation-dassets-sur-votre-serveur",children:[],level:2}],d={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-meshes"},"Static Meshes"),(0,i.kt)("p",null,"Un mesh statique est l'asset le plus simple \xe0 importer et \xe0 utiliser dans nanos world. Comme il n'a pas de squelette, son utilisation est tr\xe8s simple. In nanos world Static Meshes are mainly used for ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/prop"},"Props")," and ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/static-mesh"},"StaticMesh")," entities."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Veuillez ne pas confondre avec nanos world la classe ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/static-mesh"},"Static Mesh")," !"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Veuillez vous r\xe9f\xe9rer \xe0 ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/core-concepts/assets#types-of-assets"},"meshes statiques d'Unreal")," d\xe9finition et utilisation officielles, \xe9galement pour des informations sur la fa\xe7on d'importer un .FBX dans Unreal, comment l'optimiser et ainsi de suite. There are also thousands of tutorials regarding importing a .FBX from Blender (or other Modeling Tool) into Unreal Engine."))),(0,i.kt)("h2",{id:"cr\xe9er-et-exporter-un-static-mesh"},"Cr\xe9er et exporter un Static Mesh"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Attention! Cette page est ancienne et ce tutoriel peut \xeatre d\xe9pass\xe9 ! Veuillez vous r\xe9f\xe9rer \xe0 ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," pour une approche moderne."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please before continuing, make sure you have and are using the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK - Assets Development Kit"),"."))),(0,i.kt)("p",null,"It is very simple to create and export Static Meshes, let's create simple Cube imported from a .fbx (Static Mesh) and a Material (applied to the cube) for our Assets. Nous les avons \xe9galement cr\xe9\xe9s et plac\xe9s dans un dossier appel\xe9 MyPack qui nous aidera par la suite."),(0,i.kt)("h4",{id:"cube-static-mesh-et-materiau-appliqu\xe9-au-cube"},"Cube Static Mesh et Materiau appliqu\xe9 au Cube"),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(12012).Z,width:"1919",height:"1042"})),(0,i.kt)("h4",{id:"double-clique-sur-le-cube-puis-open-the-static-mesh-overview"},"Double clique sur le cube puis: Open the static mesh overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(73343).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"For exporting them in a recognizable way by nanos world, you need to \u201cPackage the Project\u201d (i.e. cooking and packaging it), for that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(22949).Z,width:"1919",height:"1038"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(78805).Z,width:"555",height:"79"})),(0,i.kt)("p",null,"Apr\xe8s avoir termin\xe9, vous obtiendrez un dossier comme celui-ci :"),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(99985).Z,width:"653",height:"160"})),(0,i.kt)("h2",{id:"importation-et-utilisation-dassets-sur-votre-serveur"},"Importation et utilisation d\u2019Assets sur votre serveur"),(0,i.kt)("p",null,"Apr\xe8s avoir export\xe9 votre projet, nous copierons manuellement le dossier export\xe9 de celui-ci, celui que nous recherchons sera probablement situ\xe9 \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/"),". Comme nous avons cr\xe9\xe9 un dossier appel\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack"),", nos assets export\xe9s seront \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/MyPack/")," :"),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(99760).Z,width:"626",height:"163"})),(0,i.kt)("p",null,"Et c\u2019est tout\xa0! Vous devez juste copier le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack/")," dans le dossier serveur ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets/")," et cr\xe9er un fichier de configuration appel\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack/")," avec le mod\xe8le d\xe9crit dans ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/core-concepts/assets#assets-pack-configuration"},"Assets Pack Configuration File"),". Pour chaque asset de votre pack, vous devez ajouter une entr\xe9e dans le fichier de configuration."),(0,i.kt)("p",null,"Pour notre mesh Cube, il nous suffit d'ajouter une entr\xe9e avec le chemin du cube relatif \xe0 notre dossier Assets avec le mod\xe8le ",(0,i.kt)("inlineCode",{parentName:"p"},'[ASSET_NAME] = "[ASSET_PATH]"')," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Static Meshes\n[assets.static_meshes]\nSM_Cube = "SM_Cube"\n')),(0,i.kt)("p",null,"Ensuite, il est possible de faire appara\xeetre notre cube comme cela :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack::SM_Cube")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:s(14727).Z,width:"1919",height:"1079"})))}u.isMDXComponent=!0},12012:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-01-07d4e811c68cab427ef004f5e7a93fa1.jpg"},73343:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-02-4bdca770ece87fcfbed170d5e54c0498.jpg"},22949:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-03-418d44df119162f5f538805c94ff26c1.jpg"},78805:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-04-e53113676ea092c532282b5d3c06a2b3.jpg"},99985:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-05-52e160ea3f6dd7630fc9f6be5c40f775.jpg"},99760:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-06-0a741e74d45d8062dd739cf73669ae5e.jpg"},14727:function(e,t,s){t.Z=s.p+"assets/images/static-meshes-07-9d293bed72cf673b1d01e58d34acba55.jpg"}}]);