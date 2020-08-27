const { get } = require("http");

function onClickMenu() {
  document.getElementById("hamburger").classList.toggle("change");
  document.getElementById("row1").classList.toggle("change-row");
  document.getElementById("row2").classList.toggle("change-row");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

$("#readmore").hover(function () {
  document.getElementById("readmore").classList.toggle("hvr-icon-forward");
});

$("#readmore").hover(function () {
  document
    .getElementById("heading")
    .classList.toggle("hvr-underline-from-left");
});

$("#arrow").hover(function () {
  $("#iconid").style.display = "inline";
  document.getElementById("arrow").classList.toggle("hvr-icon-forward");
});

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
  $("nav").toggleClass("navbar-dark", $(this).scrollTop() <= 20);
  $("nav").toggleClass("navbar-light", $(this).scrollTop() > 20);
});

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fha3NoaXNoYWgiLCJhIjoiY2tjMzBhd2p2MjI1NjJybmFlazh6Y2RudCJ9.MhchJI1OMSvcS4v_N354FQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [72.837424, 19.108731],
  zoom: 12.5,
});
// disable map zoom when using scroll
map.scrollZoom.disable();
var marker = new mapboxgl.Marker().setLngLat([72.837424, 19.108731]).addTo(map);

function showForm() {
  document.getElementById("idea_submission").style.display = "block";
  $("html,body").animate(
    {
      scrollTop: $("#idea_submission").offset().top,
    },
    100
  );
}

function showStudent() {
  document.getElementById("studentInfo").style.display = "flex";
  document.getElementById("No").onclick = function () {
    document.getElementById("studentInfo").style.display = "none";
  };
}

$("#submit_idea").click(function (event) {
  event.preventDefault();
  console.log("hi");
  $(".toast").addClass("show");
  setTimeout(() => {
    $(".toast").removeClass("show");
  }, 5000);
  console.log("bye");
});

filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card-container");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show_events");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show_events");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("live");
    current[0].className = current[0].className.replace(" live", "");
    this.className += " live";
  });
}
