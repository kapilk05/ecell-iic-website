const clickableElements = document.querySelectorAll(".clickable");
const allContent = document.querySelectorAll("[id$='-content']");

clickableElements.forEach((element) => {
    element.addEventListener("click", function () {
        const id = element.id;
        const content = document.getElementById(`${id}-content`);

        allContent.forEach((element) => {
            element.classList.add("hidden");
        });

        content.classList.remove("hidden");
    });
    // alert("Hello")
});

