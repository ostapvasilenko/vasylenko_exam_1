let slider = $(document).ready(function () {
  $('.gallery__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }, 
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
});

$(document).ready(function() {
  $('.menu__icon').click(function(){
    $('body').toggleClass('menu_shown');
  });
});
