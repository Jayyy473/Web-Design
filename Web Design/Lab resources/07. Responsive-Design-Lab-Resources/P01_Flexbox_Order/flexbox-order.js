// Dark mode toggle on double-click anywhere
document.body.addEventListener("dblclick", () => {
  document.body.classList.toggle("dark");
});

// Collapse/expand individual asides on click
document.querySelectorAll("aside").forEach(a => {
  a.addEventListener("click", () => {
    a.classList.toggle("hide");
  });
});

// Restore button: show all hidden asides
const restoreBtn = document.getElementById("restoreBtn");
restoreBtn.addEventListener("click", () => {
  document.querySelectorAll("aside.hide").forEach(a => a.classList.remove("hide"));
});
