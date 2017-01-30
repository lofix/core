$(document).ready(function() {

    //Change Navigation when scrolled
    var newNav = function() {
            var stillNav = $("#stillNav");
            var scrolledNav = $("#movedNav");

            $(window).scroll(function() {
                var scrollPos = $(window).scrollTop();
                var stillNavPos = stillNav.offset().top;


                if (scrollPos > 20) {

                    stillNav.hide(300);
                    scrolledNav.show(300);

                } else {

                    stillNav.show(300);
                    scrolledNav.hide(300);

                }


            })
        }
        //Arrow down button

    var buttonScroll = function() {

    }
    newNav();
})
