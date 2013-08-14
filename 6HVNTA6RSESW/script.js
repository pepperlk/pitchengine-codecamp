$(document).ready(function(){
    $(".blowup").click(function(){
        $(this).toggle("explode");
        
    });

    $(".startover").click(function(){
        $(this).toggle("explode");
        setTimeout(function() {
            $(".blowup").css("display", "block");
            $(".startover").css("display", "block");
        }, 1000);
    });

});