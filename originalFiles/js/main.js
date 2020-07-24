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

/* Events Gallery */
