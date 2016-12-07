// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    var windowHeight = $(window).height(),
        windowWidth=$(window).width(),
        landing = $(".landing"),
        navBar = $(".navbar.navbar-inverse");

    //alert(windowWidth);

    //Landing Page Size
    landing.css("height",(windowHeight-49));
    navBar.attr("data-offset-top",(windowHeight - 52));

    //Landing Page on Resize
    $(window).on("resize", function() {
        landing.css("height", (windowHeight - 49));
        navBar.attr("data-offset-top", (windowHeight - 52));
    });

    //Contact Section Size
    //$("#contactSection").css("height",(windowHeight - 109));

    //Contact Section on Resize
    //$(window).on("resize", function() {
    //    $("#contactSection").css("height", (windowHeight - 109));
    //});

    //Smooth Scrolling
    $('nav a, a#arrow').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 49
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // initialize WOW for animation
    new WOW().init();
}); // end ready
