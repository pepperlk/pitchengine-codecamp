$(document).ready(function() {

    //clickable buttons
    
    $('#termsopen').click(function(){
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
    
    //initial ninja awesome page loading
    
    setTimeout(function(){
        $('#title').fadeIn(100);
    }, 500);
    setTimeout(function() {
        $('#navbar').fadeIn(1000);
    }, 1000);
    setTimeout(function() {
        $('#content').fadeIn(1000);
    }, 2000);
    setTimeout(function() {
        $('#backing').fadeIn(1000);
    }, 2000);
    setTimeout(function() {
        $('#footer').fadeIn(1000);
    }, 3000);
    
    //background switcher, independant of carousel (for now)
    
        //the actual css background change (it doesn't actually work):
        $('body').delay(5000).css('background-image', 'url(\'http://69.145.68.236:10200/amber.jpg\')').delay(5000).css('background-image', 'url(\'http://69.145.68.236:10200/gray.jpg\')').delay(5000).css('background-image', 'url(\'http://69.145.68.236:10200/steel.jpg\')');
    
        //and a div i'm using to hide it while it swaps out:
        //$('hidebackground').fadeTo(100, 'slow' ).delay(400).;
    
    //adhoc carousel code
        //will get back to this later...
    
});
/*please don't change this*/