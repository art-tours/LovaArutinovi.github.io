$(document).ready(function () {
    $(function () {
        let header = $('.header'),
            headerH = header.innerHeight(),
            scrollOffset = $(window).scrollTop();

        /* Fixed Header */
        // checkSkroll(scrollOffset);
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
        $("[data-scroll]").on("click", function (event) {
            event.preventDefault();

            var $this = $(this),
                blockId = $(this).data('scroll'),
                blockOffset = $(blockId).offset().top - headerH;

            // console.log(blockOffset)

            document.querySelector('.nav').classList.remove('active');
            document.querySelector('.header__burger').classList.remove('active');

            $("html, body").animate({
                scrollTop: blockOffset
            }, 1000);
        });
    });
    $('.intro__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true
    });
    $('.awards__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint:1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.memberships__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint:1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
    });
    /************ project slider */

    document.querySelector('.projects__slider').style.height = document.querySelector('.projects__slider-item').clientHeight + 'px';
    let projectDotBox = document.querySelector('.project__slider-dots');
    let projectItem = document.querySelectorAll('.projects__slider-item');

    for (let i = 0; i < projectItem.length; i++) {
        let projectDot = document.createElement('button');

        projectDot.classList.add('project__slider-dot');
        projectDot.setAttribute('data-slide', i + 1);
        projectDotBox.appendChild(projectDot);
        document.querySelector('.project__slider-dot:first-child').classList.add('active');
    }

    let projectDots = document.querySelectorAll('.project__slider-dot');

    document.querySelector('.projects__slider-item.active .projects__slider-img img + img').src = document.querySelector('.projects__slider-item.active + .projects__slider-item .projects__slider-img img').src;
    document.querySelector('.projects__slider-item.active .projects__slider-img img + img + img').src = document.querySelector('.projects__slider-item.active + .projects__slider-item + .projects__slider-item .projects__slider-img img').src;


    for (let i = 0; i < projectDots.length; i++) {
        projectDots[i].onclick = function () {



            for (let k = 0; k < projectDots.length; k++) {
                projectDots[k].classList.remove('active');
            }
            this.classList.add('active');
            let activeSlide = projectDots[i].getAttribute('data-slide') - 1;

            for (let k = 0; k < projectItem.length; k++) {
                projectItem[k].classList.remove('active');
                projectItem[activeSlide].classList.add('active');
            }




            if (activeSlide + 1 == projectItem.length) {
                activeSlide = -1;
            }
            let projectImg = projectItem[activeSlide + 1].querySelector('.projects__slider-img img');

            document.querySelector('.projects__slider-item.active .projects__slider-img img + img').src = projectImg.src;
            if (activeSlide + 2 == projectItem.length) {
                activeSlide = -2;
            }
            let projectImg2 = projectItem[activeSlide + 2].querySelector('.projects__slider-img img');
            document.querySelector('.projects__slider-item.active .projects__slider-img img + img + img').src = projectImg2.src;
            document.querySelector('.projects__slider').style.height = document.querySelector('.projects__slider-item.active').clientHeight + 'px';
        }

    }




    document.querySelector('.header__burger').onclick = function () {
        this.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('active');
    }
});