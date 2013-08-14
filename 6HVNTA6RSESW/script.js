$(document).ready(function(){
    $(".blowup").click(function(){
        $(this).toggle("explode");
        
    });

    $(".startover").click(function(){
        $(this).toggle("explode");
        setTimeout(function() {
            $(".blowup").css("display", "inline-block");
        }, 1000);
    });

});