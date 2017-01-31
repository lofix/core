$(document).ready(function() {

    //Change Navigation when scrolled
    var newNav = function() {
        var stillNav = $(".still-nav");
        // var scrolledNav = $("#movedNav");
        var bars = $(".hamb-bar");

        $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            var stillNavPos = stillNav.offset().top;


            if (scrollPos > 20) {

                // stillNav.hide(300);
                // scrolledNav.show(300);
                stillNav.addClass("scrolled-nav");
                // bars.addClass("scrolled-hamb-bar");

            } else {
                stillNav.removeClass("scrolled-nav");
                // stillNav.show(300);
                // scrolledNav.hide(300);

            }


        })
    };

    //Arrow down button
    var buttonScroll = function() {
        var scrollButton = $(".scroll-down-btn");
        var navHeight = $("#movedNav").height();
        scrollButton.click(function() {
            var destination = $("#know-us");
            $("html, body").animate({
                scrollTop: ($(destination).offset().top - navHeight)
            }, 1000);
        })

    };

    //Desktop navigation scroll
    var desktopNavigation = function() {
            var navigationBar = $("nav")
            var menuItems = navigationBar.find("li");
            var navHeight = $("nav").height();
            var mobileNavigation = $(".mobile-navigation");
            menuItems.click(function() {
                var destination = $(this).data("name");
                $("html, body").animate({
                    scrollTop: ($(destination).offset().top - navHeight)
                }, 1000);
                mobileNavigation.hide();

            })

        }
        //Hamburger navigation

    var hamburgerNavigation = function() {
        var hamburgerMenu = $(".hamburger");
        var mobileNavigation = $(".mobile-navigation");
        hamburgerMenu.click(function() {
            mobileNavigation.slideToggle();
            console.log("klik");
        })
    }


    hamburgerNavigation();
    desktopNavigation();
    newNav();
    buttonScroll();
})
