"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8296],{73578:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(67294),r=n(43746),l=n(35155),c=n(10833),u=n(35281),s=n(73306),o=n(14739),i=n(86010);function m(e){var t=e.tags,n=(0,l.M)();return a.createElement(c.FG,{className:(0,i.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},a.createElement(c.d,{title:n}),a.createElement(o.Z,{tag:"doc_tags_list"}),a.createElement(r.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("h1",null,n),a.createElement(s.Z,{tags:t}))))))}},7774:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l=n(39960),c="tag_hD8n",u="tagRegular_D6E_",s="tagWithCount_i0QQ";function o(e){var t=e.permalink,n=e.label,o=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,o?s:u)},n,o&&a.createElement("span",null,o))}},73306:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(7774),l=n(35155),c="tag_Shcx";function u(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(r.Z,e))}))),a.createElement("hr",null))}function s(e){var t=e.tags,n=(0,l.P)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(u,{key:e.letter,letterEntry:e})})))}},35155:function(e,t,n){n.d(t,{M:function(){return r},P:function(){return l}});var a=n(95999),r=function(){return(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);