!function(o){function e(e){for(var n,i,l=e[0],c=e[1],f=e[2],s=0,p=[];s<l.length;s++)i=l[s],t[i]&&p.push(t[i][0]),t[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(o[n]=c[n]);for(a&&a(e);p.length;)p.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var o,e=0;e<u.length;e++){for(var r=u[e],n=!0,l=1;l<r.length;l++){var c=r[l];0!==t[c]&&(n=!1)}n&&(u.splice(e--,1),o=i(i.s=r[0]))}return o}var n={},t={0:0},u=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=o,i.c=n,i.d=function(o,e,r){i.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},i.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,e){if(1&e&&(o=i(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)i.d(r,n,function(e){return o[e]}.bind(null,n));return r},i.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(e,"a",e),e},i.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var a=c;u.push([133,1]),r()}({133:function(o,e,r){r(134),o.exports=r(342)},337:function(o,e,r){var n=r(338);"string"==typeof n&&(n=[[o.i,n,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(132)(n,t);n.locals&&(o.exports=n.locals)},338:function(o,e,r){(o.exports=r(131)(!1)).push([o.i,"#module-1 {\r\n    color: red;\r\n}",""])},340:function(o,e,r){var n=r(341);"string"==typeof n&&(n=[[o.i,n,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(132)(n,t);n.locals&&(o.exports=n.locals)},341:function(o,e,r){(o.exports=r(131)(!1)).push([o.i,"#module-2 {\r\n    color: blue;\r\n}",""])},342:function(o,e,r){"use strict";r.r(e);var n=r(66),t=r.n(n);r(337),r(340);window.onload=function(){console.log(1050),document.querySelector("#module-1").textContent=t.a.join(["Module","1"]," "),document.querySelector("#module-2").textContent=t.a.join(["Module","2"]," ");for(var o=0;o<10;o++)"foo";console.log(i)}}});