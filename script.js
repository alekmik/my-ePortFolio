const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    link.classList.remove("style-nav-links");
  }
});

// Résumé typewritter
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: false,
});
typewriter
  .typeString("Bonjour, je suis ")
  .typeString(
    '<strong><span style="color: #7fb4ff;">Alek Mikolajek</span></strong>'
  )
  .start();
