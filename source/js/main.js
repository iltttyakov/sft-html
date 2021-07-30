if ($('.make__slider').length) {
  $('.make__slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

if ($('.partners__slider').length) {
  $('.partners__slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

if ($('.usp__slider-arrow--prev').length) {
  $('.usp__slider-arrow--prev').on('click', function () {
    var next = $(".usp__slider-pic--current").prev();

    if (next.length != 0) {
      $(".usp__slider-pic--current").removeClass("usp__slider-pic--current");
      $(next).addClass("usp__slider-pic--current");
    } else {
      $(".usp__slider-pic--current").removeClass("usp__slider-pic--current");
      $('.usp__slider-pic').filter( ':last' ).addClass("usp__slider-pic--current");
    }
  });
}

if ($('.usp__slider-arrow--next').length) {
  $('.usp__slider-arrow--next').on('click', function () {
    var next = $(".usp__slider-pic--current").next();

    if (next.length != 0) {
      $(".usp__slider-pic--current").removeClass("usp__slider-pic--current");
      $(next).addClass("usp__slider-pic--current");
    } else {
      $(".usp__slider-pic--current").removeClass("usp__slider-pic--current");
      $('.usp__slider-pic').filter( ':first' ).addClass("usp__slider-pic--current");
    }
  });
}

if ($('.mobile-control__burger').length) {
  $('.mobile-control__burger').on('click', function () {
    $(this).toggleClass('mobile-control__burger--open');
    $('.menu').slideToggle();
    $('.mobile-control').toggleClass('mobile-control--active');
  });
}

$('.menu-item-has-children').on('click', function (e) {
  e.stopPropagation();
  $(this).toggleClass('menu-item-has-children--open');
  $(this).children('.sub-menu').slideToggle();
});
