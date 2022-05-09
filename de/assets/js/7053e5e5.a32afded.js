"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return b},SM:function(){return s},Ut:function(){return f},YS:function(){return o},Yb:function(){return p},aj:function(){return g},p2:function(){return y},rt:function(){return m}});n(83117),n(80102),n(67294);var r=n(3905),i=n(65551),a=function(){return(0,i.zu)().path},o=function(e){var t=e.title,n=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},l=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},c=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},u=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},h=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},k=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return l("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return l("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return l("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return l("/img/scripting/both.png","both-sides - this can be called on any side!")}},m={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},f={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},b={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},y={StaticMesh:function(){return h("StaticMesh Asset")},SkeletalMesh:function(){return h("SkeletalMesh Asset")},Animation:function(){return h("Animation Asset")},Particle:function(){return h("Particle Asset")},Material:function(){return h("Material Asset")},Map:function(){return h("Map Asset")},Blueprint:function(){return h("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},79581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(87469),s=["components"],l={title:"Beh\xf6rdenkonzepte",description:"Alles was Sie \xfcber die Konzepte der Beh\xf6rde & Network Authority wissen m\xfcssen.",sidebar_position:2,tags:["scripting"]},c=void 0,u={unversionedId:"core-concepts/scripting/authority-concepts",id:"core-concepts/scripting/authority-concepts",title:"Beh\xf6rdenkonzepte",description:"Alles was Sie \xfcber die Konzepte der Beh\xf6rde & Network Authority wissen m\xfcssen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/authority-concepts.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/authority-concepts",permalink:"/de/docs/next/core-concepts/scripting/authority-concepts",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/authority-concepts.mdx",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:2,frontMatter:{title:"Beh\xf6rdenkonzepte",description:"Alles was Sie \xfcber die Konzepte der Beh\xf6rde & Network Authority wissen m\xfcssen.",sidebar_position:2,tags:["scripting"]},sidebar:"main",previous:{title:"Events Guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide"},next:{title:"Paketkommunikation",permalink:"/de/docs/next/core-concepts/scripting/communicating-between-packages"}},d={},p=[{value:"Beh\xf6rde",id:"beh\xf6rde",level:2},{value:"Methods and Events Availability",id:"methods-and-events-availability",level:3},{value:"<AuthorityType.ServerOnly /><strong><code>Serverseite</code></strong>",id:"serverseite",level:4},{value:"<AuthorityType.ClientOnly /><strong><code>Client-Seite</code></strong>",id:"client-seite",level:4},{value:"<AuthorityType.AuthorityOnly /><strong><code>Beh\xf6rdenseite</code></strong>",id:"beh\xf6rdenseite",level:4},{value:"<AuthorityType.Both /><strong><code>Both Sides</code></strong>",id:"both-sides",level:4},{value:"Netzwerk-Beh\xf6rde",id:"netzwerk-beh\xf6rde",level:2},{value:"Die aktuelle Netzwerkbeh\xf6rde \xfcberschreiben",id:"die-aktuelle-netzwerkbeh\xf6rde-\xfcberschreiben",level:3},{value:"Beispiele f\xfcr Aktionen, die nur von der Netzwerkbeh\xf6rde des Akteurs ausgef\xfchrt werden",id:"beispiele-f\xfcr-aktionen-die-nur-von-der-netzwerkbeh\xf6rde-des-akteurs-ausgef\xfchrt-werden",level:4},{value:"Debugging Network &amp; Network Authority",id:"debugging-network--network-authority",level:3},{value:"Entity Square Colors Meaning",id:"entity-square-colors-meaning",level:4},{value:"Entity Trace Colors Meaning",id:"entity-trace-colors-meaning",level:4}],h={toc:p};function k(e){var t=e.components,l=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alles was Sie \xfcber die Konzepte der Beh\xf6rde & Network Authority wissen m\xfcssen."),(0,a.kt)("h2",{id:"beh\xf6rde"},"Beh\xf6rde"),(0,a.kt)("p",null,"Einige Klassen k\xf6nnen nur auf dem Server erzeugt werden, andere k\xf6nnen nur im Client erzeugt werden, und es gibt einige, die sowohl auf Server als auch auf Client erzeugt werden k\xf6nnen. Die Seite, auf der die Klasse entsteht, nennt sich ",(0,a.kt)("strong",{parentName:"p"},"Authority"),"."),(0,a.kt)("h3",{id:"methods-and-events-availability"},"Methods and Events Availability"),(0,a.kt)("p",null,"Einige Methoden und Ereignisse in der API sind nur auf einer bestimmten Seite verf\xfcgbar ","(","Client oder Server",")",", andere sind nur auf der Seite verf\xfcgbar, die ihr Autorit\xe4t",")",":"),(0,a.kt)("h4",{id:"serverseite"},(0,a.kt)(o.aj.ServerOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Serverseite"))),(0,a.kt)("p",null,"Methode oder Ereignisse, die nur auf der ",(0,a.kt)("strong",{parentName:"p"},"Server")," Seite aufgerufen werden k\xf6nnen."),(0,a.kt)("h4",{id:"client-seite"},(0,a.kt)(o.aj.ClientOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Client-Seite"))),(0,a.kt)("p",null,"Methoden oder Ereignisse, die nur auf der ",(0,a.kt)("strong",{parentName:"p"},"Client")," Seite aufgerufen werden k\xf6nnen."),(0,a.kt)("h4",{id:"beh\xf6rdenseite"},(0,a.kt)(o.aj.AuthorityOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Beh\xf6rdenseite"))),(0,a.kt)("p",null,"Methoden oder Ereignisse, die nur auf der Seite aufgerufen werden k\xf6nnen, die sie hervorgerufen hat."),(0,a.kt)("h4",{id:"both-sides"},(0,a.kt)(o.aj.Both,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Both Sides"))),(0,a.kt)("p",null,"Methods or Events which can only be called in any side."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Alle im ",(0,a.kt)("strong",{parentName:"p"},"Server")," erzeugten Entit\xe4ten werden automatisch im ",(0,a.kt)("strong",{parentName:"p"},"Client")," synchronisiert. D.h. Sie k\xf6nnen auf seine Methoden zugreifen und alle Daten daraus ableiten, ohne sie manuell synchronisieren zu m\xfcssen."),(0,a.kt)("p",{parentName:"div"},"Auf die gleiche Weise werden Entit\xe4ten im ",(0,a.kt)("strong",{parentName:"p"},"Client")," nur f\xfcr diesen Client existieren, der Versuch, diese Entit\xe4ten an den Server zu schicken, f\xfchrt zu Fehlern."))),(0,a.kt)("h2",{id:"netzwerk-beh\xf6rde"},"Netzwerk-Beh\xf6rde"),(0,a.kt)("p",null,"Ein weiteres wichtiges Konzept in der nanos-Welt ist die ",(0,a.kt)("strong",{parentName:"p"},"Netzwerkbeh\xf6rde"),". We have a ",(0,a.kt)("em",{parentName:"p"},'"distributed network authority"')," concept, which means the work of calculating physics and AI (for example) are automatically assigned and distributed to the clients. In general, if an ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/actor"},"Actor")," is near an in-game Character, it's physics will be calculated by that player's device. Der Spieler, der f\xfcr die Berechnung und Freigabe der Ergebnisse verantwortlich ist, nennt sich ",(0,a.kt)("strong",{parentName:"p"},"Network Authority"),"."),(0,a.kt)("p",null,"Der zugewiesene Spieler wird automatisch vom Server berechnet und ber\xfccksichtigt einige Dinge diese Berechnung wird nur durchgef\xfchrt, wenn der Spieler einen Charakter besitzt:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("strong",{parentName:"li"},"Distanz")," vom Charakter zum Objekt"),(0,a.kt)("li",{parentName:"ul"},"If the Character is ",(0,a.kt)("strong",{parentName:"li"},"grabbing")," a ",(0,a.kt)(o.PZ.Prop,null)),(0,a.kt)("li",{parentName:"ul"},"If the Character is ",(0,a.kt)("strong",{parentName:"li"},"handling")," a ",(0,a.kt)("a",{parentName:"li",href:"/de/docs/next/scripting-reference/classes/base-classes/pickable"},"Pickable")),(0,a.kt)("li",{parentName:"ul"},"Wenn der Charakter ",(0,a.kt)("strong",{parentName:"li"},"ein Fahrzeug f\xe4hrt")),(0,a.kt)("li",{parentName:"ul"},"Wenn der Charakter nur ",(0,a.kt)("strong",{parentName:"li"},"erschossen")," etwas")),(0,a.kt)("p",null,"In all this cases, the Player will be automatically assigned to be the ",(0,a.kt)("strong",{parentName:"p"},"Network Authority")," of that Object."),(0,a.kt)("h3",{id:"die-aktuelle-netzwerkbeh\xf6rde-\xfcberschreiben"},"Die aktuelle Netzwerkbeh\xf6rde \xfcberschreiben"),(0,a.kt)("p",null,"Es ist m\xf6glich, die aktuelle Netzwerkbeh\xf6rde einer bestimmten Entit\xe4t durch die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},":SetNetworkAuthority()")," zu \xfcberschreiben."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Einige Akteure sind nicht ",(0,a.kt)("strong",{parentName:"p"},"Network Distributed"),". Dies bedeutet, dass sie nicht automatisch zugewiesen werden und auch nicht in der Lage sein werden, ihre Netzwerk-Beh\xf6rde zu \xe4ndern. Sie k\xf6nnen \xfcberpr\xfcfen, ob eine Entit\xe4t mit der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},":IsNetworkDistributed()")," vertrieben ist."))),(0,a.kt)("h4",{id:"beispiele-f\xfcr-aktionen-die-nur-von-der-netzwerkbeh\xf6rde-des-akteurs-ausgef\xfchrt-werden"},"Beispiele f\xfcr Aktionen, die nur von der Netzwerkbeh\xf6rde des Akteurs ausgef\xfchrt werden"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objects Physics Sync (einschlie\xdflich beim Aufruf von ",(0,a.kt)("inlineCode",{parentName:"li"},":SetForce()"),")."),(0,a.kt)("li",{parentName:"ul"},"NPCs walking with ",(0,a.kt)("inlineCode",{parentName:"li"},":MoveTo()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},":Follow()"),".")),(0,a.kt)("h3",{id:"debugging-network--network-authority"},"Debugging Network & Network Authority"),(0,a.kt)("p",null,"We've added a new option in the settings to ",(0,a.kt)("strong",{parentName:"p"},"Draw Network Debug")," information in the World, you can toggle it in the settings (",(0,a.kt)("em",{parentName:"p"},"Settings -> Debug -> Draw Network Debug"),"), it will draw squares on each entity and traces representing their networked movement."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(250).Z,width:"1916",height:"1079"})),(0,a.kt)("h4",{id:"entity-square-colors-meaning"},"Entity Square Colors Meaning"),(0,a.kt)("p",null,"The Square in the entities represent the state in the Network Authority and it's health."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Color"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#306CCE"}},"BLUE"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"You ",(0,a.kt)("strong",{parentName:"td"},"are the current Network Authority")," of that entity. ",(0,a.kt)("br",null),"You are sharing sync data to the other players.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"WHITE")),(0,a.kt)("td",{parentName:"tr",align:"left"},"You ",(0,a.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is sleeping. ",(0,a.kt)("br",null),"The current Network Authority is not sending sync data because the entity is sleeping.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#00A400"}},"GREEN"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"You ",(0,a.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in a ",(0,a.kt)("strong",{parentName:"td"},"good")," cadence (no lag).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#FFA500"}},"ORANGE"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"You ",(0,a.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in an ",(0,a.kt)("strong",{parentName:"td"},"ok")," cadence (small lag - < 100ms).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#FF0000"}},"RED"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"You ",(0,a.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in an ",(0,a.kt)("strong",{parentName:"td"},"bad")," cadence (big lag - > 100ms, maybe even with packet loss).")))),(0,a.kt)("h4",{id:"entity-trace-colors-meaning"},"Entity Trace Colors Meaning"),(0,a.kt)("p",null,"The Traces in the entities represent the network data received from the server. If you are the network authority you won't see the traces. The arrow points from where the entity is currently in your machine and where it should be accordingly to the network authority."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Color"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#00A400"}},"GREEN"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in a ",(0,a.kt)("strong",{parentName:"td"},"good")," cadence (no lag).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#FFA500"}},"ORANGE"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in an ",(0,a.kt)("strong",{parentName:"td"},"ok")," cadence (small lag - < 100ms).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("span",{style:{color:"#FF0000"}},"RED"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in an ",(0,a.kt)("strong",{parentName:"td"},"bad")," cadence (big lag - > 100ms, maybe even with packet loss).")))))}k.isMDXComponent=!0},250:function(e,t,n){t.Z=n.p+"assets/images/debug-visualizer-c087044d005e1ae370cc83cde211dad4.jpg"}}]);