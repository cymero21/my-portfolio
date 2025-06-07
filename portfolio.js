const menuToggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links a");

menuToggle.addEventListener("click", ()=> {
  links.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", ()=> {
    links.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});