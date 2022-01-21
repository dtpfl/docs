"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7765],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(v,l(l({ref:t},d),{},{components:a})):n.createElement(v,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),o=a(72389),l=a(79443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(63616),c=a(86010),d="tabItem_vU9c";function u(e){var t,a,o,l=e.lazy,u=e.block,p=e.defaultValue,m=e.values,v=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),y=h.tabGroupChoices,C=h.setTabGroupChoices,w=(0,r.useState)(N),x=w[0],T=w[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=y[v];null!=P&&P!==x&&g.some((function(e){return e.value===P}))&&T(P)}var O=function(e){var t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==x&&(I(t),T(n),null!=v&&C(v,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,c.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},26823:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(26396),i=a(58215),s=["components"],c={description:"Como usar nanos CLI do mundo para instalar pacotes e atualizar o servidor.",sidebar_position:3,tags:["hospedagem"]},d="Interface de Linha de Comando",u={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"version-latest/core-concepts/server-manual/nanos-world-cli",title:"Interface de Linha de Comando",description:"Como usar nanos CLI do mundo para instalar pacotes e atualizar o servidor.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/pt-BR/docs/core-concepts/server-manual/nanos-world-cli",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",tags:[{label:"hospedagem",permalink:"/pt-BR/docs/tags/hospedagem"}],version:"latest",sidebarPosition:3,frontMatter:{description:"Como usar nanos CLI do mundo para instalar pacotes e atualizar o servidor.",sidebar_position:3,tags:["hospedagem"]},sidebar:"version-latest/main",previous:{title:"Configura\xe7\xe3o Servidor",permalink:"/pt-BR/docs/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/pt-BR/docs/core-concepts/server-manual/game-panels"}},p=[{value:"Iniciando a CLI",id:"iniciando-a-cli",children:[],level:2},{value:"Comandos da CLI",id:"comandos-da-cli",children:[],level:2},{value:"Um-Liner CLI",id:"um-liner-cli",children:[],level:2}],m={toc:p};function v(e){var t=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-de-linha-de-comando"},"Interface de Linha de Comando"),(0,o.kt)("p",null,"Como usar nanos CLI do mundo para instalar pacotes e atualizar o servidor."),(0,o.kt)("p",null,"nanos mundo fornece um CLI ","(","Interface de Linha de Comando",")"," para ajudar a atualizar o servidor, pacotes e assets e tamb\xe9m baix\xe1-los!"),(0,o.kt)("h2",{id:"iniciando-a-cli"},"Iniciando a CLI"),(0,o.kt)("p",null,"Para executar o cli, inicie o servidor com o argumento ",(0,o.kt)("inlineCode",{parentName:"p"},"--cli"),":"),(0,o.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cmd",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli\n")))),(0,o.kt)("p",null," Depois de iniciado, se voc\xea digitar ",(0,o.kt)("inlineCode",{parentName:"p"},"ajuda")," voc\xea pode ver todos os comandos dispon\xedveis:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(45864).Z})),(0,o.kt)("h2",{id:"comandos-da-cli"},"Comandos da CLI"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Comandos"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Install Packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update Packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Creates a new Package in a interactive way")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Creates a new Asset Pack in a interactive way")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"check")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"help")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Parar")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,o.kt)("h2",{id:"um-liner-cli"},"Um-Liner CLI"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Tamb\xe9m \xe9 poss\xedvel executar o CLI em um modo n\xe3o interativo, basta executar o comando juntos depois do ",(0,o.kt)("inlineCode",{parentName:"p"},"--cli"),"."))),(0,o.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cmd",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli update package sandbox\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n")))))}v.isMDXComponent=!0},45864:function(e,t,a){t.Z=a.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);