$(document).ready(function() {
    
    $('#the_10').animate({left: 550}, 'slow');
    
    $('#jquery_example').click(function() {
        $(this).fadeOut()
    });
    
    $('#jquery_example2').click(function() {
        $(this).addClass('red');
    });
    
    $('#center').click(function() {
        $("#menu").toggleClass('hidden');
    });
    
    $('#thenter').click(function() {
        $("#menu2").toggleClass('hidden2');
    });
});


function startTrivia()
{
    alert("What's your favorite color?");
}