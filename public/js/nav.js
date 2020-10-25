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

// $(".navbar-toggler").click(() => {
//   if (!$(".navbar-collapse").hasClass("show")) {
//     extendVid();
//   } else {
//     unextendVid();
//   }
// });

var width = $(window).width();
$(window).on("resize", function () {
  // console.log("hello");
  if ($(this).width() !== width) {
    width = $(this).width();
    if (width > 1200) {
      if ($(".navbar-collapse").hasClass("show")) {
        // unextendVid();
      }
    } else {
      if ($(".navbar-collapse").hasClass("show")) {
        // extendVid();
        closeNavOnClickingOutside();
      }
    }
  }
});

$(".nav-link").click(() => {
  if(width<1200)
  setTimeout(() => {
    $(".navbar-toggler").click();
  }, 900);
});

$("#get-in-touch").click(() => {
  if(width<1200)
  setTimeout(() => {
    $(".navbar-toggler").click();
  }, 900);
});

if (width < 1200) {
  closeNavOnClickingOutside();
}

function closeNavOnClickingOutside() {
  $("body > *")
    .not("body > nav")
    .click(() => {
      if (width<1200 && $(".navbar-collapse").hasClass("show")) {
        $(".navbar-toggler").click();
      }
    });
}
