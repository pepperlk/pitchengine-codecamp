$(document).ready(function() {
    $('#title').fadeIn(1000);
    setTimeout(function() {
        $('#navbar').slideDown(1000);
    }, 500);
    setTimeout(function() {
        $('#content').fadeIn(1000);
    }, 2000);
    /*$('#carosel').setInterval(function(){
        $('link[id="style"]').html('rel', 'starter.css');
        setTimeout(function() {
            $('link[id="style"]').html('rel', 'amber.css');
        }, 2000);
        setTimeout(function() {
            $('link[id="style"]').html('rel', 'steel.css');
        }, 2000);
        setTimeout(function() {
            $('link[id="style"]').html('rel', 'grass.css');
        })
    }, 60000);*/
});
/*please don't change this*/