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
    var header = $("#header"),
        link1 = $("#link1"),
        link2 = $("#link2"),
        link3 = $("#link3"),
        link4 = $("#link4"),
        link5 = $("#link5"),
        introH = $("#intro").innerHeight(),
        servicesH = $("#services").innerHeight(),
        meetH = $("#meet").innerHeight(),
        appH = $("#app").innerHeight(),
        haw_worksH = $("#haw-works").innerHeight(),
        footerH = $("#footer").innerHeight(),
        nolik = 0 - 90,
        block1 = introH - 90,
        block2 = introH + servicesH - 90,
        block3 = introH + servicesH + meetH - 90,
        block4 = introH + servicesH + meetH + appH - 90,
        block5 = introH + servicesH + meetH + appH + haw_worksH - 90,
        block6 = introH + servicesH + meetH + appH + haw_worksH + footerH - 90;

         $(window).on("scroll", function () {

            dashoreba = $(this).scrollTop();

            if(dashoreba>0 && dashoreba< block1){
                $("#link1").addClass("active");
            }
            else{
                $("#link1").removeClass("active");
            }

            if(dashoreba>block3 && dashoreba< block4){
                $("#link2").addClass("active");
            }
            else{
                $("#link2").removeClass("active");
            }
            if(dashoreba>block2 && dashoreba< block3){
                $("#link3").addClass("active");
            }
            else{
                $("#link3").removeClass("active");
            }
            if(dashoreba>block5 && dashoreba< block6){
                $("#link5").addClass("active");
            }
            else{
                $("#link5").removeClass("active");
            }
            });

});