!function(e){function n(n){for(var t,u,l=n[0],c=n[1],f=n[2],s=0,p=[];s<l.length;s++)u=l[s],r[u]&&p.push(r[u][0]),r[u]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(a&&a(n);p.length;)p.shift()();return i.push.apply(i,f||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],t=!0,l=1;l<o.length;l++){var c=o[l];0!==r[c]&&(t=!1)}t&&(i.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},r={0:0},i=[];function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var a=c;i.push([133,1]),o()}({133:function(e,n,o){o(134),e.exports=o(342)},337:function(e,n,o){var t=o(338);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(132)(t,r);t.locals&&(e.exports=t.locals)},338:function(e,n,o){(e.exports=o(131)(!1)).push([e.i,"#module-1 {\r\n    color: red;\r\n}",""])},340:function(e,n,o){var t=o(341);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(132)(t,r);t.locals&&(e.exports=t.locals)},341:function(e,n,o){(e.exports=o(131)(!1)).push([e.i,"#module-2 {\r\n    color: blue;\r\n}",""])},342:function(e,n,o){"use strict";o.r(n);var t=o(94),r=o.n(t),i=(o(337),{name:"Jane",friends:["Alice","Peter"],greet:function(){var e=this;this.friends.forEach(function(n){console.log("Hi "+n+", I'm "+e.name)})},greet2:function(){this.friends.forEach(function(e){console.log("Hi"+e+", I'm "+this.name)})}});o(340);window.onload=function(){console.log(1050),function(){var e=document.querySelector("#module-1"),n=Symbol("module 1");e.textContent="Hello "+n.toString()}(),document.querySelector("#module-2").textContent=r.a.join(["Module","2"]," "),i.greet()}}});