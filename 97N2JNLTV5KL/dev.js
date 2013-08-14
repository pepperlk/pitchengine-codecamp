$(document).ready(function() {
var slide=0;
var auto=true;
var request = function(slide){
    switch(true){
        case slide < 0:
            slide = $('.slide').length -1;
            break;
        case slide > $('.slide').length -1:
            slide = 1;
            break;
    }
    for (var move=0; move < $('.slide').length; move++){
        var hide=move-1;
    switch(true){
        case move==slide:
            $($('#shelf img')[hide]).addClass('hide');
            $($('.slide')[move]).addClass('active');
            $($('.slide')[move]).removeClass('right left');
            break;
        case move<slide:
            $($('#shelf img')[hide]).removeClass('hide');
            $($('.slide')[move]).addClass('left');
            $($('.slide')[move]).removeClass('active right');
            break;
        case move>slide:
            $($('#shelf img')[hide]).removeClass('hide');
            $($('.slide')[move]).addClass('right');
            $($('.slide')[move]).removeClass('active left');
            break;
    }}
    $('#frosted').fadeTo(400,0);
    $('#frosted').fadeTo(1600,.7);
};
setTimeout(function(){
    $('#frosted').fadeTo(2000,.7);
    $('#shelf').fadeTo(2000,1);
    $('.slide').fadeTo(2000,1);
},2000);
setInterval(function(){
    if (auto===true){
    request(slide);
    ++slide;
    if (slide == $('.slide').length){slide=0}
}},4000);
$('#shelf img').click(function(){auto=false;slide=parseInt($(this).attr('data-id'));request(slide)});
});