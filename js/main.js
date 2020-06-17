$(document).ready(function () {
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

                // console.log(blockOffset)
      
            // $("#nav a").removeClass("active");
            // $this.addClass("active");
      
            $("html, body").animate({
               scrollTop: blockOffset
            },1000);
         });
    });

    document.querySelector('.header__burger').onclick = function(){
        this.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('active');
    }
    document.querySelector('.nav a').onclick = function(){
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('.nav').classList.remove('active');
    }
    
});