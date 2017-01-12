// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        landing = $(".landing"),
        navBar = $(".navbar.navbar-inverse");

    //alert(windowWidth);

    //Landing Page Size
    landing.css("height",(windowHeight - 49));
    navBar.attr("data-offset-top",(windowHeight - 52));

    //Landing Page on Resize
    $(window).on("resize", function() {
        landing.css("height", (windowHeight - 49));
        navBar.attr("data-offset-top", (windowHeight - 52));
    });

    //Contact Section Size
    /*
    $("#contactSection").css("height",(windowHeight - 109));

    //Contact Section on Resize
    $(window).on("resize", function() {
        $("#contactSection").css("height", (windowHeight - 109));
    });
    */

    // Smooth scrolling to all links in navbar and arrow
    $(".navbar a, #arrow").on('click', function(event) {
        event.preventDefault();

        // Smooth Page Scroll
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
        }); // end animate callback
    }); // end onclick

    // Entrance Animation Scroll
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top,
                winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        }); // end each
    }); // end scroll

    // initialize WOW for animation
    new WOW().init();
}); // end ready
