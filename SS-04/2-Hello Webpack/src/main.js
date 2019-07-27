import m1, {n} from "./module-1.js";
import m2 from "./module-2.js";
// import 'babel-polyfill';

window.onload = function() {
    console.log(n);
    m1();
    m2();
};