window.onload = function() {
    var trs = document.querySelectorAll('tr');
    
    for(var i = 0; i < trs.length; i++) {
        var tr = trs[i];
        var data = parseInt(trs[i].textContent, 10);
        console.log(i.toString(10) + " :   " + data.toString(10));
        tr.addEventListener('click', (function(d) {
            return function() {
                d = d + 1000;
                this.textContent = d.toString(10);
                this.style.backgroundColor = "red";
            }
        }) (data));
        tr.addEventListener('contextmenu', (function(d) {
            return function() {
                d = d - 100;
                this.textContent = d.toString(10);
                this.style.backgroundColor = "white";
            }
        }) (data)) ;
    }
    /*
    for(var i = 0; i < trs.length; i++) {
        var data = parseInt(trs[i].textContent, 10);
        tr.addEventListener('mouseover', function(e) {
            this.data = data + 1000;
            this.textContent = data.toString;
            this.style.backgroundColor = "red";
        });

        tr.addEventListener('mouseleave', function(e) {
            this.data = data - 100;
            this.textContent = data.toString;
            this.style.backgroundColor = "white"; 
        });
    }
    */
    /* BAD
    for(var i = 0; i < trs.length; i++) {
        var tr = trs[i];
        tr.addEventListener('mouseover', function(e) {
            tr.textContent = "Leave Me Alone!!!!";
            tr.style.backgroundColor = "red";
        });

        tr.addEventListener('mouseleave', function(e) {
           tr.textContent = "Touch Me!!!!";
           tr.style.backgroundColor = "white"; 
        });
    }
    */
}
