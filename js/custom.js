$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.close a').on('click', function (e) {
        e.preventDefault();
        $('.header .top_bar').addClass('on')
    });

    $('.quick_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.main_slide .arrows .left').on('click', function () {
        $('.quick_slide').slick('slickPrev')
    });
    $('.main_slide .arrows .right').on('click', function () {
        $('.quick_slide').slick('slickNext')
    });


    $('.news li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.list li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });
    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

})
