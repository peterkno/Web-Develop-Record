window.onload = function() {
    var h1 = document.querySelector('h1');
    h1.textContent = 'HELLO JSSSSSSSSSSSS!';
    h1.style.color='red';

    var hno1 = document.getElementById('hno1');
    hno1.textContent = 'HELLO JSSSS!';
    hno1.style.color='blue';

    all = document.querySelectorAll('h2');
    all[0].textContent = 'ALLLLLLLLLLLLLL';
    all[0].style.color = 'yellow';
}