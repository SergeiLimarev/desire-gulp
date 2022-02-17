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

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="../images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="../images/arrow-slide-right.svg" alt="arrow right"></button>',
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

});
