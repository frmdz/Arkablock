document.addEventListener("keydown", kdown);
 document.addEventListener("keyup", kup);

var rPressed = false;
var lPressed = false;

function kup (e) {
  if (e.keyCode == raque_1.der) rPressed = false;
  else if (e.keyCode == raque_1.izq) lPressed = false;
}

function kdown (e) {
  if (e.keyCode == raque_1.der) rPressed = true;
  else if (e.keyCode == raque_1.izq) lPressed = true;
}
