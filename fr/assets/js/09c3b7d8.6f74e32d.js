"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1231],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,v=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(v,s(s({ref:t},d),{},{components:n})):a.createElement(v,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},l=void 0,u={unversionedId:"core-concepts/server-manual/server-installation",id:"core-concepts/server-manual/server-installation",title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-installation.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/fr/docs/next/core-concepts/server-manual/server-installation",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-installation.md",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:1,frontMatter:{title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},sidebar:"main",previous:{title:"Modes de jeu & Packages",permalink:"/fr/docs/next/getting-started/game-modes-and-packages"},next:{title:"Configuration du serveur",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration"}},d={},p=[{value:"Caract\xe9ristiques syst\xe8mes requises",id:"caract\xe9ristiques-syst\xe8mes-requises",level:2},{value:"Installation (Linux et Windows)",id:"installation-linux-et-windows",level:2},{value:"1. Ex\xe9cuter SteamCMD",id:"1-ex\xe9cuter-steamcmd",level:3},{value:"2. Sp\xe9cifier un r\xe9pertoire d&#39;installation",id:"2-sp\xe9cifier-un-r\xe9pertoire-dinstallation",level:3},{value:"3. Connexion",id:"3-connexion",level:3},{value:"4. T\xe9l\xe9charger le serveur nanos world",id:"4-t\xe9l\xe9charger-le-serveur-nanos-world",level:3},{value:"Fonctionnement sous Linux",id:"fonctionnement-sous-linux",level:2},{value:"Installation automatis\xe9e",id:"installation-automatis\xe9e",level:2},{value:"Installation de la version bleeding-edge",id:"installation-de-la-version-bleeding-edge",level:2},{value:"Installation Linux Debian 10",id:"installation-linux-debian-10",level:2},{value:"Linux ARM (raspberry &amp; more)",id:"linux-arm-raspberry--more",level:2},{value:"Box86",id:"box86",level:3},{value:"Box64",id:"box64",level:3},{value:"Steam &amp; Server",id:"steam--server",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !"),(0,i.kt)("h2",{id:"caract\xe9ristiques-syst\xe8mes-requises"},"Caract\xe9ristiques syst\xe8mes requises"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS: Windows ou Linux"),(0,i.kt)("li",{parentName:"ul"},"Processeur : ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," (Un c\u0153ur plus rapide est meilleur que plusieurs c\u0153urs)"),(0,i.kt)("li",{parentName:"ul"},"M\xe9moire : ",(0,i.kt)("inlineCode",{parentName:"li"},"50 MB")," (augmente si vous avez trop de joueurs ou d'entit\xe9s)"),(0,i.kt)("li",{parentName:"ul"},"Stockage : ",(0,i.kt)("inlineCode",{parentName:"li"},"10 MB")," (+ taille des Assets & Packages)"),(0,i.kt)("li",{parentName:"ul"},"R\xe9seau : Recommand\xe9 au moins ",(0,i.kt)("inlineCode",{parentName:"li"},"1 Mo/s")," (augmente si on trop de joueurs ou d'entit\xe9s)"),(0,i.kt)("li",{parentName:"ul"},"Ports de transfert r\xe9seau: ",(0,i.kt)("inlineCode",{parentName:"li"},"7777 TCP/UDP")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"7778 UDP")," (vous pouvez le modifier dans la configuration)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"L'installation par d\xe9faut de nanos world contient d\xe9j\xe0 l'ex\xe9cutable du serveur, vous pouvez le trouver \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world/Server/NanosWorldServer.exe"),". Vous pouvez utiliser celui-ci pour cr\xe9er vos packages personnalis\xe9s car il s'int\xe8gre parfaitement \xe0 l'\xe9cran du menu Nouvelle partie !"))),(0,i.kt)("h2",{id:"installation-linux-et-windows"},"Installation (Linux et Windows)"),(0,i.kt)("p",null,"les serveurs nanos world sont t\xe9l\xe9charg\xe9s via SteamCMD, une version en ligne de commande de Steam. Veuillez ",(0,i.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD"},"le t\xe9l\xe9charger")," avant de poursuivre."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Si vous \xeates sur une machine Linux Ubuntu/Debian, vous pouvez facilement l'installer ainsi :"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")))),(0,i.kt)("h3",{id:"1-ex\xe9cuter-steamcmd"},"1. Ex\xe9cuter SteamCMD"),(0,i.kt)("p",null,"Apr\xe8s le t\xe9l\xe9chargement, lancez l'ex\xe9cutable ",(0,i.kt)("inlineCode",{parentName:"p"},"steamcmd"),", il se mettra \xe0 jour et vous entrerez dans sa console :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam>\n")),(0,i.kt)("h3",{id:"2-sp\xe9cifier-un-r\xe9pertoire-dinstallation"},"2. Sp\xe9cifier un r\xe9pertoire d'installation"),(0,i.kt)("p",null,"Vous pouvez \xe9ventuellement d\xe9finir un dossier d'installation pour installer votre serveur nanos world :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir c:\\nanos-world-server\\\n")),(0,i.kt)("h3",{id:"3-connexion"},"3. Connexion"),(0,i.kt)("p",null,"L'\xe9tape suivante consiste \xe0 se connecter sur SteamCMD, vous pouvez vous connecter de mani\xe8re anonyme avec :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,i.kt)("h3",{id:"4-t\xe9l\xe9charger-le-serveur-nanos-world"},"4. T\xe9l\xe9charger le serveur nanos world"),(0,i.kt)("p",null,"You can then install nanos world server using it's app id: ",(0,i.kt)("inlineCode",{parentName:"p"},"1936830"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"app_update 1936830")," to update your nanos world server to the latest version as well!"))),(0,i.kt)("p",null,"Vous avez termin\xe9 ! Vous pouvez quitter la console :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> quit\n")),(0,i.kt)("h2",{id:"fonctionnement-sous-linux"},"Fonctionnement sous Linux"),(0,i.kt)("p",null,"Sous Linux, vous devez d\xe9marrer le serveur en utilisant le script Shell ",(0,i.kt)("inlineCode",{parentName:"p"},"./NanosWorldServer.sh"),", qui configurera les chemins appropri\xe9s et les biblioth\xe8ques dynamiques n\xe9cessaires qui doivent \xeatre charg\xe9es !"),(0,i.kt)("h2",{id:"installation-automatis\xe9e"},"Installation automatis\xe9e"),(0,i.kt)("p",null,"Vous pouvez \xe9ventuellement utiliser une commande en une ligne pour installer/mettre \xe0 jour le serveur nanos world :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"steamcmd.exe +login anonymous +app_update 1936830 validate +quit\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous avez fini ! Vous pouvez maintenant proc\xe9der aux \xe9tapes suivantes pour configurer votre serveur nanos world."))),(0,i.kt)("h2",{id:"installation-de-la-version-bleeding-edge"},"Installation de la version bleeding-edge"),(0,i.kt)("p",null,"Pour installer la version ",(0,i.kt)("inlineCode",{parentName:"p"},"bleeding-edge")," du serveur, vous devrez sp\xe9cifier sa branche lors de l'installation :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830 -beta bleeding-edge\n")),(0,i.kt)("p",null,"ou"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'steamcmd.exe +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n')),(0,i.kt)("h2",{id:"installation-linux-debian-10"},"Installation Linux Debian 10"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Suivez cette partie si vous avez ce genre de probl\xe8me : ",(0,i.kt)("inlineCode",{parentName:"p"},"version GLIBCXX 3.4.26 not found")))),(0,i.kt)("p",null,"Pour cette distribution, quelques \xe9tapes en plus sont requises. Puisque nanos world utilise ",(0,i.kt)("inlineCode",{parentName:"p"},"gcc 9"),", nous devons mettre \xe0 jour un de nos packages vers le r\xe9pertoire de test."),(0,i.kt)("p",null,"Tout d'abord, mettez \xe0 jour votre fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"sources.list")," ","(","situ\xe9 dans : ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),")",", vous devez ajouter la source du r\xe9pertoire de test, vous pouvez ajouter ces lignes dans votre fichier :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"deb http://ftp.fr.debian.org/debian/ testing main contrib non-free\ndeb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free\n")),(0,i.kt)("p",null,"Apr\xe8s cela, vous devez un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"preferences")," qui dira au syst\xe8me de prioriser les packages stables aux packages de test, sauf indication contraire. Dans ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/preferences")," (\\cr\xe9ez le fichier s'il n'existe pas",")",", ajoutez ces lignes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Package: *\nPin: release a=stable\nPin-Priority: 700\n\nPackage: *\nPin: release a=testing\nPin-Priority: 650\n")),(0,i.kt)("p",null,"Maintenant, mettez \xe0 jour votre serveur pour \xeatre s\xfbr que votre syst\xe8me peut trouver les r\xe9pertoires de test, avec cette commande :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,i.kt)("p",null,"Nous allons installer le package de test ",(0,i.kt)("inlineCode",{parentName:"p"},"libstdc++6")," sur le serveur, cela permettra au serveur de d\xe9marrer correctement. Vous pouvez utiliser la commande ci-dessous pour l'installer :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get --target-release testing install libstdc++6\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous avez fini ! Vous pouvez maintenant proc\xe9der aux \xe9tapes suivantes pour configurer votre serveur nanos world."))),(0,i.kt)("h2",{id:"linux-arm-raspberry--more"},"Linux ARM (raspberry & more)"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"EXPERIMENTAL : Use at your own risk!, unstable"))),(0,i.kt)("p",null,"Nanos world server is not officially supported on Arm, but if you really really really want your server to be running on arm platform such as a raspberry, rockpro64, ... then you can !"),(0,i.kt)("p",null,"We will need 2 emulators :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"box64 for Nanos World server : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box64"},"https://github.com/ptitSeb/box64")),(0,i.kt)("li",{parentName:"ul"},"box86 for steam : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box86"},"https://github.com/ptitSeb/box86"))),(0,i.kt)("p",null,"You must build & install these emulators on your board. box86 is optional if you don't want to use steamcmd to download & update the server"),(0,i.kt)("p",null,"Follow CAREFULLY the instructions on the emulators repository, commands are different in function of the board."),(0,i.kt)("p",null,"Example :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RK3399 is for Pine64, RockPro64, Orange Pi, ...")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These steps have been tested on Armbian Bullseye 64bits (aarch64) on a rockpro64. Some extra steps might be required for other boards & distros"))),(0,i.kt)("h3",{id:"box86"},"Box86"),(0,i.kt)("p",null,"To install it, simply follow the instructions here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md"},"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md")),(0,i.kt)("p",null,"If for some reason, your system cannot find Box86 and you are on a 64bits os, run theses commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo dpkg --add-architecture armhf\nsudo apt update\nsudo apt install libc6:armhf libncurses5:armhf libstdc++6:armhf\n")),(0,i.kt)("h3",{id:"box64"},"Box64"),(0,i.kt)("p",null,"Clone the repository, then we will need to replace the file ",(0,i.kt)("inlineCode",{parentName:"p"},"libstdc++.so.6")," inside the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"x64lib"),". You will need a newer version of this file with at least ",(0,i.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),". You can grab it inside an updated Linux distro such as Ubuntu 20.04, Debian 11. To check if the file has at least ",(0,i.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", use this command :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"strings libstdc++.so.6 | grep LIBCXX\n")),(0,i.kt)("p",null,"If it shows ",(0,i.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", you can put this file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"x64lib")," folder."),(0,i.kt)("p",null,"You can now follow the rest of the instructions here (starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir")," steps since you already cloned the repo): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md"},"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md")),(0,i.kt)("h3",{id:"steam--server"},"Steam & Server"),(0,i.kt)("p",null,"You have now installed the emulators, they should be able to auto-detect if a program needs a x86_64/x86 emulation or not."),(0,i.kt)("p",null,"Get steamcmd manually on a folder with this command :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -\n')),(0,i.kt)("p",null,"You can now follow the basic instructions of nanos world Linux installation starting from steamcmd (run steamcmd with this command: ",(0,i.kt)("inlineCode",{parentName:"p"},"./steamcmd.sh"),")."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous avez fini ! Vous pouvez maintenant proc\xe9der aux \xe9tapes suivantes pour configurer votre serveur nanos world."))))}c.isMDXComponent=!0}}]);