// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
//   $("nav").toggleClass("navbar-dark", $(this).scrollTop() <= 20);
//   $("nav").toggleClass("navbar-light", $(this).scrollTop() > 20);
// });


var width = $(window).width();
$(window).on("resize", function () {
  console.log("hello");
  if ($(this).width() !== width) {
    width = $(this).width();
    if (width <= 1200) {
      if ($(".navbar-collapse").hasClass("show")) {
        closeNavOnClickingOutside();
      }
    }
  }
});

$(".nav-link").click(() => {
  $(".navbar-toggler").click();
});

if (width < 1200) {
  closeNavOnClickingOutside();
}

function closeNavOnClickingOutside() {
  $("body > *")
    .not("body > nav")
    .click(() => {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-toggler").click();
      }
    });
}
