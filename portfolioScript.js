/**
 * Created by Bernadette on 7/30/2016.
 */

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
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
    /*
    $("#contactSection").css("height",($(window).height()-109));

    //Contact Section on Resize
    $(window).on("resize", function() {
        $("#contactSection").css("height", ($(window).height()-109));
    });
    */

    var windowWidth=$(window).width();
    alert(windowWidth);

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
        });
    });

    // Entrance Animation Scroll
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    // parallax scrolling with stellar.js
    $(window).stellar();

    // initialize WOW for animation
    new WOW().init();
})
