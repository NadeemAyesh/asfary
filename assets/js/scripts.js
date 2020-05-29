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

    // gallery-slider Slider
    if ($('.gallery-slider .owl-carousel').length > 0) {
        $('.gallery-slider .owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            autoplay: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-arrow-left fa-fw"></i>', '<i class="fa fa-arrow-right fa-fw"></i>'],
            items: 1,
            dotsContainer: '#carousel-custom-dots'
        });

        $('.owl-dot').click(function () {
            $('.gallery-slider .owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    }

    $('.trip-item').hover(function () {
        $(this).find('.trip-caption > p').slideDown();

        $('.trip-item').mouseleave(function () {
            $(this).find('.trip-caption > p').slideUp();
        });
    });

    $('.collapse-item h5').on('click', function () {
        if ($(this).find('i').hasClass('fa-minus')) {
            $(this).find('i').addClass('fa-plus');
            $(this).find('i').removeClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-plus');
            $(this).find('i').addClass('fa-minus');
        }
        $(this).parent().find('.collapse-it').slideToggle();
    });

});