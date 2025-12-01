(function ($) {
    "use strict";

    /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $(".header-main-wrapper");
    var $html = $("html");
    var $body = $("body");

    windows.on("scroll", function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass("is-sticky");
            } else {
                sticky.addClass("is-sticky");
            }
        }
    });
   
})(jQuery);