window.onload = function() {
    var ans = 60;
    while(true){
        var i = prompt('Guess a number');
        
        if(i < ans)
            alert('To small, guess again\n');
        else if(i > ans)
            alert('To large, guess again\n');
        else{
            console.log('Correct\n');
            break;
        }
    }
    document.querySelector('h1').textContent = 'Correct';
    
}
