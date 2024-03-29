$(function() {

    let home = $("#home");
    let header = $("#header");
    let nav = $("#nav");
    let burger = $("#burger");

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
        /* autoplay: true,
        autoplaySpeed: 10000, */
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

      function sliderAmount(homeSliderAmount) {

        if (homeSliderAmount < 10) {
          $("#slider-progress_finish").html("0" + homeSliderAmount);
        } else {
          $("#slider-progress_finish").html(homeSliderAmount);
        }

      }

      let homeSlider = $(".js-home__slick-item");
      let homeSliderWidth = $("#slider-progress").width();
      let homeSliderAmount = homeSlider.length;
      let homeSliderWidthCurrent = $("#slider-progress_width-current");
      let homeSliderCurrent = 1;
      let homeSliderCalcChange = (homeSliderCurrent / homeSliderAmount) * homeSliderWidth;
      let homeSliderCalc;

      $(homeSliderWidthCurrent).css("width", (homeSliderCalcChange) + "px");


      $("#home__slick").on("beforeChange", function(event, slick, currentSlide, nextSlide) {

        homeSliderCurrent = nextSlide + 1;
        homeSliderWidth = $("#slider-progress").width();
        homeSliderCalc = (nextSlide + 1) / homeSliderAmount;
        homeSliderCalcChange =+ homeSliderCalc * homeSliderWidth;

        $(homeSliderWidthCurrent).animate({
          width: homeSliderCalcChange,
        }, 500);

      });

      $(window).on("resize", function() {

        homeSliderWidth = $("#slider-progress").width();

        homeSliderCalcChange = (homeSliderCurrent / homeSliderAmount) * homeSliderWidth;
        $(homeSliderWidthCurrent).css("width", (homeSliderCalcChange) + "px");

      });

      sliderAmount(homeSliderAmount);



      // Burger

      $(burger).on("click", function() {

        let deviceHeight = $(window).height();
        let headerHeight = $(header).height();
        let isClass = "show";

        $(nav).toggleClass("show");
        $(header).toggleClass("show");
        $(this).toggleClass("show");

        $(nav).css("height", (deviceHeight - headerHeight + 100) + "px");
        $("html, body").toggleClass("hidden");

        if (!$(nav).hasClass(isClass)) {
          $(nav).css("height", "auto");
        }

        $(window).on("resize", function() {

          let deviceWidth = $(this).width();
          let deviceHeight = $(window).height();
          let headerHeight = $(header).height();

          if (deviceWidth > 991) {
            $(nav).css("height", "auto");
          } else {
            $(nav).css("height", (deviceHeight - headerHeight + 100) + "px");
          }

        });


    });




});