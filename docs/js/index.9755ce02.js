(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={index:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"09d09b9e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="trdNow/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"10d9":function(e,t,a){},1872:function(e,t,a){"use strict";a("8161")},"24cf":function(e,t,a){},"4ec9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=a("2877"),s={},u=Object(i["a"])(s,n,o,!1,null,null,null),l=u.exports,c=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("app-header"),a("side-bar",{attrs:{all_woeid:e.all_woeid}}),a("trends-list",{attrs:{all_woeid:e.all_woeid}})],1)},f=[],p=a("2f62");r["default"].use(p["a"]);var v=new p["a"].Store({state:{area:"",limitCount:0,count:0},getters:{getArea:function(e){return e.area},getCount:function(e){return e.count}},mutations:{MutationsUpdateArea:function(e,t){e.area=t}},actions:{ActionUpdateArea:function(e,t){e.commit("MutationsUpdateArea",t)}},modules:{}}),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar-container"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"3","background-color":"#98fb98","active-text-color":"#303133"},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.woeidList,(function(t,r){return a("ul",{key:r,staticClass:"side"},[a("el-menu-item",{attrs:{index:"index"},on:{click:function(t){return e.selectArea(r)}}},[a("i",{staticClass:"el-icon-location"}),a("div",{staticClass:"locale-list"},[e._v(e._s(t.label))])])],1)})),0),a("a",{attrs:{href:"/about"}},[e._v("about")])],1)},h=[],m={name:"SideBar",props:["all_woeid"],data:function(){return{open:!1,woeidList:this.all_woeid}},methods:{selectArea:function(e){this.$store.dispatch("ActionUpdateArea",e)}}},w=m,_=(a("1872"),Object(i["a"])(w,b,h,!1,null,null,null)),g=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trends"},e._l(e.buf,(function(t,r){return a("div",{key:r,staticClass:"row-possion"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"span-type"},[e._v("● "+e._s(t.prefecture)+" ●")])]),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingMap[r],expression:"loadingMap[ind]"}],staticClass:"ul-list"},[e._l(e.resultList[r],(function(t,n){return a("li",{key:n,staticClass:"column-data",class:{"row-disp-none":n+1>15&&!1===e.rowVisibled[r]}},[a("p",{staticClass:"num-name"},[a("span",{staticClass:"index-no"},[e._v(e._s(n+1)+".")]),a("a",{staticClass:"text-left tr_name",attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.name))])]),t.tweet_volume?a("p",{staticClass:"tw-vol"},[e._v(" "+e._s(t.tweet_volume)+"件のツイート ")]):e._e(),a("div",{staticClass:"tw-vol-none text-left",attrs:{"else-if":""}})])})),a("div",{staticClass:"btn-mrg",class:{"row-disp-none":!0===e.rowVisibled[r]}},[a("el-button",{staticClass:"btn-pos",attrs:{type:"primary",plain:""},on:{click:function(t){return e.rowVisible(r)}}},[e._v("...more")])],1)],2)])],1)})),0)},k=[],C=a("b85c"),x={name:"trendsList",props:["all_woeid"],data:function(){return{value:"",result:[],resultList:[],woeidList:this.all_woeid,changed:!1,loading:!0,loadingMap:[],rowVisibled:[!1],changeArea:"japan_woeid",buf:[]}},created:function(){this.getTrdList(this.changeArea)},methods:{getTrdList:function(e){var t=this,a=e;for(var r in t.buf=[],t.resultList=[],t.rowVisibled=[],t.loadingMap=[],t.woeidList)if(a===r){var n,o=Object(C["a"])(t.woeidList[r].id);try{for(o.s();!(n=o.n()).done;){var i=n.value;t.buf.push(i),t.rowVisibled.push(!1),t.loadingMap.push(!0)}}catch(c){o.e(c)}finally{o.f()}}t.$store.state.limitCount=t.buf.length;var s,u=Object(C["a"])(t.buf);try{for(u.s();!(s=u.n()).done;){var l=s.value;console.log(l.value),t.$store.state.count=0,this.axios.get("https://script.google.com/macros/s/AKfycbwh9EDbmniulQpryJbowVsNS02edUHu2nRsgsTXL4xNfrB-rLuIGnN0BliP3RApbin8kQ/exec",{params:{id:l.value}}).then((function(e){t.result=e.data,t.resultList.push(t.result),t.loadingMap[t.$store.state.count]=!1,t.$store.state.count=t.$store.state.count+1})).catch((function(e){console.error(e)}))}}catch(c){u.e(c)}finally{u.f()}},testFnc:function(e){alert(e)},rowVisible:function(e){this.$set(this.rowVisibled,e,!0)}},computed:{setArea:function(){return this.$store.getters.getArea}},watch:{setArea:function(){this.changeArea=this.$store.state.area,this.getTrdList(this.changeArea)}}},O=x,A=(a("60f1"),Object(i["a"])(O,y,k,!1,null,null,null)),j=A.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"appHeader"}},[a("div",{staticClass:"header"},[a("p",{staticClass:"appTitle"},[e._v("trdNow")])])])}],S={name:"appHeader",data:function(){}},T=S,M=(a("de1f"),Object(i["a"])(T,L,$,!1,null,null,null)),E=M.exports,P={name:"home",store:v,components:{SideBar:g,TrendsList:j,AppHeader:E},data:function(){return{all_woeid:{japan_woeid:{label:"日本",id:[{prefecture:"Japan",value:23424856,visbled:!1}]},tohoku_woeid:{label:"東北",id:[{prefecture:"Sapporo",value:1118108,visbled:!1},{prefecture:"Sendai",value:1118129,visbled:!1}]},kanto_woeid:{label:"関東",id:[{prefecture:"Saitama",value:1116753},{prefecture:"Chiba",value:1117034},{prefecture:"Tokyo",value:1118370},{prefecture:"Kawasaki",value:1117502},{prefecture:"Sagamihara",value:1118072},{prefecture:"Yokohama",value:1118550}]},tyubu_woeid:{label:"中部",id:[{prefecture:"Niigata",value:1117881}]},tokai_woeid:{label:"東海",id:[{prefecture:"Hamamatsu",value:1117155},{prefecture:"Nagoya",value:1117817}]},kansai_woeid:{label:"関西",id:[{prefecture:"Kyoto",value:15015372},{prefecture:"Osaka",value:15015370},{prefecture:"Kobe",value:1117545}]},tyugoku_woeid:{label:"中国",id:[{prefecture:"Okayama",value:90036018},{prefecture:"Hiroshima",value:1117227}]},shikoku_woeid:{label:"四国",id:[{prefecture:"Takamatsu",value:1118285}]},kyusyu_woeid:{label:"九州",id:[{prefecture:"Fukuoka",value:1117099},{prefecture:"Kitakyushu",value:1110809},{prefecture:"Kumamoto",value:1117605},{prefecture:"Okinawa",value:2345896}]}}}}},V=P,N=(a("cccb"),Object(i["a"])(V,d,f,!1,null,null,null)),H=N.exports;r["default"].use(c["a"]);var K=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],U=new c["a"]({mode:"history",routes:K}),B=U,J=a("bc3a"),F=a.n(J),Q=a("130e"),R=a("5c96"),q=a.n(R);a("0fae"),a("24cf"),a("10d9");r["default"].config.productionTip=!1,r["default"].use(Q["a"],F.a),r["default"].use(q.a),r["default"].use(p["a"]),new r["default"]({router:B,store:v,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,a){},"60f1":function(e,t,a){"use strict";a("4ec9")},8161:function(e,t,a){},"915e":function(e,t,a){},cccb:function(e,t,a){"use strict";a("5ced")},de1f:function(e,t,a){"use strict";a("915e")}});
//# sourceMappingURL=index.9755ce02.js.map