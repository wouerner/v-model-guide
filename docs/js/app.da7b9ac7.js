(function(e){function t(t){for(var u,i,a=t[0],p=t[1],l=t[2],s=0,v=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(u in p)Object.prototype.hasOwnProperty.call(p,u)&&(e[u]=p[u]);c&&c(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],u=!0,a=1;a<n.length;a++){var p=n[a];0!==o[p]&&(u=!1)}u&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var u={},o={app:0},r=[];function i(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=u,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(n,u,function(t){return e[t]}.bind(null,u));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/v-model-guide/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=p;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16db":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Teste")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"teste"},[n("div",{staticClass:"fixed"},[n("h1",[e._v(" V-MODEL and PROPS/EVENT ")]),n("p",[e._v(" data: "+e._s(e.$data))])]),n("main",[n("section",[n("h4",[e._v("v-model")]),n("label",[e._v("input: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("p",[e._v(" input: "+e._s(e.input)+" ")])]),n("hr"),n("section",[n("h4",[e._v("v-model com modifiicador .lazy")]),n("label",[e._v("input lazy:")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.input,expression:"input",modifiers:{lazy:!0}}],domProps:{value:e.input},on:{change:function(t){e.input=t.target.value}}}),n("p",[e._v(" input: "+e._s(e.input)+" ")])]),n("hr"),n("section",[n("h4",[e._v("props/events")]),n("label",[e._v("input:")]),n("input",{domProps:{value:e.input},on:{input:function(t){return e.inputAction(t)}}}),n("p",[e._v(" input: "+e._s(e.input)+" ")])]),n("hr"),n("section",[n("h4",[e._v("props common pattern")]),n("sync-prop",{attrs:{name:e.inputObject.name,value:e.inputObject.value},on:{"update:name":function(t){e.inputObject.name=t},"update:value":function(t){e.inputObject.value=t}}})],1),n("hr"),n("section",[n("h4",[e._v(".sync sugar")]),n("p",[e._v("inputObject: "+e._s(e.inputObject))]),n("sync-prop",e._b({},"sync-prop",e.inputObject,!1,!0))],1),n("hr"),n("section",[n("h4",[e._v("Model Custom")]),n("model-custom",{model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),n("p",[e._v("input: "+e._s(e.input))])],1)])])},a=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("nome")]),n("input",{domProps:{value:e.name},on:{input:function(t){return e.$emit("update:name",t.target.value)}}}),n("br"),n("label",[e._v("value")]),n("input",{domProps:{value:e.value},on:{input:function(t){return e.$emit("update:value",t.target.value)}}})])},l=[],c={name:"Sync",data:function(){return{input:""}},props:["name","value"]},s=c,v=n("2877"),d=Object(v["a"])(s,p,l,!1,null,"4b007c08",null),f=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("input:")]),n("input",{domProps:{value:e.newValue},on:{input:function(t){return e.$emit("custom:event",t.target.value)}}})])},b=[],_={name:"ModelCustom",props:["newValue"],model:{prop:"newValue",event:"custom:event"},data:function(){return{input:""}}},h=_,y=Object(v["a"])(h,m,b,!1,null,"2b0f154a",null),O=y.exports,g={name:"Teste",components:{syncProp:f,modelCustom:O},data:function(){return{input:"",inputObject:{name:"",value:""}}},methods:{inputAction:function(e){this.input=e.target.value},inputSync:function(e){this.input=e.target.value}}},j=g,w=(n("9334"),Object(v["a"])(j,i,a,!1,null,"d31453b2",null)),P=w.exports,x={name:"app",components:{Teste:P}},$=x,S=Object(v["a"])($,o,r,!1,null,null,null),E=S.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(E)}}).$mount("#app")},9334:function(e,t,n){"use strict";var u=n("16db"),o=n.n(u);o.a}});
//# sourceMappingURL=app.da7b9ac7.js.map