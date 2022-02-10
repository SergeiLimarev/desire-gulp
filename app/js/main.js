$(function () {

    $('.header__btn').on('click', function () {
        $('.right-side-menu').removeClass('right-side-menu--close');
    });
    $('.right-side-menu__close').on('click', function () {
        $('.right-side-menu').addClass('right-side-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

});
