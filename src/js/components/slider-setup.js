$(document).on('ready', function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-item',
  });
  $('.slider-item').slick({
    slidesToShow: 3,

    slidesToScroll: 3,
    draggable: false,
    asNavFor: '.slider-for',

    centerMode: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,

          appendArrows: $('.slider-for'),
        },
      },
    ],
  });
});
