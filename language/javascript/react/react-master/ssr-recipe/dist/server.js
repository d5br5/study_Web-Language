(()=>{"use strict";var r={783:(r,n,t)=>{var e=t(81),o=t.n(e),c=t(645);t.n(c)()(o()).push([r.id,".Blue{\r\n  background: blue;\r\n  font-size: 1.5rem;\r\n  color:white;\r\n  width: 128px;\r\n  height: 128px;\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}",""])},643:(r,n,t)=>{var e=t(81),o=t.n(e),c=t(645);t.n(c)()(o()).push([r.id,".Red{\r\n  background: red;\r\n  font-size: 1.5rem;\r\n  color:white;\r\n  width: 128px;\r\n  height: 128px;\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}",""])},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,c){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(i[u]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);e&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={id:e,exports:{}};return r[e](c,c.exports,t),c.exports}t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{const r=require("react");var n=t.n(r);const e=require("react-dom/server");var o=t.n(e);const c=require("express");var i=t.n(c);const a=require("react-router-dom");t(643),t(783);var u=i()();u.use((function(r,t,e){var c=n().createElement(a.StaticRouter,{location:r.url,context:{}},n().createElement("div",null,"hi")),i=o().renderToString(c);t.send(i)})),u.listen(5e3,(function(){return console.log("Running on http://localhost:5000")}))})()})();