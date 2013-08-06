$(document).ready(function() {
var auto=false;
var slide=0;
var speed=7000;
//tour
var request = function(slide){
    switch(true){ //take care of the arrows:
    case slide <= 1:
        $('#prev').slideUp(2000);
        $('#next').slideDown(2000);
        break;
    case slide >= 7:
        $('#prev').slideUp(2000);
        $('#next').slideUp(2000);
        break;
    default:
        $('#prev').slideDown(2000);
        $('#next').slideDown(2000);
    }
/*    switch(slide){ //trying to fix this bellow
        case 1:
            $('#I1').animate({'left':'0'},speed);
            $('#I2').animate({'left':'100%'},speed);
            break;
        case 2:
            $('#I1').animate({'left':'-100%'},speed);
            $('#I2').animate({'left':'0'},speed);
            $('#I3').animate({'left':'100%'},speed);
            break;
        case 3:
            $('#I2').animate({'left':'-100%'},speed);
            $('#I3').animate({'left':'0'},speed);
            $('#I4').animate({'left':'100%'},speed);
            break;
        case 4:
            $('#I3').animate({'left':'-100%'},speed);
            $('#I4').animate({'left':'0'},speed);
            $('#I5').animate({'left':'100%'},speed);
            break;
        case 5:
            $('#I4').animate({'left':'-100%'},speed);
            $('#I5').animate({'left':'0'},speed);
            $('#I6').animate({'left':'100%'},speed);
            break;
        case 6:
            $('#I5').animate({'left':'-100%'},speed);
            $('#I6').animate({'left':'0'},speed);
            $('#I7').animate({'left':'100%'},speed);
            break;
        case 7:
            $('#I6').animate({'left':'-100%'},speed);
            $('#I7').animate({'left':'0'},speed);
            break;
        default:
            break;
    }*/
    //var stage=$('.slide');
for (var move=0; move < 5; move++){ // I've got to make this work somehow.
switch(true){
    case move==slide: //pull slide(s) into view
        $($('.slide')[move]).animate({'left':'0'},speed);
        break;
    case move<slide: //move slide(s) to left
        $($('.slide')[move]).animate({'left':'-100%'},speed);
        break;
    case move>slide: //move slide(s) to right
        $($('.slide')[move]).animate({'left':'100%'},speed);
        break;
    }
}
};
//initial ninja awesome :D page loading
setTimeout(function(){$('#title').slideDown(1000);}, 500);
setTimeout(function(){$('#footer').slideDown(1000);}, 1000);
$('#credits').fadeIn(1000);
//buttons
setTimeout(function(){
    $('#credits').fadeOut(500);
    $('#title').slideUp(2000);
    $('#footer').slideUp(2000);
    request(slide);
    auto=true;
},4000);
$('#next').click(function(){++slide; request(slide); auto=!auto});
$('#prev').click(function(){--slide; request(slide); auto=false});
});