$(function() {
    "use strict";

    // Caching Variables
    var htmlAndBody = $("html, body"),
        navbar = $("nav .navbar-nav li a");
    // Remove The Animation Of The Loader
    $(window).on("load", function() {
        $(".overpage").fadeOut(1000);
    });

    // Moving Links To Sections

    navbar.click(function() {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    navbar.on("click", function() {
        htmlAndBody.animate({
                scrollTop: $("." + $(this).data("name")).offset().top,
            },
            1000
        );
    });
    navbar.on("click", function() {
        htmlAndBody.animate({
                scrollTop: $("." + $(this).data("name")).offset().top,
            },
            1000
        );
    });

    /* Up To Header Button Functions */
    // Define The Variables
    var scrollTopBtn = $(".scroll-top");

    // Make Up To Header Button Visible
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            scrollTopBtn.css("right", "20px");
        } else {
            scrollTopBtn.css("right", "-60px");
        }
    });

    // Make Up To Header Button Navigate To Top
    scrollTopBtn.on("click", function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            400
        );
    });
});

// Trigger Glider Slider
new Glider(document.querySelector(".glider"), {
    draggable: true,
    dots: "#dots",
    scrollPropagate: true,
    scrollLock: true,
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
    responsive: [{
            // screens greater than >= 575px
            breakpoint: 575,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25,
            },
        },
        {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25,
            },
        },
    ],
});