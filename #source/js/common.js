$(document).ready(function () {
    // $('.hamburger-slim').click(function () {
    //     $(this).toggleClass('active');

    // });

    // testimonials slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 40,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
                autoHeight: true,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 40,
                autoHeight: false,
            },

        },
    });

    // padding left

    function sliderLeftPadding() {
        let windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            halfSpace = (windowWidth - containerWidth) / 2;
        $('.swiper.mySwiper').css('padding-left', halfSpace + 'px')
    }
    sliderLeftPadding();

    $(window).resize(function () {
        sliderLeftPadding();
    })

    // show menu
    $('.hamburger-slim').click(function () {
        $('.navsect').addClass('show');
        $('.menushadow').addClass('show');
        // $('body').addClass('body_overflowhid');
    });
    $('.closemenu, .menushadow ').click(function () {
        $('.navsect').removeClass('show');
        $('.menushadow').removeClass('show');
        // $('body').removeClass('body_overflowhid');
    });


    // accordeon

    $('.accordeon__title').click(function () {
        $(this).toggleClass('show');
        $(this).next('.accordeon-body').slideToggle();
    });










});