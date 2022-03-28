document.addEventListener('DOMContentLoaded', function(){
    // alert('Script Loaded');

    var btnstart = document.querySelector('#start');

    btnstart.addEventListener('click', function(event){
        document.getElementById("form_start").scrollIntoView({
            behavior: 'smooth'
        });   
    });

    var btnsubmit = document.querySelector('#submit');

    btnsubmit.addEventListener('click', function(event){
     alert('FORM SUBMITED SUCCESSFULLY!');
     document.getElementById("body").scrollIntoView({
        behavior: 'auto'
    });

    });  
    
});
