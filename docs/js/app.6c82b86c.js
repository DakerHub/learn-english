(function(e){function t(t){for(var a,n,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var u=r[n];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({dialog:"dialog","grammar~phase":"grammar~phase",grammar:"grammar",phase:"phase"}[e]||e)+"."+{dialog:"e6be7ad0","grammar~phase":"68c18ec0",grammar:"9f5ca483",phase:"fabfe2ce"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={dialog:1,"grammar~phase":1,grammar:1,phase:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({dialog:"dialog","grammar~phase":"grammar~phase",grammar:"grammar",phase:"phase"}[e]||e)+"."+{dialog:"3d64d8b9","grammar~phase":"808aa487",grammar:"427541b5",phase:"cc3f3a5f"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],m.parentNode.removeChild(m),r(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,r[1](p)}o[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var m=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},e._l(e.routes,(function(t,a){return r("v-list-item",{key:a,attrs:{link:"",to:t.path}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.meta.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.meta.name))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","hide-on-scroll":""}},[r("v-toolbar-title",[e._v(e._s(e.title))]),r("v-spacer"),r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1)],1)},o=[],i=(r("b0c0"),r("d3b7"),r("8c4f"));a["a"].use(i["a"]);var u=[{path:"/",name:"Home",component:function(){return Promise.all([r.e("grammar~phase"),r.e("phase")]).then(r.bind(null,"bb51"))},meta:{name:"常用短语",icon:"mdi-account-voice"}},{path:"/dialogue",name:"Dialogue",component:function(){return r.e("dialog").then(r.bind(null,"0e65"))},meta:{name:"场景对话",icon:"mdi-forum"}},{path:"/grammar",name:"Grammar",component:function(){return Promise.all([r.e("grammar~phase"),r.e("grammar")]).then(r.bind(null,"42c5"))},meta:{name:"常用语法",icon:"mdi-book"}}],c=new i["a"]({routes:u}),s=c,l={name:"LayoutsDemosBaselineFlipped",props:{source:String},data:function(){return{routes:u,drawer:null}},computed:{title:function(){return this.$route.meta.name}}},p=l,m=r("2877"),d=r("6544"),f=r.n(d),g=r("7496"),h=r("40dc"),v=r("5bc1"),b=r("a523"),y=r("132d"),w=r("8860"),_=r("da13"),k=r("1800"),V=r("5d23"),O=r("f6c4"),P=r("f774"),j=r("2fa4"),L=r("2a7f"),S=Object(m["a"])(p,n,o,!1,null,null,null),T=S.exports;f()(S,{VApp:g["a"],VAppBar:h["a"],VAppBarNavIcon:v["a"],VContainer:b["a"],VIcon:y["a"],VList:w["a"],VListItem:_["a"],VListItemAction:k["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VMain:O["a"],VNavigationDrawer:P["a"],VSpacer:j["a"],VToolbarTitle:L["a"]});var A=r("f309");a["a"].use(A["a"]);var C={},E=new A["a"](C);a["a"].config.productionTip=!1,new a["a"]({router:s,vuetify:E,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.6c82b86c.js.map