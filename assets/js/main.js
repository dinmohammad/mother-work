(function ($) {
    "use strict";

    $('.youtube-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) {
                        var match = url.match(/[?&]v=([^&]+)/);
                        return match && match[1] ? match[1] : null;
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    const swiper = new Swiper(".mother_work_video_slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
        },
    });

    $(window).on("scroll resize", function () {
        var $sticky = $(".header-main-wrapper"),
            scroll = $(window).scrollTop(),
            headerHeight = $sticky.height(),
            windowWidth = $(window).width();

        if (windowWidth >= 320) {
            $sticky.toggleClass("is-sticky", scroll >= headerHeight);
        } else {
            $sticky.removeClass("is-sticky");
        }
    });


    







})(jQuery);


