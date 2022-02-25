$(function () {
  "use strict";

  var wind = $(window);

  var main_height = $(".main-height").outerHeight();

  $(".sub-height").outerHeight(main_height);

  // scrollIt
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -60, // offste (in px) for fixed top navigation
  });

  // navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default"),
      logo = $(".navbar .logo> img");

    if (bodyScroll > 300) {
      navbar.addClass("nav-scroll");
      logo.attr("src", "img/logo-dark.png");
    } else {
      navbar.removeClass("nav-scroll");
      logo.attr("src", "img/logo-light.png");
    }
  });

  // button scroll to top
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      button_top = $(".button-top");

    if (bodyScroll > 700) {
      button_top.addClass("button-show");
    } else {
      button_top.removeClass("button-show");
    }
  });
});

$(window).on("load", function () {
  // Preloader
  $(".loading").fadeOut(500);

  // contact form
  $("#contact-form").validator();
  $("#quote-form").validator();

  $("#contact-form").on("submit", function (e) {
    var url = "https://formspree.io/f/mwkyogwk";
    let valid = true;
    $("#contact-form")
      .find("[required]")
      .each(function () {
        if ($(this).is(":invalid") || !$(this).val()) valid = false;
      });

    if (valid) {
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: $(this).serialize(),
        success: function (data) {
          var alertBox =
            '<div class="alert alert-success alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>We have received your query and will get back to you as soon as possible.</div>';
          $("#contact-form").find(".messages").html(alertBox);
          $("#contact-form")[0].reset();
        },
      });
    }
    return false;
  });

  $("#quote-form").on("submit", function (e) {
    var url = "https://formspree.io/f/mwkyogwk";
    let valid = true;
    $("#quote-form")
      .find("[required]")
      .each(function () {
        if ($(this).is(":invalid") || !$(this).val()) valid = false;
      });

    if (valid) {
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: $(this).serialize(),
        success: function (data) {
          var alertBox =
            '<div class="alert alert-success alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>We have received your query and will get back to you as soon as possible.</div>';
          $("#quote-form").find(".messages").html(alertBox);
          $("#quote-form")[0].reset();
        },
      });
    }
    return false;
  });
});
