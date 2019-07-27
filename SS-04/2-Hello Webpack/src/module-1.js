import _ from 'lodash';
import './module-1.css';

export default function() {
    var el = document.querySelector('#module-1');

    let module = "module 1";
    el.textContent = `Hello ${module}`;
    // el.textContent = _.join(["Module", "1"], " ");
}

export var n = 1050;

export var user = {
    name: 'Jane',
    friends: ['Alice', 'Peter'],
    greet: function() {
        // this will be user
        this.friends.forEach(f => {
            console.log('Hi ' + f + ", I'm " + this.name);
        });
    },
    greet2: function() {
        // this will be windows.onload
        this.friends.forEach(function(element) {
            console.log("Hi" + element + ", I'm " + this.name);
        });
    } 
};