/**
 * Created by Bernadette on 7/27/2016.
 */

// Copyright Year
var d = new Date(), n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){

    //Landing Page Size
    $(".landing").css("height",($(window).height()-49));
    $(".navbar.navbar-inverse").attr("data-offset-top",($(window).height() - 52));

    //Landing Page on Resize
    $(window).on("resize", function() {
        $(".landing").css("height", ($(window).height() - 49));
        $(".navbar.navbar-inverse").attr("data-offset-top", ($(window).height() - 52));
    });

    //Contact Section Size
    //$("#contactSection").css("height",($(window).height()-109));

    //Contact Section on Resize
    //$(window).on("resize", function() {
    //    $("#contactSection").css("height", ($(window).height()-109));
    //});

    var windowWidth=$(window).width();
    //alert(windowWidth);

    //Smooth Scrolling
    $('nav a, a#arrow').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 49
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // initialize WOW for animation
    new WOW().init();
});
