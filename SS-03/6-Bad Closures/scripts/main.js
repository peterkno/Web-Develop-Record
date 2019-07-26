window.onload = function() {
    var trs = document.querySelectorAll('tr');
    
    for(var i = 0; i < trs.length; i++) {
        var tr = trs[i];
        tr.addEventListener('mouseover', function(e) {
            this.textContent = "Leave Me Alone!!!!";
            this.style.backgroundColor = "red";
        });

        tr.addEventListener('mouseleave', function(e) {
           this.textContent = "Touch Me!!!!";
           this.style.backgroundColor = "white"; 
        });
    }
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
