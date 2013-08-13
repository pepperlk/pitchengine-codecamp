$(document).ready(function() {
    
    $('#the_10').animate({left: 550}, 'slow');
    
    $('#jquery_example').click(function() {
        $(this).fadeOut()
    });
    
    $('#jquery_example2').click(function() {
        $(this).addClass('red');
    });
    
    $('#center').click(function() {
        $("#menu").toggleClass('hidden');
    });
    
    $('#thenter').click(function() {
        $("#menu2").toggleClass('hidden2');
    });
});

function startSurvey()
{
var good = "Nice choice, Spiderman is way better though.";


var user = prompt("What SuperHero are you (or do you wanna be), Flash, Superman, Aquaman, Batman or Spiderman?").toUpperCase();

switch(user) {
    case 'FLASH':
        alert(good);
        var flash = prompt("Who Should star as the flash in his upcoming movie?")
            alert("That's cool, I know " + flash + " he's a good actor")
        break;
    
    case 'SUPERMAN':
        alert(good)
        prompt("Who would win, Superman, or Thor?").toUpperCase();
            if ("SUPERMAN") {
                alert("DEFINETLY! Thank you!!!")
            } else if ("THOR") {
                alert("REALLY! C'mon!!! He wouldn't stand a chance against the man of steel!")
            } else {
                alert("I didn't understand that check your spelling.")
            }
        break;
    
    case 'AQUAMAN':
        alert("Really? Aquaman? Nobody gives a crap about Aquaman! I'm gonna stop asking you questions now!");
        break;
    
    case 'BATMAN':
        alert(good)
        prompt("What do you think about the new Batman movie with Superman? good or bad?").toUpperCase();
            if ("GOOD" || "BAD") {
                alert("Interesting, very interesting.");
            } else {
                alert("It's a simple question! You don't have to make no sense!");
            }
        break;
    
    case 'SPIDERMAN':
        alert("BEASTY! He is the best hero though, for SURE!")
        prompt("What do you think about the new amazing spider man movie? Good or Bad?").toUpperCase()
        prompt("Also, whats better about spiderman, webs, or climbing?").toUpperCase();
            if ("GOOD" && "CLIMBING") {
                alert("Nice, I chose those two too!");
            } else if ("GOOD" || "CLIMBING") {
                alert("Cool, I chose one of those answers.");
            } else {
                alert("I guess that's okay.");
            }
        break;
    
    default:
        alert("That's not an option! pick one of the 5 above.");
        break;
    }
}

function alertOfSent()
{
    alert("Thank you, I should be able to send you my contact information via E-mail or phone within the next month.")
}