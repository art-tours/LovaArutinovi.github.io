$(function() {

   var header = $("#header"),
       introH = $("#intro").innerHeight(),
       scrollOffset = $(window).scrollTop();


   /* Fixed Header */
   checkSkroll(scrollOffset);

   $(window).on("scroll", function() {

      scrollOffset = $(this).scrollTop();

      checkSkroll(scrollOffset);

   });


   function checkSkroll(scrollOffset) {

      if( scrollOffset >= introH ) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }

   }

   /* Smooth scroll */

   $("[data-scroll]").on("click" , function(event){
      event.preventDefault();

      var $this = $(this),
          blockId = $(this).data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
         scrollTop: blockOffset
      },1000);
   });


   /* Menu nav toogle */
   $("#nav-toogle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");

   });


   $("#nav a").on("click", function(event) {
      $("#nav").removeClass("active");
      $("#nav-toogle").removeClass("active");
   });
   


   /* Collapse */

   // $("[data-collapse]").on("click", function(event) {
   //    event.preventDefault();

   //    var $this = $(this),
   //        blockId = $(this).data('collapse');

   //    $this.toggleClass("active");

   // });
   
   $(".accardion-item").on("click", function(event) {
      var $this = $(this);

      $this.toggleClass("active");
   });
   $(".accardion-item .accardion-content").hide().prev().click(function() {
      $(".accardion-item .accardion-content").not(this).slideUp();
      $(this).next().not(":visible").slideDown();
   });


   /* slider */
   $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1
  });



});