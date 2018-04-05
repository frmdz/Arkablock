document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

var rPressed = false;
var lPressed = false;

function kup (e) {
  if (e.keyCode == raque_1.der) rPressed = false;
  if (e.keyCode == raque_1.izq) lPressed = false;
}

function kdown (e) {
  if (e.keyCode == raque_1.der) rPressed = true;
  if (e.keyCode == raque_1.izq) lPressed = true;
}
