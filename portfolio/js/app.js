$(function () {

    const worksSlider = $('[data-slider="slick"]')

    /*Filter
    ===========================*/
    let filter = $("[data-filter]");


    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data("filter");

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {

            $("[data-cat]").each(function () {

                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });

        }


    });


    /* header
    ========================== */

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */

    checkSkroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkSkroll(scrollOffset);

    });


    function checkSkroll(scrollOffset) {

        if (scrollOffset >= introH) {
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

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset - 80
        }, 1000);

    });

    /* Menu nav toogle
    ======================================*/

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





    /* Modal
    ===========================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('Show');
        $("body").addClass('no-scroll');
        $("#header").addClass("none");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 300);

        worksSlider.slick('setPosition');


    });

    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        setTimeout(function () {

            modalParent.removeClass('Show');
            $("body").removeClass('no-scroll');
            $("#header").removeClass("none");

        }, 300);



    });

    $(".modal").on('click', function (event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('Show');
            $("body").removeClass('no-scroll');
            $("#header").removeClass("none");
        }, 300);

    });

    $(".modal__dialog").on('click', function (event) {
        event.stopPropagation();
    });



    /* slider: https://kenwheeler.github.io/slick/
    ============================================*/


    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");
    });
    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
    });




});