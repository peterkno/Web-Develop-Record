window.onload = function() {
    var formEl = document.getElementById('user-form');
    var emailEl = formEl.elements['email'];
    alert(emailEl.value);
    
    var sexEl = formEl.elements['sex'];
    alert(sexEl.options[sexEl.selectedIndex].value);

    var majorEl = formEl.elements['major'];
    for(var i = 0; i < majorEl.options.length; i++) {
        alert(majorEl.options[i].value);
    }

    var gradeEls = formEl.elements['grade'];
    for(var i = 0; i < gradeEls.length; i++) {
        if(gradeEls[i].checked)
            alert(gradeEls[i].value);
    }

    var validEl = formEl.elements['valid'];
    if(validEl.checked)
        alert(validEl.value);
}
