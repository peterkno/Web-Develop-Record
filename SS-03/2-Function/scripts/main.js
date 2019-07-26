window.onload = function() {
    var el = document.querySelector('h1');
    el.textContent = usr.greet();
}

function greet() {
    return 'Hi, I am ' + this.name
}

var usr = {
    name : 'Jane'
};
usr.greet = greet;