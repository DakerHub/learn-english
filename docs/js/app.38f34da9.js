(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a959e265"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"3d64d8b9"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("d63f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},e._l(e.routes,(function(t,r){return n("v-list-item",{key:r,attrs:{link:"",to:t.path}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.meta.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.meta.name))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),n("v-main",{staticClass:"grey lighten-4"},[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],i=(n("b0c0"),n("d3b7"),n("8c4f")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-expansion-panels",{attrs:{accordion:"",flat:""}},e._l(e.phrases,(function(t){return n("v-expansion-panel",{key:t.id},[n("v-expansion-panel-header",[e._v(e._s(t.zh))]),n("v-expansion-panel-content",[n("p",{staticClass:"grey--text"},[e._v(e._s(t.en))]),n("p",e._l(t.tag,(function(t,r){return n("v-chip",{key:r,staticClass:"mr-2 lighten-4 amber--text text--darken-4",attrs:{label:"",small:"",color:"amber"}},[e._v(e._s(t))])})),1)])],1)})),1)],1)},u=[],c=(n("4160"),n("159b"),{"趋势":"趋势","询问":"询问"}),l=0,p=[{zh:"比赛节目变得比以往都要受欢迎",en:"Game shows are more popular than ever",tag:[c.趋势,c.询问]},{zh:"流行音乐的欢迎程度近几年急剧升高",en:"The popularity of Pop music has risen sharply since recent years",tag:[c.趋势]}];p.forEach((function(e){e.id=++l}));var f=p,d={name:"Home",components:{},data:function(){return{phrases:f}}},m=d,v=(n("21bb"),n("2877")),h=n("6544"),b=n.n(h),g=n("cc20"),y=n("cd55"),w=n("49e2"),_=n("c865"),x=n("0393"),V=Object(v["a"])(m,s,u,!1,null,null,null),k=V.exports;b()(V,{VChip:g["a"],VExpansionPanel:y["a"],VExpansionPanelContent:w["a"],VExpansionPanelHeader:_["a"],VExpansionPanels:x["a"]}),r["a"].use(i["a"]);var E=[{path:"/",name:"Home",component:k,meta:{name:"常用短语",icon:"mdi-account-voice"}},{path:"/dialogue",name:"Dialogue",component:function(){return n.e("about").then(n.bind(null,"0e65"))},meta:{name:"场景对话",icon:"mdi-forum"}}],P=new i["a"]({routes:E}),C=P,O={name:"LayoutsDemosBaselineFlipped",props:{source:String},data:function(){return{routes:E,drawer:null}},computed:{title:function(){return this.$route.meta.name}}},j=O,T=n("7496"),L=n("40dc"),S=n("5bc1"),A=n("a523"),I=n("132d"),N=n("8860"),B=n("da13"),D=n("1800"),M=n("5d23"),H=n("f6c4"),$=n("f774"),z=n("2fa4"),q=n("2a7f"),F=Object(v["a"])(j,a,o,!1,null,null,null),J=F.exports;b()(F,{VApp:T["a"],VAppBar:L["a"],VAppBarNavIcon:S["a"],VContainer:A["a"],VIcon:I["a"],VList:N["a"],VListItem:B["a"],VListItemAction:D["a"],VListItemContent:M["a"],VListItemTitle:M["b"],VMain:H["a"],VNavigationDrawer:$["a"],VSpacer:z["a"],VToolbarTitle:q["a"]});var G=n("f309");r["a"].use(G["a"]);var K={},U=new G["a"](K);r["a"].config.productionTip=!1,new r["a"]({router:C,vuetify:U,render:function(e){return e(J)}}).$mount("#app")},d63f:function(e,t,n){}});
//# sourceMappingURL=app.38f34da9.js.map