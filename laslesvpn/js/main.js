$(document).ready(function () {
    $('.plan__link').on('click', function () {
        event.preventDefault();
        $('.plan__link').closest('.plan__box').removeClass('active');
        this.closest('.plan__box').classList.toggle("active");
    });
    $(function(){
        let header = $('.header'),
            headerH = header.innerHeight(),
            scrollOffset = $(window).scrollTop();
            
        /* Fixed Header */
        // checkSkroll(scrollOffset);
        $(window).on("scroll", function(){
            scrollOffset = $(this).scrollTop();

            checkSkroll(scrollOffset);
        });
        function checkSkroll(scrollOffset) {
            if( scrollOffset >= headerH ) {
               header.addClass("fixed");
            } else {
               header.removeClass("fixed");
            }
        }
        $("[data-scroll]").on("click" , function(event){
            event.preventDefault();
      
            var $this = $(this),
                blockId = $(this).data('scroll'),
                blockOffset = $(blockId).offset().top - headerH;

                console.log(blockOffset)
      
            $("#nav a").removeClass("active");
            $this.addClass("active");
      
            $("html, body").animate({
               scrollTop: blockOffset
            },1000);
         });
    });

    document.querySelector('.header__burger').onclick = function(){
        this.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('active');
    }
    $('.costumers__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<input type="button" class="slick-arrow slick-prev">',
        nextArrow: '<input type="button" class="slick-arrow slick-next">',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});