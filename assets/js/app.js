$(function() {


    // Slick slider

    $("#home__slick").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
      });

      $("#materials__slick").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear',
      });



      // Slick scroll

      $("#arrow-down").on("click", function(e) {
        e.preventDefault();

        let elementHeight = $(".page").height();

        $("html, body").animate({
            scrollTop: elementHeight
        }, 700);
      });



      // Slider progress

      let homeSlider = $(".js-home__slick-item");
      let homeSliderWidth = $("#slider-progress").width();
      let homeSliderAmount = homeSlider.length;
      let homeSliderWidthCurrent = $("#slider-progress_width-current");
      let homeSliderCalcChange = (1 / homeSliderAmount) * homeSliderWidth;

      $(homeSliderWidthCurrent).css("width", (homeSliderCalcChange) + "px");

      $("#home__slick").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        let homeSliderCalc = ((nextSlide + 1) / homeSliderAmount);
        homeSliderCalcChange =+ homeSliderCalc * homeSliderWidth;

        $(homeSliderWidthCurrent).animate({
          width: homeSliderCalcChange,
        }, 500);
      });

      if (homeSliderAmount < 10) {
        $("#slider-progress_finish").html("0" + homeSliderAmount);
      } else {
        $("#slider-progress_finish").html(homeSliderAmount);
      }


});