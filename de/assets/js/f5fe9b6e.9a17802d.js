"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8527],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(83117),i=n(80102),s=(n(67294),n(3905)),r=["components"],o={title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",sidebar_position:0,tags:["scripting"]},l=void 0,d={unversionedId:"core-concepts/scripting/classes-guide",id:"core-concepts/scripting/classes-guide",title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/classes-guide.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:0,frontMatter:{title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",sidebar_position:0,tags:["scripting"]},sidebar:"main",previous:{title:"Ladebildschirm",permalink:"/de/docs/next/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide"}},c={},p=[{value:"Classes",id:"classes",level:2},{value:"Klassen Vererbung",id:"klassen-vererbung",level:3},{value:"Spawn-Entit\xe4ten",id:"spawn-entit\xe4ten",level:3},{value:"Zerst\xf6re Entit\xe4ten",id:"zerst\xf6re-entit\xe4ten",level:3},{value:"Static Classes",id:"static-classes",level:2},{value:"Utility Classes",id:"utility-classes",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Alles was Sie \xfcber Klassen wissen m\xfcssen"),(0,s.kt)("p",null,"Alle Entit\xe4ten in nanos Welt werden durch eine Gruppe repr\xe4sentiert. In Lua, classes are represented by ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". Auf dieser Seite werden wir mehr dazu erkl\xe4ren."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In nanos world we have 3 types of Classes (or structures): ",(0,s.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Utility Classes"),"."))),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("p",null,"If you read our ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawnen einer Entit\xe4t mit einem Konstruktor\nlokal my_entity = Entity()\n\n-- Interagieren mit der Entit\xe4t mit ihren Methoden\nmy_entity:MyFunction()\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Zugriff auf ",(0,s.kt)("strong",{parentName:"p"},"Entit\xe4ten / Spawned Objects")," ",(0,s.kt)("strong",{parentName:"p"},"Methoden")," sind mit ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},":"))," erstellt."))),(0,s.kt)("p",null,"So funktioniert ",(0,s.kt)("strong",{parentName:"p"},"OOP"),"! Sie erstellen Objekte und rufen Funktionen und Ereignisse auf diesem Objekt auf/ab. Im Gegensatz zu anderen Skriptspielen, die tonnenweise globale Funktionen und Ereignisse haben, um mit Entities zu interagieren, nanos world scripting ist ein ",(0,s.kt)("strong",{parentName:"p"},"moderner Ansatz")," bis ",(0,s.kt)("strong",{parentName:"p"},"modernes Programmieren"),"."),(0,s.kt)("h3",{id:"klassen-vererbung"},"Klassen Vererbung"),(0,s.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),", which means we have base parent classes, and it\u2019s children which inherits all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in Character and ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/prop"},"Prop")," ","(","which are Actors",")"," it is possible to call the function: ",(0,s.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,s.kt)("strong",{parentName:"p"},"Static Methods")," to get and retrieve entities directly."))),(0,s.kt)("h3",{id:"spawn-entit\xe4ten"},"Spawn-Entit\xe4ten"),(0,s.kt)("p",null,"Spawnen von Entit\xe4ten in nanos Welt ist extrem einfach und unkompliziert, sagen wir, wir wollen einen Charakter spawnen:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"lokales my_character = Character()\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Jede Klasse wird ihren eigenen ",(0,s.kt)("strong",{parentName:"p"},"Constructor"),", ",(0,s.kt)("strong",{parentName:"p"},"Eigenschaften"),", ",(0,s.kt)("strong",{parentName:"p"},"Methoden")," und ",(0,s.kt)("strong",{parentName:"p"},"Ereignisse")," enthalten."),(0,s.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie alle Klassen, die nanos world in der Sidebar bietet ",(0,s.kt)("strong",{parentName:"p"},"Skriptreferenz -> Klassen")," Artikel."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Beachten Sie, dass einige Klassen nur im ",(0,s.kt)("strong",{parentName:"p"},"Server erzeugt werden k\xf6nnen"),", andere k\xf6nnen nur im ",(0,s.kt)("strong",{parentName:"p"},"Client")," erzeugt werden."))),(0,s.kt)("h3",{id:"zerst\xf6re-entit\xe4ten"},"Zerst\xf6re Entit\xe4ten"),(0,s.kt)("p",null,"Alle Klassen ","(","but Player",")"," erlauben es dir, sie mit der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"Destroy()")," zu zerst\xf6ren:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Destroying an Entity will trigger the event ",(0,s.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,s.kt)("p",{parentName:"div"},"*",(0,s.kt)("em",{parentName:"p"},"If you attached entities with ",(0,s.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),"."))),(0,s.kt)("h2",{id:"static-classes"},"Static Classes"),(0,s.kt)("p",null,"Statische Klassen in nanos Welt sind Klassen, die du nicht spawnen kannst. Stattdessen k\xf6nnen Sie ihre Methoden direkt mit ",(0,s.kt)("inlineCode",{parentName:"p"},"verwenden."),"."),(0,s.kt)("p",null,"Wenn Sie zum Beispiel mit Welt ","(","den Sonnenuntergang verschieben, Regen setzen usw.) interagieren wollen, ben\xf6tigen Sie die ",(0,s.kt)("inlineCode",{parentName:"p"},"Welt")," Statische Klasse:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Macht es 9:25 Uhr\nWelt.SetTime(9, 25)\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Der Zugriff auf ",(0,s.kt)("strong",{parentName:"p"},"Statische Klassen / Statische Methoden")," erfolgt mit ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},".")),"."))),(0,s.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,s.kt)("p",null,"Neben Kursen und Statikkursen haben wir die ",(0,s.kt)("strong",{parentName:"p"},"Utility Classes"),"! Dies sind meist Strukturen, die in nanos world API wie Vector, Rotator, Color, JSON und einigen anderen verwendet werden."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Alle Utility Classes sind Open Sourced unter ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!"))))}u.isMDXComponent=!0}}]);