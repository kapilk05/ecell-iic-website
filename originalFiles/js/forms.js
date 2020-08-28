const ideaScriptURL =
  "https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec";
const ideaForm = document.forms["idea"];

ideaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(ideaScriptURL, { method: "POST", body: new FormData(ideaForm) })
    .then(alert("Details updated"))
    .then(ideaForm.reset())
    .then($("#description").val(""))
    .catch((error) => console.error("Error!", error.message));
});

const contactScriptURL =
  "https://script.google.com/macros/s/AKfycbwk1hTys494MwG7wqYbQ4yhon8LwoZltz4JLbFh7lEASsabBcBf/exec";
const contactForm = document.forms["contact"];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(contactScriptURL, { method: "POST", body: new FormData(contactForm) })
    .then(alert("Details updated"))
    .then(contactForm.reset())
    .then($("#message").val(""))
    .catch((error) => console.error("Error!", error.message));
});
