$('.reviewers').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
});

var burger = document.getElementById("burger");
var nav = document.getElementById("nav");


burger.onclick = function(){
    this.classList.toggle("active");
    nav.classList.toggle("active");
}


$(function() {

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();
 
 
    /* Fixed Header */
    checkSkroll(scrollOffset);
 
    $(window).on("scroll", function() {
 
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
});