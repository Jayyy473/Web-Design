document.querySelectorAll(".learn-more, .subscribe-now").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#444";   
    btn.style.color = "#fff";             
    btn.style.transition = "0.3s";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "";      
    btn.style.color = "";
  });
});


// Toggle mobile menu
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

if (menuIcon && nav) {
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
