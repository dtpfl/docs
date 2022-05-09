"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[476],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(n),g=r,m=h["".concat(s,".").concat(g)]||h[g]||u[g]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38585:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},s=void 0,c={unversionedId:"getting-started/tutorials-and-examples/weapon-flashlight",id:"getting-started/tutorials-and-examples/weapon-flashlight",title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/weapon-flashlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-flashlight",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-flashlight",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/weapon-flashlight.md",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Prop Shooter",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/prop-shooter"},next:{title:"Weapon Scope",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-scope"}},p={},u=[],h={toc:u};function g(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This sample code attaches a Light to a Weapon to make a Flashlight attachment."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40970).Z,width:"1919",height:"1079"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Package.RequirePackage("nanos-world-weapons")\n\n-- Spawns a Weapon\nmy_weapon = NanosWorldWeapons.AR4(Vector(), Rotator())\n\n-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)\nmy_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)\n\n-- Attaches the Light to the Weapon with offset X = 100 (at the weapon\'s front)\nmy_light:AttachTo(my_weapon)\nmy_light:SetRelativeLocation(Vector(100, 0, 0))\n\n-- Stores the light on the Weapon\nmy_weapon:SetValue("Light", my_light)\n\n-- Only when someone picks up this weapon, turns on the Flashlight (set it\'s color)\nmy_weapon:Subscribe("PickUp", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0.73, 0.67, 0.42))\n    end\nend)\n\n-- When the weapon is dropped, turns off the Flashlight (set it\'s color to black)\nmy_weapon:Subscribe("Drop", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0, 0, 0))\n    end\nend)\n')))}g.isMDXComponent=!0},40970:function(t,e,n){e.Z=n.p+"assets/images/weapon-flashlight-c5ed6a21aa78117f3a77e43706f6257b.jpg"}}]);