(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={index:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d58cb351"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"10d9":function(e,t,a){},1872:function(e,t,a){"use strict";a("8161")},"24cf":function(e,t,a){},"4ec9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header"),a("side-bar",{attrs:{all_woeid:e.all_woeid}}),a("trends-list",{attrs:{all_woeid:e.all_woeid}})],1)},i=[],o=a("2f62");r["default"].use(o["a"]);var s=new o["a"].Store({state:{area:"",limitCount:0,count:0},getters:{getArea:function(e){return e.area},getCount:function(e){return e.count}},mutations:{MutationsUpdateArea:function(e,t){e.area=t}},actions:{ActionUpdateArea:function(e,t){e.commit("MutationsUpdateArea",t)}},modules:{}}),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar-container"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"3","background-color":"#98fb98","active-text-color":"#303133"},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.woeidList,(function(t,r){return a("ul",{key:r,staticClass:"side"},[a("el-menu-item",{attrs:{index:"index"},on:{click:function(t){return e.selectArea(r)}}},[a("i",{staticClass:"el-icon-location"}),a("div",{staticClass:"locale-list"},[e._v(e._s(t.label))])])],1)})),0)],1)},l=[],c={name:"SideBar",props:["all_woeid"],data:function(){return{open:!1,woeidList:this.all_woeid}},methods:{selectArea:function(e){this.$store.dispatch("ActionUpdateArea",e)}}},d=c,f=(a("1872"),a("2877")),p=Object(f["a"])(d,u,l,!1,null,null,null),v=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trends"},e._l(e.buf,(function(t,r){return a("div",{key:r,staticClass:"row-possion"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"span-type"},[e._v("● "+e._s(t.prefecture)+" ●")])]),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"ul-list"},[e._l(e.resultList[r],(function(t,n){return a("li",{key:n,staticClass:"column-data",class:{"row-disp-none":n+1>15&&!1===e.rowVisibled[r]}},[a("div",{staticClass:"text-left"},[a("span",{staticClass:"index-no"},[e._v(e._s(n+1)+".")]),a("a",{staticClass:"text-left tr_name",attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.name))]),t.tweet_volume?a("div",{staticClass:"tw-vol text-left"},[e._v(" "+e._s(t.tweet_volume)+"件のツイート ")]):e._e(),a("div",{staticClass:"tw-vol-none text-left",attrs:{"else-if":""}})])])})),a("div",{staticClass:"btn-mrg",class:{"row-disp-none":!0===e.rowVisibled[r]}},[a("el-button",{staticClass:"btn-pos",attrs:{type:"primary",plain:""},on:{click:function(t){return e.rowVisible(r)}}},[e._v("...more")])],1)],2)])],1)})),0)},h=[],m=a("b85c"),w={name:"trendsList",props:["all_woeid"],data:function(){return{value:"",result:[],resultList:[],woeidList:this.all_woeid,changed:!1,loading:!0,rowVisibled:[!1],changeArea:"japan_woeid",buf:[]}},created:function(){this.getTrdList(this.changeArea)},methods:{getTrdList:function(e){var t=this,a=e;for(var r in!1===t.loading&&(t.loading=!0),t.buf=[],t.resultList=[],t.rowVisibled=[],t.woeidList)if(a===r){var n,i=Object(m["a"])(t.woeidList[r].id);try{for(i.s();!(n=i.n()).done;){var o=n.value;t.buf.push(o),t.rowVisibled.push(!1)}}catch(c){i.e(c)}finally{i.f()}}t.$store.state.limitCount=t.buf.length;var s,u=Object(m["a"])(t.buf);try{for(u.s();!(s=u.n()).done;){var l=s.value;console.log(l.value),t.$store.state.count=0,this.axios.get("https://script.google.com/macros/s/AKfycbwh9EDbmniulQpryJbowVsNS02edUHu2nRsgsTXL4xNfrB-rLuIGnN0BliP3RApbin8kQ/exec",{params:{id:l.value}}).then((function(e){if(t.result=e.data,t.resultList.push(t.result),t.$store.state.count=t.$store.state.count+1,t.$store.state.limitCount===t.$store.state.count)return t.loading=!1,t.resultList})).catch((function(e){console.error(e)}))}}catch(c){u.e(c)}finally{u.f()}},testFnc:function(e){alert(e)},rowVisible:function(e){this.$set(this.rowVisibled,e,!0)}},computed:{setArea:function(){return this.$store.getters.getArea}},watch:{setArea:function(){this.changeArea=this.$store.state.area,this.getTrdList(this.changeArea)}}},_=w,g=(a("60f1"),Object(f["a"])(_,b,h,!1,null,null,null)),y=g.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"appHeader"}},[a("div",{staticClass:"header"},[a("p",{staticClass:"appTitle"},[e._v("trdNow")])])])}],x={name:"appHeader",data:function(){}},A=x,O=(a("de1f"),Object(f["a"])(A,k,C,!1,null,null,null)),j=O.exports,L={name:"App",store:s,components:{SideBar:v,TrendsList:y,AppHeader:j},data:function(){return{all_woeid:{japan_woeid:{label:"日本",id:[{prefecture:"Japan",value:23424856,visbled:!1}]},tohoku_woeid:{label:"東北",id:[{prefecture:"Sapporo",value:1118108,visbled:!1},{prefecture:"Sendai",value:1118129,visbled:!1}]},kanto_woeid:{label:"関東",id:[{prefecture:"Saitama",value:1116753},{prefecture:"Chiba",value:1117034},{prefecture:"Tokyo",value:1118370},{prefecture:"Kawasaki",value:1117502},{prefecture:"Sagamihara",value:1118072},{prefecture:"Yokohama",value:1118550}]},tyubu_woeid:{label:"中部",id:[{prefecture:"Niigata",value:1117881}]},tokai_woeid:{label:"東海",id:[{prefecture:"Hamamatsu",value:1117155},{prefecture:"Nagoya",value:1117817}]},kansai_woeid:{label:"関西",id:[{prefecture:"Kyoto",value:15015372},{prefecture:"Osaka",value:15015370},{prefecture:"Kobe",value:1117545}]},tyugoku_woeid:{label:"中国",id:[{prefecture:"Okayama",value:90036018},{prefecture:"Hiroshima",value:1117227}]},shikoku_woeid:{label:"四国",id:[{prefecture:"Takamatsu",value:1118285}]},kyusyu_woeid:{label:"九州",id:[{prefecture:"Fukuoka",value:1117099},{prefecture:"Kitakyushu",value:1110809},{prefecture:"Kumamoto",value:1117605},{prefecture:"Okinawa",value:2345896}]}}}}},$=L,T=(a("034f"),Object(f["a"])($,n,i,!1,null,null,null)),S=T.exports,E=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("trends-list")],1)},V=[],H={name:"Home",components:{TrendsList:y}},N=H,K=(a("cccb"),Object(f["a"])(N,P,V,!1,null,null,null)),M=K.exports;r["default"].use(E["a"]);var U=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],B=new E["a"]({routes:U}),J=B,F=a("bc3a"),Q=a.n(F),R=a("130e"),q=a("5c96"),D=a.n(q);a("0fae"),a("24cf"),a("10d9");r["default"].config.productionTip=!1,r["default"].use(R["a"],Q.a),r["default"].use(D.a),r["default"].use(o["a"]),new r["default"]({router:J,store:s,render:function(e){return e(S)}}).$mount("#app")},"5ced":function(e,t,a){},"60f1":function(e,t,a){"use strict";a("4ec9")},8161:function(e,t,a){},"85ec":function(e,t,a){},"915e":function(e,t,a){},cccb:function(e,t,a){"use strict";a("5ced")},de1f:function(e,t,a){"use strict";a("915e")}});
//# sourceMappingURL=index.4b65341d.js.map