// window.change(function () {
//   if (!$(".navbar-toggle").hasClass("collapsed")) {
//     console.log("expand");
//     $("video").addClass("extend-vid");
//     $(".fullscreen-video-wrap").addClass("extend-vid");
//     $(".header-overlay").addClass("extend-vid");
//   } else {
//     console.log("collapse");
//     $("video").toggleClass("extend-vid");
//     $(".fullscreen-video-wrap").toggleClass("extend-vid");
//     $(".header-overlay").toggleClass("extend-vid");
//   }
// });

function extend() {
  if (window.innerWidth <= 992) {
    if (!$(".navbar-collapse").hasClass("show")) {
      $("video").addClass("extend-vid");
      $(".fullscreen-video-wrap").addClass("extend-vid");
      $(".header-overlay").addClass("extend-vid");
    } else {
      $("video").toggleClass("extend-vid");
      $(".fullscreen-video-wrap").toggleClass("extend-vid");
      $(".header-overlay").toggleClass("extend-vid");
    }
  }
}

function clickNavLink() {
  console.log(!$(".navbar-toggle").hasClass("collapsed"));
  if (!$(".navbar-toggle").hasClass("collapsed")) {
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-collapse").toggleClass("show");
    extend();
  }
}

function clickToggler() {
  if ($(".navbar-collapse").hasClass("show")) {
    $(".navbar-toggler").click();
  }
}

$(".navbar-toggler").click(extend);

$(".nav-link").click(clickNavLink);

$("main").click(clickToggler);
$(".v-header").click(clickToggler);

$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#takeup").fadeIn(200); // Fade in the arrow
  } else {
    $("#takeup").fadeOut(200); // Else fade out the arrow
  }
});
$("#takeup").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});
