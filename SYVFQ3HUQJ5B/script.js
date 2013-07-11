$(document).ready(function(){
   
   $("#dis").mouseenter(function(){
        $(this).css("background-color", "red");
        $(this).click(function(){
           $("*").fadeOut("slow") ;
        });
    }); 
    
    $("#dis").mouseleave(function(){
         $(this).css("background-color", "#191919");
        $(this).click(function(){
           $("*").fadeOut("slow") ;
        });
        
    });
    
    
    
    
});