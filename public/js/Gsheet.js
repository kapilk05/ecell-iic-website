var $form = $("form#startup_idea"),
  url =
    "https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec";

$("#submit_idea").on("click", function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
  })
    .success
    // Do what you want with this Uper all yours!
    ();
});

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec";
// const form = document.forms["e-cell"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then(alert("Details updated"))
//     .then(location.reload())
//     .catch((error) => console.error("Error!", error.message));
// });
