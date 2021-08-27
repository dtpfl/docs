"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9418],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),N=i,u=c["".concat(r,".").concat(N)]||c[N]||d[N]||o;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8779:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),l=["components"],s={description:"How to create and export maps from Unreal to nanos world"},r="Creating Custom Maps",p={unversionedId:"assets-modding/creating-assets/maps-and-levels/importing-maps",id:"assets-modding/creating-assets/maps-and-levels/importing-maps",isDocsHomePage:!1,title:"Creating Custom Maps",description:"How to create and export maps from Unreal to nanos world",source:"@site/docs/assets-modding/creating-assets/maps-and-levels/importing-maps.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/importing-maps",permalink:"/docs/assets-modding/creating-assets/maps-and-levels/importing-maps",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assets-modding/creating-assets/maps-and-levels/importing-maps.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630086235,formattedLastUpdatedAt:"8/27/2021",frontMatter:{description:"How to create and export maps from Unreal to nanos world"},sidebar:"tutorialSidebar",previous:{title:"Assets Development Kit",permalink:"/docs/assets-modding/creating-assets/adk-assets-development-kit"},next:{title:"WIP: Water",permalink:"/docs/assets-modding/creating-assets/maps-and-levels/water"}},m=[{value:"Rules for creating a Map/Level for nanos world",id:"rules-for-creating-a-maplevel-for-nanos-world",children:[]},{value:"Storing data in your Map",id:"storing-data-in-your-map",children:[{value:"Custom Map Script",id:"custom-map-script",children:[]},{value:"Custom Map Data",id:"custom-map-data",children:[]}]},{value:"Creating a Map in Unreal Engine 4 from Scratch",id:"creating-a-map-in-unreal-engine-4-from-scratch",children:[{value:"Video Tutorial by EinfachMax",id:"video-tutorial-by-einfachmax",children:[]}]},{value:"Importing your Map into your Server",id:"importing-your-map-into-your-server",children:[]}],d={toc:m};function c(e){var t=e.components,s=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-custom-maps"},"Creating Custom Maps"),(0,o.kt)("p",null,"Maps and Levels are quite the most straightforward asset that you can create and import. In Unreal, Maps are called ",(0,o.kt)("inlineCode",{parentName:"p"},"Levels"),", usually these levels are filled with a Landscape component to make the terrain, some Lights and some Static Meshes ","(","Trees, Houses, etc",")","."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Levels/HowTo/WorkWithLevelAssets/index.html"},"Unreal\u2019s Official tutorial - Working with Levels"),"."))),(0,o.kt)("h2",{id:"rules-for-creating-a-maplevel-for-nanos-world"},"Rules for creating a Map/Level for nanos world"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Do not spawn/place ",(0,o.kt)("strong",{parentName:"li"},"Dynamic Meshes")," (with Physics), as they will not be synced in-game. You need to spawn them as a ",(0,o.kt)("a",{parentName:"li",href:"/docs/scripting-reference/classes/prop"},"Prop")," on the scripting."),(0,o.kt)("li",{parentName:"ol"},"Add a \u201c",(0,o.kt)("strong",{parentName:"li"},"Sun"),"\u201d actor-tag to all Lighting/Sky/Sun related actors (",(0,o.kt)("strong",{parentName:"li"},"DirectionalLight"),", ",(0,o.kt)("strong",{parentName:"li"},"SkyLight"),", ",(0,o.kt)("strong",{parentName:"li"},"DomeMesh"),", ",(0,o.kt)("strong",{parentName:"li"},"SkyAtmosphere")," or ",(0,o.kt)("strong",{parentName:"li"},"SunSky"),"), this will allow, if wanted, to your light to be overridden by scripters to use, instead, the Official nanos world Sun through ",(0,o.kt)("inlineCode",{parentName:"li"},"World.SpawnDefaultSun()"),", which allows in-game light/sun customization."),(0,o.kt)("li",{parentName:"ol"},"If you are creating a Map, please remember to nullify (set to None) all references it has for Unreal ",(0,o.kt)("strong",{parentName:"li"},"GameModes")," Override in the World Settings.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GameMode Overrides nullified",src:a(2397).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most of ",(0,o.kt)("a",{parentName:"p",href:"/docs/scripting-reference/static-classes/world"},"World")," functions rely on our own assets and code, so it is not (yet) possible to change the lighting or weather in your custom Map with World scripting functions."))),(0,o.kt)("p",null,"After exporting your project (refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/importing-assets#exporting-and-cooking-your-assets"},"Creating Assets"),"), you can just reference your map in your server config like ",(0,o.kt)("inlineCode",{parentName:"p"},"MyPack::MyLevel"),"."),(0,o.kt)("h2",{id:"storing-data-in-your-map"},"Storing data in your Map"),(0,o.kt)("p",null,"As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, wuch as Spawn Points, Props locations, Weapon locations and so on."),(0,o.kt)("p",null,"For that we created 2 solutions: ",(0,o.kt)("a",{parentName:"p",href:"#custom-map-script"},"Custom Map Script")," and ",(0,o.kt)("a",{parentName:"p",href:"#custom-map-data"},"Custom Map Data"),"."),(0,o.kt)("h3",{id:"custom-map-script"},"Custom Map Script"),(0,o.kt)("p",null,"Maps can also have a ",(0,o.kt)("strong",{parentName:"p"},"Custom Script")," ","(","server-only",")"," attached to it. These are files named ",(0,o.kt)("inlineCode",{parentName:"p"},"[MAP_NAME].lua")," in the same folder as the map in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder. If no one of your Packages disallow it, this script file will be loaded as well as a package. Usually these scripts should have map specific spawn props/weapons points and pertinent stuff."),(0,o.kt)("h3",{id:"custom-map-data"},"Custom Map Data"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"creating-a-map-in-unreal-engine-4-from-scratch"},"Creating a Map in Unreal Engine 4 from Scratch"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Attention! This page is old and this tutorial may be outdated! Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," for a modern approach."))),(0,o.kt)("h3",{id:"video-tutorial-by-einfachmax"},"Video Tutorial by EinfachMax"),(0,o.kt)("iframe",{width:"760",height:"425",src:"https://www.youtube-nocookie.com/embed/2FGkWdn9JP4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"The first step is to create a folder inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/")," folder, ",(0,o.kt)("em",{parentName:"p"},"this step is very important"),". Rename this folder with the Asset Pack name you desire"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Expand the tab"),(0,o.kt)("li",{parentName:"ol"},"Right click on Content"),(0,o.kt)("li",{parentName:"ol"},"Create a New Folder")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9665).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3643).Z})),(0,o.kt)("p",null,"Now let\u2019s create the Map itself, in Unreal maps are called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Levels/index.html"},"Levels"),", to do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click on the Content space"),(0,o.kt)("li",{parentName:"ol"},"Create a new Level")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7334).Z})),(0,o.kt)("p",null,"Rename it with the map name you desire, save it and open it up. You will notice the Viewport got black, this is because the Map you just opened doesn\u2019t have anything, let\u2019s add some stuff into it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3889).Z})),(0,o.kt)("p",null,"First let\u2019s add a floor, for that just drag-and-drop a Plane from Place Actors -",">"," Basic window into the Viewport:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4151).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4888).Z})),(0,o.kt)("p",null,"With the plane selected, you will notice it is a simple Static Mesh, this Static Mesh is a model already included in the Engine, so it is important that you copy this Mesh to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/YourAssetPack/")," folder to avoid any further export problem: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6631).Z})),(0,o.kt)("p",null,"To find where your Mesh is located, press the magnifying glass at the right of the Static Mesh item at the right of the screen: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(380).Z})),(0,o.kt)("p",null,"This will open the Engine\u2019s folder which contains some Basic meshes which come with the Engine: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2285).Z})),(0,o.kt)("p",null,"Let\u2019s copy some Basic Meshes into our AssetsPack folder to be used later, including the Plane: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8428).Z})),(0,o.kt)("p",null,"Use CTRL+C + CTRL+V to copy the assets into your folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4340).Z})),(0,o.kt)("p",null,"Now let\u2019s replace the plane mesh we were using to our copied mesh, for that, just "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the copied Plane mesh"),(0,o.kt)("li",{parentName:"ol"},"Press the arrow on your Plane Actor to replace it\u2019s Static Mesh ","(","alternatively you can just Delete the spawned Plane and drag and drop the new Plane from your assets pack\u2019s folder",")",": ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9872).Z})),(0,o.kt)("p",null,"After that, with your Plane ","(","floor",")"," selected, let\u2019s just scale it to ",(0,o.kt)("inlineCode",{parentName:"p"},"X = 10, Y = 10, Z = 10")," and centralize it on ",(0,o.kt)("inlineCode",{parentName:"p"},"X = 0, X = 0, X = 0"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1645).Z})),(0,o.kt)("p",null,"We can also add some lights, for that, just drag and drop a ",(0,o.kt)("strong",{parentName:"p"},"Directional Light")," ","(","Sun Light/Shadows",")"," and a ",(0,o.kt)("strong",{parentName:"p"},"Sky Light")," ","(","Shadow\u2019s Color",")"," into your level ","(","you can fly around with Right Click + WASD in the viewport, or press F to centralize the Plane - if selected",")",": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8324).Z})),(0,o.kt)("p",null,"Great job, now we can see the stuff! Now let\u2019s add some color to it, applying color and textures in Unreal are made through ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/index.html"},"Materials"),", for that, let\u2019s just create a Material"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right Click"),(0,o.kt)("li",{parentName:"ol"},"Create new Material")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7734).Z})),(0,o.kt)("p",null,"Rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"M_Plane")," and open it up: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4496).Z})),(0,o.kt)("p",null,"We won\u2019t cover all aspects of Materials in this tutorial, for now let\u2019s just pin a Vector3 node with a color into Base Color input, for that Right Click on the screen and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Constant3Vector"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1016).Z})),(0,o.kt)("p",null,"After that, pin it into Base Color input: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6037).Z})),(0,o.kt)("p",null,"Select the Vector3 node and select a color for it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1719).Z})),(0,o.kt)("p",null,"Now save and close this Material window, and you are able to drag and drop your material into the Mesh you want, let\u2019s do it for the Plane: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6432).Z})),(0,o.kt)("p",null,"And voila, it gets greenish (or the color you selected in the Plane\u2019s Material screen)!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3207).Z})),(0,o.kt)("p",null,"Now let\u2019s drag\u2019n drop other Meshes into our Level, like so: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6624).Z})),(0,o.kt)("p",null,"Also, the ADK project provides a built-in Sun & SkyBox Actor ","(","to fill up the sky with color and clouds",")",", to add it, just look into ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/Blueprints/World/")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"BP_SunSky")," and drag it to the viewport."),(0,o.kt)("p",null,"You can create a new Material and use it to paint these meshes as well: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9212).Z})),(0,o.kt)("p",null,"If you ","(","1.",")"," select the Directional Light, you can change it\u2019s ","(","2.",")"," Rotation, also, remember to set it to ","(","3.",")"," Movable, so it\u2019s shadows work in Real Time, feel free to tweak the light as you want, including it\u2019s Color and intensity: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2358).Z})),(0,o.kt)("p",null,"When you are fine with it, move your camera to see the whole map and take a screenshot of it, we will use that for a Thumbnail afterwards ","(","save it anywhere with the same name as your Map as .jpg, in our case: ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap.jpg"),")",": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5432).Z})),(0,o.kt)("p",null,"And we are done! Save everything and let\u2019s export it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6958).Z})),(0,o.kt)("p",null,"Select any folder in your computer and wait it to finish:  "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1295).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8499).Z})),(0,o.kt)("h2",{id:"importing-your-map-into-your-server"},"Importing your Map into your Server"),(0,o.kt)("p",null,"Open your Packaged folder and you will have something like this: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9336).Z})),(0,o.kt)("p",null,"Copy the Thumbnail to the same folder as your Level (should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeAssetPack/Content/MyAwesomeAssetPack"),"): "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2406).Z})),(0,o.kt)("p",null,"Now jump to the (1.) ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/")," folder and (2/3.) copy your whole ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeAssetPack/")," folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7939).Z})),(0,o.kt)("p",null,"And paste it inside your server\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9879).Z})),(0,o.kt)("p",null,"Open the folder you copied and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file in it, ","(","you can paste the content located at ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#assets-pack-configuration"},"Assets Configuration File")," into this file. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7426).Z})),(0,o.kt)("p",null,"You will end up with something like that, remember to add an Entry to ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.maps")," list with the ",(0,o.kt)("strong",{parentName:"p"},"MapKeyName")," = ",(0,o.kt)("strong",{parentName:"p"},"MapPath")," pattern, the Map Key Name can be whatever you want, as our map is in the root of our Asset Pack, the Path is just ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap")," and we gave the key the name ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap")," as well: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7015).Z})),(0,o.kt)("p",null,"Now you can add your map to your Server\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," settings: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8619).Z})),(0,o.kt)("p",null,"Or just open the game and ","(","if you are using the built-in nanos world Server",")",", you will find your new map in the ",(0,o.kt)("inlineCode",{parentName:"p"},"New Game")," screen like that with your thumbnail: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2407).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can now just start the New Game with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sandbox")," package selected and VOILA! Your playable new map made from scratch! "))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1569).Z})))}c.isMDXComponent=!0},2397:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZDY4OGQzOWZhMGU1YjFiOThjNTA4NTJkMTFjYjhlY2IxMzQ2ZjIxMTNhNzZmNjE3YzdjMjcyMWQ3MjA1YzMzNgpzaXplIDM2NDY0Cg=="},9665:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MzBlMzgzZGQ2NWNmNjllZTFkNDdkZGM2ZWZmY2M2NjBkYjZkNDA5YzllNmZmNTgyZTBkOTY2OTdiMTQwYjEyZQpzaXplIDI0OTY1Mgo="},3643:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MjBiNTkzMzBmY2IxMjJlNjcwZGRjYzFlNTg1NzU5ZjU3ODgwM2NkYTRlNDIxMDQ4Y2QyMmEwMTkwNzE2YjIyNwpzaXplIDkyNDQK"},7334:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MmQzZTAxZjJjNWFkMTFjZjljMTI1Nzg4MTdhMzM5MjAwZWQzZDM0YWUwMDk1ODRkZjU3N2VlMDMxMzc3NTZlMgpzaXplIDI4MjI2Mgo="},3889:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OTMxODBmNTAwNDE3N2NiOTZmYjM2ODVjNWQ0MWJkZTljY2Y3NDMzOTA2MmJiODc2MjQwZWE3NjY5NmQyZTM3MgpzaXplIDE5MDgwMAo="},4151:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MDg5YTJjZTc2OWNkY2M0ZTA4YzhjODc3Mjg3YTkxMjg1YWEyNTFkMjU1NzdkMzNmYWEwNjE0N2ViZjdjZTIxOQpzaXplIDI0Mzk3Mgo="},4888:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NjNmYTIwYTY5NzM1ZjIzNzVkNTQ5Y2U3MzM4YzM1NmI2NzdkZTY5OTRmYTMxNjEwMThlODAwNjcyMmM0YjExZApzaXplIDIyMzEzNQo="},6631:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6Zjk1M2Y1MjYxY2FjNmRiZmYyYjY3ZWEwZTFjZjcyNGU1MjMyMWM5NTUxMTFjZmU4NTcwMGEwMDY5MWE2MWM2NQpzaXplIDk2MjY1Cg=="},380:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODllOTE1ZGEyMDViMTk5OTM0YTAyZDY1MzY0ODU5NGI1MjBkNmE4MTM1NzBkMjQ3OGQ1YWNhMTdkY2ZlYWU2YQpzaXplIDExMjcyCg=="},2285:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MzcxNWYyNTFkZDNjYmU2MGQ5NWE5OTMwNjA0M2Y2MTNiYmE0MmMwY2NhYTU2ZDRlMjA4NTI1ZDI5NTE3MDRjNgpzaXplIDEwNTYwMQo="},8428:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MjNmZWM5MDEzY2IwZTRiOGRmYjA0MDJmZDlkYTE4OTRhNWEzODkwZTM3NzBkZjY4MzkwOTZiZTMwZGIzZTczYwpzaXplIDQxMjIzCg=="},4340:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MGZlOGM1YTQ4ZDQ4MGI3MmQwOTI4NDc4MjIwNTJkYmY4ZDkwZGU1NjFhOGIzM2Q2YjAxYTI1Yzc2OGE4YzRjZApzaXplIDc3NTAxCg=="},9872:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NDdmMzdjZmE3Y2E1NTdhODlmY2I0ZWEwZDc4NTU5NzYwZDE5MjM5MTQxZDM3YjlkYTEyZDY1MTI0MDI5M2ZiMQpzaXplIDEyNzYyNwo="},1645:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODAwZDE4NTQ4YmJkYmI1N2UzY2NhZTk5ODBmNzIxNDJjNGNmMTZmODA3Y2UyZDg4ZDM0MDQ4YzgxNDE0MTM0OQpzaXplIDY4NjgwCg=="},8324:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MGM3NmFhYjQ1MmI0NjRhOGEzMDlhYmQ5NzdjNGUyMmFiYzI5YzFhZjRmODFhMjA3MDNkMGIwMzBiMGFmYWUxNQpzaXplIDI5NjQ0OQo="},7734:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MjZmNzUxNjE1OTNkYTQ2NDkwYjcwOTA4ZmRlYjMwNzUwNzgyYTU0YzkxNzUyNGFhMTcwMzQyNmJkZTUwY2JjZApzaXplIDEyNTQwNwo="},4496:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MzU4YjgzNzkwMDIxNTYxMmQ2MDFlNDYxMWRlODljNzc1OTY5NzZjOWI1ZDdmYWQzMTY4OTBhYmI3MmMxMzcwNgpzaXplIDMzMTQzMgo="},1016:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NGM0MTgzZGM1YjcwNjU1NDRjYWNmYTFkYTlmOTc2MjQ2ZDg0ZGE0OTM0MzhlYjg5NmVhNWZmNDM5MjhkZDI4MgpzaXplIDcyMzE4Cg=="},6037:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MDk4NzQyZWYxZmVjZjU4ZTg3ZjIzYzE5NjJkYzliNTkzYTI1ODQ5YmM0NTI4NDczYmVlODQ1OThlODQ3MDk4OApzaXplIDczMzQwCg=="},1719:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZmVmNjNkM2ZlNmVlYjFmNjRmODEyZmU1ZmM4NTg0Y2ZkNzhlYWM3YTZjYTYyNDdiNjdiNTExYzc5MTcxYWNlMApzaXplIDI1MTM1OQo="},6432:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NDU3MTJjZDY4ZDlhOGRkZjFjNGYzOTYwMjZlMmQwNjYxOWYyMDgwZTI1MzdmOTk1NDAyYTQ0YTk2ZjdlYWMyZQpzaXplIDg5OTExCg=="},3207:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MTZjOTlhYjUzZjk4Nzc0ZjAzMzIyZGY3ZTlmYjk3MjY0ZDU5MjY4NGQwOGVlOGU1N2ZhODViNjM3YjJmMGMzZQpzaXplIDQ5NTQ0Cg=="},6624:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YmFhNTgwYjBkNTFlMTUyNzI0NjEwNGQxNDY4MTMxYWEzYTg5YjlkOWQ4ODZlMGY2ZWMxMTM0ZDJlN2NjMDFmYQpzaXplIDE0NjQ3Ngo="},9212:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZWIxNDYyZjFiZTdhNzNlMjhiMDQ0ZmZkYjY4MWU2ZTU0MzQ4ODY1YzhmNDE3ZjY3Mjk3NzExMjgzOWM3OTY4MgpzaXplIDE1NTUxMwo="},2358:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ODZhNTI3NTllNWQyZWMzYjgzMTcwYzhlODc3MWUwMWE1MTVhNGVlMjAzYzI1MGUwMmYxZmZjMmFkMmU2MDljNwpzaXplIDI4NjEzNwo="},5432:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YTU4ODA5ZTM2YzcwMjdkMmVkM2Y5YTU2NTExZDA4ZmVmZjVlZWQ2MjQ2M2ZkZGUzNzljYjU3MTMwZTM4ZmY1YwpzaXplIDI2MTgwNwo="},6958:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZTgyODM4ZTFhM2JmZDcyMTUyNGExMzhlYzE1ZmQ4ZDI0ZmRlNWNhYTk4YmJjNTkyMmU3ZTY5ZTFhOTI4YjQ2YgpzaXplIDM0MjQ2Nwo="},1295:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YTQ1OWFlYjE0YjZiYmRmZWFiNzhlOTMzMjJiNDVhNWE1OGZhY2U4Zjc4Y2QxYmEwY2FmMDg0MTYxMjQ3NzY0NApzaXplIDIxNzU1Mgo="},8499:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NzNjZWUyOWI5ZjYxMmRhN2IxYzc0ZTg4ZGViYjQxNDg3OTAyNjE0NjRjYTc0NWZmZDlmYTdjMGNiYjkxZmQxMApzaXplIDI5MTg1OQo="},9336:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YzdhYjc5ODc4MDk1MmJkNzQxYzU4NTU5NzJiNGEzZDg1YTBlN2JiNDQ2NzQzOGViNDFhYzNkMWQxYWQ2NmU3MApzaXplIDEwNjk5NAo="},2406:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YzU3NzAzOWY4YzIxMTJlMTFiNjkwMzgwY2RjNWVmY2YxNGEzYmZjZWJhMWQ2YjI1OTFjN2ExODczZTM2OTJkYwpzaXplIDE3NzYzNAo="},7939:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6NzUxYzc2ZmM4ZWQ3M2E3ZmI4Y2FiMWI1ODY1MTRlZTcxOTVlMjk4ZWEwMzZmNDlmMmYyMjRlM2IyZDhmMjQ3YQpzaXplIDEzNjM1NAo="},9879:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZDhjZWZlZTkzMWE3NWQzYjNlZWU0YWYyNmQ1NzI1YmEzM2UxZmVjMGM4ZTBiYWMyYzc3NTljOTRhNjE4MTc0ZgpzaXplIDExMTU1Mwo="},7426:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OTcyMjUxYjA3ZGQ0OWQxY2RmMDBjMGIxOWNhN2UyMWYzMWU0YmQyY2UzNjRiMzNkN2E1NmQxZjEwNzI5MTUwYwpzaXplIDE0OTQxMwo="},7015:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YTNjNmQyMDZmYTMwYmI3ZTQ2NzM5ZTZkZTJmN2ViMjE1NTRkMDFhNDFmNDg1ZmM0YmMwZWNjYTMxN2FmMmY2YwpzaXplIDIyMzkxNAo="},8619:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YjJhMGMwMjk0NmY0NTAxMjE0NmM0MWY0MWJmMDIxY2IwYWUxNDc2MjZiNTc3YWZmYzg3ZmNlYzRlODM2MzRlMwpzaXplIDExMzQzNgo="},2407:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6YTc2MmFkODM3M2Y5ZmJjZGIzODczOGYxZmM4YmY2ZDg4YjdlNjU2NWUxMTNkMDAyNjgwODI1Mzk4ZjdhODU2ZApzaXplIDIxNTAyNwo="},1569:function(e,t){t.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MWIzYTU5Y2FmNjI5MjQyYzZlZWU3ZDgyNzE1MTZiNmQxMDI3ZTRmMTBkNjk1NzM4MGQ3ODNmYzMzNmQ1ZWI4MgpzaXplIDEzMzA5Mwo="}}]);