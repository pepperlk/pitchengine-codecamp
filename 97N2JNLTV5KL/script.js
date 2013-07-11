$(document).ready(function() {

    //initial ninja awesome page loading

    setTimeout(function(){
        $('#title').fadeIn(100);
    }, 500);
    setTimeout(function() {
        $('#navbar').fadeIn(1000);
    }, 1000);
    setTimeout(function() {
        $('#carousel').fadeIn(1000);
    }, 2000);
    setTimeout(function() {
        $('#footer').fadeIn(1000);
    }, 3000);


    //clickable buttons
    
    $('#termsopen').click(function(){
        $('#termblob').css('width','100%');
        $('#termblob').css('height','100%');
        $('#termblob').fadeIn(100);
    });
    $('#termsclose').click(function(){
        $('#termblob').fadeOut(50);
    });
    $('#previous').click(function(){
        ('#carousel').carosel('previous'); //it's just gibberish... deal.
    });
    $('#next').click(function(){
        ('#carousel').carousel('next');
    });
    
    //background switcher, independant of carousel (for now)
    
        //the actual css background change (it doesn't actually work):
        $('body')
        .delay(5000)
        .css('background-image', 'url(\'http://69.145.68.236:10200/amber.jpg\')')
        .delay(5000)
        .css('background-image', 'url(\'http://69.145.68.236:10200/gray.jpg\')')
        .delay(5000)
        .css('background-image', 'url(\'http://69.145.68.236:10200/steel.jpg\')');

    //adhoc carousel code
        //will get back to this later...
        //use .click functions on arrows vs on parts of carousel
        //use some .slide
    
    //using selectable (possibly), help users pick their favorite desktop.
    
    //
    //this code works by looking for the width of the debugging div.
    if ($('#debugging').css('width') <= '20' )
        if($('#debugging').css('height') >= '25'){
            $('#backing').css('background-color', 'orange');
        
            //cascade menus?
    };
    //I can't get either of these functions to detect the color, or width of the
    //div itself. D:
    if ($('#debugging').css('background-color' == 'red')){
        $('#errorMessage').text($(this).data('Not built for this system, yet'));
    }
    if ($('#debugging').css('background-color' == 'green')){
        $('#errorMessage').text($(this).data('all good'));
    }
    
    //is broken code
    var current=$('body').height();
    var finish=$(window).height();
    while (current != finish){
        current=(current + 1)
        $('body').css('background-size', current)
        $('#debuging')
    }
});