// 1. Show a thank-you message when the form is submitted
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    form.reset();
  });
}

// 2. Highlight the field currently being typed into
document.querySelectorAll("input, textarea").forEach(field => {
  field.addEventListener("focus", () => {
    field.style.backgroundColor = "#e0ffe0";
  });
  field.addEventListener("blur", () => {
    field.style.backgroundColor = "";
  });
});
