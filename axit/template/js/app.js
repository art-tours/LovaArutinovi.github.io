$(function () {
    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */

    checkSkroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkSkroll(scrollOffset);

    });


    function checkSkroll(scrollOffset) {

        if (scrollOffset >= headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        

        $("html, body").animate({
            scrollTop: blockOffset - 30
        }, 1000);

    });

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();

        navToggle.toggleClass("active__burger");

        nav.toggleClass("show");
        $("#nav a").on("click", function (event) {
            $("#nav").removeClass("show");
            navToggle.removeClass("active__burger");
        });
    });
});