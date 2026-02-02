$(document).ready(function () {

    // Home page banner slider code start here 
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


    // scroll to top on click
    const btn = document.querySelector('.scroll_top');
    window.addEventListener('scroll', () =>
        btn.classList.toggle('show', window.scrollY > 200)
    );
    btn.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Sticky to top on click
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header_wrapper");

        if (window.scrollY > 100) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });


    // Inspect Not show code start here
    // (() => {
    //     document.oncontextmenu = e => e.preventDefault();
    //     document.onkeydown = e => {
    //         if (
    //             e.keyCode === 123 ||
    //             (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) ||
    //             (e.ctrlKey && [85, 83, 80].includes(e.keyCode))
    //         ) return e.preventDefault();
    //     };
    //     setInterval(() => {
    //         if (outerWidth - innerWidth > 160 || outerHeight - innerHeight > 160) {
    //             document.body.innerHTML = '';
    //             alert('Inspect Disabled 🚫');
    //         }
    //     }, 400);
    // })();




    AOS.init();

});
