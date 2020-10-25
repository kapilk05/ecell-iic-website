const ideaScriptURL =
  "https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec";
const ideaForm = document.forms["idea"];

ideaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("input[name=Student]:checked").val() == "No") {
    $("#stream").val("");
    $("#year").val("");
  }
  fetch(ideaScriptURL, { method: "POST", body: new FormData(ideaForm) })
    .then(() => {
      ideaForm.reset();
      $("#stream").val("CSE");
      $("#year").val("FE");
      swal({
        title: "Idea Submitted!",
        text: "We'll review your idea and get in contact with you soon",
        icon: "success",
      });
    })
    .catch((error) =>
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
      })
    );
});

const contactScriptURL =
  "https://script.google.com/macros/s/AKfycbwk1hTys494MwG7wqYbQ4yhon8LwoZltz4JLbFh7lEASsabBcBf/exec";
const contactForm = document.forms["contact"];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(contactScriptURL, { method: "POST", body: new FormData(contactForm) })
    .then(() => {
      contactForm.reset();
      swal({
        title: "Thank you",
        text: "We'll get in contact with you soon",
        icon: "success",
      });
    })
    .catch((error) =>
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
      })
    );
});
