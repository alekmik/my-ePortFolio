const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  if (link.pathname == activePage) {
    link.classList.add("active");
    link.classList.remove("style-nav-links");
  }
});
