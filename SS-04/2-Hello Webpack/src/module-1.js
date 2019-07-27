import _ from 'lodash';

export default function() {
    var el = document.querySelector('#module-1');
    el.textContent = _.join(["Module", "1"], " ");
}

export var n = 1050;