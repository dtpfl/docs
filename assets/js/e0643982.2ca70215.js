"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5977],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return h},SM:function(){return o},Ut:function(){return N},YS:function(){return l},Yb:function(){return d},aj:function(){return g},p2:function(){return b},rt:function(){return f}});n(83117),n(80102),n(67294);var a=n(3905),r=n(65551),i=function(){return(0,r.zu)().path},l=function(t){var e=t.title,n=t.description,r=t.href,l=t.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:i()+"/"+r},(0,a.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,e),(0,a.kt)("p",null,n))},o=function(t){var e=t.children,n=t.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,a.kt)("span",null,n))},s=function(t,e){return(0,a.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:t,title:e}))},p=function(t){return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},c=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},u=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},m=function(t){return(0,a.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},f={Number:function(){return p("number")},String:function(){return p("string")},Boolean:function(){return p("boolean")},Table:function(){return p("table")},Iterator:function(){return p("iterator")},Any:function(){return p("any")},Function:function(){return p("function")},Nil:function(){return p("nil")}},N={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},h={Actor:function(){return u("Actor","base-classes/actor")},Paintable:function(){return u("Paintable","base-classes/paintable")},Pickable:function(){return u("Pickable","base-classes/pickable")},Billboard:function(){return u("Billboard")},Blueprint:function(){return u("Blueprint")},Canvas:function(){return u("Canvas")},Cable:function(){return u("Cable")},Character:function(){return u("Character")},Database:function(){return u("Database")},File:function(){return u("File")},Grenade:function(){return u("Grenade")},Melee:function(){return u("Melee")},Light:function(){return u("Light")},Particle:function(){return u("Particle")},Player:function(){return u("Player")},Prop:function(){return u("Prop")},Sound:function(){return u("Sound")},SceneCapture:function(){return u("SceneCapture","scene-capture")},StaticMesh:function(){return u("StaticMesh","static-mesh")},TextRender:function(){return u("TextRender","text-render")},Trigger:function(){return u("Trigger")},Vehicle:function(){return u("Vehicle")},Weapon:function(){return u("Weapon")},WebUI:function(){return u("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Blueprint:function(){return m("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},26129:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(87469),o=["components"],s={title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},p=void 0,c={unversionedId:"scripting-reference/static-classes/input",id:"version-latest/scripting-reference/static-classes/input",title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/input.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/input",permalink:"/docs/scripting-reference/static-classes/input",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/input.mdx",tags:[{label:"static-class",permalink:"/docs/tags/static-class"},{label:"client",permalink:"/docs/tags/client"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1652113101,formattedLastUpdatedAt:"5/9/2022",frontMatter:{title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udf10 HTTP",permalink:"/docs/scripting-reference/static-classes/http"},next:{title:"\ud83d\udce6 Package",permalink:"/docs/scripting-reference/static-classes/package"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Static Functions",id:"static-functions",level:2},{value:"<code>Bind</code>",id:"bind",level:3},{value:"<code>Unbind</code>",id:"unbind",level:3},{value:"<code>Register</code>",id:"register",level:3},{value:"<code>Unregister</code>",id:"unregister",level:3},{value:"<code>GetKeyIcon</code>",id:"getkeyicon",level:3},{value:"<code>GetMappedKey</code>",id:"getmappedkey",level:3},{value:"<code>ResetBindings</code>",id:"resetbindings",level:3},{value:"<code>GetScriptingKeyBindings</code>",id:"getscriptingkeybindings",level:3},{value:"<code>GetGameKeyBindings</code>",id:"getgamekeybindings",level:3}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create custom Bindings and Retrieve Input information"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udfe7 ",(0,i.kt)("strong",{parentName:"p"},"Authority:")," This can be accessed only on ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/scripting/authority-concepts"},"Client"),"."),(0,i.kt)("p",{parentName:"div"},"\ud83d\uddff ",(0,i.kt)("strong",{parentName:"p"},"Static Class:")," This is a Static Class. You can access it\u2019s methods directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This Class is ",(0,i.kt)("strong",{parentName:"p"},"experimental"),", so you can try it out and provide feedback before it's full release!"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Registers the binding_name \'SpawnMenu\' with default key \'Q\'\n-- This will add \'SpawnMenu\' to user KeyBinding Settings automatically\nInput.Register("SpawnMenu", "Q")\n\n-- Subscribes for Pressing the key\nInput.Bind("SpawnMenu", InputEvent.Pressed, function()\n    -- Opens the Spawn Menu\nend)\n\n-- Subscribes for Releasing the key\nInput.Bind("SpawnMenu", InputEvent.Released, function()\n    -- Closes the Spawn Menu\nend)\n')),(0,i.kt)("h2",{id:"static-functions"},"Static Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#bind"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Bind")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Binds a function to an Input defined using ",(0,i.kt)("inlineCode",{parentName:"td"},"Register")," or from Game")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#unbind"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unbind")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unbinds a Input function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#register"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Registers a BindingName to a Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#unregister"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unregister")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unregisters a BindingName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getkeyicon"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetKeyIcon")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the icon Path of a Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getmappedkey"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetMappedKey")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the Key given a BindingName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#resetbindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ResetBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resets all Bound functions by this Package")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getgamekeybindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetGameKeyBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns a table with all Game KeyBindings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getscriptingkeybindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetScriptingKeyBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns a table with all Scripting KeyBindings")))),(0,i.kt)("h3",{id:"bind"},(0,i.kt)("inlineCode",{parentName:"h3"},"Bind")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Binds a function to an Input defined using ",(0,i.kt)("inlineCode",{parentName:"p"},"Register")," or from Game")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Bind(binding_name, input_event, callback)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Yb,{mdxType:"Enums"},"InputEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"input_event"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Which Event to register (Released/Pressed)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The function to trigger")))),(0,i.kt)("h3",{id:"unbind"},(0,i.kt)("inlineCode",{parentName:"h3"},"Unbind")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unbinds all Input functions related to that binding_name and input_event")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Unbind(binding_name, input_event)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Yb,{mdxType:"Enums"},"InputEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"input_event"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Which Event to register (Released/Pressed)")))),(0,i.kt)("h3",{id:"register"},(0,i.kt)("inlineCode",{parentName:"h3"},"Register")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Registers a BindingName to a default Key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Register(binding_name, key_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"key_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"unregister"},(0,i.kt)("inlineCode",{parentName:"h3"},"Unregister")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unregisters a BindingName")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Unregister(binding_name, key_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"key_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"getkeyicon"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetKeyIcon")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gets the Icon image path from a Key"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.String,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetKeyIcon(key_name, dark_mode)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"key_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"dark_mode"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"getmappedkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetMappedKey")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gets the Key given a BindingName"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.String,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetMappedKey(binding_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")))),(0,i.kt)("h3",{id:"resetbindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"ResetBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Resets all Bound functions from this Package")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.ResetBindings()\n")),(0,i.kt)("h3",{id:"getscriptingkeybindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetScriptingKeyBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns a table with all Scripting KeyBindings"),(0,i.kt)("p",{parentName:"blockquote"},"Returns a ",(0,i.kt)(l.rt.Table,null)," ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetScriptingKeyBindings()\n")),(0,i.kt)("h3",{id:"getgamekeybindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetGameKeyBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns a table with all Game KeyBindings"),(0,i.kt)("p",{parentName:"blockquote"},"Returns a ",(0,i.kt)(l.rt.Table,null)," ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetGameKeyBindings()\n")))}k.isMDXComponent=!0}}]);