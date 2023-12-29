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
