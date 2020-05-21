/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";

    // inialize animate WOW Js
    new WOW().init();

    if ($('.js-example-basic-single').length > 0) {
        $('.js-example-basic-single').select2();
    }

    if ($('.js-example-basic-single-no-search').length > 0) {
        $('.js-example-basic-single-no-search').select2({ minimumResultsForSearch: -1 });
    }

    // trips-slider Slider
    if ($('.trips-slider .owl-carousel').length > 0) {
        $('.trips-slider .owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            autoplay: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left fa-fw"></i>', '<i class="fa fa-arrow-right fa-fw"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                },
                991: {
                    items: 3,
                }
            }
        });
    }

    // activtiy-slider Slider
    if ($('.activtiy-slider .owl-carousel').length > 0) {
        $('.activtiy-slider .owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            autoplay: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left fa-fw"></i>', '<i class="fa fa-arrow-right fa-fw"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                },
                991: {
                    items: 3,
                }
            }
        });
    }

    // activtiy-slider Slider
    if ($('.partner-slider .owl-carousel').length > 0) {
        $('.partner-slider .owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            autoplay: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left fa-fw"></i>', '<i class="fa fa-arrow-right fa-fw"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // activtiy-slider Slider
    if ($('.team-slider .owl-carousel').length > 0) {
        $('.team-slider .owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            autoplay: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left fa-fw"></i>', '<i class="fa fa-arrow-right fa-fw"></i>'],
            items: 1
        });
    }

    $('.trip-item').hover(function () {
        $(this).find('.trip-caption > p').slideDown();

        $('.trip-item').mouseleave(function () {
            $(this).find('.trip-caption > p').slideUp();
        });
    });

});