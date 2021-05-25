/** user drop down menu  */
let userIcon = document.querySelector('.header__user-icon');
let userAction = document.querySelector('.header__user-action');

userIcon.onclick = function () {
   userAction.classList.toggle('active')
}
/** small windows in main table */
let windowCall = $("[data-open-window]");
let windowO = document.querySelectorAll('.table__head-window');

windowCall.on('click', function (event) {

   let $this = $(this);
   let windowCallId = $this.data('open-window');

   for (i = 0; i < windowO.length; i++) {
      if (windowO[i].id != windowCallId) {
         windowO[i].classList.remove('active')
      }
   }
   let windowToOpen = $('#' + windowCallId);

   windowToOpen.toggleClass('active');

   let tableHeadCol = $('.table__head-col');
   for (i = 0; i < tableHeadCol.length; i++) {
      window.addEventListener('mouseup', e => {
         if (!tableHeadCol.is(e.target) && tableHeadCol.has(e.target).length === 0) {
            windowToOpen.removeClass('active');
         }
      });
   }
});


/** close report menu on click outside the window */
let openReportSent = $('.photo-report__header-autosend');
let reportSent = $('.report-sent');
let reportSentInner = $('.report-sent__inner');

// $('.photo-report__header-autosend').onclick = function (){
//    console.log('1')
//    // reportSent.addClass('active');
// }
window.addEventListener('mouseup', e => {
   if (!reportSentInner.is(e.target) && reportSentInner.has(e.target).length === 0) {
      reportSent.removeClass('active');
   }
});


/** table slider */

let myTableSlider = new Swiper('.table__item-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slidesPerView: 'auto',
   watchOverflow: true,
   slideToClickedSlide: true,
   spaceBetween: 10,
   observe: true,
   observeParents: true,
   observeSlideChildren: true,
});
/** modal slider open */
let openSlider = $("[data-open-modal-slider]");
let closeSlider = $('.modal-slider__close')


openSlider.on('click', function (event) {
   $('body').addClass('no-scroll');
   smallSlider = '';
   mainSlider = '';
   let $this = $(this);
   let openSliderId = $this.data('open-modal-slider');

   smallSlider = '#' + openSliderId + " " + ".modal-slider__small";
   mainSlider = '#' + openSliderId + " " + ".modal-slider__main";
   modalContent = '#' + openSliderId + " " + ".modal-slider__content";
   
document.querySelector(modalContent).setAttribute("style",  "overflow-y:scroll; -webkit-overflow-scrolling:touch;");


   $('.modal-slider__main-slide').zoom({
      magnify: 1.5,
      callback: function () {
         $(this).colorbox({
            href: this.src
         });
      }
   });

   let windowToOpen = $('#' + openSliderId);
   windowToOpen.addClass('active');
   $(mainSlider).slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: smallSlider,
      nextArrow: "<button type='button' class='slick-arrow slick-next pull-right'><img src='img/right-arrow.svg'></button>",
      prevArrow: "<button type='button' class='slick-arrow slick-prev pull-left'><img src='img/left-arrow.svg'></button>",
   });

   $(smallSlider).slick({
      infinite: false,
      slidesToShow: 10,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
      asNavFor: mainSlider,
      responsive: [{
            breakpoint: 1366,
            settings: {
               slidesToShow: 8,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 7,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 445,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            }
         },
      ]
   });
});
/** */
/*img zooom*/


closeSlider.on('click', function (event) {
   $('body').removeClass('no-scroll');
   let $this = $(this);
   $this.parents('.modal-slider').removeClass('active');
});


/** answer to comment */
let answerButton = document.querySelectorAll('.modal-slider__comment-action-answer');

for (i = 0; i < answerButton.length; i++) {
   answerButton[i].onclick = function () {
      $(this).parents('.modal-slider__comment').find('.modal-slider__comment-answer').toggleClass('active')
   }
}



/** report sent window */
let recipientsWindow = document.querySelector('.recipients');
let recipientsWindowOpen = document.querySelector('.photo-report__header-send');
let recipientsWindowClose = document.querySelector('.recipients__close');

recipientsWindowOpen.onclick = function (e) {
   $('body').addClass('no-scroll');
   e.preventDefault();
   recipientsWindow.classList.add('active');
}
recipientsWindowClose.onclick = function (e) {
   $('body').removeClass('no-scroll');
   e.preventDefault();
   recipientsWindow.classList.remove('active');
}