function onClickMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById('row1').classList.toggle("change-row");
    document.getElementById('row2').classList.toggle("change-row");
    document.getElementById('menu-bg').classList.toggle("change-bg");
}

$("#readmore").hover(function() {
    document.getElementById('readmore').classList.toggle("hvr-icon-forward");
});

 $("#readmore").hover(function(){
    document.getElementById('heading').classList.toggle("hvr-underline-from-left");
 });

 $("#arrow").hover(function(){
     $('#iconid').style.display="inline";
    document.getElementById('arrow').classList.toggle("hvr-icon-forward");
 });


/* Events Gallery */
const $left = $(".left");
const $gl = $(".gallery");
const $gl2 = $(".gallery2");
const $photosCounterFirstSpan = $(".photos-counter span:nth-child(1)"); 

$gl.slick({
    rows: 0,
    slidesToShow: 2,
    arrows: false,
    draggable: false,
    useTransform: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          vertical: true
        }
      }
    ]
  });
   
  $gl2.slick({
    rows: 0,
    useTransform: false,
    prevArrow: ".arrow-left",
    nextArrow: ".arrow-right",
    fade: true,
    asNavFor: $gl
  });

  $(window).on("load", () => {
    handleCarouselsHeight();
    setTimeout(() => {
      $(".loading").fadeOut();
      $("body").addClass("over-visible");
    }, 300);
  });

  function handleCarouselsHeight() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const gl2H = $(".gallery2)").height();
      $left.css("height", gl2H);
    } else {
      $left.css("height", "auto");
    }
  }

  $(window).on(
    "resize",
    _.debounce(() => {
      handleCarouselsHeight();
    }, 200)
  );

/*you have to bind init event before slick's initialization (see demo) */
gl2.on("init", (event, slick) => {
    $photosCounterFirstSpan.text(`${slick.currentSlide + 1}/`);
    $(".photos-counter span:nth-child(2)").text(slick.slideCount);
  });
   
  $gl2.on("afterChange", (event, slick, currentSlide) => {
    $photosCounterFirstSpan.text(`${slick.currentSlide + 1}/`);
  });

$(".gallery .item").on("click", function() {
    const index = $(this).attr("data-slick-index");
    $gl2.slick("slickGoTo", index);
  });



