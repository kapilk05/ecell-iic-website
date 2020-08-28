function extendVid() {
  $("video").addClass("extend-vid");
  $(".fullscreen-video-wrap").addClass("extend-vid");
  $(".header-overlay").addClass("extend-vid");
}

function unextendVid() {
  $("video").removeClass("extend-vid");
  $(".fullscreen-video-wrap").removeClass("extend-vid");
  $(".header-overlay").removeClass("extend-vid");
}

$(".navbar-toggler").click(() => {
  if (!$(".navbar-collapse").hasClass("show")) {
    extendVid();
  } else {
    unextendVid();
  }
});

var width = $(window).width();
$(window).on("resize", function () {
  if ($(this).width() !== width) {
    width = $(this).width();
    if (width > 1200) {
      if ($(".navbar-collapse").hasClass("show")) {
        unextendVid();
      }
    } else {
      if ($(".navbar-collapse").hasClass("show")) {
        extendVid();
      }
    }
  }
});

$(".nav-link").click(() => {
  $(".navbar-toggler").click();
});

$("body > *")
  .not("body > nav")
  .click(() => {
    $(".navbar-toggler").click();
  });
