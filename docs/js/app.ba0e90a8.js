(function(t){function e(e){for(var u,r,o=e[0],p=e[1],l=e[2],s=0,m=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(u in p)Object.prototype.hasOwnProperty.call(p,u)&&(t[u]=p[u]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],u=!0,o=1;o<n.length;o++){var p=n[o];0!==a[p]&&(u=!1)}u&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var u={},a={app:0},i=[];function r(e){if(u[e])return u[e].exports;var n=u[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=u,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/v-model-guide/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var u=n("85ec"),a=n.n(u);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=(n("034f"),n("2877")),o={},p=Object(r["a"])(o,a,i,!1,null,null,null),l=p.exports,c=(n("b0c0"),n("2f62"));u["a"].use(c["a"]);var s=new c["a"].Store({state:{inputObject:{name:"",value:""}},mutations:{updateName:function(t,e){t.inputObject.name=e},updateValue:function(t,e){t.inputObject.value=e}},actions:{updateName:function(t,e){var n=t.commit;n("updateName",e)},updatevalue:function(t,e){var n=t.commit;n("updateValue",e)}},getters:{getName:function(t){return t.inputObject.name},getvalue:function(t){return t.inputObject.value}},modules:{}}),m=n("0284"),v=n.n(m),d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Teste")},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teste"},[n("main",[n("section",[n("div",[n("h4",[t._v("v-model")]),n("label",[t._v("input: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("p",[t._v(" input: "+t._s(t.input)+" ")])]),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html))])],1)]),n("section",[n("div",[n("h4",[t._v("v-model com modifiicador .lazy")]),n("label",[t._v("input lazy:")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.input,expression:"input",modifiers:{lazy:!0}}],domProps:{value:t.input},on:{change:function(e){t.input=e.target.value}}}),n("p",[t._v(" input: "+t._s(t.input)+" ")])]),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html1))])],1)]),n("section",[n("div",[n("h4",[t._v("props/events")]),n("label",[t._v("input:")]),n("input",{domProps:{value:t.input},on:{input:function(e){return t.inputAction(e)}}}),n("p",[t._v(" input: "+t._s(t.input)+" ")])]),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html2))])],1)]),n("section",[n("div",[n("h4",[t._v("props common pattern")]),n("sync-prop",{attrs:{name:t.inputObject.name,value:t.inputObject.value},on:{"update:name":function(e){t.inputObject.name=e},"update:value":function(e){t.inputObject.value=e}}})],1),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html3))])],1)]),n("section",[n("div",[n("h4",[t._v(".sync sugar")]),n("p",[t._v("inputObject: "+t._s(t.inputObject))]),n("sync-prop",t._b({},"sync-prop",t.inputObject,!1,!0))],1),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html4))])],1)]),n("section",[n("div",[n("h4",[t._v("Model Custom")]),n("model-custom",{model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("p",[t._v("input: "+t._s(t.input))])],1),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html5))])],1)]),n("section",[n("div",[n("h4",[t._v("Model Custom")]),n("model-custom",{model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("p",[t._v("input: "+t._s(t.input))])],1),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html5))])],1)]),n("section",[n("div",[n("h4",[t._v("v-model vuex")]),n("label",[t._v("input: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("p",[t._v(" input: "+t._s(t.input)+" ")])]),n("div",[n("prism",{attrs:{language:"html"}},[t._v(t._s(t.html))])],1)])]),t._m(0)])},g=[function(){var t=this,e=t.$createElement,u=t._self._c||e;return u("footer",[u("div",[u("a",{attrs:{href:"https://codigodehonra.tech"}},[u("img",{staticStyle:{height:"60px","margin-right":"5px"},attrs:{src:n("cf05")}})]),u("div",[u("p",[t._v("Project: "),u("a",{attrs:{href:"https://github.com/wouerner/v-model-guide"}},[t._v("v-model-guide")])]),u("p",[t._v("Author: "),u("a",{attrs:{href:"https://github.com/wouerner"}},[t._v("wouerner")])]),u("p",[t._v("Sponsorship: "),u("a",{attrs:{href:"https://codigodehonra.tech"}},[t._v("codigodehonra.tech")])])])])])}],_=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",[t._v("nome")]),n("input",{domProps:{value:t.name},on:{input:function(e){return t.$emit("update:name",e.target.value)}}}),n("br"),n("label",[t._v("value")]),n("input",{domProps:{value:t.value},on:{input:function(e){return t.$emit("update:value",e.target.value)}}})])},j=[],y={name:"Sync",data:function(){return{input:""}},props:["name","value"]},w=y,P=Object(r["a"])(w,O,j,!1,null,"4b007c08",null),x=P.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",[t._v("input:")]),n("input",{domProps:{value:t.newValue},on:{input:function(e){return t.$emit("custom:event",e.target.value)}}})])},$=[],S={name:"ModelCustom",props:["newValue"],model:{prop:"newValue",event:"custom:event"},data:function(){return{input:""}}},E=S,M=Object(r["a"])(E,N,$,!1,null,"2b0f154a",null),V=M.exports,z=(n("c197"),n("a878"),n("8d51")),k=n.n(z);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);e&&(u=u.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,u)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(_["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={name:"Teste",components:{syncProp:x,modelCustom:V,prism:k.a},data:function(){return{input:"",inputObject:{name:"",value:""},inputObjectVuex:{name:"",value:""},html:'\n               <label>input: </label> \n               <input v-model="input">\n               <p> input: {{input}} </p>\n               ',html1:'\n              <h4>v-model com modifiicador .lazy</h4>\n              <label>input lazy:</label> \n              <input v-model.lazy="input">\n              <p> input: {{input}} </p>\n               ',html2:'\n                  <h4>props/events</h4>\n                  <label>input:</label> \n                  <input @input="inputAction($event)" :value="input">\n                  <p> input: {{input}} </p>\n               ',html3:'\n                  <h4>props common pattern</h4>\n                  <sync-prop \n                    v-bind:name="inputObject.name" \n                    v-on:update:name="inputObject.name = $event"\n\n                    v-bind:value="inputObject.value" \n                    v-on:update:value="inputObject.value = $event"\n                  />\n               ',html4:'\n                  <h4>.sync sugar</h4>\n                  <p>inputObject: {{inputObject}}</p>\n                  <sync-prop v-bind.sync="inputObject" />\n               ',html5:'\n                  <h4>Model Custom</h4>\n                  <model-custom v-model="input"/>\n                  <p>input: {{input}}</p>\n               '}},computed:T({},Object(c["c"])({getName:"getName",getValue:"getValue"}),{name:{get:function(){return this.getName},set:function(t){this.updateName(t)}}}),methods:T({inputAction:function(t){this.input=t.target.value},inputSync:function(t){this.input=t.target.value}},Object(c["b"])({updateName:"updateName"}))},D=A,J=(n("f192"),Object(r["a"])(D,b,g,!1,null,"38f1cd05",null)),U=J.exports,q={name:"home",components:{Teste:U}},B=q,F=Object(r["a"])(B,f,h,!1,null,null,null),G=F.exports;u["a"].use(d["a"]);var H=[{path:"/",name:"home",component:G}],I=new d["a"]({mode:"history",base:"/v-model-guide/",routes:H}),K=I;u["a"].use(v.a,{id:"UA-155066120-1",router:K}),u["a"].config.productionTip=!1,new u["a"]({store:s,router:K,render:function(t){return t(l)}}).$mount("#app")},"60ea":function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.07434feb.png"},f192:function(t,e,n){"use strict";var u=n("60ea"),a=n.n(u);a.a}});
//# sourceMappingURL=app.ba0e90a8.js.map