import m1, {n} from "./module-1.js";
import m2 from "./module-2.js";
// import 'babel-polyfill';

window.onload = function() {
    console.log(n);
    m1();
    m2();

    let x;
    for(let i = 0; i < 10; i ++){
        x = "foo";
    }
    console.log(i); //error
    let y = 10;
    if(true){
        y++; //error
    }


};