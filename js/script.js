$(document).ready(function () {

    $('.banner_slider').slick({
        infinite: true,
        autoplay: false,
        speed: 1000,
        swipe: true,
        fade: true,
        arrows: true,
        nextArrow: $('.enjoy_next'),
        prevArrow: $('.enjoy_prev'),
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Video section MAIN SLIDER → VERTICAL
    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
        infinite: false,
        speed: 800,
        cssEase: 'ease-in-out',
        asNavFor: '.video_slider_nav'
    });

    // Video section NAV SLIDER → FADE
    $('.video_slider_nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        speed: 500,
        asNavFor: '.video-slider'
    });












    AOS.init();

});
