$(document).ready(function() {

    //initial ninja awesome /* :D */ page loading
    
    $('background-wrapper').css('background-image', 'url(\'http://69.145.68.236:10200/greener.jpg\')');
    setTimeout(function(){
        $('#title').fadeIn(100);
    }, 500);
    setTimeout(function() {
        $('#navbar').fadeIn(1000);
    }, 1000);
    setTimeout(function() {
        $('#carosel').fadeIn(1000);
    }, 2000);
    setTimeout(function() {
        $('#footer').fadeIn(1000);
    }, 3000);


    //terms overlay
    
    $('#termsopen').click(function(){
        $('#termblob').css('width','100%');
        $('#termblob').css('height','100%');
        $('#termblob').fadeIn(100);
    });
    $('#termsclose').click(function(){
        $('#termblob').fadeOut(50);
    });
    
    
    //carousel button functions
    var slidenum=1;
    
    $('#carousel_next').click(function(){
       slidenum=slidenum +1;
       if (slidenum >=6){
           slidenum=1; //hopefully a reset. :D
       }
    });
    $('#carousel_prev').click(function(){
       slidenum=slidenum -1;
       if (slidenum <=0){
           slidenum=5; //also hopefully a reset. :D
       }
    });
    
    //the slider
    var currentslide=1;
    
    if (slidenum >= currentslide){
        $('#container').animate({left:'+=450px'});
        currentslide= ++currentslide;
    }
    
    if (slidenum <= currentslide){
        $('#container').animate({left:'-=450px'});
    }
    //show and tell, old code :D

    // $('#carousel_next').click(function(){
    //     switch (slidenumb){
    //         case 5: //it's 5 because 5 is the last slide.
    //             //do nothing? eventually wrap around? or cheat?
    //         break;
    //         default:
    //             //advance a slide
    //             $('#container').animate({left:'450px'});
    //             slidenumb=++slidenumb; //increment marker
    //             //debugging, for now:
    //             $('#carousel_indicator').css('background-color','blue');
    //         break;
    //     }
    // });
    
    //this is my background js:
    
    var backgroundnum = 1;
    var auto_on = false; //I hope this is boolean.
    var backgroundspeed = 500; //might want to switch it later
    
    function toggle_background_auto(){
        auto_on = ! auto_on;
    }
    $('#toggle_background_auto').click(toggle_background_auto());
    
    function background_advance(){
        backgroundnum = ++backgroundnum; //let's hope incrementing works
        if (backgroundnum >=6){
            backgroundnum=1;
        }
    }
    
    $('#carousel_next').click(function(){
       background_advance();
       //kill auto for a while
    });
    
    //advance code, triggered by both the timer (if enabled), and next button:
    
    function background_retreat(){
        backgroundnum = --backgroundnum;
        if (backgroundnum <=0){
            backgroundnum = 6;
        }
    }

    $('#carousel_prev').click(function(){
    background_retreat();
    //kill auto for a while.
    });
    
    
    //the timer:
    while (auto_on === true) { //aparently you use three = to compare with true.
        background_advance();
        //wait for backgroundspeed ms. standalone delay functions?
    }
    
    //start it 5 seconds in? why not.
    //$(document).setTimeout(toggle_background_auto(), 5000)
    //this code is pandora's box. don't let it out again.
    
    
    switch (backgroundnum) {
        case 1:
            //background 1
            $('#backgroundwrapper').css('background-image','url(\'http://69.145.68.236:10200/gray.jpg\')')
            break;
        case 2:
            //background 2
            $('#backgroundwrapper').css('background-image','url(\'http://69.145.68.236:10200/steel.jpg\')')
            break;
        case 3:
            //background 3
            $('#backgroundwrapper').css('background-image','url(\'http://69.145.68.236:10200/amber.jpg\')')
            break;
        case 4:
            //background 4
            $('#backgroundwrapper').css('background-image','url(\'http://69.145.68.236:10200/greener.jpg\')')
            break;
        case 5:
            //background 5
            $('#backgroundwrapper').css('background-image','url(\'http://69.145.68.236:10200/china.jpg\')')
            break;
    }
        
    //using selectable (possibly), help users pick their favorite desktop.
    
    //might work later towards a script or css styling that fixes the background size.
    //use $(window).height();, and a while statement.
});