$(function() {


    /* Slick slider */

    $('#home__slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
      });

      $('#materials__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
      });


      /* Slick scroll */

      $("#arrow-down").on("click", function(e) {
        e.preventDefault();

        let elementHeight = $(".page").height();

        $("html, body").animate({
            scrollTop: elementHeight
        }, 700);
      });


});