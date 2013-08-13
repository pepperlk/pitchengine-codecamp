$(document).ready(function() {
    $('img').mouseenter(function() {
        
        var left = parseInt($(this).css('margin-left'));
        
        if ($(this).hasClass('showText')){
            left -= 300;
        }
        else {
            left += 300;
        }
        
        $(this).css('margin-left', left + 'px');
        $(this).toggleClass('showText');
    });
});