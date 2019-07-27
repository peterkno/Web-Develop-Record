var _ = require('lodash'); //run in web-develope-record root dir
var m = require('./module.js');


console.log(_.join(['Hello', 'Node.js'], ' ')); // Hello + ' ' + Node.js = "Hello Node.js"
console.log(m.name);
console.log(m.version);
m.f();
