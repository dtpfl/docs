"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5988],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return o},Yb:function(){return u},aj:function(){return g},rt:function(){return f},Ut:function(){return h},PZ:function(){return v},p2:function(){return N}});n(87462),n(63366),n(67294);var a=n(3905),r=n(80907),l=function(){return(0,r.zu)().path},i=function(e){var t=e.title,n=e.description,r=e.href,i=e.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,a.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,t),(0,a.kt)("p",null,n))},o=function(e){var t=e.children,n=e.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:l()+"/"+n},t,(0,a.kt)("span",null,n))},s=function(e,t){return(0,a.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:e,title:t}))},c=function(e){return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},p=function(e,t){return(0,a.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},m=function(e,t){return(0,a.kt)("a",{href:l()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},u=function(e){var t=e.children;return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,a.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},k=function(e){return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},f={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},h={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},v={Actor:function(){return m("Actor","base-classes/actor")},Paintable:function(){return m("Paintable","base-classes/paintable")},Pickable:function(){return m("Pickable","base-classes/pickable")},Cable:function(){return m("Cable")},Character:function(){return m("Character")},File:function(){return m("File")},Grenade:function(){return m("Grenade")},Melee:function(){return m("Melee")},Light:function(){return m("Light")},Particle:function(){return m("Particle")},Player:function(){return m("Player")},Prop:function(){return m("Prop")},Sound:function(){return m("Sound")},SceneCapture:function(){return m("SceneCapture","scene-capture")},StaticMesh:function(){return m("StaticMesh","static-mesh")},TextRender:function(){return m("TextRender","text-render")},Trigger:function(){return m("Trigger")},Vehicle:function(){return m("Vehicle")},Weapon:function(){return m("Weapon")},WebUI:function(){return m("WebUI")}},N={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},22077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(87469),o=["components"],s={description:"Subscribe for user-defined Events",tags:["static-class"]},c="\ud83d\udea9 Events",p={unversionedId:"scripting-reference/static-classes/events",id:"version-latest/scripting-reference/static-classes/events",title:"\ud83d\udea9 Events",description:"Subscribe for user-defined Events",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/static-classes/events.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/events",permalink:"/de/docs/scripting-reference/static-classes/events",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/events.mdx",tags:[{label:"static-class",permalink:"/de/docs/tags/static-class"}],version:"latest",frontMatter:{description:"Subscribe for user-defined Events",tags:["static-class"]},sidebar:"version-latest/main",previous:{title:"\u2328\ufe0f Client",permalink:"/de/docs/scripting-reference/static-classes/client"},next:{title:"\ud83c\udf10 HTTP",permalink:"/de/docs/scripting-reference/static-classes/http"}},m=[{value:"Static Functions",id:"static-functions",children:[{value:"<code>Call</code>",id:"call",children:[],level:4},{value:"<AuthorityType.ClientOnly /><code>CallRemote</code>",id:"callremote",children:[],level:4},{value:"<AuthorityType.ServerOnly /><code>CallRemote</code>",id:"callremote-1",children:[],level:4},{value:"<AuthorityType.ServerOnly /><code>BroadcastRemote</code>",id:"broadcastremote",children:[],level:4},{value:"<code>Subscribe</code>",id:"subscribe",children:[],level:4},{value:"<code>Unsubscribe</code>",id:"unsubscribe",children:[],level:4}],level:2},{value:"Examples",id:"examples",children:[{value:"Passing entities through Events",id:"passing-entities-through-events",children:[],level:3}],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-events"},"\ud83d\udea9 Events"),(0,l.kt)("p",null,"Subscribe for user-defined Events"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\ud83d\udfe6\ud83d\udfe7 ",(0,l.kt)("strong",{parentName:"p"},"Authority:")," This can be accessed on both ",(0,l.kt)("a",{parentName:"p",href:"/de/docs/core-concepts/scripting/authority-concepts"},"Client")," and ",(0,l.kt)("a",{parentName:"p",href:"/de/docs/core-concepts/scripting/authority-concepts"},"Server"),"."),(0,l.kt)("p",{parentName:"div"},"\ud83d\uddff ",(0,l.kt)("strong",{parentName:"p"},"Static Class:")," This is a Static Class. You can access it\u2019s methods directly with ",(0,l.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."))),(0,l.kt)(i.SM,{href:"core-concepts/scripting/events-guide",mdxType:"ReferenceLink"},"Events Guide"),(0,l.kt)("h2",{id:"static-functions"},"Static Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.Both,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#call"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Call")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event which will be triggered in all Local Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ClientOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#callremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"CallRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event if on Client which will be triggered in all Server Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ServerOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#callremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"CallRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event if on Server which will be triggered in all Client's Packages of a specific Player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ServerOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#broadcastremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"BroadcastRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event on Server which will be triggered in all Client's Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.Both,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#subscribe"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Subscribe")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Subscribes for an user-created event which will be triggered for both local or ",(0,l.kt)("em",{parentName:"td"},"remote","*")," called events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.Both,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#unsubscribe"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Unsubscribe")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"Remote","*")," means the other side, e.g.: if I\u2019m the ",(0,l.kt)("strong",{parentName:"p"},"Client"),", the remote is the Server. If I\u2019m the ",(0,l.kt)("strong",{parentName:"p"},"Server"),", the remote is the Client."))),(0,l.kt)("h4",{id:"call"},(0,l.kt)("inlineCode",{parentName:"h4"},"Call")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event which will be triggered in all Local Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Call(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"callremote"},(0,l.kt)(i.aj.ClientOnly,null),(0,l.kt)("inlineCode",{parentName:"h4"},"CallRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Client which will be triggered in all Server Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.CallRemote(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"callremote-1"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h4"},"CallRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Server which will be triggered in all Client's Packages of ",(0,l.kt)("inlineCode",{parentName:"p"},"Player"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.CallRemote(event_name, player, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.Player,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"player"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The remote player to send this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"broadcastremote"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h4"},"BroadcastRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Server which will be triggered in all Client's Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.BroadcastRemote(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.Player,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"player"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The remote player to send this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"subscribe"},(0,l.kt)("inlineCode",{parentName:"h4"},"Subscribe")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Subscribes for an user-created event which will be triggered for both local or remote called events"),(0,l.kt)("p",{parentName:"blockquote"},"Returns the ",(0,l.kt)(i.rt.Function,null)," callback itself")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Subscribe(event_name, function()\n\nend)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to Subscribe for an event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback function to execute")))),(0,l.kt)("h4",{id:"unsubscribe"},(0,l.kt)("inlineCode",{parentName:"h4"},"Unsubscribe")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Unsubscribe(event_name, callback)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to Unsubscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback function to unsubscribe")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- register for a local Event (local = client only)\nEvents.Subscribe("MyLocalEvent", function(my_text)\n    Package.Log("Event received locally! " .. my_text)\n    -- outputs "Event received locally! hello nanos world!"\nend)\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyLocalEvent", "hello nanos world!")\n\n-- register for a server Event (remote = server)\nEvents.Subscribe("MyClientEvent", function(my_text)\n    Package.Log("Event received from server! " .. my_text)\n    -- outputs "Event received from server! hello nanos world!"\nend)\n\n-- calls a remote Event in all Server Packages\nEvents.CallRemote("MyServerEvent", "hello nanos world!")\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"On ",(0,l.kt)("strong",{parentName:"p"},"Server"),", registering for remote events has an addition parameter: ",(0,l.kt)(i.PZ.Player,null),", which is the client who sent the event."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- register for a local Event (local = server only)\nEvents.Subscribe("MyLocalEvent", function(my_text)\n    Package.Log("Event received locally! " .. my_text)\n    -- outputs "Event received locally! hello nanos world!"\nend)\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyLocalEvent", "hello nanos world!")\n\n-- register for a client Event (remote = client)\nEvents.Subscribe("MyServerEvent", function(player, my_text)\n    Package.Log(player:GetName() .. " sent an event from client! " .. my_text)\n    -- outputs "Syed sent an event from client! hello nanos world!"\n\n            -- sends an "answer" to the player which sent this event\n    Events.CallRemote("MyClientEvent", player, "hello nanos world! message only for you!")\nend)\n\n-- sends a remote Event to all Players in all Client Packages\nEvents.BroadcastRemote("MyClientEvent", "hello nanos world!")\n')),(0,l.kt)("h3",{id:"passing-entities-through-events"},"Passing entities through Events"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- register for an Event (remote or local)\nEvents.Subscribe("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)\n    Package.Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)\n    -- outputs "Event received! hello nanos world! 123 1 456"\nend)\n\n-- passing Characters through events\nlocal my_temp_character = Character()\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)\n\n-- calls a remote Event in all Server Packages\nEvents.CallRemote("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)\n')))}d.isMDXComponent=!0}}]);