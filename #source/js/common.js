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















    // animation




    const carouselText = [
        { text: "compurer scientist" },
        { text: "tech entrepreneur" },
        { text: "marketing specialist" }
    ]

    $(document).ready(async function () {
        carousel(carouselText, "#feature-text")
    });

    async function typeSentence(sentence, eleRef, delay = 100) {
        const letters = sentence.split("");
        let i = 0;
        while (i < letters.length) {
            await waitForMs(delay);
            $(eleRef).append(letters[i]);
            i++
        }
        return;
    }

    async function deleteSentence(eleRef) {
        const sentence = $(eleRef).html();
        const letters = sentence.split("");
        let i = 0;
        while (letters.length > 0) {
            await waitForMs(100);
            letters.pop();
            $(eleRef).html(letters.join(""));
        }
    }

    async function carousel(carouselList, eleRef) {
        var i = 0;
        while (true) {
            updateFontColor(eleRef, carouselList[i].color)
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1500);
            await deleteSentence(eleRef);
            await waitForMs(500);
            i++
            if (i >= carouselList.length) { i = 0; }
        }
    }

    function updateFontColor(eleRef, color) {
        $(eleRef).css('color', color);
    }

    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }




});