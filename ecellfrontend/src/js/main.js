import $ from "jquery";
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
