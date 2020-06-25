$(document).on('ready', function () {
  $('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-custom',
  });
  $('.slider-custom').slick({
    slidesToShow: 3,

    slidesToScroll: 3,
    draggable: false,
    asNavFor: '.slider-content',

    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 7,
          arrows: true,

          // prevArrow: $('.slider-custom__left-block'),
          // nextArrow: $('.slider-custom__right-block'),
          appendArrows: $('.slider-content'),
        },
      },
    ],
  });
});
