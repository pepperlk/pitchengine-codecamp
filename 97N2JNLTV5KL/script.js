$(document).ready(function() {
    //terms
    $('#open_terms').click(function(){$('#terms').fadeIn(1000);});
    $('#terms').click(function(){$('#terms').fadeOut(500);});
    
    //tour
    var auto=false;
    var slide=1;
    var avoid = function(slide){  //clear the slides besides the current one.
        /*var smaller = slide -1; //pick number smaller than slide
        if (slide != 1){ //as long as I'm not moving slide 1, also this check might not be necisary
            while(smaller !== 0){ //while it isn't moving something that isn't there
                var moveleft = '$(\'#' + smaller + '\')'; //build the jquery object
                moveleft.animate({'margin-left':'-650px'},4000); //move it left
                --smaller;
            }
        }
        var larger = slide + 1;
        if (slide != 5){
            while(larger != 6){
                var moveright = '$(\'#' + larger + '\')';
                moveright.animate({'margin-left':'650px'},4000);
                ++larger;
            }
        }*/
        for (var move=1; move <6; move++){
            switch(true){
                case move==slide:
                    $('#move').animate({'margin-left':'0px'},4000);
                    break;
                case move<slide:
                    $('#move').animate({'margin-left':'-650px'},4000);
                    break;
                case move>slide:
                    $('#move').animate({'margin-left':'650px'},4000);
                    break;
            }
        }
    };
    var query_arrows = function(slide){  //re-implementing a singular reversable hiding/showing previous button
        /*if (slide == 1){                    // yay! now to get it into a switch statement :D
            $('#prev').slideUp(2000);
            $('#next').slideDown(200);
        }
        if (slide < 5 && slide > 1){
            $('#prev').slideDown(2000);
            $('#next').slideDown(2000);
        }
        if (slide == 5){
            $('#prev').slideDown(2000);
            $('#next').slideUp(2000);
        }*/
        switch(true){
            case slide == 1:
                $('#prev').slideUp(2000);
                $('#next').slideDown(2000);
                break;
            /*case slide > 1 && slide < 5: //this was fun to figure out :D
                $('#prev').slideDown(2000);  //using default now.
                $('#next').slideDown(2000);
                break;*/
            case slide == 5:
                $('#prev').slideDown(2000);
                $('#next').slideUp(2000);
                break;
            default:
                $('#prev').slideDown(2000);
                $('#next').slideDown(2000);
        }
    };
    var request = function(slide){  //pull the requested slide in.
    switch(slide){ //will eventually tie the .backgrounds into this, negating the .css change :D
        case 1:
            $('#1').animate({'left':'0'},4000);
            $('#steel').animate({'left':'0'},4000);
            $('#2').animate({'left':'100%'},4000);
            $('#gray').animate({'left':'100%'},4000);
            break;
        case 2:
            $('#1').animate({'left':'-100%'},4000);
            $('#steel').animate({'left':'-100%'},4000);
            $('#2').animate({'left':'0'},4000);
            $('#gray').animate({'left':'0'},4000);
            $('#3').animate({'left':'100%'},4000);
            $('#amber').animate({'left':'100%'},4000);
            break;
        case 3:
            $('#2').animate({'left':'-100'},4000);
            $('#gray').animate({'left':'-100'},4000);
            $('#3').animate({'left':'0'},4000);
            $('#amber').animate({'left':'0'},4000);
            $('#4').animate({'left':'100%'},4000);
            $('#greener').animate({'left':'100%'},4000);
            break;
        case 4:
            $('#3').animate({'left':'-100%'},4000);
            $('#amber').animate({'left':'-100%'},4000);
            $('#4').animate({'left':'0'},4000);
            $('#greener').animate({'left':'0'},4000);
            $('#5').animate({'left':'100%'},4000);
            $('#china').animate({'left':'100%'},4000);
            break;
        case 5:
            $('#4').animate({'left':'-100'},4000);
            $('#greener').animate({'left':'-100'},4000);
            $('#5').animate({'margin-left':'0'},4000);
            $('#china').animate({'margin-left':'0'},4000);
            break;
        default:
            $('#error').slideDown(1000);break;
    }};
    $('#next').click(function(){++slide; query_arrows(slide); request(slide)});
    $('#prev').click(function(){--slide; query_arrows(slide); request(slide)});
    //initial ninja awesome :D page loading
    setTimeout(function(){request(slide);}, 500); //I love this function.
    //avoid(slide);
    setTimeout(function(){$('#title').slideDown(2000);}, 500);
    setTimeout(function(){$('#navbar').slideDown(2000);}, 1000);
    setTimeout(function(){$('#start_tour').slideDown(2000);}, 2000);
    setTimeout(function(){$('#footer').slideDown(1000);}, 3000);
    setTimeout(function(){$('#start_tour').addClass('red');}, 2500);
    $('#start_tour').click(function(){
        //set the stage
        $('#stage').fadeIn(1000);
        $('#start_tour').fadeOut(500);
        $('#navbar').slideUp(2000);
        $('#title').slideUp(2000);
        $('#footer').slideUp(2000);
        request(slide);
        query_arrows(slide);
        //start the timer
        /*auto=true;*/ //can't do that D:
        });
});