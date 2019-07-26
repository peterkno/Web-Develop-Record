window.onload = function() {
    var h1El = document.querySelector('h1');
    h1El.textContent = "Come on!!!!!!";

    h1El.addEventListener('click', function(e) {
        h1El.textContent = "Don't click me!!!";    
    })

    h1El.addEventListener('mouseover', function(e) {
        h1El.textContent = "Stop hovering over me!!!";
        console.log(e.target);
    })

    h1El.addEventListener('mouseout', function(e) {
        h1El.textContent = "Phew, thank you for leaving me alone OuO";
    })
}
